import {get} from "./utils/get";

export class Templator {
    TEMPLATE_REGEXP = /{{(.*?)}}/gi;

    constructor(template, defaultValue = "значение не задано") {
        this._template = template;
        this._defaultValue = defaultValue;
    }

    _compileTemplate(template, ctx) {
        let tmpl = template;
        let key = null;
        const regExp = this.TEMPLATE_REGEXP;

        while ((key = regExp.exec(tmpl))) {
            if (key[1]) {
                const tmplValue = key[1].trim();
                const data = get(ctx, tmplValue, this._defaultValue);
                tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);
            }
        }

        return tmpl;
    }

    compile(ctx) {
        return this._compileTemplate(this._template, ctx);
    }
}