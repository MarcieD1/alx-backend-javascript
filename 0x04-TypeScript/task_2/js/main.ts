interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
}
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

interface Employee {
  firstName: string;
  lastName: string;
}

interface Director extends Employee {
  workDirectorTasks(): string;
}

interface Teacher extends Employee {
  workTeacherTasks(): string;
}

function isDirector(employee: Employee): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    console.log('Getting to director tasks');
  } else {
    console.log('Getting to work');
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return {
      firstName: 'Teacher',
      lastName: 'Employee',
      workTeacherTasks() {
        return 'Getting to work';
      }
    };
  } else {
    return {
      firstName: 'Director',
      lastName: 'Employee',
      workDirectorTasks() {
        return 'Getting to director tasks';
      }
    };
  }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    return 'Invalid Subject';
  }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
