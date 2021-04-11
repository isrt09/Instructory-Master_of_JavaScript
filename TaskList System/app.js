
	let form       = document.querySelector('#task_form');
    let inputTask  = document.querySelector('#new_task');
    let Taskfilter = document.querySelector('#task_filter');
    let listTask   = document.querySelector('ul');
    let TaskClear  = document.querySelector('#btn_task_clear');
    
    

    form.addEventListener('submit', addTask);
    listTask.addEventListener('click', removeTask);
    TaskClear.addEventListener('click', clearTask);
    Taskfilter.addEventListener('keyup', filterTask);
    document.addEventListener('DOMContentLoaded', displayTask);

    function addTask(e){
        if(inputTask.value == ''){
            alert('Please Add Task Name ...');
        }else{            
            let list = document.createElement('li');
            list.className='list-group-item';
            list.appendChild(document.createTextNode(inputTask.value+' '));            
            listTask.appendChild(list);
            let link = document.createElement('a');
            link.className='btn btn-danger btn-sm pull-right';
            link.setAttribute('href','#');
            link.innerHTML='<i class="fa fa-close"></i>';
            list.appendChild(link);
            dataStorage(inputTask.value);
            inputTask.value='';             
        }
        e.preventDefault(); 
    }

    function removeTask(e){        
        if(e.target.hasAttribute('href')){
            if(confirm('Are you Sure to Delete?')){
                let element = e.target.parentElement;
                element.remove();
                //console.log(e.target);
                removeLocalStorage(element);
            }
        }
    }

   function clearTask(e){
        task_list.innerHTML ='';
        localStorage.clear();
        /*
        while(task_list.firstChild){
           task_list.removeChild(task_list.firstChild);
        } 
        */
   }

   function filterTask(e){
       let text = e.target.value.toLowerCase();
       document.querySelectorAll('li').forEach(task => {
           let item = task.firstChild.textContent;
           if(item.toLowerCase().indexOf(text)!= -1){
               task.style.display = 'block';
           }else{
            task.style.display = 'none';
           }
       })
   }

   function dataStorage(task){
        let data;        
        if(localStorage.getItem('data') === null){
            data = [];
        }else{
            data = JSON.parse(localStorage.getItem('data'));
        }
        data.push(task);
        localStorage.setItem('data',JSON.stringify(data));
   }

   function displayTask(){
        let data;        
        if(localStorage.getItem('data') === null){
            data = [];
        }else{
            data = JSON.parse(localStorage.getItem('data'));
        }
        data.forEach(item => {
            let list = document.createElement('li');
            list.className='list-group-item';
            list.appendChild(document.createTextNode(item +' '));            
            listTask.appendChild(list);
            let link = document.createElement('a');
            link.className='btn btn-danger btn-sm pull-right';
            link.setAttribute('href','#');
            link.innerHTML='<i class="fa fa-close"></i>';
            list.appendChild(link);
        })
   }
    
   function removeLocalStorage(item){
        let data;        
        if(localStorage.getItem('data') === null){
            data = [];
        }else{
            data = JSON.parse(localStorage.getItem('data'));
        }

        let li = item;
        li.removeChild(li.lastChild);
        data.forEach((task,index)=>{
            if(li.textContent.trim() === task){
                data.splice(index,1);
            }
        });
        localStorage.setItem('data',JSON.stringify(data));
   }
