<template>
    <footer class="py-6 font-bold">
        <div class="container mx-auto px-4 border-t-4">
            <div class="flex flex-wrap justify-between items-center">
                <div class="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 ml-44">
                    <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul class="text-sm font-normal">
                        <li class="mb-3"><a href="#" class="hover:text-gray-400">Home</a></li>
                        <li class="mb-3"><a href="#" class="hover:text-gray-400">About</a></li>
                        <li class="mb-3"><a href="#" class="hover:text-gray-400">Services</a></li>
                        <li><a href="#" class="hover:text-gray-400">Contact</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                    <h3 class="text-lg font-bold mb-4">Contact Us</h3>
                    <div class="flex items-center text-sm">
                        <img src="@/assets/icons/home.svg" class="w-6 fill-black mr-4">
                        <p class="text-sm">Jl. Gatot Subroto No.Kav. 38, RT.6/RW.1, Kuningan Bar., Kec. Mampang Prpt.,
                            Jakarta, Daerah Khusus Ibukota Jakarta 12710</p>
                    </div>
                    <div class="flex items-center text-sm mt-5">
                        <img src="@/assets/icons/email.svg" class="w-6 fill-black mr-4">
                        <p class="text-sm font-bold">E-proc </p>
                    </div>
                    <p class="text-sm ml-10">servicedesk@pln.co.id</p>
                </div>
            </div>
        </div>
    </footer>
    <div class="mt-6 text-sm w-full bg-blue-500 pt-2">
        <p class="items-center ml-48 pb-2 text-left font-semibold font-sans">&copy; {{ currentYear }} Company Name. All rights reserved.</p>
    </div>
</template>
  
<script>
export default {
    name: 'Footer',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
};
</script>
  