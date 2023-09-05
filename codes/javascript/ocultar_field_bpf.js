/**
 * @name ocultar_field_bpf • Ocultar campos do Business Process Flow
 * @description
 * 
 * 1. Troque o valor "fieldName" pelo nome lógico do campo que deseja ocultar
 */

function OcultarCampoBPF (executionContext) {
    const formContext = executionContext.getFormContext();

    formContext.getControl('header_process_[fieldName]').setVisible(false);
    formContext.getControl('header_process_[fieldName]').setVisible(false);
}
