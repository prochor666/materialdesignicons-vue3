<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M21,7V3H17V4H7V3H3V7H4V17H3V21H7V20H17V21H21V17H20V7H21M18,4H20V6H18V4M4,4H6V6H4V4M6,20H4V18H6V20M20,20H18V18H20V20M18,17H17V18H7V17H6V7H7V6H17V7H18V17M16,8V10H13V16H11V10H8V8H16Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiFormatTextbox",
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
