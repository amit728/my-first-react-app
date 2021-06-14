import React from 'react'
import { useState, useEffect } from 'react'

function Employees() {

    const [emp, setEmp] = useState([]);

    useEffect(() => {
        fetch('https://dummy.restapiexample.com/api/v1/employees').then((data) => {
            data.json().then(result => {
                console.warn('Result', result)
                setEmp(result.data)
            })
        })
    }, [])

    return (
        <div className="container mt-5 text-left">
            <h1>Employees</h1>
            <table className="table mt-4">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {emp.map((item,index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.employee_name}</td>
                            <td>{item.employee_salary}</td>
                            <td>{item.employee_age}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Employees;