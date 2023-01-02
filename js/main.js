let items = [
    {   
        id: 1,
        value: 1,
        src: 'img/album1.png'
    },
    {   
        id: 2,
        value: 2,
        src: 'img/album2.png'
    },
    {   
        id: 3,
        value: 3,
        src: 'img/album3.png'
    },
    {   
        id: 4,
        value: 4,
        src: 'img/album4.png'
    },
    {   
        id: 5,
        value: 5,
        src: 'img/album5.png'
    },
    {   
        id: 6,
        value: 6,
        src: 'img/album6.png'
    },
    {   
        id: 7,
        value: 7,
        src: 'img/album7.png'
    },
    {   
        id: 8,
        value: 8,
        src: 'img/album8.png'
    },
    {   
        id: 9,
        value: 1,
        src: 'img/album1.png'
    },
    {   
        id: 10,
        value: 2,
        src: 'img/album2.png'
    },
    {   
        id: 11,
        value: 3,
        src: 'img/album3.png'
    },
    {   
        id: 12,
        value: 4,
        src: 'img/album4.png'
    },
    {   
        id: 13,
        value: 5,
        src: 'img/album5.png'
    },
    {   
        id: 14,
        value: 6,
        src: 'img/album6.png'
    },
    {   
        id: 15,
        value: 7,
        src: 'img/album7.png'
    },
    {   
        id: 16,
        value: 8,
        src: 'img/album8.png'
    },
];

// desordena los elementos del arreglo
items = items.sort(function() {return Math.random() - 0.5});

const newGameBtn = document.getElementById('newGameBtn');
const table = document.getElementById('table');
const score = document.getElementById('score');

let values = [];
let ids = [];

// se agregan los albumes al contenedor
items.forEach(item => {
    const tableItem = document.createElement('article');
    const tableItemFront = document.createElement('button');
    const tableItemBack = document.createElement('button');

    tableItem.setAttribute('class', 'table__item');
    tableItem.setAttribute('id', item.id);

    tableItemFront.setAttribute('class', 'table__item--front');
    tableItemBack.setAttribute('class', 'table__item--back');
    tableItemFront.setAttribute('value', item.value);
    tableItemBack.setAttribute('value', item.value);

    tableItemBack.style.backgroundImage = `url(${item.src})`;

    tableItem.append(tableItemFront, tableItemBack);
    table.appendChild(tableItem);

    tableItemFront.addEventListener('click', ()=> {
        tableItemFront.style.transform = 'rotateY(180deg) perspective(500px)';
        tableItemBack.style.transform = 'rotateY(360deg) perspective(500px)';

        tableItemFront.disabled = true;

        ids.push(tableItem.id);             // se guarda la id del contenedor de los 2 botones
        values.push(tableItemBack.value);   // se almacena el valor del botón

        let firstItemSelectedChild1 = document.getElementById(ids[0]).firstChild;
        let firstItemSelectedChild2 = document.getElementById(ids[0]).children[1];

        // una vez se hayan seleccionado 2 albumes, se comparan los valores de estos
        if (values.length == 2 && ids.length == 2) {

            if (values[0] == values[1]) {
                // limpiamos los arreglos
                ids = [];
                values = [];
                // agregamos un punto cuando se encuentre una coincidencia
                score.innerHTML = parseInt(score.textContent)+1;

                // cuando se consigan 8 puntos se detiene el temporizador
                if (score.textContent == '8') {
                    clearInterval(timer);
                }

            } else {

                // ocultamos nuevamente los items
                setTimeout(()=>{
                    firstItemSelectedChild1.style.transform = 'rotateY(0deg) perspective(500px)';
                    firstItemSelectedChild2.style.transform = 'rotateY(180deg) perspective(500px)';
                    tableItemFront.style.transform = 'rotateY(0deg) perspective(500px)';
                    tableItemBack.style.transform = 'rotateY(180deg) perspective(500px)';
        
                    firstItemSelectedChild1.disabled = false;
                    tableItemFront.disabled = false;
                }, 1000);
    
                ids = [];
                values = [];
                
            }
        }
    });
})

// se recarga la página
newGameBtn.addEventListener('click', ()=>{
    location.reload();
});