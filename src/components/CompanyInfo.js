import React from 'react'
import Data from '../data.json'

export default function CompanyInfo({match}) {

    const result = match.params.id
    
    for(let i = 0; i < Data.length; i++){
        if(Data[i].id == result){
            return (
                <div className="company-info-container">
                    <div className="company-info-header">
                        <div className="company-info-header-block">
                            <div className="company-info-name">
                                <h1>{Data[i].companyname}</h1>
                            </div>
                            <div className="company-info-avatar">
                                <img src={Data[i].avatar} alt="No Avatar" />
                            </div>
                        </div>
                        <div className="company-info-contact">
                            <div className="info-contact-main">
                                <h3>{Data[i].realname}</h3>
                                <img src={Data[i].country} alt="Pais" />
                            </div>
                            <p><strong>Company Level</strong>: {Data[i].level}</p>
                            <h5>Bussiness Hours: </h5>
                            <p>10:00am to 05:00pm</p>
                        </div>
                    </div>
                    <div className="company-type-main">
                        <div className="info-business-type">
                            <div className="business-inports">
                                <h4>Main Imports:</h4>
                                <p>{Data[i].mainimport}</p>
                            </div>
                            <div className="business-exports">
                                <h4>Main Exports:</h4>
                                <p>{Data[i].mainexport}</p>
                            </div>
                        </div>
                        <div className="info-products">
                            <div className="import-type">
                                <h4>Importing:</h4>
                                {Data[i].importing.map((value, index) =>
                                    <img className="resources-data" src={`https://d1fxy698ilbz6u.cloudfront.net/static/images/resources/${value}.png`} alt={value} key={value} />
                                )}
                            </div>
                            <div className="export-type">
                                <h4>Exporting:</h4>
                                {Data[i].exporting.map((value, index) =>
                                    <img className="resources-data" src={`https://d1fxy698ilbz6u.cloudfront.net/static/images/resources/${value}.png`} alt={value} key={value} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            console.log("ID No Encontrado")
        }
    }
}