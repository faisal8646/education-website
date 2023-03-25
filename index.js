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

// function incrementVisitorCount() {
//     // Get the current count from the element
//     var countElement = document.getElementById('visitor-count');
//     var count = parseInt(countElement.innerHTML);
  
//     // Increment the count
//     count++;
  
//     // Update the element with the new count
//     countElement.innerHTML = count;
//   }

  

  const countEl = document.getElementById('count');
console.log("countEl=",countEl)
  updateVisitCount();

  function updateVisitCount(){
    fetch('https://api.countapi.xyz/update/theenglishdeveloper/english/?amount=1')
    .then(res => res.json())
    .then(res =>{
        console.log("vslurs",res.value)
        document.getElementById('count').innerHTML = res.value;

    })
  }




