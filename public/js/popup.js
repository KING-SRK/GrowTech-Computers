// ✅ popup.js
function showPopup(title, message) {
  const popupHTML = `
    <div class="popup-overlay" id="global-popup">
      <div class="popup-box">
        <h2>${title}</h2>
        <p>${message}</p>
        <button onclick="closePopup()">OK</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", popupHTML);
  document.getElementById("global-popup").style.display = "flex";
}

function closePopup() {
  const popup = document.getElementById("global-popup");
  if (popup) {
    popup.remove();
  }
}
