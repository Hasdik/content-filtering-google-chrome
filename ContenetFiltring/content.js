//функция которая блокирует нежелательный контент
function blockContent() {
    var blockwords = [
        "meat",
        "Alexis Arquette",
        "Ambrosio",
        "Amy Schumer",
        "Andy Warhol",
        "Baez",
        "Bieber",
        "Blake Griffin",
        "Blue Ivy",
        "Bowie",
        "Brad Pitt",
        "Britney Spears",
        " Broncos",
        "Carmelo Anthony",
        "Мы такие какие есть и не вам нас судить.",
        "celeb ",
        "celebri",
        "celebs",
        "celine",
        "Chris Brown",
        "Chris_Brown",
        "Chris Pine",
        "Chris_Pine",
        "Chyna",
        "Clippers",
        "Clooney",
        "Cosby",
        "Cuoco",
        "Couric",
        "Dempsey",
        "DeGeneres",
        "Devito",
        "Disick",
        "Drake",
        "Drew Barrymore",
        "EJ Johnson",
        "Eminem",
        "football",
        "Foxx",
        "Geena",
        "Giants",
        "Gomez",
        "Gordon-Levitt",
        "Grace Coddington",
        "Handler",
        "Hemsworth",
        "Hadid",
        "Jillian Michaels",
        "Jillian_Michaels",
        "J.Lo",
        "jlo",
        "John Krasinski",
        "Jon Hamm",
        "Knicks",
        "Kobe Bryant",
        "Kourtney",
        "Kylie Jenner",
        "mariah",
        "Martha Stewart",
        "Mets",
        "Michael Jackson",
        "Michelle Obama",
        "Munn",
        " Nets ",
        " NBA ",
        " NFL",
        " NHL ",
        "One Direction",
        "Oprah",
        "Oscar",
        "Rangers",
        "Robin Williams",
        "Rihanna",
        "Rinna",
        "Sean Penn",
        "Sheen",
        "Shields",
        "Snookie",
        "Strahan",
        "Spike Lee",
        "Sports",
        "Stars",
        "Suge Knight",
        "sweetin",
        "Sylvester Stallone",
        "Shit",
        "Piss",
        "Fuck",
        "Cunt",
        "Cocksucker",
        "Motherfucker",
        "Tits",
        "meat",
        "criminals",
        "idiot",
        "died",
        "сука",
        "кутак",
        "kytak",
        "xyi",
        "xui",
        "кутак",
        "хуйло",
        "нахуй",
        "БЛЯДЬ",
        "ЕБАТЬ",
        "ПИЗДА",
        "ХУЙ",
        "БЛЯ",
        "БЛЯДИАДА",
        "БЛЯДИНА",
        "БЛЯДИСТОСТЬ",
        "БЛЯДОГОН",
        "БЛЯДОСЛОВНИК",
        "БЛЯДСКИЙ",
        "БЛЯДСТВО",
        "БЛЯДЬ",
        "ЕБАЛО",
        "ЗАЕБИСЬ",
        "НАЕБНУЛСЯ",
        "ПИЗДАБОЛ",
        "ПИЗДАТЫЙ",
        "ПИЗДЕЛЯКАЕТ",
        "ПИЗДЕЦ",
        "ХУЁВО",
        "ХУЕМАН",
        "ХУЙНЯ",
        "Пидор",
        "Мудак",
        "дрочить",
        "дрочун",
        "шлюха",
        "шмара",
        "нахуй",
        "ебать",
        "блядь",
        "хуй",
        "хер",
        "елда",
        "муде",
        "пизда",
        "манда",
        "дрочить",
        "залупа",
        "пидарас",
        "гандон",
        "малафья",
        "срать",
        "ссать",
        "пердеть",
        "дристать",
        "говно",
        "жопа",
        "целка",
        "курва",
        "криминал",
        "изнасилование",
    ]

    var count = 0;
    console.log("Пользовательский фильтр проверяет наличие заблокированных слов:");
    var scanText = document.documentElement.innerHTML.toLowerCase();
    for (var i = 0; i < blockwords.length; i++) {
        var all = document.querySelectorAll("div,a,p,img,span,h4,h3,h2,h1,li,iframe,label,caption,td,th");
        var max = all.length;
        var offence = blockwords[i].toLowerCase();
        if (scanText.search(blockwords[i].toLowerCase()) != -1) {
            var subCount = 0;

            for (var j = max - 1; j > -1; j--) {
                var placeholder = document.createElement("div");
                var placeTxt = document.createTextNode("Обнаружен нежелательный веб-контент");
                placeholder.appendChild(placeTxt);
                placeholder.style.color = "red";
                if (all[j]) {
                    if (all[j].innerText) {
                        var lowerText = all[j].innerText.toLowerCase();
                        if (lowerText.indexOf(offence) != -1) {
                            subCount++;
                            localStorage.getItem(all[j].parentNode.appendChild(placeholder));
                            localStorage.getItem(all[j].parentNode.removeChild(all[j]));
                            delete all[j];
                            continue;
                        }
                    }
                    if (all[j].getAttribute("href")) {
                        var href = all[j].getAttribute("href").toLowerCase();
                        if (href.indexOf(offence) != -1) {
                            subCount++;
                            localStorage.getItem(all[j].parentNode.appendChild(placeholder));
                            localStorage.getItem(all[j].parentNode.removeChild(all[j]));
                            delete all[j];
                            continue;
                        }
                    }
                    if (all[j].getAttribute("alt")) {
                        var alt = all[j].getAttribute("alt").toLowerCase();
                        if (alt.indexOf(offence) != -1) {
                            subCount++;
                            localStorage.getItem(all[j].parentNode.appendChild(placeholder));
                            localStorage.getItem(all[j].parentNode.removeChild(all[j]));
                            delete all[j];
                            continue;
                        }
                    }
                    if (all[j].src) {
                        var src = all[j].getAttribute("src").toLowerCase();
                        if (src.indexOf(offence) != -1) {
                            subCount++;
                            localStorage.getItem(all[j].parentNode.appendChild(placeholder));
                            localStorage.getItem(all[j].parentNode.removeChild(all[j]));

                            delete all[j];
                            continue;
                        }
                    }
                    if (all[j].getAttribute("title")) {
                        var src = all[j].getAttribute("title").toLowerCase();
                        if (src.indexOf(offence) != -1) {
                            subCount++;
                            localStorage.getItem('myKey2', all[j].parentNode.appendChild(placeholder));
                            localStorage.getItem('myKey12', all[j].parentNode.removeChild(all[j]));
                            delete all[j];
                            continue;
                        }
                    }

                }
            }
            count++;
            console.log("Заблокированное слово найдено: " + blockwords[i] + " (" + subCount + "x)");
        }
    }
    console.log(count);
    if (count == 0) {
        console.log("Заблокированные слова не найдены");
    }
}


// Прослушивание сообщений и вызов функции при получении сообщения «block».
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    switch(message.action) {
        case 'block':
            //if(localStorage.getItem('webRTCBox') === 'true') {
                blockContent();
           // }
            break;
        default:
            break;
    }
});