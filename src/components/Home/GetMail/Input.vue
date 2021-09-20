<template>
    <input type="text" class="getmail-input " placeholder="email@example.com" v-model="email">
</template>
<script setup>
defineProps({
    email:String
})
</script>