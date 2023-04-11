const nome = window.document.getElementById('nome')
const email = window.document.getElementById('email')
const senha = window.document.getElementById('senha')
const logar = window.document.getElementById('login')



logar.addEventListener('click', function login(){
    
    if(nome.value === ""){
        nome.classList.add('borda')
        nome.required = true;
}  else if( email.value ===""){
    email.classList.add('borda')
        email.required = true;
}   else if(senha.value ===""){
    senha.classList.add('borda')
    senha.required = true;
} else{
    nome.classList.add('borda-verde')
    email.classList.add('borda-verde')
    senha.classList.add('borda-verde')

    window.alert("Logado!")
}
})
