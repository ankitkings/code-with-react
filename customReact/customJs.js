// function RenderinnerDiv(mainDiv, anotherDiv){
//     const innerDiv =  document.createElement(anotherDiv.type)

//     innerDiv.innerHTML = anotherDiv.text;
//     console.log(anotherDiv.text);
//     innerDiv.setAttribute('href',anotherDiv.props.href);
//     innerDiv.setAttribute('target',anotherDiv.props.target);
//     mainDiv.appendChild(innerDiv);
    
// }

function RenderinnerDiv(mainDiv, anotherDiv){
    const innerDiv = document.createElement(anotherDiv.type);
    innerDiv.innerHTML = anotherDiv.text;

    for (let prop in anotherDiv.props) {
        innerDiv.setAttribute(prop, anotherDiv.props[prop])
    }
    mainDiv.appendChild(innerDiv);

}

const anotherDiv = {
    type: 'a',
    props: {
        href: "https::google.com",
        target: '_blank'
    },
    text: 'Click on Google !!!!!'
}


// const mainDiv = document.getElementById('root');
const mainDiv = document.querySelector('#root');
RenderinnerDiv(mainDiv, anotherDiv);