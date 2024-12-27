var makeItRain = function() {
    // Vider les anciennes gouttes de pluie
    document.querySelectorAll('.rain').forEach(function(rain) {
        rain.innerHTML = '';
    });

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
        // Générer des nombres aléatoires pour différentes propriétés CSS
        var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        increment += randoFiver;

        // Créer les gouttes avant et arrière
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5s;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5s;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5s;"></div></div>';
        backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5s;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5s;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5s;"></div></div>';
    }

    document.querySelector('.rain.front-row').innerHTML = drops;
    document.querySelector('.rain.back-row').innerHTML = backDrops;
}

makeItRain();