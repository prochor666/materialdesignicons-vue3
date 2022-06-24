<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M20,14H4V8H7V10H9V8H15V10H17V8H20M20,19H4V17H20M9,4H15V6H9M20,6H17V4C17,2.89 16.11,2 15,2H9C7.89,2 7,2.89 7,4V6H4C2.89,6 2,6.89 2,8V19C2,20.11 2.89,21 4,21H20C21.11,21 22,20.11 22,19V8C22,6.89 21.11,6 20,6Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
