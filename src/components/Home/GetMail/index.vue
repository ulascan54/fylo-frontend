<template>
<div class="getmail-container ">
    <div class="getmail-center ">
        <div class="getmail">
        <Title :extra="'text-xl sm:text-3xl'">
            <template #default>
                Get early access today
            </template>
        </Title> 
        <Detail :extra="'text-center lg:px-20 mt-5'">
            <template #default >
                It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                questions, our support team would be happy to help you.
            </template>
        </Detail>
            <!-- <Input v-model="state.email"/> -->
        <Form @submit="onSubmit" :validation-schema="schema" class="getmail-form"  v-slot="{ errors }" >
            <Field as="input" name="email" type="text" placeholder="email@example.com"  :class="['getmail-input  ',{ 'is-invalid animate__animated  animate__shakeX animate__faster': errors.email}]"/>
            <ErrorMessage class="invalid-feedback animate__animated  animate__shakeX animate__faster" name="email" />
           <Button :text="'Get Started For Free'" :size="' w-full sm:w-2/6  h-10 md:h-12 mt-5 sm:mt-0 md:mt-0 '" />
        </Form>
        </div>
    </div>
    <div class="getmail-bg-top"></div>
    <div class="getmail-bg-bottom"></div>
</div>
</template>
<script setup>
import Input from "./Input.vue";
import {Form,Field,ErrorMessage} from 'vee-validate';
import * as Yup from "yup";

const schema=Yup.object().shape({
    email:Yup.string().email('Please enter a valid email address.').required('This field required.Please enter your email address.')
})
const onSubmit = (values)=> {
    
}
</script>