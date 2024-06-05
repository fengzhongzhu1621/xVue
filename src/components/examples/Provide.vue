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
    // 父组件会作为依赖的提供者给其所有的后代组件（不管是子组件还是孙子组件）提供依赖数据，
    // 父组件所有的后代组件不管层级多深都可以注入由父组件提供的依赖数据。
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