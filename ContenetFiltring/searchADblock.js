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
//GetMethod2();

function searchad() {

    var k = 0;
    //var ad = $('#ads_left').remove();
    $(function() {
        $('#ads_left').mouseenter(function() { // Навели на ссылку
            $('#ads_left').css('box-shadow', '0 0 0 2px #ff0000', 'inset 0 0 0 2px #ff0000');
            $("DIV#ads_left").click(function() {
                $("DIV#ads_left").fadeOut(); // fadeOut - плавное исчезновение 
                localStorage.setItem('testObject', '#ads_left');
                k++;
                console.log("Количество скрытой рекламы на странице: " + k);
                //uved();
                return false; // не производить переход по ссылке
            });
        });
        $('.right').mouseenter(function() { // Навели на ссылку
            $('.right').css('box-shadow', '0 0 0 2px #ff0000', 'inset 0 0 0 2px #ff0000');
            $("DIV.right").click(function() {
                $("DIV.right").fadeOut(); // fadeOut - плавное исчезновение 
                localStorage.setItem('testObject1', '.right');
                k++;
                console.log("Количество скрытой рекламы на странице: " + k);
                //uved();
                return false; // не производить переход по ссылке
            });
        });
        $('.Yandex_bottom').mouseenter(function() { // Навели на ссылку
            $('.Yandex_bottom').css('box-shadow', '0 0 0 2px #ff0000', 'inset 0 0 0 2px #ff0000');
            $("DIV.Yandex_bottom").click(function() {
                $("DIV.Yandex_bottom").fadeOut(); // fadeOut - плавное исчезновение 
                localStorage.setItem('testObject2', '.Yandex_bottom');
                k++;
                console.log("Количество скрытой рекламы на странице: " + k);
                //uved();
                return false; // не производить переход по ссылке
            });
        });
        $('.left_block').mouseenter(function() { // Навели на ссылку
            $('.left_block').css('box-shadow', '0 0 0 2px #ff0000', 'inset 0 0 0 2px #ff0000');
            $("DIV.left_block").click(function() {
                $("DIV.left_block").fadeOut(); // fadeOut - плавное исчезновение 
                localStorage.setItem('testObject3', '.left_block');
                k++;
                console.log("Количество скрытой рекламы на странице: " + k);
                //uved();
                return false; // не производить переход по ссылке
            });
        });
        $('.banner').mouseenter(function() { // Навели на ссылку
            $('.banner').css('box-shadow', '0 0 0 2px #ff0000', 'inset 0 0 0 2px #ff0000');
            $("DIV.banner").click(function() {
                $("DIV.banner").fadeOut(); // fadeOut - плавное исчезновение 
                localStorage.setItem('testObject4', '.banner');
                k++;
                console.log("Количество скрытой рекламы на странице: " + k);
                // uved();
                return false; // не производить переход по ссылке
            });
        });
        $('.item-small').mouseenter(function() { // Навели на ссылку
            $('.item-small').css('box-shadow', '0 0 0 2px #ff0000', 'inset 0 0 0 2px #ff0000');
            $("DIV.item-small").click(function() {
                $("DIV.item-small").fadeOut(); // fadeOut - плавное исчезновение 
                localStorage.setItem('testObject5', '.item-small');
                k++;
                console.log("Количество скрытой рекламы на странице: " + k);
                // uved();
                return false; // не производить переход по ссылке
            });
        });
        $('.banner g-banner__bg').mouseenter(function() { // Навели на ссылку
            $('.banner g-banner__bg').css('box-shadow', '0 0 0 2px #ff0000', 'inset 0 0 0 2px #ff0000');
            $("DIV.banner g-banner__bg").click(function() {
                $("DIV.banner g-banner__bg").fadeOut(); // fadeOut - плавное исчезновение 
                localStorage.setItem('testObject6', '.banner g-banner__bg');
                k++;
                console.log("Количество скрытой рекламы на странице: " + k);
                //   uved();
                return false; // не производить переход по ссылке
            });
        });
        $('#afRichMediaBanner2092780').mouseenter(function() { // Навели на ссылку
            $('#afRichMediaBanner2092780').css('box-shadow', '0 0 0 2px #ff0000', 'inset 0 0 0 2px #ff0000');
            $("#afRichMediaBanner2092780").click(function() {
                $("#afRichMediaBanner2092780").fadeOut(); // fadeOut - плавное исчезновение 
                localStorage.setItem('testObject7', '#afRichMediaBanner2092780');
                k++;
                console.log("Количество скрытой рекламы на странице: " + k);
                //   uved();
                return false; // не производить переход по ссылке
            });
        });
        $('. _3QB4RG_835').mouseenter(function() { // Навели на ссылку
            $('. _3QB4RG_835').css('box-shadow', '0 0 0 2px #ff0000', 'inset 0 0 0 2px #ff0000');
            $(". _3QB4RG_835").click(function() {
                $(". _3QB4RG_835").fadeOut(); // fadeOut - плавное исчезновение 
                localStorage.setItem('testObject8', '. _3QB4RG_835');
                k++;
                console.log("Количество скрытой рекламы на странице: " + k);
                //   uved();
                return false; // не производить переход по ссылке
            });
        });
    });
    var retrievedObject = localStorage.getItem('testObject');
    var retrievedObject1 = localStorage.getItem('testObject1');
    var retrievedObject2 = localStorage.getItem('testObject2');
    var retrievedObject3 = localStorage.getItem('testObject3');
    var retrievedObject4 = localStorage.getItem('testObject4');
    var retrievedObject5 = localStorage.getItem('testObject5');
    var retrievedObject6 = localStorage.getItem('testObject6');
    var retrievedObject7 = localStorage.getItem('testObject7');
    var retrievedObject8 = localStorage.getItem('testObject8');
    //alert(retrievedObject);
    //document.getElementById( '+retrievedObject+').style.display = 'none';
    $(retrievedObject).hide();
    $(retrievedObject1).hide();
    $(retrievedObject2).hide();
    $(retrievedObject3).hide();
    $(retrievedObject4).hide();
    $(retrievedObject5).hide();
    $(retrievedObject6).hide();
    $(retrievedObject7).hide();
    $(retrievedObject8).hide();
}

function uved() {
    sendNotification('Фильтрация рекламы', {
        body: 'Реклама скрыта :)',
        icon: 'vkl.png',
        dir: 'auto'
    });
}

/*
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
}*/

// Прослушивание сообщений и вызов функции при получении сообщения «block».
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    switch (message.action) {
        case 'adblock':
            localStorage.setItem('abBlockid', "true");
            break;
        case 'adblockcleer':
            localStorage.setItem('abBlockid', "false");
            localStorage.setItem('testObject', 'falsesd');
            localStorage.setItem('testObject1', 'falsesd');
            localStorage.setItem('testObject2', 'falsesd');
            localStorage.setItem('testObject3', 'falsesd');
            localStorage.setItem('testObject4', 'falsesd');
            localStorage.setItem('testObject5', 'falsesd');
            localStorage.setItem('testObject6', 'falsesd');
            localStorage.setItem('testObject7', 'falsesd');
            localStorage.setItem('testObject8', 'falsesd');
            break;
        default:
            break;
    }
});
(function() {
    if (localStorage.getItem('abBlockid') === 'true') {
        searchad();
        window.addEventListener("wheel", searchad);
    }
})();
