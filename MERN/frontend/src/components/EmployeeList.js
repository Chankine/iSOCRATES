import React, { useEffect, useState } from "react";
import axios from "axios";
export default function EmployeeList() {
  const [userForm, setUserForm] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/employee/")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);

  const deleteEmployee = (_id) => {
    axios
      .delete("http://localhost:4000/employee/delete-emp/" + _id)
      .then(() => {
        console.log("Employee Deleted Sucessfully");
      })
      .catch((error) => {
        console.log(error);
      })
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Email ID</th>
            <th scope="col">Emp ID</th>
          </tr>
        </thead>
              <tbody>
                  {userForm.map((user, index) => {
                      return (
                          <tr key={index}>
                              <th scope="row"></th>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.empId}</td>
                          <td><button onClick={()=>deleteEmployee(user._id)}>Delete</button></td>
                        </tr>
                      );
                  })}
        </tbody>
      </table>
    </>
  );
}
