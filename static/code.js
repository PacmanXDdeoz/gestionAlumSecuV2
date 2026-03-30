const code = document.getElementById('codigoAlumno')
const btn = document.getElementById('btnBuscarCodigo')

import { primeroD } from "../static/datos.js"

const listcode = [
    '7LGNXNJ7KA',
    'A02LHU8HLT',
    '8E4H2PJ4DA',
    'UQFBJ4CFDY',
    'GL0MQW1AVA',
    '36A3QEQFCU',
    '6F31AA1VT1',
    'KUW9F0NWR6',
    'A9QG92A7XN',
    'F4LU422V2J',
    'TCVS7E405S',
    '75NALDQQEA',
    'TL6VPCHQ7B',
    '62LUDW2LHJ',
    '1G0Q6LNR62',
    '6HGCP6TZ4Q',
    'EM0GXXDNXP',
    'B9KG8BVQ5N',
    'EHM20YWHGR',
    'NQL5LTZWCY',
    'Z1CDQXNYD3',
    '9ECQG1H4SK',
    'D308NSF37Q',
    'X58ZE2XSPU',
    'SDJM5NYWVX',
    '9983ADC9D6',
    '0HH6MWE75J',
    'QC7LFDM6U0',
    'D3U8SF8GCL',
    'QNFQJMGG76',
    'R3P18Z3Z8P',
    'WMVC36Z92M',
    'S98NLZC1Q8',
    'KHYR11L28Q',
    'QJ9GSFNZSE',
    'TQX7U0CFT5'
]

btn.addEventListener('click', function () {
    const input = code.value;
    for (let alumno of primeroD){
        if (input === alumno.pass) {

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
        }
    }  
    })