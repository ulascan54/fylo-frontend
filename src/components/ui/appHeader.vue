<template>
    <div class="header">
        <div>
            <Logo />
        </div>
        <div>
            <a href="#" @click="btnHamburger" :class="`hamburger ${hamburger ? 'h-open' : ''}`">
                <span class=" mb-[5px]"></span>
                <span class=" mb-[5px]"></span>
                <span></span>
            </a>
            <div  class="link">
                <Link :text="'Features'" />
                <Link :text="'Team'"/>
                <Link :text="'Sign in'"/>
            </div>
        </div>
    </div>

</template>
<script setup>import { ref } from "@vue/reactivity";

const hamburger=ref(false)
const btnHamburger=()=>{
    hamburger.value=!hamburger.value
}
</script>