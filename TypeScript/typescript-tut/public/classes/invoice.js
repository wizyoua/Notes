//classes
export class Invoice {
    //use access modifiers to make the properties private
    // readonly client: string;
    // private details: string
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes  $${this.amount} for ${this.details}`;
    }
}
