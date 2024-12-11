// Toggle Sidebar visibility
const toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
const sidebar = document.getElementById("sidebar");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");

// Tab functionality
const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

// Modal functionality
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

// Event listeners for sidebar
toggleSidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

// Event listeners for tabs
tabLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetTab = e.target.dataset.tab;

    tabContents.forEach(content => {
      content.classList.remove("active");
    });

    document.getElementById(targetTab).classList.add("active");
  });
});

// Event listener for Modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if click outside of the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
