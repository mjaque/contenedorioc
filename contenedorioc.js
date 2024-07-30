export class ContenedorIoC{

	#constantes = new Map()
	#clases = new Map()

	constructor(config){
		for (const nombre in config.constantes)
			this.#constantes.set(nombre, config.constantes[nombre])
		for (const nombre in config.clases)
			this.#clases.set(nombre, config.clases[nombre])
	}

	getConstante(clave){
		return this.#constantes.get(clave)
	}

	async getInstancia(nombreClase){
		const registro = this.#clases.get(nombreClase)
		const importado = await import(registro.pathClase)
		const clase = importado[nombreClase]

		const instancia = new clase()

		const dependencias = registro.dependencias
		const promesas = []
		dependencias.forEach(nombre => {
			const promesa = this.getInstancia(nombre)
				.then( dependencia => {
					instancia[`set${nombre}`](dependencia)
				})
			promesas.push(promesa)
		})
		await Promise.all(promesas)
		return instancia
	}
}
