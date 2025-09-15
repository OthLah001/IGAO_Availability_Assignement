<script setup lang="ts">
import PeersList from './components/PeersList.vue'
</script>

<template>
  <div class="h-lvh bg-[#fbfbfb]">
    <div class="h-[70px] bg-[#498fe4]"></div>

    <div class="pb-[30px] pt-[30px] max-w-[1200px] lg:mx-auto ml-4 mr-4">
      <p class="ml-[3px] font-open-sans text-xl font-bold text-[#333] mb-[16px]">
        Hi Patrik, schedule your next practice session with a peer
      </p>

      <p class="mb-[11px] ml-[1px] font-open-sans text-xs font-bold text-[#aaa]">
        FILTER PEERS AVAILABLE ON:
      </p>

      <!-- Filter peers available on -->
      <div class="flex flex-center mb-[49px] flex-wrap">
        <div
          class="w-[55px] h-8 mx-2 bg-[#007bca] shadow-[0 1px 2px 0 rgba(51, 51, 51, 0.12)] flex items-center justify-center cursor-pointer"
        >
          <span class="font-open-sans text-xs font-bold text-white"> ALL </span>
        </div>

        <div
          class="w-[55px] h-8 mx-2 bg-white shadow-[0 1px 2px 0 rgba(51, 51, 51, 0.12)] flex items-center justify-center cursor-pointer"
        >
          <span class="font-open-sans text-xs font-bold text-[#498fe4]"> MON </span>
        </div>

        <div
          class="w-[55px] h-8 mx-2 bg-white shadow-[0 1px 2px 0 rgba(51, 51, 51, 0.12)] flex items-center justify-center cursor-pointer"
        >
          <span class="font-open-sans text-xs font-bold text-[#498fe4]"> TUE </span>
        </div>

        <div
          class="w-[55px] h-8 mx-2 bg-white shadow-[0 1px 2px 0 rgba(51, 51, 51, 0.12)] flex items-center justify-center cursor-pointer"
        >
          <span class="font-open-sans text-xs font-bold text-[#498fe4]"> WED </span>
        </div>

        <div
          class="w-[55px] h-8 mx-2 bg-white shadow-[0 1px 2px 0 rgba(51, 51, 51, 0.12)] flex items-center justify-center cursor-pointer"
        >
          <span class="font-open-sans text-xs font-bold text-[#498fe4]"> THU </span>
        </div>

        <div
          class="w-[55px] h-8 mx-2 bg-white shadow-[0 1px 2px 0 rgba(51, 51, 51, 0.12)] flex items-center justify-center cursor-pointer"
        >
          <span class="font-open-sans text-xs font-bold text-[#498fe4]"> FRI </span>
        </div>

        <div
          class="w-[55px] h-8 mx-2 bg-white shadow-[0 1px 2px 0 rgba(51, 51, 51, 0.12)] flex items-center justify-center cursor-pointer"
        >
          <span class="font-open-sans text-xs font-bold text-[#498fe4]"> SAT </span>
        </div>

        <div
          class="w-[55px] h-8 mx-2 bg-white shadow-[0 1px 2px 0 rgba(51, 51, 51, 0.12)] flex items-center justify-center cursor-pointer"
        >
          <span class="font-open-sans text-xs font-bold text-[#498fe4]"> SUN </span>
        </div>
      </div>

      <!-- Peers available -->
      <PeersList />
    </div>
  </div>
</template>
