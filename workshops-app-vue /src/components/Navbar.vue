<template>
    <!-- b4-navbar-minimal-ul -->
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <ul class="nav navbar-nav">
            <li class="nav-item active">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/workshops">Workshops</router-link>
            </li>
            <!-- <li class="nav-item">
                <router-link class="nav-link" to="/workshop-details">Workshop  Details</router-link>
            </li> -->
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
</style>