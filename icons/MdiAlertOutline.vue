<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiAlertOutline",
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
