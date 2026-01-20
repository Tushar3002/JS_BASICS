console.log("Working");

let btn = document.getElementById('btn');
let popu=document.getElementById('popu')

btn.addEventListener('click', () => {
    console.log('hello');

    const xhr = new XMLHttpRequest();

    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
    xhr.setRequestHeader('Content-type','application/json; charset=UTF-8');

    xhr.onreadystatechange = function() {
        console.log('readyState:', xhr.readyState, 'status:', xhr.status);
    }

    xhr.upload.onprogress = function(event) {
        if(event.lengthComputable){
            console.log(`Sent ${event.loaded} of ${event.total} bytes`);
        }
    }

    xhr.onload = function() {
        if(this.status >= 200 && this.status < 300){
            console.log('Response:', this.responseText);
        } else {
            console.log('Error:', this.status);
        }
    }

    params=`{"name": "test","salary": "123","age": "23","id": 25}`

    xhr.send(params);

    console.log('LOL'); 
});

popu.addEventListener('click',()=>{
        console.log('hello I am POPU');

    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees',true)

    xhr.onreadystatechange = function() {
        console.log('readyState:', xhr.readyState, 'status:', xhr.status);
    }


    xhr.onload = function() {
        if(this.status >= 200 && this.status < 300){
            let obj=JSON.parse(this.responseText)
            console.log(obj);
            
            let list= document.getElementById('list')
            str=""
            for(let i in obj.data){
                str += `<li>${"Name : "+obj.data[i].employee_name + "  Salary : "+obj.data[i].employee_salary}</li>`
            }
            list.innerHTML=str;
        } else if (this.status === 429) {
            console.log('Too many requests! Please wait a while.');
        } else {
            console.log('Error:', this.status);
        }
    }

    xhr.send();

    console.log('LOL'); // runs immediately
})
