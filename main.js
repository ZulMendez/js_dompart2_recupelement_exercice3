// 1
let content = document.querySelector('#content');
console.log(content);

// 2
let content2 = document.querySelectorAll('#content');
console.log(content2);

// 3
let list = document.querySelector('.important');
console.log(list);

// 4
let list2 = document.querySelectorAll('.important');
console.log(list2);

// 5
let listCont = document.querySelectorAll('li');
let listFinal = Array.from(listCont);
console.log(listFinal);

listFinal.forEach(element => {
    let text = element.innerText;
    console.log(text.substr(0, text.length-1) + text.substr(-1).toUpperCase());
});

// 6
let grandP = content.getElementsByClassName('grandParagraphe');
console.log(grandP);

// autres méthodes
const d = document.getElementById("content"); 
const p = d.getElementsByClassName('grandParagraphe');
console.log(p); 

//6 version query
let idContent2 = document.querySelector('#content')
let paraInId = idContent2.querySelector('.grandParagraphe')
console.log(paraInId);