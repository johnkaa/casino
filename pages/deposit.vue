<script setup lang="ts">
import { onMounted } from "vue";
import depositSchema from "~/pkg/schemas/deposit";

const toast = useToast();

const isLoading = ref(true);
const formState = reactive({
  amount: null,
});

function deposit() {
  const balance = useCookie<number>("balance");
  if (balance.value) {
    if (balance.value > 10000) {
      return toast.add({
        title: `You can't deposit when your balance more than 10000$`,
        color: "red",
        icon: "i-heroicons-x-circle",
      });
    }
    balance.value += formState.amount;
  } else {
    balance.value = formState.amount;
  }

  toast.add({
    title: `Your balance has been replenished by ${formState.amount}$`,
    color: "green",
    icon: "i-heroicons-check-circle",
  });
  formState.amount = null;
}

onMounted(() => {
  isLoading.value = false;
});
</script>

<template>
  <div class="deposit flex justify-center">
    <UContainer>
      <h2 class="text-2xl text-center mb-5">Deposit money</h2>

      <UForm
        class="flex flex-col w-[300px]"
        :state="formState"
        :schema="depositSchema"
        novalidate
        @submit="deposit"
      >
        <UFormGroup class="mb-3" label="Amount" name="amount">
          <UInput
            v-model="formState.amount"
            class="justify-center"
            type="number"
            icon="i-heroicons-currency-dollar-20-solid"
          />
        </UFormGroup>

        <UButton
          class="flex justify-center"
          :disabled="isLoading"
          type="submit"
        >
          Submit
        </UButton>
      </UForm>
    </UContainer>
  </div>
</template>

<style scoped></style>
