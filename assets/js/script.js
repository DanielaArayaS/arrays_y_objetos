document.write('<p>Estadisticas centro medico ñuñoa</p>');

var radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

var dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

// Nuevas horas al arreglo de Traumatología
traumatologia.push(
    {hora: '09:00', especialista: 'René Poblete', paciente: 'Ana Gellona', rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '09:30', especialista: 'Maria Solar', paciente: 'Ramiro Andrade', rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'Raul Loyola', paciente: 'Carmen Isla', rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'Antonio Larenas', paciente: 'Pablo Loayza', rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'Matias Aravena', paciente: 'Susana Poblete', rut: '14345656-6', prevision: 'FONASA'}
);

// Elimina el primer y último elemento del arreglo de Radiología
radiologia.shift(); // Elimina el primer elemento
radiologia.pop();   // Elimina el último elemento


// Título "Consulta Dental"
document.write('<h3>Lista Consulta Dental:</h3>');
// Imprimir la lista de consultas médicas de Dental
document.write('<p>');
dental.forEach(function(consulta, index) {
    var linea = `${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}`;
    document.write(linea);
    if (index !== dental.length - 1) {
        document.write('<br>');
    }
});
document.write('</p>');


// Recopilación de pacientes y su previsión de los arreglos radiologia, traumatologia y dental
let pacientesTotal = [];
radiologia.forEach(function(consulta) {
    pacientesTotal.push({paciente: consulta.paciente, prevision: consulta.prevision});
});
traumatologia.forEach(function(consulta) {
    pacientesTotal.push({paciente: consulta.paciente, prevision: consulta.prevision});
});
dental.forEach(function(consulta) {
    pacientesTotal.push({paciente: consulta.paciente, prevision: consulta.prevision});
});
// Imprimir el listado total de pacientes y sus previsiones
document.write('<h3>Listado Total de Pacientes</h3>');
document.write('<ul>');
pacientesTotal.forEach(function(paciente) {
    document.write(`<li>${paciente.paciente} - ${paciente.prevision}</li>`);
});
document.write('</ul>');


// Filtrar los pacientes de Dental con previsión ISAPRE
let pacientesIsapre = dental.filter(function(consulta) {
    return consulta.prevision === 'ISAPRE';
});
// Imprimir el listado de pacientes de Dental con previsión ISAPRE
document.write('<h3>Pacientes de Dental con Previsión ISAPRE</h3>');
document.write('<ul>');
pacientesIsapre.forEach(function(consulta) {
    document.write(`<li>${consulta.paciente} - ${consulta.prevision}</li>`);
});
document.write('</ul>');


// Filtrar los pacientes de Traumatología con previsión FONASA
let pacientesFonasa = traumatologia.filter(function(consulta) {
    return consulta.prevision === 'FONASA';
});
// Imprimir el listado de pacientes de Traumatología con previsión FONASA
document.write('<h3>Pacientes de Traumatología con Previsión FONASA</h3>');
document.write('<ul>');
pacientesFonasa.forEach(function(consulta) {
    document.write(`<li>${consulta.paciente} - ${consulta.prevision}</li>`);
});
document.write('</ul>');



document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);