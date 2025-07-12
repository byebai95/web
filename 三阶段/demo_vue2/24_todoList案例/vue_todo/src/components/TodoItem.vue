<template>
    <label class="todo-label">
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
        <span>{{ todo.title }}</span>
        <button class="btn-danger" @click="handleDelete(todo.id)">删除</button> <br>
    </label>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleDelete(id) {
            if (confirm('确定删除吗？')) {
                this.$bus.$emit('deleteTodo', id)
            }
        },
        handleCheck(id) {
            this.$bus.$emit('checkTodo', id)
        }
    }
}
</script>

<style>
.todo-label {
    position: relative;
    display: block;
    padding-right: 60px;
    /* 给按钮留空间 */
}

.btn-danger {
    display: none;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

.todo-label:hover .btn-danger,
.btn-danger:hover {
    display: inline-block;
}

.btn-danger:hover,
.btn-danger:focus {
    color: #fff;
    background-color: #bd362f;
}
</style>