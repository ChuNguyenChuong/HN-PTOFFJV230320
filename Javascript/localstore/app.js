const nameInput = document.getElementById("name")
const priceInput = document.getElementById("price")
const btnSave = document.getElementById("save")
const ulTag = document.getElementById("ul")


function makeid(length) {
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

function getProductsInLocal() {
  const productsInLocal = localStorage.getItem("products");
  const products = productsInLocal ? JSON.parse(productsInLocal) : []
  return products
}

function setProductsToLocal(productsList) {
  localStorage.setItem("products", JSON.stringify(productsList))
}

const deleteItem = (id) => {
  const products = getProductsInLocal()
  const newListProducts = products.filter(item => item.id !== id)
  setProductsToLocal(newListProducts)
  render()
}

const editItem = (id) => {
  const products = getProductsInLocal()
  let indexUpdate;

  const product = products.find(function (item, index) {
    if (item.id === id) {
      indexUpdate = index
    }
    return item.id === id
  })
  nameInput.value = product.name
  priceInput.value = product.price

  btnSave.textContent = "update";

  localStorage.setItem("idUpdate", JSON.stringify(id))
  localStorage.setItem("indexUpdate", JSON.stringify(indexUpdate))

}


function render() {
  const products = getProductsInLocal()

  const ulTagOld = document.getElementById("ul")
  ulTagOld.remove()


  const ulTagNew = document.createElement("ul")
  ulTagNew.id = "ul"



  for (let i = 0; i < products.length; i++) {
    const element = products[i];

    const li = document.createElement("li")

    const btnEdit = document.createElement("button")
    btnEdit.textContent = "edit"
    btnEdit.classList = "btn btn-edit"
    btnEdit.addEventListener("click", () => editItem(element.id))

    const btnDelete = document.createElement("button")
    btnDelete.textContent = "delete"
    btnDelete.classList = "btn btn-remove"
    btnDelete.addEventListener("click", () => deleteItem(element.id))

    const span = document.createElement("span")
    span.textContent = element.name + " - " + element.price + " - " + element.id;

    li.appendChild(btnEdit)
    li.appendChild(btnDelete)
    li.appendChild(span)


    ulTagNew.appendChild(li)

  }

  const listItem = document.getElementById("list")

  listItem.appendChild(ulTagNew)

}

render()

btnSave.addEventListener("click", function (event) {
  const idUpdate = localStorage.getItem("idUpdate")
  const indexUpdate = localStorage.getItem("indexUpdate")
  const products = getProductsInLocal()

  if (idUpdate) {
    const idEdit = JSON.parse(idUpdate)
    const indexEdit = JSON.parse(indexUpdate)

    const product = products.find(item => item.id === idEdit);

    const name = nameInput.value
    const price = priceInput.value
    product.name = name
    product.price = price
    products.splice(indexEdit, 1, product)
    btnSave.textContent = "save"
    localStorage.removeItem("idUpdate")
    localStorage.removeItem("indexUpdate")
  } else {
    const name = nameInput.value
    const price = priceInput.value

    const product = {
      id: makeid(5),
      name,
      price
    }
    products.push(product);
  }
  console.log(products);
  setProductsToLocal(products)
  render()
})