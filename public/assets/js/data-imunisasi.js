//Filter Search Imunisasi
document.getElementById('searchInput').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const items = document.querySelectorAll('#immunizationList > div');

  items.forEach(item => {
      const title = item.querySelector('h1').textContent.toLowerCase();
      const description = item.querySelector('p').textContent.toLowerCase();
      if (title.includes(searchTerm) || description.includes(searchTerm)) {
          item.style.display = ''; // Show item
      } else {
          item.style.display = 'none'; // Hide item
      }
  });
});

//Filter Dropdown
document.getElementById('filterDropdown').addEventListener('change', function () {
  const selectedValue = this.value;
  const immunizationItems = document.querySelectorAll('#immunizationList > div');

  immunizationItems.forEach(item => {
      const iconColor = item.querySelector('svg path').getAttribute('fill');
      const isCompleted = iconColor === '#6BD147'; // Adjust the completed color if necessary

      // Show or hide based on selected value
      if (selectedValue === 'semua' || 
          (selectedValue === 'sudah' && isCompleted) || 
          (selectedValue === 'belum' && !isCompleted)) {
          item.style.display = 'flex'; // Show the item
      } else {
          item.style.display = 'none'; // Hide the item
      }
  });
});


function addHepatitis0Vactin() {
  const hepatitis0ModalContainer = document.getElementById("hepatitis0_modal_container");
  const closeHepatitis0ModalBtn = document.getElementById("close_hepatitis0_modal");

  // Buka modal
  hepatitis0ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeHepatitis0ModalBtn.addEventListener("click", () => {
    hepatitis0ModalContainer.classList.add("hidden");
  });

  document.getElementById('hepatitis0_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    hepatitis0ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#hepatitis0 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#hepatitis0 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addPolio0Vactin() {
  const polio0ModalContainer = document.getElementById("polio0_modal_container");
  const closePolio0ModalBtn = document.getElementById("close_polio0_modal");

  // Buka modal
  polio0ModalContainer.classList.remove("hidden");

  // Tutup modal
  closePolio0ModalBtn.addEventListener("click", () => {
    polio0ModalContainer.classList.add("hidden");
  });

  document.getElementById('polio0_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    polio0ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#polio0 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#polio0 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addBCGVactin() {
  const BCGModalContainer = document.getElementById("BCG_modal_container");
  const closeBCGModalBtn = document.getElementById("close_BCG_modal");

  // Buka modal
  BCGModalContainer.classList.remove("hidden");

  // Tutup modal
  closeBCGModalBtn.addEventListener("click", () => {
    BCGModalContainer.classList.add("hidden");
  });

  document.getElementById('BCG_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    BCGModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#bcg .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#bcg .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addHepatitis1Vactin() {
  const hepatitis1ModalContainer = document.getElementById("hepatitis1_modal_container");
  const closeHepatitis1ModalBtn = document.getElementById("close_hepatitis1_modal");

  // Buka modal
  hepatitis1ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeHepatitis1ModalBtn.addEventListener("click", () => {
    hepatitis1ModalContainer.classList.add("hidden");
  });

  document.getElementById('hepatitis1_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    hepatitis1ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#hepatitis1 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#hepatitis1.custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addPolio1Vactin() {
  const polio1ModalContainer = document.getElementById("polio1_modal_container");
  const closePolio1ModalBtn = document.getElementById("close_polio1_modal");

  // Buka modal
  polio1ModalContainer.classList.remove("hidden");

  // Tutup modal
  closePolio1ModalBtn.addEventListener("click", () => {
    polio1ModalContainer.classList.add("hidden");
  });

  document.getElementById('polio1_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    polio1ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#polio1 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#polio1 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addRotavirus1Vactin() {
  const rotavirus1ModalContainer = document.getElementById("rotavirus1_modal_container");
  const closeRotavirus1ModalBtn = document.getElementById("close_rotavirus1_modal");

  // Buka modal
  rotavirus1ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeRotavirus1ModalBtn.addEventListener("click", () => {
    rotavirus1ModalContainer.classList.add("hidden");
  });

  document.getElementById('rotavirus1_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    rotavirus1ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#rotavirus1 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#rotavirus1 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addDTP1Vactin() {
  const dtp1ModalContainer = document.getElementById("dtp1_modal_container");
  const closeDTP1ModalBtn = document.getElementById("close_dtp1_modal");

  // Buka modal
  dtp1ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeDTP1ModalBtn.addEventListener("click", () => {
    dtp1ModalContainer.classList.add("hidden");
  });

  document.getElementById('dtp1_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    dtp1ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#dtp1 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#dtp1 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addHib1Vactin() {
  const hib1ModalContainer = document.getElementById("hib1_modal_container");
  const closeHib1ModalBtn = document.getElementById("close_hib1_modal");

  // Buka modal
  hib1ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeHib1ModalBtn.addEventListener("click", () => {
    hib1ModalContainer.classList.add("hidden");
  });

  document.getElementById('hib1_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    hib1ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#hib1 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#hib1 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addPCV1Vactin() {
  const pcv1ModalContainer = document.getElementById("pcv1_modal_container");
  const closePcv1ModalBtn = document.getElementById("close_pcv1_modal");

  // Buka modal
  pcv1ModalContainer.classList.remove("hidden");

  // Tutup modal
  closePcv1ModalBtn.addEventListener("click", () => {
    pcv1ModalContainer.classList.add("hidden");
  });

  document.getElementById('pcv1_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    pcv1ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#pcv1 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#pcv1 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addHepatitis2Vactin() {
  const hepatitis2ModalContainer = document.getElementById("hepatitis2_modal_container");
  const closeHepatitis2ModalBtn = document.getElementById("close_hepatitis2_modal");

  // Buka modal
  hepatitis2ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeHepatitis2ModalBtn.addEventListener("click", () => {
    hepatitis2ModalContainer.classList.add("hidden");
  });

  document.getElementById('hepatitis2_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    hepatitis2ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#hepatitis2 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#hepatitis2 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addPolio2Vactin() {
  const polio2ModalContainer = document.getElementById("polio2_modal_container");
  const closePolio2ModalBtn = document.getElementById("close_polio2_modal");

  // Buka modal
  polio2ModalContainer.classList.remove("hidden");

  // Tutup modal
  closePolio2ModalBtn.addEventListener("click", () => {
    polio2ModalContainer.classList.add("hidden");
  });

  document.getElementById('polio2_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    polio2ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#polio2 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#polio2 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addDTP2Vactin() {
  const dtp2ModalContainer = document.getElementById("dtp2_modal_container");
  const closeDTP2ModalBtn = document.getElementById("close_dtp2_modal");

  // Buka modal
  dtp2ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeDTP2ModalBtn.addEventListener("click", () => {
    dtp2ModalContainer.classList.add("hidden");
  });

  document.getElementById('dtp2_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    dtp2ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#dtp2 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#dtp2.custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addHib2Vactin() {
  const hib2ModalContainer = document.getElementById("hib2_modal_container");
  const closeHib2ModalBtn = document.getElementById("close_hib2_modal");

  // Buka modal
  hib2ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeHib2ModalBtn.addEventListener("click", () => {
    hib2ModalContainer.classList.add("hidden");
  });

  document.getElementById('hib2_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    hib2ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#hib2 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#hib2 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addHepatitis3Vactin() {
  const hepatitis3ModalContainer = document.getElementById("hepatitis3_modal_container");
  const closeHepatitis3ModalBtn = document.getElementById("close_hepatitis3_modal");

  // Buka modal
  hepatitis3ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeHepatitis3ModalBtn.addEventListener("click", () => {
    hepatitis3ModalContainer.classList.add("hidden");
  });

  document.getElementById('hepatitis3_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    hepatitis3ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#hepatitis3 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#hepatitis3 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addPolio3Vactin() {
  const polio3ModalContainer = document.getElementById("polio3_modal_container");
  const closePolio3ModalBtn = document.getElementById("close_polio3_modal");

  // Buka modal
  polio3ModalContainer.classList.remove("hidden");

  // Tutup modal
  closePolio3ModalBtn.addEventListener("click", () => {
    polio3ModalContainer.classList.add("hidden");
  });

  document.getElementById('polio3_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    polio3ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#polio3 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#polio3 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addDTP3Vactin() {
  const dtp3ModalContainer = document.getElementById("dtp3_modal_container");
  const closeDTP3ModalBtn = document.getElementById("close_dtp3_modal");

  // Buka modal
  dtp3ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeDTP3ModalBtn.addEventListener("click", () => {
    dtp3ModalContainer.classList.add("hidden");
  });

  document.getElementById('dtp3_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    dtp3ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#dtp3 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#dtp3 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addHib3Vactin() {
  const hib3ModalContainer = document.getElementById("hib3_modal_container");
  const closeHib3ModalBtn = document.getElementById("close_hib3_modal");

  // Buka modal
  hib3ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeHib3ModalBtn.addEventListener("click", () => {
    hib3ModalContainer.classList.add("hidden");
  });

  document.getElementById('hib3_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    hib3ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#hib3 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#hib3 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addPCV2Vactin() {
  const pcv2ModalContainer = document.getElementById("pcv2_modal_container");
  const closePcv2ModalBtn = document.getElementById("close_pcv2_modal");

  // Buka modal
  pcv2ModalContainer.classList.remove("hidden");

  // Tutup modal
  closePcv2ModalBtn.addEventListener("click", () => {
    pcv2ModalContainer.classList.add("hidden");
  });

  document.getElementById('pcv2_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    pcv2ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#pcv2 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#pcv2 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addRotavirus2Vactin() {
  const rotavirus2ModalContainer = document.getElementById("rotavirus2_modal_container");
  const closeRotavirus2ModalBtn = document.getElementById("close_rotavirus2_modal");

  // Buka modal
  rotavirus2ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeRotavirus2ModalBtn.addEventListener("click", () => {
    rotavirus2ModalContainer.classList.add("hidden");
  });

  document.getElementById('rotavirus2_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    rotavirus2ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#rotavirus3 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#rotavirus3 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addPCV3Vactin() {
  const pcv3ModalContainer = document.getElementById("pcv3_modal_container");
  const closePcv3ModalBtn = document.getElementById("close_pcv3_modal");

  // Buka modal
  pcv3ModalContainer.classList.remove("hidden");

  // Tutup modal
  closePcv3ModalBtn.addEventListener("click", () => {
    pcv3ModalContainer.classList.add("hidden");
  });

  document.getElementById('pcv3_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    pcv3ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#pcv3 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#pcv3 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addInfluenza1Vactin() {
  const influenza1ModalContainer = document.getElementById("influenza1_modal_container");
  const closeInfluenza1ModalBtn = document.getElementById("close_influenza1_modal");

  // Buka modal
  influenza1ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeInfluenza1ModalBtn.addEventListener("click", () => {
    influenza1ModalContainer.classList.add("hidden");
  });

  document.getElementById('influenza1_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    influenza1ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#influenza1 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#influenza1 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addRotavirus3Vactin() {
  const rotavirus3ModalContainer = document.getElementById("rotavirus3_modal_container");
  const closeRotavirus3ModalBtn = document.getElementById("close_rotavirus3_modal");

  // Buka modal
  rotavirus3ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeRotavirus3ModalBtn.addEventListener("click", () => {
    rotavirus3ModalContainer.classList.add("hidden");
  });

  document.getElementById('rotavirus3_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    rotavirus3ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#rotavirus3 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#rotavirus3 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addInfluenza2Vactin() {
  const influenza2ModalContainer = document.getElementById("influenza2_modal_container");
  const closeInfluenza2ModalBtn = document.getElementById("close_influenza2_modal");

  // Buka modal
  influenza2ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeInfluenza2ModalBtn.addEventListener("click", () => {
    influenza2ModalContainer.classList.add("hidden");
  });

  document.getElementById('influenza2_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    influenza2ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#influenza2 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#influenza2 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addJE1Vactin() {
  const je1ModalContainer = document.getElementById("je1_modal_container");
  const closeJe1ModalBtn = document.getElementById("close_je1_modal");

  // Buka modal
  je1ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeJe1ModalBtn.addEventListener("click", () => {
    je1ModalContainer.classList.add("hidden");
  });

  document.getElementById('je1_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    je1ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#je1 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#je1 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addMR1Vactin() {
  const MR1ModalContainer = document.getElementById("MR1_modal_container");
  const closeMR1ModalBtn = document.getElementById("close_MR1_modal");

  // Buka modal
  MR1ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeMR1ModalBtn.addEventListener("click", () => {
    MR1ModalContainer.classList.add("hidden");
  });

  document.getElementById('MR1_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    MR1ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#mr1 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#mr1 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addHepatitisA1Vactin() {
  const hepatitisA1ModalContainer = document.getElementById("hepatitisA1_modal_container");
  const closeHepatitisA1ModalBtn = document.getElementById("close_hepatitisA1_modal");

  // Buka modal
  hepatitisA1ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeHepatitisA1ModalBtn.addEventListener("click", () => {
    hepatitisA1ModalContainer.classList.add("hidden");
  });

  document.getElementById('hepatitisA1_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    hepatitisA1ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#hepatitisA1 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#hepatitisA1 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addPCV4Vactin() {
  const pcv4ModalContainer = document.getElementById("pcv4_modal_container");
  const closePcv4ModalBtn = document.getElementById("close_pcv4_modal");

  // Buka modal
  pcv4ModalContainer.classList.remove("hidden");

  // Tutup modal
  closePcv4ModalBtn.addEventListener("click", () => {
    pcv4ModalContainer.classList.add("hidden");
  });

  document.getElementById('pcv4_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    pcv4ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#pcv4 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#pcv4 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addVarisela1Vactin() {
  const varisela1ModalContainer = document.getElementById("varisela1_modal_container");
  const closeVarisela1ModalBtn = document.getElementById("close_varisela1_modal");

  // Buka modal
  varisela1ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeVarisela1ModalBtn.addEventListener("click", () => {
    varisela1ModalContainer.classList.add("hidden");
  });

  document.getElementById('varisela1_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    varisela1ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#varisela1 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#varisela1 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addVarisela2Vactin() {
  const varisela2ModalContainer = document.getElementById("varisela2_modal_container");
  const closeVarisela2ModalBtn = document.getElementById("close_varisela2_modal");

  // Buka modal
  varisela2ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeVarisela2ModalBtn.addEventListener("click", () => {
    varisela2ModalContainer.classList.add("hidden");
  });

  document.getElementById('varisela2_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    varisela2ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#varisela2 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#varisela2 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addDTP4Vactin() {
  const dtp4ModalContainer = document.getElementById("dtp4_modal_container");
  const closeDTP4ModalBtn = document.getElementById("close_dtp4_modal");

  // Buka modal
  dtp4ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeDTP4ModalBtn.addEventListener("click", () => {
    dtp4ModalContainer.classList.add("hidden");
  });

  document.getElementById('dtp4_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    dtp4ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#dtp4 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#dtp4 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addHepatitisA2Vactin() {
  const hepatitisA2ModalContainer = document.getElementById("hepatitisA2_modal_container");
  const closeHepatitisA2ModalBtn = document.getElementById("close_hepatitisA2_modal");

  // Buka modal
  hepatitisA2ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeHepatitisA2ModalBtn.addEventListener("click", () => {
    hepatitisA2ModalContainer.classList.add("hidden");
  });

  document.getElementById('hepatitisA2_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    hepatitisA2ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#hepatitisA2 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#hepatitisA2 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addPolio4Vactin() {
  const polio4ModalContainer = document.getElementById("polio4_modal_container");
  const closePolio4ModalBtn = document.getElementById("close_polio4_modal");

  // Buka modal
  polio4ModalContainer.classList.remove("hidden");

  // Tutup modal
  closePolio4ModalBtn.addEventListener("click", () => {
    polio4ModalContainer.classList.add("hidden");
  });

  document.getElementById('polio4_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    polio4ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#polio4 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#polio4 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addHib4Vactin() {
  const hib4ModalContainer = document.getElementById("hib4_modal_container");
  const closeHib4ModalBtn = document.getElementById("close_hib4_modal");

  // Buka modal
  hib4ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeHib4ModalBtn.addEventListener("click", () => {
    hib4ModalContainer.classList.add("hidden");
  });

  document.getElementById('hib4_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    hib4ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#hib4 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#hib4 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addHepatitis4Vactin() {
  const hepatitis4ModalContainer = document.getElementById("hepatitis4_modal_container");
  const closeHepatitis4ModalBtn = document.getElementById("close_hepatitis4_modal");

  // Buka modal
  hepatitis4ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeHepatitis4ModalBtn.addEventListener("click", () => {
    hepatitis4ModalContainer.classList.add("hidden");
  });

  document.getElementById('hepatitis4_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    hepatitis4ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#hepatitis4 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#hepatitis4 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addInfluenza3Vactin() {
  const influenza3ModalContainer = document.getElementById("influenza3_modal_container");
  const closeInfluenza3ModalBtn = document.getElementById("close_influenza3_modal");

  // Buka modal
  influenza3ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeInfluenza3ModalBtn.addEventListener("click", () => {
    influenza3ModalContainer.classList.add("hidden");
  });

  document.getElementById('influenza3_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    influenza3ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#influenza3 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#influenza3 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addMR2Vactin() {
  const MR2ModalContainer = document.getElementById("MR2_modal_container");
  const closeMR2ModalBtn = document.getElementById("close_MR2_modal");

  // Buka modal
  MR2ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeMR2ModalBtn.addEventListener("click", () => {
    MR2ModalContainer.classList.add("hidden");
  });

  document.getElementById('MR2_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    MR2ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#mr2 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#mr2 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addTifoid1Vactin() {
  const tifoid1ModalContainer = document.getElementById("tifoid1_modal_container");
  const closeTifoid1ModalBtn = document.getElementById("close_tifoid1_modal");

  // Buka modal
  tifoid1ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeTifoid1ModalBtn.addEventListener("click", () => {
    tifoid1ModalContainer.classList.add("hidden");
  });

  document.getElementById('tifoid1_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    tifoid1ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#tifoid1 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#tifoid1 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addJE2Vactin() {
  const je2ModalContainer = document.getElementById("je2_modal_container");
  const closeJe2ModalBtn = document.getElementById("close_je2_modal");

  // Buka modal
  je2ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeJe2ModalBtn.addEventListener("click", () => {
    je2ModalContainer.classList.add("hidden");
  });

  document.getElementById('je2_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    je2ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#je2 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#je2 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addInfluenza4Vactin() {
  const influenza4ModalContainer = document.getElementById("influenza4_modal_container");
  const closeInfluenza4ModalBtn = document.getElementById("close_influenza4_modal");

  // Buka modal
  influenza4ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeInfluenza4ModalBtn.addEventListener("click", () => {
    influenza4ModalContainer.classList.add("hidden");
  });

  document.getElementById('influenza4_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    influenza4ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#influenza4 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#influenza4 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addInfluenza5Vactin() {
  const influenza5ModalContainer = document.getElementById("influenza5_modal_container");
  const closeInfluenza5ModalBtn = document.getElementById("close_influenza5_modal");

  // Buka modal
  influenza5ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeInfluenza5ModalBtn.addEventListener("click", () => {
    influenza5ModalContainer.classList.add("hidden");
  });

  document.getElementById('influenza5_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    influenza5ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#influenza5 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#influenza5 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addInfluenza6Vactin() {
  const influenza6ModalContainer = document.getElementById("influenza6_modal_container");
  const closeInfluenza6ModalBtn = document.getElementById("close_influenza6_modal");

  // Buka modal
  influenza6ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeInfluenza6ModalBtn.addEventListener("click", () => {
    influenza6ModalContainer.classList.add("hidden");
  });

  document.getElementById('influenza6_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    influenza6ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#influenza6 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#influenza6 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addInfluenza7Vactin() {
  const influenza7ModalContainer = document.getElementById("influenza7_modal_container");
  const closeInfluenza7ModalBtn = document.getElementById("close_influenza7_modal");

  // Buka modal
  influenza7ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeInfluenza7ModalBtn.addEventListener("click", () => {
    influenza7ModalContainer.classList.add("hidden");
  });

  document.getElementById('influenza7_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    influenza7ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#influenza7 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#influenza7 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addMR3Vactin() {
  const MR3ModalContainer = document.getElementById("MR3_modal_container");
  const closeMR3ModalBtn = document.getElementById("close_MR3_modal");

  // Buka modal
  MR3ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeMR3ModalBtn.addEventListener("click", () => {
    MR3ModalContainer.classList.add("hidden");
  });

  document.getElementById('MR3_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    MR3ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#mr3 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#mr3 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addDTP5Vactin() {
  const dtp5ModalContainer = document.getElementById("dtp5_modal_container");
  const closeDTP5ModalBtn = document.getElementById("close_dtp5_modal");

  // Buka modal
  dtp5ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeDTP5ModalBtn.addEventListener("click", () => {
    dtp5ModalContainer.classList.add("hidden");
  });

  document.getElementById('dtp5_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    dtp5ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#dtp5 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#dtp5 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

function addTifoid2Vactin() {
  const tifoid2ModalContainer = document.getElementById("tifoid2_modal_container");
  const closeTifoid2ModalBtn = document.getElementById("close_tifoid2_modal");

  // Buka modal
  tifoid2ModalContainer.classList.remove("hidden");

  // Tutup modal
  closeTifoid2ModalBtn.addEventListener("click", () => {
    tifoid2ModalContainer.classList.add("hidden");
  });

  document.getElementById('tifoid2_modal_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getData();
    console.log(data); // Here you can handle the data, e.g., send it to your server
    tifoid2ModalContainer.classList.add("hidden"); // Close modal after submission
    Swal.fire({
      text: "Data imunisasi berhasil disimpan!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-[#0F3F25] text-white px-4 py-2 rounded-md"
      }
    }).then(() => {
      // Ubah warna SVG setelah berhasil menyimpan data
      changeSvgColor();
      // Hilangkan tombol setelah imunisasi dilakukan
      hideButton();
    });
  });

  function getData() {
    const tglRekomendasi = document.getElementById("tgl_rekomendasi").textContent;
    const benefit = document.getElementById("manfaat").textContent;
    const informatioan = document.getElementById("informasi").textContent;
    const kpi = document.getElementById("kpi").textContent;

    return {
      tglRekomendasi,
      benefit,
      informatioan,
      kpi,
    };
  }

  function changeSvgColor() {
    const svgPathElement = document.querySelector("#tifoid2 .custom-svg path");
    if (svgPathElement) {
      svgPathElement.setAttribute("fill", "#6BD147");
    } else {
      console.error("SVG path element not found.");
    }
  }

  function hideButton() {
    const buttonElement = document.querySelector("#tifoid2 .custom-button");
    if (buttonElement) {
      buttonElement.style.display = 'none';
    }
  }
}

