<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M22,6V4L14,9L6,4V6L14,11L22,6M22,2A2,2 0 0,1 24,4V16A2,2 0 0,1 22,18H6C4.89,18 4,17.1 4,16V4C4,2.89 4.89,2 6,2H22M2,6V20H20V22H2A2,2 0 0,1 0,20V6H2Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiEmailMultiple",
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
