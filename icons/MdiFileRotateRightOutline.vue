<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M20 11H23L19 15L15 11H18C18 7.69 15.31 5 12 5L11 5.08V3.06L12 3C16.42 3 20 6.58 20 11M9 7H5C3.9 7 3 7.9 3 9V18C3 19.11 3.9 20 5 20H11C12.11 20 13 19.11 13 18V11L9 7M11 18H5V9H8V12H11V18Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiFileRotateRightOutline",
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
