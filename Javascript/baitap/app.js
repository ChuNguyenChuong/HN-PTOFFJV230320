function makeId(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const getProductsInLocalStorage = () => {
  const productsInLocal = localStorage.getItem("products")
  let products = []
  if (productsInLocal) {
    products = JSON.parse(productsInLocal)
  }
  return products
}

const setProductsToLocal = (products) => {
  localStorage.setItem("products", JSON.stringify(products))
}

const deleteItem = (id) => {
  let products = getProductsInLocalStorage()

  const newProducts = products.filter(function (item) {
    return item.id !== id
  })
  setProductsToLocal(newProducts)
  render()
}

const editItem = (id) => {
  let products = getProductsInLocalStorage()

  const itemFinded = products.find(function (item) {
    return item.id === id
  })

  const inputName = document.getElementById("name")
  const inputPrice = document.getElementById("price")

  inputName.value = itemFinded.name
  inputPrice.value = itemFinded.price


  const btnSave = document.getElementById("btnSave")
  btnSave.textContent = "update"

  localStorage.setItem("idEdit", id)
}

function render() {
  const oldUl = document.getElementById("ul")
  oldUl.remove()
  const newUl = document.createElement("ul")
  newUl.id = "ul"

  const products = getProductsInLocalStorage()

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const btnEdit = document.createElement("button")
    btnEdit.textContent = "edit"
    btnEdit.addEventListener("click", function () {

      editItem(product.id)
    })

    const btnDelete = document.createElement("button")
    btnDelete.textContent = "delete"
    btnDelete.addEventListener("click", function () {
      deleteItem(product.id)
    })

    const spanItem = document.createElement("span")
    spanItem.textContent = product.name + " - " + product.price

    const li = document.createElement("li")

    li.appendChild(btnEdit)
    li.appendChild(btnDelete)
    li.appendChild(spanItem)

    newUl.appendChild(li)
  }

  const listItem = document.getElementById("list-item")
  listItem.appendChild(newUl)
}
render()



const btnSave = document.getElementById("btnSave")

btnSave.addEventListener("click", function (event) {
  const idEdit = localStorage.getItem("idEdit")

  let products = getProductsInLocalStorage()
  const name = document.getElementById("name")
  const price = document.getElementById("price")

  if (idEdit) {
    const newProducts = products.map(function (item) {
      if (item.id === idEdit) {
        item.name = name.value;
        item.price = price.value
      }
      return item
    })
    setProductsToLocal(newProducts)
    name.value = ""
    price.value = ""
    const btnSave = document.getElementById("btnSave")
    btnSave.textContent = "save"
    localStorage.removeItem("idEdit")
    render()
  } else {

    const id = makeId(10)
    const product = {
      name: name.value,
      price: price.value,
      id: id
    }
    products.push(product)
    localStorage.setItem("products", JSON.stringify(products))
    render()
  }
})
