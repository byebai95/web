<template>
    <div class="todo-main">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
    name: 'TodoList',
    components: {
        TodoItem
    },
    props: {
        todos: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}
</style>