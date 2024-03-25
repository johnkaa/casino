<script setup lang="ts">
import { gsap } from "gsap";
import { csSkins } from "~/pkg/data/cs-skins";
import { RarityColors } from "~/pkg/enums/rarity-colors";
import type ICsSkin from "~/pkg/interfaces/cs-skin";

const toast = useToast();
const balance = useCookie<number>("balance");

const isSpinning = ref(false);
const isEndOfSpin = ref(false);

const winnedSkin = ref<ICsSkin | null>(null);

const duplicatedSkins = [...csSkins, ...csSkins, ...csSkins];

function open() {
  if (balance.value && balance.value >= 115) {
    const randomNumber = +(Math.random() * 100).toFixed(2);
    let indexOfDroppedElement = 0;
    let valueOfSkins = 0;
    let indexOfIterator = 0;
    while (valueOfSkins < randomNumber) {
      valueOfSkins += csSkins[indexOfIterator].chance;
      indexOfIterator++;
    }
    indexOfDroppedElement = indexOfIterator - 1;

    gsap.to(".spinner", {
      x: 0,
      duration: 0,
    });

    isSpinning.value = true;
    balance.value -= 115;
    gsap.to(".spinner", {
      rotate: 0,
      x: -1700 - indexOfDroppedElement * 200,
      duration: 1,
      animation: "easeInOut",
      onComplete: () => {
        isSpinning.value = false;
        openEndOfSpinModal(indexOfDroppedElement);
      },
    });
  } else {
    return toast.add({
      title: `You do not have enough money, please top up your account to play`,
      color: "red",
      icon: "i-heroicons-x-circle",
    });
  }
}

function openEndOfSpinModal(skinIndex: number) {
  isEndOfSpin.value = true;
  winnedSkin.value = csSkins[skinIndex];
}

function sellSkin() {
  if (!winnedSkin.value) return;

  balance.value += winnedSkin.value?.amount;
  toast.add({
    title: `Your balance has been replenished by ${winnedSkin.value?.amount}$`,
    color: "green",
    icon: "i-heroicons-check-circle",
  });

  isEndOfSpin.value = false;
  winnedSkin.value = null;
}
</script>

<template>
  <div class="open-case">
    <UContainer>
      <div class="open-case__game">
        <div class="overflow-hidden mb-2 relative">
          <div class="spinner flex p-1">
            <UCard
              v-for="(skin, index) in duplicatedSkins"
              :key="index"
              class="min-w-[200px]"
              :style="{ backgroundColor: RarityColors[skin.rarity] }"
            >
              <NuxtImg :src="skin.img" />
            </UCard>
          </div>
          <div class="bg-[#4ade80] w-[2px] absolute inset-y-1 inset-x-2/4" />
        </div>

        <UButton
          class="w-full flex justify-center"
          :disabled="isSpinning"
          @click="open"
        >
          Open (115$)
        </UButton>
      </div>

      <div class="open-case__skins mt-5">
        <h2 class="text-3xl text-center mb-2">Skins in this case</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <UCard
            v-for="(skin, index) in csSkins"
            :key="index"
            class="min-w-[200px]"
            :style="{ backgroundColor: RarityColors[skin.rarity] }"
          >
            <template #header>
              <span>{{ skin.chance }}%</span>
            </template>
            <template #default>
              <div>
                <NuxtImg class="w-full" :src="skin.img" />
              </div>
            </template>
            <template #footer>
              <div class="flex justify-between">
                <span>{{ skin.name }}</span>
                <span>{{ skin.amount }}$</span>
              </div>
            </template>
          </UCard>
        </div>
      </div>
    </UContainer>

    <UModal v-if="winnedSkin" v-model="isEndOfSpin">
      <UCard>
        <template #default>
          <div class="flex justify-center items-center">
            <NuxtImg :src="winnedSkin.img" />
          </div>
        </template>
        <template #footer>
          <div class="flex justify-between">
            <UButton color="red" @click="isEndOfSpin = false">Close</UButton>
            <UButton @click="sellSkin">Sell ({{ winnedSkin.amount }}$)</UButton>
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>
