<template>
    <h3>Histórico</h3>
    <ul>
        <li v-for="transaction in transactions" :key="transaction.id">
            {{ transaction.text }} <span> ${{ transaction.amount }}</span> 
            <button @click="deleteTransaction(transaction.id)">X</button>
        </li>
    </ul>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
    transactions: {
        type: Array,
        required: true,
    }
});

const emit = defineEmits(['transactionDeleted']);

const deleteTransaction = (id) => {
    emit('transactionDeleted', id);
}

</script>