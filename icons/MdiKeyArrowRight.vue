<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M11.7 6C11.1 4.2 9.4 3 7.5 3C5 3 3 5 3 7.5S5 12 7.5 12C9.5 12 11.1 10.8 11.7 9H15V12H18V9H21V6H11.7M7.5 9C6.7 9 6 8.3 6 7.5S6.7 6 7.5 6 9 6.7 9 7.5 8.3 9 7.5 9M13 21V19H8V17H13V15L16 18L13 21" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiKeyArrowRight",
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
