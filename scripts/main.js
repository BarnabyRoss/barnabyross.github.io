
let myImage = document.querySelector('img');
myImage.onclick = function(){

    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/dog-icon.jpg'){

        myImage.setAttribute('src', 'images/dog2.jpg');

    }else{

        myImage.setAttribute('src', 'images/dog-icon.jpg');
    }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){

    let myName = prompt('请输入你的名字');
    if( !myName || myName == null ){

        setUserName();

    }else{

        localStorage.setItem('name', myName);
        myHeading.innerHTML = '狗子乖极了, ' + myName;
    }
    
    
}

if( !localStorage.getItem('name') ){

    setUserName();

}else{

    let storedName = localStorage.getItem('name');
    myHeading.textContent = '狗子乖极了, ' + storedName;
}

myButton.onclick = function(){

    setUserName();
};


