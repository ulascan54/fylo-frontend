<template>
<router-link class="header-link" :to="`/${link}`">
{{text}}
</router-link>
</template>
<script setup>
defineProps({text:String,link:String})
</script>