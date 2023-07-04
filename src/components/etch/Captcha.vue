<template>
    <div class="captcha-container flex items-center">
        <h3 class="text-sm font-bold text-gray-800 mr-2">{{ num1 }}</h3>
        <h3 class="text-sm font-bold text-gray-800 mr-2">+</h3>
        <h3 class="text-sm font-bold text-gray-800 mr-2">{{ num2 }}</h3>
        <input class="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500" type="text"
            v-model="captchaInput" placeholder="Enter the captcha" @input="checkCaptcha" />
    </div>
</template>
  
  
<script>
export default {
    name: 'Captcha',
    data() {
        return {
            num1: 0,
            num2: 0,
            captchaResult: 0,
            captchaInput: '',
        };
    },
    mounted() {
        this.generateCaptcha();
    },
    methods: {
        generateCaptcha() {
            this.num1 = Math.floor(Math.random() * 10);
            this.num2 = Math.floor(Math.random() * 10);
            this.captchaResult = this.num1 + this.num2;
            this.captchaInput = '';
        },
        checkCaptcha() {
            const userResult = parseInt(this.captchaInput);
            if (userResult === this.captchaResult) {
                this.$emit('validated', true);
            } else {
                this.$emit('validated', false);
            }
        },
    },
};
</script>
