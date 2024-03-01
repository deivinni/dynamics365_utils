if (window.jQuery) {
    (function ($) {
        $(document).ready(function () {
            if (typeof (Page_Validators) == "undefined") return;

            function makeRequired (logicalName) {
                try {
                    if ($("#" + logicalName) != undefined) {
                        $("#" + logicalName).prop("required", true);
                        $("#" + logicalName).closest(".control").prev().addClass("required");
    
                        var newValidator = document.createElement('span');
                        newValidator.style.display = "none";
                        newValidator.id = logicalName + "Validator";
                        newValidator.controltovalidate = logicalName;
                        newValidator.errormessage = `<a href='#${logicalName}_label' referencecontrolid='${logicalName}' onclick='javascript:scrollToAndFocus(\"${logicalName}_label\",\"${logicalName}\");return false;'>${$(`#${logicalName}_label`).html()} é um campo obrigatório.</a>`;
                        newValidator.validationGroup = "";
                        newValidator.initialvalue = "";
                        newValidator.evaluationfunction = function () {
                            var value = $("#" + logicalName).val();
    
                            if (value == null || value == "") {
                                return false;
                            } else {
                                return true;
                            }
                        };
    
                        Page_Validators.push(newValidator);
                    }
                } catch (error) {
                    console.error(error);
                }
            }

            function makeNotRequired (logicalName) {
                if ($("#ValidationSummaryEntityFormView").length) {
                    $("#ValidationSummaryEntityFormView").hide();
                }

                try {
                    if ($("#" + logicalName) != undefined) {
                        $("#" + logicalName).closest(".control").prev().removeClass("required");
                        $("#" + logicalName).prop("required", false);

                        for (i = 0; i < Page_Validators.length; i++) {
                            if (Page_Validators[i].id == logicalName + "Validator") {
                                Page_Validators.splice(i);
                            }
                        }
                    }
                }
                catch (error) {
                    console.error(error);
                }
            }

            // ============================== CÓDIGO AQUI EM BAIXO ==============================

            $("#campo1").change(function () {
              const val = $("#campo1").val();

              if (val == 1) {
                makeRequired("campo2");
              } else {
                makeNotRequired("campo2");
              }
            });
        });
    }(window.jQuery));
}
