// referenciando os elementos da página
const container = document.querySelector('div#container')
const input = document.querySelector('input[type=text]')
const button = document.querySelector('button')

// definindo a URL da API
const apiURL = 'https://qrtag.net/api/qr_transparent_12.png?url='


// função responsável por criar o elemento img
function createImg (src) {

    // criando o elemento
    const img = document.createElement('img')

    // adicionando atributos
    img.setAttribute('src', `${apiURL}${src}`)

    // adicionando no corpo da página
    container.appendChild(img)
}

button.onclick = () => {

    // se o input tiver vazio não faça nada
    if (!input.value) { return }
    
    if (document.querySelector('img')) { document.querySelector('img').remove() }
    
    // pegue o conteúdo do input
    let text = input.value
    
    // limpe o conteúdo do input
    input.value = ''
    
    // verificando se tem https:// e www
    if (text.indexOf('www') == -1 && text.indexOf('https://')) {
        text = `https://www.${text}`
    }

    createImg(text)
}
