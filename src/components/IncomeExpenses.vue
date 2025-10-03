<template>
  <div class="mt-10">
    <v-row>
      <v-col>
        <v-row class="my-2">
          <v-icon
            icon="trending_up"
            color="green-darken-4"
            size="25"
            class="pt-1 mr-2"
          />
          <h3>Entradas</h3>
        </v-row>
        <p class="mt-n2 suse-mono-font text-green-darken-4">R${{ income }}</p>
      </v-col>
      <v-col>
        <v-row class="my-2">
          <v-icon
            icon="trending_down"
            color="deep-orange-darken-4"
            size="25"
            class="pt-1 mr-2"
          />
          <h3>Entradas</h3>
        </v-row>
        <p class="mt-n2 suse-mono-font text-deep-orange-darken-4">
          R${{ expenses }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
defineProps({
  income: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
});
</script>
