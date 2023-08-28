let user = {
    firstname : 'Вася',
    sayhi() {
        console.log(`Hello ${this.firstname}`)
    }
}

setTimeout(user.sayhi, 1000);