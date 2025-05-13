import axios from "axios";

const Rest_API_Base_URL = 'http://localhost:8082/api/employees';

export const listEmployees = () => axios.get(Rest_API_Base_URL);


export const createEmployee = (employee) => axios.post(Rest_API_Base_URL, employee);

export const updateEmployee = (employeeId, employee) =>axios.put(Rest_API_Base_URL + '/' + employeeId, employee);
export const deleteEmployee = (employeeId) =>axios.delete(Rest_API_Base_URL + '/' + employeeId);
