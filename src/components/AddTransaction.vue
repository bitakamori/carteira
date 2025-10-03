<template>
  <div class="w-100">
    <v-row class="my-2">
      <v-icon icon="library_add" color="green" class="mr-2 mt-1" />
      <h3>Adicionar transação</h3>
    </v-row>
    <v-form ref="formRef" v-model="isFormValid" class="px-sm-4" @submit.prevent>
      <v-text-field
        v-model="amount"
        type="number"
        :rules="[required]"
        label="Valor (R$)"
        placeholder="0,00"
        clearable
        variant="underlined"
      ></v-text-field>
      <v-text-field
        v-model="description"
        type="text"
        :rules="[required]"
        label="Descrição"
        placeholder="Ex: Salário, Aluguel, Compras.."
        clearable
        variant="underlined"
      ></v-text-field>
      <div class="d-flex flex-column flex-md-row justify-space-around mt-3">
        <v-btn
          @click="onSubmit('income')"
          color="success"
          variant="elevated"
          prepend-icon="trending_up"
          :disabled="!isFormValid"
          class="px-4 mb-5 mb-md-0"
        >
          Adicionar Ganho
        </v-btn>
        <v-btn
          @click="onSubmit('expense')"
          color="error"
          variant="elevated"
          prepend-icon="trending_down"
          :disabled="!isFormValid"
          class="px-4"
        >
          Adicionar Despesa
        </v-btn>
      </div>
    </v-form>
  </div>
</template>
<script setup>
import { ref } from "vue";

const description = ref("");
const amount = ref("");
const formRef = ref(null);
const isFormValid = ref(false);

const required = (v) => {
  return !!v || "Preencha o campo acima";
};

const emits = defineEmits(["transactionSubmitted"]);

const onSubmit = (type) => {
  if (!isFormValid.value) return;

  const transactionAmount = parseFloat(amount.value);
  const finalAmount =
    type === "expense"
      ? -Math.abs(transactionAmount)
      : Math.abs(transactionAmount);

  const transactionData = {
    text: description.value,
    amount: finalAmount,
  };

  emits("transactionSubmitted", transactionData);

  formRef.value?.reset();
};
</script>
