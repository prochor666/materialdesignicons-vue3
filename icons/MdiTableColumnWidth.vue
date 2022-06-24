<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M5,8H19A2,2 0 0,1 21,10V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V10A2,2 0 0,1 5,8M5,12V15H11V12H5M13,12V15H19V12H13M5,17V20H11V17H5M13,17V20H19V17H13M11,2H21V6H19V4H13V6H11V2Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiTableColumnWidth",
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
