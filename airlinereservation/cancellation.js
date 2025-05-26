
    document.getElementById("cancelForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const reason = document.getElementById("reason").value;

  if (email && reason) {
    // Simulate successful cancellation
    document.getElementById("modal").classList.remove("hidden");
    document.getElementById("cancelForm").reset();
  }
});

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
