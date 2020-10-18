import React from 'react'
import {Link} from 'react-router-dom'

export default function CompanyCard(props){
    return(
        <div className="company-card">
        <div className="company-header">
    <div className="company-name"><Link to={`{props.id}`}>{props.companyname}</Link></div>
            <div className="company-country">
                <img src={props.country} alt="country" />
            </div>
        </div>
        <div className="company-content">
            <div className="company-avatar">
                <img src={props.avatar} alt="CompanyAvatar" />
            </div>
            <div className="company-imports">
                {props.mainimport}
            </div>
            <div className="company-exports">
                {props.mainexport}
            </div>
        </div>
    </div>
    )
}