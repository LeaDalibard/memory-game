(function () {

    var pokemon = [
        "images/bulbasaur.jpeg",
        "images/charmander.png",
        "images/flareon.png",
        "images/sandschrew.png",
        "images/squirtle.png",
        "images/pikachu.png"
    ];

        Array.from(document.querySelectorAll("button")).forEach(function ($btn, index) {
            $btn.addEventListener("click", function () {
                var random = Math.floor(Math.random() * 5);
                document.getElementById("img-"+ index).src = pokemon[random];
            });
        });

})

();