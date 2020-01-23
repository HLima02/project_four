function abrirMenu(){
	var botaoAbrir = document.getElementById('menu_list')
	botaoAbrir.style.display = "block"
	if (botaoAbrir.style.display = "block"){
		document.getElementById('botao_fechar').style.display = 'block'
	}
	else{
		document.getElementById('botao_fechar').style.display = 'none'
	}
}

function fecharMenu(){
	var botaoFechar = document.getElementById("menu_list")
	botaoFechar.style.display = "none"
}


function larguraPagina(){
	var largura = window.innerWidth
	console.log(largura)
	if(largura > 665){
		document.getElementById('menu_list').style.display = 'block'
	}
	else{
		document.getElementById('menu_list').style.display = 'none'
		document.getElementById('botao_fechar').style.display = 'none'
	}
}
