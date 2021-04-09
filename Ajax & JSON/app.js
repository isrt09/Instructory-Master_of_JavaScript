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