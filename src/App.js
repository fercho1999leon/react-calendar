import * as React from 'react';
import './App.css';
import TableModel from './calendar/bodyCalendar/TableModel';
const columns = [
  { id: 'Mon', label: 'Lunes', minWidth: '10%' },
  { id: 'Tue', label: 'Martes', minWidth: '10%' },
  { id: 'Wed', label: 'Miercoles', minWidth: '10%' },
  { id: 'Thu', label: 'Jueves', minWidth: '10%' },
  { id: 'Fri', label: 'Viernes', minWidth: '10%' },
  { id: 'Sat', label: 'Sabado', minWidth: '10%' },
  { id: 'Sun', label: 'Domingo', minWidth: '10%' },
];
const fecha =()=>{
  let date = new Date(Date.now());
  date = new Date(date.getFullYear(),date.getMonth(),0);
  return date.getDate();
}

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

function importData(setRows){
  const iteration = fecha()/7;
  let control = 0;
  let date = new Date(Date.now());
  for(let i=1;i<iteration+1;i++){
    let arrDay = [];
    //control++;
    for(let j=control;j<=(i*7);j++){
      control = j;
      const temp = new Date(date.getFullYear(),date.getMonth(),control);
      arrDay.push(temp.getMonth()===date.getMonth()?temp.getDate():null);
    }
    data.push(createData(arrDay));
  }
  setRows(data);
}
const data = [];
export default function App() {
  const [rows,setRows] = React.useState([]);
  React.useEffect(()=>{
    importData(setRows);
  },[]);
  return (
    <>
      <TableModel key={1} columns={columns} rows={rows}></TableModel>
    </>
  );
}