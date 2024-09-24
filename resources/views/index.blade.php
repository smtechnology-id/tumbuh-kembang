@extends('layouts.landing')

@section('content')
    <!-- Open Tag Content Landing-->
    <section class="w-full flex justify-center items-center pt-[70px] md:pt-[75px] lg:pt-[88px]">
        <div class="bg-cover bg-center w-full h-[450px] lg:h-[553px] overflow-hidden"
            style="background-image: url(assets/images/mom-baby.jpg)">
            <div class="absolute inset-0 bg-black opacity-30"></div>
            <div class="absolute inset-0 flex items-center">
                <div class="container">
                    <div class="row justify-content-start">
                        <div class="p-4">
                            <p
                                class="text-white animated slideInDown text-[28px] md:text-[34px] lg:text-[42px] font-extrabold font-opensans">
                                Pantau Tumbuh Kembang Anak
                            </p>
                            <p
                                class="text-white animated slideInDown text-[28px] md:text-[34px] :text-[42px] font-extrabold font-opensans pb-3">
                                Dengan
                                <img class="inline-block w-[190px] md:w-[240px] lg:w-[290px]"
                                    src="assets/images/nama-logo.png" alt="Langkah Maju" />
                            </p>
                            <p
                                class="animated slideInDown font-bold text-[#FFC10E] text-[13px] md:text-base lg:text-lg pb-2">
                                Website Kesehatan Anak untuk Memastikan Si Kecil
                            </p>
                            <p class="animated slideInDown font-bold text-[#FFC10E] text-[13px] md:text-base lg:text-lg">
                                Berkembang Optimal Sesuai dengan Usianya!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Close Tag Content Landing -->

    <!-- Open Tag Content Fitur -->
    <section class="relative w-full bg-white" id="fitur">
        <div class="relative w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 z-20">
            <div class="flex flex-col justify-center items-center py-20 gap-y-16">
                <div class="flex flex-col justify-center text-center gap-y-2.5">
                    <h1 class="font-opensans text-[22px] lg:text-[26px] text-[#005E0F] font-extrabold">
                        Fitur Langkah Maju
                    </h1>
                    <p class="text-[#36455B] text-sm lg:text-base">
                        Berikut fitur-fitur yang dapat ibu gunakan untuk mengetahui tumbuh
                        kembang si kecil
                    </p>
                </div>

                <!-- Begiin::Coloumn Fitur -->
                <div class="w-full max-w-[1280px] grid grid-col-1 md:grid-cols-2 gap-8 justify-center text-center">
                    <a href="login.html">
                        <div
                            class="bg-white rounded-lg p-6 flex flex-col items-center hover-fitur shadow-[2px_2px_10px_0px_rgba(0,0,0,0.1)]">
                            <img class="w-[75px] lg:w-[95px] pb-3" src="assets/icons/toy-block.png" alt="" />
                            <h4 class="text-base lg:text-lg font-bold mb-2">Skrining Perkembangan</h4>
                            <p class="text-gray-600 text-sm lg:text-base">
                                Membantu mengidentifikasi risiko keterlambatan perkembangan
                                pada anak
                            </p>
                        </div>
                    </a>
                    <a href="login.html">
                        <div
                            class="bg-white rounded-lg p-6 flex flex-col items-center hover-fitur shadow-[2px_2px_10px_0px_rgba(0,0,0,0.1)]">
                            <img class="w-[75px] lg:w-[95px] pb-3" src="assets/icons/growth.png" alt="" />
                            <h4 class="text-base lg:text-lg font-bold mb-2">Grafik Pertumbuhan</h4>
                            <p class="text-gray-600 text-sm lg:text-base">
                                Membantu mengetahui status gizi anak dan memantau nilai
                                pertumbuhan anak
                            </p>
                        </div>
                    </a>
                    <a href="login.html">
                        <div
                            class="bg-white rounded-lg p-6 flex flex-col items-center hover-fitur shadow-[2px_2px_10px_0px_rgba(0,0,0,0.1)]">
                            <img class="w-[75px] lg:w-[95px] pb-3" src="assets/icons/vaccines.png" alt="" />
                            <h4 class="text-base lg:text-lg font-bold mb-2">Jadwal Imunisasi</h4>
                            <p class="text-gray-600 text-sm lg:text-base">
                                Memberikan informasi terkait jadwal imunisasi dan manfaat
                                vaksin yang akan diberikan untuk tumbuh kembang anak
                            </p>
                        </div>
                    </a>
                    <a href="login.html">
                        <div
                            class="bg-white rounded-lg p-6 flex flex-col items-center hover-fitur shadow-[2px_2px_10px_0px_rgba(0,0,0,0.1)]">
                            <img class="w-[75px] lg:w-[95px] pb-3" src="assets/icons/playtime.png" alt="" />
                            <h4 class="text-base lg:text-lg font-bold mb-2">Catatan Perkembangan</h4>
                            <p class="text-gray-600 text-sm lg:text-base">
                                Catat semua momen penting proses perkembangan anak, karena setiap tahap perkembangan anak
                                adalah momen berharga
                            </p>
                        </div>
                    </a>
                </div>
                <!-- End::Coloumn Fitur -->
            </div>
        </div>
    </section>
    <!-- Close Tag Content Fitur -->

    <!-- Open Tag Content -->
    <section class="relative w-full bg-gray-100" id="penjelasan">
        <div class="relative w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 z-20">
            <div class="justify-center items-center py-20 gap-y-16">
                <h1 class="font-opensans text-[20px] lg:text-[26px] text-[#005E0F] font-extrabold text-center pb-6">
                    Platform Kesehatan Untuk Memantau Tumbuh Kembang Anak
                </h1>
                <div class="p-2 text-justify leading-loose text-sm lg:text-base">
                    <p>
                        Langkah Maju adalah platform kesehatan yang hadir untuk menemani
                        setiap langkah pertumbuhan dan perkembangan anak anda secara
                        optimal. Langkah Maju berkomitmen untuk memberikan informasi yang
                        akurat, sehingga anda dapat menjadi orang tua yang lebih siap dan
                        percaya diri.
                        <br /><br />
                        Dengan Langkah Maju, anda dapat menemukan berbagai informasi
                        penting yang meliputi :
                        <br /><br />
                    <ul class="list-disc pl-4">
                        <li>Pantau Pertumbuhan : Lacak pertumbuhan fisik anak anda dengan
                            mudah. Masukkan data berat badan dan tinggi badan secara berkala
                            untuk mengetahui status gizi anak, lalu bandingan dengan grafik
                            pertumbuhan standar. Perhitungan dilakukan menggunakan metode
                            Z-skor, yaitu metode untuk mengukur status gizi anak.</li>
                        <br>
                        <li>Skrining Perkembangan : Lakukan skrining perkembangan anak Anda
                            untuk mengetahui apakah perkembangannya sesuai dengan usianya.
                            Kami akan memberikan informasi mengenai stimulasi yang tepat
                            berdasarkan hasil skrining yang telah dilakukan.</li>
                        <br>
                        <li>Jadwal Imunisasi Lengkap : Ketahui jadwal imunisasi yang tepat
                            untuk anak anda, mulai dari bayi hingga anak usia 5 tahun. Kami
                            menyajikan informasi yang mudah dipahami dan sesuai dengan
                            rekomendasi dari Ikatan Dokter Anak Indonesia (IDAI).</li>
                        <br>
                        <li>Catatan Tumbuh Kembang : Simpan semua momen berharga
                            perkembangan anak Anda dengan mencatat setiap tonggak penting,
                            seperti kata pertama, langkah pertama, atau gigi susu pertama.</li>
                    </ul>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- Close Tag Content -->
@endsection
