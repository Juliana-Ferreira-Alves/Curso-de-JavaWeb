/**
 * Confirmador de exclusao de um contato
 * @author Juliana Alves
 * @param idcon
 */

function confirmar(idcon){
	let resposta = confirm("Confirma a exclusão deste contato ?")
	if(resposta === true){
		//alert(idcon)
		window.location.href = "delete?idcon=" + idcon
	}
}
