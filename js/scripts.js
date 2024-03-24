// Leaflet Map

const map = L.map('map').setView([53.342686, -6.267118], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function openWhatsapp() {
  window.open("https://wa.me/+6285386109432?text=Hello,%20I%20want%20to%20talk%20with%20you", "_blank");
};

function openLinkedin() {
  window.open("https://www.linkedin.com/in/ferdian-sakti/", "_blank");
}
