
function renderPokerHand(pokerHandAbstraction,all) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    var all = '';
    var i;
    for (i=0;i<pokerHandAbstraction.length;i++){ 
         all += `<img src="cards/${pokerHandAbstraction[i].value+pokerHandAbstraction[i].suit+".png"}" width="100"/>`
    }
    return  `
    <div> ${all} </div>
   
    `
}

var pokerHandAbs = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    },
    {
        value: "9",
        suit: "S"
    },
    {
        value: "2",
        suit: "H"
    },
    {
        value: "9",
        suit: "H"
    }
]
>>>>>>> origin

function pokerHand() {
    var content = document.getElementById('content');

    

<<<<<<< HEAD
 content.innerHTML = renderPokerHand(pokerHandAbstraction);
=======
    content.innerHTML = renderPokerHand(pokerHandAbs);
>>>>>>> origin

}