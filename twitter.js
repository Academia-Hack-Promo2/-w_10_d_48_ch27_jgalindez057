var text = document.createElement("input");
arr = new Array
var div = document.createElement("div");
var img = document.createElement("img");
img.src = "http://imagenes.gatotv.com/categorias/peliculas/personajes/hombre_de_familia-3237.png";

function Texto(){
text.style.width = "370px";
text.style.height = "40px";
text.style.background = "#ebebeb";
text.style.color = "black";
text.style.border = "none";
text.style.borderRadius = "5px";
text.style.margin = "20px 0 0 30px "
text.style.padding = "10px 40px 40px 20px";
text.style.fontFamily = "sans-serif";
text.label = "Coloca aqui tu tweet"

text.type= "text"
text.placeholder = "¿Que estas pensando?"

document.getElementById("base").appendChild(text);

return text
}


function Test(){
var button = document.createElement("input");
button.type= "button"
button.value = "Twittear"
button.style.height = "40px";
button.style.width= "100px";
button.style.border = "none";
button.style.color = "white";
button.style.padding = "5px";
button.style.margin = "20px 0 20px 30px"
button.style.borderRadius = "10px";
button.style.fontFamily = "sans-serif";
button.style.background = "#6495ED"

document.getElementById("base").appendChild(button);
button.addEventListener("click", Arr);

}


function Arr(){

	if (text.value == 0) {
		alert("No estas pensando en nada¿?")
	}else{
	
	var d = new Date()
	var num = arr.length + 1
	var name = "Nicola Cage" + " - "+ "@nicolascage69" + " - " + d.toLocaleDateString() + " - " + "Tweet N:"+  "  " + num +" <br>";
	arr.unshift(name + " "+ ">" + " " +text.value)
	div.innerHTML = arr.join("<br>");
    document.getElementById("base").appendChild(div);
    document.getElementById("base").appendChild(img);

	}

}


ver = Texto();
agregar = Test();
