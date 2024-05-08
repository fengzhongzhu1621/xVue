<template>
    <h3>我是子组件</h3>
    <div>
        <p>父组件传递的参数 title 的值 = {{ title }}</p>
        <button @click="handleClick">修改 title 的值</button>
        
    </div>
    <!--title 通过添加属性的方式，给子组件传递参数--> 
    <FxSon>:title="title" @changeTitle="changeTitle"</FxSon>
    </template>
    
    
    <script type="text/javascript">
    export default {
        // props 定义子组件的输入参数
        // 可以传递任务数量的 prop
        // 可以传递任务类型的 prop
        props: ["title"], 
        methods: {
            handleClick(newTitle) { 
                // 按钮点击时给父组件发送通知，父组件收到子组件发送的消息后，会执行 changeTitle("新的标题")，修改父组件的标题
                this.$emit("changeTitle", "新的标题")
            }
        }
    }
    </script>
    
    
    <style></style>