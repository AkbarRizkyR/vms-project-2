<template>
    <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
                <div class="hidden sm:block sm:ml-6">
                    <div class="flex space-x-4">
                        <router-link to="/"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium">Home</router-link>

                        <div class="relative inline-block text-left">
                            <Menu>
                                <MenuButton
                                    class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                    Penyedia
                                    <ChevronDownIcon class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                                        aria-hidden="true" />
                                </MenuButton>

                                <MenuItems
                                    class="absolute left-0 z-50 w-56 mt-2 origin-top-right bg-gray-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <MenuItem>
                                    <Menu as="div">
                                        <MenuButton
                                            class="flex text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 text-sm w-full text-left transition-colors duration-300 ease-in-out">
                                            Pengadaan
                                            <ChevronRightIcon
                                                class="w-5 h-5 ml-20 -mr-1 text-violet-200 hover:text-violet-100"
                                                aria-hidden="true" />
                                        </MenuButton>
                                        <MenuItems
                                            class="absolute left-full top-0 mt-2 w-56 bg-gray-800 rounded-md shadow-lg focus:outline-none">
                                            <MenuItem>
                                            <router-link to="/penyedia/pengadaan-baru"
                                                class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                Pengadaan baru
                                            </router-link>
                                            </MenuItem>
                                            <MenuItem>
                                            <router-link to="/penyedia/daftar-pengadaan"
                                                class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                Daftar Pengadaan
                                            </router-link>
                                            </MenuItem>
                                            <MenuItem>
                                            <router-link to="/penyedia/reverse-action"
                                                class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                Reverse Action
                                            </router-link>
                                            </MenuItem>
                                            <MenuItem>
                                            <router-link to="/penyedia/history-reverse-action"
                                                class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                History Reverse Action
                                            </router-link>
                                            </MenuItem>
                                            <!-- Add more MenuItems here -->
                                        </MenuItems>
                                    </Menu>
                                    </MenuItem>
                                    <MenuItem>
                                    <Menu as="div">
                                        <MenuButton
                                            class="text-gray-300 hover:bg-gray-700 hover:text-white flex px-4 py-2 text-sm w-full text-left transition-colors duration-300 ease-in-out">
                                            DPT Penyedia
                                            <ChevronRightIcon
                                                class="w-5 h-5 ml-16 -mr-1 text-violet-200 hover:text-violet-100"
                                                aria-hidden="true" />
                                        </MenuButton>
                                        <MenuItems
                                            class="absolute left-full top-0 mt-10 ml-1 w-56 bg-gray-800 rounded-md shadow-lg focus:outline-none">
                                            <MenuItem>
                                            <router-link to="/penyedia/pengumuman-dpt"
                                                class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                Pengumuman DPT
                                            </router-link>
                                            </MenuItem>
                                            <MenuItem>
                                            <router-link to="/penyedia/daftar-dpt"
                                                class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                Daftar DPT
                                            </router-link>
                                            </MenuItem>
                                            <MenuItem>
                                            <router-link to="/penyedia/proses-dpt"
                                                class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                Proses DPT
                                            </router-link>
                                            </MenuItem>
                                            <MenuItem>
                                            <router-link to="/penyedia/cancel-dpt"
                                                class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                Pembatalan DPT
                                            </router-link>
                                            </MenuItem>
                                            <!-- Add more MenuItems here -->
                                        </MenuItems>
                                    </Menu>
                                    </MenuItem>

                                    <MenuItem>
                                    <Menu as="div">
                                        <MenuButton
                                            class="text-gray-300 hover:bg-gray-700 hover:text-white flex px-4 py-2 text-sm w-full text-left transition-colors duration-300 ease-in-out">
                                            Data Penyedia
                                            <ChevronRightIcon
                                                class="w-5 h-5 ml-14 -mr-2 text-violet-200 hover:text-violet-100"
                                                aria-hidden="true" />
                                        </MenuButton>
                                        <MenuItems
                                            class="absolute left-full top-0 mt-16 ml-1 w-56 bg-gray-800 rounded-md shadow-lg focus:outline-none">
                                            <MenuItem>
                                            <Menu as="div">
                                                <MenuButton
                                                    class="text-gray-300 hover:bg-gray-700 hover:text-white flex px-4 py-2 text-sm w-full text-left transition-colors duration-300 ease-in-out">
                                                    Administrasi
                                                    <ChevronRightIcon
                                                class="w-5 h-5 ml-16 -mr-1 text-violet-200 hover:text-violet-100"
                                                aria-hidden="true" />
                                                </MenuButton>
                                                <MenuItems
                                                    class="absolute left-full top-0 mt-2 w-56 bg-gray-800 rounded-md shadow-lg focus:outline-none ">
                                                    <MenuItem>
                                                    <router-link to="/penyedia/identitas"
                                                        class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                        Identitas
                                                    </router-link>
                                                    </MenuItem>
                                                    <MenuItem>
                                                    <router-link to="/penyedia/ijin-usaha"
                                                        class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                        Ijin Usaha
                                                    </router-link>
                                                    </MenuItem>
                                                    <MenuItem>
                                                    <router-link to="/penyedia/akta"
                                                        class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                        Akta
                                                    </router-link>
                                                    </MenuItem>
                                                    <MenuItem>
                                                    <router-link to="/penyedia/pemilik"
                                                        class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                        Pemilik
                                                    </router-link>
                                                    </MenuItem>
                                                    <MenuItem>
                                                    <router-link to="/penyedia/pengurus"
                                                        class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                        Pengurus
                                                    </router-link>
                                                    </MenuItem>
                                                    <MenuItem>
                                                    <router-link to="/penyedia/bank"
                                                        class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                        Bank
                                                    </router-link>
                                                    </MenuItem>
                                                </MenuItems>
                                            </Menu>
                                            </MenuItem>
                                            <MenuItem>
                                            <Menu as="div">
                                                <MenuButton
                                                    class="text-gray-300 hover:bg-gray-700 hover:text-white flex px-4 py-2 text-sm w-full text-left transition-colors duration-300 ease-in-out">
                                                    Teknik
                                                    <ChevronRightIcon
                                                class="w-5 h-5 ml-24 -mr-1 text-violet-200 hover:text-violet-100"
                                                aria-hidden="true" />
                                                </MenuButton>
                                                <MenuItems
                                                    class="absolute left-full top-0 mt-2 w-56 bg-gray-800 rounded-md shadow-lg focus:outline-none ">
                                                    <MenuItem>
                                                    <router-link to="/penyedia/tenaga-ahli"
                                                        class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                        Tenaga Ahli
                                                    </router-link>
                                                    </MenuItem>
                                                    <MenuItem>
                                                    <router-link to="/penyedia/pengalaman"
                                                        class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                        Pengalaman
                                                    </router-link>
                                                    </MenuItem>
                                                    <MenuItem>
                                                    <router-link to="/penyedia/peralatan"
                                                        class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                        Peralatan
                                                    </router-link>
                                                    </MenuItem>
                                                    <MenuItem>
                                                    <router-link to="/penyedia/pekerjaan-ongoing"
                                                        class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                        Pekerjaan Sedang Berjalan
                                                    </router-link>
                                                    </MenuItem>
                                                </MenuItems>
                                            </Menu>
                                            </MenuItem>
                                            <MenuItem>
                                            <Menu as="div">
                                                <MenuButton
                                                    class="text-gray-300 hover:bg-gray-700 hover:text-white flex px-4 py-2 text-sm w-full text-left transition-colors duration-300 ease-in-out">
                                                    Keuangan
                                                    <ChevronRightIcon
                                                class="w-5 h-5 ml-20 -mr-1 text-violet-200 hover:text-violet-100"
                                                aria-hidden="true" />
                                                </MenuButton>
                                                <MenuItems
                                                    class="absolute left-full top-0 mt-2 w-56 bg-gray-800 rounded-md shadow-lg focus:outline-none ">
                                                    <MenuItem>
                                                    <router-link to="/penyedia/neraca"
                                                        class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                        Neraca
                                                    </router-link>
                                                    </MenuItem>
                                                    <MenuItem>
                                                    <router-link to="/penyedia/pajak"
                                                        class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                        Pajak
                                                    </router-link>
                                                    </MenuItem>
                                                    <MenuItem>
                                                    <router-link to="/penyedia/rating"
                                                        class="text-white hover:bg-gray-700 block px-4 py-2 text-sm transition-colors duration-300 ease-in-out">
                                                        Rating Keuangan
                                                    </router-link>
                                                    </MenuItem>
                                                </MenuItems>
                                            </Menu>
                                            </MenuItem>
                                        </MenuItems>
                                    </Menu>
                                    </MenuItem>
                                    <!-- Add more MenuItems here -->
                                </MenuItems>
                            </Menu>
                        </div>

                        <div class="relative inline-block text-left">
                            <Menu>
                                <MenuButton
                                    class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                    EKHS
                                    <ChevronDownIcon class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                                        aria-hidden="true" />
                                </MenuButton>

                                <MenuItems
                                    class="absolute left-0 z-50 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <MenuItem>
                                    <router-link to="/ekhs/order-masuk"
                                        class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm">
                                        Order Masuk
                                    </router-link>
                                    </MenuItem>

                                    <MenuItem>
                                    <router-link to="/ekhs/daftar-order"
                                        class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm">
                                        Daftar Order
                                    </router-link>
                                    </MenuItem>

                                    <MenuItem>
                                    <Menu as="div">
                                        <MenuButton
                                            class="text-gray-700 hover:bg-gray-100 flex px-4 py-2 text-sm w-full text-left">
                                            Kontrak Rinci
                                            <ChevronRightIcon
                                                class="w-5 h-5 ml-16 -mr-1 text-violet-600 hover:text-violet-100"
                                                aria-hidden="true" />
                                        </MenuButton>

                                        <MenuItems
                                            class="absolute left-full top-0 mt-16 ml-1 w-56 bg-white rounded-md shadow-lg focus:outline-none">
                                            <MenuItem>
                                            <router-link to="/ekhs/daftar-perjanjian-rinci"
                                                class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm">
                                                Daftar Perjanjian Rinci
                                            </router-link>
                                            </MenuItem>

                                            <MenuItem>
                                            <router-link to="/ekhs/amandemen-perjanjian-umum"
                                                class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm">
                                                Amandemen Perjanjian Rinci
                                            </router-link>
                                            </MenuItem>
                                        </MenuItems>
                                    </Menu>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>

                        <router-link to="/tutorial"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tutorial</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
  
<script>
import { Menu, MenuItems, MenuItem, MenuButton } from '@headlessui/vue'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/outline'

export default {
    name: 'MenuDash',
    components: {
        Menu,
        MenuItems,
        MenuItem,
        MenuButton,
        ChevronDownIcon,
        ChevronRightIcon
    },
}
</script>
  