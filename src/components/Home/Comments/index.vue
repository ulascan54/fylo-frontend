<template>
<CommentImg/>
<div class="flex flex-col md:flex-row  px-10 lg:px-32 justify-around py-20 z-10">

    <Card url="../../../../src/assets/img/profile-1.jpg" name="Satish Patel" title="Founder & CEO, Huddle" comment="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."/>
    <Card url="../../../../src/assets/img/profile-2.jpg" name="Iva Boyd" title="Founder & CEO, Huddle" comment="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."/>
    <Card url="../../../../src/assets/img/profile-3.jpg" name="Bruce McKenzie" title="Founder & CEO, Huddle" comment="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."/>
</div>
</template>
<script setup>
import Card from "./Card.vue";
import CommentImg from "./CommentImg.vue";

</script>