<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M12,7H15C15.66,7.64 16,8.31 16,9V22H8V15C8,14.72 8.11,14.39 8.3,14L12,7M16,4L15,6H12V5L10,7H9L10,5V4H9V2H14.5A1.5,1.5 0 0,1 16,3.5V4Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiSprayBottle",
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
