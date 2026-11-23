document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");

  if (!envelope || !openBtn || !closeBtn) {
    console.error("Required letter elements were not found. Check index.html IDs.");
    return;
  }

  openBtn.addEventListener("click", () => {
    envelope.classList.add("open");
    openBtn.disabled = true;
    closeBtn.disabled = false;
  });

  closeBtn.addEventListener("click", () => {
    envelope.classList.remove("open");
    openBtn.disabled = false;
    closeBtn.disabled = true;
  });
});
