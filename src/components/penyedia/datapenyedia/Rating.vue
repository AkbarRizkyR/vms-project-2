<template>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden mt-10">
        <div class="bg-blue-500 p-3">
            <h3 class="font-sans font-bold text-lg text-white">
                Rating Keuangan
                <p class="font-thin italic">(Financial Rating)</p>
            </h3>
        </div>

        <div class="grid grid-cols-2 gap-4 p-2">
            <div class="col-span-2">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Lembaga yang Mengeluarkan*<p
                        class="italic font-thin">(Publishing Institution *)</p></label>
                <input type="text" id="name" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2">
                <label for="birthdate" class="block text-gray-700 text-sm font-bold mb-2">Kriteria Rating Keuangan * <p
                        class="italic font-thin">(Criteria Financial Rating *)</p></label>
                <input type="text" id="birthdate"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2"><label for="birthdate" class="block text-gray-700 text-sm font-bold mb-2">Negara *<p
                        class="italic font-thin">(Country *)</p></label>
                <input type="text" id="gender" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2">
                <label for="address" class="block text-gray-700 text-sm font-bold mb-2">Masa Berlaku *<p
                        class="italic font-thin">(Validity Period *)</p></label>
                <input type="text" id="address" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-1">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Dokumen <p
                        class="italic font-thin">(Document)</p></label>
                <div class="relative">
                    <input type="file" id="formFile"
                        class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
                    <a href="#" class="underline text-blue-700 ">38qnfq09gq-DOKpawijj.pdf</a>
                </div>
            </div>

            <div class="col-span-2 md:col-span-2 mt-7 ">
                <button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mr-3">Save</button>
            </div>



    </div>
</div></template>
  