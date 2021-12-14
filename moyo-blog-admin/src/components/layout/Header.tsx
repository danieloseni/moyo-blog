import React from 'react'
import User1 from 'images/users/user-1.jpg'
import User4 from 'images/users/user-4.jpg'
import LogoSM from 'images/logo-sm.png'
import LogoLight from 'images/logo-light.png'
import LogoDark from 'images/logo-dark.png';

const Header = (props: object) => {
    return (
        <div>
            <div className="navbar-custom">
                <div className="container-fluid">
                    <ul className="list-unstyled topnav-menu float-end mb-0">

                        <li className="d-none d-lg-block">
                            <form className="app-search">
                                <div className="app-search-box">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search..." id="top-search" />
                                        <button className ="btn input-group-text" type ="submit">
                                        <i className ="fe-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </li>

                        <li className="dropdown d-inline-block d-lg-none">
                            <a className="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="fe-search noti-icon"></i>
                            </a>
                            <div className="dropdown-menu dropdown-lg dropdown-menu-end p-0">
                                <form className="p-3">
                                    <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                </form>
                            </div>
                        </li>

                        <li className="dropdown notification-list topbar-dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="fe-bell noti-icon"></i>
                                <span className="badge bg-danger rounded-circle noti-icon-badge">9</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-lg">

                                <div className="dropdown-item noti-title">
                                    <h5 className="m-0">
                                        <span className="float-end">
                                            <a href="" className="text-dark">
                                                <small>Clear All</small>
                                            </a>
                                        </span>Notification
                                    </h5>
                                </div>

                                <div className="noti-scroll" data-simplebar>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item active">
                                        <div className="notify-icon">
                                            <img src={User1} className="img-fluid rounded-circle" alt="" /> </div>
                                        <p className="notify-details">Cristina Pride</p>
                                        <p className="text-muted mb-0 user-msg">
                                            <small>Hi, How are you? What about our next meeting</small>
                                        </p>
                                    </a>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <div className="notify-icon bg-primary">
                                            <i className="mdi mdi-comment-account-outline"></i>
                                        </div>
                                        <p className="notify-details">Caleb Flakelar commented on Admin
                                            <small className="text-muted">1 min ago</small>
                                        </p>
                                    </a>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <div className="notify-icon">
                                            <img src={User4} className="img-fluid rounded-circle" alt="" /> </div>
                                        <p className="notify-details">Karen Robinson</p>
                                        <p className="text-muted mb-0 user-msg">
                                            <small>Wow ! this admin looks good and awesome design</small>
                                        </p>
                                    </a>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <div className="notify-icon bg-warning">
                                            <i className="mdi mdi-account-plus"></i>
                                        </div>
                                        <p className="notify-details">New user registered.
                                            <small className="text-muted">5 hours ago</small>
                                        </p>
                                    </a>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <div className="notify-icon bg-info">
                                            <i className="mdi mdi-comment-account-outline"></i>
                                        </div>
                                        <p className="notify-details">Caleb Flakelar commented on Admin
                                            <small className="text-muted">4 days ago</small>
                                        </p>
                                    </a>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <div className="notify-icon bg-secondary">
                                            <i className="mdi mdi-heart"></i>
                                        </div>
                                        <p className="notify-details">Carlos Crouch liked
                                            <b>Admin</b>
                                            <small className="text-muted">13 days ago</small>
                                        </p>
                                    </a>
                                </div>

                                <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
                                    View all
                                    <i className="fe-arrow-right"></i>
                                </a>

                            </div>
                        </li>

                        <li className="dropdown notification-list topbar-dropdown">
                            <a className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <img src={User1} alt="user-image" className="rounded-circle" />
                                <span className ="pro-user-name ms-1">
                                Nowak <i className ="mdi mdi-chevron-down"></i>
                                </span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
                                <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow m-0">Welcome !</h6>
                                </div>

                                <a href="contacts-profile.html" className="dropdown-item notify-item">
                                    <i className="fe-user"></i>
                                    <span>My Account</span>
                                </a>

                                <a href="auth-lock-screen.html" className="dropdown-item notify-item">
                                    <i className="fe-lock"></i>
                                    <span>Lock Screen</span>
                                </a>

                                <div className="dropdown-divider"></div>

                                <a href="auth-logout.html" className="dropdown-item notify-item">
                                    <i className="fe-log-out"></i>
                                    <span>Logout</span>
                                </a>

                            </div>
                        </li>

                        <li className="dropdown notification-list">
                            <a href="javascript:void(0);" className="nav-link right-bar-toggle waves-effect waves-light">
                                <i className="fe-settings noti-icon"></i>
                            </a>
                        </li>

                    </ul>

                    <div className="logo-box">
                        <a href="index.html" className="logo logo-light text-center">
                            <span className="logo-sm">
                                <img src={LogoSM} alt="" height="22" />
                            </span>
                            <span className="logo-lg">
                                <img src={LogoLight} alt="" height="16" />
                            </span>
                        </a>
                        <a href="index.html" className="logo logo-dark text-center">
                            <span className="logo-sm">
                                <img src={LogoSM} alt="" height="22" />
                            </span>
                            <span className="logo-lg">
                                <img src={LogoLight} alt="" height="16" />
                            </span>
                        </a>
                    </div>

                    <ul className="list-unstyled topnav-menu topnav-menu-left mb-0">

                        <li>
                            {/* <!-- Mobile menu toggle (Horizontal Layout)-->
                            <a className="navbar-toggle nav-link" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                            <!-- End mobile menu toggle--> */}
                        </li>

                    </ul>

                    <div className="clearfix"></div>

                </div>

            </div>

        </div>
    )
}

Header.propTypes = {

}

export default Header
