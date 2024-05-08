<template>
    <h3>我是组件 EventB</h3>
</template>

<script type="text/javascript">
import Bus from "@/utils/EventBus.js"
export default {
    created() {
        // 消息发送方，触发 Bus 实例的事件
        Bus.$emit("sendMessage", "需要发送的消息")
    }
}
</script>

<style>
</style>