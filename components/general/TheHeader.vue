<script setup lang="ts">
const balance = useCookie<number>("balance");
if (!balance.value) {
  balance.value = 9999;
}
</script>

<template>
  <header class="header">
    <UContainer>
      <div class="flex justify-between pt-5 pb-5">
        <NuxtLink class="text-xl font-bold" to="/">iGaming</NuxtLink>

        <div class="flex items-center">
          <UButton class="mr-4" to="/deposit">Deposit</UButton>

          <div>{{ balance ?? 0 }}$</div>
        </div>
      </div>
    </UContainer>
  </header>
</template>

<style scoped></style>
