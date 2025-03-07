
// Método para agregar elementos al cuadro combinado
function AgregarEducacion() {
    var arr_educacion = ["Seleccionar un valor", "Primaria", "Secundaria", "Superior Técnico", "Superior Universitario"];
    var cbo = document.getElementById("cboeducacion");
    var nuevo = null;
    for (var i = 0; i < arr_educacion.length; i++) {
        nuevo = document.createElement("option")
        nuevo.text = arr_educacion[i];
        cbo.appendChild(nuevo);
    }
}


// Método para validar cada campo del formulario
// Capturar cada campo
// Validar según sea el caso
// Generar el reporte a mostrar
function ValidarFormulario() {
    var nombre = document.getElementById("txtnombre");
    var apellido = document.getElementById("txtapellido");
    var educacion = document.getElementById("cboeducacion");

    var nv1 = document.getElementById("rbtnv1");
    var nv2 = document.getElementById("rbtnv2");
    var nv3 = document.getElementById("rbtnv3");

    var c1 = document.getElementById("chkc1");
    var c2 = document.getElementById("chkc2");
    var c3 = document.getElementById("chkc3");
    var c4 = document.getElementById("chkc4");
    var c5 = document.getElementById("chkc5");
    var c6 = document.getElementById("chkc6");

    //Validar nombre
    if (nombre.value == "") {
        alert("Ingrese nombre del participante");
        nombre.focus();
        return;
    }

    //validar apellido
    if (apellido.value == "") {
        alert("Ingrese apellido del participante");
        apellido.focus();
        return;
    }

    //validar educación
    if (educacion.selectedIndex == 0) {
        alert("Seleccione nivel de educación");
        educacion.focus();
        return;
    }

    //validar el nivel de Inglés
   if(nv1.checked == false && nv2.checked == false && nv3.checked == false){
       alert("Seleccione nivel de Inglés");
       return;
   }

   var nivel = "";
   if(nv1.checked)
   nivel="Básico";

   if(nv2.checked)
   nivel="Intermedio";

   if(nv3.checked)
   nivel="Avanzado";


   var cursos = "<ul>";
   if(c1.checked)
   cursos +="<li>HTML5</li>";

   if(c2.checked)
   cursos +="<li>JavaScript</li>";

   if(c3.checked)
   cursos +="<li>React</li>";

   if(c4.checked)
   cursos +="<li>Angular JS</li>";

   if(c5.checked)
   cursos +="<li>Visual Studio</li>";

   if(c6.checked)
   cursos +="<li>PHP</li>";

   cursos+="</ul>";

   var reporte ="";
   reporte += "<h2>Datos Registrados</h2>";
   reporte += "Postulante      :" + " "  + nombre.value + " " + apellido.value + "<br/>";
   reporte += "Estudiante      :" + " " + educacion.options[educacion.selectedIndex].text + "<br/>";
   reporte += "Nivel de Inglés :" + " " + nivel + "<br/>";
   reporte += "Conocimientos   :" + cursos + "<br/>";

   document.getElementById("reporte").style.visibility = "visible";
   document.getElementsByClassName("contenido-texto")[0].innerHTML = reporte;

}


// Método para limpiar el formulario y el reporte
function LimpiarFormulario(){
    document.getElementById("frmficha").reset();
    document.getElementsByClassName("contenido-texto")[0].innerHTML = "";
    document.getElementById("txtnombre").focus();
}

function CerrarReporte(){
    document.getElementById("reporte").style.visibility = "hidden";
}


// Método anónimo para invocar
window.onload = function () {
    AgregarEducacion();
    
    document.getElementById("btnaceptar").onclick = ValidarFormulario;
    document.getElementById("btnlimpiar").onclick = LimpiarFormulario;
    document.getElementById("btncerrar").onclick = CerrarReporte;
}


