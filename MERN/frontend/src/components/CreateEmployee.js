import  axios  from 'axios'
import { React, useEffect, useState } from 'react'
export default function CreateEmployee() { 
    const [userForm, setUserForm] = useState({
      name: "",
      email: "",
      empId: "",
    });

    const inputHandler = (e) => {
        setUserForm((prevNext) => ({
            ...prevNext,
          [e.target.name]:e.target.value,
      }));
    }; 
    
    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:4000/employee/add-emp", userForm)
            .then((res) => {
                console.log(res.data);
                setUserForm({
                    name: "",
                    email: "",
                    empId: "",
                })
            })
            .catch((error) => {
                console.log(error)
            });
};

    useEffect(() => { }, []);
    return (     
            <form onSubmit={onSubmit}>
                <input
                    placeholder="Enter Name"
                    type="text" 
                    name="name"
                    id="name"
                    value={userForm.name}
                    onChange={inputHandler}
                />
                <input
                    placeholder="Enter Email ID"
                    type="text" 
                    name="email"
                    id="email"
                    value={userForm.email}
                    onChange={inputHandler}
                />
                <input
                    placeholder="Enter Emp ID"
                    type="text" 
                    name="empId"
                    id="empId"
                    value={userForm.empId}
                    onChange={inputHandler}
                />

                <div>
                    <button type="submit">Add Employee</button>
                </div>
            </form>
    )
}