<template>
    <div class="bg-b-footer px-10  md:px-40 pb-5 pt-32 sm:py-20">
    <Logo/>
    <div class="flex flex-wrap  justify-between py-10">
        <div class="flex justify-between lg:w-4/12 md:w-6/12 w-full ">
            <span class="material-icons mr-3">location_on</span>
                <Detail>
                    <template #default >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua                   
                    </template>
                 </Detail>
        </div>
        <div class=" md:w-5/12 lg:w-auto w-full mt-3 md:mt-0 ">
            <div class="flex items-center"><span class="material-icons text-md mr-5">phone_in_talk</span>+1-543-123-4567</div>
            <div class="flex items-center mt-2 sm:mt-4"><span class="material-icons text-md mr-5">email</span>example@fylo.com</div>
        </div>
        <div class="flex flex-col  w-full  md:w-3/12 mt-10 lg:mt-0 lg:w-auto">
            <Link class="text-sm " :text="'About Us'" :link="''" />
            <Link class="text-sm mt-3" :text="'Jobs'" :link="''" />
            <Link class="text-sm mt-3" :text="'Press'" :link="''" />
            <Link class="text-sm mt-3" :text="'Blog'" :link="''" />
        </div>  
        <div class="flex flex-col  w-full md:w-3/12 lg:w-auto mt-10 lg:mt-0">
            <Link class="text-sm " :text="'Contact Us'" :link="''" />
            <Link class="text-sm mt-3" :text="'Terms'" :link="''" />
            <Link class="text-sm mt-3" :text="'Privacy'" :link="''" />
        </div>
        <div class="flex lg:mt-0 justify-center sm:justify-start  w-full md:w-auto mt-10">
            <i class="mr-4 text-base hover:border-g-call-cyan hover:text-g-call-cyan cursor-pointer transition-all rounded-full border h-8 w-8 flex items-center justify-center fab fa-facebook-f"></i>
            <i class="mr-4 text-base hover:border-g-call-cyan hover:text-g-call-cyan cursor-pointer transition-all rounded-full border h-8 w-8 flex items-center justify-center fab fa-twitter"></i>
            <i class="mr-4 text-base hover:border-g-call-cyan hover:text-g-call-cyan cursor-pointer transition-all rounded-full border h-8 w-8 flex items-center justify-center fab fa-instagram"></i>
        </div>
        
    </div>
    </div>
    <p class="attribution bg-b-footer text-center p-2 text-xs">
      Challenge by <a href="https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd" class="hover:underline font-bold hover:text-g-call-cyan" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#" class="hover:underline font-bold hover:text-g-call-cyan">Ulaş Can Demirbağ</a>.
    </p>
</template>