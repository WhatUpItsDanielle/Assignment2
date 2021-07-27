//example of budgets[] for testing purposes
const budgets = [                          
    {title: "Savings", description:"", item1:"2", item2:"3", total:"5"}
]



const bttn = document.querySelector("#new")
bttn.addEventListener('click', toggle("new"));

const add = document.querySelector("#addItem")
add.addEventListener('click', extraItem());

const saveBttn = document.querySelector("#save")
saveBttn.addEventListener('click', toggle("all"));

function newCard(){
    console.log("function newCard")
    //creates area for new card to have input given

    const ticket=
    `<div class="budget">
        <label for="title">Title: </label>
        <input type="text" name="title" id="get-name"></input>

        <label for="description">Description: </label>
        <input type="text" name="description" id="get-des"></input>

        <label for="item">Item:</label>
        <input type="text" name="item" id="get-item"></input>
    </div>`
    
    const cardArea = document.querySelector('.main')
    cardArea.insertAdjacentHTML('beforeend', ticket)
}

function extraItem(){
    console.log("function extraItem")
    const itemInput=`<label for="item">Item:</label>
    <input type="text" name="item" id="get-item"></input>`
    addingEvent = document.querySelector(".budget")
    addingEvent.insertAdjacentHTML('beforeend', itemInput)
}

function cardTemplate(){
    console.log("function cardTemplate")
    for(i of budgets){
        const card=
            `<section class= "ticket">
                <h2>budgets[i].title</h2>
                <p>budgets[i].description</p>

                <ul>
                    ${items()}
                </ul>
                <p>$${totalCost(budgets.item)}</p>
            </section>`

    addCard = document.querySelector(".main")
    addCard.insertAdjacentHTML('beforeend', card)
    }
    
}

function items(){
    console.log("function items")
    const itemLiteral = "";
    for (const i = 2; i<budgets.length -1; i ++){
        itemLiteral +=`<li>$${budgets.i}</li>`
    }
    return(itemLiteral)
}

function totalCost(costs){
    console.log("funciton totalCost")
    const total = 0;
    for (const i = 2; i<budgets.length -1; i ++){
        total +=budgets.i;
       }
}

// function getInput(place){
//     const input = document.querySelector(place)
    
//     budgets[place] = input;
    
//     return(input)
// }

function toggle(caller){
    console.log("function toggle")
    //hides and un-hides either the ticket screen or the individual editing screen
    //individual: input feilds for name and items, shows total and delete button
    //all: shows all cards


    //check what is currently up and what it is being switched to
    //>>new budget button- input areas
    //>>save button - current working card is displayed
    //>>all budgets button - hide current working cards and display all cards
    if (caller === "new"){
        //display new budget input areas (show .inputCard buttons)
        const additionalButtons = 
        `<div class="inputCard">
            <button class="bttn" id="addItem">Add Item</button>
            <button class="bttn" id="save">Save</button>
            <button class="bttn" id="delete">Delete</button>
        </div>`

        const cardArea = document.querySelector('.main')
        cardArea.insertAdjacentHTML('beforeend', additionalButtons)
        
        newCard();
    }else{
        // display all budget cards (hide .inputCard buttons)
        cardTemplate();
    }


}
