<template>
<div class="getmail-container ">
    <div class="getmail-center ">
        <div class="getmail">
        <Title :extra="'text-xl sm:text-3xl'">
            <template #default>
                Get early access today
            </template>
        </Title> 
        <Detail :extra="'text-center lg:px-20 mt-5'">
            <template #default >
                It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                questions, our support team would be happy to help you.
            </template>
        </Detail>
        <div class="getmail-form">
            <Input/>
           <Button :text="'Get Started For Free'" :size="' w-full sm:w-2/6  h-10 md:h-12 mt-5 sm:mt-0 md:mt-0 '"/>
        </div>
        </div>
    </div>
    <div class="getmail-bg-top"></div>
    <div class="getmail-bg-bottom"></div>
</div>
</template>
<script setup>
import Input from "./Input.vue";
</script>