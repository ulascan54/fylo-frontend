<template>
        <div class="bg-black w-[300px] overflow-hidden rounded-lg hover:scale-105 hover:rotate-1 transition-all cursor-pointer group relative">
            <div class="absolute w-full h-full bg-white z-40 p-2 bg-opacity-10 hidden group-hover:flex  justify-end">
                <div class="h-10 w-10  bg-black  hover:bg-g-call-cyan rounded-full mr-5 flex items-center justify-center transition-all hover:rotate-12 ">
                    <span class="material-icons text-base">
                    border_color
                    </span>
                </div>
                <div class="h-10 w-10 bg-black  hover:bg-g-call-cyan rounded-full flex items-center justify-center transition-all hover:rotate-12 ">
                    <span class="material-icons">
                    delete_forever
                    </span>
                </div>
            </div>
            <img src="../../../assets/img/stock-4.jpg" alt="">
            <div class="bg-b-testimonials p-5 ">
                <h3 class="text-lg font-bold py-2 group-hover:text-g-call-cyan transition-all">Title</h3>
                <p class="pb-5  group-hover:text-g-call-cyan">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit, alias non ipsam consequatur quae est? Ratione accusantium enim nobis ullam. Voluptate doloremque aut delectus enim sint laborum quas ea.
                </p>
                 <Avatar  src="https://github.com/ulascan54/fylo-frontend/blob/master/src/assets/img/profile-3.jpg?raw=true" name="Bruce McKenzie" title="Founder & CEO, Huddle" :size="22" />
            </div>
        </div>
</template>
