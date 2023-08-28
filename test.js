function Test({name, ttl = 10, area, questions}) {
    this.name = name ?? "unknown"
    this.ttl = ttl
    this.area = area ?? "unknown"
    this.questions = questions
    this.currentIndex = 0
    this.start = function() {
        console.log(questions[0])
    
    }

    this.next = function() {
        this.currentIndex++
        console.log(this.getCurrentQuestion())
    }

    this.prev = function() {
        this.currentIndex--
        console.log(this.getCurrentQuestion())
    }

    this.stop = function() {

    }

    this.getCurrentQuestion = function() {
        return this.questions[this.currentIndex]
    }
}

function Question({description, multithurty = false, answers, correctAnswerIndex})  {
    this.description = description
    this.multithurty = multithurty
    this.answers = answers
    this.correctAnswerIndex = correctAnswerIndex
}



function Teacher() {
    this.createTest = function({name, ttl, area, questions}) {
        const options = {
            name: name,
            ttl,
            area,
            questions
        }
        return new Test(options)
    }

    this.parseCSV = function() {
        
    }

    this.checkAnswers = function(test, answers) {
        const result = new Map()
        answers.map((answer, answerIndex) => {
            if(!Array.isArray(answer)) {
                if(answer == test.questions[answerIndex].correctAnswerIndex[0]) {
                    result.set(answerIndex, true)
                }
                else {
                    result.set(answerIndex, false)
                }
            } else {
                const subAns = new Map()
                answer.map((a,i) => {
                    if (a == test.questions[answerIndex].correctAnswerIndex[i]) {
                        subAns.set(a, true)
                    } else {
                        subAns.set(a, false)
                    }
                })
                result.set(answerIndex, subAns)
            }
        })

        return result
    }
}



const questions = [
    new Question({
        description: "сколько будет 2 + 1",
        answers: [1, 2, 3,  5, 4],
        correctAnswerIndex: [1]
    }),
    new Question({
        description: "сколько будет 3 + 2",
        answers: [1, 3, 4, 5, 6],
        correctAnswerIndex: [3]
    }),
    new Question({
        description: "сколько будет 5 * 5",
        answers: [1,4,25,0,25],
        correctAnswerIndex: [2,1]
    })
]



const teacher = new Teacher()

const test = teacher.createTest({
    name:"Алгебра 8 класса",
    area: "Математика",
    ttl: 15,
    questions
})

const answers = [4,3, [2,4]]


console.log(teacher.checkAnswers(test, answers))