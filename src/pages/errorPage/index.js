import {Templator} from "../../templator";
import {errorPageTmpl} from "./index.tmpl";

const renderTemplate = new Templator(errorPageTmpl);

export const errorPage = (props = {}) => renderTemplate.compile(props);