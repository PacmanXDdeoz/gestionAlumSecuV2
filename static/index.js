import { primeroD } from './datos.js'

const grado = document.getElementById('grade')
const grupo = document.getElementById('group')
const opc = document.getElementById('options')
const tbody = document.getElementById('contTabla')

// console.log(grupo);


const imprimirTabla = (lista) =>{

        const tbody = document.getElementById('contTabla')
        let filas = '';
        lista.forEach((alumno) => {
            // Determinamos el color o texto según el status
            const claseStatus = alumno.status ? 'activo' : 'inactivo';
            const textoStatus = alumno.status ? 'OK' : 'BAJA';
            
            filas += `
            <tr style="background-color: ${alumno.status ? 'transparent' : '#f8d7da'}" class="renglon">
            <td>${alumno.id}</td>
            <td>${alumno.Genero === 'Hombre' ? 'H' : 'M'}</td>
            <td>${alumno.nombre}</td>
            <td><strong>${textoStatus}</strong></td>
            </tr>
            `;
        });
        
        tbody.innerHTML = filas;
    }

imprimirTabla(primeroD)

// opc.addEventListener('click', function(){

//     const select = grado.value + grupo.value
//     const listaSelect = grupos[select]

//     if (listaSelect){
//         imprimirTabla(listaSelect)
//     } else {
//         tbody.innerHTML = '<tr><td colspan="4">No hay datos para esta selección</td></tr>'
//     }
// })
