import {Bean} from "./Bean";
export class FileBean extends Bean {

    private _text: string;
    private _name: string
    private _path: string;

    constructor() {
        super();
    }

    public get text(): string {
        return this._text;
    }

    public set text(v: string) {
        this._text = v;
    }

    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }
    
    public get path(): string {
        return this._path;
    }
    public set path(v: string) {
        this._path = v;
    }



}
