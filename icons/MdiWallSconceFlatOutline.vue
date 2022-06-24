<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M5 5V11H19V5H5M17 9H7V7H17V9M5.27 13.32L3.5 15.09L4.91 16.5L6.68 14.73L5.27 13.32M18.73 13.32L17.32 14.73L19.09 16.5L20.5 15.09L18.73 13.32M11 16V19H13V16H11Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
