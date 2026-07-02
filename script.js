function login(e)
{   e.preventDefault();
    const email="user@gmail.com";
    const password="1234";

    const uemail= document.getElementById('useremail').value ;
    const upassword= document.getElementById('password').value ;
     if(email=== uemail && password === upassword)
     {  
        alert("Login succesfull");
        
        window.location.href = "index.html";
     }else{
        alert("Login unsuccesfull")
     }

}