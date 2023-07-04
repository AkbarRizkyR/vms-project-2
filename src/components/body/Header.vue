<template>
    <header class="flex items-center justify-between py-4 px-6 border-b-4">
        <div>
            <img src="@/assets/icons/logo_pln.png" alt="Logo" class="ml-44">
        </div>
        <nav class="flex items-center space-x-7 mr-20 ml-10">
            <ul class="flex space-x-4 font-sans font-semibold">
                <!-- Add the menu items here -->
                <li><a href="#">Home</a></li>
                <li><a href="#">About E-Proc</a></li>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">Term & Condition</a></li>
                <li><a href="#">Registration</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
        <div>
            <!-- Replace 'Logo2' with your second logo -->
            <img src="@/assets/icons/logo-eproc.png" alt="logo-eproc" class="mr-44">
        </div>
    </header>
</template>
  
<script>
export default {
    name: 'Header',
};
</script>
  
<style scoped>

</style>
  