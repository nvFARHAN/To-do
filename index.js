
let myLeads = []
let saveIndex
const inputEl = document.querySelector("#input_el")
const inputBtn = document.getElementById("input_btn")
const editBtn = document.getElementById("edit_btn")
const ulEl = document.querySelector("#ul_el")
//console.log(localStorage.getItem("myLeads"))
//localStorage.setItem("myLeads", "www.alpha.com")
//localStorage.clear()
const deleteAllBtn = document.querySelector("#delete_all_btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
//console.log(leadsFromLocalStorage)
//const saveBtn = document.querySelector("#save_btn")
//const tabs = [{url: "https://www/linkedin.com/in/per-harald-borgen/"}]

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

editBtn.addEventListener("click", () =>{

    inputBtn.style.display = "inline"
    editBtn.style.display = "none"
    myLeads = leadsFromLocalStorage
    myLeads[saveIndex] = inputEl.value;
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

function render(leads)
{
let listItems = ""
for(let i = 0; i<leads.length; i++)
{
    //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems += `
    <li>
        <span id="spanText">${leads[i]}</span>
        <button id="editBtn"  onClick="editTask(${i})">Edit</button>
        <button id="deleteBtn" onClick="deleteTask(${i})">Delete</button>
    </li>
    `
    //ulEl.innerHTML +=  "<li>" + myLeads[i] + "</li>" DOM comes with a cost
    //const li = document.createElement("li")
    //li.textContent = myLeads[i]
    //ulEl.append(li)
    //console.log(listItems)
}
ulEl.innerHTML = listItems
}

/*saveBtn.addEventListener("click", function(){
    //chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
       
    //})
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        //console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        //console.log(tabs[0].url)
        render(myLeads)
    })
   
})
*/
deleteAllBtn.addEventListener("dblclick", function()
{
    //console.log("double clicked")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function(){
    //console.log("Button Clicked")
    myLeads.push(inputEl.value)
    //console.log(myLeads)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    //console.log(localStorage.getItem("myLeads"))
})


// anuj laal