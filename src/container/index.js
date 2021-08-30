import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'

export default function Dashboard(props) {
    return (
        <div className="app">
            <div className="sidebar">
                <Menu />
            </div>
            <div className="mainarea">
                <Header />
                <div className="content">
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
    )
}
