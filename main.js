var app = new Vue({
  el: "#app",
  data: {
    tasks: [{ content: "Task 1", completed: false, priority: 1 }],
    newTask: { content: "Default task", completed: false, priority: 1 },
    filterSetting: "all",
    searchValue: ""
  },
  methods: {
    doTask(i) {
      this.globalFilter[i].completed = !this.tasks[i].completed;
    },
    delTask(i) {
      this.tasks.splice(i, 1);
    },
    createTask() {
      this.tasks.push({ ...this.newTask });
    },
    taskAllFilter() {
      this.filterSetting = "all";
    },
    taskDoneFilter() {
      this.filterSetting = "done";
    },
    taskUndoneFilter() {
      this.filterSetting = "undone";
    },
    taskAscFilter() {
      this.filterSetting = "asc";
    },
    taskDescFilter() {
      this.filterSetting = "desc";
    }
  },
  created() {},
  computed: {
    globalFilter: function() {
      let filteredArr = [];
      switch (this.filterSetting) {
        case "done":
          filteredArr = this.tasks.filter(el => el.completed == true);
          break;
        case "undone":
          filteredArr = this.tasks.filter(el => el.completed == false);
          break;
        case "asc":
          filteredArr = this.tasks.slice().sort((a, b) => {
            return a.priority - b.priority;
          });
          break;
        case "desc":
          filteredArr = this.tasks.slice().sort((a, b) => {
            return b.priority - a.priority;
          });
          break;
        case "all":
        default:
          filteredArr = this.tasks;
      }
      if (this.searchValue != "") {
        filteredArr = this.tasks.filter(el =>
          el.content.toLowerCase().includes(this.searchValue)
        );
      }
      return filteredArr;
    },
    taskAmount: function() {
      return this.tasks.length;
    },
    taskAmountDone: function() {
      return this.tasks.filter(currentTask => currentTask.completed).length;
    },
    taskEqulation: function() {
      if (this.tasks.length == 0) {
        return 0;
      } else {
        return (
          this.tasks.filter(currentTask => currentTask.completed).length /
          this.tasks.length
        );
      }
    }
  }
});
