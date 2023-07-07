<template>
    <footer class="py-6 font-bold">
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
  