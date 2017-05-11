document.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {


    // Назначаем события щелчка для всплывающих кнопок
    document.querySelector('#yes').addEventListener('click', Yes);
    document.querySelector('#no').addEventListener('click', No);
    var currentTabId;


    // Получить идентификатор текущей вкладки
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        currentTabId = tabs[0].id;


    // Получить все запросы, которые эта вкладка сделала во время обновления
        chrome.runtime.sendMessage({
                action: "requests",
                tab: currentTabId
            },
            function(value) { GetRequests(value) }
        );
    });
}


// создаем наш флажок для текущей вкладки и всех запросов, отправленных до сих пор
function GetRequests(requests) {
    var html = '';
    for (var index = 0; index < requests['made'].length; index++) {
        html = html + '<li><input type="checkbox"> ' + requests['made'][index] + '</li>';
    }
    for (var index = 0; index < requests['blocked'].length; index++) {
        html = html + '<li><input type="checkbox" checked> ' + requests['blocked'][index] + '</li>';
    }
    document.getElementById('hosts').innerHTML = html;
}

//Уведомления
function sendNotification(title, options) {
    // Проверим, поддерживает ли браузер HTML5 Notifications
    if (!("Notification" in window)) {
        alert('Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.');
    }

    // Проверим, есть ли права на отправку уведомлений
    else if (Notification.permission === "granted") {
        // Если права есть, отправим уведомление
        var notification = new Notification(title, options);

        function clickFunc() { console.log('Пользователь кликнул на уведомление'); }

        notification.onclick = clickFunc;
    }

    // Если прав нет, пытаемся их получить
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function(permission) {
            // Если права успешно получены, отправляем уведомление
            if (permission === "granted") {
                var notification = new Notification(title, options);
            //    alert("Права успешно пол!");

            } else {
                alert('Вы запретили показывать уведомления'); // Юзер отклонил наш запрос на показ уведомлений
            }
        });
    } else {
        // Пользователь ранее отклонил наш запрос на показ уведомлений
        // В этом месте мы можем, но не будем его беспокоить. Уважайте решения своих пользователей.
    }
}

function Yes() {

    // Здесь есть 3 вложенных асинхронных вызова. Сначала получите текущие заблокированные URL-адреса, затем сохраните новый
    // в своем обратном вызове. При обратном вызове для сохранения отправьте сообщение resync на background.js

    chrome.storage.sync.get(["url"], function(result) {
        var array = result['url'] ? result['url'] : [];
        var newItems = [];
        var items = document.getElementsByTagName('li');
        // Перебираем все элементы. Добавить отмеченные элементы в список заблокированных и удалить непроверенные
        for (var index = 0; index < items.length; index++) {
            if (items[index].firstChild.checked) {
                newItems[newItems.length] = items[index].innerText.trim();
            } else {

                // удалить, если текущий элемент уже существует
                var currentURL = items[index].innerText.trim();
                var withWWW;
                var withoutWWW;
                if (currentURL.indexOf('www.') == -1) {
                    withoutWWW = currentURL;
                    withWWW = 'www.' + currentURL;
                } else {
                    withWWW = currentURL;
                    withoutWWW = currentURL.substring(4);
                }
                array.splice(array.indexOf(withWWW));
                array.splice(array.indexOf(withoutWWW));
            }
        }
        var finalValue = array.concat(newItems);

        // Выполнить сохранение и повторную синхронизацию
        chrome.storage.sync.set({ 'url': finalValue }, function() {
            chrome.runtime.sendMessage({
                    action: "resync"
                },
                function(value) {
                    sendNotification('URL-адреса текущей вкладки', {
                        body: 'Настройки сохранены',
                        icon: 'configuration1.png',
                        dir: 'auto'
                    });
                    window.close();
                }
            );
        });
    });
}

function No() {
    document.getElementById('hosts').innerHTML = '';
    window.close();
}
