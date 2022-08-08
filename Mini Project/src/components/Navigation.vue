<template>
    <header class="bg-white">
    <div
        class="flex items-center h-16 max-w-screen-xl gap-8 px-4 my-4 mx-auto sm:px-6 lg:px-8"
    >
        <a class="block text-teal-600 text-justify" href="/">
        <p class="font-extrabold text-2xl tracking-wide">CINEMAD</p>
        </a>

        <div class="flex items-center justify-end flex-1 md:justify-between">
            <nav class="hidden md:block" aria-labelledby="header-navigation">
                <h2 class="sr-only" id="header-navigation">Header navigation</h2>

                <ul class="flex items-center gap-6 text-sm">
                    <li>
                        <router-link to="/" class="text-gray-500 font-bold border-b-4 border-transparent transition hover:text-gray-500/75 hover:border-current">Sedang main</router-link>
                    </li>

                    <li>
                        <router-link to="/" class="text-gray-500 font-bold border-b-4 border-transparent transition hover:text-gray-500/75 hover:border-current">Akan tayang</router-link>
                    </li>

                    <li>
                        <router-link to="/" class="text-gray-500 font-bold border-b-4 border-transparent transition hover:text-gray-500/75 hover:border-current">Promo dan Event</router-link>
                    </li>

                    <li>
                        <router-link to="/" class="text-gray-500 font-bold border-b-4 border-transparent transition hover:text-gray-500/75 hover:border-current">Tentang Kami</router-link>
                    </li>
                </ul>
            </nav>

            <div class="flex items-center gap-4">
                <div class="sm:gap-4 sm:flex">
                <a
                    class="block hidden md:block px-5 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition rounded-md"
                    href="/"
                >
                    Register / Sign In
                </a>

                </div>

                <button
                @click="isOpen = !isOpen"
                class="block p-2.5 text-gray-600 transition bg-gray-100 rounded md:hidden hover:text-gray-600/75"
                >
                <span class="sr-only">Toggle menu</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                </button>
            </div>

            <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4">
                <a class="block px-2 py-1 font-semibold hover:bg-gray-800" href="#"></a>

            </div>
        </div>
    </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isOpen : false
        }        
    }
}
</script>