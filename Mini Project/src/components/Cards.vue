<template v-for="">    
    <div class="flex justify-center transition hover:">
        <div class="block rounded-lg shadow-lg bg-white max-w-sm">
            <div class="bg-indigo-300">
                <img class="object-contain h-48 w-56">
            </div>
            <div class="pl-4 pt-6 pb-6">
                <router-link to="/film" class="text-lg font-semibold transition hover:text-orange-500">Judul Film</router-link>
                <p class="text-sm">13+ | SU</p>
                <p class="text-sm">Rilis : 12 Agustus 2022</p>
            </div>
            <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                <router-link to="/pesan" class="font-semibold transition hover:text-amber-300">Pesan Tiket</router-link>
            </div>
        </div>
    </div>
</template>