<template>
    <header class="bg-white">
    <div
        class="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8"
    >
        <a class="block text-teal-600 text-justify" href="/">
        <p class="font-extrabold text-2xl tracking-wide">CINEMAD</p>
        </a>

        <div class="flex items-center justify-end flex-1 md:justify-between">
        <nav class="hidden md:block" aria-labelledby="header-navigation">
            <h2 class="sr-only" id="header-navigation">Header navigation</h2>

            <ul class="flex items-center gap-6 text-sm">
                <li>
                    <router-link to="/" class="text-gray-500 font-bold transition hover:text-gray-500/75">Sedang main</router-link>
                </li>

                <li>
                    <a class="text-gray-500 font-bold transition hover:text-gray-500/75" href="/">
                    Akan tayang
                    </a>
                </li>

                <li>
                    <a class="text-gray-500 font-bold transition hover:text-gray-500/75" href="/">
                    Promo & Event
                    </a>
                </li>

                <li>
                    <a class="text-gray-500 font-bold transition hover:text-gray-500/75" href="/">
                    Tentang kami
                    </a>
                </li>
            </ul>
        </nav>

        <div class="flex items-center gap-4">
            <div class="sm:gap-4 sm:flex">
            <a
                class="block px-5 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition rounded-md"
                href="/"
            >
                Register / Sign In
            </a>

            </div>

            <button
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
        </div>
    </div>
    </header>
</template>