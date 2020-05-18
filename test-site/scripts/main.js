let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').onclick = function() {
    alert("别戳我，我怕疼。");
}

let myImg = document.querySelector('img');
myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if(mySrc === 'images/1.jpg') {
        myImg.setAttribute('src', 'images/2.jpg');
    }else {
         myImg.setAttribute('src', 'images/1.jpg');
    }
}

let myButton = document.querySelector('button');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === 'null'){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
}else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick = setUserName;