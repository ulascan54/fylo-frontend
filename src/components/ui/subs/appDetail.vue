<template>
<p :class="`${extra} `">
    <slot/>
</p>
</template>
<script setup>
defineProps({extra:String })
</script>