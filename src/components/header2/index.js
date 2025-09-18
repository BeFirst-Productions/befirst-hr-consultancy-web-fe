import React, { Component } from 'react'
import Logo from '../../images/Befirst-Logos0.jpg'
// import Logo from '../../images/Befirst-latest-logo-2.svg'

import { Link } from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'
import HeaderTopbar from '../../components/HeaderTopbar'
import ConsultingModal from '../Modal'
import { getSearchSuggestions } from '../data/dummyServiceSearch'

export default class Header2 extends Component {

    state = {
        isSearchShow: false,
        isConsultingModalOpen: false,
        searchQuery: '',
        searchSuggestions: [],
        showSuggestions: false,
    }

    // Services data array
    services = [
        { path: "/service/hr-operations-&-administration", label: "HR Operations & Administration" },
        { path: "/service/hr-planning-&-organization", label: "HR Planning & Organization" },
        { path: "/service/learning-&-development", label: "Learning & Development" },
        { path: "/service/payroll-&-compensation", label: "Payroll & Compensation" },
        { path: "/service/recruitment-assistance", label: "Recruitment Assistance" },
        { path: "/service/quality-assurance-&-compliance", label: "Quality Assurance & Compliance" },
        { path: "/service/talent-acquisition-&-Onboarding", label: "Talent Acquisition & Onboarding" },
        { path: "/service/hr-policy-&-procedure", label: "HR Policy & Procedure" },
        { path: "/service/staff-appraisal-system", label: "Staff Appraisal System" },
        { path: "/service/traing-&-development", label: "Training & Development" },
        { path: "/service/customer-care-orientation", label: "Customer Care Orientation" }
    ]

    searchHandler = () => {
        this.setState({
            isSearchShow: !this.state.isSearchShow,
            searchQuery: '',
            searchSuggestions: [],
            showSuggestions: false,
        })
    }

    toggleConsultingModal = () => {
        this.setState({
            isConsultingModalOpen: !this.state.isConsultingModalOpen
        })
    }

    // Handle search input change
    handleSearchInputChange = (e) => {
        const query = e.target.value;
        this.setState({ searchQuery: query });

        if (query.trim().length > 1) {
            const suggestions = getSearchSuggestions(query, 5);
            this.setState({
                searchSuggestions: suggestions,
                showSuggestions: true
            });
        } else {
            this.setState({
                searchSuggestions: [],
                showSuggestions: false
            });
        }
    }

    // Handle search form submission
    handleSearchSubmit = (e) => {
        e.preventDefault();
        if (this.state.searchQuery.trim()) {
            const suggestions = getSearchSuggestions(this.state.searchQuery, 1);
            if (suggestions.length > 0) {
                this.props.history?.push(suggestions[0].route) || (window.location.href = suggestions[0].route);
            }
        }
    }

    // Handle suggestion click - Fixed version
    handleSuggestionClick = (route) => {
        this.setState({
            showSuggestions: false,
            searchQuery: '',
            searchSuggestions: [],
        }, () => {
            if (this.props.history) {
                this.props.history.push(route);
            } else {
                window.location.href = route;
            }
        });
    }

    // Handle clicking outside to close suggestions - Fixed version
    handleSearchBlur = () => {
        setTimeout(() => {
            this.setState({
                showSuggestions: false
            });
        }, 300);
    }

    // Add mouse down handler to prevent blur from firing before click
    handleSuggestionMouseDown = (e) => {
        e.preventDefault();
    }

    render() {
        const { isSearchShow, isConsultingModalOpen, searchQuery, searchSuggestions, showSuggestions } = this.state;

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }

