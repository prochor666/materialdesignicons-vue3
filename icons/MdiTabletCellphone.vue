<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M3,4H20A2,2 0 0,1 22,6V8H18V6H5V18H14V20H3A2,2 0 0,1 1,18V6A2,2 0 0,1 3,4M17,10H23A1,1 0 0,1 24,11V21A1,1 0 0,1 23,22H17A1,1 0 0,1 16,21V11A1,1 0 0,1 17,10M18,12V19H22V12H18Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiTabletCellphone",
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
