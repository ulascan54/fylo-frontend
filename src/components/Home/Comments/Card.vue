<template>
<CommentImg/>
<div class=" px-5 py-8 rounded bg-b-testimonials mb-10 md:mb-0 md:w-[31%]">
    <Detail :extra="'text-left mb-5'">
            <template #default >
                {{comment}}
            </template>
        </Detail>
    <Avatar :src="url" :size="22" :name="name" :title="title"/>
</div>

</template>

<script setup>
import CommentImg from "./CommentImg.vue";
defineProps({
    name:String,
    title:String,
    comment:String,
    url:String
})
</script>