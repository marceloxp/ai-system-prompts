class CValidator {
    constructor(form_id, onSubmitHandler, element_highlight = 'div') {
        this.form_id = form_id;
        this.form_selector = `#${this.form_id}`;
        this.form = $(this.form_selector);
        this.element_highlight = element_highlight;
        this.onSubmitHandler = onSubmitHandler;

        // Aguarda o DOM estar pronto
        $(() => {
            this.createFormValidator();
        });
    }

    createFormValidator() {
        const self = this; // Armazena o contexto da classe

        // Impede o envio padrão do formulário
        $(this.form_selector).on('submit', function (e) {
            e.preventDefault();
            return false;
        });

        // Configura o validador do formulário
        $(this.form_selector).validate({
            ignore: '',
            errorPlacement: $.noop,
            rules: {
                // Validações básicas
                'name': { required: true, minlength: 3 }, // Nome com no mínimo 3 caracteres
                'cpf': { required: true, cpf: true }, // CPF válido
                'cnpj': { required: true, cnpj: true }, // CNPJ válido
                'email': { required: true, email: true }, // E-mail válido
                'country': { required: true }, // País obrigatório
                'accept': { required: true }, // Aceitar termos
                'over18': { required: true }, // Maior de 18 anos

                // Validações de senha
                'password': {
                    required: true,
                    minlength: 8, // Mínimo de 8 caracteres
                    strongPassword: true // Senha forte (custom validation)
                },
                'confirm_password': {
                    required: true,
                    equalTo: '#password' // Deve ser igual ao campo de senha
                },

                // Validações de telefone
                'phone': {
                    required: true,
                    phoneBR: true // Telefone válido no formato brasileiro (custom validation)
                },

                // Validações de URL
                'website': {
                    required: true,
                    url: true // URL válida
                },

                // Validações de data
                'birthdate': {
                    required: true,
                    dateBR: true // Data válida no formato brasileiro (custom validation)
                },

                // Validações de número
                'age': {
                    required: true,
                    number: true, // Deve ser um número
                    min: 18, // Mínimo de 18 anos
                    max: 120 // Máximo de 120 anos
                },

                // Validações de texto
                'bio': {
                    required: true,
                    maxlength: 500 // Máximo de 500 caracteres
                },

                // Validações de arquivo
                'profile_picture': {
                    required: true,
                    accept: 'image/*', // Apenas arquivos de imagem
                    filesize: 1048576 // Tamanho máximo de 1MB
                },

                // Validações de checkbox múltiplo
                'interests': {
                    required: true,
                    minlength: 2 // Pelo menos 2 interesses selecionados
                },

                // Validações de seleção (select)
                'gender': {
                    required: true
                },

                // Validações de CEP
                'cep': {
                    required: true,
                    cepBR: true // CEP válido no formato brasileiro (custom validation)
                },

                // Validações de cartão de crédito
                'credit_card': {
                    required: true,
                    creditcard: true // Número de cartão de crédito válido
                },

                // Validações de hora
                'time': {
                    required: true,
                    timeBR: true // Hora válida no formato brasileiro (custom validation)
                },

                // Validações de números decimais
                'price': {
                    required: true,
                    decimal: true // Número decimal válido
                },

                // Validações de IP
                'ip_address': {
                    required: true,
                    ipv4: true // Endereço IP válido
                }
            },
            messages: {
                // Mensagens para validações básicas
                name: 'Por favor, insira seu nome (mínimo de 3 caracteres).',
                cpf: 'Por favor, insira um CPF válido.',
                cnpj: 'Por favor, insira um CNPJ válido.',
                email: 'Por favor, insira um e-mail válido.',
                country: 'Por favor, selecione um país.',
                accept: 'Você deve aceitar os termos.',
                over18: 'Você deve ser maior de 18 anos.',

                // Mensagens para validações de senha
                password: {
                    required: 'Por favor, insira uma senha.',
                    minlength: 'A senha deve ter no mínimo 8 caracteres.',
                    strongPassword: 'A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais.'
                },
                confirm_password: {
                    required: 'Por favor, confirme sua senha.',
                    equalTo: 'As senhas não coincidem.'
                },

                // Mensagens para validações de telefone
                phone: {
                    required: 'Por favor, insira um número de telefone.',
                    phoneBR: 'Por favor, insira um telefone válido (ex: (11) 99999-9999).'
                },

                // Mensagens para validações de URL
                website: {
                    required: 'Por favor, insira uma URL.',
                    url: 'Por favor, insira uma URL válida (ex: https://www.exemplo.com).'
                },

                // Mensagens para validações de data
                birthdate: {
                    required: 'Por favor, insira sua data de nascimento.',
                    dateBR: 'Por favor, insira uma data válida (ex: 31/12/1990).'
                },

                // Mensagens para validações de número
                age: {
                    required: 'Por favor, insira sua idade.',
                    number: 'A idade deve ser um número.',
                    min: 'Você deve ter pelo menos 18 anos.',
                    max: 'Idade inválida.'
                },

                // Mensagens para validações de texto
                bio: {
                    required: 'Por favor, insira uma breve biografia.',
                    maxlength: 'A biografia deve ter no máximo 500 caracteres.'
                },

                // Mensagens para validações de arquivo
                profile_picture: {
                    required: 'Por favor, selecione uma foto de perfil.',
                    accept: 'Apenas arquivos de imagem são permitidos.',
                    filesize: 'O arquivo deve ter no máximo 1MB.'
                },

                // Mensagens para validações de checkbox múltiplo
                interests: {
                    required: 'Por favor, selecione pelo menos 2 interesses.',
                    minlength: 'Selecione pelo menos 2 interesses.'
                },

                // Mensagens para validações de seleção (select)
                gender: {
                    required: 'Por favor, selecione seu gênero.'
                },

                // Mensagens para validações de CEP
                cep: {
                    required: 'Por favor, insira um CEP.',
                    cepBR: 'Por favor, insira um CEP válido (ex: 12345-678).'
                },

                // Mensagens para validações de cartão de crédito
                credit_card: {
                    required: 'Por favor, insira um número de cartão de crédito.',
                    creditcard: 'Por favor, insira um número de cartão de crédito válido.'
                },

                // Mensagens para validações de hora
                time: {
                    required: 'Por favor, insira um horário.',
                    timeBR: 'Por favor, insira um horário válido (ex: 12:00).'
                },

                // Mensagens para validações de números decimais
                price: {
                    required: 'Por favor, insira um valor.',
                    decimal: 'Por favor, insira um número decimal válido (ex: 10.50).'
                },

                // Mensagens para validações de IP
                ip_address: {
                    required: 'Por favor, insira um endereço IP.',
                    ipv4: 'Por favor, insira um endereço IP válido (ex: 192.168.1.1).'
                }
            },
            onfocusout: function (element) {
                this.element(element);
            },
            invalidHandler: function (form, validator) {
                validator.errorList.forEach((item) => {
                    console.info(item.element.getAttribute('name'), item.message);
                });
                const errors = validator.numberOfInvalids();
                if (errors) {
                    const firstError = validator.errorList[0].element;
                    const ids = $(firstError).attr('id');
                    setTimeout(function () {
                        $('#' + ids).focus();
                        $('html, body').animate({
                            scrollTop: $(firstError).offset().top - 100
                        }, 500);
                    }, 100);
                }
            },
            highlight: function (element, errorClass, validClass) {
                $(element).closest(self.element_highlight).addClass(errorClass);
                $(element.form).closest(self.element_highlight).addClass(errorClass).removeClass(validClass);
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).closest(self.element_highlight).removeClass(errorClass);
                $(element.form).closest(self.element_highlight).removeClass(errorClass).addClass(validClass);
            },
            submitHandler: function (form) {
                if (self.onSubmitHandler) {
                    self.onSubmitHandler(form);
                }
            }
        });
    }
}

