function validarformulario(){
	//CONTATOS
	let nome = document.getElementById("nome-completo"). value
	let email = document.getElementById("email").value
	let telefone = document.getElementById("telefone").value
	let estado = document.getElementById("estado").value
	let cidade = document.getElementById("cidade").value
			
	if(email == ""){
		alert("O campo email está vazio")
		
	}
	if(nome == ""){
		alert("O campo nome está vazio")
	}
	
	if(telefone == "" || telefone.length < 8){
		alert("O campo telefone está vazio")
		
	}
	
	if(estado == ""){
		alert("O campo estado está vazio")
		
	}
	
	if(cidade == ""){
		alert("O campo cidade está vazio")
		
	}
		
	console.log(nome)
	console.log(email)
	console.log(telefone)
	console.log(estado)
	console.log(cidade)

}	

function validarformulario2(){
	
	
	//CADASTRO
	let nomeUser = document.getElementById("nome-user").value
	let emaile = document.getElementById("emaile").value
	let telefoneC = document.getElementById("telefoneC").value
	let senha = document.getElementById("senha").value
	let senhaC = document.getElementById("senhaC").value
	
	
	if(senha != senhaC ){
		alert("as senhas estão diferentes")
	}
	else{
	console.log(nomeUser)
	console.log(emaile)
	console.log(telefoneC)
	console.log(senha)
	console.log(senhaC)
	}
}


