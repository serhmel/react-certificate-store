import React, {useState} from 'react';

const CertificateList = (props) => {
    const [active, setActive] = useState(null);

    function onClickCertificateHandler(certificate, index) {
        props.setCertificateDetails({...certificate});

        if (!props.drag) {
            setActive(index);
        }
    }

    function onClickAddButtonHandler() {
        if (!props.drag) {
            props.setAddCertificateButton('Отменить');
            props.setDrag(true);
            setActive(null);
        } else {
            props.setAddCertificateButton('Добавить');
            props.setDrag(false);
            props.setCertificateDetails('');
        }
    }

    return (
        <div className="certificateList">
            <ul>
                {props.certificates.map((certificate, index) => {
                    return <li
                        className={index === active ? 'activeCertificate' : ''}
                        key={index}
                        onClick={() => onClickCertificateHandler(certificate, index)}
                    >{certificate.commonName}</li>
                })}
            </ul>
            <button
                className="addCertificateButton"
                onClick={() => onClickAddButtonHandler()}
            >{props.addCertificateButton}</button>
        </div>
    );
};

export default CertificateList;
