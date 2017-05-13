function nm()
{
    var value;
    document.getElementById('filterup').addEventListener('click', function() {
        value = document.getElementById('vkFilter').value;

        // TODO: Do what you want to.
           chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'value', greeting: value});
    });
    });
}
document.addEventListener('DOMContentLoaded', nm);