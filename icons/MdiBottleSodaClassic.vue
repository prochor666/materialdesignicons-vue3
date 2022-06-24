<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M15 13.77A3 3 0 0 0 15 18.23V20A2 2 0 0 1 13 22H11A2 2 0 0 1 9 20V18.23A3 3 0 0 0 9 13.77V9A12.28 12.28 0 0 0 10.91 4H10V2H14V4H13.09A12.28 12.28 0 0 0 15 9Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
