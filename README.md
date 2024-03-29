# Eventos Perú

Eventos Perú es un agregador de eventos de diferentes plataformas, específicamente:

- [Teleticket](https://teleticket.com.pe/)
- [Joinnus](https://www.joinnus.com/)
- [Ticketmaster](https://www.ticketmaster.pe/)
- [Passline](https://www.passline.com/home)

Solo debes buscar el nombre del evento en el buscador y, si existe en alguna de las plataformas de tickets mencionadas anteriormente, este aparecerá como resultado de tu busqueda.

Los eventos son actualizados diariamente.

## Propósito

El propósito del proyecto viene de la dificultad para recordar dónde se deben comprar las entradas de un evento en particular.

**Ejemplo:** _Uno recuerda que va a venir Taylor Swift a Lima, pero no necesariamente sabe por cuál de las múltiples plataformas de tickets puede adquirir sus entradas._

## Desarrollo

Las tecnologías utilizadas para este proyecto son las siguientes:

- Backend
  - NodeJS v18
  - JSDom
  - Firebase
  - Typesense Cluster
- Frontend
  - NextJS 13
  - Typesense Client
  - TailwindCSS

[Typesense](https://typesense.org/) es un motor de "Fuzzy Search" el cual busca proximidad en lugar de exactitud a la hora de realizar una busqueda.

JSDom es una herramienta para "emular" el contenido de una página y acceder al **DOM**, con el cual podemos realizar un escaneo de las páginas y obtener la información necesaria que hace este proyecto funcionar.

## Informacion disponible

En Eventos Perú obtenemos la siguiente informacion de las ticketeras:

- Nombre
- Imagen
- URL

Version 2:

- Detalle del evento
- Status del evento (finalizado o no)
- Fechas
- Precios

## Disclaimer

El proyecto fue realizado como parte de un reto personal libre.
