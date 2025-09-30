<template>
  <v-row class="my-2">
    <v-icon icon="history" color="green" class="mr-2 mt-1" />
    <h3>Histórico</h3>
  </v-row>
  <v-list lines="two">
    <v-list-item
      v-for="transaction in transactions"
      :key="transaction.id"
      :title="transaction.text"
      :subtitle="'$' + transaction.amount"
      class="mb-4"
      slim
    >
      <template v-slot:prepend>
        <v-icon
          :icon="transaction.amount > 0 ? 'trending_up' : 'trending_down'"
          size="20"
          :color="
            transaction.amount > 0 ? 'green-darken-4' : 'deep-orange-darken-4'
          "
          class="rounded-circle pa-4"
          :class="
            transaction.amount > 0
              ? 'bg-green-lighten-4'
              : 'bg-deep-orange-lighten-4'
          "
        />
      </template>
      <template v-slot:append>
        <v-menu location="bottom end" scroll-strategy="close">
          <template v-slot:activator="{ props }">
            <button v-bind="props">
              <v-icon icon="more_vert" size="15" />
            </button>
          </template>
          <v-list class="py-0" slim>
            <v-list-item @click="deleteTransaction(transaction.id)">
              <v-list-item-title>Deletar item</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-list-item>
  </v-list>
</template>
<script setup>
defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["transactionDeleted"]);

const deleteTransaction = (id) => {
  emit("transactionDeleted", id);
};
</script>
