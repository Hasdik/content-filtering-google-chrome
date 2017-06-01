//Дефолтные сайты для блокировка

defaultFilters = [
    "*://*.doubleclickbygoogle.com/*",
    "*://*.partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://*.creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*"
];
defaultFiltersto = [
    "mk.ru",
    "haemjpfjceaocmooeompeefbbbgaogmh",
    "antizapret.info",
    "google.com",
    "google.ru",
    "youtube.com",
    "github.com",
    "vkotakte.ru",
    "chrome.com",
    "vkotakte.com",
    "https://vk.com/",
    "http://advantshop.esy.es/",
    "http://is.ulstu.ru/",
    "https://vk.com/im"
];
//localStorage.defaultFilters = JSON.stringify(defaultFilters);
var tagList;
//загружаем запрещенные ссылки из реестра
function GetMethod() {
    $.ajax({
        type: "GET",
        url: "https://api.antizapret.info/group.php?data=domain",
        success: function(resultwords) { //success происходит в случае удачного завершения запроса.
            tagList = resultwords.split('\n');
            for (var i = 10; i < tagList.length - 43625; i++) {
                defaultFilters[i] = '*://*.' + tagList[i] + '/*';

            }
        }
    });
}
//populate();
//GetMethod();
// populate();
