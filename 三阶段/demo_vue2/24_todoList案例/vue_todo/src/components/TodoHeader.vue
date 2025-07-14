<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" class="todo-input" />
    </div>
</template>

<script>
export default {
    name: 'TodoHeader',
    methods: {
        add(e) {
            const title = e.target.value.trim()
            if (!title) {
                return
            }
            const todo = { id: Date.now(), title, done: false, isEdit: false }
            this.$bus.$emit('addTodo', todo)
            e.target.value = ''
        }
    }
}
</script>

<style>
.todo-header {
    background-color: #cde87b;
    height: 50px;
}
</style>