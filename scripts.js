// add ready listener to the whole dom

$(document).ready(()=>{
    // will target the thing clicked on bc of this
    $("button").click(function(){
        // console.log($(this));
        // attr method will get the value of that attribute
        let gridSize = $(this).attr("diff");
        // console.log(gridSize);
        let cards = [];
        // our monsters start at 1 so start i at 1
        // every time through the loop, we push 2 monsters on because this is a matching game, we need 2 
        // so we loop half of the grid size (gridsize/ 2) but we need to add one because we started at 1 not 0
        // or we need to end at <= 
        for (let i = 1; i <= (gridSize/2); i++){
            let monsterNumber = i;
            if(i<10){
                monsterNumber = "0" + i;
            }
            cards.push(`<img src="./images/monsters-${monsterNumber}.png" />`);
            cards.push(`<img src="./images/monsters-${monsterNumber}.png" />`);
        }
        cards = shuffleDeck(cards);
        // console.log(cards);
        let memoryHTML = "";
        // init a var to store our html inside of and loop through all of the cards
        cards.forEach((card)=>{
            memoryHTML += `
            <div class="card col-sm-3">
                <div class="card-holder">
                    <div class="card-front">${card}</div>
                    <div class="card-back"></div>
                </div>
            </div>
            `
        })
        // console.log(memoryHTML);
        $(".memory-game").html(memoryHTML);

        // user just clicked on a card
        $(".card-holder").click(function(){
            $(this).addClass("flip");
            let cardsUp = $(".flip");
            // if cards up has two elemetns, then this is the 2nd card
            if (cardsUp.length === 2){
                const card1 = cardsUp[0];
                const card2 = cardsUp[1];
                if(card1.innerHTML == card2.innerHTML){
                    // these cards match
                    // remove flip
                    cardsUp.removeClass("flip");
                    cardsUp.addClass("matched");
                } else{
                    // these are not a match bc the html is
                    // js is too fast, we have to let the user see the card before we flip it back
                    // settimeout to the resue
                    setTimeout(()=>{
                        cardsUp.removeClass("flip");
                    }, 2000);
                }
            } else {
                // only one card card up, do nothing
            }
        })
    })
})

function shuffleDeck(aDeckToBeShuffled){
    // loop a lot
    // when the loop is done, the array will be shuffled
    for(let i =0; i < 100000; i++){
        let rand1 = Math.floor(Math.random() * aDeckToBeShuffled.length);
        let rand2 = Math.floor(Math.random() * aDeckToBeShuffled.length);
        // we need to switch adeckToBeShuffled[rand1] with adeckToBeShuffled[rand2]
        // but we have to save the value of one of them so we can keep it for later
        let card1Defender = aDeckToBeShuffled[rand1];
        aDeckToBeShuffled[rand1] = aDeckToBeShuffled[rand2];
        aDeckToBeShuffled[rand2] = card1Defender;
    }
    return aDeckToBeShuffled;
}

