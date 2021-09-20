<template>
    <div class="footer-container">
    <Logo/>
    <div class="footer">
        <div class="adress ">
            <span class="material-icons mr-3">location_on</span>
                <Detail>
                    <template #default >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua                   
                    </template>
                 </Detail>
        </div>
        <div class="contact  ">
            <div class="items"><span class="material-icons items-icon">phone_in_talk</span>+1-543-123-4567</div>
            <div class="items mt-2 sm:mt-4"><span class="material-icons items-icon">email</span>example@fylo.com</div>
        </div>
        <div class="link-container">
            <Link class="link-first " :text="'About Us'" :link="''" />
            <Link class="link" :text="'Jobs'" :link="''" />
            <Link class="link" :text="'Press'" :link="''" />
            <Link class="link" :text="'Blog'" :link="''" />
        </div>  
        <div class="link-container">
            <Link class="link-first " :text="'Contact Us'" :link="''" />
            <Link class="link" :text="'Terms'" :link="''" />
            <Link class="link" :text="'Privacy'" :link="''" />
        </div>
        <div class="social-icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
        </div>
        
    </div>
    </div>
    <p class="attribution ">
      Challenge by <a href="https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd"  target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/ulascan54" >Ulaş Can Demirbağ</a>.
    </p>
</template>