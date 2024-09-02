import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';



export const MyGrid = () => {

  const handleEditCellChange = React.useCallback(
    (params) => {
      setRecord((prevRows) => {
        const newRecord = prevRows.map((row) =>{
          if (params.value === "" && row.id === params.id) {
            delete row.field
            return {...row};
          }
          if (row.id === params.id) return {...row, [params.field]: value};
          return row;
        })
        return newRecord;
      });
      console.log(record);
    },
    [record]
  );


  const rows = [
    {id: 1, firstName: "taro", lastName: "sato", country: ""},
    {id: 2, firstName: "jiro", lastName: "kondo", country: ""}
  ]
  const [record, setRecord] = useState(rows);
  const [count, setCount] = useState(0)

  const columns = [
    { field: 'id', headerName: 'id', width: 150 },
    { 
      field: 'firstName', 
      headerName: 'firstName', 
      width: 150,
      editable: true,
    },
    { 
      field: 'lastName', 
      headerName: 'lastName', 
      width: 150 
    },
    {
      field: "country",
      headerName: "country",
      width: 150,
      type: "singleSelect",
      valueOptions: ["","Japan",'United Kingdom', 'Spain', 'Brazil'],
      editable: true,
    },
  ];


    
  return (
    <div>
      <div>MyGrid</div>
      <div>
        <DataGrid
        columns={columns}
        rows={record}
        onCellEditCommit={handleEditCellChange}
      /></div>
      <div>
        <button onClick={()=>{
          console.log("ボタンクリック")
          setCount((preCnt)=>{return ++preCnt})
          }}>ボタン</button>
        {count}
        </div>
    </div>
  )
}
