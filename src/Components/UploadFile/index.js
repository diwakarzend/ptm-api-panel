import React, { useState } from "react";
import { bulkUploadTransactionsRequest } from "../../utils/api";
import { Button } from "../UI/StyledConstants";
import { UploadFileWrapper } from "./style";


export const UploadFile = ({onUploadFile = () => {}}) => {
    const [uploadedFile, setUploadedFile] = useState('')
    const onFileChange = event => {
        const formData = new FormData();
        formData.append("file", event.target.files[0])
        bulkUploadTransactionsRequest(formData).then((response) => {
            console.log("response = ", response?.data);
            onUploadFile(response?.data);
        })
      };

    return (
        <UploadFileWrapper>
            <div className="uplaod-file-inner">
            <input  className="form-file" type="file" onChange={onFileChange} accept=".xls,.xlsx"/>
            <Button className="btn-soft-success">Upload Transactions File</Button>
            </div>
        </UploadFileWrapper>
    )
}