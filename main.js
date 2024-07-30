import { config } from './config.js'
import { ContenedorIoC } from './contenedorioc.js'

window.onload = iniciar

async function iniciar(){
	const contenedorIoC = new ContenedorIoC(config)

	const controladorInicial = await contenedorIoC.getInstancia('ControladorInicial')
	controladorInicial.verVista()
	//...
}

