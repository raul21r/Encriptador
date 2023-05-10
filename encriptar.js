function encriptar()
{
	let texto_encriptar = document.getElementById("textoEncriptar").value.toLowerCase();
	
	

	let textoEncriptado =texto_encriptar.replace(/e/img, "enter");
	textoEncriptado =textoEncriptado.replace(/i/img, "imes");
	textoEncriptado =textoEncriptado.replace(/o/img, "ober");
	textoEncriptado =textoEncriptado.replace(/u/img, "ufat");
	textoEncriptado =textoEncriptado.replace(/a/img, "ai");
	
	resultado.value ="";
	resultado.style.backgroundImage = "none";

	document.getElementById("resultado").innerHTML = textoEncriptado;

}


/*function desencriptar()
{
	let texto_desenciptar = document.getElementById("textoEncriptar").value.toLowerCase();
	
	let textoDesencriptado =texto_desenciptar.replace(/enter/img, "e");
	textoDesencriptado =textoDesencriptado.replace(/imes/img, "i");
	textoDesencriptado =textoDesencriptado.replace(/ober/img, "o");
	textoDesencriptado =textoDesencriptado.replace(/ufat/img, "u");
	textoDesencriptado =textoDesencriptado.replace(/ai/img, "a");
	
	document.getElementById("resultado").innerHTML = textoDesencriptado;
}
*/
function copiar_texto()
{
	let copiar = document.querySelector("#resultado");
	copiar.select();
	document.execCommand("copy");
}	
