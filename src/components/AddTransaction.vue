<template>
  <div>
    <h3>Adicionar uma nova transação</h3>
    <form if="form" @submit.prevent="onSubmit">
      <div>
        <label for="text"> Descrição</label>
        <input type="text" v-model="text" placeholder="Descrição" />
      </div>
      <div>
        <label for="amount">Valor</label>
        <input
          type="number"
          v-model="amount"
          placeholder="Adicione o valor (para valores negativo adicione - na frente do numero)"
        />
      </div>
      <button>Adicionar transação</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";

const text = ref("");
const amount = ref("");

const emits = defineEmits(["transactionSubmitted"]);

const onSubmit = () => {
  if (!text.value || !amount.value) {
    return;
  }

  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  };
  emits("transactionSubmitted", transactionData);
  text.value = "";
  amount.value = "";
};
</script>
