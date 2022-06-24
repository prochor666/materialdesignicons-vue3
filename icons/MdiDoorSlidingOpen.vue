<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M6 11V13H4V11H6M22 5H17V19H22V5M7 5H2L2 19H7V5M22 3C23.11 3 24 3.89 24 5V21H0V5C0 3.89 .894 3 2 3H9V19H15V3H22M20 11H18V13H20V11Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiDoorSlidingOpen",
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
