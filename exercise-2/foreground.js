console.log('from foreground')

const first = document.createElement("button")
first.innerText = "Set Data"
first.id = "first"

const second = document.createElement("button")
second.innerText = "Shout out to Back End"
second.id = "second"  

document.querySelector('body').appendChild(first)
document.querySelector('body').appendChild(second)

first.addEventListener('click', () => {
    chrome.storage.local.set({"password": "123"})
    console.log("I set data")
}) 

second.addEventListener('click', () => {
    chrome.runtime.sendMessage({message: 'yo check out the storage'})
    console.log("I send the message")
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request.message)
})