        return (
            <>
                <header id="header">
                    <HeaderTopbar />
                    <div className="wpo-site-header">
                        <nav className="navigation navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                        <div className="mobail-menu">
                                            <MobileMenu />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-6">
                                        <div className="navbar-header">
                                            <Link onClick={ClickHandler} className="navbar-brand" to="/">
                                                <img src={Logo} alt="BeFirst-logo" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-1 col-1">
                                        <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                            <button className="menu-close"><i className="ti-close"></i></button>
                                            <ul className="nav navbar-nav mb-2 mb-lg-0">
                                                <li >
                                                    <Link onClick={ClickHandler} to="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link onClick={ClickHandler} to="/about">
                                                        About Us
                                                    </Link>
                                                    <ul className="sub-menu premium-services-menu">
                                                        <li><Link onClick={ClickHandler} to="/about">Who We Are</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/about/founders-vision">Founder's Vision</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/about/mission-&-values">Our Mission & Values</Link></li>
                                                    </ul>
                                                </li>

                                                <li className="menu-item-has-children premium-dropdown">
                                                    <Link onClick={ClickHandler} to="#">
                                                        Services
                                                    </Link>
                                                    <ul className="sub-menu premium-services-menu">
                                                        {this.services.map((service, index) => (
                                                            <li key={index}>
                                                                <Link onClick={ClickHandler} to={service.path}>
                                                                    <i className="fi flaticon-next"></i>
                                                                    {service.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li >
                                                    <Link onClick={ClickHandler} to="/blogs">Articles</Link>
                                                </li>
                                                <li >
                                                    <Link onClick={ClickHandler} to="/faqs">FAQs</Link>
                                                </li>
                                                <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-2 col-2">
                                        <div className="header-right">
                                            <div className="close-form">
                                                <button
                                                    onClick={this.toggleConsultingModal}
                                                    className="theme-btn"
                                                    type="button"
                                                    style={{
                                                        opacity: '1 !important',
                                                        visibility: 'visible !important',
                                                        display: 'inline-block !important',
                                                        backgroundColor: '#304FE9',
                                                        color: 'white',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        textDecoration: 'none'
                                                    }}
                                                >
                                                    Free Consultation                                                </button>
                                            </div>
                                            <div className="header-search-form-wrapper">
                                                <div className="cart-search-contact">
                                                    <button onClick={this.searchHandler} className="search-toggle-btn">
                                                        <i className={`${isSearchShow ? 'ti-close' : 'ti-search'}`}></i>
                                                    </button>
                                                    <div className={`header-search-form ${isSearchShow ? 'header-search-content-toggle' : ''}`}>
                                                        <form onSubmit={this.handleSearchSubmit}>
                                                            <div style={{ position: 'relative' }}>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Search "
                                                                    value={searchQuery}
                                                                    onChange={this.handleSearchInputChange}
                                                                    onBlur={this.handleSearchBlur}
                                                                    onFocus={() => {
                                                                        if (searchQuery.trim().length > 1) {
                                                                            this.setState({ showSuggestions: true });
                                                                        }
                                                                    }}
                                                                />
                                                                <button type="submit">
                                                                    <i className="fi flaticon-magnifiying-glass"></i>
                                                                </button>

                                                                {/* Search Suggestions Dropdown - Fixed version */}
                                                                {showSuggestions && searchSuggestions.length > 0 && (
                                                                    <div
                                                                        className="search-suggestions-dropdown"
                                                                        style={{
                                                                            position: 'absolute',
                                                                            top: '100%',
                                                                            left: 0,
                                                                            right: 0,
                                                                            backgroundColor: '#fff',
                                                                            border: '1px solid #e0e0e0',
                                                                            borderTop: 'none',
                                                                            borderRadius: '0 0 6px 6px',
                                                                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                                                            zIndex: 1000,
                                                                            maxHeight: '300px',
                                                                            overflowY: 'auto'
                                                                        }}
                                                                    >
                                                                        {searchSuggestions.map((suggestion) => (
                                                                            <div
                                                                                key={suggestion.id}
                                                                                className="search-suggestion-item"
                                                                                onMouseDown={this.handleSuggestionMouseDown}
                                                                                onClick={() => this.handleSuggestionClick(suggestion.route)}
                                                                                style={{
                                                                                    padding: '12px 15px',
                                                                                    borderBottom: '1px solid #f5f5f5',
                                                                                    cursor: 'pointer',
                                                                                    transition: 'background-color 0.2s ease'
                                                                                }}
                                                                                onMouseEnter={(e) => {
                                                                                    e.target.style.backgroundColor = '#f8f9fa';
                                                                                }}
                                                                                onMouseLeave={(e) => {
                                                                                    e.target.style.backgroundColor = '#fff';
                                                                                }}
                                                                            >
                                                                                <div
                                                                                    style={{
                                                                                        fontWeight: '600',
                                                                                        color: '#333',
                                                                                        fontSize: '14px',
                                                                                        marginBottom: '4px',
                                                                                        pointerEvents: 'none'
                                                                                    }}
                                                                                >
                                                                                    {suggestion.title}
                                                                                </div>
                                                                                <div
                                                                                    style={{
                                                                                        color: '#666',
                                                                                        fontSize: '12px',
                                                                                        lineHeight: '1.4',
                                                                                        overflow: 'hidden',
                                                                                        textOverflow: 'ellipsis',
                                                                                        whiteSpace: 'nowrap',
                                                                                        pointerEvents: 'none'
                                                                                    }}
                                                                                >
                                                                                    {suggestion.description}
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>

                {/* Consulting Modal */}
                <ConsultingModal
                    isOpen={isConsultingModalOpen}
                    toggle={this.toggleConsultingModal}
                />

                {/* Add CSS for the premium dropdown */}
                <style>
                    {`
                    /* Premium Services Dropdown Styling */
                    .premium-dropdown .premium-services-menu {
                        max-height: 320px;
                        overflow-y: auto;
                        width: 280px;
                        border: none;
                        border-radius: 8px;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
                        padding: 12px 0;
                        background: linear-gradient(135deg, #ffffff 0%, #f8f9fc 100%);
                        transform: translateY(10px);
                        transition: all 0.3s ease;
                    }
                    
                    .premium-dropdown:hover .premium-services-menu {
                        transform: translateY(0);
                        opacity: 1;
                        visibility: visible;
                        display: block;
                    }
                    
                    .premium-services-menu li {
                        padding: 0;
                        margin: 0;
                        border-bottom: 1px solid rgba(0,0,0,0.05);
                    }
                    
                    .premium-services-menu li:last-child {
                        border-bottom: none;
                    }
                    
                    .premium-services-menu li a {
                        display: flex;
                        align-items: center;
                        padding: 12px 20px;
                        color: #2c3e50;
                        font-weight: 500;
                        font-size: 14px;
                        transition: all 0.2s ease;
                        position: relative;
                        text-decoration: none;
                    }
                    
                    .premium-services-menu li a i {
                        margin-right: 12px;
                        color: #304FE9;
                        font-size: 12px;
                        transition: all 0.2s ease;
                    }
                    
                    .premium-services-menu li a:hover {
                        background: linear-gradient(90deg, rgba(48, 79, 233, 0.1) 0%, rgba(48, 79, 233, 0.05) 100%);
                        color: #304FE9;
                        padding-left: 25px;
                    }
                    
                    .premium-services-menu li a:hover i {
                        transform: translateX(3px);
                    }
                    
                    /* Custom scrollbar for the premium dropdown */
                    .premium-services-menu::-webkit-scrollbar {
                        width: 6px;
                    }
                    
                    .premium-services-menu::-webkit-scrollbar-track {
                        background: rgba(48, 79, 233, 0.05);
                        border-radius: 10px;
                        margin: 5px 0;
                    }
                    
                    .premium-services-menu::-webkit-scrollbar-thumb {
                        background: rgba(48, 79, 233, 0.3);
                        border-radius: 10px;
                    }
                    
                    .premium-services-menu::-webkit-scrollbar-thumb:hover {
                        background: rgba(48, 79, 233, 0.5);
                    }
                    
                    /* Animation for dropdown items */
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(5px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    
                    .premium-services-menu li {
                        animation: fadeIn 0.3s ease forwards;
                    }
                    
                    .premium-services-menu li:nth-child(1) { animation-delay: 0.05s; }
                    .premium-services-menu li:nth-child(2) { animation-delay: 0.1s; }
                    .premium-services-menu li:nth-child(3) { animation-delay: 0.15s; }
                    .premium-services-menu li:nth-child(4) { animation-delay: 0.2s; }
                    .premium-services-menu li:nth-child(5) { animation-delay: 0.25s; }
                    .premium-services-menu li:nth-child(6) { animation-delay: 0.3s; }
                    .premium-services-menu li:nth-child(7) { animation-delay: 0.35s; }
                    .premium-services-menu li:nth-child(8) { animation-delay: 0.4s; }
                    .premium-services-menu li:nth-child(9) { animation-delay: 0.45s; }
                    .premium-services-menu li:nth-child(10) { animation-delay: 0.5s; }
                    `}
                </style>
            </>
        )
    }
}