<template>
    <div class="todo-footer">
        <input type="checkbox" v-model="isAllDone" @change="handleAllDone" />
        <span>已勾选 {{ doneTotal }} / 全部 {{ total }}</span>
        <button @click="clearAllDone">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'TodoFooter',
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    computed: {
        doneTotal() {
            return this.todos.reduce((pre, todo) => {
                return pre + (todo.done ? 1 : 0)
            }, 0)
        },
        total() {
            return this.todos.length
        },
        isAllDone: {
            get() {
                return this.todos.every(todo => todo.done)
            },
            set(value) {
                this.todos.forEach(todo => {
                    todo.done = value
                })
            }
        }
    },
    methods: {
        clearAllDone() {
            this.$bus.$emit('clearAllDone')
        },
        handleAllDone() {
            this.$bus.$emit('checkAll', this.isAllDone)
        }
    }
}
</script>

<style>
.todo-footer {
    background-color: #e95a79;
    height: 50px;
}
</style>
