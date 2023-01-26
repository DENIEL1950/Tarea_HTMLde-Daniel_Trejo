//Componente que muestra las actividades (tareas) diarias de una persona
import React from 'react'

function Tareas() {
    const listadoTareas=[
        {
            titulo: "Estudiar Física",
            responsable: "Pedro Alvarado",
            descripcion: "Leer el capítulo 5 página 67",
            prioridad: "mediana"
        },
        {
            titulo: "Reparar computadora",
            responsable: "Galo del Castillo",
            descripcion: "Cambiar el disco duro",
            prioridad: "alta"
        },
        {
            titulo: "Entrenar fútbol",
            responsable: "Enrique Ponce",
            descripcion: "Una hora de trabajo técnico y táctico",
            prioridad: "baja"
        },           
    ];

    console.log("Lista de tareas");
    console.log(listadoTareas);
    
  return (
    <div>
        <ul>
            {
                listadoTareas.map( (item, index) => {
                    return <li key={index}>{item.titulo}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Tareas
