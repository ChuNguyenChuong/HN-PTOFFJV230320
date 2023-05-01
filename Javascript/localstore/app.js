// bai 1

// const valueInLocalStorage = localStorage.getItem("userName")

// const userNameInput = document.getElementById("userNameInput")
// const addBtn = document.getElementById("add")
// const removeBtn = document.getElementById("remove")

// const userNameShow = document.getElementById("userNameShow");

// if (valueInLocalStorage) {
//   addBtn.textContent = "edit"
//   userNameInput.value = valueInLocalStorage
//   userNameShow.innerText = valueInLocalStorage
// }

// addBtn.addEventListener("click", function (event) {
//   const value = userNameInput.value;
//   userNameShow.innerText = value;
//   localStorage.setItem("userName", value)
//   addBtn.textContent = "edit"
// })

// removeBtn.addEventListener("click", (e) => {
//   localStorage.removeItem("userName")
//   userNameInput.value = ""
//   addBtn.textContent = "them"
//   userNameShow.innerText = ""
// })

// userNameInput.addEventListener("change", (event) => {
//   console.log(event.target.value);
// })

// bai 2

// const userName = document.getElementById("userName")
// const password = document.getElementById("password")

// const userNameInLocalStorage = localStorage.getItem("userName")
// const passInLocalStorage = localStorage.getItem("password")

// userName.addEventListener("change", (e) => {
//   localStorage.setItem("userName", e.target.value)
//   sessionStorage.setItem("userName", e.target.value)
// })

// password.addEventListener("change", (e) => {
//   localStorage.setItem("password", e.target.value)
//   sessionStorage.setItem("password", e.target.value)
// })

// bai 3

const array = [];

function getDataLocal(key) {
  const dataInLocal = localStorage.getItem(key);
  const result = dataInLocal ? JSON.parse(dataInLocal) : []
  return result
}

function setDataToLocal(key, value) {
  const stringifyValue = JSON.stringify(value)
  localStorage.setItem(key, stringifyValue)
}

const nameValue = document.getElementById("name")
const priceValue = document.getElementById("price")
const saveBtn = document.getElementById("save")
const list = document.getElementById("list")


saveBtn.addEventListener("click", event => {
  const products = getDataLocal()
  console.log("🚀 ~ file: app.js:74 ~ products:", products)

  // add to products list
  let newProduct = {
    name: nameValue.value,
    price: priceValue.value
  }
  products.push(newProduct);
  console.log("🚀 ~ file: app.js:81 ~ products:", products)
  // end
  // set products to local
  setDataToLocal("products", products)

  const ulHtml = document.getElementById("ul")
  ulHtml.remove()

  const ulNew = document.createElement("ul")
  ulNew.id = "ul"
  console.log(products);
  products.forEach((item, index) => {
    const newLi = document.createElement("li")
    const btnRemove = document.createElement("button")
    btnRemove.textContent = "remove"

    btnRemove.addEventListener("click", (e) => {
      // index
      newLi.remove()
    })

    newLi.innerText = `${item.name} - ${item.price}`

    newLi.appendChild(btnRemove)
    ulNew.appendChild(newLi)
  })

  list.appendChild(ulNew)


})


