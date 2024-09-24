// Add
function addBabyData() {
  const addModalContainer = document.getElementById("add_modal_container");
  const closeAddModalBtn = document.getElementById("close_add_modal");

  // Buka modal
  addModalContainer.style.display = "flex";

  // Tutup modal
  closeAddModalBtn.addEventListener("click", () => {
    addModalContainer.style.display = "none";
  });

  document.getElementById('add_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    addModalContainer.style.display = "none"; // Close modal after submission
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
    const tanggalLahir = document.getElementById("tanggal_lahir").value;
    const nama = document.getElementById("nama").value;
    const berat = document.getElementById("berat").value;
    const tinggi = document.getElementById("tinggi").value;
    const jenisKel = document.querySelector('input[name="jenisKel"]:checked').value;

    return {
      nama,
      tanggalLahir,
      berat,
      tinggi,
      jenisKel,
    };
  }
}

//edit
function editBabyData() {
  const editModalContainer = document.getElementById("edit_modal_container");
  const closeEditModalBtn = document.getElementById("close_edit_modal");

  // Buka modal
  editModalContainer.style.display = "flex";

  // Tutup modal
  closeEditModalBtn.addEventListener("click", () => {
    editModalContainer.style.display = "none";
  });

  document.getElementById('edit_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    editModalContainer.style.display = "none"; // Close modal after submission
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
    const nama = document.getElementById("nama").value;
    const berat = document.getElementById("berat").value;
    const tinggi = document.getElementById("tinggi").value;
    const jenisKel = document.querySelector('input[name="jenisKel"]:checked').value;

    return {
      nama,
      tanggalLahir,
      berat,
      tinggi,
      jenisKel,
    };
  }
}