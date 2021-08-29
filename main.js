const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
const container = document.querySelector('#principal');
var drapeau = null;

if(localStorage.getItem('donnees') !== null){
	container.innerHTML = localStorage.getItem('donnees');
}

function createUser(){
    let about = {};
    about.name = inputs[0].value;
    about.location = inputs[1].value;
    return about;
}

function setValue(obj){
    let span1 = document.createElement('span');
    let span2 = document.createElement('span'); 
    let span3 = document.createElement('span');
    let suppr = document.createElement('button');
    let modif = document.createElement('button');   
    let div = document.createElement('div');
    
    span1.textContent = obj.name; 
    span2.textContent = obj.location;
    span3.innerHTML = `<button class='edit' onclick='onEdit(this)'>Edit</button>
                         <button class='delete' onclick='onDelete(this)'>Delete</button>`;
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
    container.appendChild(div);
}

function resetForm(){
    inputs[0].value= " ";
    inputs[1].value = " ";
    drapeau = null;
}
    

function onEdit(btn){
    drapeau = btn.parentElement.parentElement;
    let spans = drapeau.childNodes;
    spans[0].style.color = "#ccc";
    spans[1].style.color = "#ccc";
    spans[0].style.fontSize = "15px";
    spans[1].style.fontSize = "15px";
    spans[0].innerHTML = "......";
    spans[1].innerHTML = "......";
}
function updateRecord(obj){
    let spans = drapeau.childNodes;
    spans[0].innerHTML = obj.name;
    spans[1].innerHTML = obj.location;
    spans[0].style.fontSize = "18px";
    spans[1].style.fontSize = "18px";
    spans[0].style.color = "#000";
    spans[1].style.color = "#000";
    resetForm()
}
function onDelete(disblock){
     if(confirm('Are you sure to delete this ?')){
        let row = disblock.parentElement.parentElement;
        row.remove(); 
    }
}

function features(){
    let init = createUser();
    if(drapeau == null){
        setValue(init);
    } 
    else{
        updateRecord(init);
    }
}

button.addEventListener('click', features);
button.addEventListener('click', stk);


function stk(){
	localStorage.setItem('donnees', container.innerHTML);
}
