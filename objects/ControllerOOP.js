//родительский класс
function Controller() {
    this.errors = []
}

Controller.prototype.showDialog = function(title,msg) {
    // показывает пользователю заголовок и сообщение в диалоговом окне
    console.log(title, msg)
}

Controller.prototype.success = function(msg) {
    this.showDialog("Success", msg)
}

Controller.prototype.failure = function(err) {
    this.errors.push(err)
    this.showDialog("Error", err)
}


//Дочерний класс
function LoginController() {
    Controller.call(this)
}

// Привязываем дочерний класс к родительскому
LoginController.prototype = Object.create(Controller.prototype)
LoginController.prototype.getUser = function() {
    return document.getElementById("login_username").value
}
LoginController.prototype.getPassword = function() {
    return document.getElementById("login_password").value
}
LoginController.prototype.validateEntry = function(user, password) {
    user = user || this.getUser()
    password = password || this.getPassword()

    if(!(user && password)) {
        return this.failure("Please enter a username $ password")
    } else if(ps.length < 5) {
        return this.failure("Password must be 5+ characters")
    }

    //добрались сюда? валидация прошла успешно
    return true
}
// Переопределяем для расширения базового `failure()`
LoginController.prototype.failure = function(err) {
    //вызов super
    Controller.prototype.failure.call(this, "Login invalid: " + err)
}


//дочерний класс
function AuthController(login) {
    Controller.call(this)

    this.login = login
}
AuthController.prototype = Object.create(Controller.prototype)
AuthController.prototype.server = function(url, data) {
    return fetch(url,data)
}
AuthController.prototype.checkAuth = function() {
    var user = this.login.getUser()
    var password = this.login.getPassword()

    if(this.login.validateEntry(user, password)) {
        this.server("/check-auth",{
            user: user,
            password: password
        })
        .then(this.success.bind(this))
        .catch(this.failure.bind(this))
    }
}
AuthController.prototype.success = function() {
    Controller.prototype.success.call(this, "Authenticated")
}
AuthController.prototype.failure = function(err) {
    Controller.prototype.failure.call(this, "Auth Failed: " + err)
}

var auth = new AuthController(new LoginController())
auth.checkAuth()