<template>
<CommentImg/>
<div class="comment-card">
    <Card url="https://github.com/ulascan54/fylo-frontend/blob/master/src/assets/img/profile-1.jpg?raw=true" name="Satish Patel" title="Founder & CEO, Huddle" comment="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."/>
    <Card url="https://github.com/ulascan54/fylo-frontend/blob/master/src/assets/img/profile-2.jpg?raw=true" name="Iva Boyd" title="Founder & CEO, Huddle" comment="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."/>
    <Card url="https://github.com/ulascan54/fylo-frontend/blob/master/src/assets/img/profile-3.jpg?raw=true" name="Bruce McKenzie" title="Founder & CEO, Huddle" comment="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."/>
</div>
</template>
<script setup>
import Card from "./Card.vue";
import CommentImg from "./CommentImg.vue";
</script>