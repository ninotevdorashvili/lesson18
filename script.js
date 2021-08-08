let Form = document.createElement('form');
Form.setAttribute('id', 'form1');

let newdiv=document.createElement('div');
newdiv.setAttribute('class', 'wraper');
newdiv.setAttribute('id', 'box');

let p = document.createElement('p');
p.setAttribute('id', 'text');
p.textContent='Contact Us';

let inp = document.createElement('input');
inp.setAttribute('type', 'text');
inp.setAttribute('id', 'fname');
inp.setAttribute('name', 'fname');
inp.setAttribute('placeholder', 'Name');


let inp2 = document.createElement('input');
inp2.setAttribute('type', 'email');
inp2.setAttribute('id', 'email');
inp2.setAttribute('name', 'email');
inp2.setAttribute('placeholder', 'E-mail');




document.getElementById('block').appendChild(newdiv);
newdiv.appendChild(p);

document.getElementById('block').appendChild(Form);
Form.appendChild(inp);
Form.appendChild(inp2);

inp.addEventListener('click', function(){
    inp.style.backgroundColor='yellow';
})
inp2.addEventListener('click', function(){
    inp2.style.backgroundColor='yellow';
})
inp.addEventListener('keydown', function(event){
    if (event.which===13) {
        alert ('Enter')
    }
})
inp2.addEventListener('keydown', function(event){
    if (event.which===13) {
        alert ('Enter')
    } else {
        console.log('hello');
    }
})

document.getElementById('subm').addEventListener('click', function(){
    alert ('submit')
})
document.getElementById('subm').addEventListener('mouseover', function(){
    subm.style.backgroundColor='blue'
})
document.getElementById('subm').addEventListener('mouseout', function(){
    subm.style.backgroundColor=''
})
document.getElementById('subm').addEventListener('click', function(x){
    x.preventDefault();
    console.log('hello');
})
document.getElementById('fname').addEventListener('keydown', function(event){
    console.log(event);
})





document.querySelectorAll('.block2').forEach(function(x){
    let a = document.createElement('a')
    a.setAttribute('href', '#');
    a.setAttribute('id', 'butt');
    a.textContent='Read More';
    a.style.backgroundColor='orange';
    a.style.borderRadius='25px';
    
    x.appendChild(a);
})


document.getElementById('hello').innerHTML= '<h2>HELLO</h2>';

