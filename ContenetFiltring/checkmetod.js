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

            } else {
                alert('Вы запретили показывать уведомления'); // Юзер отклонил наш запрос на показ уведомлений
            }
        });
    } else {
        // Пользователь ранее отклонил наш запрос на показ уведомлений
        // В этом месте мы можем, но не будем его беспокоить. Уважайте решения своих пользователей.
    }
}

function init() {

    document.getElementById('webRTCBox').onchange = function() {
        if (document.getElementById('webRTCBox').checked) {
            localStorage.setItem('webRTCBox', "true");

            //chrome.tts.speak('Включена функция блокировки нежелательного веб-контента');
            sendNotification('Функция блокировки нежелательного веб-контента', {
                body: 'Включена.',
                icon: 'vkl.png',
                dir: 'auto'
            });
        } else {
            localStorage.setItem('webRTCBox', "false");
            // chrome.tts.speak('Отключена функция блокировки нежелательного веб-контента');
            sendNotification('Функция блокировки нежелательного веб-контента', {
                body: 'Отключена',
                icon: 'vblkl.png',
                dir: 'auto'
            });
        }
    }
    if (localStorage.getItem('webRTCBox') == "true") {
        document.getElementById("webRTCBox").setAttribute('checked', 'checked');
    }
}
document.addEventListener('DOMContentLoaded', init);
if (localStorage.getItem('webRTCBox') === "true") {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'block' });
    });
}
