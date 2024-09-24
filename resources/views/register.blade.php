<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Signup</title>

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
  bg-[#005E0F]
    bg-no-repeat bg-center bg-cover 
    w-full h-auto lg:h-screen 
    flex justify-center items-center 
    px-4 py-20"
  >
    <div class="flex flex-col lg:flex-row justify-center gap-x-10 gap-y-4 bg-white w-full max-w-[1024px] h-auto rounded-[24px] m-[20px] md:rounded-[40px] p-[32px] lg:p-[40px] select-none">

      <!-- Left::Form -->
      <form id="register_form" action="{{ route('registerPost') }}" method="POST" class="flex-1 flex flex-col justify-center gap-y-[30px] self-stretch">
        @csrf
        <div class="-ml-1">
          <h1 class="text-[36px] md:text-[42px] text-center text-[#005E0F] font-extrabold font-opensans mb-2">Sign Up</h1>
        </div>

        <div class="w-full flex flex-col gap-y-[20px]">
          <input id="name_field" type="text" class="w-full px-[10px] py-[14px] focus:outline-none border-b border-[#BDCAE6] placeholder:text-[#BDCAE6]" name="name" placeholder="Name" required>
          <input id="username_field" type="email" class="w-full px-[10px] py-[14px] focus:outline-none border-b border-[#BDCAE6] placeholder:text-[#BDCAE6]" name="email" placeholder="Email" required>
          <input id="password_field" type="password" class="w-full px-[10px] py-[14px] focus:outline-none border-b border-[#BDCAE6] placeholder:text-[#BDCAE6]" name="password" placeholder="Password" required>
          <input id="password_field" type="password" class="w-full px-[10px] py-[14px] focus:outline-none border-b border-[#BDCAE6] placeholder:text-[#BDCAE6]" name="password_confirmation" placeholder="Password Confirmation" required>
        </div>

        <div class="w-full flex flex-col gap-y-[12px] mt-1">
            <div class="flex justify-between">
                <div class="flex gap-x-[10px] items-center">
                  <span class=" text-sm md:text-base ml-0.5">Saya Menerima
                    <a href="" class="text-[#005E0F] font-semibold">Ketentuan & Kebijakan Privasi</a>
                  </span>
                </div>
    
                <input id="agree_status" type="checkbox" name="agree_status" class="scale-[1.2] mr-0.5 cursor-pointer text-sm md:text-base">
              </div>

          <button type="submit" class="bg-[#005E0F] text-white text-base font-semibold rounded-md py-3">
            Sign Up
          </button>
          <div class="text-center mt-3">
            <span class="text-sm md:text-base">Sudah punya akun?
              <a href="{{ route('login') }}" class="text-[#005E0F] font-semibold">Klik disini</a>
            </span>
          </div>
        </div>
      </form>

      <!-- Right::Image -->
      <div class="w-full lg:w-auto flex-auto lg:flex-1 flex justify-start lg:justify-center items-center self-center lg:block hidden">
        <img src="{{ asset('assets/images/art-mom-baby.png') }}" class="aspect-square w-[360px] lg:w-full" alt="Art Mother and Baby">
      </div>
    </div>
  </div>

</body>
</html>