// requestMade будет выглядеть как {"tabId": [URLs], "nextTabId": [URLs]}
var requestsMade = {};
var blockThese = [];
var requestsBlocked = {};

chrome.tabs.onCreated.addListener(function(details) {
    requestsMade[details.id.toString()] = [];
    requestsBlocked[details.id.toString()] = [];
    if (blockThese == null || blockThese.length == 0) {
        ReSync();
    }
});

chrome.tabs.onRemoved.addListener(function(details) {

    // очищаем запросы, сделанные для этой вкладки
    requestsMade[details.toString()] = [];
    for (var prop in requestsMade) {
        if (prop == details.toString()) {
            delete requestsMade[prop];
            break;
        }
    }
});

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {

        // Обеспечение проверки имен хостов с помощью и без WWW
        var currentHost = new URL(details.url).hostname;
        var withWWW;
        var withoutWWW;
        if (currentHost.indexOf('www.') == -1) {
            withoutWWW = currentHost;
            withWWW = 'www.' + currentHost;
        } else {
            withWWW = currentHost;
            withoutWWW = currentHost.substring(4);
        }


        // Загрузить URL-адреса для блокировки первого запроса
        if (blockThese == null || blockThese.length == 0) {
            ReSync();
        }

        if ((blockThese.indexOf(withWWW) != -1) || (blockThese.indexOf(withoutWWW) != -1)) {

            // блокируем текущий URL-адрес
            if ((requestsBlocked[details.tabId.toString()].indexOf(currentHost) == -1)) {

                // Добавить в список
                requestsBlocked[details.tabId.toString()][requestsBlocked[details.tabId.toString()].length] = currentHost;
            }
            return { cancel: true };
        }

        // Если это была первая вкладка, tabs.onCreated не вызывалась бы. Итак, ничего не будет
        // в requestMade и requestBlocked.
        if (!requestsMade.hasOwnProperty(details.tabId.toString())) {
            requestsMade[details.tabId.toString()] = [];
            requestsBlocked[details.tabId.toString()] = [];
        }

        if ((requestsMade[details.tabId.toString()].indexOf(currentHost) == -1)) {
            // Добавить в список
            requestsMade[details.tabId.toString()][requestsMade[details.tabId.toString()].length] = currentHost;
        }
    }, { urls: ["<all_urls>"] }, ["blocking"]);

chrome.runtime.onMessage.addListener(function(request, sender, callback) {

    // Открытое всплывающее окно пользователя
    if (request.action == "requests") {
        callback(GetRequests(request.tab));
    }

    // Некоторые хосты были заблокированы или разблокированы. Блок ReSync blockThese
    else if (request.action == "resync") {
        callback(ReSync());
    }
});

function GetRequests(tabId) {
    return { "made": requestsMade[tabId.toString()], "blocked": requestsBlocked[tabId.toString()] };
}

function ReSync() {
    chrome.storage.sync.get(['url'], function(result) {
        blockThese = result['url'] ? result['url'] : [];
    });

    // Подождите секунду, чтобы завершить загрузку URL-адресов
    setTimeout(function() {}, 1000);
}
