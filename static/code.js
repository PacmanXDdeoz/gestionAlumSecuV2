const code = document.getElementById('codigoAlumno')
const btn = document.getElementById('btnBuscarCodigo')

import { primeroD } from "../static/datos.js"

btn.addEventListener('click', function () {
    const input = code.value;
    for (let alumno of primeroD){
        if (input === alumno.pass) {
            const title = document.getElementById('title-card')
            title.innerHTML = ''

            const group = document.getElementById('student-group')
            group.textContent = alumno.Grupo
            const grade = document.getElementById('student-grade')
            grade.textContent = alumno.Grado
            const name = document.getElementById('student-name')
            name.textContent = alumno.nombre
            
            const español = document.getElementById('español')
            español.textContent = alumno.Actividades.Español;

            const matematicas = document.getElementById('matematicas')
            matematicas.textContent = alumno.Actividades.Matematicas

            const ciencias = document.getElementById('ciencias')
            ciencias.textContent = alumno.Actividades.Ciencias

            const geografia = document.getElementById('geografia')
            geografia.textContent = alumno.Actividades.Geografia

            const historia = document.getElementById('historia')
            historia.textContent = alumno.Actividades.Historia

            const fcye = document.getElementById('fcye')
            fcye.textContent = alumno.Actividades.fcivica

            const ingles = document.getElementById('ingles')
            ingles.textContent = alumno.Actividades.ingles

            const artes = document.getElementById('artes')
            artes.textContent = alumno.Actividades.artes

            const fesp = document.getElementById('fesp')
            fesp.textContent = alumno.Actividades.fespañol

            const fmate = document.getElementById('fmate')
            fmate.textContent = alumno.Actividades.fmatematicas

            const tecnologia = document.getElementById('tecnologia')
            tecnologia.textContent = alumno.Actividades.Tecnologia
            break;
        } else {
            const title = document.getElementById('title-card')
            title.innerHTML = ''
            title.textContent = 'El alumno que buscas no existe'
        }
    }  
    })