/* eslint-disable no-undef */
const todoList = () => {
  const formattedDate = d => {
    return d.toISOString().split('T')[0]
  }
  const dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  const all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    const a = []
    all.map((val) => {
      if (val.dueDate === yesterday) {
        a.push(val)
      }
      return a
    })
    return a
  }

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    const a = []
    all.map((val) => {
      if (val.dueDate === today) {
        a.push(val)
      }
      return a
    })
    return a
  }

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    const a = []
    all.map((val) => {
      if (val.dueDate === tomorrow) {
        a.push(val)
      }
      return a
    })
    return a
  }
  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING
    let s = "";
    for (let i = 0; i < list.length; i++) {
      if (list[i].completed == true) {
        s = s + "[" + "x] ";
      } else {
        s = s + "[ " + "] ";
      }
      const a = formattedDate(dateToday);
      const b = formattedDate(
        new Date(new Date().setDate(dateToday.getDate() + 1))
      );
      if (list[i].dueDate == a) {
        s = s + list[i].title + " " + "\n";
      } else {
        if (i == list.length - 1 && b == list[i].dueDate) {
          s = s + list[i].title + ". " + list[i].dueDate + "\n";
        } else {
          s = s + list[i].title + " " + list[i].dueDate + "\n";
        }
      }
    }
    return s;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports = todoList;