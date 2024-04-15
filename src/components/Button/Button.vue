<template>
  <component :is="as" class="p-4">
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: 'button'
  }>(),
  {
    as: 'button',
  }
)
</script>
