<template>
<router-link class="link-blue group" :to="`/${link}`">
<div class="group-hover:border-white">
{{text}}
<span class="material-icons group-hover:border-white ">
chevron_right
</span>
</div>
</router-link>
</template>
<script setup>
defineProps({text:String,link:String})
</script>