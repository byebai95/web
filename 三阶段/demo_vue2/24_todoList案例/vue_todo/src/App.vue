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
    }
  },
  created() {
    this.$bus.$on('addTodo', this.addTodo)
    this.$bus.$on('deleteTodo', this.deleteTodo)
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('clearAllDone', this.clearAllDone)
    this.$bus.$on('checkAll', this.checkAll)
  },
  beforeDestroy() {
    this.$bus.$off('addTodo')
    this.$bus.$off('deleteTodo')
    this.$bus.$off('checkTodo')
    this.$bus.$off('clearAllDone')
    this.$bus.$off('checkAll')
  }
}
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.todo-container {
  width: 800px;
  margin: 0 auto;
  box-shadow: 0 0 5px #ccc;
  background-color: #fff;
}

.todo-container .todo-wrap {
  padding: 10px;
}
</style>
