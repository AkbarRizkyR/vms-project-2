<template>
    <div class='bg-gray-400'>
        <div class='px-2 py-2 mx-auto'>
            <div class="py-5">
                <!-- start breadcrumb -->
                <nav aria-label="breadcrumb">
                    <ol class="flex space-x-2">
                        <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="flex items-center">
                            <router-link :to="breadcrumb.path" class="text-gray-600 hover:text-purple-700 capitalize flex items-center space-x-1 mr-2">
                                <!-- Add an icon depending on the breadcrumb's name -->
                                <template v-if="breadcrumb.name === 'home'">
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3m-3-7h2"></path>
                                    </svg>
                                </template>
                                <template v-if="breadcrumb.name === 'portal'">
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3m-3-7h2"></path>
                                    </svg>
                                </template>
                                <!-- Add more conditions for different breadcrumb names and corresponding icons -->
                                <span>{{ breadcrumb.name }}</span>
                            </router-link>
                            <!-- Add a '>' or '/' separator after each breadcrumb link, except the last one -->
                            <span v-if="index !== breadcrumbs.length - 1" class="mx-2 ml-3">/</span>
                        </li>
                    </ol>
                </nav>
                <!-- end breadcrumb -->
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()

        const breadcrumbs = computed(() => {
            let pathArray = route.path.split('/')
            pathArray.shift() // remove the first empty string caused by split
            let breadcrumbs = pathArray.map((path, i) => {
                return {
                    name: path,
                    path: '/' + pathArray.slice(0, i + 1).join('/')
                }
            })
            return breadcrumbs
        })

        return { breadcrumbs }
    }
}
</script>
