import '../styles/main.scss'


document.addEventListener("DOMContentLoaded", () => {
    init()
})
const init = () => {
    const output = document.querySelector(".panel__output");
    const input = document.querySelector("#panel__input");    
    input.addEventListener("keydown", (event) => {
        onInputChange(event, output)
    })   
}


const onInputChange = (event, output) =>{    
    if(event.code === "Enter" || event.code === "NumpadEnter" ){
        console.log(event.target.value);
        const paragraph = document.createElement("p")
        paragraph.innerText = event.target.value;
        output.append(paragraph)
        event.target.value = ""
    }
}