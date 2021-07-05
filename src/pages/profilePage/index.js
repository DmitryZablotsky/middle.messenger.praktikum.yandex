import {Templator} from "../../templator";
import {profilePageTmpl} from "./index.tmpl";

const renderTemplate = new Templator(profilePageTmpl);

export const profilePage = (props = {}) => renderTemplate.compile(props);