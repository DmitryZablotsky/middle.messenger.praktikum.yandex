import {Templator} from "../../templator";
import {registrationPageTmpl} from "./index.tmpl";

const renderTemplate = new Templator(registrationPageTmpl);

export const registrationPage = (props = {}) => renderTemplate.compile(props);