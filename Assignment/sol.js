// object formation
const userName = {
    name:'favour',
    age: 25,
    grade: 'A'

    increaseAge : function() {
        this.add++;
        
    }
}

console.log('before increasa age')
console.log('name',userName.name)
console.log('age',userName.age)
console.log('grade',userName.grade)

userName.increaseAge()

console.log('folllow me')
console.log('name', userName.name)
console.log('age', userName.age)
console.log('grade', userName.grade)


// 2 class constructor



class Dook {
    constructor(name,title,author){
        this.name = name
        this.title = title
        this.author = author
        this.year = 25
    }

    printInfo(){
                console.log("Author:", this.author)
                console.log("Titlr", this.title)
                console.log("Author:", this.author)
                console.log("Year:", this.year)
                console.log("\n");
    }
}

const bookDon = new Dook('Ronald','wisdom','brainy')
console.log(bookDon)

const bookZin = new Dook('komd', 'mydosh', 'zack')
console.log(bookZin)