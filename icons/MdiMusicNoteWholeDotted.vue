<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M10 15A2 2 0 1 1 8 17A2 2 0 0 1 10 15M10 13A4 4 0 1 0 14 17A4 4 0 0 0 10 13M16.5 17A1.5 1.5 0 1 1 15 18.5A1.5 1.5 0 0 1 16.5 17Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
