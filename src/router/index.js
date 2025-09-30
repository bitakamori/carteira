import { createRouter, createWebHistory } from "vue-router";
import AddTransaction from "@/components/AddTransaction.vue";
import Balance from "@/components/Balance.vue";

const routes = [
  { path: "/", component: Balance },
  { path: "/addTransaction", component: AddTransaction },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
