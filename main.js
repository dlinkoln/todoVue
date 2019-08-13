var app = new Vue({
  el: "#app",
  data: {
    tasks: [{ content: "Task 1", completed: false }],
    newTask: { content: "Default task", completed: false, priority: 0 },
    filtredTasks: [],
    doneFilterState: { all: true, done: false, undone: false },
    ascendingFilterState: { asc: false, desc: false },
    searchValue: ""
  },
  methods: {
    doTask(i) {
      this.tasks[i].completed = !this.tasks[i].completed;
    },
    delTask(i) {
      this.tasks.splice(i, 1);
      this.filtredTasks = this.tasks.slice();
    },
    createTask() {
      this.tasks.push({ ...this.newTask });
      this.filtredTasks = this.tasks.slice();
      this.doneFilterState.all = true;
      this.doneFilterState.done = false;
      this.doneFilterState.undone = false;
    },
    taskAllFilter() {
      this.filtredTasks = this.tasks.slice();
      this.doneFilterState.all = true;
      this.doneFilterState.done = false;
      this.doneFilterState.undone = false;
    },
    taskDoneFilter() {
      this.filtredTasks = this.tasks.filter(
        currentTask => currentTask.completed
      );
      this.doneFilterState.all = false;
      this.doneFilterState.done = true;
      this.doneFilterState.undone = false;
    },
    taskUndoneFilter() {
      this.filtredTasks = this.tasks.filter(
        currentTask => !currentTask.completed
      );
      this.doneFilterState.all = false;
      this.doneFilterState.done = false;
      this.doneFilterState.undone = true;
    },
    ascendingFilter() {
      this.filtredTasks = this.tasks.sort(function(a, b) {
        if (a.content < b.content) {
          return 1;
        }
        if (a.content > b.content) {
          return -1;
        }
        return 0;
      });
      this.ascendingFilterState.asc = true;
      this.ascendingFilterState.desc = false;
    },
    descendingFilter() {
      this.ascendingFilterState.asc = false;
      this.ascendingFilterState.desc = true;
      this.filtredTasks = this.tasks.sort(function(a, b) {
        if (a.content > b.content) {
          return 1;
        }
        if (a.content < b.content) {
          return -1;
        }
        return 0;
      });
    }
  },
  created: function() {
    this.filtredTasks = this.tasks.slice();
  },
  computed: {
    searchFilter: function() {
      return (this.filtredTasks = this.tasks.filter(el => {
        return el.content.match(this.searchValue);
      }));
    },
    taskAmount: function() {
      return this.tasks.length;
    },
    taskAmountDone: function() {
      return this.tasks.filter(currentTask => currentTask.completed).length;
    }
  }
});
