<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" class="todo-input" />
    </div>
</template>

<script>
export default {
    name: 'TodoHeader',
    props: ['addTodo'],
    methods: {
        add(e) {
            const title = e.target.value.trim()
            if (!title) {
                return
            }
            const todo = { id: Date.now(), title, done: false }
            this.addTodo(todo)
            e.target.value = ''
        }
    }
}
</script>

<style>
.todo-header {
  background: #f7f7f7;
  padding: 24px 32px 18px 32px;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  display: flex;
  align-items: center;
  justify-content: center;
}
.todo-input {
  width: 100%;
  max-width: 420px;
  padding: 12px 18px;
  font-size: 18px;
  border: 1px solid #e0e0e0;
  border-radius: 24px;
  outline: none;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.03);
  transition: border-color 0.2s;
}
.todo-input:focus {
  border-color: #42b983;
  background: #f0faf7;
}
</style>