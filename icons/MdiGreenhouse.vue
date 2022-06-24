<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M12 3L4 9V21H20V9L12 3M10 10H14V19H10V10M16 10H18V13H16V10M15.33 8H8.67L12 5.5L15.33 8M8 10V13H6V10H8M6 15H8V19H6V15M16 19V15H18V19H16Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiGreenhouse",
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
