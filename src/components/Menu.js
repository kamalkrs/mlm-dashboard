import React from 'react'

export default function Menu() {

    const expandMe = (id) => {
        let em = document.querySelector(id);
        let menus = document.querySelectorAll(".ddmenu");
        for (let i = 0; i < menus.length; i++) {
            menus[i].style.display = "none";
        }
        em.style.display = "block";
    }
    return (
        <div className="menu-wrapper">
            <div className="account-box">
                <div className="account-pic">
                    <img src="https://picsum.photos/60/60" />
                </div>
                <div className="account-details">
                    <h6 className="p-0 m-0">Kamal Kumar</h6>
                    <div className="text-muted">BW-0012</div>
                </div>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <a href="/">
                        <i className="mdi mdi-home-account"></i>
                        <span> Dashboard </span>
                    </a>
                </li>
                <li onClick={() => expandMe('#profile')} className="sub-menu">
                    <a href="#settings">
                        <i className="mdi mdi-account-tie"></i>
                        Profile<span className="mdi mdi-chevron-down float-end"></span>
                    </a>
                    <ul className="ddmenu" id="profile">
                        <li><a href="#">Edit Profile</a></li>
                        <li><a href="#">Change Password</a></li>
                        <li><a target="_blank" href="#">Welcome Letter</a></li>
                        <li><a target="_blank" href="#">ID Card</a></li>
                        <li><a href="#">KYC Edit</a></li>
                    </ul>
                </li>
                <li className="sub-menu" onClick={() => expandMe('#team')} ><a href="#message">
                    <i className="mdi mdi-sitemap"></i>
                    Team<span className="mdi mdi-chevron-down float-end"></span></a>
                    <ul className="ddmenu" id="team">
                        <li><a href="#">My Direct Members</a></li>
                        <li><a href="#">Member Tree </a></li>
                    </ul>
                </li>
                <li className="sub-menu" onClick={() => expandMe('#transaction')}><a href="#message">
                    <i className="mdi mdi-bank"></i>
                    Income Report<span className="mdi mdi-chevron-down float-end"></span></a>
                    <ul className="ddmenu" id="transaction">
                        <li><a href="http://localhost/mlmpanel/dashboard/income/level">Level Income</a></li>
                        <li><a href="http://localhost/mlmpanel/dashboard/payment-history">Transaction History</a></li>
                        <li><a href="http://localhost/mlmpanel/dashboard/wallet-history">Wallet History</a></li>
                        <li><a href="http://localhost/mlmpanel/dashboard/fund-transfer-history">Fund Transfer History</a></li>
                    </ul>
                </li>

                <li className="sub-menu" onClick={() => expandMe('#withdraw')}><a href="#message">
                    <i className="mdi mdi-cash"></i>
                    Payout Report<span className="mdi mdi-chevron-down float-end"></span></a>
                    <ul className="ddmenu" id="withdraw">
                        <li><a href="http://localhost/mlmpanel/dashboard/withdraw">Withdraw Request</a></li>
                        <li><a href="http://localhost/mlmpanel/dashboard/withdraw-history">Withdraw History</a></li>
                        <li><a href="http://localhost/mlmpanel/dashboard/binary-matching">Binary Matching</a></li>
                    </ul>
                </li>
                <li>
                    <a href="http://localhost/mlmpanel/dashboard/rewards"> <i className="mdi mdi-gift-outline"></i> Rewards</a>
                </li>
                <li> <a href="http://localhost/mlmpanel/logout"> <i className="mdi mdi-power-off"></i> Logout </a>
                </li>
            </ul>
        </div>
    )
}
