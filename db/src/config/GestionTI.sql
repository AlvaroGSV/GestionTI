create database GestionTI;
use GestionTI;
create table software(
idSoftware int primary key,
Nombre varchar(60),
Desarrollador varchar(60),
Version varchar(8),
sistemaOperativo int,
/*1=Windows, 2=MacOs, 3=Linux*/
pesoMb varchar(7)
);
create table licencia(
idLicencia int primary key,
serialNum varchar(200),
idSoftware int,
foreign key (idSoftware) references software(idSoftware)
);
create table computer(
idCompu int primary key
);
create table computerHard(
idHard int primary key
);