<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M5 20H14V18H5M19 9H15V3H9V9H5L12 16M22 16A1.08 1.08 0 0 1 23 17V21A1.08 1.08 0 0 1 22 22H17A1.08 1.08 0 0 1 16 21V17A1.08 1.08 0 0 1 17 16V14.5A2.5 2.5 0 0 1 22 14.5V16M21 16V14.5A1.5 1.5 0 0 0 18 14.5V16H21" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiDownloadLock",
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
