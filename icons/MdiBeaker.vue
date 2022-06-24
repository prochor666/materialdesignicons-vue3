<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M3,3V5A2,2 0 0,1 5,7V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V7A2,2 0 0,1 21,5V3H3M7,9H10V10H7V9M7,11H10V12H7V11M10,16H7V15H10V16M12,14H7V13H12V14M12,8H7V7H12V8Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiBeaker",
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
