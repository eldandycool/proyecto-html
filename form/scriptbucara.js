
      (function () {
        emailjs.init("user_eJWTjmJ08HVqX2s7v8AHm");
      })();


      function validate() {
        let loader = document.querySelector(".loader");
        let name = document.querySelector(".username");
        let email = document.querySelector(".email");
        let msg = document.querySelector(".message");
        let btn = document.querySelector(".submit");

        btn.addEventListener("click", (e) => {
          e.preventDefault();
          if (name.value == "" || email.value == "" || msg.value == "") {
            window.alert("ERROR");
          } else {
            //loader.style.display = "flex";
            sendmail(name.value, email.value, msg.value);
            window.alert("ENVIADO");
            //loader.style.display = "none";
          }
        });
      }
      validate();

      function sendmail(name, email, msg) {
        emailjs.send("service_h2m6lwi", "template_tex9ch1", {
          to_name: name,
          from_name: email,
          message: msg,
        });
      }
