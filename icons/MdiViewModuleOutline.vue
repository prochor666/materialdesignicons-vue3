<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M4 5V18H21V5H4M14 7V10.5H11V7H14M6 7H9V10.5H6V7M6 16V12.5H9V16H6M11 16V12.5H14V16H11M19 16H16V12.5H19V16M16 10.5V7H19V10.5H16Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiViewModuleOutline",
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
