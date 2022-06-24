<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M3 13.5C3 9.36 6.36 6 10.5 6H13V2L20 8L13 14V10H10.5C8.57 10 7 11.57 7 13.5S8.57 17 10.5 17H18V21H10.5C6.36 21 3 17.64 3 13.5Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiArrowURightTopBold",
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
