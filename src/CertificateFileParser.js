import * as ASN1 from "@lapo/asn1js";

export default class CertificateFileParser {
    data = {}

    constructor(file) {
        this.file = file;
    }

    async parse() {
        await this.readFile().then((content) => {
            const asn = ASN1.decode(content);
            return this.asnToArray(asn);
        });
        return this.data;
    }

    readFile() {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = function () {
                if (reader.error) {
                    alert(
                        "Your browser couldn't read the specified file (error code " +
                        reader.error.code +
                        ")."
                    );
                } else {
                    resolve(reader.result);
                }
            };
            reader.readAsBinaryString(this.file);
        });
    }

    asnToArray(asn) {
        asn.sub.forEach((item) => {
            if (!item.sub) {
                return;
            }

            if (item.sub.length === 2) {
                this.setDataByAsnStore(item);
            } else {
                this.asnToArray(item);
            }
        });
    }

    isDate(asnDataItem) {
        return (
            asnDataItem.sub[0].typeName() === 'UTCTime' &&
            asnDataItem.sub[1].typeName() === 'UTCTime'
        );
    }

    setDataByAsnStore(asnDataItem) {
        if (this.isDate(asnDataItem)) {
            this.data.validFrom = asnDataItem.sub[0].content().split(' ')[0];
            this.data.validTo = asnDataItem.sub[1].content().split(' ')[0];
            return;
        }

        const name = asnDataItem.sub[0].content().split('\n');

        if (name[0] === '2.5.4.3') {
            this.data['commonName'] = asnDataItem.sub[1].content();
        }

        if (name[0] === '2.5.4.11') {
            this.data['organizationalUnitName'] = asnDataItem.sub[1].content();
        }
    }
}
