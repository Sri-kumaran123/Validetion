const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("Password");
const pass2=document.getElementById("C-Password");



function setError(input,message,index){
    const formc=document.getElementsByClassName('form-control')[index];
   
    const small1=document.getElementsByClassName('small')[index];
    formc.classList.add('error');
    formc.classList.remove('success');
    small1.innerText=message;
};
function setSucces(input,index){
    const formc=document.getElementsByClassName('form-control')[index];
    formc.classList.add('success');
    formc.classList.remove('error');

};


function userName(usn1){
    if(usn1=== ''){
            setError(usn1,'UserName Cannot be Blank',0);
    }
    else{
        setSucces(usn1,0);
    }
};

function Email(em1){
    if(em1===''){
        setError(em1,'Email cannot be empty',1);
    }
    else{
        setSucces(em1,1);
    }
};

function passWord1(pass1){
    if(pass1=== ''){
            setError(pass1,'password Cannot be Blank',2);
    }
    else{
        setSucces(pass1,2);
    }
};

function passWord2(pass22,pass){
    if(pass22===''){
        setError(pass22,'conform password block cannot be empty',3);
    }
    else if(pass22!==pass)
    {
        setError(pass22,'does not match',3);
    }
    else{
        setSucces(pass22,3);
    }
};


function checkinput(){
    const usn=username.value.trim();
    const em=email.value.trim();
    console.log(usn);
    console.log(em);
    const pass=password.value.trim();
    const pass22=pass2.value.trim();

    
    console.log(pass);;
    console.log(pass22)

    userName(usn);
    Email(em);
    passWord1(pass);
    passWord2(pass22,pass);

};

form.addEventListener('submit',e=>{
    e.preventDefault();
    checkinput();
});










