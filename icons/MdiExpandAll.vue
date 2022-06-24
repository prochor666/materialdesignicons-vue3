<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M18,8H8V18H6V8A2,2 0 0,1 8,6H18V8M14,2H4A2,2 0 0,0 2,4V14H4V4H14V2M22,12V20A2,2 0 0,1 20,22H12A2,2 0 0,1 10,20V12A2,2 0 0,1 12,10H20A2,2 0 0,1 22,12M20,15H17V12H15V15H12V17H15V20H17V17H20V15Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiExpandAll",
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
