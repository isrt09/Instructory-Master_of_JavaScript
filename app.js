// Technique One
document.getElementById('app').addEventListener('click', function(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','data.txt',true);
    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
        }
    }
    xhr.send();
    console.log(xhr);
});

// Technique Two
document.getElementById('app').addEventListener('click',function(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','data.txt', true);
    xhr.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            document.getElementById('test').innerHTML=`<h1>${this.responseText}</h1>`;
        }
    }   
    xhr.send();
    console.log(xhr);
});


// Technique Three
document.getElementById('app').addEventListener('click',function(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','data.txt', true);
    xhr.onprogress = function(){
        console.log(this.readyState);
    }
    xhr.send();
    console.log(xhr);
});