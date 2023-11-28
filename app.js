// JavaScript code to generate and clear the QR code dynamically
var urlInput = document.getElementById("urlInput");
var qrCodeContainer = document.getElementById("qrcode");
var qr;

function generateQRCode() {
  // Clear previous QR code
  qrCodeContainer.innerHTML = "";

  // Get the URL from the input field
  var url = urlInput.value;

  // Generate the QR code
  qr = new QRCode(qrCodeContainer, {
    text: url,
    width: 128,
    height: 128,
  });
}

// Call the generateQRCode function when the input changes
urlInput.addEventListener("input", generateQRCode);

// Function to clear the QR code manually
function clearQRCode() {
  qrCodeContainer.innerHTML = "";
  urlInput.value = ""; // Optionally clear the input field
}

// Initial generation of the QR code with a default URL
generateQRCode();
