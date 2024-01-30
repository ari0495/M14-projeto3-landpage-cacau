$(document).ready(function () {

    $('.telefone').mask('(00) 00000-0000');

    $('#fale-conosco form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome",
                minlength: "Seu nome deve ter pelo menos 3 caracteres"
            },
            email: {
                required: "Por favor, insira seu melhor E-mail",
                email: "Por favor, insira um e-mail válido"
            },
            telefone: {
                minlength: "Por favor, insira um telefone válido",
                maxlength: "Por favor, insira um telefone válido"
            },
            mensagem: {
                required: "Por favor, insira sua mensagem",
                minlength: "Sua mensagem deve ter pelo menos 10 caracteres"
            }
        },
        
        submitHandler: function(form) {
            form.submit();
            alert('Formulário Enviado! Obrigado.');
        },
        invalidHandler: function(event, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        },
        errorClass: "error",
        errorElement:"span",
    })
});