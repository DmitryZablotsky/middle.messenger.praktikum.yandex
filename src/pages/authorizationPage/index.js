import {Templator} from "../../templator";
import {authorizationPageTmpl} from "./index.tmpl";

const renderTemplate = new Templator(authorizationPageTmpl);

export const authorizationPage = (props = {}) => renderTemplate.compile();