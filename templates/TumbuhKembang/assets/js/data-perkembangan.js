//tambah data
function addChildDevelopment() {
  const perkembanganModalContainer = document.getElementById("perkembangan_modal_container");
  const closePerkembanganModalBtn = document.getElementById("close_perkembangan_modal");
  
  // Buka modal
  perkembanganModalContainer.style.display = "flex";

  // Tutup modal
  closePerkembanganModalBtn.addEventListener("click", () => {
    perkembanganModalContainer.style.display = "none";
  });

  document.getElementById('perkembangan_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    perkembanganModalContainer.style.display = "none"; // Close modal after submission
    Swal.fire({
      text: "Data berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    });
  });

  function getData() {
    const tanggalInput = document.getElementById("tanggal_input").value;
    const judul = document.getElementById("judul").value;
    const keterangan = document.getElementById("keterangan").value;

    return {
      tanggalInput,
      judul,
      keterangan,
    };
  }
}

//edit data
function editChildDevelopment() {
  const editPerkembanganModalContainer = document.getElementById("edit_perkembangan_modal_container");
  const closePerkembanganEditModalBtn = document.getElementById("close_perkembangan_edit_modal");

  // Buka modal
  editPerkembanganModalContainer.style.display = "flex";

  // Tutup modal
  closePerkembanganEditModalBtn.addEventListener("click", () => {
    editPerkembanganModalContainer.style.display = "none";
  });

  document.getElementById('edit_perkembangan_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    editPerkembanganModalContainer.style.display = "none"; // Close modal after submission
    Swal.fire({
      text: "Data berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    });
  });

  function getData() {
    const tanggalInput = document.getElementById("tanggal_input").value;
    const judul = document.getElementById("judul").value;
    const keterangan = document.getElementById("keterangan").value;

    return {
      tanggalInput,
      judul,
      keterangan,
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
  output.src = 'https://via.placeholder.com/125';
  document.getElementById('image-upload').value = "";
};