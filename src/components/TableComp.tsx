import React from 'react'
import { Table } from 'react-bootstrap';
import Files from './interfaces/Files';
type TableProps ={
    headers:Object;
    data:Files[];
    checkItem:Function;
}

function TableComp(props: TableProps ) {
    const headersArray = props.headers.toString().split(',');

    return (
     
                <Table hover borderless responsive="sm">
              <thead>
                <tr style={{ backgroundColor: "#F3F4FA"}}>
                  {
                      headersArray.map((elm,index)=><th style={{fontWeight:"300",fontSize:"15px"}} key={index}>{elm.toString()}</th>)
                  }

                </tr>
              </thead>
              <tbody>
                {props.data.map(({ id, name, filesize,filetype,date ,isChecked }: any) => {
                  return (
                    <tr style={isChecked ? {backgroundColor:"gray"} :{}} key={id}>
                      <td><input type="checkbox" onChange={() =>props.checkItem(id,isChecked)} checked={isChecked}/></td>
                      <td>{name}</td>
                      <td>{filetype}</td>
                      <td>{filesize}</td>
                      <td>{date}</td>
                      <td></td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
      
    )
}

export default TableComp
