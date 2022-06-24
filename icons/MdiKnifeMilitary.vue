<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M22,2L17.39,3.75L10.46,10.68L14,14.22L20.92,7.29C22.43,5.78 22,2 22,2M8.33,10L6.92,11.39L8.33,12.8L2.68,18.46L6.21,22L11.87,16.34L13.28,17.76L14.7,16.34L8.33,10Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
