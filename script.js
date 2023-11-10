const wrapper = document.querySelector(".wrapper")
const generateBtn = document.querySelector(".form button");
const qrInput = document.querySelector(".form input");
const qrImg = document.querySelector(".qr-code img");
const qrcode = document.querySelector(" .wrapper .qr-code ");
const download = document.querySelector(".wrapper button.download")

generateBtn.addEventListener("click", () => {
   
    let qrVal = qrInput.value;
    if (!qrVal) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrVal}`;
    generateBtn.innerText="Generating QR Code..."
     qrImg.addEventListener('load', () => {
        wrapper.classList.add("active");
         generateBtn.innerText = "Generate QR Code"
        
    })
     
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active")
        
    }
});


