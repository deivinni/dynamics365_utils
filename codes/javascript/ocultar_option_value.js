/**
 * @name hide_option_value • Ocultar opções de um campo OptionValue
 * @description
 * 
 * 1. Troque o valor "fieldName" pelo nome lógico do campo de opções
 * 2. Troque o valor "value" pela código de identificação da opção em que deseja ocultar
 */

function OcultarOptionSetValue(executionContext) {
    "use strict";

    const formContext = executionContext.getFormContext();
    const optionList = formContext.getControl('fieldName');

    if (optionList !== null) {
        optionList.removeOption(value);
        optionList.removeOption(value);
    }
}
