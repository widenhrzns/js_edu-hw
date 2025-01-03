"use strict";

let lastId = 1;

const toDoList = {
  tasks: [],
  addTask: function (title, priority = -1) {
    const newTask = { title, priority, id: lastId };
    const isExist = this.tasks.some((task) => task.title == newTask.title);
    if (isExist) {
      console.log(`Задача: '${title}' - уже существует.`);
    } else {
      lastId++;
      this.tasks.push(newTask);
      console.log(`Задача: '${title}' - добавлена!`);
    }
  },
  deleteTaskById: function (id) {
    const isExists = this.tasks.some((task) => id == task.id);
    if (!isExists) {
      console.log(`Задачи с id: ${id} - не существует.`);
      return this;
    }
    this.tasks = this.tasks.filter((task) => id != task.id);
    console.log(`Задача с id: ${id} - удалена!`);
  },
  amendTask: function (id, amend) {
    if (this.tasks.some((task) => id == task.id)) {
      const amendTask = this.tasks.find((task) => task.id == id);
      switch (true) {
        case typeof amend == "string":
          amendTask.title = amend;
          console.log(`Название задачи с id: ${id} - изменено!`);
          break;
        case typeof amend == "number":
          amendTask.priority = amend;
          console.log(`Приоритет задачи с id: ${id} - изменен!`);
          break;
        default:
          console.log(`Этот параметр нельзя изменить.`);
      }
    } else {
      console.log(`Задачи с id: ${id} - не существует.`);
    }
  },
  sortByPriority: function () {
    this.tasks.sort((task1, task2) => task1.priority - task2.priority);
    console.log(`Задачи отсортированы по приоритету!`);
  },
};

/* Вывод */

console.log("Добавление задач".padStart(50, "-"));
toDoList.addTask("test1", 1);
toDoList.addTask("test2", 4);
toDoList.addTask("test3", 7);
toDoList.addTask("test4", 3);
toDoList.addTask("test4", 2);
toDoList.addTask("test6");
toDoList.addTask("test7", 9);
toDoList.addTask("test8", 2);
console.log(toDoList.tasks);

console.log("Удаление задач по id".padStart(50, "-"));
toDoList.deleteTaskById(6);
toDoList.deleteTaskById(13);
toDoList.deleteTaskById(1);
console.log(toDoList.tasks);

console.log("Обновить имя или приоритет по id".padStart(50, "-"));
toDoList.amendTask(3, 5);
toDoList.amendTask(15, "test");
toDoList.amendTask(2, "Изменение задачи");

console.log("Отсортировать задачи по приоритету".padStart(50, "-"));
toDoList.sortByPriority();
console.log(toDoList.tasks);
