<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M21 10.5V18H17V10.5C17 8.57 15.43 7 13.5 7S10 8.57 10 10.5V13H14L8 20L2 13H6V10.5C6 6.36 9.36 3 13.5 3S21 6.36 21 10.5Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiArrowUDownLeftBold",
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
