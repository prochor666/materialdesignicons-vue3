<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M5.35,12.65L6.5,9L7.65,12.65M5.5,7L2.3,16H4.2L4.9,14H8.1L8.8,16H10.7L7.5,7M11,20H22V18H11M14,16H19V11H22L16.5,5.5L11,11H14V16Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiAutoUpload",
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
