<template>
<div class="h-container">
    <div class="header">
        <div>
            <Logo />
        </div>
        <div class="menu">
            <a href="#" @click="btnHamburger" :class="`hamburger ${hamburger ? 'h-open' : ''} `">
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
        <div :class="[ ' top-[90px] animate__faster animate__animated absolute w-full h-screen inset-0 md:hidden', hamburger ?'visible  animate__fadeIn' : 'animate__fadeOut' , {'invisible' : !hidden}]">
        <HamburgerDropdown/>
        </div>
    </div>
</div>
<!-- ${hamburger ? 'visible  animate__fadeIn' : ' animate__fadeOut invisible'} -->
</template>
<script setup>
import HamburgerDropdown from './HamburgerDropdown.vue';
import { ref } from "@vue/reactivity";

const hamburger=ref(false)
const hidden=ref(false)
const btnHamburger=()=>{
    hamburger.value=!hamburger.value
    if(hidden.value){
        setTimeout(() => {
            hidden.value=!hidden.value
        }, 800);
    }else{
            hidden.value=!hidden.value
    }
}
</script>