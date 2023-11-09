



function sendMail() {
  let Name=document.getElementById("name").value;
  let Email=document.getElementById("email").value;
  let Message=document.getElementById("message").value;
  


  
  var emailError = document.getElementById("email-error");

  var params = {
    name: Name,
    email: Email,
    message: Message
  };
if (Name==""||Email==""||Message=="") {

 

    
}

else{

  const serviceID ="service_ydftyfp";
  const templateID = "template_2lup10g";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Thank you!',
          text: 'Your enquiry or suggestion will be reviewed!',
         
        })

    })
    .catch(err=>console.log(err));
  }



  if(!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    emailError.innerHTML = "Please enter a valid email";
    return false;
    
  }
  emailError.innerHTML = "";
  return true;

}
