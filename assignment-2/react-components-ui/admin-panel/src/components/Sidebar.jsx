const Sidebar = () => {
    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" href="/">
                    <span>AdminKit</span>
                </a>

                <ul className="sidebar-nav">
                    <li className="sidebar-header">Pages</li>

                    <li className="sidebar-item active">
                        <a className="sidebar-link" href="/">
                            <i className="align-middle" data-feather="sliders"></i> <span>Dashboard</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="pages-profile.html">
                            <i className="align-middle" data-feather="user"></i> <span>Profile</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="pages-sign-in.html">
                            <i className="align-middle" data-feather="log-in"></i> <span>Sign In</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="pages-sign-up.html">
                            <i className="align-middle" data-feather="user-plus"></i> <span>Sign Up</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="pages-blank.html">
                            <i className="align-middle" data-feather="book"></i> <span>Blank</span>
                        </a>
                    </li>

                    <li className="sidebar-header">Tools & Components</li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-buttons.html">
                            <i className="align-middle" data-feather="square"></i> <span>Buttons</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-forms.html">
                            <i className="align-middle" data-feather="check-square"></i> <span>Forms</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-cards.html">
                            <i className="align-middle" data-feather="grid"></i> <span>Cards</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-typography.html">
                            <i className="align-middle" data-feather="align-left"></i> <span>Typography</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="icons-feather.html">
                            <i className="align-middle" data-feather="coffee"></i> <span>Icons</span>
                        </a>
                    </li>

                    <li className="sidebar-header">Plugins & Addons</li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="charts-chartjs.html">
                            <i className="align-middle" data-feather="bar-chart-2"></i> <span>Charts</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="maps-google.html">
                            <i className="align-middle" data-feather="map"></i> <span>Maps</span>
                        </a>
                    </li>
                </ul>

                <div className="sidebar-cta">
                    <div className="sidebar-cta-content">
                        <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
                        <div className="mb-3 text-sm">
                            Are you looking for more components? Check out our premium version.
                        </div>
                        <div className="d-grid">
                            <a href="upgrade-to-pro.html" className="btn btn-primary">Upgrade to Pro</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
