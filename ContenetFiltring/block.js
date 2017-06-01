/**
 * Все фактические функциональные возможности расширения; Загружается как часть фоновой страницы.
 *
 * Активным компонентом является enable (), который устанавливает обратные вызовы webRequest.
 *
 * */

allFilters = null;
allFiltersnews = null;

function setFilters(newFilters) {
    allFilters = newFilters;
    chrome.storage.local.set({ "filters": newFilters });
}


function setFiltersto(newFiltersto) {
    allFiltersnews = newFiltersto;
    chrome.storage.local.set({ "rdfilters": newFiltersto });
}
// магические объекты, которые интерпретирует API webRequest.
// мы превращаем образы и iframe в безобидные no-ops, все остальное становится прямым "отмененным"
blockImagePayload = { redirectUrl: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAI=" };
blockPagePayload = { redirectUrl: "about:blank" };
cancelPayload = { cancel: true };


// волшебные обратные вызовы для доставки вышеупомянутых магических объектов:
function blockImage(details) {
    return blockImagePayload;
}

function blockPage(details) {
    return blockPagePayload;
}

function blockObject(details) {
    return cancelPayload;
}


// типы объектов и обратные вызовы для их удаления:
listenerCallbacks = [
    [
        ["image"], blockImage
    ],
    [
        ["sub_frame"], blockPage
    ],
    [
        ["main_frame", "object", "script", "xmlhttprequest", "stylesheet", "other"], blockObject
    ]
]


// глобальное состояние включения / выключения
blockingEnabled = false;

// регистрируем все обратные вызовы
function enable(icon = true) {
    if (blockingEnabled) {
        return;
    }
    // edge case: включение с URL == [] будет блокировать * все * URL,
    // а не ни один из них
    if (allFilters.length > 0) {
        for (var j in listenerCallbacks) {
            var types = listenerCallbacks[j][0];
            var callback = listenerCallbacks[j][1];
           // alert(allFilters);
            chrome.webRequest.onBeforeRequest.addListener(
                callback, { urls: allFilters, types: types },

                // блокирует запрос до его обработки; Необходимо отменить / повторить
                ["blocking"]

            );

        }

    }
    blockingEnabled = true;
}
function disableto() {
    localStorage.clear();
}
function enbaleto() {

    localStorage.setItem('urls', JSON.stringify(allFiltersnews));
}


// отменить регистрацию всех обратных вызовов
function disable(icon = true) {
    for (var j in listenerCallbacks) {
        var callback = listenerCallbacks[j][1];
        chrome.webRequest.onBeforeRequest.removeListener(callback);

    }

    blockingEnabled = false;

    //уведомление можно сюда перенести
}

// цикл питания
function refreshFilters() {

    // работаем над какой-то непонятной проблемой Chrome. Похоже: при первой загрузке,
    // если вы вызываете setIcon два раза подряд, второй вызов игнорируется (?)
    disable(false);
    enable(true);
}

// switch-flip
/*function toggleEnabled() {
    if (blockingEnabled) {
        disable();
    } else {
        enable();
    }
}*/
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

        function clickFunc() { alert('Пользователь кликнул на уведомление'); }

        notification.onclick = clickFunc;
    }

    // Если прав нет, пытаемся их получить
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function(permission) {
            // Если права успешно получены, отправляем уведомление
            if (permission === "granted") {
                var notification = new Notification(title, options);
                alert("Права успешно пол!");

            } else {
                alert('Вы запретили показывать уведомления'); // Юзер отклонил наш запрос на показ уведомлений
            }
        });
    } else {
        // Пользователь ранее отклонил наш запрос на показ уведомлений
        // В этом месте мы можем, но не будем его беспокоить. Уважайте решения своих пользователей.
    }
}

function v() {
    // Инициализация.
    chrome.storage.local.get("rdfilters",
        function(result) {
            if (result["rdfilters"] == undefined) {
                console.log("Инициализация фильтров по умолчанию.");
                setFiltersto(defaultFiltersto);

            } else {
                setFiltersto(result["rdfilters"]);
                allFiltersnews = result["rdfilters"];
            }


            // переключение блокировки вкл-выкл через значок расширения в Omnibar
            //  chrome.browserAction.onClicked.addListener(toggleEnabled);
            // включение основного экрана
            enbaleto();
        }
    );
}

v();
chrome.storage.local.get("filters",
    function(result) {
        if (result["filters"] == undefined) {
            console.log("Инициализация фильтров по умолчанию.");
            setFilters(defaultFilters);

        } else {
            setFilters(result["filters"]);
            allFilters = result["filters"];
        }


        // переключение блокировки вкл-выкл через значок расширения в Omnibar
        //chrome.browserAction.onClicked.addListener(toggleEnabled);
        // включение основного экрана
        enable();
    }
);
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var urls = JSON.parse(localStorage.getItem('urls'));
        // alert(urls);
        var isCancel = urls.some(function(url) {
            return details.url.indexOf(url) != -1;
        });
        return { cancel: !isCancel };
    }, { urls: ["<all_urls>"] }, ["blocking"]
);
