(function () {

    var pokemon = [
        "images/bulbasaur.jpeg",
        "images/charmander.png",
        "images/flareon.png",
        "images/sandschrew.png",
        "images/squirtle.png",
        "images/pikachu.png"
    ];

    const randomArray = []
    for (let i = 0; i < 11; i++) {
        var randomImg=
        randomArray.push(Math.floor(Math.random() * 11))
    }
    var x = document.getElementsByTagName("td");
    for (let i = 0; i < length; i++) {
        x[i].innerHTML = randomArray[i];
    }

    x.forEach(index=>  x[index].innerHTML = randomArray[index]);

        Array.from(document.querySelectorAll("button")).forEach(function ($btn, index) {
            $btn.addEventListener("click", function () {
                var random = Math.floor(Math.random() * 5);
                document.getElementById("img-"+ index).src = pokemon[random];
            });
        });

})

();