<template>
    <div class="flex flex-col mx-10 mt-3">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-3">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-sky-500">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                                    No
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                                    Nomor Pengadaan
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                                    Nomor Dokumen
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                                    Nama Pengadaan
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                                    Tahap
                                </th>
                                <!-- Other headers... -->
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="(row, index) in data" :key="index">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    {{ index + 1 }}
                                </td>
                                <!-- Other cells... -->
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { reactive, onMounted } from 'vue';

export default {
    setup() {
        const data = reactive([]);

        onMounted(async () => {
            const response = await fetch('https://api.example.com/data');
            const json = await response.json();
            data.push(...json);
        });

        return { data };
    },
};
</script>
