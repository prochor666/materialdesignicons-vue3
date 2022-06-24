<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M12,8V4L20,12L12,20V16H4V8H12Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiForward",
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
