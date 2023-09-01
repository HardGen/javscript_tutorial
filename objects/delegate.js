//Делегирование
var Task = {
    setId: function(ID) {
        return this.id = ID
    },
    outputID: function() {
        console.log(this.id)
    }
}

var XYZ = Object.create(Task)

XYZ.prepareTask = function(ID, label) {
    this.setID(ID)
    this.label = label
}

XYZ.outputTaskID = function() {
    this.outputID()
    console.log(this.label)
}