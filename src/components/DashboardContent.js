import React from "react";
import Header from "./shared/Header";

function DashboardContent() {
    return(
        <div id="content" className="flex-grow-1 d-flex flex-column content">
            <Header />
            <div className="flex-grow-1 p-4">
                <div className="row g-3 mb-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="card p-4 rounded shadow hover:shadow-xl transition-shadow duration-300">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="h5 font-weight-bold text-dark">Total Sales</h2>
                                    <p className="text-muted">Monthly Overview</p>
                                </div>
                                <div className="text-primary display-4">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card p-4 rounded shadow hover:shadow-xl transition-shadow duration-300">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="h5 font-weight-bold text-dark">New Users</h2>
                                    <p className="text-muted">Monthly Overview</p>
                                </div>
                                <div className="text-success display-4">
                                    <i className="fas fa-user-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card p-4 rounded shadow hover:shadow-xl transition-shadow duration-300">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="h5 font-weight-bold text-dark">Active Projects</h2>
                                    <p className="text-muted">Current Status</p>
                                </div>
                                <div className="text-warning display-4">
                                    <i className="fas fa-tasks"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card p-4 rounded shadow hover:shadow-xl transition-shadow duration-300">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="h5 font-weight-bold text-dark">Support Tickets</h2>
                                    <p className="text-muted">Monthly Overview</p>
                                </div>
                                <div className="text-danger display-4">
                                    <i className="fas fa-life-ring"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card p-4 rounded shadow hover:shadow-xl transition-shadow duration-300">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="h5 font-weight-bold text-dark">Revenue</h2>
                                    <p className="text-muted">Monthly Overview</p>
                                </div>
                                <div className="text-purple display-4">
                                    <i className="fas fa-dollar-sign"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card p-4 rounded shadow hover:shadow-xl transition-shadow duration-300">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="h5 font-weight-bold text-dark">Completed Tasks</h2>
                                    <p className="text-muted">Monthly Overview</p>
                                </div>
                                <div className="text-teal display-4">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-lg-8">
                        <div className="bg-white p-3 rounded shadow chart_box">
                            <h2 className="fs-5 fw-semibold mb-3">Monthly Progress Report</h2>
                            <img src="https://storage.googleapis.com/a1aa/image/DJmhlKF9helSpA4Kz0vugKUISWad6ofO82rmsC01wl4.jpg"
                                alt="Monthly Progress Report Chart" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="bg-white p-3 rounded shadow">
                            <h2 className="fs-5 fw-semibold mb-3">Today's Report</h2>
                            <div className="text-secondary">
                                <p className="mb-2">Today's Report: <span className="float-end">TK</span></p>
                                <p className="mb-2">Total Sales: <span className="float-end">$0.00</span></p>
                                <p>Total Purchase: <span className="float-end">$0.00</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardContent;