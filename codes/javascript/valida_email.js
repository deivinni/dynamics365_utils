/**
 * @name valida_email • Verifica se o valor contido em um campo é um email
 * @description
 * 
 * Na chamada da função passe o nome lógico do campo como string para o parâmetro "fieldName"
 */

function ValidaEmail (executionContext, fieldName) {
	const formContext = executionContext.getFormContext();
	
	const validate = (email) => {
		if (email == null) return true;

		const regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return regexp.test(email);
	}

	if (!validade(formContext.getAtrribute(fieldName).getValue())) {
		formContext.getControl(fieldName).setNotification("Este e-mail é inválido!");
	} else {
		formContext.getControl(fieldName).clearNotification();
	}
}
