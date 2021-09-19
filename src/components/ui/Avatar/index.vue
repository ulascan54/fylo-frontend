<template>
<div class="avatar-container">
  <figure class="avatar">
    <img :src="src"  :width="size" :height="size" />
  </figure>
  <div class="avatar-text">
      <span class="text-xs"> {{name}}</span>
      <span class="text-[0.5rem] opacity-70">{{title}}</span>
  </div>
</div>
</template>
<script setup>
defineProps({src: String,size :Number,name:String,title:String})
</script>