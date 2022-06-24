<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M3.27 2L22 20.72L20.72 22L19.73 21H2V19H17.73L15.44 16.71C15 16.89 14.5 17 14 17H8C5.79 17 4 15.21 4 13V5.27L2 3.27L3.27 2M22 5V8C22 9.1 21.1 10 20 10H18V13C18 13.36 17.94 13.7 17.85 14.04L6.81 3H20C21.1 3 22 3.89 22 5M20 5H18V8H20V5Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiCoffeeOff",
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
