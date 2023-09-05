/**
 * @name limpar_campos_option_value • Limpar multiplos campos de opções que possuem um valor específico
 * @description
 * 
 * 1. Troque o valor "fieldName" pelo nome lógico do campo de opções
 * 2. Troque o valor "value" pelo código de identificação da opção que deseja limpar
 */

function LimparCampos (executionContext) {
    "use strict";

    const formContext = executionContext.getFormContext();
    const attribute = formContext.getAttribute('fieldName');

    // caso você não precise que seja executado a partir da modificação de um campo booleano, utilize apenas o que está dentro do próximo escopo
    if (attribute && attribute.getValue() === true) {
        const fields = [/* array de string com o nome lógico dos campos */];
    
        for (const fieldName of fields) {
            const control = formContext.getAttribute(fieldName);
    
            if (control && control.getValue() === [value]) {
                control.setValue(null);
            }
        }

        formContext.data.entity.save();
    }
}
