<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header> -->
    <q-item-label v-if="$q.screen.lt.md" header>
      <div class="text-center text-h2 text-bold" >IMY</div>
    </q-item-label>
    <q-drawer
      v-if="$q.screen.gt.sm"
      show-if-above
      bordered
      :width="250"
    >
    <div class="vertical-middle">
      <q-list>
      <q-item-label header>
        <div class="text-center text-h1 text-bold" >IMY</div>
      </q-item-label>
      <q-separator class="q-my-md" />
      <MenuComponent v-for="link in linksList" :key="link.title" v-bind="link"/>
      </q-list>
    </div>
    </q-drawer>

    <q-footer v-else bordered class="text-black bg-white row justify-center">
      <MenuComponent
        v-for="link in linksList"
        :key="link.title"
        v-bind="link"
      />
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import MenuComponent, {type MenuProps } from 'components/MenuComponent.vue';



const linksList: MenuProps[] = [
  {
    title: 'Home',
    icon: 'home',
    link: '/home-page'
  },
  {
    title: 'Search',
    icon: 'search',
    link: "/"
  },
  {
    title: 'Create',
    icon: 'add',
    link: "/"
  },
  {
    title: 'Notifcation',
    icon: 'favorite',
    link: "/notif-page"
  },
  {
    title: 'Profile',
    icon: 'account_circle',
    link: "/profile-page"
  },
];

// const leftDrawerOpen = ref(true);

// function toggleLeftDrawer () {
//   leftDrawerOpen.value = !leftDrawerOpen.value;
// }
</script>
