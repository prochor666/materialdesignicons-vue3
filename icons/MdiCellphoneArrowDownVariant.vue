<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M18 14L23 9L21.6 7.6L19 10.2V3H17V10.2L14.4 7.6L13 9L18 14M19 16V21C19 22.1 18.1 23 17 23H7C5.9 23 5 22.1 5 21V3C5 1.9 5.9 1 7 1H14V5H7V19H17V16H19Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiCellphoneArrowDownVariant",
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
