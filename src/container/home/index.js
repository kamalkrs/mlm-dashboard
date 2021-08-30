import React from 'react'
import Dashboard from '..'

export default function Home() {
    return (
        <Dashboard>
            <div className="bg-danger p-2 mb-3 text-white">
                This is a simple wrapper to show you alerts !!
            </div>
            <div className="row">
                <div className="col-sm-7">
                    <div className="row g-1 row-xs text-center text-white">
                        <div className="col-6 col-sm-6 col-md-4">
                            <div className="box border p-3 bg-info">
                                <div className="box-p">
                                    <h6>Direct Team</h6>
                                    2 / 0
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <div className="box border p-3 bg-info">
                                <div className="box-p">
                                    <h6>My Team</h6>
                                    4/0
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <div className="box border p-3 bg-info">
                                <div className="box-p">
                                    <h6>Total Team</h6>
                                    4
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <div className="box border p-3 bg-info">
                                <div className="box-p">
                                    <h6>Sponsor Income</h6>
                                    Rs 0
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <div className="box border p-3 bg-info">
                                <div className="box-p">
                                    <h6>Matching Income</h6>
                                    Rs 0
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <div className="box border p-3 bg-info">
                                <div className="box-p">
                                    <h6>Reward Income</h6>
                                    Rs 0
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <div className="box border p-3 bg-info">
                                <div className="box-p">
                                    <h6>Total Income</h6>
                                    Rs 0
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <div className="box border p-3 bg-info">
                                <div className="box-p">
                                    <h6>Wallet Balance</h6>
                                    <i className="fa fa-inr"></i> 0
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <div className="box border p-3 bg-info">
                                <div className="box-p">
                                    <h6>Upgrade Account</h6>
                                    <a href="http://localhost/mlmpanel/dashboard/upgrade" className="btn btn-outline-light btn-xs">Upgrade Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-sm-5">
                    <div className="bg-white">
                        <div className="d-flex align-items-center">
                            <div className="p-2">
                                <img width="100" className="img-circle mb-3" src="http://localhost/mlmpanel/ai-content/uploads/koo.png" title="Digital" />
                            </div>
                            <div>
                                <h2 className="h4">Digital Power</h2>
                                <h6>Reward Rank: <span className="badge badge-info">Distributor</span></h6>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>ID No</td>
                                <td>DP0001</td>
                            </tr>
                            <tr>
                                <td>Mobile No</td>
                                <td>7004903289</td>
                            </tr>
                            <tr>
                                <td>My Total Team</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Date of Joining</td>
                                <td>27th Feb, 2021</td>
                            </tr>
                            <tr>
                                <td>KYC Status</td>
                                <td><span className="badge badge-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>Package Amount</td>
                                <td>Rs 999</td>
                            </tr>
                            <tr>
                                <td>Daily Capping </td>
                                <td>Rs 1200</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>GIRIDIH</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Dashboard>
    )
}
