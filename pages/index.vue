<script setup lang="ts">
type GameCardType = {
  title: string;
  img: string;
  link: string;
};

const gameCards: GameCardType[] = [
  {
    title: "Open case",
    img: "/images/games/open-case.png",
    link: "/open-case",
  },
];
</script>

<template>
  <div class="home">
    <UContainer>
      <div class="games grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <NuxtLink
          v-for="(game, index) in gameCards"
          :key="index"
          :to="game.link"
          class="game"
        >
          <UCard>
            <NuxtImg :src="game.img" fit="contain" alt="Open case" />
            <template #footer>{{ game.title }}</template>
          </UCard>
        </NuxtLink>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
