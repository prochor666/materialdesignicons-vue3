<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M6,20L10.16,7.91L9.34,6H8V4H10C10.42,4 10.78,4.26 10.93,4.63L16.66,18H18V20H16C15.57,20 15.21,19.73 15.07,19.36L11.33,10.65L8.12,20H6Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
