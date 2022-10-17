// "www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

console.log(ulEl)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""

    for (i = 0; i < myLeads.length; i++) {
        // listItems +=  "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
        listItems +=  ` 
                        <li>
                            <a href='${myLeads[i]}' target='_blank'>
                                ${myLeads[i]}
                            </a>
                        </li>
                      ` 
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        // let li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }

    ulEl.innerHTML = listItems
}

