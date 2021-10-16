import { useState,useEffect } from 'react';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { AddTransactionModal } from '..';

function AdminLayout({ children, pageTitle }) {
  // TODO: CHECK IF USER IS LOGGED IN BEFORE CONTINUING 
  const [open, setOpen] = useState(false);
  const [pageIsBroad, setPageIsBroad] = useState(true);
  const [sidebarCol, setSidebarCol] = useState('col-2 col-md-2');
  const [mainPageCol, setMainPageCol] = useState('col-10 col-md-10');
  
  const [selectedKiosk, setSelectedKiosk] = useState(null)
  const [selectedType, setSelectedType] = useState(null)
  

  const handleKioskChange = (selectedKiosk) => {
    setSelectedKiosk( selectedKiosk);
  };

  const handleTypeChange = (selectedType )=> {
    setSelectedType( selectedType);
  };

  const toggle = (index) => {
    setOpen(!open);
  };

  const toggleSidebarSize = () => {
    if (pageIsBroad) {
      // Go to small size
      setSidebarCol('col-2 col-md-1 text-center');
      setMainPageCol('col-10 col-md-11 text-center');
    } else {
      // Go to large size
      setSidebarCol('col-2 col-md-2');
      setMainPageCol('col-10 col-md-10');
    }

    setPageIsBroad(!pageIsBroad);
  };

  return (
    <>
      <AddTransactionModal
        open={open}
        toggle={toggle}
        handleKioskChange={handleKioskChange}
        selectedKiosk={selectedKiosk}
        kioskData={kioskData}
        transactionTypeData={transactionTypeData}
        handleTypeChange={handleTypeChange}
        selectedType = {selectedType}
      />
      
      
      <Head>
        <title>{pageTitle} - E Money Tracker</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
        </Head>

      <header className="">
        <nav className="navbar navbar-expand-sm">
        <i onClick={toggleSidebarSize} className="fa fa-list pr-3"></i>{' '}

          <button
            className="navbar-toggler mr-2 bg-info"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <a className="navbar-brand flex-1" href="#">
            {' '}
            E Money Tracker
          </a>
          <div className="collapse d-flex w-100 align-items-center" id="navbarTogglerDemo03">
            <ul className="navbar-nav mt-0 mr-auto">
              <li onClick={toggle} className="nav-item">
                <a className="nav-link btn btn-secondary px-3" href="#">
                  <i className="fa fa-plus-circle"></i> New transaction
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-user"></i> Profile
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="body-content row">
        <div className={'p-2 text-white h-100 ' + sidebarCol} id="sidebar">
          <div className="list-group">
            <Link href="/" aria-current="true">
              <a className="list-group-item active">
                <i className="fa fa-home"></i>
                {pageIsBroad && <span>Home</span>}
              </a>
            </Link>
            <Link href="/transactions">
              <a className="list-group-item">
                <i className="fa fa-exchange"></i> {pageIsBroad && <span>Transactions</span>}
              </a>
            </Link>
            <Link href="/commercial-agents">
              <a className="list-group-item">
                <i className="fa fa-motorcycle"></i> {pageIsBroad && <span>Commercial Agents</span>}
              </a>
            </Link>
            <Link href="/kiosks">
              <a className="list-group-item">
                <i className="fa fa-store"></i> {pageIsBroad && <span>Kiosks</span>}
              </a>
            </Link>
            <Link href="/zones">
              <a className="list-group-item">
                <i className="fa fa-map-signs"></i> {pageIsBroad && <span>Zoning</span>}
              </a>
            </Link>
          </div>
        </div>
        <div className={' ' + mainPageCol} id="mainpage">
          <main className="p-1">{children}</main>
        </div>
      </div>
      <footer className="d-flex d-flex align-items-center justify-content-center">
        <p className="m-0">
          <a className="text-light" href="https://digitalrenter.com/en/about-us" target="_blank">
            Powered by DR Devs
          </a>
        </p>
      </footer>
    </>
  );
}

export default AdminLayout;

const kioskData = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const transactionTypeData = [
  { value: 'float', label: 'Float' },
  { value: 'cash', label: 'Cash' },
];