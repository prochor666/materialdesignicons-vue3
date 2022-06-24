<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M15,11L14,13H12.5L13.5,11H12V8H15M11,11L10,13H8.5L9.5,11H8V8H11M11.5,2A8.5,8.5 0 0,0 3,10.5A8.5,8.5 0 0,0 11.5,19H12V22.5C16.86,20.15 20,15 20,10.5C20,5.8 16.19,2 11.5,2Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "spinner",
});

const props = defineProps({
    class: {
        type: String,
        default: ''
    },
    size: {
        type: [Number, String],
        default: 24
    },
    viewBox: {
        type: String,
        default: '0 0 24 24',
    },
});
</script>
