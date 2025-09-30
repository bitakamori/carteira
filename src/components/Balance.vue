<template>
  <div>
    <h4>Saldo</h4>
    <p>${{ total }}</p>
    <IncomeExpenses :income="+income" :expenses="+expenses" />
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import IncomeExpenses from "./IncomeExpenses.vue";

defineProps({
  total: {
    type: Number,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
});

defineEmits([]);
</script>
