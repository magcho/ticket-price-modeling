export class Age {
    private _age: number
    constructor(age: number) {
        if (age < 0) {
            throw new Error("range err")
        }
        this._age = age
    }
    public age(): number {
        return this._age
    }
}
