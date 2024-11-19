$(document).ready(function(){

    $("#telefone").mask("(00) 00000-0000", {
        placeholder: "(00) 00000-0000"
    });

    $("form").validate({
        rules: {
            telefone: {
                required: true,
            },

            email: {
                required: true
            },

            nome: {
                required: true
            },

            terms: {
                required: true
            },
        },

        messages: {
            email: "Por favor, insira seu E-mail.",
            telefone: "Por favor, insira seu telefone.",
            nome: "Por favor, insira seu nome.",
            
            terms: "Você deve aceitar os termos para continuar."
        },

    })

})
