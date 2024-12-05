"use strict";

let lastId = 0;

/* toDoList previous */
const toDoList = {
  tasks: [],
  isExist(id) {
    return this.tasks.some((task) => id == task.id);
  },
  addTask(newTask) {
    lastId += 1;
    newTask.id = lastId;
    this.tasks.push(newTask);
    console.log(`Задача: '${newTask.name}' - добавлена!`);
  },
  deleteTaskById(id) {
    if (!this.isExist(id)) {
      console.log(`Задачи с id: ${id} - не существует.`);
      return;
    }
    this.isExist(id);
    this.tasks = this.tasks.filter((task) => id != task.id);
    console.log(`Задача с id: ${id} - удалена!`);
  },
  amendTask(id, amend) {
    if (!this.isExist(id)) {
      console.log(`Задачи с id: ${id} - не существует.`);
      return;
    }
    this.tasks[id] = {
      ...this.tasks[id],
      ...amend,
    };
  },
  sortByPriority() {
    this.tasks.sort((task1, task2) => task1.order - task2.order);
    console.log(`Задачи отсортированы по приоритету!`);
  },
};

/* newTask */
const newTask = {
  tasks: [
    {
      id: 0,
      name: "текст",
      description: "описание",
      order: 0,
    },
  ],
};

/* Выполнение методов toDoList в контексте newTask */
newTask.isExist = toDoList.isExist;
const addTaskNew = toDoList.addTask.bind(newTask);
const deleteTaskByIdNew = toDoList.deleteTaskById.bind(newTask);
const amendTaskNew = toDoList.amendTask.bind(newTask);
const sortByPriorityNew = toDoList.sortByPriority.bind(newTask);

/* Массив данных для проверки */
const task1 = {
  name: "текст1",
  description: "описание",
  order: 3,
};

const task2 = {
  name: "текст2",
  description: "описание",
  order: 1,
};
const task3 = {
  name: "текс3",
  description: "описание",
  order: 4,
};
const task4 = {
  name: "текст4",
  description: "описание",
  order: 2,
};

const taskAmend = {
  name: "текст amend",
  description: "описание amend",
};

/* Проверка */
addTaskNew(task1);
addTaskNew(task2);
addTaskNew(task3);
addTaskNew(task4);
console.log(newTask);

deleteTaskByIdNew(3);
deleteTaskByIdNew(10);
console.log(newTask);

amendTaskNew(0, taskAmend);
amendTaskNew(10, taskAmend);
console.log(newTask);

sortByPriorityNew();
console.log(newTask);
