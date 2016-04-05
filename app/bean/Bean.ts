export class Bean {

    private _id: number;
    private _created: Date;
    private _updated: Date;

    constructor() {

    }

    public get created(): Date {
        return this._created;
    }
    public set created(v: Date) {
        this._created = v;
    }

    public get updated(): Date {
        return this._updated;
    }
    public set updated(v: Date) {
        this._updated = v;
    }

    public get id(): number {
        return this._id;
    }
    public set id(v: number) {
        this._id = v;
    }


}