<template>
    <div class="w-full flex min-h-screen">
        <div class="w-full bg-gradient-to-br from-slate-700 to-blue-800 flex items-center justify-center">
            <div class="w-96 bg-white rounded-lg shadow-lg p-8">
                <!-- <div class="flex items-center justify-center">
                    <img src="@/assets/Logo/Logo.png" alt="Logo" class="w-20 h-20 mr-2" />
                </div> -->
                <h2 class="text-2xl font-bold text-center text-indigo-800 mb-4">Sign In To Your Account</h2>
                <form>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
                        <input
                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500 placeholder-gray-400"
                            type="username" id="username" v-model="username" placeholder="Enter your username" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                        <input
                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500 placeholder-gray-400"
                            type="password" id="password" v-model="password" placeholder="Enter your password" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="captcha">Captcha</label>
                        <div class="flex items-center">
                            <div>
                                <h3 class="text-lg font-bold text-gray-800">{{ num1 }}</h3>
                            </div>
                            <div class="ml-2 mr-2">
                                <h3 class="text-lg font-bold text-gray-800">+</h3>
                            </div>
                            <div class="mr-4">
                                <h3 class="text-lg font-bold text-gray-800">{{ num2 }}</h3>
                            </div>
                            <input
                                class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
                                type="text" id="captcha" v-model="captchaInput" placeholder="Enter the captcha" />
                        </div>
                    </div>
                    <button
                        class="bg-gradient-to-r from-slate-700 to-cyan-400 hover:from-cyan-400 hover:to-slate-700 text-white rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-300 w-full"
                        type="submit">Login</button>
                    <div>
                        <h1
                            class="font-bold bg-gradient-to-r from-sky-900 to-slate-900 bg-clip-text text-transparent text-sm mt-5">
                            If You Don't Have an Account, Please
                            <router-link to="/register"
                                class="bg-gradient-to-r text-md from-amber-600 to-rose-900 bg-clip-text text-transparent">Register
                                !</router-link>.
                        </h1>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            num1: Math.floor(Math.random() * 10),
            num2: Math.floor(Math.random() * 10),
            captchaResult: null,
            userResult: null,
            isCaptchaValid: false
        };
    },
    methods: {
        generateCaptcha() {
            this.num1 = Math.floor(Math.random() * 10);
            this.num2 = Math.floor(Math.random() * 10);
            this.captchaResult = this.num1 + this.num2;
            this.userResult = null;
            this.isCaptchaValid = false;
        },
        checkCaptcha() {
            if (parseInt(this.userResult) === this.captchaResult) {
                this.isCaptchaValid = true;
                // Perform the login action here
            } else {
                this.isCaptchaValid = false;
                // Display an error message or take appropriate action
            }
        }
    }
}
</script>
  