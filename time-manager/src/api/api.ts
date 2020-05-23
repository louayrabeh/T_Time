import { URL } from "./config";
async function getAllDocs(
  collection:
    | "users"
    | "employees"
    | "projects"
    | "tasks"
    | "subCategories"
    | "hours"
) {
  const token = localStorage.getItem("auth-token");
  let data;
  await fetch(`${URL}/api/${collection}`, {
    headers: {
      "auth-token": token!,
    },
    mode: "cors",
  })
    .then((res) => res.json())
    .then((docs) => (data = docs));

  return data;
}
async function getDocById(
  collection:
    | "users"
    | "employees"
    | "projects"
    | "tasks"
    | "subCategories"
    | "hours",
  id: String
) {
  const token = localStorage.getItem("auth-token");
  let data;
  await fetch(`${URL}/api/${collection}/${id}`, {
    headers: {
      "auth-token": token!,
    },
    mode: "cors",
  })
    .then((res) => res.json())
    .then((docs) => (data = docs));

  return data;
}
async function addDoc(
  collection: "employees" | "projects" | "tasks" | "subCategories" | "hours",
  body: Object
) {
  const token = localStorage.getItem("auth-token");
  let data;
  await fetch(`${URL}/api/${collection}`, {
    headers: {
      "auth-token": token!,
      "Content-Type": "application/json",
    },
    mode: "cors",
    method: "POST",
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((docs) => (data = docs));

  return data;
}
async function deleteDocById(
  collection:
    | "users"
    | "employees"
    | "projects"
    | "tasks"
    | "subCategories"
    | "hours",
  id: String
) {
  const token = localStorage.getItem("auth-token");
  let data;
  await fetch(`${URL}/api/${collection}/${id}`, {
    headers: {
      "auth-token": token!,
    },
    mode: "cors",
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((docs) => (data = docs));

  return data;
}
async function editDocById(
  collection:
    | "users"
    | "employees"
    | "projects"
    | "tasks"
    | "subCategories"
    | "hours",
  id: String,
  body: JSON
) {
  const token = localStorage.getItem("auth-token");
  let data;
  await fetch(`${URL}/api/${collection}/${id}`, {
    headers: {
      "auth-token": token!,
      "Content-Type": "application/json",
    },
    mode: "cors",
    method: "POST",
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((docs) => (data = docs));

  return data;
}
async function getSubCategoriesByProject(projectID: String) {
  const token = localStorage.getItem("auth-token");
  let data;
  await fetch(`${URL}/api/subCategories/project/${projectID}`, {
    headers: {
      "auth-token": token!,
    },
    mode: "cors",
  })
    .then((res) => res.json())
    .then((docs) => (data = docs));

  return data;
}
async function getTasksBySubCategory(scID: String) {
  const token = localStorage.getItem("auth-token");
  let data;
  await fetch(`${URL}/api/tasks/sc/${scID}`, {
    headers: {
      "auth-token": token!,
    },
    mode: "cors",
  })
    .then((res) => res.json())
    .then((docs) => (data = docs));

  return data;
}
async function getTasksByProject(projectId: String) {
  const token = localStorage.getItem("auth-token");
  let data;
  await fetch(`${URL}/api/tasks/project/${projectId}`, {
    headers: {
      "auth-token": token!,
    },
    mode: "cors",
  })
    .then((res) => res.json())
    .then((docs) => (data = docs));

  return data;
}
async function getTasksByEmployee(id: String) {
  const token = localStorage.getItem("auth-token");
  let data;
  await fetch(`${URL}/api/tasks/employee/${id}`, {
    headers: {
      "auth-token": token!,
    },
    mode: "cors",
  })
    .then((res) => res.json())
    .then((docs) => (data = docs));

  return data;
}
async function getHoursByTask(id: String) {
  const token = localStorage.getItem("auth-token");
  let data;
  await fetch(`${URL}/api/hours/task/${id}`, {
    headers: {
      "auth-token": token!,
    },
    mode: "cors",
  })
    .then((res) => res.json())
    .then((docs) => (data = docs));

  return data;
}
async function getHoursByEmployee(id: String) {
  const token = localStorage.getItem("auth-token");
  let data;
  await fetch(`${URL}/api/hours/employee/${id}`, {
    headers: {
      "auth-token": token!,
    },
    mode: "cors",
  })
    .then((res) => res.json())
    .then((docs) => (data = docs));

  return data;
}
async function getUserAccountByEmployee(employeeId) {
  const empRes = await getDocById("employees", employeeId);
  const emp = empRes.results;
  const userRes = await getDocById("users", emp.userAccountId);
  const ret = {
    success: true,
    user: userRes.results,
  };
  return ret;
}
async function addEmployeeToProject(empID, projectID) {
  const projRes = await getDocById("projects", projectID);
  const empRes = await getDocById("employees", empID);
  const project = projRes.results;
  const employee = empRes.results;
  const { employees } = project;
  const { projects } = employee;
  const updatedProject = {
    ...project,
    employees: [...employees, employee._id],
  };
  const updatedEmployee = { ...employee, projects: [...projects, project._id] };
  const res1 = await editDocById("employees", employee._id, updatedEmployee);
  const res2 = await editDocById("projects", project._id, updatedProject);
  const ret = {
    success: true,
    project: res2.results,
    employee: res1.results,
  };
  return ret;
}
async function addSubCategoryToProject(projectID: String, body: Object) {
  const projRes = await getDocById("projects", projectID);
  const project = projRes.results;
  if (project) {
    const scBody = { ...body, projectId: project._id };
    const sc = await addDoc("subCategories", scBody);
    const ret = {
      success: true,
      subCategory: sc.results,
    };
    return ret;
  }
  const ret = {
    success: false,
    subCategory: null,
  };
  return ret;
}
async function addEmployeeToSubCategory(empID, scId) {
  const scRes = await getDocById("subCategories", scId);
  const empRes = await getDocById("employees", empID);
  const sc = scRes.results;
  const employee = empRes.results;
  if (sc && employee) {
    const { employees } = sc;
    const updatedSc = { ...sc, employees: [...employees, employee._id] };
    const res1 = await editDocById("subCategories", sc._id, updatedSc);
    const ret = {
      success: true,
      subCategory: res1.results,
      employee: employee,
    };
    return ret;
  }
  const ret = {
    success: false,
  };
  return ret;
}
async function addTaskToSubCategory(scId, data) {
  const scRes = await getDocById("subCategories", scId);
  const sc = scRes.results;
  const updatedTask = {
    ...data,
    projectId: sc.projectId,
    subCategoryId: sc._id,
  };
  const res2 = await addDoc("tasks", updatedTask);
  const ret = {
    success: true,
    task: res2.results,
  };
  return ret;
}
async function affectTaskToEmployee(empId, taskId) {
  const empRes = await getDocById("employees", empId);
  const taskRes = await getDocById("tasks", taskId);
  const emp = empRes.results;
  const task = taskRes.results;
  if (!emp) {
    const ret = {
      success: false,
      message: "employee doesn't exist",
    };
    return ret;
  }
  if (!task) {
    const ret = {
      success: false,
      message: "task doesn't exist",
    };
    return ret;
  }
  const updatedTask = {
    ...task,
    employeeId: emp._id,
  };
  const res2 = await editDocById("tasks", task._id, updatedTask);
  const ret = {
    success: true,
    task: res2.results,
  };
  return ret;
}
async function addHourToEmployee(scId, taskId, empId, startDate, endDate) {
  const scRes = await getDocById("subCategories", scId);
  const empRes = await getDocById("employees", empId);
  const taskRes = await getDocById("tasks", taskId);
  const sc = scRes.results;
  const employee = empRes.results;
  const task = taskRes.results;
  if (!sc) {
    const ret = {
      success: false,
      message: "sub category doesn't exist",
    };
    return ret;
  }
  if (!employee) {
    const ret = {
      success: false,
      message: "employee doesn't exist",
    };
    return ret;
  }
  if (!task) {
    const ret = {
      success: false,
      message: "task doesn't exist",
    };
    return ret;
  }
  const { hours } = sc;
  const body = {
    projectId: sc.projectId,
    taskId: taskId,
    startDate: startDate,
    doneDate: endDate,
    employeeId: empId,
  };
  const hour = await addDoc("hours", body);
  const updatedEmployee = {
    ...employee,
    hours: [...hours, hour],
  };
  const updatedSc = { ...sc, hours: [...hours, hour._id] };
  const res1 = await editDocById("subCategories", sc._id, updatedSc);
  const res2 = await editDocById("employees", employee._id, updatedEmployee);
  const ret = {
    success: true,
    subCategory: res1.results,
    employee: res2.results,
  };
  return ret;
}
async function makeUserEmployee(userId: String, position: String , role : String) {
  const userRes = await getDocById("users", userId);
  const user = userRes.results;
  if (!user) {
    const ret = {
      success: false,
      message: "user doesn't exist",
    };
    return ret;
  }
  const { firstName, lastName, _id } = user;
  const body = {
    firstName: firstName,
    lastName: lastName,
    userAccountId: _id,
    position: position,
    role : role 
  };
  const res1 = await addDoc("employees", body);
  const userBod = { ...user, employeeAccountId: res1.results._id , employeeRole : role  };
  const res2 = await editDocById("users", _id, userBod);
  const ret = { success: true, user: res2.results, employee: res1.results };
  return ret;
}
async function login(email: String, password: String) {
  let response;
  let body = { email, password };
  await fetch(`${URL}/login`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => (response = data));

  localStorage.setItem("auth-token", response.token);
  return response;
}
async function register(data: Object) {
  const response = await fetch(`${URL}/register`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export {
  getAllDocs,
  login,
  register,
  getDocById,
  addDoc,
  deleteDocById,
  editDocById,
  addEmployeeToProject,
  addSubCategoryToProject,
  addEmployeeToSubCategory,
  addTaskToSubCategory,
  makeUserEmployee,
  addHourToEmployee,
  affectTaskToEmployee,
  getSubCategoriesByProject,
  getTasksBySubCategory,
  getTasksByEmployee,
  getTasksByProject,
  getHoursByEmployee,
  getHoursByTask,
  getUserAccountByEmployee,
};
