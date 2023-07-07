<template>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden mt-10 mx-20">
        <div class="bg-blue-500 p-3">
            <h3 class="font-sans font-bold text-lg text-white">
                Pajak
                <p class="font-thin italic">(Tax)</p>
            </h3>
        </div>

        <div class="grid grid-cols-2 gap-4 p-2">
            <div class="col-span-2">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nama Pajak*<p class="italic font-thin">
                        (Type of Tax *)</p></label>
                <input type="text" id="name" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2">
                <label for="birthdate" class="block text-gray-700 text-sm font-bold mb-2">Tanggal Awal * <p
                        class="italic font-thin">(Start Date *)</p></label>
                <input type="text" id="birthdate"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2"><label for="birthdate" class="block text-gray-700 text-sm font-bold mb-2">Tanggal Akhir
                    *<p class="italic font-thin">(End Date *)</p></label>
                <input type="text" id="gender" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2">
                <label for="address" class="block text-gray-700 text-sm font-bold mb-2">Tanggal Bukti *<p
                        class="italic font-thin">(Document Date *)</p></label>
                <input type="text" id="address" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2">
                <label for="gender" class="block text-gray-700 text-sm font-bold mb-2">Nomor Bukti *<p
                        class="italic font-thin">(Tax Proof Number *)</p></label>
                <input id="gender" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-1">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Dokumen <p
                        class="italic font-thin">(Document)</p></label>
                <div class="relative">
                    <input type="file" id="formFile"
                        class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
                </div>
            </div>

            <div class="col-span-2 md:col-span-2 mt-7 ">
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-3">Save</button>
                <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
            </div>


    </div>
</div></template>
  