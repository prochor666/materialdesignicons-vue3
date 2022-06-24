<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M10.2 7L6.2 3H21V7H10.2M20 8H11.2L20 16.8V8M20 19.35V19.34L8.66 8H8.66L7.66 7H7.66L2.39 1.73L1.11 3L3 4.89V7H5.11L6.11 8H4V21H19.11L20.84 22.73L22.11 21.46L20 19.35Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
