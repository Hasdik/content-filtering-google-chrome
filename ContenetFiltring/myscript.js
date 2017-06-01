function postCount(result) {
    if (document.querySelectorAll("div.views-row").length > 0) {
        var k = 0;
        var countdiv = document.querySelectorAll("div.views-row").length;
        for (var j = 0; j < countdiv; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByClassName("views-row")[j].textContent;
            if (~str.indexOf(result)) {
                k++;
            } else {
                var obj = document.getElementsByClassName("views-row")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }

        sendNotification('Фильтр контента', {
            body: 'Фильтр вывел все новости с ключевым словом: ' + result,
            icon: 'vkl.png',
            dir: 'auto'
        });
    } else if ((document.getElementsByClassName("news_time").length > 0)) {
        var k = 0;
        var countdiv = document.getElementsByTagName("li").length
            // var keywords = /побед/i;
        for (var j = 0; j < countdiv; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByTagName("li")[j].textContent;
            if (~str.indexOf(result)) {
                k++;
            } else {
                var obj = document.getElementsByTagName("li")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }
        //вариант поиска str.search(keywords) != -1
        sendNotification('Фильтр контента', {
            body: 'Фильтр вывел все новости с ключевым словом: ' + result,
            icon: 'vkl.png',
            dir: 'auto'
        });
    } else if ((document.getElementsByClassName("item__wrapper").length > 0)) {
        var k = 0;
        var countdiv = document.getElementsByClassName("item").length;
        for (var j = 0; j < countdiv; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByClassName("item")[j].textContent;
            if (~str.indexOf(result)) {
                k++;
            } else {
                var obj = document.getElementsByClassName("item")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }
        var k1 = 0;
        var countdiv1 = document.getElementsByClassName("item-opinion").length;
        for (var j = 0; j < countdiv1; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByClassName("item-opinion")[j].textContent;
            if (~str.indexOf(result)) {
                k1++;
            } else {
                var obj = document.getElementsByClassName("item-opinion")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }
        sendNotification('Фильтр контента', {
            body: 'Фильтр вывел все новости с ключевым словом: ' + result,
            icon: 'vkl.png',
            dir: 'auto'
        });
    } else if ((document.getElementsByClassName("item-long").length > 0)) {
        var k = 0;
        var countdiv = document.getElementsByClassName("item-long").length;
        for (var j = 0; j < countdiv; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByClassName("item-long")[j].textContent;
            if (~str.indexOf(result)) {
                k++;
            } else {
                var obj = document.getElementsByClassName("item-long")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }
        sendNotification('Фильтр контента', {
            body: 'Фильтр вывел все новости с ключевым словом: ' + result,
            icon: 'vkl.png',
            dir: 'auto'
        });
    } else if ((document.getElementsByClassName("item-medium").length > 0)) {
        var k = 0;
        var countdiv = document.getElementsByClassName("item-medium").length;
        for (var j = 0; j < countdiv; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByClassName("item-medium")[j].textContent;
            if (~str.indexOf(result)) {
                k++;
            } else {
                var obj = document.getElementsByClassName("item-medium")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }
        sendNotification('Фильтр контента', {
            body: 'Фильтр вывел все новости с ключевым словом: ' + result,
            icon: 'vkl.png',
            dir: 'auto'
        });
    } else if ((document.getElementsByClassName("item-sport_big").length > 0)) {
        var k = 0;
        var countdiv = document.getElementsByClassName("item-sport_big").length;
        for (var j = 0; j < countdiv; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByClassName("item-sport_big")[j].textContent;
            if (~str.indexOf(result)) {
                k++;
            } else {
                var obj = document.getElementsByClassName("item-sport_big")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }
        var k1 = 0;
        var countdiv1 = document.getElementsByClassName("item-sport_medium").length;
        for (var j = 0; j < countdiv1; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByClassName("item-sport_medium")[j].textContent;
            if (~str.indexOf(result)) {
                k1++;
            } else {
                var obj = document.getElementsByClassName("item-sport_medium")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }
        sendNotification('Фильтр контента', {
            body: 'Фильтр вывел все новости с ключевым словом: ' + result,
            icon: 'vkl.png',
            dir: 'auto'
        });
    } else if ((document.getElementsByClassName("item-realty_photoreport").length > 0)) {
        var k = 0;
        var countdiv = document.getElementsByClassName("item-realty_photoreport").length;
        for (var j = 0; j < countdiv; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByClassName("item-realty_photoreport")[j].textContent;
            if (~str.indexOf(result)) {
                k++;
            } else {
                var obj = document.getElementsByClassName("item-realty_photoreport")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }
        var k1 = 0;
        var countdiv1 = document.getElementsByClassName("item-realty_medium").length;
        for (var j = 0; j < countdiv1; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByClassName("item-realty_medium")[j].textContent;
            if (~str.indexOf(result)) {
                k1++;
            } else {
                var obj = document.getElementsByClassName("item-realty_medium")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }
        var k2 = 0;
        var countdiv2 = document.getElementsByClassName("item-realty_big ").length;
        for (var j = 0; j < countdiv2; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByClassName("item-realty_big ")[j].textContent;
            if (~str.indexOf(result)) {
                k2++;
            } else {
                var obj = document.getElementsByClassName("item-realty_big")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }
        sendNotification('Фильтр контента', {
            body: 'Фильтр вывел все новости с ключевым словом: ' + result,
            icon: 'vkl.png',
            dir: 'auto'
        });
    } else if ((document.getElementsByClassName("l-row").length > 0)) {
        var k = 0;
        var countdiv = document.getElementsByClassName("l-row").length;
        for (var j = 0; j < countdiv; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByClassName("l-row")[j].textContent;
            if (~str.indexOf(result)) {
                k++;
            } else {
                var obj = document.getElementsByClassName("l-row")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }
        sendNotification('Фильтр контента', {
            body: 'Фильтр вывел все новости с ключевым словом: ' + result,
            icon: 'vkl.png',
            dir: 'auto'
        });
    } else if ((document.getElementsByClassName("magazine-issues__item").length > 0)) {
        var k = 0;
        var countdiv = document.getElementsByClassName("magazine-issues__item").length;
        for (var j = 0; j < countdiv; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByClassName("magazine-issues__item")[j].textContent;
            if (~str.indexOf(result)) {
                k++;
            } else {
                var obj = document.getElementsByClassName("magazine-issues__item")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }
        var k1 = 0;
        var countdiv1 = document.getElementsByClassName("newspaper-issues__wrap").length;
        for (var j = 0; j < countdiv1; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByClassName("newspaper-issues__wrap")[j].textContent;
            if (~str.indexOf(result)) {
                k1++;
            } else {
                var obj = document.getElementsByClassName("newspaper-issues__wrap")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }
        sendNotification('Фильтр контента', {
            body: 'Фильтр вывел все новости с ключевым словом: ' + result,
            icon: 'vkl.png',
            dir: 'auto'
        });
    } else if ((document.getElementsByClassName("issuemain").length > 0)) {
        var kcv = 0;
        var countdivc = document.getElementsByClassName("issuemain").length;
        for (var j = 0; j < countdivc; ++j) { //через цикл пробегаемся по всем постам
            var str = document.getElementsByClassName("issuemain")[j].textContent;
            if (~str.indexOf(result)) {
                kcv++;
            } else {
                var obj = document.getElementsByClassName("issuemain")[j];
                obj.style.display = "none";
                console.log("Скрыл");
            }
        }
        sendNotification('Фильтр контента', {
            body: 'Фильтр вывел все новости с ключевым словом: ' + result,
            icon: 'vkl.png',
            dir: 'auto'
        });
    } 
    else {
        console.log("Здесь нет новостей");
    }

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

            } else {
                alert('Вы запретили показывать уведомления'); // Юзер отклонил наш запрос на показ уведомлений
            }
        });
    } else {
        // Пользователь ранее отклонил наш запрос на показ уведомлений
        // В этом месте мы можем, но не будем его беспокоить. Уважайте решения своих пользователей.
    }
}
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    switch (message.action) {
        case 'value':
            postCount(message.greeting);
            break;
        default:
            break;
    }
});
