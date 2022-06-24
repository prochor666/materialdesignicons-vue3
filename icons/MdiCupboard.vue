<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M17 2H7C5.9 2 5 2.9 5 4V19C5 20.11 5.9 21 7 21V22H9V21H15V22H17V21C18.11 21 19 20.11 19 19V4C19 2.9 18.11 2 17 2M10 18H8V15H10V18M16 18H14V15H16V18M17 12H7V9H17V12M17 7H7V4H17V7Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiCupboard",
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
