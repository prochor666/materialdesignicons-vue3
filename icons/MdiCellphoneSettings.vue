<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M16,16H8V4H16M16,0H8A2,2 0 0,0 6,2V18A2,2 0 0,0 8,20H16A2,2 0 0,0 18,18V2A2,2 0 0,0 16,0M15,24H17V22H15M11,24H13V22H11M7,24H9V22H7V24Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiCellphoneSettings",
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
