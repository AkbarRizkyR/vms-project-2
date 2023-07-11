<template>
    <div class="flex flex-col min-h-screen mx-auto">
        <div class="flex-grow container mx-auto">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginLayout',
};
</script>
