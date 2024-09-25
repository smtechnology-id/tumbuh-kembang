<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="{{ asset('assets/icons/icon-LM.png') }}">
  <!-- Google Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Open+Sans:wght@500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <!-- Style -->
  <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
  <!-- Tailwind -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="
  bg-[#085E16]
    bg-no-repeat bg-center bg-cover 
    w-full h-screen 
    flex justify-center items-center 
    px-4 py-20"
  >
    <div class="flex flex-col lg:flex-row justify-center gap-x-10 gap-y-4 bg-white w-full max-w-[1024px] h-auto rounded-[24px] m-[20px] md:rounded-[40px] p-[32px] lg:p-[40px] select-none">
      <!-- Left::Image -->
      <div class="w-full lg:w-auto flex-auto lg:flex-1 flex justify-start lg:justify-center items-center self-center lg:block hidden">
        <img src="{{ asset('assets/images/art-mom-baby.png') }}" class="aspect-square w-[360px] lg:w-full" alt="Art Mother and Baby">
      </div>
      

      <!-- Right::Form -->
      <form id="login_form" action="{{ route('loginPost') }}" method="POST" class="flex-1 flex flex-col justify-center gap-y-[30px] self-stretch">
        @csrf
        <div class="-ml-1">
          <h1 class="text-[#085E16] text-[36px] md:text-[42px] text-center font-extrabold font-opensans mb-2">Login</h1>
        </div>

        <div class="w-full flex flex-col gap-y-[20px]">
          <input id="email_field" type="email" class="w-full px-[10px] py-[14px] focus:outline-none border-b border-[#005E0F] placeholder:text-[#BDCAE6]" name="email" placeholder="Username or email" required>
          <input id="password_field" type="password" class="w-full px-[10px] py-[14px] focus:outline-none border-b border-[#005E0F] placeholder:text-[#BDCAE6]" name="password" placeholder="Password" required>
        </div>

        <div class="w-full flex flex-col gap-y-[12px] mt-1">
          <div class="flex justify-between">
            <div class="flex gap-x-[10px] items-center">
              <input type="checkbox" name="remember_me" id="remember_me" class="scale-[1.2] ml-0.5 cursor-pointer text-sm md:text-base">
              <label for="remember_me" class="text-sm md:text-base cursor-pointer">Ingat saya</label>
            </div>
            <a href="#" class="text-[#00470B] text-sm md:text-base">Lupa kata sandi?</a>
          </div>
          <button type="submit" class="bg-[#005E0F] text-white text-base font-semibold rounded-md py-3">
            Login
          </button>
          <div class="text-center mt-3">
            <span class="text-sm md:text-base">Belum punya akun?
              <a href="{{ route('register') }}" class="text-[#00470B] font-semibold">Klik disini</a>
            </span>
          </div>
        </div>
      </form>
    </div>
  </div>

  <script src="{{ asset('assets/js/login.js') }}"></script>
</body>
</html>