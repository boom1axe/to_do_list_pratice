/**
 * Repersents a single task in a ToDo list
 */
class ToDoItem {
    title:string;
    description:string;
    startDate:Date;
    endDate:Date;
    isComplete:boolean;
    urgency:string;
    //subTasks:Array<ToDoItem>;
}

/*
let testItem = new ToDoItem();
testItem.title = "Teach CPW 203";
testItem.startDate = new Date("April 30, 2019");
testItem.description = "lecture advance javascript";
testItem.startDate = new Date("April 30, 2019");
testItem.isComplete = item;
*/

//when add item is clicked get data and wrap in a todo  object
//Notify user and clear form
//Save todo object

window.onload = function() {
    let addBtn = <HTMLButtonElement>
        document.querySelector("#create-item > button");
    addBtn.onclick = processNewItem;
}

function processNewItem() {
    let item:ToDoItem = getItemFromForm();
    saveItem(item);
    notifyUser();
    clearForm();
}

function clearForm() {
    

    //clear all textboxs and textarea
    let textElements =
        document.querySelectorAll("input[type=text], textarea");
    for (let i = 0; i < textElements.length; i++) {
        (<HTMLInputElement>textElements[i]).value = "";
    }

    //uncheck is complete
    let isCompleteBox =
        document.querySelector("#is-complete");
    isCompleteBox.checked = false;

    //reset select list
}

function notifyUser(){
    alert("your item was saved");
}



function saveItem(item:ToDoItem):void{

    let data:string. JSON.stringify(item);
    console.log("Converting todoitem into JSON string...");
    console.log(data);

    // user is/can use localStorage
    if (typeof(Storage) != "undefined") {
        localStorage.setItem("todo", data);
    }
}

/**
 * Get all user input from form
 * and wrap it in a ToDoItem 
 */
function getItemFromFrom():ToDoItem{
    let item = new ToDoItem();

    item.title = (<HTMLInputElement>
        document.getElementById("title")).value;
    item.description = (<HTMLTextAreaElement>
        document.getElementById("description")).value;
    
    let itemStartDate:string = (<htmlInputElement> 
        document.getElementById("start-date")).value;
    item.endDate = new Date(itemStartDate);

    
    let itemStartDate:string = (<htmlInputElement> 
        document.getElementById("end-date")).value;
    item.endDate = new Date(itemEndDate);


    item.isComplete = (<HTMLInputElement>document.getElementById("is-complete")).checked;

    let urgencyElem = <HTMLSelectElement>
        document.getElementById("urgency");
    item.urgency =
        urgencyElem.options[urgencyElem.selectedIndex].text;

    return item;
}