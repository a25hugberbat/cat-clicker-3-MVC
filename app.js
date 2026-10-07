let data = {
    catActive: 0,
    ncats: 5,
    gatos: [
        { name: "Manuel",          image: "resources/cat1.jpg", nclicks: 0 },
        { name: "Gato Marciano",   image: "resources/cat2.jpg", nclicks: 0 },
        { name: "Gatendrik Lamer", image: "resources/cat3.jpg", nclicks: 0 },
        { name: "Gato Soviético",  image: "resources/cat4.jpg", nclicks: 0 },
        { name: "Gato Fresa",      image: "resources/cat5.jpg", nclicks: 0 }
    ]
};

let model = {
    //si no está inicializado, inicializa
    init: function() {
        //AQUI NO HAY QUE HACER
    },
    getGatos: function() {
        return data.gatos;
    },
    getGatoActual: function(){
        return data.gatos[data.catActive];
    },
    setGatoActual: function(index){
        data.catActive = index;
    },
    sumarClick: function(){
        data.gatos[data.catActive].nclicks++;
    }
};


let controller = {
    getGatos: function() {
        return model.getGatos();
    },

    getGatoActual: function(){
        return model.getGatoActual();
    },
    setGatoActual: function(index){
        model.setGatoActual(index);
        view.renderGatoActual();
    },
    sumarClick: function(){
        model.sumarClick();
        view.renderGatoActual();
    },
    init: function() {
        model.init();
        view.init();
    }
};


let view = {
    init: function() {
        document.getElementById("cat-img").addEventListener("click", function(){
            controller.sumarClick();
        });

        view.renderLlista();
        view.renderGatoActual();
    },
    renderLlista: function(){
        let datos=controller.getGatos();
        htmlStr=""
            datos.forEach((element,index) => {
                htmlStr += `<li id='${index}' class="list-group-item list-group-item-action">${element.name}</li>`
            });
            document.getElementById("cat-list").innerHTML=htmlStr;

        datos.forEach((element,index) => {
            document.getElementById(index).addEventListener("click", function(){
                controller.setGatoActual(index);
            });
        });
    },
    renderGatoActual: function(){
        let datosGatoActual =  controller.getGatoActual();
        document.getElementById("cat-img").src=datosGatoActual.image
        document.getElementById("cat-name").innerHTML=datosGatoActual.name;
        document.getElementById("cat-clicks").innerHTML=datosGatoActual.nclicks;
    }

};

controller.init();






// let data =  {
//     catActive: 0,
//     gatos: [
//         { name: "Manuel",   image: "resources/cat1.jpg",  nclicks: 0 },
//         { name: "Gato Marciano",   image: "resources/cat2.jpg",  nclicks: 0 },
//         { name: "Gatendrik Lamer",   image: "resources/cat3.jpg",  nclicks: 0 },
//         { name: "Gato Soviético",   image: "resources/cat4.jpg",  nclicks: 0 },
//         { name: "Gato Fresa",   image: "resources/cat5.jpg",  nclicks: 0 }
//     ]
// };

// const list  = document.getElementById('cat-list');
// const name  = document.getElementById('cat-name');
// const img  = document.getElementById('cat-img');
// const clicks  = document.getElementById('cat-clicks');
 
// // Pinta en la zona el gato activo
// function renderCat(){
//     const gato = data.gatos[data.catActive];
//     name.textContent    = gato.name;
//     img.src             = gato.image;
//     img.alt             = gato.name;
//     clicks.textContent  = gato.nclicks;

//     // Resaltar el gato activo en la lista
//   const items = document.querySelectorAll('#cat-list li');
//   items.forEach(function (li, i) {
//     li.classList.toggle('active', i === data.catActive);
//   });
// }

// // Crea la lista de nombres
// data.gatos.forEach(function (gato, index){
//     const li = document.createElement('li');
//     li.textContent = gato.name;
//     li.className = 'list-group-item list-group-item-action' // añade la clase "list-group-item" y "list-group-item-action" para que cambie el backround color
//     li.style.cursor = 'pointer';                            // el ratón cambia a "clickable" (la mano)

//     li.addEventListener('click', function(){
//         data.catActive = index;        // cambia el gato seleccionado
//         renderCat();                   // y vuelve a pintar
//     });

//     list.appendChild(li);
// });

// // Clic en la foto -> suma al gato activo
// img.addEventListener('click', function(){
//     data.gatos[data.catActive].nclicks++;
//     renderCat(data.catActive);
// });