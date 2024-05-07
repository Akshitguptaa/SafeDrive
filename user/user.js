import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyD27kAyt0pJ91cQIMCo37ryZeCWfoGa3OY",
  authDomain: "gps-data-f61e0.firebaseapp.com",
  databaseURL:"https://gps-data-f61e0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gps-data-f61e0",
  storageBucket: "gps-data-f61e0.appspot.com",
  messagingSenderId: "965540608739",
  appId: "1:965540608739:web:92b3d46a2cd78543ea63d6",
};
const app = initializeApp(firebaseConfig);
import {
  getDatabase,
  ref,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const db = getDatabase();
const findtBtn = document.querySelector("#loc");
const statButton = document.getElementById("stat-data");


function insertRow(serialNumber, latitude, longitude) {
  const tableBody = document.getElementById("tableBody");
  const newRow = tableBody.insertRow();

  const serialCell = newRow.insertCell(0);
  const latitudeCell = newRow.insertCell(1);
  const longitudeCell = newRow.insertCell(2);
  const mapCell = newRow.insertCell(3);

  serialCell.textContent = serialNumber;
  latitudeCell.textContent = latitude;
  longitudeCell.textContent = longitude;

  const mapButton = document.createElement("button");
  mapButton.innerText = "Show on Map";
  mapButton.classList.add("show-on-map");
  mapButton.addEventListener("click", function () {
    showLocationOnMap(latitude, longitude);
  });
  mapCell.appendChild(mapButton);
}

function showLocationOnMap(latitude, longitude) {
  if (!latitude || !longitude) {
    alert("Latitude or Longitude is not available");
    return;
  }

  const mapUrl = `https://maps.google.com/maps?q=loc:${latitude},${longitude}&output=embed`;
  const mapIframe = document.getElementById("mapIframe");
  mapIframe.src = mapUrl;

  document.getElementById("mapModal").style.display = "block";
}

function closeMapModal() {
  const mapIframe = document.getElementById("mapIframe");
  mapIframe.src = "";

  // Hide the modal
  const mapModal = document.getElementById("mapModal");
  mapModal.style.display = "none";
}

//stats

function closeStatModal() {
  const statIframe = document.getElementById("statIframe");
  statIframe.src = "";

  // Hide the modal
  const statModal = document.getElementById("statModal");
  statModal.style.display = "none";
}

function FindData() {
  const dbref = ref(db);
  get(child(dbref, "Sensor/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        const tableBody = document.getElementById("tableBody");
        tableBody.innerHTML = "";
        const latitude = data.Latitude;
        const longitude = data.Longitude;
        insertRow(1, latitude, longitude);
      } else {
        alert("No data found");
      }
    })
    .catch((error) => {
      alert(error);
    });
}
document.querySelector(".close-btn").addEventListener("click", closeMapModal);
findtBtn.addEventListener("click", FindData);


statButton.addEventListener("click", function () {
  document.getElementById("statModal").style.display = "block";
});

document.querySelector(".close-btn-stat").addEventListener("click", closeStatModal);