<template>
    <MDC :value="md" />
</template>

<script setup>
defineProps({
    md: {
        type: String,
        default: ''
    }
})
</script>