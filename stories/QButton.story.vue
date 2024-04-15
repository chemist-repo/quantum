<script setup>
import { ref } from 'vue'
import { logEvent } from 'histoire/client'
import QButton from '../src/components/Button/Button.vue'

const text = ref('Click me')
</script>

<template>
  <Story>
    <QButton @click="logEvent('click', $event)">
      {{ text }}
    </QButton>

    <template #controls>
      <HstText title="default slot" v-model="text" />
    </template>
  </Story>
</template>
