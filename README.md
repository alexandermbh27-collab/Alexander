# Territorio Moderna - mapa GPS

Abre `index.html` desde un servidor web seguro (HTTPS para teléfonos) y acepta el permiso de ubicación. La aplicación carga `territorio-moderna.kml`, exportado del My Maps proporcionado, y lo superpone sobre las calles de OpenStreetMap. La aplicación no envía la ubicación del usuario a un servidor propio.

## Funcionamiento

1. Abre el mapa desde el teléfono y presiona **Mi ubicación**.
2. El punto azul muestra el GPS en tiempo real.
3. Si el punto cae en uno de los polígonos importados, la tarjeta indica el territorio y, cuando corresponde, la cuadra.

El KML contiene los territorios y cuadras que ya estaban dibujados en My Maps. Si se cambia ese mapa, vuelve a exportarlo y sustituye `territorio-moderna.kml` para actualizar esta aplicación.

## Cobertura publicada

Esta primera publicación incluye los territorios 1–30 y sus cuadras presentes en el My Maps. Los territorios 31–48 existen en el plano PDF, pero no se publican todavía porque requieren digitalización y validación calle por calle.
