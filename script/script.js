console.log("hello my boi");

let jewelCC = document.querySelector('.jewel-cc-container');

jewelCC.addEventListener('click', copyCcText);

function copyCcText(){
    let p = document.querySelector('.jewel-cc');
    navigator.clipboard.writeText(p.textContent);
    console.log('copied');
}