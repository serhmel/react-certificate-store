import React from 'react';

const CertificateDetails = (props) => {
    return (
        <div className="certificateDetails">
            <div>{"Common Name: " + props.certificateDetails.commonName}</div>
            <div>{"Issuer CN: " + props.certificateDetails.organizationalUnitName}</div>
            <div>{"Valid From: " + props.certificateDetails.validFrom}</div>
            <div>{"Valid Till: " + props.certificateDetails.validTo}</div>
        </div>
    );
};

export default CertificateDetails;
