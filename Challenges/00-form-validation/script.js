/* CONFIGURACION GLOBAL DE LA APLICACION */
let CURRENT_LANGUAGE = 'es';

/*Recuperación de elementos y definición de variables globales*/
const passwordInput = document.getElementById("txt_password");
const passwordIcon = document.getElementById("passwordToggle");
const icon = passwordIcon.querySelector("i");
const formToValidate = document.getElementById("form1");
const validationResult = document.getElementById("feedbackText");

const languageButton = document.getElementById('language-button');
const enLink = document.getElementById('en-link');
const esLink = document.getElementById('es-link');

/* OBJETOS*/
const TRANSLATIONS = {
    es: {
        languageName: 'Español 🇲🇽',
        alerts: {
            success: "Campo validado con éxito",
            errorPrefix: "La contraseña debe:",
        },
        rules: {
            minLength: "⚠️ Tener al menos 8 caracteres",
            hasNumber: "🔢 Contener al menos un número",
            hasUpperCase: "🔠 Contener al menos una letra mayúscula",
            maxLength: "⚠️ Tener menos de 15 caracteres",
        },
        interface: {
            title: "🧑🏻‍💻Inicio de sesión",
            usernameLabel: "👤 Nombre de usuario",
            passwordLabel: "🔑 Contraseña",
            submitButton: "Iniciar sesión",
            usernamePlaceholder: "Escribe tu usuario",
            passwordPlaceholder: "Escribe tu contraseña",
        }
    },
    en: {
        languageName: 'English 🇺🇸',
        alerts: {
            success: "Field successfully validated",
            errorPrefix: "The password must:",
        },
        rules: {
            minLength: "⚠️ Be at least 8 characters long",
            hasNumber: "🔢 Contain at least one number",
            hasUpperCase: "🔠 Contain at least one uppercase letter",
            maxLength: "⚠️ Be less than 15 characters",
        },
        interface: {
            title: "🧑🏻‍💻Login",
            usernameLabel: "👤 Username",
            passwordLabel: "🔑 Password",
            submitButton: "Log in",
            usernamePlaceholder: "Enter your username",
            passwordPlaceholder: "Enter your password",
        }
    }
};

const VALIDATION_RULES = [
    {
        rule: (password) => password.length >= 8,
        messageKey: 'minLength'
    },
    {
        rule: (password) => /[0-9]/.test(password),
        messageKey: 'hasNumber'
    },
    {
        rule: (password) => /[A-Z]/.test(password),
        messageKey: 'hasUpperCase'
    },
    {
        rule: (password) => password.length <= 15,
        messageKey: 'maxLength'
    }
];

const ALERT_CONFIGURATION = [
    {
        type: "success",
        inputClass: "is-valid",
        messageClass: "text-success"
    },
    {
        type: "error",
        inputClass: "is-invalid",
        messageClass: "text-danger"
    }
];

/*Funciones de UI*/
function showPassword() {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    icon.classList.toggle("bi-eye-slash-fill");
}

function updateUI(status, message) {
    passwordInput.classList.remove("is-valid", "is-invalid");
    validationResult.classList.remove("text-success", "text-danger");
    
    let alertConfig = ALERT_CONFIGURATION.find(config => config.type === status);
    
    passwordInput.classList.add(alertConfig?.inputClass);
    validationResult.classList.add(alertConfig?.messageClass);
    validationResult.innerText = message;
}

function translateInterface() {
    const elementsToTranslate = document.querySelectorAll('[data-i18n-key], [data-i18n-placeholder]');
    
    elementsToTranslate.forEach((element) => {
        const language = TRANSLATIONS[CURRENT_LANGUAGE].interface;

        if (element.dataset.i18nKey) {
            const key = element.dataset.i18nKey;
            const translatedText = language[key];
            if (translatedText) {
                element.innerText = translatedText;
            }
        }
        
        if (element.dataset.i18nPlaceholder) {
            const key = element.dataset.i18nPlaceholder;
            const translatedPlaceholder = language[key];
            if (translatedPlaceholder) {
                element.placeholder = translatedPlaceholder;
            }
        }
    });
    updateLanguageButton(); // Llama a la función para actualizar el botón de idioma
}

function updateLanguageButton() {
    languageButton.innerText = TRANSLATIONS[CURRENT_LANGUAGE].languageName;
}

/*Funciones de lógica*/
function validatePassword(password) {
    return VALIDATION_RULES.map(rule => rule.rule(password));
}

function showUserFeedback(result, validation) {
    if (result) {
        updateUI("success", TRANSLATIONS[CURRENT_LANGUAGE].alerts.success);
    } else {
        const errorMessages = [];
        validation.forEach((isValid, index) => {
            if (!isValid) {
                errorMessages.push(
                    TRANSLATIONS[CURRENT_LANGUAGE].rules[VALIDATION_RULES[index].messageKey]
                );
            }
        });
        
        const message =
            TRANSLATIONS[CURRENT_LANGUAGE].alerts.errorPrefix +
            "\n" +
            errorMessages.join(", \n");

        updateUI("error", message);
        passwordInput.focus();
    }
}

/*Funciones de orquestación (Manejo de Eventos)*/
function handleInputValidation() {
    const validation = validatePassword(passwordInput.value);
    const isValid = validation.every(result => result === true);
    showUserFeedback(isValid, validation);
}

function validateForm(event) {
    event.preventDefault();
    const validation = validatePassword(passwordInput.value);
    const isValid = validation.every(result => result === true);
    showUserFeedback(isValid, validation);
}

/*Llamada inicial para traducir la interfaz cuando la página se carga*/
document.addEventListener("DOMContentLoaded", () => {
    translateInterface();
});

passwordIcon.addEventListener("click", showPassword);
formToValidate.addEventListener("submit", validateForm);
passwordInput.addEventListener("input", handleInputValidation);

/*Manejo del cambio de idioma*/
enLink.addEventListener('click', (event) => {
    event.preventDefault();
    CURRENT_LANGUAGE = 'en';
    translateInterface();
    handleInputValidation();
});

esLink.addEventListener('click', (event) => {
    event.preventDefault();
    CURRENT_LANGUAGE = 'es';
    translateInterface();
    handleInputValidation();
});