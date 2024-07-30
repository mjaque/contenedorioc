
const DIR_CLASES = '../'
const DIR_MODELOS = `${DIR_CLASES}modelos/`
const DIR_VISTAS = `${DIR_CLASES}vistas/`
const DIR_MENUS = `${DIR_VISTAS}menus/`
const DIR_CONTROLADORES = `${DIR_CLASES}controladores/`
const DIR_SERVICIOS = `${DIR_CLASES}servicios/`

export const config = {
	constantes: {
		idbNombre: 'idbTest',
		idbVersion: 2,
		dirImg: './img/'
	},
	clases: {
		Modelo: {
			pathClase: `${DIR_MODELOS}modelo.js`,
			dependencias: []
		},
		ControladorInicial: {
			pathClase: `${DIR_CONTROLADORES}inicial.js`,
			dependencias: ['VistaInicial']
		},
		VistaInicial: {
			pathClase: `${DIR_VISTAS}inicial.js`,
			dependencias: ['MenuInicial']
		},
		MenuInicial: {
			pathClase: `${DIR_MENUS}inicial.js`,
			dependencias: []
		}
	}
}
