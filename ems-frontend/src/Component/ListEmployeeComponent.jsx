import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
    const [search, setSearch] = useState('')

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/update-employee/${id}`)
    }

    function removeEmployee(id) {
        deleteEmployee(id).then(() => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }

    const filteredEmployees = employees.filter(emp =>
        emp.firstName.toLowerCase().includes(search.toLowerCase()) ||
        emp.lastName.toLowerCase().includes(search.toLowerCase()) ||
        emp.email.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <main className='ems-main'>

            {/* Page Header */}
            <div className='ems-page-header'>
                <h1 className='ems-page-title'>Employees</h1>
                <p className='ems-page-subtitle'>Manage your team members</p>
            </div>

            {/* Stats */}
            <div className='ems-stats'>
                <div className='ems-stat-card'>
                    <div className='ems-stat-label'>Total Employees</div>
                    <div className='ems-stat-value'>{employees.length}</div>
                </div>
                <div className='ems-stat-card'>
                    <div className='ems-stat-label'>Search Results</div>
                    <div className='ems-stat-value'>{filteredEmployees.length}</div>
                </div>
            </div>

            {/* Toolbar */}
            <div className='ems-toolbar'>
                <button className='ems-btn ems-btn-primary' onClick={addNewEmployee}>
                    ＋ Add Employee
                </button>

                <div className='ems-search-wrap'>
                    <span className='ems-search-icon'>🔍</span>
                    <input
                        type='text'
                        className='ems-search'
                        placeholder='Search by name or email...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Table */}
            <div className='ems-card'>
                <table className='ems-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployees.length > 0 ? (
                            filteredEmployees.map(employee =>
                                <tr key={employee.id}>
                                    <td>
                                        <span className='ems-id-badge'>#{employee.id}</span>
                                    </td>
                                    <td className='ems-name'>{employee.firstName}</td>
                                    <td className='ems-name'>{employee.lastName}</td>
                                    <td className='ems-email'>{employee.email}</td>
                                    <td>
                                        <div className='ems-actions'>
                                            <button
                                                className='ems-btn ems-btn-edit'
                                                onClick={() => updateEmployee(employee.id)}>
                                                ✏️ Edit
                                            </button>
                                            <button
                                                className='ems-btn ems-btn-delete'
                                                onClick={() => removeEmployee(employee.id)}>
                                                🗑 Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        ) : (
                            <tr>
                                <td colSpan='5'>
                                    <div className='ems-empty'>
                                        <div className='ems-empty-icon'>🔍</div>
                                        <p>No employees found matching "<strong>{search}</strong>"</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ListEmployeeComponent