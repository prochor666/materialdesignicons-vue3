<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M12,12L19.07,19.07C15.17,23 8.83,23 4.93,19.07C1,15.17 1,8.84 4.93,4.93C8.83,1 15.16,1 19.07,4.93L12,12M19,10A2,2 0 0,0 17,12A2,2 0 0,0 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiPacMan",
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
