document.addEventListener('DOMContentLoaded', function() {
    const ssidInput = document.querySelector('.ssid');
    const passwordInput = document.querySelector('.password');
    const qrCodeImg = document.getElementById('qrCode');

    function updateQRCode() {
        const ssid = ssidInput.value;
        const password = passwordInput.value;
        const qrData = `WIFI:T:WPA;S:${ssid};P:${password};;`;
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
        qrCodeImg.src = qrCodeUrl;
    }

    ssidInput.addEventListener('input', updateQRCode);
    passwordInput.addEventListener('input', updateQRCode);
});
