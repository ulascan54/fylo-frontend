<template>
<div class="features-card">
    <div class="container">
        <slot/>
    </div>
<Title :extra="'text-lg'" class="mt-5">
            <template #default>
                {{title}}
            </template>
        </Title>
    <Detail :extra="'text-center text-xs'" class="mt-2">
            <template #default >
            {{detail}}         
          </template>
    </Detail>
</div>
</template>
<script setup>
defineProps({title:String, detail:String})
</script>