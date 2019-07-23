export class SetName {
    static readonly type = '[Name] Set';

    constructor(public payload: string) {}
}

export class ResetName {
    static readonly type = '[Name] Reset';

    constructor() {}
}
