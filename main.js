var app = new Vue({
  el: "#app",
  data: {
    tasks: [{ content: "Task 1", completed: false }]
  },
  methods: {
    doTask(i) {
      this.tasks[i].completed = !this.tasks[i].completed;
    }
  }
});
