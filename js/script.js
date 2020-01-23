function abrirMenu(){
	var botaoAbrir = document.getElementById('menu_list')
	botaoAbrir.style.display = "block"
	document.getElementById('botao_fechar').style.display = 'block'
}

function fecharMenu(){
	var botaoFechar = document.getElementById("menu_list")
	botaoFechar.style.display = "none"
}