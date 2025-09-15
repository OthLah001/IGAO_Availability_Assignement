<script setup lang="ts">
import { Peer } from '@/types/peer'
import { toRefs } from 'vue'

const props = defineProps<{
  peer: Peer
}>()

const { peer } = toRefs(props)
</script>

<template>
  <div class="bg-white min-h-[451px] object-contain p-5 pb-3 flex flex-col">
    <!-- Avatar & Name -->
    <div class="flex mb-4">
      <div class="w-18 h-18 rounded-full bg-gray-200 flex items-center justify-center">
        <img
          v-if="peer.image"
          :src="peer.image"
          alt="Peer"
          class="w-full h-full object-cover rounded-full"
        />
        <span v-else class="font-open-sans text-lg font-bold text-gray-600">
          {{ peer.name.split(' ')[0][0].toUpperCase()
          }}{{ peer.name.split(' ')[1][0].toUpperCase() }}
        </span>
      </div>

      <div class="ml-4">
        <p class="font-open-sans text-xl font-bold text-[#333]">{{ peer.name }}</p>
        <p class="font-open-sans text-xs font-semibold text-[#666]">Logged in today</p>
      </div>
    </div>

    <!-- About -->
    <div class="mb-4">
      <p class="font-open-sans text-xs font-bold text-[#aaa] mb-2">ABOUT ME</p>
      <p class="font-open-sans text-sm text-[#333]">
        {{ peer.about_me }}
      </p>
    </div>

    <!-- Availability & Details -->
    <div class="mb-5 flex-1">
      <div class="flex mb-2">
        <p class="flex pt-0.5">
          <img src="../assets/availability.svg" alt="Availability" class="w-4 h-4 peer-icon" />
        </p>
        <p class="font-open-sans text-sm text-[#333] ml-2">
          Available on
          {{ peer.availability.join(', ') }}
        </p>
      </div>

      <div class="flex mb-2">
        <p class="flex pt-0.5">
          <img src="../assets/targeting.svg" alt="Tergeting" class="w-4 h-4 peer-icon" />
        </p>
        <p class="font-open-sans text-sm text-[#333] ml-2">
          Targeting {{ peer.companies.join(', ') }}
        </p>
      </div>

      <div class="flex mb-2">
        <p class="flex pt-0.5">
          <img src="../assets/session.svg" alt="Session" class="w-4 h-4 peer-icon" />
        </p>
        <p class="font-open-sans text-sm text-[#333] ml-2">{{ peer.sessions }} sessions booked</p>
      </div>

      <div class="flex mb-2">
        <p class="flex pt-0.5">
          <img src="../assets/experience.svg" alt="Experience" class="w-4 h-4 peer-icon" />
        </p>
        <p class="font-open-sans text-sm text-[#333] ml-2">
          {{ peer.years_of_experience }} years of experience
        </p>
      </div>

      <div class="flex">
        <p class="flex pt-0.5">
          <img src="../assets/location.svg" alt="Location" class="w-4 h-4 peer-icon" />
        </p>
        <p class="font-open-sans text-sm text-[#333] ml-2">{{ peer.location }}</p>
      </div>
    </div>

    <div class="h-[1px] bg-[#eee] mx-auto"></div>

    <div class="h-[40px] flex items-end justify-center border-t border-[#eee]">
      <p class="font-open-sans text-xs font-bold text-center text-[#007bca] cursor-pointer">
        BOOK ME
      </p>
    </div>
  </div>
</template>

<style scoped>
.peer-icon {
  filter: invert(72%) sepia(0%) saturate(0%) hue-rotate(246deg) brightness(89%) contrast(88%);
}
</style>
