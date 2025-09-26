<template>
    <h4>Sua carteira</h4>
    <h1>${{total}}</h1>
</template>
<script setup>
import { defineProps } from 'vue'; 

defineProps({
    total: {
        type: Number,
        required: true,
    }
})
</script>