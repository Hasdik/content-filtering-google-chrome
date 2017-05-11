//Дефолтные сайты для блокировка
defaultFilters = [
    "*://*.doubleclick.net/*",
    "*://*.partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://*.creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
];
var lengthS;
//загружаем запрещенные ссылки из реестра
function GetMethod() {
    $.ajax({
        url: "https://api.antizapret.info/group.php?data=domain",
        success: function(result) { //success происходит в случае удачного завершения запроса.
            var tagList = result.split('\n');
            lengthS = tagList.length;
            for (var i = 0; i < tagList.length - 42625; i++) {
                defaultFilters[i] = "*://*." + tagList[i] + "/*";

            }
        }
    });
}
document.addEventListener('DOMContentLoaded', GetMethod);
