<template>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden mt-10 mx-20">
        <div class="bg-blue-500 p-3">
            <h3 class="font-sans font-bold text-lg text-white">
                Detail Tenaga Ahli
                <p class="font-thin italic">Experts Detail</p>
            </h3>
        </div>

        <div class="grid grid-cols-2 gap-4 p-2">
            <div class="col-span-1">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nama Tenaga Ahli<p
                        class="italic font-thin">(Experts Name)</p></label>
                <input type="text" id="name" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-1">
                <label for="birthdate" class="block text-gray-700 text-sm font-bold mb-2">Posisi Jabatan <p
                        class="italic font-thin">(Position)</p></label>
                <input type="text" id="birthdate"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-1"><label for="birthdate" class="block text-gray-700 text-sm font-bold mb-2">Tanggal Lahir
                    <p class="italic font-thin">(Date of Birth)</p></label>
                <input type="date" id="gender" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-1">
                <label for="address" class="block text-gray-700 text-sm font-bold mb-2">Pengalaman Kerja (Tahun)<p
                        class="italic font-thin">(Work Experience (Year))</p></label>
                <input type="text" id="address" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-1">
                <label for="gender" class="block text-gray-700 text-sm font-bold mb-2">Jenis Kelamin<p
                        class="italic font-thin">(Gender)</p></label>
                <select id="gender" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray">
                    <option value="pria">Pria (Male)</option>
                    <option value="wanita">Wanita (Female)</option>
                </select>
            </div>

            <div class="col-span-1">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Status Kepegawaian<p
                        class="italic font-thin">(Employment Status)</p></label>
                <select key="" id="document" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray">
                    <option value="permanent">Tetap(Permanent)</option>
                    <option value="contract">Kontrak(Sementara)</option>
                </select>
            </div>

            <div class="col-span-1">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Alamat <p class="italic font-thin">
                        (Address)</p></label>
                <textarea id="document"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray"></textarea>
            </div>


            <div class="col-span-1">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Profesi / Keahlian<p
                        class="italic font-thin">(Proffesion / Expertise)</p></label>
                <input type="text" id="document"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

            <div class="col-span-1">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Pendidikan <p
                        class="italic font-thin">(Last Education)</p></label>
                <select id="document" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray">
                    <option value="permanent">Bachelor</option>
                    <option value="contract">Senior High School</option>
                </select>
            </div>


            <div class="col-span-1">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Kewarganegaraan<p
                        class="italic font-thin">(Citizen)</p></label>
                <select type="text" id="document" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray">
                    <option value="permanent">Indonesia</option>
                    <option value="contract">Malaysia</option>
                </select>
            </div>

            <div class="col-span-1">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-2">Dokumen <p
                        class="italic font-thin">(Document)</p></label>
                <div class="relative">
                    <input type="file" id="formFile"
                        class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
                </div>
            </div>

            <div class="col-span-1">
                <label for="document" class="block text-gray-700 text-sm font-bold mb-7 ">NPWP</label>
                <Input type="text" id="document"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray" />
            </div>

        </div>
    </div>

    <!-- Tabel Pengalaman -->

    <div class="bg-white shadow-lg rounded-lg overflow-hidden mt-10 mx-20">
        <div class="bg-blue-500 p-3">
            <h3 class="font-sans font-bold text-lg text-white ml-2">
                Pengalaman
                <span class="font-thin italic text-lg">(Experience)</span>
            </h3>
        </div>

        <div class="grid grid-cols-3 gap-4 p-2">
            <div class="col-span-1">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Tahun<span class="italic font-thin">
                        (Year)</span></label>
                <select type="text" id="name" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray">
                    <option> Pilih Tahun</option>
                    <option> Pilih Tahun</option>
                </select>
            </div>

            <div class="col-span-1 ml-24">
                <label for="birthdate" class="block text-gray-700 text-sm font-bold mb-2">Uraian <span
                        class="italic font-thin">(Description)</span></label>
                <textarea type="text" id="birthdate"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray"></textarea>
            </div>

            <div class="col-span-2 md:col-span-1">
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-24 mt-7">+
                    Add</button>
            </div>

            <table class="mt-1 col-span-3 text-center mb-3 border border-grey">
                <tr>
                    <th class="bg-blue-500 text-white px-4 py-2">Tahun</th>
                    <th class="bg-blue-500 text-white px-4 py-2">Uraian</th>
                    <th class="bg-blue-500 text-white px-4 py-2">Aksi</th>
                </tr>
                <tr>
                    <td>2001</td>
                    <td>1990-01-01</td>
                    <td>
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Edit</button>
                        <button
                            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 mb-3">Hapus</button>
                    </td>
                </tr>
                <tr>
                    <td>2002</td>
                    <td>1985-05-10</td>
                    <td>
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Edit</button>
                        <button
                            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 mb-3">Hapus</button>
                    </td>
                </tr>
            </table>

        </div>
    </div>

    <!-- Tabel Pendidikan -->

    <div class="bg-white shadow-lg rounded-lg overflow-hidden mt-10 mx-20">
        <div class="bg-blue-500 p-3">
            <h3 class="font-sans font-bold text-lg text-white ml-2">
                Pendidikan
                <span class="font-thin italic text-lg">(Education)</span>
            </h3>
        </div>

        <div class="grid grid-cols-3 gap-4 p-2">
            <div class="col-span-1">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Tahun<span class="italic font-thin">
                        (Year)</span></label>
                <select type="text" id="name" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray">
                    <option> Pilih Tahun</option>
                    <option> Pilih Tahun</option>
                </select>
            </div>

            <div class="col-span-1 ml-24">
                <label for="birthdate" class="block text-gray-700 text-sm font-bold mb-2">Uraian <span
                        class="italic font-thin">(Description)</span></label>
                <textarea type="text" id="birthdate"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray"></textarea>
            </div>

            <div class="col-span-2 md:col-span-1">
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-24 mt-7">+
                    Add</button>
            </div>

            <table class="mt-1 col-span-3 text-center border border-grey">
                <tr>
                    <th class="bg-blue-500 text-white px-4 py-2">Tahun</th>
                    <th class="bg-blue-500 text-white px-4 py-2">Uraian</th>
                    <th class="bg-blue-500 text-white px-4 py-2">Aksi</th>
                </tr>
                <tr>
                    <td>2004</td>
                    <td>1990-01-01</td>
                    <td>
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Edit</button>
                        <button
                            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 mb-3">Hapus</button>
                    </td>
                </tr>
                <tr>
                    <td>2005</td>
                    <td>1985-05-10</td>
                    <td>
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Edit</button>
                        <button
                            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 mb-3">Hapus</button>
                    </td>
                </tr>
            </table>

        </div>
    </div>

    <!-- Tabel Sertifikat -->

    <div class="bg-white shadow-lg rounded-lg overflow-hidden mt-10 mx-20">
        <div class="bg-blue-500 p-3">
            <h3 class="font-sans font-bold text-lg text-white ml-2">
                Sertifikat
                <span class="font-thin italic text-lg">(Certificate)</span>
            </h3>
        </div>

        <div class="grid grid-cols-3 gap-4 p-2">
            <div class="col-span-1">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Tahun<span class="italic font-thin">
                        (Year)</span></label>
                <select type="text" id="name" class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray">
                    <option> Pilih Tahun</option>
                    <option> Pilih Tahun</option>
                </select>
            </div>

            <div class="col-span-1 ml-24">
                <label for="birthdate" class="block text-gray-700 text-sm font-bold mb-2">Uraian <span
                        class="italic font-thin">(Description)</span></label>
                <textarea type="text" id="birthdate"
                    class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray"></textarea>
            </div>

            <div class="col-span-2 md:col-span-1">
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-24 mt-7">+
                    Add</button>
            </div>

            <table class="mt-1 col-span-3 text-center border border-grey">
                <tr>
                    <th class="bg-blue-500 text-white px-4 py-2">Tahun</th>
                    <th class="bg-blue-500 text-white px-4 py-2">Uraian</th>
                    <th class="bg-blue-500 text-white px-4 py-2 ">Aksi</th>
                </tr>
                <tr>
                    <td>2004</td>
                    <td>1990-01-01</td>
                    <td>
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Edit</button>
                        <button
                            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 mb-3">Hapus</button>
                    </td>
                </tr>
                <tr>
                    <td>2005</td>
                    <td>1985-05-10</td>
                    <td>
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Edit</button>
                        <button
                            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 mb-3">Hapus</button>
                    </td>
                </tr>
            </table>

        </div>
    </div>

    <!-- Tabel Bahasa -->

    <div class="bg-white shadow-lg rounded-lg overflow-hidden mt-10 mx-20">
        <div class="bg-blue-500 p-3">
            <h3 class="font-sans font-bold text-lg text-white ml-2">
                Bahasa
                <span class="font-thin italic text-lg">(Language)</span>
            </h3>
    </div>

    <div class="grid grid-cols-3 gap-4 p-2">

        <div class="col-span-1 ml-2">
            <label for="birthdate" class="block text-gray-700 text-sm font-bold mb-2">Uraian <span
                    class="italic font-thin">(Description)</span></label>
            <textarea type="text" id="birthdate"
                class="w-full border bg-gray-100 px-3 py-2 rounded-md focus:outline-gray"></textarea>
        </div>

        <div class="col-span-2 md:col-span-1">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-24 mt-7">+
                Add</button>
        </div>

        <table class="mt-1 col-span-3 text-center border border-grey">
            <tr>
                <th class="bg-blue-500 text-white px-4 py-2">Uraian</th>
                <th class="bg-blue-500 text-white px-4 py-2 ">Aksi</th>
            </tr>
            <tr>
                <td>1990-01-01</td>
                <td>
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Edit</button>
                    <button
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 mb-3">Hapus</button>
                </td>
            </tr>
            <tr>
                <td>1985-05-10</td>
                <td>
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Edit</button>
                    <button
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 mb-3">Hapus</button>
                </td>
            </tr>
        </table>

    </div>
</div></template>
  