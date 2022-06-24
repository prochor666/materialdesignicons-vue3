<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M12.4,5H18V15H11L10.6,13H5V20H3V3H12L12.4,5M14,17H22V19H14V17Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiFlagMinus",
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
