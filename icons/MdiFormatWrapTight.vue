<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M12,7L17,17H7L12,7M3,3H21V5H3V3M3,7H9V9H3V7M21,7V9H15V7H21M3,11H7V13H3V11M21,11V13H17V11H21M3,15H6V17H3V15M21,15V17H18V15H21M3,19H21V21H3V19Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
