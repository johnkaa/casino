<script setup lang="ts">
type GameCardType = {
  title: string;
  img: string;
  link: string;
  disabled?: boolean;
};

const gameCards: GameCardType[] = [
  {
    title: "Open case",
    img: "/images/games/open-case.png",
    link: "/open-case",
  },
  {
    title: "Coming soon",
    img: "/images/games/coming-soon.png",
    link: "/",
    disabled: true,
  },
];
</script>

<template>
  <div class="home">
    <UContainer>
      <div class="games grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <NuxtLink
          v-for="(game, index) in gameCards"
          :key="index"
          :to="!game.disabled ? game.link : ''"
          class="game"
          :style="{ opacity: game.disabled ? 0.6 : 1 }"
        >
          <UCard>
            <NuxtImg
              class="w-full"
              :src="game.img"
              fit="contain"
              alt="Open case"
            />
            <template #footer>{{ game.title }}</template>
          </UCard>
        </NuxtLink>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
