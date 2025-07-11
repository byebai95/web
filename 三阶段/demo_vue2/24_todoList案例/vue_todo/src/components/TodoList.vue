<template>
    <div class="todo-main">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @deleteTodo="deleteTodo" @checkTodo="checkTodo" />
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
        },
        // deleteTodo: {
        //     type: Function,
        //     required: true
        // },
        // checkTodo: {
        //     type: Function,
        //     required: true
        // }
    },
    methods: {
        deleteTodo(id) {
            this.$emit('deleteTodo', id)
        },
        checkTodo(id) {
            this.$emit('checkTodo', id)
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