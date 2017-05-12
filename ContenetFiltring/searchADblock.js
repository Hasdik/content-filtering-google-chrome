var blocads = [];

function GetMethod2() {
    $.ajax({
        url: "https://easylist-downloads.adblockplus.org/easylist.txt",
        success: function(result) { //success происходит в случае удачного завершения запроса.
            var tagList = result.split('\n');
            lengthS = tagList.length;
            //alert(lengthS);
            for (var i = 80; i < tagList.length - 61470; i++) {
                blocads[i] = tagList[i];
                alert(document.querySelectorAll("#top_nav"));
            }
        }
    });
}
GetMethod2();

function searchad() {
    //var ad = $('#ads_left').remove();
    $(function() {
        $('#ads_left').mouseenter(function() { // Навели на ссылку
            $('#ads_left').css('box-shadow', '0 0 0 2px #ccc', 'inset 0 0 0 2px #ccc');
            $("DIV#ads_left").click(function() {
                $("DIV#ads_left").fadeOut(); // fadeOut - плавное исчезновение 
                
                uved();
                return false; // не производить переход по ссылке
            });
        });
    });
}

function uved() {
    sendNotification('Фильтрация рекламы', {
        body: 'Реклама скрыта :)',
        icon: 'vkl.png',
        dir: 'auto'
    });
}


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

// Прослушивание сообщений и вызов функции при получении сообщения «block».
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    switch (message.action) {
        case 'adblock':
            localStorage.setItem('abBlockid', "true");
            break;
        case 'adblockcleer':
            localStorage.setItem('abBlockid', "false");
            break;
        default:
            break;
    }
});
(function() {
    if (localStorage.getItem('abBlockid') === 'true') {
        searchad();
    }
})();
