<template>
<div class="features ">

<div class="container">

<Card title="Access your files, anywhere" detail="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.">
    <template #default>
    <DesktopIcon/>
    </template>
</Card>
<Card title="Security you can trust" detail="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.">
    <template #default>
    <PeopleIcon/>
    </template>
</Card>
<Card title="Real-time collaboration" detail="Securely share files and folders with friends, family and colleagues for live collaboration.No email attachments required.">
    <template #default>
    <FileIcon/>
    </template>
</Card>
<Card title="Store any type of file" detail="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.">
    <template #default>
    <SecurityIcon/>
    </template>
</Card>
</div>
</div>
</template>
<script setup>
import DesktopIcon from "./DesktopIcon.vue";
import PeopleIcon from "./PeopleIcon.vue";
import FileIcon from "./FileIcon.vue";
import SecurityIcon from "./SecurityIcon.vue";
import Card from "./Card.vue";
</script>