# jQuery Validation Plugin

> This jQuery plugin makes simple clientside form validation easy, whilst still offering plenty of customization options. It makes a good choice if you’re building something new from scratch, but also when you’re trying to integrate something into an existing application with lots of existing markup. The plugin comes bundled with a useful set of validation methods, including URL and email validation, while providing an API to write your own methods. All bundled methods come with default error messages in english and translations into 37 other languages.

## Usage example

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Validação</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css">
    <style>
        .error {
            color: red;
            font-size: 0.9em;
        }

        .form-group {
            margin-bottom: 1rem;
        }
    </style>
</head>

<body>
    <div class="container mt-5">
        <h1 class="mb-4">Formulário de Validação</h1>
        <form id="form-register" novalidate>
            <!-- Nome -->
            <div class="form-group">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" class="form-control" placeholder="Digite seu nome">
            </div>

            <!-- CPF -->
            <div class="form-group">
                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" class="form-control" placeholder="Digite seu CPF">
            </div>

            <!-- CNPJ -->
            <div class="form-group">
                <label for="cnpj">CNPJ:</label>
                <input type="text" id="cnpj" name="cnpj" class="form-control" placeholder="Digite seu CNPJ">
            </div>

            <!-- E-mail -->
            <div class="form-group">
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" class="form-control" placeholder="Digite seu e-mail">
            </div>

            <!-- País -->
            <div class="form-group">
                <label for="country">País:</label>
                <select id="country" name="country" class="form-control">
                    <option value="">Selecione um país</option>
                    <option value="BR">Brasil</option>
                    <option value="US">Estados Unidos</option>
                    <option value="CA">Canadá</option>
                </select>
            </div>

            <!-- Aceitar Termos -->
            <div class="form-group form-check">
                <input type="checkbox" id="accept" name="accept" class="form-check-input">
                <label for="accept" class="form-check-label">Aceito os termos e condições</label>
            </div>

            <!-- Maior de 18 anos -->
            <div class="form-group form-check">
                <input type="checkbox" id="over18" name="over18" class="form-check-input">
                <label for="over18" class="form-check-label">Sou maior de 18 anos</label>
            </div>

            <!-- Senha -->
            <div class="form-group">
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" class="form-control"
                    placeholder="Digite sua senha">
            </div>

            <!-- Confirmar Senha -->
            <div class="form-group">
                <label for="confirm_password">Confirmar Senha:</label>
                <input type="password" id="confirm_password" name="confirm_password" class="form-control"
                    placeholder="Confirme sua senha">
            </div>

            <!-- Telefone -->
            <div class="form-group">
                <label for="phone">Telefone:</label>
                <input type="text" id="phone" name="phone" class="form-control" placeholder="Digite seu telefone">
            </div>

            <!-- Website -->
            <div class="form-group">
                <label for="website">Website:</label>
                <input type="text" id="website" name="website" class="form-control" placeholder="Digite seu website">
            </div>

            <!-- Data de Nascimento -->
            <div class="form-group">
                <label for="birthdate">Data de Nascimento:</label>
                <input type="text" id="birthdate" name="birthdate" class="form-control" placeholder="DD/MM/AAAA">
            </div>

            <!-- Idade -->
            <div class="form-group">
                <label for="age">Idade:</label>
                <input type="number" id="age" name="age" class="form-control" placeholder="Digite sua idade">
            </div>

            <!-- Biografia -->
            <div class="form-group">
                <label for="bio">Biografia:</label>
                <textarea id="bio" name="bio" class="form-control" placeholder="Digite uma breve biografia"></textarea>
            </div>

            <!-- Foto de Perfil -->
            <div class="form-group">
                <label for="profile_picture">Foto de Perfil:</label>
                <input type="file" id="profile_picture" name="profile_picture" class="form-control">
            </div>

            <!-- Interesses -->
            <div class="form-group">
                <label>Interesses:</label>
                <div class="form-check">
                    <input type="checkbox" id="interest1" name="interests[]" value="Tecnologia"
                        class="form-check-input">
                    <label for="interest1" class="form-check-label">Tecnologia</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" id="interest2" name="interests[]" value="Esportes" class="form-check-input">
                    <label for="interest2" class="form-check-label">Esportes</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" id="interest3" name="interests[]" value="Música" class="form-check-input">
                    <label for="interest3" class="form-check-label">Música</label>
                </div>
            </div>

            <!-- Gênero -->
            <div class="form-group">
                <label>Gênero:</label>
                <div class="form-check">
                    <input type="radio" id="gender_male" name="gender" value="Masculino" class="form-check-input">
                    <label for="gender_male" class="form-check-label">Masculino</label>
                </div>
                <div class="form-check">
                    <input type="radio" id="gender_female" name="gender" value="Feminino" class="form-check-input">
                    <label for="gender_female" class="form-check-label">Feminino</label>
                </div>
            </div>

            <!-- CEP -->
            <div class="form-group">
                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep" class="form-control" placeholder="Digite seu CEP">
            </div>

            <!-- Cartão de Crédito -->
            <div class="form-group">
                <label for="credit_card">Cartão de Crédito:</label>
                <input type="text" id="credit_card" name="credit_card" class="form-control"
                    placeholder="Digite o número do cartão">
            </div>

            <!-- Horário -->
            <div class="form-group">
                <label for="time">Horário:</label>
                <input type="text" id="time" name="time" class="form-control" placeholder="HH:MM">
            </div>

            <!-- Preço -->
            <div class="form-group">
                <label for="price">Preço:</label>
                <input type="text" id="price" name="price" class="form-control"
                    placeholder="Digite um valor (ex: 10.50)">
            </div>

            <!-- Endereço IP -->
            <div class="form-group">
                <label for="ip_address">Endereço IP:</label>
                <input type="text" id="ip_address" name="ip_address" class="form-control"
                    placeholder="Digite um endereço IP">
            </div>

            <!-- Botão de Envio -->
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
        </form>
    </div>

    <!-- jQuery e jQuery Validation -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.5/jquery.validate.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.5/additional-methods.min.js"></script>
    <script src="code.js"></script>
    <script>
        // Aqui você pode adicionar o código JavaScript da classe CValidator e os métodos customizados
    </script>
</body>

</html>
```

```js
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
```

## Objectives

- The CValidator class presented above only serves as a reference. 
- The user will ask you for a version of this class adapted to the form he will show you.
- Your response should only be with the adapted class javascript.