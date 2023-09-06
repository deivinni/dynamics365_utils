/**
 * @name usuario_atual • Define em um campo o nome e email do usuário logado
 * @description
 * 
 * 1. Troque o valor "fieldName_UserName" pelo nome lógico do campo que tera o nome do usuário
 * 2. Troque o valor "fieldName_UserEmail" pelo nome lógico do campo que tera o email do usuário
 */

function UsuarioAtual (executionContext) {
  const formContext = executionContext.getFormContext();
  const currentUser = Xrm.Utility.getGlobalContext().userSettings;
  
  formContext.getAttribute('fieldName_UserName').setValue(currentUser.userName);
  
  Xrm.WebApi.retrieveRecord('systemusers', currentUser.userId, '?$select=internalemailaddress').then(
    function (result) {
      formContext.getAttribute('fieldName_UserEmail').setValue(result.internalemailaddress)
    },
    function (error) {
      console.error(error.stack)
    }
  )
}
