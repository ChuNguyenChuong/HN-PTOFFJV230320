
// // Object Literals
const st2 = {
}
// bai 2
function isEmpty(obj) {
  return Object.keys(st2).length === 0
}
// console.log("🚀 ~ file: app.js:49 ~ st2:", isEmpty(st2))

// bai 3

const obj1 = {
  nv: [
    { name: "chuong", salary: 1000 },
    { name: "chuong 1", salary: 1200 },
    { name: "chuong 2", salary: 1500 },
  ],
  calSumSalary: function () {
    // let sum = 0;

    // const sum = this.nv.reduce((sum, element) => {
    //   return sum += element.salary
    // }, 0)


    // let findItem = this.nv.find((element, index, arrayNv) => {
    //   return element.salary > 1000
    // })
    // console.log("🚀 ~ file: app.js:26 ~ findItem ~ findItem:", findItem)
    // let newArrFilter = this.nv.filter((element, index, arrayNv) => {
    //   return element.salary <= 1000
    // })
    // console.log("🚀 ~ file: app.js:31 ~ newArrFilter ~ newArrFilter:", newArrFilter)

    // this.nv.forEach((element, index, arrayNv) => {
    //   sum += element.salary;
    // })
    // let newArray = this.nv.map((element, index, arrayNv) => {
    //   sum += element.salary;
    //   return {
    //     luong: element.salary,
    //     ten: element.name
    //   }
    // })
    // for (let i = 0; i < this.nv.length; i++) {
    //   const el = this.nv[i];
    //   sum += el.salary
    // }
    return sum;
  }
}
// console.log("calSumSalary", obj1.calSumSalary());


// bai 4
const menu = {
  width: 1000,
  height: 500,
  title: "contact",
  dbNumber: function () {
    let arrayKeys = Object.keys(this)
    for (let i = 0; i < arrayKeys.length; i++) {
      const key = arrayKeys[i];
      if (typeof this[key] === "number") {
        this[key] = this[key] * 2
      }
    }
  }
}

// bai 5

const cal = {
  read: function (number1, number2) {
    this.number1 = number1;
    this.number2 = number2
  },
  sum: function () {
    if (this.number1 && this.number2) {
      let sum = this.number1 + this.number2
      return sum
    }
    return 0
  },
  mul: function () {
    if (this.number1 && this.number2) {
      let mul = this.number1 * this.number2
      return sum
    }
    return 0
  }
}

// console.log(cal);
// cal.read(5, 6)
// console.log(cal);
// console.log(cal.sum());
// console.log(cal);
// console.log(cal.mul());


// bai 6 
const book = {
  bookId: "asdsad",
  bookName: "nguoi tien su",
  price: 1000,
  author: "chuong",
  bookStatus: "da muon",
  inputData: function (bookId, bookName, price, author, bookStatus) {
    this.bookId = bookId;
    this.bookName = bookName;
    this.price = price;
    this.author = author;
    this.bookStatus = bookStatus;
  },
  displayData: function () {
    return `
      sach co id : ${this.bookId},
      ten sach la : ${this.bookName}
      price la : ${this.price}
      author la : ${this.author}
      bookStatus la : ${this.bookStatus}
    `
  }
}

// console.log(book.displayData());
// book.inputData("nguoitiensu", "nguoi tien su", 1500, "linh", "da tra")
// console.log(book.displayData());


// bai 7

const books = {
  danhsach: [],
  inputData: function (bookId, bookName, price, author, bookStatus) {
    const book = {
      bookName, bookId, price, author, bookStatus
    }
    this.danhsach.push(book)
  },
  displayData: function () {
    let result = ``
    for (let i = 0; i < this.danhsach.length; i++) {
      const element = this.danhsach[i];
      result += `
        sach co id : ${element.bookId},
        ten sach la : ${element.bookName}
        price la : ${element.price}
        author la : ${element.author}
        bookStatus la : ${element.bookStatus}
        =======================================
      `
    }
    return result
  },
  updateDataById: function (id, bookName, price, author, bookStatus) {
    let indexUpdate;
    this.danhsach.forEach((book, index) => {
      if (book.bookId === id) {
        indexUpdate = index
      }
    })
    const book = { bookName, price, author, bookStatus, bookId: id }
    // xoa tai vi tri index 
    // them moi vao vi tri do

    this.danhsach[indexUpdate].bookName = bookName
    this.danhsach[indexUpdate].price = price
    this.danhsach[indexUpdate].author = author
    this.danhsach[indexUpdate].bookStatus = bookStatus
  },

}

books.inputData("nguoitiensu", "nguoi tien su", 1500, "linh", "da tra")
books.inputData("dacnhantam", "dac nhan tam", 5000, "on than nao day", "da muon")
console.log(books.displayData());
books.updateDataById("dacnhantam", "dark qua", 3000, "tinh", "da tra")
console.log(books.displayData());