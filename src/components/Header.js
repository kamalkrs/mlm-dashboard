import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <h5>Welcome to ABS-BW Secure Admin Panel</h5>
            <Link to="/add-new" className="btn btn-sm btn-primary" title="Add New">Add New</Link>
        </div>
    )
}
