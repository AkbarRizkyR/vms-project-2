<template>
    <div class="flex flex-col min-h-screen mx-auto">
        <Header />
        <div class="flex-grow container mx-auto py-6 px-4 sm:px-6 lg:py-8 lg:px-8">
            <Breadcrumb />
            <router-view />
        </div>
        <Footer />
    </div>
</template>
  
<script>
import Header from '@/components/body/Header.vue';
import Footer from '@/components/body/Footer.vue';
import Breadcrumb from '../components/etch/Breadcrumb.vue';

export default {
    name: 'PortalLayout',
    components: {
    Header,
    Footer,
    Breadcrumb
},
};
</script>
