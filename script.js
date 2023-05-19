// header
const headerBottom = document.querySelector('.bottom')

for (let i = 0; i < 3; i++) {
  const p = document.createElement('p')
  p.innerHTML = 'Lorem Ipsum rect aping do'
  p.classList.add('featureBottom')
  headerBottom.appendChild(p)
}

// main
const productsRoot = document.querySelector('.products')
const productsData = [
  {
    id: 0,
    title: 'Produkt ABC',
    description: 'Kurzbeschreibung zum Produkt',
    price: '39,00',
    note: 'inkl. Mehrwertsteuer & zzgl. Versandkosten',
    img: 'img/product1.png'
  },
  {
    id: 2,
    title: 'Produkt ABC',
    description: 'Kurzbeschreibung zum Produkt',
    price: '39,00',
    note: 'inkl. Mehrwertsteuer & zzgl. Versandkosten',
    img: 'img/product1.png'
  },
  {
    id: 3,
    title: 'Produkt ABC',
    description: 'Kurzbeschreibung zum Produkt',
    price: '39,00',
    note: 'inkl. Mehrwertsteuer & zzgl. Versandkosten',
    img: 'img/product2.png'
  },
  {
    id: 4,
    title: 'Produkt ABC',
    description: 'Kurzbeschreibung zum Produkt',
    price: '39,00',
    note: 'inkl. Mehrwertsteuer & zzgl. Versandkosten',
    img: 'img/product3.png'
  },
]

productsData.forEach((product) => {
  const productContainer = document.createElement('div')
  productContainer.classList.add('product')

  const div = document.createElement('div')
  div.classList.add('productImage')
  const img = document.createElement('img')
  img.src = product.img
  img.alt = ''
  div.appendChild(img)
  productContainer.appendChild(div)

  const title = document.createElement('div')
  title.innerHTML = product.title
  title.classList.add('productTitle')
  const description = document.createElement('div')
  description.innerHTML = product.description
  description.classList.add('productDesc')
  const price = document.createElement('div')
  price.innerHTML = `${product.price} €`
  price.classList.add('productPrice')
  const note = document.createElement('div')
  note.innerHTML = product.note
  note.classList.add('productNote')
  productContainer.append(title, description, price, note)

  const actions = document.createElement('div')
  actions.classList.add('productActions')
  const button = document.createElement('button')
  button.innerHTML = 'Zum Produkt'
  button.classList.add('productBtn')
  actions.appendChild(button)
  productContainer.appendChild(actions)

  productsRoot.appendChild(productContainer)
})




