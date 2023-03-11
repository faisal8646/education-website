function sendMail() {
    var params = {
        name:  document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_ls3zsb9";
const templateID = "template_6byk3so"

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        name:  document.getElementById("name").value = "";
        email: document.getElementById("email").value = "";
        subject: document.getElementById("subject").value = "";
        message: document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
    }
)
.catch((err) => console.log (err));
}




