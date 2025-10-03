<template>
  <div>
    <v-row>
      <v-icon icon="credit_card" size="25" class="pt-1 mr-2" />
      <h3>Saldo</h3>
    </v-row>
    <p
      class="suse-mono-font mt-2"
      :class="total > 0 ? 'text-green-darken-4' : 'text-deep-orange-darken-4'"
    >
      R${{ total }}
    </p>
    <IncomeExpenses :income="+income" :expenses="+expenses" />
  </div>
</template>
<script setup>
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
