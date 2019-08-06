var app = new Vue({
  el: "#app",
  data: {
    tasks: [{ content: "Task 1", completed: false }],
    newTask: { content: "", completed: false, priority: 0 }
  },
  methods: {
    doTask(i) {
      this.tasks[i].completed = !this.tasks[i].completed;
    },
    delTask(i) {
      this.tasks.splice(i, 1);
    },
    createTask() {
      this.tasks.push(this.newTask);
    }
  }
});
