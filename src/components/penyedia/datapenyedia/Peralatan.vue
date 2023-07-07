<template>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden mt-10 mx-20">
        <div class="bg-blue-500 p-3">
            <h3 class="font-sans font-bold text-lg text-white">
                Peralatan
                <p class="font-thin italic">Equipment</p>
            </h3>
        </div>

        <div class="grid grid-cols-2 gap-4 p-2">
            <div class="col-span-2">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nama Alat *<p class="italic font-thin">
                        (Name of The Equipment *)</p></label>
                <input type="text" id="name" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2">
                <label for="birthdate" class="block text-gray-700 text-sm font-bold mb-2">Nomor Serial * <p
                        class="italic font-thin">(Serial Number *)</p></label>
                <input type="text" id="birthdate"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2"><label for="birthdate" class="block text-gray-700 text-sm font-bold mb-2">Jumlah *<p
                        class="italic font-thin">(Amount *)</p></label>
                <input type="text" id="gender" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2">
                <label for="address" class="block text-gray-700 text-sm font-bold mb-2">Kapasitas *<p
                        class="italic font-thin">(Capacity *)</p></label>
                <input type="text" id="address" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2">
                <label for="gender" class="block text-gray-700 text-sm font-bold mb-2">Merk/Tipe *<p
                        class="italic font-thin">(Mer/Type *)</p></label>
                <input id="gender" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Tahun Pembuatan *<p
                        class="italic font-thin">(Production *)</p></label>
                <input key="" id="document" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Lokasi Sekarang *<p
                        class="italic font-thin">(Current Location *)</p></label>
                <input key="" id="document" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Lokasi Sekarang *<p
                        class="italic font-thin">(Current Location *)</p></label>
                <select key="" id="document" class="w-full border bg-gray-100 px-3 py-3 rounded-md focus:outline-gray">
                    <option>Milik Sendiri (Own Property)</option>
                    <option>Pinjaman (Loan Property)</option>
                </select>
            </div>

            <div class="col-span-2">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Lokasi Sekarang *<p
                        class="italic font-thin">(Current Location *)</p></label>
                <input key="" id="document" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>


            <div class="col-span-1">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">File Dokumen Kontrak <p
                        class="italic font-thin">(Attachment of Contract)</p></label>
                <div class="relative">
                    <input type="file" id="formFile"
                        class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
                </div>
            </div>

        <div class="col-span-2 md:col-span-2 mt-7 ">
            <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-3">Save</button>
            <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Back</button>
        </div>

    </div>
</div></template>
  