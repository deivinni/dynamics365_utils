/**
 * @name bloquear_campos_grade_editavel • Bloquear campos da grade editável
 * @description
 * 
 * 1. Troque o valor "fieldName" pelo nome lógico dos campos que deseja bloquear
 */

function fnDisableGrid (context) {
  const formContext = context.getFormContext();

  formContext.data.entity.attributes.forEach((attribute) => {
    const attrFieldForDisable = ["fieldName", "fieldName", "fieldName"];
    const attrName = attribute.getName();

    if (attrFieldForDisable.indexOf(attrName) > -1) attribute.controls.get(0).setDisabled(true);
  });
}
