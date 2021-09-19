<template>
<div class="h-container z-50 ">
    <div :class="['header animate__faster',{'onscroll  animate__animated animate__fadeInDown':scroll}]">
        <div>
            <Logo />
        </div>
        <div class="menu">
            <a href="javascript:void(0)" @click="btnHamburger" :class="`hamburger ${hamburger ? 'h-open' : ''} `">
                <span class=" mb-[5px]"></span>
                <span class=" mb-[5px]"></span>
                <span></span>
            </a>
            <div  class="link">
                <Link :text="'Features'" link="#Features"/>
                <Link :text="'Team'" link="#Team"/>
                <Link :text="'Sign in'" link="#"/>
            </div>
        </div>
        <div :class="[ ' header-dropdown animate__faster animate__animated', hamburger ?'visible  animate__fadeIn' : 'animate__fadeOut' , {'invisible' : !hidden}]">
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
const scroll=ref(true)
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
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    scroll.value=true
  } else {
      scroll.value=false
  }
}
</script>