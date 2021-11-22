create database GestionTI;
use GestionTI;

/*Lista de edificios*/
create table edificios(
value varchar(6) primary key,
text varchar (12)
);

/*lista de aulas o cubiculos por edificio*/
create table aula(
aulaNum int primary key,
idEdificio varchar(6),
foreign key (value) references edificios(value)
);

/*lista de documentación*/
create table documentacion(
idDocumentacion int primary key,
manual int
/*0=NO 1=SI*/,
archivoManual varchar(12),
garantia int
/*0=NO 1=SI*/,
archivoGarantia varchar(12)
);

/*lista de software*/
create table software(
idSoftware int primary key,
Nombre varchar(60),
Desarrollador varchar(60),
Version varchar(8),
sistemaOperativo int,
/*1=Windows, 2=MacOs, 3=Linux*/
pesoMb varchar(7)
);

/*Lista de licncias por software*/
create table licencia(
idLicencia int primary key,
serialNum varchar(200),
idSoftware int,
ocuped int
/*0=NO 1=SI*/,
foreign key (idSoftware) references software(idSoftware)
);

/*categorias de inventario*/
create table categoriaInventario(
idCategoria int primary key,
nameCategoria varchar(36)
);

/*lista de inventario*/
create table inventario(
idProduto int primary key,
idCategoria int,
altura double,
ancho double,
largo double,
marca varchar(26),
capacidadMB int,
tipoPuerto varchar(36),
foreign key (idCategoria) references categoriaInventario(idCategoria)
);

/*Lista de hardware de la computadora*/
create table computerHard(
idHard int primary key,
salidaVideo int
/*0-VGA, 1-HDMI, 2-Thunderbolt, 3-USBC*/,
salidaAudio int
/*0-'Jack3,5' 1-bocinas integradas*/,
procesador int
/*0-intel, 1-amd, 2-snapdragonARM, 3-microsoftARM*/,
familiaProcesador varchar(15),
tarjetaMadre varchar(60),
ventilador int
/*0-No tiene, 1-si tiene*/
);

/*Lista de componentes*/
create table computerComponentList(
idHard int,
idProduto int,
foreign key (idHard) references computerHard(idHard),
foreign key (idProduto) references inventario(idProduto)
);

/*Lista de configuraciones de la computadora*/
create table softConfig(
idConfig int primary key,
nameConfig varchar(24)
);

/*Lista de software de las configuraciones de la computadora*/
create table listSoftConfig(
idConfig int,
idSoftware int,
foreign key (idConfig) references softConfig(idConfig),
foreign key (idSoftware) references software(idSoftware)
);

/*Lista de software de la computadora*/
create table computerSoft(
idSoft int primary key,
sistemaOperativo int
/*1=Windows, 2=MacOs, 3=Linux*/,
BIOSname varchar(12),
BIOSverson varchar(8),
Navegador int
/*1=Chrome, 2=FireFox, 3=Edge, 4=Opera, 5=Brave, 6=Chromium*/,
deepFreze int
/*0=NO 1=SI*/,
idConfig int,
foreign key (idConfig) references softConfig(idConfig)
);

/*Lista de computadoras*/
create table computer(
idCompu int primary key,
addressMAC varchar(12),
edificio varchar(6),
aulaNum int,
razonUso varchar(60),
numIncidentes int,
softwareEspecializado int
/*0=NO 1=SI*/,
idHard int,
idSoft int,
foreign key (edificio) references edificios(value),
foreign key (idHard) references computerHard(idHard),
foreign key (idSoft) references computerSoft(idSoft),
foreign key (aulaNum) references aula(aulaNum)
);

/*lista de redes*/
create table Network(
idNetwork int primary key,
networkName varchar(18),
networkType int
/*0=alambrica 1=inalambrica*/,
netowrkSpeedMB varchar(7)
);

/*lista de dispositivos de red*/
create table NetworkDevices(
deviceID int primary key,
idNetwork int,
networkType int
/*0=alambrica 1=inalambrica*/,
exposure int
/*0=exterior 1=interior*/,
edificio varchar(6),
aulaNum int,
foreign key (idNetwork) references Network(idNetwork),
foreign key (edificio) references edificios(value),
foreign key (aulaNum) references aula(aulaNum)
);

/*lista de otros dispositivos*/
create table otrosDispositivos(
idDispositivo varchar(12) primary key,
nombre varchar(60),
idDocumentacion int,
tiempoVida time,
mantenimientoMinimo date,
mantenimientoMaximo date,
ultimoMantenimiento date,
edificio varchar(6),
aulaNum int,
foreign key (aulaNum) references aula(aulaNum),
foreign key (edificio) references edificios(value),
foreign key (idDocumentacion) references documentacion(idDocumentacion)
);



create table usuarios(
nUsuario varchar(10) primary key,
primerNombre varchar(15),
segundoNombre varchar(15),
primerApellido varchar(15),
segundoApellido varchar(15),
passkey varchar(10),
tipoUsuario int
/*0=tecnico 1=no tecnico 2=administrador de tecnicos 3=administrador de inventario*/
);

/*Los tecnicos pueden revisar las tareas asignadas

Los no tecnicos solo pueden iniciar incidentes o solicitar asistencias

Los administradores de tecnicos pueden dar de alta, 
editar o dar de baja tecnicos, asignar incidentes a los tecnicos

Los administradores de inventario pueden dar de alta o baja el inventario y 
registros de los datos que almacena el sistema/

/*lista de tecnicos*/
create table Tecnicos(
nUsuario varchar(10),
numIncidentesActuales int,
numIncidentesResueltos int,
experienceLvl int,
foreign key (nUsuario) references usuarios(nUsuario)
);
/*El nivel de experiencia subira un nuvel cada 10 incidntes resueltos*/

create table incidentes(
nIncidnete int primary key,
idEdificio varchar(6),
aulaNum int,
nUsuarioAlta varchar(10),
nUsuarioTecnico varchar(10),
esCompu int, /*0=NO 1=SI*/
esDispositivoRed int, /*0=NO 1=SI*/
esOtroDispositivo int, /*0=NO 1=SI*/
idCompu int, /*en caso de que sea una computadora*/
deviceID int, /*en caso de que sea un dispositivo de red*/
idDispositivo varchar(12), /*en caso de que sea otro dispositivo*/
foreign key (idEdificio) references edificios(value),
foreign key (aulaNum) references aula(aulaNum),
foreign key (idCompu) references computer(idCompu),
foreign key (deviceID) references NetworkDevices(deviceID),
foreign key (idDispositivo) references otrosDispositivos(idDispositivo)
);

create table incidentesXtecnico(
nUsuario varchar(10),
nIncidnete int,
prioridad int,
/*
El administrador determinara la prioridad

0 = urgente, 1 = prioritario pero puede esperar, 2= normal, 3 = bajo
*/
foreign key (nUsuario) references Tecnicos(nUsuario),
foreign key (nIncidnete) references incidentes(nIncidnete)
);

create table serviciosTecnicos(
nServicio int primary key,
nomServicio varchar(30),
descServicio text, 
tiempoEstimado time
);

create table pasosDeServicioTecnicos(
nServicio int,
nPaso int,
descPaso text,
foreign key (nServicio) references serviciosTecnicos(nServicio)
);

create table avanceIncidencia(
nIncidnete int,
diagnosticoInicial text,
fecha date,
hora time,
servicioXRealizar int,
foreign key (servicioXRealizar) references serviciosTecnicos(nServicio)
);
