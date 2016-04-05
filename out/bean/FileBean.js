"use strict";
const Bean_1 = require("./Bean");
class FileBean extends Bean_1.Bean {
    constructor() {
        super();
    }
    get text() {
        return this._text;
    }
    set text(v) {
        this._text = v;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get path() {
        return this._path;
    }
    set path(v) {
        this._path = v;
    }
}
exports.FileBean = FileBean;
//# sourceMappingURL=FileBean.js.map