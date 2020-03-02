
function renderPokerHand() {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder 
    for (i=0; i < 5;i++){
     return `<div class="text-center mt-5">
        <img src="cards/${pokerHandAbs[i].value}${pokerHandAbs[i].suit}.png" width="100"/>
        </div>`
       }
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

function pokerHand() {
    var content = document.getElementById('content');

    

    content.innerHTML = renderPokerHand(pokerHandAbs);

}