import {Templator} from "../../templator";
import {mainPageTmpl} from "./index.tmpl";

const renderTemplate = new Templator(mainPageTmpl);

const classes = {
    layout: "layout",
    mainSection: "main-section"
}

const mainPageContext = {classes};

export const mainPage = renderTemplate.compile(mainPageContext);