<template>
    <h3>我是组件 Provide</h3>
</template>

<script type="text/javascript">

export default {
    data() {
        return {
            color: "read",
            userInfo: {
                name: "bob",
                age: 18
            }
        }
    },
    // 用于跨层级共享数据
    provide() { 
        return {
            // 普通类型，非响应式
            color: this.color,
            // 复杂类型，响应式
            userInfo: this.userInfo
        }
    }
}
</script>

<style>
</style>