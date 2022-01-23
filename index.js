
let myLeads = []
let saveIndex
const inputEl = document.querySelector("#input_el")
const inputBtn = document.getElementById("input_btn")
const editBtn = document.getElementById("edit_btn")
const olEl = document.querySelector("#ol_el")
const deleteAllBtn = document.querySelector("#delete_all_btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage)
{
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function deleteTask(index)
{
    myLeads = leadsFromLocalStorage
    myLeads.splice(index, 1)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
}

function editTask(index)
{
    myLeads = leadsFromLocalStorage
    inputEl.value = myLeads[index]
    saveIndex = index
    inputBtn.style.display = "none"
    editBtn.style.display = "inline"
}

function render(leads)
{
let listItems = ""
for(let i = 0; i<leads.length; i++)
{
    listItems += `
    <li>
        <span id="spanText">${leads[i]}</span>
        <button id="editBtn"  onClick="editTask(${i})">Edit</button>
        <button id="deleteBtn" onClick="deleteTask(${i})">Delete</button>
    </li>
    `
}
olEl.innerHTML = listItems
}

editBtn.addEventListener("click", () =>{

    inputBtn.style.display = "inline"
    editBtn.style.display = "none"
    myLeads = leadsFromLocalStorage
    myLeads[saveIndex] = inputEl.value;
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

deleteAllBtn.addEventListener("click", function()
{
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})
