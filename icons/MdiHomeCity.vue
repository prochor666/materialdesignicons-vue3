<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M0,21V10L7.5,5L15,10V21H10V14H5V21H0M24,2V21H17V8.93L16,8.27V6H14V6.93L10,4.27V2H24M21,14H19V16H21V14M21,10H19V12H21V10M21,6H19V8H21V6Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
