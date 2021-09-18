<template>
<p :class="`${position} text-[${size}]`">
    <slot/>
</p>
</template>
<script setup>
defineProps({position:String , size:String})
</script>