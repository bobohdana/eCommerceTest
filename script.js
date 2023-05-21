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
    id: 1,
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
    img: 'img/product2.png'
  },
  {
    id: 3,
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

// avatars
const avatars = [
  'img/avatar1.png',
  'img/avatar2.png',
  'img/avatar3.png',
  'img/avatar4.png',
  'img/avatar5.png',
  'img/avatar6.png',
  'img/avatar7.png',
  'img/avatar8.png',
]
const avatarsContainer = document.querySelector('.avatars')

avatars.forEach(avatar => {
  const div = document.createElement('div')
  div.classList.add('avatar')
  const img = document.createElement('img')
  img.src = avatar
  img.alt = ''
  div.appendChild(img)
  avatarsContainer.appendChild(div)
})

// reviews
const reviews = [
  {
    id: 0,
    name: 'Unge Fuchs',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd, no sea takimata sanctus est.0',
    estimate: 5,
  },
  {
    id: 1,
    name: 'Tina Labermann',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd, no sea takimata sanctus est.0',
    estimate: 5,
  },
  {
    id: 2,
    name: 'Alfred Langhaar',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd, no sea takimata sanctus est.0',
    estimate: 5,
  },
  {
    id: 3,
    name: 'Simon Finger',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd, no sea takimata sanctus est.0',
    estimate: 5,
  },
  {
    id: 4,
    name: 'Max Schornstein',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd, no sea takimata sanctus est.0',
    estimate: 5,
  },
]
const reviewsContainer = document.querySelector('.reviews')
const arrowLeft = document.querySelector('.arrowLeft')
const arrowRight = document.querySelector('.arrowRight')

reviews.forEach(review => {
  const reviewDiv = document.createElement('div')
  reviewDiv.classList.add('review')

  const stars = document.createElement('div')
  stars.classList.add('estimateRoot')
  for (let i = 0; i < review.estimate; i++) {
    const star = document.createElement('img')
    star.classList.add('.estimate')
    star.src = 'img/star.png'
    star.alt = ''
    stars.appendChild(star)
  }

  const name = document.createElement('h5')
  name.classList.add('reviewName')
  name.innerHTML = review.name

  const text = document.createElement('p')
  text.classList.add('reviewText')
  text.innerHTML = review.text

  reviewDiv.append(stars, name, text)
  reviewsContainer.appendChild(reviewDiv)
})

const reviewWidth = document.querySelector('.review').offsetWidth
const margin = 20
let currentLeft = document.documentElement.clientWidth * 0.5

arrowLeft.addEventListener('click', () => {
  arrowLeft.classList.remove('hidden')
  arrowRight.classList.remove('hidden')
  currentLeft = currentLeft + reviewWidth + margin
  reviewsContainer.style.left = currentLeft + 'px'
  if (document.documentElement.clientWidth - (reviewWidth + margin) < currentLeft) {
    arrowLeft.classList.add('hidden')
  }
})

arrowRight.addEventListener('click', () => {
  arrowRight.classList.remove('hidden')
  arrowLeft.classList.remove('hidden')
  currentLeft = currentLeft - reviewWidth - margin
  reviewsContainer.style.left = currentLeft + 'px'
  if (currentLeft / (reviewWidth + margin) < 1) {
    arrowRight.classList.add('hidden')
  }
})

// footer
const year = document.querySelector('#year')
year.innerHTML = new Date().getFullYear()



