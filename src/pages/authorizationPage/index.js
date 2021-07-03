import {Templator} from "../../templator";
import {authorizationPageTmpl} from "./index.tmpl";

const renderTemplate = new Templator(authorizationPageTmpl);

const classes = {
    layout: "layout layout_error",
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

const authorizationPageContext = {classes};

export const authorizationPage = renderTemplate.compile(authorizationPageContext);