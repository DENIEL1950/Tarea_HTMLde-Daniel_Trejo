//Componente que muestra las actividades (tareas) diarias de una persona
import React, {useState} from "react";
import { datos } from "./datos";

function Tareas() {
  const [listadoTareas, setListadoTareas] = useState(datos);
  //const listadoTareas = datos;

  const eliminarHandlee = (item)=>{
      if(window.confirm("Confrime que sea elimnar esta tarea ?"))
      {
        const nuevaLista = listadoTareas.filter( tarea => {
          return tarea.titulo!==item.titulo;
        });
        //console.log("nueva lista", nuevalista)
        setListadoTareas(nuevaLista);
      }
      //console.log("Dato a eliminar", item);     
  }
  //console.log("Nueva lista", nuevaLista);
  //console.log(listadoTareas);

  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          {listadoTareas.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card mt-4">
                  <div className="card-header">
                    <h3>{item.titulo}</h3>
                  </div>
                  
                  <div className="card-body">
                    <p><strong>{item.responsable}</strong></p>
                    <p>{item.descripcion}</p>
                  </div>

                  <div className="card-footer">
                    <mark>{item.prioridad}</mark>
                    <p></p><buttom className="btn btn-primary" onClick={()=>eliminarHandlee(item)}>Eliminar</buttom>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tareas;
