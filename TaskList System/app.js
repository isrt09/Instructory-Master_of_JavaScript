
	let form       = document.querySelector('#task_form');
    let inputTask  = document.querySelector('#new_task');
    let filterTask = document.querySelector('#task_filter');
    let listTask   = document.querySelector('ul');
    let TaskClear  = document.querySelector('#btn_task_clear');
    
    

    form.addEventListener('submit', addTask);
    listTask.addEventListener('click', removeTask);
    TaskClear.addEventListener('click', clearTask);

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
            }
        }
    }

   function clearTask(e){
        task_list.innerHTML ='';
    //    while(task_list.firstChild){
    //     task_list.removeChild(task_list.firstChild);
    //    }
   }
    
