var suma = function(){

    var valorx = document.getElementById("Nombre1").value
    var valory = document.getElementById("Nombre2").value

   var resultado = (parseInt(valorx) + parseInt(valory))

   document.getElementById("resultado").innerHTML = "Su resultado es "+"<br>"+ resultado;
}

var resta = function(){

    var valorx = document.getElementById("Nombre1").value
    var valory = document.getElementById("Nombre2").value

   var resultado = (parseInt(valorx) - parseInt(valory))

   document.getElementById("resultado").innerHTML = "Su resultado es "+"<br>"+ resultado;
}

var multiplicar = function(){

    var valorx = document.getElementById("Nombre1").value
    var valory = document.getElementById("Nombre2").value

   var resultado = (parseInt(valorx) * parseInt(valory))
   document.getElementById("resultado").innerHTML = "Su resultado es "+"<br>"+ resultado;

}

var dividir = function(){

    var valorx = document.getElementById("Nombre1").value
    var valory = document.getElementById("Nombre2").value

   var resultado = (parseInt(valorx) / parseInt(valory))
   document.getElementById("resultado").innerHTML = "Su resultado es "+ "<br>"+ resultado;

}
   
