<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kata Sandi</title>

    <!-- Bootstrap CSS -->
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      rel="stylesheet"
    />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ asset('assets/icons/icon-LM.png') }}" />
    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Open+Sans:wght@500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <!-- Style -->
    <link rel="stylesheet" href="assets/css/style.css" />
    <!-- Tailwind -->
    <script src="https://cdn.tailwindcss.com"></script>
  </head>

  <body class="bg-[#F9FBFD] overflow-x-hidden">
    <!-- Open Tag Header -->
    <header class="fixed-navbar w-full bg-[#0F3F25]">
      <div
        class="w-full max-w-[1280px] mx-auto px-8 lg:px-12 flex justify-between items-center py-3"
      >
        <div class="shrink-0">
          <img
            src="{{ asset('assets/images/logo.png') }}"
            alt="Baby Care Logo"
            class="w-40 md:w-44 lg:w-48"
          />
        </div>

        <!-- Desktop Navbar -->
        <nav
          class="hidden min-[850px]:block navbar navbar-expand-lg navbar-light"
        >
          <ul class="flex items-center gap-x-12">
            <li>
              <a href="dashboard.html" class="text-white custom-hover"
                >Beranda</a
              >
            </li>
            <li>
              <div class="nav-item dropdown">
                <a
                  href="javascript:void(0);"
                  class="nav-link dropdown-toggle text-white custom-hover"
                  data-toggle="dropdown"
                  >Fitur</a
                >
                <div class="dropdown-menu">
                  <a href="perkembangan.html" class="dropdown-item"
                    >Skrining Perkembangan</a
                  >
                  <a href="gizi-pertumbuhan.html" class="dropdown-item"
                    >Grafik Pertumbuhan</a
                  >
                  <a href="imunisasi.html" class="dropdown-item">Imunisasi</a>
                </div>
              </div>
            </li>
            <li>
              <a
                href="catatan-perkembangan.html"
                class="text-white custom-hover"
                >Catatan Perkembangan</a
              >
            </li>
          </ul>
        </nav>

        <!-- Profil -->
        <div class="hidden min-[850px]:block">
          <div class="flex items-center gap-x-3">
            <a href="{{ route('user.profile') }}">
              <h1
                id="user_full_name"
                class="font-semibold text-white text-[16px]"
              >
                Jaezlyn
              </h1>
            </a>
            <a href="{{ route('user.profile') }}">
              <div class="ml-2">
                <img
                  src="{{ asset('assets/images/mommy.webp') }}"
                  alt="User's Profile Picture"
                  class="w-[45px] h-[45px] rounded-full object-cover"
                />
              </div>
            </a>
          </div>
        </div>

        <!-- Mobile Navbar -->
        <div class="block min-[850px]:hidden" id="open_modal_btn">
          <svg
            class="fill-white text-[26px] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </div>

        <!-- Mobile Modal -->
        <div
          class="mobile_modal translate-y-[100%] fixed top-0 left-0 w-full h-screen bg-[#0F3F25] px-4 duration-500 ease-in-out z-[999] overflow-y-auto"
        >
          <div class="w-full">
            <ul class="flex flex-col px-4 pt-[80px] gap-y-6">
              <li>
                <div class="flex flex-col gap-x-3">
                  <a href="profil.html">
                    <div class="ml-2">
                      <img
                        src="{{ asset('assets/images/mommy.webp') }}"
                        alt="User's Profile Picture"
                        class="w-[80px] h-[80px] rounded-full object-cover"
                      />
                    </div>
                  </a>

                  <a href="profil.html">
                    <h1
                      id="user_full_name"
                      class="font-semibold text-white text-[16px] pt-2 pb-1 px-2"
                    >
                      Jaezlyn
                    </h1>
                  </a>
                </div>
              </li>

              <span class="w-[150px] border-t-2 border-[#FFCB40]"></span>

              <li>
                <a
                  href="{{ route('index') }}"
                  class="flex items-center text-white custom-hover"
                >
                  <img
                    class="w-[30px] lg:w-[30px]"
                    src="{{ asset('assets/icons/home.png') }}"
                    alt=""
                  />
                  <span class="text-lg font-medium pl-3">Beranda</span>
                </a>
              </li>
              <li>
                <a
                  href="perkembangan.html"
                  class="flex items-center text-white custom-hover"
                >
                  <img
                    class="w-[30px] lg:w-[30px]"
                    src="{{ asset('assets/icons/toy-block (1).png') }}"
                    alt=""
                  />
                  <span class="text-lg font-medium pl-3"
                    >Skrining Perkembangan</span
                  >
                </a>
              </li>
              <li>
                <a
                  href="gizi-pertumbuhan.html"
                  class="flex items-center text-white custom-hover"
                >
                  <img
                    class="w-[30px] lg:w-[30px]"
                    src="{{ asset('assets/icons/growth (1).png') }}"
                    alt=""
                  />
                  <span class="text-lg font-medium pl-3">Grafik Pertumbuhan</span>
                </a>
              </li>
              <li>
                <a
                  href="imunisasi.html"
                  class="flex items-center text-white custom-hover"
                >
                  <img
                    class="w-[30px] lg:w-[30px]"
                    src="assets/icons/vaccines (1).png"
                    alt=""
                  />
                  <span class="text-lg font-medium pl-3">Imunisasi</span>
                </a>
              </li>
              <li>
                <a
                  href="catatan-perkembangan.html"
                  class="flex items-center text-white custom-hover"
                >
                  <img
                    class="w-[30px] lg:w-[30px]"
                    src="assets/icons/playtime (1).png"
                    alt=""
                  />
                  <span class="text-lg font-medium pl-3"
                    >Catatan Perkembangan</span
                  >
                </a>
              </li>

              <span class="w-[150px] border-t-2 border-[#FFCB40]"></span>

              <li>
                <a
                  href="{{ route('user.profile') }}"
                  class="flex items-center text-white custom-hover"
                >
                  <img
                    class="w-[30px] lg:w-[30px]"
                    src="{{ asset('assets/icons/user (1).png') }}"
                    alt=""
                  />
                  <span class="text-lg font-medium pl-3">Profil</span>
                </a>
              </li>

              <li>
                <a
                  href="{{ route('user.data-anak') }}"
                  class="flex items-center text-white custom-hover"
                >
                  <img
                    class="w-[30px] lg:w-[30px]"
                    src="{{ asset('assets/icons/analysis.png') }}"
                    alt=""
                  />
                  <span class="text-lg font-medium pl-3">Data Anak</span>
                </a>
              </li>

              <li>
                <a
                  href="{{ route('user.kata-sandi') }}"
                  class="flex items-center text-white custom-hover"
                >
                  <img
                    class="w-[30px] lg:w-[30px]"
                    src="{{ asset('assets/icons/reset-password.png') }}"
                    alt=""
                  />
                  <span class="text-lg font-medium pl-3">Kata Sandi</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="flex items-center text-white custom-hover mb-4"
                >
                  <img
                    class="w-[30px] lg:w-[30px]"
                    src="{{ asset('assets/icons/logout (1).png') }}"
                    alt=""
                  />
                  <span id="modalMobileButton" class="text-lg font-medium pl-3"
                    >Keluar</span
                  >
                </a>
              </li>
            </ul>
          </div>
          <!-- Close Modal -->
          <div class="absolute top-6 right-6" id="close_modal_btn">
            <svg
              class="fill-white text-[26px] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
    <!-- Close Tag Header -->

    <!-- Open Tag Content -->
    <div class="pt-[88px] pb-12 min-[840px]:pt-[88px] xl:pb-0">
      <div class="flex min-h-screen">
        <!-- Sidebar -->
        <div class="pr-2 pl-[55px] py-5 max-[850px]:hidden">
          <aside class="w-60 h-60 bg-white p-4 shadow-md rounded-lg">
            <nav>
              <ul>
                <li class="mb-6">
                  <a
                    href="{{ route('user.profile') }}"
                    class="flex items-center text-gray-700 hover:text-[#FFA800]"
                  >
                    <!--begin::Svg Icon | path: /var/www/preview.keenthemes.com/keenthemes/metronic/docs/core/html/src/media/icons/duotune/communication/com013.svg-->
                    <span class="svg-icon svg-icon-muted svg-icon-2hx"
                      ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z"
                          fill="currentColor"
                        />
                        <rect
                          opacity="0.3"
                          x="8"
                          y="3"
                          width="8"
                          height="8"
                          rx="4"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <!--end::Svg Icon-->
                    <span class="text-lg font-medium pl-3">Profil</span>
                  </a>
                </li>
                <li class="mb-6">
                  <a
                    href="{{ route('user.data-anak') }}"
                    class="flex items-center text-gray-700 hover:text-[#FFA800]"
                  >
                    <!--begin::Svg Icon | path: /var/www/preview.keenthemes.com/keenthemes/metronic/docs/core/html/src/media/icons/duotune/general/gen005.svg-->
                    <span class="svg-icon svg-icon-muted svg-icon-2hx"
                      ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z"
                          fill="currentColor"
                        />
                        <rect
                          x="7"
                          y="17"
                          width="6"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        />
                        <rect
                          x="7"
                          y="12"
                          width="10"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        />
                        <rect
                          x="7"
                          y="7"
                          width="6"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        />
                        <path
                          d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <!--end::Svg Icon-->
                    <span class="text-lg font-medium pl-3">Data Anak</span>
                  </a>
                </li>
                <li class="mb-6">
                  <a
                    href="{{ route('user.kata-sandi') }}"
                    class="flex items-center text-[#FFA800] hover:text-[#FFA800]"
                  >
                    <!--begin::Svg Icon | path: /var/www/preview.keenthemes.com/keenthemes/metronic/docs/core/html/src/media/icons/duotune/general/gen047.svg-->
                    <span class="svg-icon svg-icon-muted svg-icon-2hx"
                      ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.3"
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="10"
                          fill="currentColor"
                        />
                        <path
                          d="M15.8054 11.639C15.6757 11.5093 15.5184 11.4445 15.3331 11.4445H15.111V10.1111C15.111 9.25927 14.8055 8.52784 14.1944 7.91672C13.5833 7.30557 12.8519 7 12 7C11.148 7 10.4165 7.30557 9.80547 7.9167C9.19432 8.52784 8.88885 9.25924 8.88885 10.1111V11.4445H8.66665C8.48153 11.4445 8.32408 11.5093 8.19444 11.639C8.0648 11.7685 8 11.926 8 12.1112V16.1113C8 16.2964 8.06482 16.4539 8.19444 16.5835C8.32408 16.7131 8.48153 16.7779 8.66665 16.7779H15.3333C15.5185 16.7779 15.6759 16.7131 15.8056 16.5835C15.9351 16.4539 16 16.2964 16 16.1113V12.1112C16.0001 11.926 15.9351 11.7686 15.8054 11.639ZM13.7777 11.4445H10.2222V10.1111C10.2222 9.6204 10.3958 9.20138 10.7431 8.85421C11.0903 8.507 11.5093 8.33343 12 8.33343C12.4909 8.33343 12.9097 8.50697 13.257 8.85421C13.6041 9.20135 13.7777 9.6204 13.7777 10.1111V11.4445Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <!--end::Svg Icon-->
                    <span class="text-lg font-medium pl-3">Kata Sandi</span>
                  </a>
                </li>
                <li class="mb-6">
                  <a
                    href="#"
                    class="flex items-center text-gray-700 hover:text-[#FFA800]"
                  >
                    <!-- SVG Icon -->
                    <span class="svg-icon svg-icon-muted svg-icon-2hx">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.3"
                          width="12"
                          height="2"
                          rx="1"
                          transform="matrix(-1 0 0 1 20 11)"
                          fill="currentColor"
                        />
                        <path
                          d="M18.1313 11.6927L16.3756 10.2297C15.9054 9.83785 15.8732 9.12683 16.306 8.69401C16.6957 8.3043 17.3216 8.28591 17.7336 8.65206L20.6592 11.2526C21.1067 11.6504 21.1067 12.3496 20.6592 12.7474L17.7336 15.3479C17.3216 15.7141 16.6957 15.6957 16.306 15.306C15.8732 14.8732 15.9054 14.1621 16.3756 13.7703L18.1313 12.3073C18.3232 12.1474 18.3232 11.8526 18.1313 11.6927Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.5"
                          d="M16 5V6C16 6.55228 15.5523 7 15 7C14.4477 7 14 6.55228 14 6C14 5.44772 13.5523 5 13 5H6C5.44771 5 5 5.44772 5 6V18C5 18.5523 5.44771 19 6 19H13C13.5523 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17C15.5523 17 16 17.4477 16 18V19C16 20.1046 15.1046 21 14 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H14C15.1046 3 16 3.89543 16 5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <!-- End SVG Icon -->
                    <span id="logoutButton" class="text-lg font-medium pl-3"
                      >Keluar</span
                    >
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>

        <!-- Main content -->
        <main class="flex-1 pr-[55px] pl-4 py-5">
          <div>
            <h1
              class="font-opensans text-[18px] min-[840px]:text-[22px] text-[#005E0F] font-extrabold mb-4 min-[850px]:hidden"
            >
              Data Anak
            </h1>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div>
              <div class="flex flex-col mb-4">
                <label class="block text-gray-600">Kata Sandi</label>
                <input
                  type="text"
                  id="kata-sandi"
                  class="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] placeholder:text-[#898989] rounded-lg"
                  required
                />
              </div>
              <div class="flex flex-col mb-4">
                <label class="block text-gray-600">Konfirmasi Kata Sandi</label>
                <input
                  type="text"
                  id="kata-sandi-ulang"
                  class="text-sm min-[840px]:text-base px-3 py-2 focus:outline-none border border-[#D1D9E2] placeholder:text-[#898989] rounded-lg"
                  required
                />
              </div>
            </div>
            <button
              type="button"
              id="kt_docs_sweetalert_basic"
              class="bg-[#0F3F25] text-white px-4 py-2 rounded-md align-self-center mb-4"
            >
              Simpan
            </button>
          </div>
        </main>
      </div>
    </div>

    <!-- begin::Modal Logout -->
    <div
      id="logoutModal"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-[1000] hidden"
    >
      <div
        class="bg-white rounded-lg w-80 p-6 shadow-lg flex flex-col items-center"
      >
        <img
          src="assets/icons/logout.png"
          alt="icon-logout"
          class="w-[80px] h-[80px] mb-4"
        />
        <h2 class="text-lg font-semibold text-gray-800 mb-2 text-center">
          Konfirmasi Logout
        </h2>
        <p class="text-gray-600 mb-6 text-center">
          Apakah Anda yakin ingin keluar?
        </p>
        <div class="flex justify-center gap-4 w-full">
          <button
            id="cancelLogout"
            class="bg-gray-300 text-black px-4 py-2 rounded-lg w-1/2 hover:bg-[#FFA800] hover:text-white btn-hover focus:outline-none"
          >
            Batal
          </button>
          <button
            id="confirmLogoutButton"
            class="bg-[#0F3F25] text-white px-4 py-2 rounded-lg w-1/2 hover:bg-[#FFA800] btn-hover focus:outline-none"
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
    <!-- end::Modal Logout -->

    <!-- Open Tag Footer -->
    <footer class="w-full bg-[#0F3F25]">
      <div
        class="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-between items-center py-4 lg:py-8 gap-y-8"
      >
        <div class="w-full flex flex-col gap-y-5">
          <div class="order-1">
            <img
              src="{{ asset('assets/images/logo.png') }}"
              alt="Langkah Maju Logo"
              class="w-40 md:w-44 lg:w-48"
            />
          </div>
          <div class="order-2 flex flex-col ml-1">
            <span class="text-sm lg:text-base text-white"
              >Langkah Maju hadir untuk memberikan pendampingan yang optimal
              dalam setiap fase pertumbuhan anak,
            </span>
            <span class="text-sm lg:text-base text-white"
              >sehingga anak dapat tumbuh dan berkembang secara optimal.</span
            >
          </div>
          <div
            class="order-4 lg:order-3 flex justify-start lg:justify-end items-center gap-x-6"
          >
            <a href="#">
              <img
                src="{{ asset('assets/icons/facebook.png') }}"
                alt="Facebook"
                class="w-[28px] lg:w-[35px]"
              />
            </a>
            <a href="#">
              <img
                src="{{ asset('assets/icons/instagram.png') }}"
                alt="Instagram"
                class="w-[28px] lg:w-[35px]"
              />
            </a>
            <a href="#">
              <img
                src="{{ asset('assets/icons/youtube.png') }}"
                alt="Youtube"
                class="w-[28px] lg:w-[35px]"
              />
            </a>
          </div>
        </div>

        <div class="w-full pt-4 border-t border-[#D1D9E2]">
          <span class="text-[12px] lg:text-sm text-white"
            >© Copyright 2023
          </span>
        </div>
      </div>
    </footer>
    <!-- Close Tag Footer -->

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        // Mengambil elemen yang diperlukan
        const logoutButtons = [
          document.getElementById("logoutButton"),
          document.getElementById("modalMobileButton"),
        ];
        const logoutModal = document.getElementById("logoutModal");
        const cancelLogout = document.getElementById("cancelLogout");
        const confirmLogoutButton = document.getElementById(
          "confirmLogoutButton"
        );

        // Tampilkan modal ketika tombol logout ditekan
        logoutButtons.forEach((button) => {
          button.addEventListener("click", () => {
            logoutModal.classList.remove("hidden");
          });
        });

        // Sembunyikan modal ketika tombol batal ditekan
        cancelLogout.addEventListener("click", () => {
          logoutModal.classList.add("hidden");
        });

        // Tambahkan logika untuk tombol konfirmasi logout
        confirmLogoutButton.addEventListener("click", () => {
          // Logika untuk logout, redirect ke halaman index
          window.location.href = "index.html"; // Contoh redirect ke halaman index
        });
      });

      const button = document.getElementById('kt_docs_sweetalert_basic');

button.addEventListener('click', e => {
    e.preventDefault();

    Swal.fire({
        text: "Apakah anda yakin data yang anda masukkan telah benar!",
        icon: "warning", // Ubah sesuai ikon yang diinginkan
        showCancelButton: true, // Menampilkan tombol Batal
        confirmButtonText: "Ya, saya yakin",
        cancelButtonText: "Batal", // Teks untuk tombol Batal
        buttonsStyling: false,
        customClass: {
            confirmButton: "bg-[#0F3F25] text-white px-4 py-2 mb-4 rounded-md mr-2 btn-hover",
            cancelButton: "bg-gray-300 text-black hover:bg-[#FFA800] hover:text-white px-4 py-2 mb-4 rounded-md ml-2 btn-hover", // Tambahkan styling untuk tombol Batal
            popup: "p-4"
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Logika jika tombol Ya diklik
            console.log("Data disimpan!");
            // Anda bisa menambahkan logika penyimpanan data di sini
        } else if (result.isDismissed) {
            // Logika jika tombol Batal diklik
            console.log("Proses dibatalkan.");
        }
    });
});

    </script>
    <script src="{{ asset('assets/js/modal.js') }}"></script>
    <script src="{{ asset('assets/js/data-profil.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </body>
</html>
