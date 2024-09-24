// Dropdown menu Fitur
document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault(); // Mencegah refresh halaman
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.classList.toggle('show');
    });
  });
});


// Hanya menangani modal di versi mobile
const openModalBtn = document.getElementById('open_modal_btn');
const closeModalBtn = document.getElementById('close_modal_btn');
const mobileModal = document.querySelector('.mobile_modal');

// Fungsi untuk toggle modal
function toggleMobileModal() {
  mobileModal.classList.toggle('translate-y-[100%]');
}

// Event listener untuk tombol buka modal di mobile
openModalBtn.addEventListener('click', function(e) {
  e.stopPropagation(); // Cegah event propagation
  toggleMobileModal();
});

// Event listener untuk tombol tutup modal di mobile
closeModalBtn.addEventListener('click', function(e) {
  e.stopPropagation(); // Cegah event propagation
  toggleMobileModal();
});

// Cegah modal dari terbuka ketika elemen lain di desktop di klik
document.addEventListener('click', function(e) {
  if (!mobileModal.contains(e.target) && !openModalBtn.contains(e.target)) {
    if (mobileModal.classList.contains('translate-y-[100%]') === false) {
      toggleMobileModal();
    }
  }
});

// Pastikan klik pada menu desktop tidak memicu modal
const desktopNav = document.querySelector('.navbar');
desktopNav.addEventListener('click', function(e) {
  e.stopPropagation(); // Cegah event propagation
});
