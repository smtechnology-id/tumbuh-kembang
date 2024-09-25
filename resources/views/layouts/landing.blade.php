<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LangkahMaju</title>

    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ asset('assets/icons/icon-LM.png') }}" />
    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Open+Sans:wght@500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet" />
    <!-- Style -->
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}" />
    <!-- Tailwind -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-[#F9FBFD] overflow-x-hidden">
    <!-- Open Tag Header -->
    <header class="fixed-navbar w-full bg-[#0F3F25]">
        <div class="w-full max-w-[1280px] mx-auto px-8 lg:px-12 flex justify-between items-center py-3">
            <div class="shrink-0">
                <img src="{{ asset('assets/images/logo.png') }}" alt="Baby Care Logo" class="w-40 md:w-44 lg:w-48" />
            </div>

            <!-- Desktop Navbar -->
            <nav class="hidden lg:block navbar navbar-expand-lg navbar-light">
                <ul class="flex items-center gap-x-12">
                    <li>
                        <a href="{{ route('index') }}" class="text-white custom-hover">Beranda</a>
                    </li>
                    <li>
                        <div class="nav-item dropdown">
                            <a href="javascript:void(0);" class="nav-link dropdown-toggle text-white custom-hover"
                                data-toggle="dropdown">Fitur</a>
                            <div class="dropdown-menu">
                                <a href="" class="dropdown-item">Skrining Perkembangan</a>
                                <a href="" class="dropdown-item">Grafik Pertumbuhan</a>
                                <a href="" class="dropdown-item">Imunisasi</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="" class="text-white custom-hover">Catatan Perkembangan</a>
                    </li>
                </ul>
            </nav>

            <!-- Button Login -->
            @if (Auth::check())
                <!-- Profil -->
                <div class="hidden min-[850px]:block">
                    <div class="flex items-center gap-x-3">
                        <a href="{{ route('user.profile') }}">
                            <h1 id="user_full_name" class="font-semibold text-white text-[16px]">
                                {{ Auth::user()->name }}
                            </h1>
                        </a>
                        <a href="{{ route('user.profile') }}">
                            <div class="ml-2">
                                <img src="{{ asset('assets/images/mommy.webp') }}" alt="User's Profile Picture"
                                    class="w-[45px] h-[45px] rounded-full object-cover" />
                            </div>
                        </a>
                    </div>
                </div>
            @else
                <div class="hidden lg:block">
                    <a href="{{ route('login') }}"
                        class="flex justify-center items-center gap-x-2 bg-[#FFC10E] py-2 px-8 rounded-lg">
                        <span class="text-[#B05F00] font-semibold text-lg">Login</span>
                    </a>
                </div>
            @endif

            <!-- Mobile Navbar -->
            <div class="block lg:hidden" id="open_modal_btn">
                <svg class="fill-white text-[26px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 448 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            </div>

            <!-- Mobile Modal -->
            <div
                class="mobile_modal translate-y-[100%] fixed top-0 left-0 w-full h-screen bg-[#0F3F25] px-4 duration-500 ease-in-out z-[999] overflow-y-auto">
                <div class="w-full">
                    <ul class="flex flex-col px-4 pt-[80px] gap-y-6">
                        <li>
                            <a href="dashboard.html" class="flex items-center text-white custom-hover">
                                <img class="w-[30px] lg:w-[30px]" src="{{ asset('assets/icons/home.png') }}"
                                    alt="" />
                                <span class="text-lg font-medium pl-3">Beranda</span>
                            </a>
                        </li>
                        <li>
                            <a href="perkembangan.html" class="flex items-center text-white custom-hover">
                                <img class="w-[30px] lg:w-[30px]" src="{{ asset('assets/icons/toy-block (1).png') }}"
                                    alt="" />
                                <span class="text-lg font-medium pl-3">Skrining Perkembangan</span>
                            </a>
                        </li>
                        <li>
                            <a href="gizi-pertumbuhan.html" class="flex items-center text-white custom-hover">
                                <img class="w-[30px] lg:w-[30px]" src="{{ asset('assets/icons/growth (1).png') }}"
                                    alt="" />
                                <span class="text-lg font-medium pl-3">Grafik Pertumbuhan</span>
                            </a>
                        </li>
                        <li>
                            <a href="imunisasi.html" class="flex items-center text-white custom-hover">
                                <img class="w-[30px] lg:w-[30px]" src="{{ asset('assets/icons/vaccines (1).png') }}"
                                    alt="" />
                                <span class="text-lg font-medium pl-3">Imunisasi</span>
                            </a>
                        </li>
                        <li>
                            <a href="catatan-perkembangan.html" class="flex items-center text-white custom-hover">
                                <img class="w-[30px] lg:w-[30px]" src="{{ asset('assets/icons/playtime (1).png') }}"
                                    alt="" />
                                <span class="text-lg font-medium pl-3">Catatan Perkembangan</span>
                            </a>
                        </li>

                        <span class="w-[150px] border-t-2 border-[#FFCB40]"></span>
                        <li>
                            <div class="w-[110px] lg:block">
                                <a href="login.html"
                                    class="flex justify-center items-center gap-x-2 bg-[#FFC10E] py-2 px-8 rounded-lg">
                                    <span class="text-[#B05F00] font-semibold text-lg">Login</span>
                                </a>
                            </div>
                        </li>

                    </ul>
                </div>
                <!-- Close Modal -->
                <div class="absolute top-6 right-6" id="close_modal_btn">
                    <svg class="fill-white text-[26px] cursor-pointer" xmlns="http://www.w3.org/2000/svg"
                        height="1em" viewBox="0 0 384 512">
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>
            </div>

        </div>
    </header>
    <!-- Close Tag Header -->
    @yield('content')
    <!-- Open Tag Footer -->
    <footer class="w-full bg-[#0F3F25]">
        <div
            class="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-between items-center py-4 lg:py-8 gap-y-8">
            <div class="w-full flex flex-col gap-y-5">
                <div class="order-1">
                    <img src="{{ asset('assets/images/logo.png') }}" alt="Langkah Maju Logo"
                        class="w-40 md:w-44 lg:w-48" />
                </div>
                <div class="order-2 flex flex-col ml-1">
                    <span class="text-sm lg:text-base text-white">Langkah Maju hadir untuk memberikan pendampingan yang
                        optimal dalam setiap fase pertumbuhan anak, </span>
                    <span class="text-sm lg:text-base text-white">sehingga anak dapat tumbuh dan berkembang secara
                        optimal.</span>
                </div>
                <div class="order-4 lg:order-3 flex justify-start lg:justify-end items-center gap-x-6">
                    <a href="#">
                        <img src="{{ asset('assets/icons/facebook.png') }}" alt="Facebook"
                            class="w-[28px] lg:w-[35px]" />
                    </a>
                    <a href="#">
                        <img src="{{ asset('assets/icons/instagram.png') }}" alt="Instagram"
                            class="w-[28px] lg:w-[35px]" />
                    </a>
                    <a href="#">
                        <img src="{{ asset('assets/icons/youtube.png') }}" alt="Youtube"
                            class="w-[28px] lg:w-[35px]" />
                    </a>
                </div>
            </div>

            <div class="w-full pt-4 border-t border-[#D1D9E2]">
                <span class="text-[12px] lg:text-sm text-white">© Copyright 2023
                </span>
            </div>
        </div>
    </footer>
    <!-- Close Tag Footer -->
    
    <script src="{{ asset('assets/js/modal.js') }}"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>
