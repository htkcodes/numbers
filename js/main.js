let fact=document.querySelector('#fact');

let factText=document.querySelector('#fact-text');

let num=document.querySelector('#num');

num.addEventListener('input',function(){
   /*  let number=num.value;


    let xhr=new XMLHttpRequest();

    xhr.open('GET','http://numbersapi.com/'+number);

    xhr.onload=function(){
if(this.status=='200' && number!=''){
fact.style.display='block';
factText.innerText=this.responseText;
}
else{
    console.log('lel');
}
    }
    xhr.send(); */

    let number=num.value;

    fetch('http://numbersapi.com/'+number).then(response=>response.text())
    .then(data=>{

        if(number!='')
        {
            fact.style.display='block';
            factText.innerText=data;
        }
    }).catch(e=>console.log(e));
})
