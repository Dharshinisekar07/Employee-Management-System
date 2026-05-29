import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../Services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const { id } = useParams();

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email)
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    function saveorUpdateEmployee(e) {
        e.preventDefault();
        if (validateForm()) {
            const employee = { firstName, lastName, email }
            if (id) {
                updateEmployee(id, employee).then(() => {
                    navigator('/employees');
                }).catch(error => console.error(error))
            } else {
                createEmployee(employee).then(() => {
                    navigator('/employees')
                }).catch(error => console.error(error))
            }
        }
    }

    function validateForm() {
        let valid = true;
        const errorscopy = { ...errors }

        if (firstName.trim()) {
            errorscopy.firstName = '';
        } else {
            errorscopy.firstName = 'First name is required';
            valid = false;
        }

        if (lastName.trim()) {
            errorscopy.lastName = '';
        } else {
            errorscopy.lastName = 'Last name is required';
            valid = false;
        }

        if (email.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(email)) {
                errorscopy.email = '';
            } else {
                errorscopy.email = 'Enter a valid email (e.g. user@gmail.com)';
                valid = false;
            }
        } else {
            errorscopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorscopy);
        return valid;
    }

    const isEdit = !!id;

    return (
        <main className='ems-main'>
            <div className='ems-form-wrap'>
                <div className='ems-form-card'>

                    {/* Form Header */}
                    <div className='ems-form-header'>
                        <div className='ems-form-icon'>
                            {isEdit ? '✏️' : '👤'}
                        </div>
                        <h2 className='ems-form-title'>
                            {isEdit ? 'Update Employee' : 'Add New Employee'}
                        </h2>
                        <p className='ems-form-desc'>
                            {isEdit
                                ? 'Edit the details below and save your changes'
                                : 'Fill in the details below to add a new team member'}
                        </p>
                    </div>

                    {/* Form Body */}
                    <div className='ems-form-body'>

                        <div className='ems-field'>
                            <label className='ems-label'>First Name</label>
                            <input
                                type='text'
                                placeholder='Enter first name'
                                value={firstName}
                                className={`ems-input ${errors.firstName ? 'is-invalid' : ''}`}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {errors.firstName &&
                                <div className='ems-error'>⚠ {errors.firstName}</div>}
                        </div>

                        <div className='ems-field'>
                            <label className='ems-label'>Last Name</label>
                            <input
                                type='text'
                                placeholder='Enter last name'
                                value={lastName}
                                className={`ems-input ${errors.lastName ? 'is-invalid' : ''}`}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {errors.lastName &&
                                <div className='ems-error'>⚠ {errors.lastName}</div>}
                        </div>

                        <div className='ems-field'>
                            <label className='ems-label'>Email Address</label>
                            <input
                                type='text'
                                placeholder='Enter email address'
                                value={email}
                                className={`ems-input ${errors.email ? 'is-invalid' : ''}`}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email &&
                                <div className='ems-error'>⚠ {errors.email}</div>}
                        </div>

                        <button
                            className='ems-btn ems-btn-success'
                            onClick={saveorUpdateEmployee}>
                            {isEdit ? '💾 Save Changes' : '✅ Add Employee'}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default EmployeeComponent