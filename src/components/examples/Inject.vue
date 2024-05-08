<template>
    <h3>我是组件 Provide</h3>
</template>

<script type="text/javascript">

export default {
    // 从 provide 取值
    inject: ["color", "userInfo"],
    created() {
        console.log(this.color, this.userInfo)
    }

}
</script>

<style>
</style>