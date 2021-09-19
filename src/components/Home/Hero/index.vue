<template>
    <div class="hero">
        <div class="container">
        <HeroImg/>
        <Title :extra="'text-center'" class="mt-8">
            <template #default>
               All your files in one secure location, accessible anywhere.
            </template>
        </Title>
        <Detail :extra="'text-center'" class="mt-8">
            <template #default >
            Fylo stores all your most important files in one secure location. Access them wherever 
            you need, share and collaborate with friends family, and co-workers.           
             </template>
        </Detail>
        <div class="flex items-center justify-center mt-8">
        <Button :text="'Get Started'" :size="'w-72 h-14'"/> 

        </div>
        </div>
    </div>
</template>
<script setup>
import HeroImg from "./HeroImg.vue";
</script>