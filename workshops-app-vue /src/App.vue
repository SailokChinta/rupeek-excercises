<template>
  <div>
      <Navbar />
      <div class='container my-4'>
          <!-- <Home /> -->
          <!-- <WorkshopsList /> -->
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
// import Home from './components/Home';
// import WorkshopsList from './components/WorkshopsList';

export default {
  name: 'App',
  components: {
    Navbar,
    // Home,
    // WorkshopsList
  },
}
</script>

<style>
</style>
