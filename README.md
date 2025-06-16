# Certificate Store

A simple web application for managing and viewing digital certificates directly in the browser. Users can upload certificate files, view essential details, and store them locally using `LocalStorage`.

## 🚀 Features

- **Drag & Drop upload** of `.cer` certificate files
- **Certificate parsing** using ASN.1 format
- Display of essential certificate details:
    - **Common Name (CN)**
    - **Issuer Name**
    - **Validity Period** (Valid From / Valid To)
- **Persistent storage** in `LocalStorage` — certificates remain after page reloads
- **Interactive table** — click a certificate to view its details

## 🛠 Technologies

- React (JavaScript)
- [asn1js](https://github.com/lapo-luchini/asn1js) for parsing certificate files
- LocalStorage API
- HTML5 Drag & Drop API

## 📦 Installation

To run the project locally:

```bash
git clone https://github.com/serhmel/react-certificate-store.git
cd react-certificate-store
npm install
npm start
```

## 📁 Certificate Format

This app supports `.cer` files encoded in **DER/ASN.1 format**. The following fields are extracted and displayed:

- **Common Name (CN)**
- **Issuer Name**
- **Validity Period**: start and end dates

---
