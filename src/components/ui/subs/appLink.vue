<template>
<a class="header-link" :href="`${link}`">
{{text}}
</a>
</template>
<script setup>
defineProps({text:String,link:String})
</script>