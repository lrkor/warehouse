<template>
    <div class="shopping">
        <div class="tabs">
            <van-sidebar v-model="activeKey">
                <van-sidebar-item title="常用" />
                <van-sidebar-item title="汉堡" />
                <van-sidebar-item title="饮料" />
                <van-sidebar-item title="小食" />
                <van-sidebar-item title="套餐" />
            </van-sidebar>
        </div>
    </div>
</template>

<script>
    export default {
        name: "shopping",
        data() {
            return {
                activeKey: 0
            };
        },
        created() {

        },

    }
</script>

<style scoped>

</style>