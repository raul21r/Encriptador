
function desencriptar()
{
	let texto_desenciptar = document.getElementById("textoEncriptar").value.toLowerCase();
	
	let textoDesencriptado =texto_desenciptar.replace(/enter/img, "e");
	textoDesencriptado =textoDesencriptado.replace(/imes/img, "i");
	textoDesencriptado =textoDesencriptado.replace(/ober/img, "o");
	textoDesencriptado =textoDesencriptado.replace(/ufat/img, "u");
	textoDesencriptado =textoDesencriptado.replace(/ai/img, "a");
	
	document.getElementById("resultado").innerHTML = textoDesencriptado;
}
