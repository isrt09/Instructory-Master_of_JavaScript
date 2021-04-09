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


// Technique Three : Data Fetch from Real API Data
document.getElementById('app').addEventListener('click',function(){
    let number = document.getElementById('get_joke').value; 
    let xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);
    xhr.onload = function(){
        if(this.status == 200){
            let data = JSON.parse(this.responseText);
            let joke = data.value;
            console.log(joke);
        }
    }
    xhr.send();
});