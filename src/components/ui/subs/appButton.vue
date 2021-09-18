<template>
    <button :class="`btn-blue ${size}`">{{ text }}</button>
</template>
<script setup>
    defineProps({text:String,size:String})
</script>
<style>

</style>