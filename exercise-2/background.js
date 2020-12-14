console.log('from background')

let activatedTabId = 0

chrome.tabs.onActivated.addListener(tab => {
    console.log(tab)

    chrome.tabs.get(tab.tabId, current_tab_info => {
        activatedTabId = tab.tabId
        console.log(current_tab_info.url)
        
        if (/^https:\/\/www.google.com/.test(current_tab_info.url)) {
            chrome.tabs.insertCSS(null, {file: './styles.css'})
            chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('i injected'))
        }
    })
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'yo check out the storage') {
        chrome.tabs.sendMessage(activatedTabId, {message: 'yo I got your message'})
        // sendResponse({message: 'yo I got your message'})
        chrome.storage.local.get("password", value => {
            console.log(value)
        })
    }
})
