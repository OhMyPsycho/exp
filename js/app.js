// cursor
// var cursor = document.querySelector('.cursor');
// var cursorCircle = document.querySelector('.cursor_circle');
// document.addEventListener('mousemove', function(e) {
//      cursor.style.left = e.pageX+'px';
//      cursor.style.top = e.pageY+'px';
//      cursorCircle.style.left = e.pageX-10+'px';
//      cursorCircle.style.top = e.pageY-10+'px';
// })

// JSON imagenes
var db = [
    {id: 1, url: 'images/1.jpg'},
    {id: 2, url: 'images/2.jpg'},
    {id: 3, url: 'images/3.jpg'},
    {id: 4, url: 'images/5.jpg'},
    {id: 5, url: 'images/6.jpg'},
]

// open menu
var mp = {
    btn: document.querySelector('.main_icon'),
    layerOne: document.querySelector('.menu_'),
    layerTwo: document.querySelector('.layer_1'),
    menu: false,
    btnicon: {
        top: document.querySelector('.main_icon .line-top'),
        bottom: document.querySelector('.main_icon .line-bottom'),
        center: document.querySelector('.main_icon .line-center'),
    },
    ulNav: document.querySelector('.lista_nav')
}

var mm = {
    menuInit: function() {
        mp.btn.addEventListener('click', mm.mostarLayerOne);
    },
    mostarLayerOne: function() {
        if(mp.menu == false) {
            mp.menu = true;
            //layer
            mp.layerOne.style.height = '100%';
            mp.layerTwo.style.height = '100%';
            mp.ulNav.style.transition = 'all ease .4s';
            //boton
            mp.btnicon.top.style.position = 'absolute';
            mp.btnicon.center.style.transform = 'rotate(-45deg)';
            mp.btnicon.top.style.width = '30px';
            mp.btnicon.top.style.transform = 'rotate(45deg)';
            mp.btnicon.bottom.style.opacity = 0;

            setTimeout(function() {
                mp.ulNav.style.display = 'block';
                mp.ulNav.style.opacity = 1;
                mp.ulNav.style.marginBottom = 0;
            }, 500)

        } else {
            mp.menu = false;

            setTimeout(function() {
                mp.ulNav.style.display = 'none';
                mp.layerOne.style.height = 0;
                mp.layerTwo.style.height = 0;
                //boton
                mp.btnicon.top.style.position = 'relative';
                mp.btnicon.center.style.transform = 'rotate(0deg)';
                mp.btnicon.top.style.width = null;
                mp.btnicon.top.style.transform = 'rotate(0deg)';
                mp.btnicon.bottom.style.opacity = 1;
            },100)
        }
    }
}

mm.menuInit();

//aside
var ap = {
    items: document.querySelectorAll('.menu li'),
    visor: document.querySelector('#visor'),
    marcador: document.querySelector('.marcador'),
    pMarcador: document.querySelector('#p_marcador'),
    pTotal: document.querySelector('#p_total'),
}

var am = {
    asideInit: function() {
        ap.visor.setAttribute('src', db[0].url);
        for (var i = 0; i < ap.items.length; i++) {
            ap.items[i].setAttribute('item', i+1)
            console.log(db[i]);
            console.log(ap.items[i]);
            ap.items[i].addEventListener('mouseover', am.getAttr);
        }

    },
    getAttr: function(e) {
        var num = e.target.getAttribute('item');
        for (var i = 0; i < db.length; i++) {
            if(db[num-1].id == num) {
                ap.visor.style.transform = 'scale(1.1)';
                ap.visor.style.opacity = 0.1;
                ap.marcador.style.marginBottom = '20px';
                setTimeout(function() {
                    ap.visor.setAttribute('src', db[num-1].url);
                    ap.marcador.innerHTML = '0'+db[num-1].id;
                    ap.pMarcador.innerHTML = '0'+db[num-1].id;
                    ap.visor.style.transform = 'scale(1)';
                    ap.visor.style.opacity = 1;
                    ap.marcador.style.marginBottom = '-20px';
                },300)
                console.log(db[num-1]);
            }
        }
        ap.pTotal.innerHTML = '0'+db.length;
    }
}

am.asideInit();
