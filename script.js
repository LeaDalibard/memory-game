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

        /*------------Turning images-----------------*/

        var count = 0;
        Array.from(document.querySelectorAll("button")).forEach(function ($btn, index) {
            $btn.addEventListener("click", function () {
                count = count + 1;
                document.getElementById("img-" + index).src = randomCard[index];
                if (count === 2) {
                    function fixCardTwo() {
                        var cardTwo = randomCard[index]
                        var indexCardTwo=index
                        console.log(cardTwo);
                        //count = 0;
                    }
                } else {
                    function fixCardOne() {
                        var cardOne = randomCard[index]
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


    })();

/*

 Array.from(document.querySelectorAll("button")).forEach(function ($btn, index) {
            $btn.addEventListener("click", function () {
                count = count + 1;
                document.getElementById("img-" + index).src = randomCard[index];
                if (count === 2) {
                    cardTwo = randomCard[index];
                } else {
                    cardOne = randomCard[index];
                }
                if (cardOne !== cardTwo) {
                    function returnCard() {
                        setTimeout(function () {
                            document.getElementById("img-" + index).src = "images/pokeball.png";
                        }, 5000);
                    };
                    var count = 0;
                    cardOne = "";
                    cardTwo = "";
                } else {
                    var count = 0;
                    cardOne = "";
                    cardTwo = "";
                }

            });
        });
    }
)
*/

