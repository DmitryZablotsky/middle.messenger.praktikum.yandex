import {Templator} from "../../templator";
import {errorPageTmpl} from "./index.tmpl";

const renderTemplate = new Templator(errorPageTmpl);

export const errorPage = (props) => {
    const classes = {
        layout: "layout",
        mainSection: "main-section",
        poorBtn: "poorBtn poorBtn_light"
    }

    const mainPageContext = {classes, ...props};

    return renderTemplate.compile(mainPageContext);
}