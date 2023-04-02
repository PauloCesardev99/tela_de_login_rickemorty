const nome = window.document.getElementById('nome')
const email = window.document.getElementById('email')
const senha = window.document.getElementById('senha')

function logar(){
    
    if(nome.value === ""){
        nome.classList.add('borda')
        nome.required = true;
}  else if( email.value ===""){
    email.classList.add('borda')
        email.required = true;
}   else{
    senha.classList.add('borda')
    senha.required = true;
}
}
