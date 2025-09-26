<template>
    <div>
        <div>
            <h4>Entrada</h4>
            <p>$+{{ income }}</p>
        </div>
        <div>
            <h4>Saida</h4>
            <p>$-{{ expenses }}</p>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';  

defineProps({
    income: {
        type: Number,
        required: true,
    },
    expenses: {
        type: Number,
        required: true,
    }
})
</script>