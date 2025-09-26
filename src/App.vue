<template>
  <Header />
  <div class="container">
    <Balance />
    <IncomeExpenses />
    <AddTransaction />
  </div>
</template>

<script setup>
import AddTransaction from './components/AddTransaction.vue';
import Balance from './components/Balance.vue';
import Header from './components/Header.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
</script>