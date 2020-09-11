(function () {

    var pokemon = [
        "images/bulbasaur.jpeg",
        "images/charmander.png",
        "images/flareon.png",
        "images/sandschrew.png",
        "images/squirtle.png",
        "images/pikachu.png"
    ];
    /*-----------Randomizing images--------------*/
    var card = pokemon.concat(pokemon);

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    var randomCard = shuffle(card);
    for (var i = 0; let i < randomCard.length;
    i++
)
    { document.getElementById("imgb-" + i).src = randomCard[i];
    }

    /*------------Turning images-----------------*/


})();

/*
var count = 1;
        Array.from(document.querySelectorAll("button")).forEach(function ($btn, index) {
            $btn.addEventListener("click", function () {
                document.getElementById("img-" + index).src = randomCard[index];
                if (count <2) {
                    function fixCardTwo() {
                        var cardTwo = randomCard[index];
                        var indexCardTwo=index;
                        //count = 0;
                    }
                } else {
                    function fixCardOne() {
                        var cardOne = randomCard[index];
                        var indexCardOne=index
                    };
                }
            });
        });

        function match() {
            let promiseFirst = Promise.resolve(cardOne)
            promiseFirst.then(value => {
                let promiseTwo = Promise.resolve(cardTwo)
                promiseTwo.then( result=> {
                    if(cardOne !== cardTwo){setTimeout(function () {
                        document.getElementById("img-" + indexCardOne).src = "images/pokeball.png";
                        document.getElementById("img-" + indexCardTwo).src = "images/pokeball.png";
                    }, 1000);}
                })
            })

        }
*/
/* 1 get the card //
* 2 loop over them and listen for event => flipping function, get the id of the card
* 3 create array to check if the same
* 4 if card1 != card2 turn back else stay
* 5 counter=1
* 6 src images
* 7 creating the flipping function with the parameter card-id
* 8 in Flipping function => get the card by id// let card = document.getElementById(${imageId}) (can put parameter of the function)
* 9 generate random index => get random images (srcimg[randomIndex])
* 10 push random generate images to check array
* 11 if counter<2 firstcard= display random image, flip it counter++ => and remove from random sources images
* 12 else if firstcard.src= secondcard.src then display the second
* 13 else flip both counter-- + firstcard=""+ checkarray=""
*
* */
