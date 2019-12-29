<template>
    <div class="wrapper border-right">
        <nav id="sidebar">
            <div class="side-wrapper">
                <ul class="nav-list list-unstyled ">
                    <li>
                        <router-link :to="{name:'offers'}">Offers</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'recipes'}">Recipes</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'offers'}">Discount</router-link>
                    </li>
                    <li @click="prmodal=true"><a href="">Product Request</a></li>
                </ul>

            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "sidebar"
    }
</script>

<style scoped>

</style>