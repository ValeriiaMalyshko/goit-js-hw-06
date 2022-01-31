const form = document.querySelector(".login-form") ;

form.addEventListener('submit', onFormSubmit) ;

function onFormSubmit (event) {
    event.preventDefault ();

    const {
        elements : { email, password }
    } = event.currentTarget ;
    
   if (email.value === "" || password.value === "") { 
       return console.log("Please fill in all the fields!");
     }
     const mail = email.value ;
     const parole = password.value ;
     const formData ={
         mail,
         parole,
     };
     console.log (formData) ;

    // console.log (email.value, password.value);

    event.currentTarget.reset(); 
} ;