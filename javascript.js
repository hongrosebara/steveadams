const modalOpenBtn = document.getElementById("contact-button");
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");

const openModal = () => {
  document.getElementById("modal").style.display = "block";
};

const closeModal = () => {
  document.getElementById("modal").style.display = "none";
};

consentForm.addEventListener("submit", function (e) {
  e.preventDefault()
  const consentFormData = new FormData(consentForm)
  const fullName = consentFormData.get('fullName')

  modalText.innerHTML = `
  <div class="modal-inner-loading">
      <img src="images/loading.svg" class="loading">
      <p id="upload-text">
        Sending ... 
      </p>
  </div>`

  setTimeout( () => {
    document.getElementById("upload-text").innerText = `Success ...`
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
})