<template>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden mt-10 mx-20">
        <div class="bg-blue-500 p-3">
            <h3 class="font-sans font-bold text-lg text-white">
                Pengalaman
                <p class="font-thin italic">Experiences</p>
            </h3>
        </div>

        <div class="grid grid-cols-2 gap-4 p-2">
            <div class="col-span-2">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nama Kontrak*<p
                        class="italic font-thin">(Contract Name *)</p></label>
                <input type="text" id="name" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2">
                <label for="birthdate" class="block text-gray-700 text-sm font-bold mb-2">Lokasi * <p
                        class="italic font-thin">(Location *)</p></label>
                <input type="text" id="birthdate"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2"><label for="birthdate" class="block text-gray-700 text-sm font-bold mb-2">Instansi *<p
                        class="italic font-thin">(Client *)</p></label>
                <input type="date" id="gender" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2">
                <label for="address" class="block text-gray-700 text-sm font-bold mb-2">Alamat *<p class="italic font-thin">
                        (Address *)</p></label>
                <input type="text" id="address" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-2">
                <label for="gender" class="block text-gray-700 text-sm font-bold mb-2">Telepon *<p class="italic font-thin">
                        (Phone Number *)</p></label>
                <select id="gender" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray">
                    <option value="pria">Pria (Male)</option>
                    <option value="wanita">Wanita (Female)</option>
                </select>
            </div>

            <div class="col-span-2">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-7">Konsorsoium JO / JV</label>
                <select key="" id="document" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray">
                    <option value="permanent">Ya (Yes)</option>
                    <option value="contract">No (Tidak)</option>
                </select>
            </div>

            <div class="col-span-2">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Nilai Komposisi <p
                        class="italic font-thin">(Composition Value)</p></label>
                <input id="document" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-1">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Nomor Kontrak<p
                        class="italic font-thin">(Contract Number)</p></label>
                <input type="text" id="document"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-1">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Nilai Kontrak <p
                        class="italic font-thin">(Contract Value)</p></label>
                <select id="document" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray">
                    <option value="permanent">Bachelor</option>
                    <option value="contract">Senior High School</option>
                </select>
            </div>


            <div class="col-span-1">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Tanggal Kontrak<p
                        class="italic font-thin">(Contract Date)</p></label>
                <input type="date" id="document"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-1">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Persentase Pelaksanaan <p
                        class="italic font-thin">(Percentage Of Implementation)</p></label>
                <input type="text" id="formFile"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />

            </div>

            <div class="col-span-1">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Selesai Kontrak<p
                        class="italic font-thin">(Contract Cmpletion End)</p></label>
                <input type="date" id="document"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-1">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Tanggal Serah Terima Pelaksanaan<p
                        class="italic font-thin">(Date of Handover)</p></label>
                <input type="date" id="document"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>


            <div class="col-span-2">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Keterangan <p
                        class="italic font-thin">(Description)</p></label>
                <textarea id="document"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray"></textarea>
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
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-3">Save</button>
            <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Back</button>
        </div>


    </div>
</div>
</template>
  