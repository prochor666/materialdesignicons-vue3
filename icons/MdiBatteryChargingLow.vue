<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M12 20H4V6H12M12.67 4H11V2H5V4H3.33C2.6 4 2 4.6 2 5.33V20.67C2 21.4 2.6 22 3.33 22H12.67C13.41 22 14 21.41 14 20.67V5.33C14 4.6 13.4 4 12.67 4M11 16H5V19H11V16M23 10H20V3L15 13H18V21" fill-rule="evenodd" clip-rule="evenodd" /></svg>
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
