function carrousel5Images() {
    var article__5img = document.querySelectorAll('.galerie');
    let d = 2000;
    let delta = 1000;

    article__5img.forEach(function(img,indice) {
        img.style.zIndex = article__5img.length - indice;
    });

    let animGalerie = anime.timeline({
        loop: true,
        delay: 0
    });

    animGalerie.add({
        targets: article__5img,
        translateX: [{value: '375', duration: d},
                     {value: '-375', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (4*delta)+(3*d);
                         if (ind == 1) return (3*delta)+(2*d);
                         if (ind == 2) return (2*delta)+d;
                         if (ind == 3) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 4) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            if (ind == 3) return (4*delta)+(3*d);
            return (5*delta)+(4*d);
        }
    });
}