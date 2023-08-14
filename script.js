 const button = document.querySelector('button').addEventListener(onclick,function(){
    const password = document.querySelector('password').value;
    const confirmpassword = document.querySelector('confirmpassword').value;

    if(password.value != confirmpassword.value){
        alert('passwords did not match try again.');
        return false
    }else if(password.value == confirmpassword.value){
        alert('password match')
    }
    return true;
})

