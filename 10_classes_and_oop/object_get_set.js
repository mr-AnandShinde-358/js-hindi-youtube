const User={
    _email:'h@hi.com',
    _password:'abc',

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this_email= value
    }
}

const tea=Object.create(User)
console.log(tea.email)