<template>
<h3>我是父组件</h3>
<!--
    title：通过添加属性的方式，给子组件传递参数
    changeTitle: 注册一个方法接受子组件传递的参数
--> 
<FxSon>:title="title" @changeTitle="changeTitle"</FxSon>
</template>


<script>
// 引入子组件
import FxSon from "@components/FxSon.vue"

export default {
    data() {
        return {
            title: "I'm parent component"
        }
    },
    // 局部注册，只能在注册的组件内使用
    components: {
        FxSon
    },
    methods: {
        changeTitle(newTitle) { 
            this.title = newTitle
        }
    }
}
</script>


<style></style>