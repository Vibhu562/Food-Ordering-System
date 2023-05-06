import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

export default function Downloadpage({rootElementid , downloadFileName}) {
const downloadFileDocument = ()=>{
    const input = document.getElementById(rootElementid);
    html2canvas(input).then((canvas) =>{
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p","pt","a1");
        pdf.addImage(imgData,"JPEG",0,0);
        pdf.save(`${downloadFileName}`);
    })
}
    return (
    <div>
        <button onClick={downloadFileDocument}>Download Cart Page</button>
    </div>
  )
}

