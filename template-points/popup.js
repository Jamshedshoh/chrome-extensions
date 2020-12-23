var list = document.getElementById("list")
var balance = document.getElementById("balance")
var sendForm = document.getElementById("sendForm")

var account = {
    "currentBalance": 10000
}

window.onload = () => {
    balance.innerHTML = `${account.currentBalance} points`
}

sendForm.addEventListener("submit", (e) => {
    e.preventDefault()
    var amount = e.target.amount.value

    if (amount === "" || amount == 0) {
        return;
    }

    var accountId = e.target.accountId.value

    if (accountId === "") {
        return;
    }

    if (account.currentBalance - amount >= 0) {
        account.currentBalance -= amount
        balance.innerHTML = `${account.currentBalance} points`
    } else {
        alert("Not enough points to transfer")
        return
    }

    e.target[0].value = ""
    e.target[1].value = ""
    
    var liElement = document.createElement("li")
    liElement.classList.add("list-group-item")
    liElement.classList.add("border-0")

    var divElement = document.createElement("div")
    divElement.classList.add("input-group")

    var labelElement = document.createElement("label")
    labelElement.classList.add("form-control")
    labelElement.innerText = `Sent ${amount} to #account-${accountId}`

    var buttonElement = document.createElement("button")
    buttonElement.classList.add("btn")
    buttonElement.classList.add("btn-success")
    buttonElement.classList.add("btn-disabled")
    buttonElement.innerHTML = `Receipt`
    buttonElement.addEventListener("click", (e) => {
        // handle element
    })

    divElement.appendChild(labelElement)
    divElement.appendChild(buttonElement)
    liElement.appendChild(divElement)
    // list.appendChild(liElement)
    list.insertBefore(liElement, list.firstChild);
})
