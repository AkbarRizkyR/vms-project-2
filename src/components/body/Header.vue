<template>
    <header class="bg-white shadow p-6">
        <div class="container mx-auto flex items-center justify-between">
            <img src="@/assets/icons/logo_pln.png" alt="Logo" class=" w-36">
            <div class="md:hidden" @click="isOpen = !isOpen">
                <svg class="w-6 h-6 text-gray-700 hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
            </div>
            <nav class="hidden md:flex space-x-4">
                <router-link to="/portal/home" class="text-gray-700 hover:text-gray-900">Home</router-link>
                <router-link to="/portal/about" class="text-gray-700 hover:text-gray-900">About VMS</router-link>
                <router-link to="/portal/faq" class="text-gray-700 hover:text-gray-900">FAQ's</router-link>
                <router-link to="#" class="text-gray-700 hover:text-gray-900">Term & Condition</router-link>
                <router-link to="/portal/Register" class="text-gray-700 hover:text-gray-900">Register</router-link>
                <router-link to="/login" class="text-gray-700 hover:text-gray-900">Login</router-link>
            </nav>
        </div>
        <nav class="mt-6 md:hidden" :class="{ 'hidden': !isOpen }" @click="isOpen = false">
            <router-link to="/portal/home" class="block py-1 text-gray-700 hover:text-gray-900">Home</router-link>
            <router-link to="/portal/about" class="block py-1 text-gray-700 hover:text-gray-900">About VMS</router-link>
            <router-link to="/portal/faq" class="block py-1 text-gray-700 hover:text-gray-900">FAQ's</router-link>
            <router-link to="#" class="block py-1 text-gray-700 hover:text-gray-900">Term & Condition</router-link>
            <router-link to="/portal/Register" class="block py-1 text-gray-700 hover:text-gray-900">Register</router-link>
            <router-link to="/login" class="block py-1 text-gray-700 hover:text-gray-900">Login</router-link>
        </nav>
    </header>
</template>

  
<script>
import { ref } from "vue";
export default {
    setup() {
        const isOpen = ref(false);
        return {
            isOpen
        }
    }
}
</script>
  