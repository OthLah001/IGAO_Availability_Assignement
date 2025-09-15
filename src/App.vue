<script setup lang="ts">
import { ref } from 'vue'
import PeersList from './components/PeersList.vue'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const selectedDays = ref<string[]>([])
const name = ref('Patrik')

const toggleDay = (day: string) => {
  if (day === 'ALL') {
    selectedDays.value = []
  } else {
    const index = selectedDays.value.indexOf(day)
    if (index > -1) {
      selectedDays.value.splice(index, 1)
    } else {
      selectedDays.value.push(day)
    }
  }
}
const isDaySelected = (day: string) => {
  if (day === 'ALL') {
    return selectedDays.value.length === 0
  }
  return selectedDays.value.includes(day)
}
</script>

<template>
  <div class="h-lvh bg-[#fbfbfb]">
    <div class="h-[70px] bg-[#498fe4]"></div>

    <div class="pb-[30px] pt-[30px] max-w-[1200px] lg:mx-auto ml-4 mr-4">
      <p class="ml-[3px] font-open-sans text-xl font-bold text-[#333] mb-[16px]">
        Hi {{ name }}, schedule your next practice session with a peer
      </p>

      <p class="mb-[11px] ml-[1px] font-open-sans text-xs font-bold text-[#aaa]">
        FILTER PEERS AVAILABLE ON:
      </p>

      <!-- Filter peers available on -->
      <div class="flex flex-center mb-[49px] flex-wrap">
        <!-- ALL button -->
        <div
          @click="toggleDay('ALL')"
          :class="[
            'w-[55px] h-8 mx-2 shadow-[0 1px 2px 0 rgba(51, 51, 51, 0.12)] flex items-center justify-center cursor-pointer',
            isDaySelected('ALL') ? 'bg-[#007bca]' : 'bg-white',
          ]"
        >
          <span
            :class="[
              'font-open-sans text-xs font-bold',
              isDaySelected('ALL') ? 'text-white' : 'text-[#498fe4]',
            ]"
          >
            ALL
          </span>
        </div>

        <!-- Day buttons -->
        <div
          v-for="day in days"
          :key="day"
          @click="toggleDay(day)"
          :class="[
            'w-[55px] h-8 mx-2 shadow-[0 1px 2px 0 rgba(51, 51, 51, 0.12)] flex items-center justify-center cursor-pointer',
            isDaySelected(day) ? 'bg-[#007bca]' : 'bg-white',
          ]"
        >
          <span
            :class="[
              'font-open-sans text-xs font-bold uppercase',
              isDaySelected(day) ? 'text-white' : 'text-[#498fe4]',
            ]"
          >
            {{ day }}
          </span>
        </div>
      </div>

      <!-- Peers available -->
      <PeersList :selectedDays="selectedDays" />
    </div>
  </div>
</template>
