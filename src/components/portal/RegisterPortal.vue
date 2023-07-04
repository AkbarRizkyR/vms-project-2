<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="w-3/4">
            <p class="font-md font-sans mb-20"> 
                Panduan untuk melaksanakan registrasi dapat dilihat <a href="#" class="font-md font-sans font-bold text-blue-500">[Disini]</a>
            </p>
        <!-- Body Table -->
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="bg-slate-200 p-4">
                    <h1 class="font-sans font-light text-sm">Masukan alamat email untuk melanjutkan proses pendaftaran</h1>
                </div>
                <div class="p-4">
                    <form @submit.prevent="submitForm">
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                                <input v-model="email" type="email" id="email"
                                    :class="['w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500', { 'border-red-500': email && !isEmailValid }]">
                                <p v-if="email && !isEmailValid" class="text-red-500 text-sm mt-1">Mohon masukan email yang
                                    valid.</p>
                            </div>
                            <div class="mt-8">
                                <p class="text-xs text-red-500 font-semibold">* Pastikan alamat email yang anda masukan merupakan email
                                    resmi perusahaan.</p>
                                <p class="text-xs text-red-500 font-semibold italic">(Official email should be entered.)</p>
                            </div>
                        </div>
                        <div class="flex space-x-2 justify-start mt-6">
                            <div class="flex items-center">
                                <Captcha v-model="captchaValid" />
                            </div>
                            <div class="flex flex-grow">
                                <button :disabled="!isFormValid" type="submit"
                                    class="rounded-lg px-4 py-2 bg-blue-500 text-white font-bold hover:bg-blue-600 duration-300">Register</button>
                                <button
                                    class="text-white bg-green-600 hover:bg-green-700 rounded-lg px-4 py-2 ml-2 font-bold duration-300"
                                    @click="resendEmail">Resend Email</button>
                            </div>
                        </div>
                    </form>
                    <div class="grid grid-cols-2 gap-4 mt-9">
                        <div>
                            <p class="text-sm text-gray-700 font-semibold">Untuk keperluan verifikasi silakan download form di bawah ini.
                            </p>
                            <p class="text-sm text-gray-700 font-semibold">Link: <a href="/assets/docs/Form_Pendaftaran_EProc.xls" target="_blank"
                                    class="text-blue-500 underline">Download Formulir Pendaftaran (Form_Pendaftaran.xls)</a>
                            </p>
                            <p class="text-sm text-gray-700 font-semibold">Langkah berikutnya akan kami sampaikan melalui alamat email
                                terdaftar.</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-700 italic font-semibold">For verification requirement please download the (Form Registration)
                            </p>
                            <p class="text-sm text-gray-700 italic font-semibold">Link: <a href="/assets/docs/Registration_Form.xls" target="_blank"
                                    class="text-blue-500 underline">Link : Download Registration Form (Registration_Form.xls)</a>
                            </p>
                            <p class="text-sm text-gray-700 italic font-semibold">For the next step we will explain by email</p>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-200 p-4 italic font-semibold">
                    <p class="font-sans font-light text-xs">* Pastikan alamat email yang anda masukan valid</p>
                </div>
            </div>
            <!-- End Body Table -->
            <p class="font-xs font-sans mt-20"> 
                Setelah proses registrasi dan pengisian data online dilakukan, proses berikutnya 
                adalah verifikasi dokumen perusahaan yang dapat dilakukan di Kantor PLN Pusat/Unit Induk. 
                Alamat Kantor PLN dapat dilihat 
                <a href="#" class="font-xs font-sans font-bold text-blue-500">[Disini]</a>
            </p>
        </div>
    </div>
</template>
  
<script>
import Captcha from '@/components/etch/Captcha.vue';

export default {
    name: 'Registration',
    components: {
        Captcha,
    },
    data() {
        return {
            email: '',
            captchaValid: false,
        };
    },
    computed: {
        isEmailValid() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(this.email);
        },
        isFormValid() {
            return this.isEmailValid && this.captchaValid;
        },
    },
    methods: {
        submitForm() {
            // Perform registration logic here
            console.log('Registration submitted');
        },
        resendEmail() {
            // Perform resend email logic here
            console.log('Resend email requested');
        },
    },
};
</script>
  