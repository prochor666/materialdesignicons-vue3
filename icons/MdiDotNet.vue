<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M2,15A1,1 0 0,1 3,16A1,1 0 0,1 2,17A1,1 0 0,1 1,16A1,1 0 0,1 2,15M21,17H19V9H17V7H23V9H21V17M16,7V9H14V11H16V13H14V15H16V17H12V7H16M11,7V17H9L6,11V17H4V7H6L9,13V7H11Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
