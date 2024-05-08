<template>
    <h3>我是组件 EventA</h3>
    <
</template>

<script type="text/javascript">
import Bus from "@/utils/EventBus.js"
export default {
    data() { 
        return {
            message: "init"
        }
    },
    created() {
        // 消息接受方，监听 Bus 实例的事件
        Bus.$on("sendMessage", (message) => {
            this.message = message
        }
    }
}
</script>

<style>
</style>