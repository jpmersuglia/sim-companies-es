import React from 'react'

export default function CompanyInfo() {
    return (
        <div className="company-info-container">
            <div className="company-info-header">
                <div className="company-info-header-block">
                    <div className="company-info-name">
                        <h1>Moonshot Aerospace</h1>
                    </div>
                    <div className="company-info-avatar">
                        <img src="https://d1fxy698ilbz6u.cloudfront.net/logo/65924184152021307703284588a24ff9bf2c02a5.png" alt="" />
                    </div>
                </div>
                <div className="company-info-contact">
                    <div className="info-contact-main">
                        <h3>Juan Pablo Mersuglia</h3>
                        <img src="https://www.flaticon.es/svg/static/icons/svg/555/555615.svg" alt="" />
                    </div>
                    <p><strong>Company Level</strong>: 20</p>
                    <h5>Bussiness Hours: </h5>
                    <p>10:00am to 05:00pm</p>
                </div>
            </div>
            <div className="company-type-main">
                <div className="info-business-type">
                    <div className="business-inports">
                        <h4>Main Imports:</h4>
                        <p>Related Aerospace Raw Materials</p>
                    </div>
                    <div className="business-exports">
                        <h4>Main Exports:</h4>
                        <p>Aerospace Goods</p>
                    </div>
                </div>
                <div className="info-products">
                    <div className="import-type">
                        <h4>Importing:</h4>
                        <p>Carbon Composite</p>
                        <p>Electric Shits</p>
                        <p>Motors</p>
                        <p>More Electric goods</p>
                    </div>
                    <div className="export-type">
                        <h4>Exporting</h4>
                        <p>Single Engine Planes</p>
                        <p>Luxury Planes</p>
                        <p>Satelites</p>
                    </div>
                </div>
            </div>
        </div>
    )
}