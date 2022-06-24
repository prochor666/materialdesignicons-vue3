<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M19,7H11V13H19V7M17,11H13V9H17V11M21,3H3A2,2 0 0,0 1,5V19C1,20.11 1.9,21 3,21H21A2,2 0 0,0 23,19V5C23,3.91 22.1,3 21,3M21,19H3V5H21V19Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
