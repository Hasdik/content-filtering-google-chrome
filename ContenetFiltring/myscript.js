function postCount() {
    document.getElementById('filterup').addEventListener('click', function() {
        var value = document.getElementById('vkFilter').value;
        // TODO: Do what you want to.
        alert(value);
    });
    if (document.querySelectorAll("div.views-row").length > 0) {
        var k = 0;
        var countdiv = document.querySelectorAll("div.views-row").length;
        var keywords = "гос";
        for (var j = 0; j < countdiv; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByClassName("views-row")[j].textContent;
            if (str.search(/гос/i) != -1) {
                k++;
            } else {
                var obj = document.getElementsByClassName("views-row")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }

        sendNotification('Фильтр контента', {
            body: 'Фильтр вывел все новости с ключевым словом: ' + keywords,
            icon: 'vkl.png',
            dir: 'auto'
        });
    } else if ((document.getElementsByClassName("news_time").length > 0)) {
        var k = 0;
        var countdiv = document.getElementsByTagName("li").length
        var keywords = /побед/i;
        for (var j = 0; j < countdiv; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByTagName("li")[j].textContent;
            if (str.search(keywords) != -1) {
                k++;
            } else {
                var obj = document.getElementsByTagName("li")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }

        sendNotification('Фильтр контента', {
            body: 'Фильтр вывел все новости с ключевым словом: ' + keywords,
            icon: 'vkl.png',
            dir: 'auto'
        });
    } else {
        console.log("Здесь нет новостей");
    }

}
//postCount();
document.addEventListener('DOMContentLoaded', postCount);
//window.addEventListener("scroll", postCount); //wheel
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
