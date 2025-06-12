const mainContainer = document.querySelector('#root')

const reactElement = {
    type:'a',
    props: {
        href:'https://google.com',
        target:'_blank'
    },
    childern:'click me to visit google'
}

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    domElement.setAttribite('href', reactElement.props.href)
    domElement.setAttribite('target', reactElement.props.target)

    container.appendChild(domElement)
}

customRender(reactElement, mainContainer)