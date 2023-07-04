<template>
    <div class="flex flex-col min-h-screen mx-auto">
        <Header />
        <div class="flex-grow container mx-auto">
            <router-view />
        </div>
        <Footer />
    </div>
</template>
  
<script>
import Header from '@/components/body/Header.vue';
import Footer from '@/components/body/Footer.vue';


export default {
    name: 'PortalLayout',
    components: {
        Header,
        Footer,
    },
};
</script>
  