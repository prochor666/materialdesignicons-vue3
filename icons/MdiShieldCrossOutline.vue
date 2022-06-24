<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="class" :viewBox="viewBox" :width="size" :height="size"><path d="M21,11C21,16.5 17.2,21.7 12,23C6.8,21.7 3,16.5 3,11V5L12,1L21,5V11M12,21C15.8,20 19,15.5 19,11.2V6.3L12,3.2L5,6.3V11.2C5,15.5 8.3,20 12,21M16,9H13V6H11V9H8V11H11V19H13V11H16V9Z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
</template>

<script setup>
defineExpose({
    name: "MdiShieldCrossOutline",
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
