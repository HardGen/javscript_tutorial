var LoginController = {
    errors: [],
    getUser: function() {
        return document.getElementById("login_username").value
    },
    getPassword: function() {
        return document.getElementById("login_password").value
    },
    validateEntry: function(usr, psw) {
        usr = usr || this.getUser()
        psw = psw || this.getPassword()

        if(!(usr && psw)) {
            return this.failure("Please enter a name & password")
        } else if (psw.length < 5) {
            return this.failure("Password must be 5+")
        }

        return true
    },
    showDialog: function(title, msg) {
        // показывает пользователю сообщение об успехе в диалоговом окне
    },
    fauilure: function(err) {
        this.errors.push(err)
        this.showDialog("Error", "Login invalid: ", err)
    }
}

//Связываем "Authcontroller "для делегирования к Logincontroller
var AuthController = Object.create(LoginController)
AuthController.errors = []
AuthController.checkAuth = function() {
    var user = this.getUser()
    var password = this.getPassword()

    if(this.validateEntry(user, password)) {
        this.server("/check-auth", {
            user: user,
            password: password
        })
        .then(this.accepted.bind(this))
        .catch(this.rejected.bind(this))
    }
}
AuthController.server = function(url, data) {
    return fetch(url,data)
}
AuthController.accepted = function() {
    this.showDialog("Success", "Authenticated!")
}
AuthController.rejected = function(err) {
    this.failure("Auth Failed: " + err)
}