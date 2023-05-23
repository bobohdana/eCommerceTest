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
  div.classList.add('productImgRoot')
  const img = document.createElement('img')
  img.src = product.img
  img.alt = ''
  img.classList.add('productImg')
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
const slider = document.querySelector('.slider')
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
let currentLeft = slider.offsetWidth * 0.5
let currentReview = Math.floor(reviews.length / 2)

arrowLeft.addEventListener('click', () => {
  currentReview -= 1
  arrowLeft.classList.remove('hidden')
  arrowRight.classList.remove('hidden')
  currentLeft = currentLeft + reviewWidth + margin
  reviewsContainer.style.left = currentLeft + 'px'
  if (!currentReview) {
    arrowLeft.classList.add('hidden')
  }
})

arrowRight.addEventListener('click', () => {
  currentReview += 1
  arrowRight.classList.remove('hidden')
  arrowLeft.classList.remove('hidden')
  currentLeft = currentLeft - reviewWidth - margin
  reviewsContainer.style.left = currentLeft + 'px'
  if (currentReview === reviews.length - 1) {
    arrowRight.classList.add('hidden')
  }
})

const initialDot = 0
let currentDot = initialDot
const dotsRoot = document.querySelector('.dots')

reviews.forEach((e, index) => {
  const dot = document.createElement('div')
  dot.classList.add('dot')
  if (index === initialDot) {
    dot.classList.add('dotVisible')
  }
  dotsRoot.appendChild(dot)
})

const dots = document.querySelectorAll('.dot')

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentDot = index
    dot.classList.add('dotVisible')
    dots.forEach((dot, i) => {
      if (i != index) {
        dot.classList.remove('dotVisible')
      }
    })
    const left = 0 - (index - initialDot) * (reviewWidth + margin)
    reviewsContainer.style.left = left + 'px'
  })
})

const trfRegExp = /[-0-9.]+(?=px)/
const posThreshold = reviewWidth * .35
let posInit, posX1, posX2
const getEvent = () => event.type.search('touch') !== -1 ? event.touches[0] : event
const swipeStart = () => {
  let evt = getEvent()
  posInit = posX1 = evt.clientX
  reviewsContainer.style.transition = ''

  document.addEventListener('touchmove', swipeAction)
  document.addEventListener('touchend', swipeEnd)
}

const swipeAction = () => {
  let evt = getEvent()
  let style = reviewsContainer.style.left
  const transform = +style.match(trfRegExp)[0]

  posX2 = posX1 - evt.clientX
  posX1 = evt.clientX

  reviewsContainer.style.left = `${transform - posX2}px`
}

const swipeEnd = function() {
  const posFinal = posInit - posX1;

  document.removeEventListener('touchmove', swipeAction);

  if (Math.abs(posFinal) > posThreshold) {
    if (posInit < posX1 && currentDot != 0) {
      currentDot--
    } else if (posInit > posX1 && currentDot < reviews.length - 1) {
      currentDot++
    }
  }

  if (posInit !== posX1) {
    reviewsContainer.style.transition = 'left .5s';
    reviewsContainer.style.left = `-${currentDot * (reviewWidth + margin)}px`;
    dots[currentDot].classList.add('dotVisible')
    dots.forEach((dot, i) => {
      if (i != currentDot) {
        dot.classList.remove('dotVisible')
      }
    })
  }
}

if (document.querySelector('body').offsetWidth < 650) {
  reviewsContainer.style.left = 0
  reviewsContainer.addEventListener('touchstart', swipeStart);
}

// footer
const year = document.querySelector('#year')
year.innerHTML = new Date().getFullYear()


//header-slider

const root = document.querySelector('.featuresTop')
const features = document.querySelectorAll('.featureTop')
const featureWidth = features[0].offsetWidth
const featureMargin = 20
const featureThreshold = featureWidth * .35
let currentFeature = 1

let ftInit, ftX1, ftX2

const touchMove = () => {
  const evt = getEvent()
  let style = root.style.transform
  const transform = +style.match(trfRegExp)[0]

  ftX2 = ftX1 - evt.clientX
  ftX1 = evt.clientX

  root.style.transform = `translateX(${transform - ftX2}px)`
}

const touchEnd = () => {
  const ftFinal = ftInit - ftX1;

  document.removeEventListener('touchmove', touchMove);

  if (Math.abs(ftFinal) > featureThreshold) {
    if (ftInit < ftX1 && currentFeature != 0) {
      currentFeature--
    } else if (ftInit > ftX1 && currentFeature < features.length - 1) {
      currentFeature++
    }
  }

  if (ftInit !== posX1) {
    root.style.transition = '200ms ease-in-out transform'
    root.style.transform = `translateX(-${currentFeature * (featureWidth + featureMargin)}px)`
  }
}

if (document.querySelector('body').offsetWidth < 1240) {
  root.style.transform = `translateX(${-(featureWidth + featureMargin)}px)`
  root.addEventListener('touchstart', () => {
    const evt = getEvent()
    ftInit = ftX1 = evt.clientX
    root.style.transition = ''
  
    document.addEventListener('touchmove', touchMove)
    document.addEventListener('touchend', touchEnd)
  })

  root.addEventListener('transitionend', () => {
    if (features[currentFeature].classList.contains('firstFeature')) {
      root.style.transition = 'none'
      currentFeature = features.length - 2
      root.style.transform = `translateX(-${currentFeature * (featureWidth + featureMargin)}px)`
    }

    if (features[currentFeature].classList.contains('lastFeature')) {
      root.style.transition = 'none'
      currentFeature = 1
      root.style.transform = `translateX(-${currentFeature * (featureWidth + featureMargin)}px)`
    }
  })
}




