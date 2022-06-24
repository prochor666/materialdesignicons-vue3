<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M4,6L8,10V7H16A2,2 0 0,1 18,9A2,2 0 0,1 16,11H8A4,4 0 0,0 4,15A4,4 0 0,0 8,19H16V22L20,18L16,14V17H8A2,2 0 0,1 6,15A2,2 0 0,1 8,13H16A4,4 0 0,0 20,9A4,4 0 0,0 16,5H8V2L4,6Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
