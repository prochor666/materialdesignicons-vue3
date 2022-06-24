<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M12 2C12.4 2 12.8 2.2 12.9 2.6L17.5 15H13V19C13 20.7 11.7 22 10 22S7 20.7 7 19V18H9V19C9 19.6 9.4 20 10 20C10.6 20 11 19.6 11 19V15H6.5L11.1 2.6C11.2 2.2 11.6 2 12 2M12 5.9L9.4 13H14.7L12 5.9Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiUmbrellaClosedOutline",
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
