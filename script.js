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
        cardOne = "";
        cardTwo = "";
        Array.from(document.querySelectorAll("button")).forEach(function ($btn, index) {
            $btn.addEventListener("click", function () {
                count = count + 1;
                document.getElementById("img-" + index).src = randomCard[index];
                if (count === 2) {
                    cardTwo = randomCard[index]
                } else {
                    cardOne = randomCard[index]
                }
                ;
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

();

/*  var clickOne=Array.from(document.querySelectorAll("button")).forEach(function ($btn, index) {
      $btn.addEventListener("click", function () {
          document.getElementById("img-" + index).src = randomCard[index];
          i = randomCard[index];
          indexI=index;
      });
  });


  Array.from(document.querySelectorAll("button")).forEach(function ($btn, index) {
      $btn.addEventListener("click",clickOne, function () {
          document.getElementById("img-" + index).src = randomCard[index];
          j = randomCard[index];
          indexJ=index;
      });
  });

  if (i !== j){document.getElementById("img-" + indexI).src = "images/pokeball.png";
      document.getElementById("img-" + indexJ).src = "images/pokeball.png";}

})*/

