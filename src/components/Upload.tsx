import React,{useCallback,useEffect,useState} from 'react'
import { useDropzone } from 'react-dropzone';
import uploadImg from "../assets/upload.png";
import {Button} from 'react-bootstrap';
import service from './services/service'
import '../../src/components/styles/dashboard.css'
function Upload() {
    const [files, setFiles] = useState([
        { id: 1, name: "filecoin",type:"image/png", filesize: 256 },
        { id: 2, name: "xyz", filesize: 128 },
        { id: 3, name: "filecoin", filesize: 256 },
        { id: 4, name: "filecoin", filesize: 256 },
        { id: 5, name: "Dashboard.png", filesize: 162525 },
        { id: 6, name: "filecoin", filesize: 256 },
      ]);
    const [uploadFiles, setUploadFiles] = useState([]);
    const maxSize = 1048576;
    const onDrop = useCallback((acceptedFiles) => {
      setUploadFiles(acceptedFiles);    
    }, []);
    const {
      isDragActive,
      getRootProps,
      getInputProps,
      isDragReject,
      acceptedFiles,
    } = useDropzone({
      onDrop,
      accept: "image/png",
      minSize: 0,
      maxSize,
    });
          
 
    const uploadFile = ()=>{
        //Post request
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      uploadFiles.forEach(({name,type,size}:any,index)=>{
      setTimeout(function () { 

        var body= JSON.stringify({ name:name,filetype:type, filesize:size,date:today.toUTCString()})
        service.uploadFile(body)
        .then(response => response.json())
        .then(data => alert(`File added as ${data.id}`));
          
      }, index * 3000);

      })
    }
      
    return (
        <div>
            <div style={{margin:'1.5rem'}}>
            <div className="upload" >
              <div {...getRootProps({style:{marginTop:"60px"}})}>
                <input {...getInputProps()} />
                {!isDragActive && (
                  <div>
                    {" "}
                    <img src={uploadImg} width="60" alt="uploadimage" />{" "}
                    <p>Drag files and folders here to upload </p>
                  </div>
                )}
                {isDragActive && !isDragReject && (
                  <img src={uploadImg} width="12" alt="uploadimage" />
                )}
                {isDragReject && "File type not accepted, sorry!"}
              </div>
            </div>
            </div>
         
            <div>
            <Button className="buttonUploadFile" onClick={()=>uploadFile()}>
              Upload File
            </Button>
            </div>
        </div>
    )
}

export default Upload
