<template>
        <Header />
        <div class="pt-32 pb-20">
            <div class="max-w-[1300px] mx-auto">
                <h1 class="text-white pt-20 text-4xl font-bold ">Blog Posts</h1>
                <div class="border mt-5"></div>
                <div class="w-1/2 flex flex-wrap justify-between mt-2">
                <Link :text="'All'" link="#Features"  class="text-2xl opacity-100 bg-white rounded-xl px-3 text-b-testimonials underline"/>
                <Link :text="'Teclonogies'" link="#Features" class="text-2xl  px-3"/>
                <Link :text="'Historical'" link="#Features"  class="text-2xl  px-3"/>
                <Link :text="'Psycological'" link="#Team"  class="text-2xl  px-3"/>
                <Link :text="'Matmathic'" link="#"  class="text-2xl  px-3"/>
                </div>
            </div>
            <Blog />
        </div>
        <Footer/>
</template>

<script setup>
import Blog from "../components/ui/Blog/index.vue";


</script>