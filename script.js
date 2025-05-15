// Nilai awal (bisa diambil dari backend/database jika tersedia)
let balance = 50000;
let availableChallenges = 3;

function loadUserData() {
  const userName = "John Doe"; // Simulasi nama pengguna
  document.getElementById("user-name").textContent = userName;
  updateBalance();
  updateChallengeCount();
}

function updateBalance() {
  document.getElementById("balance").textContent = balance.toLocaleString();
}

function updateChallengeCount() {
  document.getElementById("challenge-count").textContent = `${availableChallenges} Tantangan Terbuka`;
}

// Fungsi memulai tantangan
function startChallenge(id) {
  alert("Memulai Tantangan " + id);
}

// Fungsi untuk logout
function logout() {
  window.location.href = "index.html";
}

// Fungsi untuk mengunjungi shortlink dan mendapatkan hadiah
function visitShortlink(url, reward) {
  window.open(url, "_blank");
  balance += reward;
  availableChallenges += 1;
  updateBalance();
  updateChallengeCount();
  alert(`✅ Kamu mendapatkan Rp ${reward.toLocaleString()} dan 1 tantangan baru!`);
}

// Jalankan saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", loadUserData);
