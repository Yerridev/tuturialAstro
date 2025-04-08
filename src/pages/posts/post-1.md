---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Mi primera publicación en el blog'
pubDate: 2025-05-04
description: 'Este es la primera publicación de mi nuevo blog Astro.'
author: 'Yerridev'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'Logo completo de Astro'
tags: ["astro", "bloguear", "apnderde en público"]
---


¡Bienvenido a mi _nuevo blog_ sobre el aprendizaje de Astro! Aquí, voy a compartir mi viaje de aprendizaje a medida que construyo un nuevo sitio web.

## Lo que he conseguido 

1. **Instalación de Astro**: En primer lugar, creado un nuevo proyecto Astro y configurar mis cuentas en linea.

2. **Creación de páginas**: Luego aprendí cómo hacer páginas creando nuevos archivos `.astro` y lolocándolos en la carpeta `src/pages/`

3. **Craecion de publicaciones**: ¡Esta es mi primera publicación ! ¡Ahora tengo páginas de Astro y publicaciones en Markdown!

## Próximos pasos

Terminaré el tutorial de AStro, y luego seguiré añadiendo más publicaciones. Mira este espacio para más por venir.

```js  {js icon title:"title"}
class Vehiculo {
	constructor({id, latitud, longitud}){
		this.id = id;
		this.position = {latitud, longitud};
		this.estado= "deshabilitado";
	};
	set position({latitud, longitud}){
		this.time= Date.now();
		this.longitud = longitud;
		this.latitud = latitud;
	};
	get position(){
		return {
			latitud: this.latitud,
			longitud: this.longitud
		};
	};
};

let vehiculo = new Vehiculo({longitud: 19.21, latitud: 49.234, id: "001"});
vehiculo.positon = {longitud: 19.1234, latitud: 94.234};
console.log(vehiculo.position);
```
