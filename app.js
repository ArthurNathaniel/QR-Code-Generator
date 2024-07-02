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
        width: 200,
        height: 200,
    });
}

// Call the generateQRCode function when the input changes
urlInput.addEventListener("input", generateQRCode);

// Function to clear the QR code manually
function clearQRCode() {
    qrCodeContainer.innerHTML = "";
    urlInput.value = ""; // Optionally clear the input field
}

// Function to download the QR code
function downloadQRCode() {
    if (qrCodeContainer.childNodes.length === 0) return; // No QR code to download

    var img = qrCodeContainer.getElementsByTagName("img")[0];
    var canvas = qrCodeContainer.getElementsByTagName("canvas")[0];

    var fileName = prompt("Enter file name for the QR code:", "qrcode");
    if (!fileName) return; // Exit if user cancels or doesn't enter a name

    if (img) {
        var link = document.createElement("a");
        link.href = img.src;
        link.download = fileName + ".png";
        link.click();
    } else if (canvas) {
        var link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = fileName + ".png";
        link.click();
    }
}

// Initial generation of the QR code with a default URL
generateQRCode();