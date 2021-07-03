import {Templator} from "../../templator";
import {registrationPageTmpl} from "./index.tmpl";

const renderTemplate = new Templator(registrationPageTmpl);

const classes = {
    layout: "layout",
    mainSection: "main-section",
    formContainer: "form-container",
    formField: "form-field",
    fieldLabel: "form-field__label",
    validationMessage: "form-field__validation-message",
    input: "form-field__input",
    submitBtn: "form-field__submitBtn richBtn",
    poorBtn: "poorBtn",
    header: "form-header"
}

const registrationPageContext = {classes};

export const registrationPage = renderTemplate.compile(registrationPageContext);