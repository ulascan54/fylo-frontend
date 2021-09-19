<template>
<div class=" flex flex-col text-left md:w-[45%] h-auto justify-center">
    <div>
         <Title class="lg:inline-block sm:inline-block">
            <template #default>
                Stay productive,
            </template>
        </Title>
         <Title class="lg:inline-block sm:inline-block">
            <template #default>
               wherever you are
            </template>
        </Title>
    </div>
        <Detail class="mt-4">
            <template #default >
Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
  storage needs.           
   </template>
        </Detail>
        <Detail class="mt-4 mb-4">
            <template #default >
Securely share files and folders with friends, family and colleagues for live collaboration. No email 
  attachments required.            
  </template>
        </Detail>
        <LinkBlue :text="'See how Fylo works'" :link="''"/>
</div>
  
</template>