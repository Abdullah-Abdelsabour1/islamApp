function emailjsInit(){
    emailjs.init({
      publicKey: "_EoP7BOhdmdY-HSjw",
    });
};
emailjsInit()

function SendEmail() {
  let params = {
    from_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_una6syr", "template_rclnlzd", params)
    .then(() => {
      SweetAlert("success", "تم ارسال الرساله بنجاح");
      document.getElementById("form").reset(); // Reset form only on success
    })
    .catch(() => {
      SweetAlert("error", "حدث خطأ أثناء إرسال الرسالة");
    });
}

document.getElementById("form").addEventListener("submit", (e) => {
   e.preventDefault();
   SendEmail();
});

function SweetAlert(icon, title) {
    
  Swal.fire({
    icon: icon,
    title: title,
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    customClass: {
      popup: 'custom-toast' // Add a custom class
    }
 });
}

 