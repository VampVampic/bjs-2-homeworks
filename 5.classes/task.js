// ------------------ Задание 1 --------------------

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
    }

    set state(stateOfPrint) {
        if (stateOfPrint < 0) {
            this._state = 0;
        } else if (stateOfPrint > 100) {
            this._state = 100;
        } else {
            this._state = stateOfPrint;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }

} 

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
} 

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
} 

//--------------------- Задание 2 --------------------

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
           if (this.books[i][type] === value) {
                return this.books[i];
           }
        } 
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
            let issuedBook = this.books.splice(i, 1).find(item => item.name === bookName);
               return issuedBook;
            }
        }
        return null;
    }
}

//------------------------ Задание 3 -----------------------

class Student {
    constructor(name) {
    this.name = name;
    this.marks = {};
    }

    addMark(mark, subjectName) {
        if (mark < 2 || mark > 5 || subjectName === undefined) {
            return;
        }
        if (Object.hasOwn(this. marks, [subjectName]) === false) {
            this.marks[subjectName] = [];
        } 
        this.marks[subjectName].push(mark);        
    }

    

    getAverageBySubject(subjectName) {
        if (Object.hasOwn(this. marks, [subjectName]) === false) {
            return 0;
        } else {
            let averageSubjectScore = this.marks[subjectName].reduce((acc, mark) => acc + mark, 0);
            return averageSubjectScore / this.marks[subjectName].length;
        }
    } 


    getAverage() {
        let subjects = Object.keys(this.marks);
        let totalSum = 0;

        if (subjects.length === 0) {
			return 0;
		}

		for(let i = 0; i < subjects.length; i++) {
			totalSum += this.getAverageBySubject(subjects[i]);
			
		}

		return totalSum / subjects.length;
        
    }
}

