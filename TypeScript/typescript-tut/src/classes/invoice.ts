import { HasFormatter } from '../interfaces/HasFormatter.js';
//classes
export class Invoice implements HasFormatter {
    //use access modifiers to make the properties private
    // readonly client: string;
    // private details: string
    // public amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.client} owes  $${this.amount} for ${this.details}`;
    }
}

