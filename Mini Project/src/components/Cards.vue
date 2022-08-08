<template>
        <div class="justify-center transition hover:">
            <div class="block rounded-3xl shadow-lg bg-white max-w-sm">
                <div>
                    <img class="object-fill rounded-t-3xl h-42 w-50" src="../assets/images/film/poster-thumbnail.jpg">
                </div>
                <div class="pl-4 pt-6 pb-6">
                    <router-link to="/film" class="text-lg font-semibold transition hover:text-orange-500">Judul Film</router-link>
                    <p class="text-sm font-semibold leading-tight truncate">13+ | SU</p>
                    <p class="text-sm text-gray-600">Rilis : 12 Agustus 2022</p>              
                </div>
                <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <router-link to="/pesan" class="font-semibold transition hover:text-amber-300">Pesan Tiket</router-link>
                </div>
            </div>
        </div> 
</template>

<script>
export default {
//     setup() {
        
//     },
//     data () {
//         return {
//             movies: []
//         }
//     },
//     mounted() {
//     fetch("https://api.themoviedb.org/3/movie/550?api_key=4329ac1016886adec504a7a588488970")
//     .then((response) => response.json())
//     .then(response => movies = response)
//   }
}
</script>