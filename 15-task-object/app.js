"use strict";

let lastId = 1;

const ToDoList = {
  tasks: [],
  AddTask: function (title, priority = -1) {
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
  DeleteTaskById: function (id) {
    if (this.tasks.some((task) => id == task.id)) {
      this.tasks = this.tasks.filter((task) => id != task.id);
      console.log(`Задача с id: ${id} - удалена!`);
    } else {
      console.log(`Задачи с id: ${id} - не существует.`);
    }
  },
  AmendTask: function (id, amend) {
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
  SortByPriority: function () {
    this.tasks.sort((task1, task2) => task1.priority - task2.priority);
    console.log(`Задачи отсортированы по приоритету!`);
  },
};

/* Вывод */

console.log("Добавление задач".padStart(50, "-"));
ToDoList.AddTask("test1", 1);
ToDoList.AddTask("test2", 4);
ToDoList.AddTask("test3", 7);
ToDoList.AddTask("test4", 3);
ToDoList.AddTask("test4", 2);
ToDoList.AddTask("test6");
ToDoList.AddTask("test7", 9);
ToDoList.AddTask("test8", 2);
console.log(ToDoList.tasks);

console.log("Удаление задач по id".padStart(50, "-"));
ToDoList.DeleteTaskById(6);
ToDoList.DeleteTaskById(13);
ToDoList.DeleteTaskById(1);
console.log(ToDoList.tasks);

console.log("Обновить имя или приоритет по id".padStart(50, "-"));
ToDoList.AmendTask(3, 5);
ToDoList.AmendTask(15, "test");
ToDoList.AmendTask(2, "Изменение задачи");

console.log("Отсортировать задачи по приоритету".padStart(50, "-"));
ToDoList.SortByPriority();
console.log(ToDoList.tasks);
