function addBabyGrowth() {
  const growthModalContainer = document.getElementById("growth_modal_container");
  const closeGrowthModalBtn = document.getElementById("close_growth_modal");

  // Buka modal
  growthModalContainer.style.display = "flex";

  // Tutup modal
  closeGrowthModalBtn.addEventListener("click", () => {
    growthModalContainer.style.display = "none";
  });

  document.getElementById('growth_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    growthModalContainer.style.display = "none"; // Close modal after submission
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
    const tanggalPertumbuhan = document.getElementById("tanggal_pertumbuhan").value;
    const berat = document.getElementById("berat").value;
    const tinggi = document.getElementById("tinggi").value;

    return {
      tanggalPertumbuhan,
      berat,
      tinggi,
    };
  }
}
