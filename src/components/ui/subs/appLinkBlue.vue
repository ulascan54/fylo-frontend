<template>
<router-link class="link-blue" :to="`/${link}`">
<div>
{{text}}
<span class="material-icons ">
chevron_right
</span>
</div>
</router-link>
</template>
<script setup>
defineProps({text:String,link:String})
</script>