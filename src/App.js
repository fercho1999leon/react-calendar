import * as React from 'react';
import './App.css';
import TableModel from './calendar/bodyCalendar/TableModel';

const columns = [
  { id: 'Mon', label: '', minWidth: '6rem'},
  { id: 'Tue', label: '', minWidth: '6rem'},
  { id: 'Wed', label: '', minWidth: '6rem'},
  { id: 'Thu', label: '', minWidth: '6rem'},
  { id: 'Fri', label: '', minWidth: '6rem'},
  { id: 'Sat', label: '', minWidth: '6rem'},
  { id: 'Sun', label: '', minWidth: '6rem'},
];

function createData(arreglo) {
  return { 
    Mon:arreglo.length>0?arreglo[0]:0, 
    Tue:arreglo.length>1?arreglo[1]:0, 
    Wed:arreglo.length>2?arreglo[2]:0, 
    Thu:arreglo.length>3?arreglo[3]:0, 
    Fri:arreglo.length>4?arreglo[4]:0, 
    Sat:arreglo.length>5?arreglo[5]:0,
    Sun:arreglo.length>6?arreglo[6]:0, 
  };
}

function importData(setRows,dateChange){
  const data = [];
  let control = 1;
  for(let i=1;i<=5;i++){
    let arrDay = [];
    //control++;
    for(let j=control;j<=(i*7);j++){
      control = j;
      const temp = new Date(dateChange.year,dateChange.month,control);
      
      arrDay.push(temp.getMonth()===dateChange.month?temp.getDate():null);
    }
    //control++;
    data.push(createData(arrDay));
  }  
  setRows(data);
}

export default function App() {
  const [rows,setRows] = React.useState([]);
  const [dateChange,setDateChange] = React.useState({
    year:new Date(Date.now()).getFullYear(),
    month:new Date(Date.now()).getMonth(),
    day:0,
  });
  React.useEffect(()=>{
    importData(setRows,dateChange);
  },[dateChange]);
  return (
    <>
      <TableModel key={1} columns={columns} rows={rows} setDateChange={setDateChange} dateChange={dateChange}></TableModel>
    </>
  );
}