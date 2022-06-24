<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M12,19H16L14,17H12V19M10,15V13H8V15H10M10,19V17H8V19H10M6,11V9H4V11H6M6,15V13H4V15H6M6,19V17H4V19H6M1.31,1.78L22.31,22.69L21,24L18,21H2V5L0.09,3.09L1.31,1.78M16,11H18V13H16V11M8,5V5.91L5.11,3H12V7H22V19.92L20,17.91V9H12V9.89L9.09,7H10V5H8Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiDomainOff",
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
