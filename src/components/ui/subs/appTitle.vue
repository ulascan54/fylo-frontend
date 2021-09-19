<template>
<h2 :class="` title ${extra}`">
    <slot />
</h2>
</template>
<script setup>
defineProps({extra:String })
</script>