<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M19 15H17V13H19M20 20V22H16V20H17V18H16V16H19V20M18.92 5A1.5 1.5 0 0 0 17.5 4H6.5A1.5 1.5 0 0 0 5.08 5L3 11V19A1 1 0 0 0 4 20H5A1 1 0 0 0 6 19V18H11A7 7 0 0 1 18 11A6.84 6.84 0 0 1 21 11.68V11M6.5 15A1.5 1.5 0 1 1 8 13.5A1.5 1.5 0 0 1 6.5 15M5 10L6.5 5.5H17.5L19 10Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
