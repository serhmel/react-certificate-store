import React, {useState, useEffect} from "react";
import CertificateList from "./CertificateList";
import CertificateArea from "./CertificateArea";
import CertificateDetails from "./CertificateDetails";


function App() {
    const saved = localStorage.getItem("certificates");
    const initialValue = JSON.parse(saved);
    const [certificates, setCertificates] = useState(initialValue || []);
    const [addCertificateButton, setAddCertificateButton] = useState('Добавить');
    const [drag, setDrag] = useState(false);
    const [certificateDetails, setCertificateDetails] = useState('');


    useEffect(() => {
        localStorage.setItem("certificates", JSON.stringify(certificates));
    }, [certificates]);

    function selectCertificate() {
        if (drag) {
            return <CertificateArea
                certificates={certificates}
                setDrag={setDrag}
                setCertificateDetails={setCertificateDetails}
                setAddCertificateButton={setAddCertificateButton}
                setCertificates={setCertificates}
            />
        }
        if (certificateDetails) {
            return <CertificateDetails certificateDetails={certificateDetails}/>
        }
        return <div className="certificateDetailsArea">Выберите сертификат для просмотра информации</div>
    }

    return (
        <div className="App">
            <CertificateList
                certificates={certificates}
                addCertificateButton={addCertificateButton}
                drag={drag}
                setDrag={setDrag}
                setCertificateDetails={setCertificateDetails}
                setAddCertificateButton={setAddCertificateButton}
            />
            {selectCertificate()}
        </div>
    );
}

export default App;
