<template>
  <v-layout>
    <v-container class="w-100">
      <div class="w-100 custom-height">
        <v-img cover width="100%" src="/bg.png"></v-img>
      </div>
      <v-bottom-navigation v-model="value" active grow class="d-sm-none">
        <v-btn to="/">Saldo</v-btn>
        <v-btn to="/addTransaction">Adiconar Transação</v-btn>
      </v-bottom-navigation>
      <v-row class="my-5">
        <v-col cols="4" class="d-none d-sm-flex flex-column">
          <Header />
          <v-btn text to="/"> Saldo </v-btn>
          <v-btn to="/addTransaction"> Adiconar Transação </v-btn>
          <v-img width="100%" height="30%" class="mt-2" src="/quote.png">
          </v-img>
          <div class="pa-2">
            <TransactionList
              :transactions="transactions"
              @transactionDeleted="handleTransactionDeleted"
            />
          </div>
        </v-col>
        <v-col class="mx-3 ml-sm-0 ma-md-6">
          <router-view
            :total="+total"
            :income="+income"
            :expenses="+expenses"
            @transactionSubmitted="handleTransactionSubmitted"
          >
          </router-view>
          <div class="mt-5 d-sm-none">
            <TransactionList
              :transactions="transactions"
              @transactionDeleted="handleTransactionDeleted"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script setup>
import Header from "./components/Header.vue";
import TransactionList from "./components/TransactionList.vue";

import { ref, computed, onMounted } from "vue";

const transactions = ref([]);
const value = ref(0);

onMounted(() => {
  const saveTransactions = JSON.parse(localStorage.getItem("transactions"));

  if (saveTransactions) {
    transactions.value = saveTransactions;
  }
});

const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});

const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

const expenses = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateId(),
    text: transactionData.text,
    amount: transactionData.amount,
  });
  saveTransactionsToLocalStorage();
};

const generateId = () => {
  return Math.floor(Math.random() * 1000);
};

const saveTransactionsToLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
};

const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );
  saveTransactionsToLocalStorage();
};
</script>
