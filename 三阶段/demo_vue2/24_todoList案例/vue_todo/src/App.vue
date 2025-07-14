<template>
  <div id="app" class="todo-container">
    <TodoHeader />
    <TodoList :todos="todos" />
    <TodoFooter :todos="todos" />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  watch: {
    todos: {
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      },
      deep: true
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    checkTodo(id) {
      this.todos.forEach(todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      })
    },
    clearAllDone() {
      this.todos = this.todos.filter(todo => !todo.done)
    },
    checkAll(value) {
      this.todos.forEach(todo => {
        todo.done = value
      })
    },
    editTodo(id) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.isEdit = !todo.isEdit
      }
    },
    saveTodo(id, newTitle) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        if (newTitle) {
          todo.title = newTitle
        }
        todo.isEdit = false
      }
    }
  },
  created() {
    this.$bus.$on('addTodo', this.addTodo)
    this.$bus.$on('deleteTodo', this.deleteTodo)
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('clearAllDone', this.clearAllDone)
    this.$bus.$on('checkAll', this.checkAll)
    this.$bus.$on('editTodo', this.editTodo)
    this.$bus.$on('saveTodo', this.saveTodo)
  },
  beforeDestroy() {
    this.$bus.$off('addTodo')
    this.$bus.$off('deleteTodo')
    this.$bus.$off('checkTodo')
    this.$bus.$off('clearAllDone')
    this.$bus.$off('checkAll')
    this.$bus.$off('editTodo')
    this.$bus.$off('saveTodo')
  }
}
</script>

<style>
.todo-container {
  background-color: #9fddf6;
  height: 500px;
  padding: 10px;
  margin: 10px;
  display: block;
  width: 600px;
}
</style>
