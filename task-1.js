class Account {
    constructor(userData) {
        this.userLogin = userData.login;
        this.userEmail = userData.email;
    }
    getInfo() {
        console.log(`Login: ${this.userLogin}, Email: ${this.userEmail}`)
    }
}

console.log(Account.prototype.getInfo); // function

const mango = new Account({
 login: 'Mangozedog',
 email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
 login: 'Poly',
 email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com