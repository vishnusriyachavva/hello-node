// /* eslint-disable no-undef */
// const todoList = require('../todo')

// const { all, markAsComplete, add } = todoList()
// describe('TodoList Test Suite', () => {
//   beforeAll(() => {
//     add({
//       title: 'Test Today',
//       completed: 'false',
//       dueDate: new Date().toLocaleDateString('en-CA')
//     })
//   })
//   test('Should add new todo', () => {
//     expect(all.length).toBe(0)
//     add({
//       title: 'Test Today',
//       completed: 'false',
//       dueDate: new Date().toLocaleDateString('en-CA')
//     })
//     expect(all.length).tobe(1)
//   })
//   test('Should Mark As Complete', () => {
//     expect(all[0].completed).toBe(false)
//     markAsComplete(0)
//     expect(all[0].completed).toBe(true)
//   })
// })

/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todolist Test Suite", () => {
  beforeAll(() => {
    var a = new Date();
    a.setDate(a.getDate() - 1);
    var today = new Date().toLocaleDateString("en-CA");
    var yesterday = a.toLocaleDateString("en-CA");
    var a = new Date();
    a.setDate(a.getDate() + 1);
    var tomorrow = a.toLocaleDateString("en-CA");
    add({
      title: "Test todo",
      completed: false,
      dueDate: today ,
    });
    add({
      title: "Test todo",
      completed: false,
      dueDate: yesterday,
    });
    add({
      title: "Test todo",
      completed: false,
      dueDate: tomorrow,
    });
  });
  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });
  test("should mark a todo as completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Should return a list of dueToday items", () => {
    var c = dueToday();
    expect(all[0].title).toBe(c[0].title);
    expect(all[0].dueDate).toBe(c[0].dueDate);
  });
  test("Should return a list of overdue items", () => {
    var c = overdue();
    expect(all[1].title).toBe(c[0].title);
    expect(all[1].dueDate).toBe(c[0].dueDate);
  });
  test("Should return a list of dueLater items", () => {
    var c = dueLater();
    expect(all[2].title).toBe(c[0].title);
    expect(all[2].dueDate).toBe(c[0].dueDate);
  });
});