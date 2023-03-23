const modalOpenBtn = document.getElementById("contact-button");
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const form = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");

const openModal = () => {
  document.getElementById("modal").style.display = "block";
};

const closeModal = () => {
  document.getElementById("modal").style.display = "none";
};

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      modalText.innerHTML = `
      <div class="modal-inner-loading">
          <img src="images/loading.svg" class="loading">
          <p id=""my-form-status"">
            Sending ... 
          </p>
      </div>`
    
      setTimeout( () => {
        document.getElementById("my-form-status").innerText = `Success ...`
        finalMessage()
      }, 1500)
    
      const finalMessage = () => {
        setTimeout( () => {
          document.getElementById('modal-inner').innerHTML = `
          <h2>Thank you!</h2>
          <p>I am happy to receive your message and will get back to you shortly!
          </p>
      ` 
      }, 1500)
      }
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}

form.addEventListener("submit", handleSubmit)