<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M15.47 13.79L12.89 12.76L6 15.05L2 13.5V15.61L6 16.95L15.47 13.79M10.57 11.42L8 8H2V11.61L6 12.95L10.57 11.42M6 19.05L2 17.72V22H22L17.03 15.38L6 19.05M17 6V1L12 0L9 2V6L12 8L17 6M18.5 7L16 9V12L18.5 14L23 12V8L18.5 7Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
