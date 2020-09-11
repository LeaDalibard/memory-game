(function () {

    var pokemon = [
        "images/bulbasaur.jpeg",
        "images/charmander.png",
        "images/flareon.png",
        "images/sandschrew.png",
        "images/squirtle.png",
        "images/pikachu.png"
    ];



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
    var randomCard= shuffle(card);
    console.log(randomCard);

    Array.from(document.querySelectorAll("button")).forEach(function ($btn, index) {
        $btn.addEventListener("click", function () {
            document.getElementById("img-" + index).src = randomCard[index];
        });
    });

})

();