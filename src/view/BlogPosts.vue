<template>
        <Header />
        <div class="pt-32 pb-20">
            <div class="max-w-[1300px] mx-auto">
                <h1 class="text-white pt-20 text-4xl font-bold ">Blog Posts</h1>
                <div class="border mt-5"></div>
                <div class="w-1/2 flex flex-wrap justify-between">
                <Link :text="'All'" link="#Features"/>
                <Link :text="'Teclonogies'" link="#Features"/>
                <Link :text="'Historical'" link="#Features"/>
                <Link :text="'Psycological'" link="#Team"/>
                <Link :text="'Matmathic'" link="#"/>
                </div>
            </div>
            <Blog />
        </div>
        <Footer/>
</template>

<script setup>
import Blog from "../components/ui/Blog/index.vue";


</script>