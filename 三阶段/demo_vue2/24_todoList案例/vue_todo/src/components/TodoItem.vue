<template>
    <div class="todo-div">
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
        <span v-if="!todo.isEdit">{{ todo.title }}</span>
        <input v-else type="text" v-model="editTitle" @blur="handleSave(todo.id)" @keyup.enter="handleSave(todo.id)"
            class="edit-input" />
        <div class="button-group">
            <button v-if="!todo.isEdit" class="btn-edit" @click="handleEdit(todo.id)">编辑</button>
            <button v-else class="btn-edit" @click="handleSave(todo.id)">保存</button>
            <button class="btn-danger" @click="handleDelete(todo.id)">删除</button>
        </div>
    </div>
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
    data() {
        return {
            editTitle: ''
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
        },
        handleEdit(id) {
            this.editTitle = this.todo.title
            this.$bus.$emit('editTodo', id)
        },
        handleSave(id) {
            if (this.editTitle.trim()) {
                this.$bus.$emit('saveTodo', id, this.editTitle.trim())
            } else {
                this.$bus.$emit('saveTodo', id)
            }
        }
    }
}
</script>

<style>
.todo-div {
    background-color: #d384f0;
    height: 50px;
}

.button-group {
    float: right;
    margin-right: 10px;
}
</style>