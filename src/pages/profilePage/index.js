import {Templator} from "../../templator";
import {profilePageTmpl} from "./index.tmpl";

const renderTemplate = new Templator(profilePageTmpl);

const classes = {
    layout: "layout layout_lightBG",
    formContainer: "profile-form-container",
    readableField: "profile-form-readable-field",
    readableFieldLabel: "profile-form-readable-field__label",
    readableFieldValue: "profile-form-readable-field__value",
    editableField: "profile-form-editable-field",
    editableFieldLabel: "profile-form-editable-field__label",
    inputContainer: "profile-form-editable-field__input-container",
    editableFieldInput: "profile-form-editable-field__input",
    editableFieldMessage: "profile-form-editable-field__validation-message",
    editableFieldControls: "profile-form-editable-field__controls",
    attentionButton: "attentionBtn",
    poorBtn: "poorBtn",
    profilePhoto: "profile-photo"
}

const profilePageContext = {classes};

export const profilePage = renderTemplate.compile(profilePageContext);