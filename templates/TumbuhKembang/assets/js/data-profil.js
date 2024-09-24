//edit
function editProfilData() {
  const profilModalContainer = document.getElementById("profil_modal_container");
  const closeProfilModalBtn = document.getElementById("close_profil_modal");
  
  // Buka modal
  profilModalContainer.style.display = "flex";

  // Tutup modal
  closeProfilModalBtn.addEventListener("click", () => {
    profilModalContainer.style.display = "none";
  });

  document.getElementById('profil_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    profilModalContainer.style.display = "none"; // Close modal after submission
    Swal.fire({
      text: "Data berhasil diubah!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    });
  });

  function getData() {
    const tanggalLahir = document.getElementById("tanggal_lahir").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const kota = document.getElementById("kota").value;
    const jenisKel = document.querySelector('input[name="jenisKel"]:checked').value;

    return {
      tanggalLahir,
      username,
      email,
      kota,
      jenisKel,
    };
  }
}

const loadFile = function(event) {
  const output = document.getElementById('profileImage');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
  }
};

const removeImage = function() {
  const output = document.getElementById('profileImage');
  output.src = 'assets/images/blank.png';
  document.getElementById('image-upload').value = "";
};
