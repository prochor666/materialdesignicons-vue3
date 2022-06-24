<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M16,13V11H21V13H16M14.83,7.76L17.66,4.93L19.07,6.34L16.24,9.17L14.83,7.76M11,16H13V21H11V16M11,3H13V8H11V3M4.93,17.66L7.76,14.83L9.17,16.24L6.34,19.07L4.93,17.66M4.93,6.34L6.34,4.93L9.17,7.76L7.76,9.17L4.93,6.34M8,13H3V11H8V13M19.07,17.66L17.66,19.07L14.83,16.24L16.24,14.83L19.07,17.66Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "spinner",
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
