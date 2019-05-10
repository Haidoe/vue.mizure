<template>
    <b-navbar toggleable="lg" fixed="top" type="light" class="py-4" id="main-nav">
        <b-container>
            <b-navbar-brand href="#home">
                <img src="../assets/img/haidoe-logo.svg" alt="logo-main" width="200px">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#home" class="active"> Home </b-nav-item>
                    <b-nav-item href="#about"> About </b-nav-item>
                    <b-nav-item href="#authors"> Meet the Authors </b-nav-item>
                    <b-nav-item href="#contact"> Contact </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<style lang="scss" scoped>
.navbar {
    box-shadow: 2px 2px 5px #3292a6;
    background: rgba(255, 255, 255, 0.9);
}

.nav-item {
    font-size: 1.4rem;
    padding-right: 1.4rem;
}
</style>