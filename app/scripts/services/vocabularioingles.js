'use strict';

/**
 * @ngdoc service
 * @name pruebasAngularApp.vocabularioIngles
 * @description
 * # vocabularioIngles
 * Service in the pruebasAngularApp.
 */
 angular.module('pruebasAngularApp')
 .service('vocabularioIngles', function vocabularioIngles() {
 	var vocabulario = [
	{
		'I' : 1,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'MANZANA',
		'R' : 'APPLE'
	},
	{
		'I' : 2,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'MALO',
		'R' : 'BAD'
	},
	{
		'I' : 3,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'GRANDE',
		'R' : 'BIG'
	},
	{
		'I' : 4,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'NEGRO',
		'R' : 'BLACK'
	},
	{
		'I' : 5,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'AZUL',
		'R' : 'BLUE'
	},
	{
		'I' : 6,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'LIBRO',
		'R' : 'BOOK'
	},
	{
		'I' : 7,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'MUCHACHO',
		'R' : 'BOY'
	},
	{
		'I' : 8,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'COCHE',
		'R' : 'CAR'
	},
	{
		'I' : 9,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'GATO',
		'R' : 'CAT'
	},
	{
		'I' : 10,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'SILLA',
		'R' : 'CHAIR'
	},
	{
		'I' : 11,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'CIUDAD',
		'R' : 'CITY'
	},
	{
		'I' : 12,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'CLASE',
		'R' : 'CLASS'
	},
	{
		'I' : 13,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'PERRO',
		'R' : 'DOG'
	},
	{
		'I' : 14,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'BIEN',
		'R' : 'FINE'
	},
	{
		'I' : 15,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'MUCHACHA',
		'R' : 'GIRL'
	},
	{
		'I' : 16,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'BUENO',
		'R' : 'GOOD'
	},
	{
		'I' : 17,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'CASA',
		'R' : 'HOUSE'
	},
	{
		'I' : 18,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'NOMBRE',
		'R' : 'NAME'
	},
	{
		'I' : 19,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'BOLÍGRAFO',
		'R' : 'PEN'
	},
	{
		'I' : 20,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'LÁPIZ',
		'R' : 'PENCIL'
	},
	{
		'I' : 21,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'TELÉFONO',
		'R' : 'PHONE'
	},
	{
		'I' : 22,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'PEQUEÑO',
		'R' : 'SMALL'
	},
	{
		'I' : 23,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'ESTACIÓN',
		'R' : 'STATION'
	},
	{
		'I' : 24,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'CALLE',
		'R' : 'STREET'
	},
	{
		'I' : 25,
		'T' : 'V',
		'N' : '1',
		'L' : '01',
		'P' : 'APARCAR',
		'R' : 'TO PARK'
	},
	{
		'I' : 26,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'APARTAMENTO, PISO',
		'R' : 'APARTMENT'
	},
	{
		'I' : 27,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'CERVEZA',
		'R' : 'BEER'
	},
	{
		'I' : 28,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'BOTELLA',
		'R' : 'BOTTLE'
	},
	{
		'I' : 29,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'MARRÓN',
		'R' : 'BROWN'
	},
	{
		'I' : 30,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'CALENDARIO',
		'R' : 'CALENDAR'
	},
	{
		'I' : 31,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'RELOJ (DE MESA O PARED)',
		'R' : 'CLOCK'
	},
	{
		'I' : 32,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'PAÍS, CAMPO',
		'R' : 'COUNTRY'
	},
	{
		'I' : 33,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'MESA DE TRABAJO',
		'R' : 'DESK'
	},
	{
		'I' : 34,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'PUERTA',
		'R' : 'DOOR'
	},
	{
		'I' : 35,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'FRANCIA',
		'R' : 'FRANCE'
	},
	{
		'I' : 36,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'FRANCÉS',
		'R' : 'FRENCH'
	},
	{
		'I' : 37,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'SOMBRERO',
		'R' : 'HAT'
	},
	{
		'I' : 38,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'ITALIA',
		'R' : 'ITALY'
	},
	{
		'I' : 39,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'IDIOMA',
		'R' : 'LANGUAGE'
	},
	{
		'I' : 40,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'LECCIÓN',
		'R' : 'LESSON'
	},
	{
		'I' : 41,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'PERIÓDICO',
		'R' : 'NEWSPAPER'
	},
	{
		'I' : 42,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'NUMERO',
		'R' : 'NUMBER'
	},
	{
		'I' : 43,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'OFICINA',
		'R' : 'OFFICE'
	},
	{
		'I' : 44,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'PAPEL',
		'R' : 'PAPER'
	},
	{
		'I' : 45,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'CUADRO, FOTO',
		'R' : 'PICTURE'
	},
	{
		'I' : 46,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'ALUMNO',
		'R' : 'STUDENT'
	},
	{
		'I' : 47,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'AZÚCAR',
		'R' : 'SUGAR'
	},
	{
		'I' : 48,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'MESA',
		'R' : 'TABLE'
	},
	{
		'I' : 49,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'ESE, ESO, AQUEL, AQUELLO',
		'R' : 'THAT'
	},
	{
		'I' : 50,
		'T' : 'V',
		'N' : '1',
		'L' : '02',
		'P' : 'ESTE, ESTO',
		'R' : 'THIS'
	},
	{
		'I' : 51,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'AEROPUERTO',
		'R' : 'AIRPORT'
	},
	{
		'I' : 52,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'CONTESTACIÓN, RESPUESTA',
		'R' : 'ANSWER'
	},
	{
		'I' : 53,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'CAMA',
		'R' : 'BED'
	},
	{
		'I' : 54,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'CAJA',
		'R' : 'BOX'
	},
	{
		'I' : 55,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'CIGARRILLO',
		'R' : 'CIGARETTE'
	},
	{
		'I' : 56,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'CORRECTO',
		'R' : 'CORRECT'
	},
	{
		'I' : 57,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'TAZA',
		'R' : 'CUP'
	},
	{
		'I' : 58,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'DICIEMBRE',
		'R' : 'DECEMBER'
	},
	{
		'I' : 59,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'VESTIDO',
		'R' : 'DRESS'
	},
	{
		'I' : 60,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'FÁCIL',
		'R' : 'EASY'
	},
	{
		'I' : 61,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'FAMILIA',
		'R' : 'FAMILY'
	},
	{
		'I' : 62,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'ADIÓS',
		'R' : 'GOODBYE'
	},
	{
		'I' : 63,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'VERDE',
		'R' : 'GREEN'
	},
	{
		'I' : 64,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'AQUÍ',
		'R' : 'HERE'
	},
	{
		'I' : 65,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'CABALLO',
		'R' : 'HORSE'
	},
	{
		'I' : 66,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'MARIDO',
		'R' : 'HUSBAND'
	},
	{
		'I' : 67,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'ITALIANO',
		'R' : 'ITALIAN'
	},
	{
		'I' : 68,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'LARGO',
		'R' : 'LONG'
	},
	{
		'I' : 69,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'HOMBRE, SEÑOR',
		'R' : 'MAN'
	},
	{
		'I' : 70,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'CUADERNO, BLOC',
		'R' : 'NOTEBOOK'
	},
	{
		'I' : 71,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'PLATO',
		'R' : 'PLATE'
	},
	{
		'I' : 72,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'BONITO',
		'R' : 'PRETTY'
	},
	{
		'I' : 73,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'RÍO',
		'R' : 'RIVER'
	},
	{
		'I' : 74,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'ESCUELA, COLEGIO',
		'R' : 'SCHOOL'
	},
	{
		'I' : 75,
		'T' : 'V',
		'N' : '1',
		'L' : '03',
		'P' : 'BARCO',
		'R' : 'SHIP'
	},
	{
		'I' : 76,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'UNA NECESIDAD',
		'R' : 'A NEED'
	},
	{
		'I' : 77,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'TARDE (DESPUÉS DE MEDIODÍA)',
		'R' : 'AFTERNOON'
	},
	{
		'I' : 78,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'DORMITORIO',
		'R' : 'BEDROOM'
	},
	{
		'I' : 79,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'PÁJARO',
		'R' : 'BIRD'
	},
	{
		'I' : 80,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'LIMPIO',
		'R' : 'CLEAN'
	},
	{
		'I' : 81,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'CAFÉ',
		'R' : 'COFFEE'
	},
	{
		'I' : 82,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'ALEMÁN',
		'R' : 'GERMAN'
	},
	{
		'I' : 83,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'BOLSO',
		'R' : 'HANDBAG'
	},
	{
		'I' : 84,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'DEBERES (DE CLASE)',
		'R' : 'HOMEWORK'
	},
	{
		'I' : 85,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'CALUROSO, CALIENTE',
		'R' : 'HOT'
	},
	{
		'I' : 86,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'HORA',
		'R' : 'HOUR'
	},
	{
		'I' : 87,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'DELANTE DE',
		'R' : 'IN FRONT OF'
	},
	{
		'I' : 88,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'REVISTA',
		'R' : 'MAGAZINE'
	},
	{
		'I' : 89,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'MAPA, PLANO',
		'R' : 'MAP'
	},
	{
		'I' : 90,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'ESTRECHO',
		'R' : 'NARROW'
	},
	{
		'I' : 91,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'NUEVO',
		'R' : 'NEW'
	},
	{
		'I' : 92,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'AL LADO DE',
		'R' : 'NEXT TO'
	},
	{
		'I' : 93,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'AGRADABLE',
		'R' : 'NICE'
	},
	{
		'I' : 94,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'SECRETARIA',
		'R' : 'SECRETARY'
	},
	{
		'I' : 95,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'TIENDA',
		'R' : 'SHOP'
	},
	{
		'I' : 96,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'CORTO, BAJO',
		'R' : 'SHORT'
	},
	{
		'I' : 97,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'HERMANA',
		'R' : 'SISTER'
	},
	{
		'I' : 98,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'LENTO',
		'R' : 'SLOW'
	},
	{
		'I' : 99,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'FUERTE',
		'R' : 'STRONG'
	},
	{
		'I' : 100,
		'T' : 'V',
		'N' : '1',
		'L' : '04',
		'P' : 'TREN',
		'R' : 'TRAIN'
	},
	{
		'I' : 101,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'BRAZO',
		'R' : 'ARM'
	},
	{
		'I' : 102,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'BANCO',
		'R' : 'BANK'
	},
	{
		'I' : 103,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'JEFE',
		'R' : 'BOSS'
	},
	{
		'I' : 104,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'NIÑOS, HIJOS',
		'R' : 'CHILDREN'
	},
	{
		'I' : 105,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'AULA',
		'R' : 'CLASSROOM'
	},
	{
		'I' : 106,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'ABRIGO',
		'R' : 'COAT'
	},
	{
		'I' : 107,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'FLOR',
		'R' : 'FLOWER'
	},
	{
		'I' : 108,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'ALEMANIA',
		'R' : 'GERMANY'
	},
	{
		'I' : 109,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'IDEA',
		'R' : 'IDEA'
	},
	{
		'I' : 110,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'ENERO',
		'R' : 'JANUARY'
	},
	{
		'I' : 111,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'LUZ',
		'R' : 'LIGHT'
	},
	{
		'I' : 112,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'MINUTO',
		'R' : 'MINUTE'
	},
	{
		'I' : 113,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'ERROR',
		'R' : 'MISTAKE'
	},
	{
		'I' : 114,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'MONTAÑA',
		'R' : 'MOUNTAIN'
	},
	{
		'I' : 115,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'BOCA',
		'R' : 'MOUTH'
	},
	{
		'I' : 116,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'PLANTA',
		'R' : 'PLANT'
	},
	{
		'I' : 117,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'SILENCIOSO',
		'R' : 'QUIET'
	},
	{
		'I' : 118,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'ROJO',
		'R' : 'RED'
	},
	{
		'I' : 119,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'HABITACIÓN',
		'R' : 'ROOM'
	},
	{
		'I' : 120,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'CANSADO',
		'R' : 'TIRED'
	},
	{
		'I' : 121,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'DEBAJO DE',
		'R' : 'UNDER'
	},
	{
		'I' : 122,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'MUY',
		'R' : 'VERY'
	},
	{
		'I' : 123,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'CAMARERO',
		'R' : 'WAITER'
	},
	{
		'I' : 124,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'PARED, MURO',
		'R' : 'WALL'
	},
	{
		'I' : 125,
		'T' : 'V',
		'N' : '1',
		'L' : '05',
		'P' : 'AGUA',
		'R' : 'WATER'
	},
	{
		'I' : 126,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'ENTRE',
		'R' : 'AMONG'
	},
	{
		'I' : 127,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'ENFADADO',
		'R' : 'ANGRY'
	},
	{
		'I' : 128,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'DESAYUNO',
		'R' : 'BREAKFAST'
	},
	{
		'I' : 129,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'FRÍO',
		'R' : 'COLD'
	},
	{
		'I' : 130,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'PADRE',
		'R' : 'FATHER'
	},
	{
		'I' : 131,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'PEZ, PESCADO',
		'R' : 'FISH'
	},
	{
		'I' : 132,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'BOSQUE',
		'R' : 'FOREST'
	},
	{
		'I' : 133,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'FRUTA',
		'R' : 'FRUIT'
	},
	{
		'I' : 134,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'PELO',
		'R' : 'HAIR'
	},
	{
		'I' : 135,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'DURO',
		'R' : 'HARD'
	},
	{
		'I' : 136,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'CABEZA',
		'R' : 'HEAD'
	},
	{
		'I' : 137,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'JULIO',
		'R' : 'JULY'
	},
	{
		'I' : 138,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'LÁMPARA',
		'R' : 'LAMP'
	},
	{
		'I' : 139,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'IZQUIERDA',
		'R' : 'LEFT'
	},
	{
		'I' : 140,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'MERCADO',
		'R' : 'MARKET'
	},
	{
		'I' : 141,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'MADRE',
		'R' : 'MOTHER'
	},
	{
		'I' : 142,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'RUIDOSO',
		'R' : 'NOISY'
	},
	{
		'I' : 143,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'PLANTA',
		'R' : 'PLANT'
	},
	{
		'I' : 144,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'PREGUNTA, CUESTIÓN',
		'R' : 'QUESTION'
	},
	{
		'I' : 145,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'ENFERMO',
		'R' : 'SICK'
	},
	{
		'I' : 146,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'HIJO',
		'R' : 'SON'
	},
	{
		'I' : 147,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'ALTO',
		'R' : 'TALL'
	},
	{
		'I' : 148,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'PROFESOR',
		'R' : 'TEACHER'
	},
	{
		'I' : 149,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'TELÉFONO',
		'R' : 'TELEPHONE'
	},
	{
		'I' : 150,
		'T' : 'V',
		'N' : '1',
		'L' : '06',
		'P' : 'RELOJ (DE PULSERA)',
		'R' : 'WATCH'
	},
	{
		'I' : 151,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'OTRO',
		'R' : 'ANOTHER'
	},
	{
		'I' : 152,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'ARTE',
		'R' : 'ART'
	},
	{
		'I' : 153,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'EDIFICIO',
		'R' : 'BUILDING'
	},
	{
		'I' : 154,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'PERO',
		'R' : 'BUT'
	},
	{
		'I' : 155,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'IGLESIA',
		'R' : 'CHURCH'
	},
	{
		'I' : 156,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'OSCURO',
		'R' : 'DARK'
	},
	{
		'I' : 157,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'EJEMPLO',
		'R' : 'EXAMPLE'
	},
	{
		'I' : 158,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'ARCHIVO, EXPEDIENTE',
		'R' : 'FILE'
	},
	{
		'I' : 159,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'SUELO',
		'R' : 'FLOOR'
	},
	{
		'I' : 160,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'VIERNES',
		'R' : 'FRIDAY'
	},
	{
		'I' : 161,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'JAMÓN',
		'R' : 'HAM'
	},
	{
		'I' : 162,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'HAMBRIENTO',
		'R' : 'HUNGRY'
	},
	{
		'I' : 163,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'LLAVE, CLAVE',
		'R' : 'KEY'
	},
	{
		'I' : 164,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'MAQUINA',
		'R' : 'MACHINE'
	},
	{
		'I' : 165,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'CERCA DE',
		'R' : 'NEAR'
	},
	{
		'I' : 166,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'NECESARIO',
		'R' : 'NECESSARY'
	},
	{
		'I' : 167,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'PERSONA',
		'R' : 'PERSON'
	},
	{
		'I' : 168,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'POBRE',
		'R' : 'POOR'
	},
	{
		'I' : 169,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'PROBLEMA',
		'R' : 'PROBLEM'
	},
	{
		'I' : 170,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'RADIO',
		'R' : 'RADIO'
	},
	{
		'I' : 171,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'LISTO, PREPARADO',
		'R' : 'READY'
	},
	{
		'I' : 172,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'SIMILAR',
		'R' : 'SIMILAR'
	},
	{
		'I' : 173,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'MUJER',
		'R' : 'WOMAN'
	},
	{
		'I' : 174,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'AÑO',
		'R' : 'YEAR'
	},
	{
		'I' : 175,
		'T' : 'V',
		'N' : '1',
		'L' : '07',
		'P' : 'JOVEN',
		'R' : 'YOUNG'
	},
	{
		'I' : 176,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'A CERCA DE, SOBRE',
		'R' : 'ABOUT'
	},
	{
		'I' : 177,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'SEÑAS, DIRECCIÓN',
		'R' : 'ADDRESS'
	},
	{
		'I' : 178,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'TARDE (DESPUÉS DE MEDIODÍA)',
		'R' : 'AFTERNOON'
	},
	{
		'I' : 179,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'DETRÁS DE',
		'R' : 'BEHIND'
	},
	{
		'I' : 180,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'ENTRE',
		'R' : 'BETWEEN'
	},
	{
		'I' : 181,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'BARATO',
		'R' : 'CHEAP'
	},
	{
		'I' : 182,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'DIFÍCIL',
		'R' : 'DIFFICULT'
	},
	{
		'I' : 183,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'SUCIO',
		'R' : 'DIRTY'
	},
	{
		'I' : 184,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'JUEGO',
		'R' : 'GAME'
	},
	{
		'I' : 185,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'GUANTE',
		'R' : 'GLOVE'
	},
	{
		'I' : 186,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'DIA FESTIVO',
		'R' : 'HOLYDAY'
	},
	{
		'I' : 187,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'IMPORTANTE',
		'R' : 'IMPORTANT'
	},
	{
		'I' : 188,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'JAPÓN',
		'R' : 'JAPAN'
	},
	{
		'I' : 189,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'CLASE, TIPO',
		'R' : 'KIND'
	},
	{
		'I' : 190,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'LIMÓN',
		'R' : 'LEMON'
	},
	{
		'I' : 191,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'LEÓN',
		'R' : 'LION'
	},
	{
		'I' : 192,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'SALÓN, CUARTO DE ESTAR',
		'R' : 'LIVING ROOM'
	},
	{
		'I' : 193,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'NARIZ',
		'R' : 'NOSE'
	},
	{
		'I' : 194,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'PADRES',
		'R' : 'PARENTS'
	},
	{
		'I' : 195,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'CERDO',
		'R' : 'PIG'
	},
	{
		'I' : 196,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'POSIBLE',
		'R' : 'POSSIBLE'
	},
	{
		'I' : 197,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'PROGRAMA',
		'R' : 'PROGRAM'
	},
	{
		'I' : 198,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'RATA',
		'R' : 'RAT'
	},
	{
		'I' : 199,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'DE VERDAD',
		'R' : 'REALLY'
	},
	{
		'I' : 200,
		'T' : 'V',
		'N' : '1',
		'L' : '08',
		'P' : 'INFORME',
		'R' : 'REPORT'
	},
	{
		'I' : 201,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'ALREDEDOR DE',
		'R' : 'AROUND'
	},
	{
		'I' : 202,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'PAN',
		'R' : 'BREAD'
	},
	{
		'I' : 203,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'TECHO',
		'R' : 'CEILING'
	},
	{
		'I' : 204,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'ORDENADOR',
		'R' : 'COMPUTER'
	},
	{
		'I' : 205,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'DIA',
		'R' : 'DAY'
	},
	{
		'I' : 206,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'SECO',
		'R' : 'DRY'
	},
	{
		'I' : 207,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'EUROPA',
		'R' : 'EUROPE'
	},
	{
		'I' : 208,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'RÁPIDO',
		'R' : 'FAST'
	},
	{
		'I' : 209,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'PASILLO',
		'R' : 'HALL'
	},
	{
		'I' : 210,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'REUNIÓN',
		'R' : 'MEETING'
	},
	{
		'I' : 211,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'DINERO',
		'R' : 'MONEY'
	},
	{
		'I' : 212,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'MES',
		'R' : 'MONTH'
	},
	{
		'I' : 213,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'MÚSICA',
		'R' : 'MUSIC'
	},
	{
		'I' : 214,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'NERVIOSO',
		'R' : 'NERVOUS'
	},
	{
		'I' : 215,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'RUIDO',
		'R' : 'NOISE'
	},
	{
		'I' : 216,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'FIESTA',
		'R' : 'PARTY'
	},
	{
		'I' : 217,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'GENTE',
		'R' : 'PEOPLE'
	},
	{
		'I' : 218,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'BOLSILLO',
		'R' : 'POCKET'
	},
	{
		'I' : 219,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'PUERTO (DE MAR)',
		'R' : 'PORT'
	},
	{
		'I' : 220,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'PROGRESO',
		'R' : 'PROGRESS'
	},
	{
		'I' : 221,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'HISTORIA, CUENTO',
		'R' : 'STORY'
	},
	{
		'I' : 222,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'SEMANA',
		'R' : 'WEEK'
	},
	{
		'I' : 223,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'BIEN',
		'R' : 'WELL'
	},
	{
		'I' : 224,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'ANCHO',
		'R' : 'WIDE'
	},
	{
		'I' : 225,
		'T' : 'V',
		'N' : '1',
		'L' : '09',
		'P' : 'VENTANA',
		'R' : 'WINDOW'
	},
	{
		'I' : 226,
		'T' : 'V',
		'N' : '1',
		'L' : '10',
		'P' : 'HERMOSO',
		'R' : 'BEAUTIFUL'
	},
	{
		'I' : 227,
		'T' : 'V',
		'N' : '1',
		'L' : '10',
		'P' : 'AUTOBÚS',
		'R' : 'BUS'
	},
	{
		'I' : 228,
		'T' : 'V',
		'N' : '1',
		'L' : '10',
		'P' : 'PELIGROSO',
		'R' : 'DANGEROUS'
	},
	{
		'I' : 229,
		'T' : 'V',
		'N' : '1',
		'L' : '10',
		'P' : 'FECHA',
		'R' : 'DATE'
	},
	{
		'I' : 230,
		'T' : 'V',
		'N' : '1',
		'L' : '10',
		'P' : 'DIBUJO',
		'R' : 'DRAWING'
	},
	{
		'I' : 231,
		'T' : 'V',
		'N' : '1',
		'L' : '10',
		'P' : 'GORDO',
		'R' : 'FAT'
	},
	{
		'I' : 232,
		'T' : 'V',
		'N' : '1',
		'L' : '10',
		'P' : 'FEBRERO',
		'R' : 'FEBRUARY'
	},
	{
		'I' : 233,
		'T' : 'V',
		'N' : '1',
		'L' : '10',
		'P' : 'PRIMERO',
		'R' : 'FIRST'
	},
	{
		'I' : 234,
		'T' : 'V',
		'N' : '1',
		'L' : '10',
		'P' : 'VASO, VIDRIO, CRISTAL',
		'R' : 'GLASS'
	},
	{
		'I' : 235,
		'T' : 'V',
		'N' : '1',
		'L' : '10',
		'P' : 'EMPLEO, TRABAJO, TAREA',
		'R' : 'JOB'
	},
	{
		'I' : 236,
		'T' : 'V',
		'N' : '1',
		'L' : '10',
		'P' : 'TARDE',
		'R' : 'LATE'
	},
	{
		'I' : 237,
		'T' : 'V',
		'N' : '1',
		'L' : '10',
		'P' : 'LÍNEA',
		'R' : 'LINE'
	},
	{
		'I' : 238,
		'T' : 'V',
		'N' : '1',
		'L' : '10',
		'P' : 'AFORTUNADO',
		'R' : 'LUCKY'
	}
];

 	return {
 		vocabulario: vocabulario
 	};

 });