// Adiciona métodos de validação customizados
function addCustomMethods() {
    // Validação de CPF
    jQuery.validator.addMethod('cpf', function (value) {
        return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value) || /^\d{11}$/.test(value);
    }, 'Por favor, insira um CPF válido.');

    // Validação de CNPJ
    jQuery.validator.addMethod('cnpj', function (value) {
        return /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(value) || /^\d{14}$/.test(value);
    }, 'Por favor, insira um CNPJ válido.');

    // Validação de senha forte
    jQuery.validator.addMethod('strongPassword', function (value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
    }, 'A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais.');

    // Validação de telefone brasileiro
    jQuery.validator.addMethod('phoneBR', function (value) {
        return /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(value);
    }, 'Por favor, insira um telefone válido (ex: (11) 99999-9999).');

    // Validação de data brasileira
    jQuery.validator.addMethod('dateBR', function (value) {
        return /^\d{2}\/\d{2}\/\d{4}$/.test(value);
    }, 'Por favor, insira uma data válida (ex: 31/12/1990).');

    // Validação de CEP brasileiro
    jQuery.validator.addMethod('cepBR', function (value) {
        return /^\d{5}-\d{3}$/.test(value);
    }, 'Por favor, insira um CEP válido (ex: 12345-678).');

    // Validação de hora brasileira
    jQuery.validator.addMethod('timeBR', function (value) {
        return /^\d{2}:\d{2}$/.test(value);
    }, 'Por favor, insira um horário válido (ex: 12:00).');

    // Validação de número decimal
    jQuery.validator.addMethod('decimal', function (value) {
        return /^\d+(\.\d{1,2})?$/.test(value);
    }, 'Por favor, insira um número decimal válido (ex: 10.50).');

    // Validação de endereço IP
    jQuery.validator.addMethod('ipv4', function (value) {
        return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value);
    }, 'Por favor, insira um endereço IP válido (ex: 192.168.1.1).');

    // Validação de tamanho de arquivo
    jQuery.validator.addMethod('filesize', function (value, element, param) {
        return this.optional(element) || (element.files[0].size <= param);
    }, 'O arquivo deve ter no máximo {0} bytes.');
}

// Aguarda o DOM estar pronto e adiciona métodos customizados
$(() => {
    addCustomMethods();
});

// Manipula o envio do formulário
function myOnSubmitHandler(form) {
    console.info('Formulário enviado:', form);
}

// Instancia o validador
window.validator = new CValidator('form-register', myOnSubmitHandler, 'div');