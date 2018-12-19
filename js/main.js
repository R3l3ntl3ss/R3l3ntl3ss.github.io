const salutation = [
    'Hey',
    'Hola',
    'Hello',
    'Konnichiwa'
]

const html_content = "Allow me to introduce myself. My name is Dev. I'm an aspiring software developer currently enrolled in college. I enjoy writing code especially in Python and Javascript. I spend most of my time around computers so it's no suprise I ain't good at anything else. "

const sal = document.querySelector('.salutation')
const sal_class = new TextScramble(sal)

const content = document.querySelector('.content')
const content_class = new TextScramble(content)

const link = document.querySelector('.link')
const link_class = new TextScramble(link)


let counter = 0
const salutation_fx = () => {
    sal_class.setText(salutation[counter]).then(() => {
        setTimeout(salutation_fx, 8000)
    })
    counter = (counter + 1) % salutation.length
}

const content_fx = () => {
    content_class.setText(html_content)
}

const link_fx = () => {
    link_class.setText('github')
}


// salutation_fx()
// content_fx()

setTimeout(salutation_fx, 1000)
setTimeout(content_fx, 2500)
setTimeout(link_fx, 6000)
