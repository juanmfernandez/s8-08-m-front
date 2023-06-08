import { useDispatch, useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Document, Page } from 'react-pdf';

import axios from "axios"
const apiUrl = import.meta.env.VITE_API_URL;

// eslint-disable-next-line react/prop-types
const PdfModal = ({ isOpen, onClose, id }) => {

  const loading = useSelector((state) => state.user.statusRegister);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfFile, setPdfFile] = useState(null);
  const dispatch = useDispatch();
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const getPdfInvoice = (id) => {
    fetch(`${apiUrl}/v1/invoices/${id}/pdf`)
        .then(response => setPdfFile(response))
        .catch(e => console.log("Error: " + e))        
 }

 useEffect(() => {
    getPdfInvoice(id);
 },[])

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-6 z-10">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
            <div>
                <div>
                    <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
            </div>
      </div>
    </div>
  );
};

export default PdfModal;
