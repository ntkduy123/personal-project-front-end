export class User {
    firstName: string;
    lastName: string;
    password: string;
    matchingPassword: string;
    email: string;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.password = '';
        this.matchingPassword = '';
        this.email = '';
    }
}
