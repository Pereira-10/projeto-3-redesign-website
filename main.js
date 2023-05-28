  $('document').ready(function () {
    // Máscara
    $('#telefone').mask('(00) 9 0000-0000', {
      translation: {
        9: {
          pattern: /[9]/,
          optional: false,
        },
      },
      placeholder: '(00) 9 0000-0000',
    });
      
    // Validação
    $('form').validate({
      rules: {
        nome: {
          required: true,
        },
        email: {
          required: true,
        },
        telefone: {
          required: true,
        },
        mensagem: {
          required: true,
        },
      },
      messages: {
        nome: {
          required: 'Insira seu nome aqui',
        },
        email: {
          required: 'Insira seu e-mail aqui',
        },
        telefone: {
          required: 'Insira seu telefone aqui',
        },
        mensagem: {
          required: 'Esse campo é obrigatório',
        },
      },
    });
  });