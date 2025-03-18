<template>
  <q-item :to="link" clickable>
    <q-icon size="30px" :name="icon">
        <q-badge v-if="icon == 'favorite'" color="red" text-color="white" floating rounded/>
      <q-tooltip :delay="1000">{{ title }}</q-tooltip>
    </q-icon>

    <q-item-section v-if="$q.screen.gt.sm">
      <q-item-label class="q-pa-md q-gutter-sm">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface MenuProps {
  title: string;
  link?: string;
  icon?: string;
};

withDefaults(defineProps<MenuProps>(), {
  link: '#',
  icon: '',
});
</script>
