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
            this.$emit('clearAllDone')
        },
        handleAllDone() {
            this.$emit('checkAll', this.isAllDone)
        }
    }
}
</script>

<style>
.todo-footer {
    display: block;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    padding: 0 16px 0 6px;
    margin-top: 5px;
    background: #fafbfc;
    border-top: 1px solid #eee;
}

.todo-footer span {
    display: inline-block;
    cursor: pointer;
}

.todo-footer button {
    float: right;
    margin-left: 5px;
    cursor: pointer;
    background: #fafbfc;
    border: 1px solid #eee;
    border-radius: 3px;
    padding: 0 5px;
}
</style>
