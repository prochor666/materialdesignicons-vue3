<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M19 4V19C19 20.11 18.11 21 17 21V22H15V21H12.5V2H17C18.11 2 19 2.9 19 4M7 2H11.5V21H9V22H7V21C5.9 21 5 20.11 5 19V4C5 2.9 5.9 2 7 2M10 10H7V14H10V10Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
