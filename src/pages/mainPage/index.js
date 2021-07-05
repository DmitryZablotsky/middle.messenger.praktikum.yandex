import {Templator} from "../../templator";
import {mainPageTmpl} from "./index.tmpl";

const renderTemplate = new Templator(mainPageTmpl);

export const mainPage = (props = {}) => renderTemplate.compile(props);