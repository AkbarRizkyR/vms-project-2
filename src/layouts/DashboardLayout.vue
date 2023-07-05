<template>
    <div class="flex flex-col min-h-screen mx-auto">
        <Header />
        <Menu />
        <div class="flex-grow container mx-auto">
            <router-view />
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/body/Header2.vue';
import Footer from '../components/body/Footer.vue';
import Menu from '../components/body/MenuDash.vue';

    export default {
    name: 'DashboardLayout',
    components: {
        Header,
        Menu,
        Footer,
    },
};
</script>