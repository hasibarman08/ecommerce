<template>
    <div id="app">
        <div>
            <HeaderComponent/>
            <div class="sidebar-content">
               <sidebar/>
            </div>

            <div class="content">
                <router-view/>
            </div>

            <FooterComponent/>
        </div>

    </div>
</template>

<style>

</style>
<script>
    import HeaderComponent from "./components/myheader";
    import FooterComponent from "./components/myfooter";
    import Sidebar from "./components/sidebar";

    export default {
        components: {Sidebar, FooterComponent, HeaderComponent}
    }
</script>