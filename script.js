function sendMail(){
     var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };

    const serviceID = "service_7uo62n9";
    const templateID = "template_dg7i00h";

    emailjs.send(serviceID, templateID, params)
  .then(res => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Show success message
    const messageBox = document.getElementById("messageBox");
    const messageText = document.getElementById("messageText");
    messageBox.classList.remove("hidden");
    messageText.textContent = "Your Message Sent Successfully";
    
    // Optionally, hide message after a few seconds
    setTimeout(() => {
      messageBox.classList.add("hidden");
    }, 5000); // Adjust time as needed
  })
  .catch(err => {
    // Show error message
    const messageBox = document.getElementById("messageBox");
    const messageText = document.getElementById("messageText");
    messageBox.classList.remove("hidden");
    messageBox.classList.remove("bg-green-100");
    messageBox.classList.add("bg-red-100");
    messageText.textContent = err;
  });

       
}

