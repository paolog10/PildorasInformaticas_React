function agregaImagen() {
  //Guardamos en variables lo que ingresa el cliente en el formulario
  var url = document.getElementById("imagenURL").value;
  var pie = document.getElementById("pieFoto").value;

  if (url && pie) {
    var galeria = document.getElementById("galeriaImagenes");

    //creamos de manera dinámica un componente div que adentro tenga una imagen y un párrafo
    var div = document.createElement("div");
    var img = document.createElement("img")
    var p = document.createElement("p")

    //el elemento img creado tiene un source igual a url que pasa el cliente
    img.src = url;
    //img.width = 300;
    //img.height = 250;

    //el elemento p creado tiene un texto igual al pie de foto que pasa el cliente
    p.textContent = pie;

    //Appendear
    div.appendChild(img);
    div.appendChild(p);

    //div creado de forma dinamica agregarlo al div padre
    galeria.appendChild(div);

    //seteamos valores de inputs
    document.getElementById("imagenURL").value = "";
    document.getElementById("pieFoto").value = "";
  } else {
    alert("Ingrese URL y pie de foto")
  }
}