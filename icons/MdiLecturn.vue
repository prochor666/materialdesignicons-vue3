<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M17 21V22H7V21H9V11H15V21H17M17.5 6C17.5 4.39 16.41 3.05 14.93 2.64C14.78 2.27 14.43 2 14 2C13.45 2 13 2.45 13 3C13 3.55 13.45 4 14 4C14.31 4 14.58 3.85 14.76 3.63C15.77 3.95 16.5 4.89 16.5 6H4L5 10H19L20 6H17.5Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiLecturn",
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
