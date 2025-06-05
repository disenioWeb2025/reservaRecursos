let semanaActual = 0;
let reservasData = {}; // Aquí se almacenarán las reservas del Google Sheets

// Datos de ejemplo - En la implementación real se obtendrían del Google Sheets
const recursosMatutino = ['salon10', 'carro', 'tv43', 'tvsalon5', 'tv50', 'informatica1'];
const recursosVespertino = ['salon10', 'canon', 'tv43', 'tvsalon5', 'tv50', 'informatica'];

function cambiarSemana(direccion) {
    semanaActual += direccion;
    actualizarSemana();
    actualizarDatos();
}

function actualizarSemana() {
    const fechaBase = new Date(2025, 5, 3); // 3 de junio de 2025
    fechaBase.setDate(fechaBase.getDate() + (semanaActual * 7));

    const fechaFin = new Date(fechaBase);
    fechaFin.setDate(fechaFin.getDate() + 4);

    const semanaTexto = `Semana del ${fechaBase.getDate()} al ${fechaFin.getDate()} de ${fechaBase.toLocaleDateString('es', { month: 'long' })} ${fechaBase.getFullYear()}`;
    document.getElementById('semanaActual').textContent = semanaTexto;

    // Actualizar encabezados de las tablas
    actualizarEncabezadosFechas(fechaBase);
}

function actualizarEncabezadosFechas(fechaBase) {
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    const tablas = document.querySelectorAll('.schedule-table');

    tablas.forEach(tabla => {
        const encabezados = tabla.querySelectorAll('th');
        for (let i = 1; i < 6; i++) {
            const fecha = new Date(fechaBase);
            fecha.setDate(fecha.getDate() + (i - 1));
            encabezados[i].textContent = `${dias[i - 1]} ${fecha.getDate()}/${fecha.getMonth() + 1}`;
        }
    });
}

function actualizarDatos() {
    // Aquí se conectaría con Google Sheets para obtener las reservas reales
    console.log('Actualizando datos desde Google Sheets...');

    // Simulación de actualización
    setTimeout(() => {
        alert('✅ Datos actualizados correctamente');
    }, 500);
}

function abrirFormulario() {
  window.open(
    'https://docs.google.com/forms/d/e/1FAIpQLSd8tSWtczpxZVtxteRFba1lXqvVRorgcRhpG3paysmy1NzSxg/viewform',
    '_blank'
  );
}


function filtrarRecursos() {
    const filtro = document.getElementById('recursoFilter').value;
    const cards = document.querySelectorAll('.recurso-card');

    cards.forEach(card => {
        if (filtro === '' || card.dataset.recurso === filtro) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Event listeners
document.getElementById('recursoFilter').addEventListener('change', filtrarRecursos);

// Inicializar
actualizarSemana();

// Función para conectar con Google Sheets (ejemplo)
function conectarGoogleSheets() {
    // Aquí iría el código para conectar con la API de Google Sheets
    // Por ejemplo usando la Google Sheets API v4

    /*
    const SHEET_ID = 'TU_SHEET_ID';
    const API_KEY = 'TU_API_KEY';
    const range = 'Respuestas!A:Z';

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            procesarRespuestas(data.values);
        })
        .catch(error => console.error('Error:', error));
    */
}

function procesarRespuestas(datos) {
    // Procesar las respuestas del formulario y actualizar la vista
    // Convertir las respuestas planas en el formato visual de horarios
}
