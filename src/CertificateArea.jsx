import React from 'react';
import CertificateFileParser from "./CertificateFileParser";

const CertificateArea = (props) => {
    function dragStartHandler(e) {
        e.preventDefault();
        props.setDrag(true);
    }

    function dragLeaveHandler(e) {
        e.preventDefault();
        props.setDrag(false);
    }

    function onDropHandler(e) {
        e.preventDefault();
        const parser = (new CertificateFileParser(e.dataTransfer.files[0]));

        parser.parse().then((result) => {
            props.setCertificates([...props.certificates, result]);
        });

        props.setCertificateDetails('');
        props.setAddCertificateButton('Добавить');
        props.setDrag(false);
    }
    return (
        <div className="addCertificateArea">
            <div
                className="drop-area"
                onClick={() =>  {
                    props.setAddCertificateButton('Добавить');
                    props.setDrag(false);
                    props.setCertificateDetails('');
                }}
                onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e => dragStartHandler(e)}
                onDrop={e => onDropHandler(e)}
            >
                Перетащите файл сертификата в это поле
            </div>
        </div>
    );
};

export default CertificateArea;
