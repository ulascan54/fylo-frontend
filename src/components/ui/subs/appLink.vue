<template>
<router-link class="header-link" :href="`${link}`" :to="`${to}`">
{{text}}
</router-link>
</template>
<script setup>
defineProps({text:String,link:String})
</script>