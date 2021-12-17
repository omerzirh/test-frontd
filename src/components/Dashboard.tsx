import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./styles/dashboard.css";
import Upload from "./Upload";
import Sidebar from "./Sidebar";
import TableComp from "./TableComp";
import service from "./services/service"
import searchIcon from '../assets/search.png'

function Dashboard() {
  const [files, setFiles] = useState([{"id":0,"name":"","filetype":"","filesize":0,"date":""}]);

  const headers = ["SELECT", "NAME", "TYPE", "SIZE", "DATE ADDED", "---"];
  
  useEffect(() => {
    initProducts();
  }, []);

  async function initProducts() {
    await service.fetchItems()
      .then((response) => response.json())
      .then((response) => {
        setFiles(response);
        console.log(response.result);
      })
      .catch((err) => console.error(err));
  }
  const checkItem = (id:any,isChecked:any)=>{
    setFiles([...files].map(item =>{
      if(item.id==id){
        return {
          ...item,
          isChecked:!isChecked
        }
      }else{
        return item
      }
    }))
  }
  return (
    <div className="dashboardContainer">
      <div className="sidebarDashboard">
        <Sidebar />
      </div>
      <div className="contentDashboard">
        <Col xs={12} md={10} lg={10} style={{ margin: "3rem" }}>
          <div style={{display:'flex',width:'100%',justifyContent:"space-between"}}>
            <div>
              <h3 style={{left:"0"}}> All Files</h3>
            </div>
            <div className="col-md-2" >
            <InputGroup
                style={{
                  height: "2.5rem",
                  color: "white",
                  backgroundColor: "white",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  borderRadius:"12px"
                }}
              >
                <FormControl
                  placeholder="Search Here"
                  aria-label="search"
                  aria-describedby="basic-addon1"
                  style={{
                    borderRadius: "12px",
                    border: 0,
                    height: "100%",
                    fontStyle: "italic",
                    
                  }}
                ></FormControl>
                <Button
                  style={{
                    margin: "5px",
                    height: "80%",
                    borderRadius: "12px",
                    backgroundColor: "#22a7f0",
                    fontWeight: "bold",
                  }}
                  className="btn"
                ><i className="fa fa-search"></i></Button>
              </InputGroup>
            </div>
            
          </div>
          <Row>
            <Upload />
          </Row>
          <Row>
            <TableComp data={files} headers={headers} checkItem={(id:any,isChecked:any)=>checkItem(id,isChecked)} />
          </Row>
        </Col>
      </div>
    </div>
  );
}

export default Dashboard;
