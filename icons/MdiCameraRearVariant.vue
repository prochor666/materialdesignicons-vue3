<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M6,0H18A2,2 0 0,1 20,2V22A2,2 0 0,1 18,24H6A2,2 0 0,1 4,22V2A2,2 0 0,1 6,0M12,2A2,2 0 0,0 10,4A2,2 0 0,0 12,6A2,2 0 0,0 14,4A2,2 0 0,0 12,2M13,18H9V20H13V22L16,19L13,16V18Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
