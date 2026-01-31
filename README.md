# Dashboard local (HTML) – Deuda y Cartera CPM (v2)

Este paquete crea un **tablero local** (HTML + CSS + JavaScript) inspirado en un tablero con:
- **Panel de filtros**
- **KPIs / tarjetas**
- **Gráficos** (barras)
- **Rankings (Top N)**
- **Tabla detallada** con paginación
- **Exportación** del conjunto filtrado a CSV

## 1) Abrir el dashboard (modo simple, sin servidor)
1. Descomprime el ZIP.
2. Abre `index.html` con doble click.
3. En **Filtros → Datos**, selecciona un archivo **CSV o TXT** (por ejemplo `data/sample.csv`).

> Nota: en este modo (file://) el botón **“Cargar ejemplo”** puede no funcionar por restricciones del navegador. Pero **cargar el archivo manualmente sí funciona**.

## 2) Abrir el dashboard (recomendado con servidor local)
En la carpeta del dashboard, ejecuta:

### Windows (PowerShell o CMD)
```bash
python -m http.server 8000
```

Luego abre en tu navegador:
- http://localhost:8000

Y puedes usar el botón **“Cargar ejemplo (data/sample.csv)”**.

## 3) Fuente de datos: CSV, TXT o DBF

### Opción A — CSV o TXT
- Puedes cargar **CSV** o **TXT** siempre que sea un archivo tabular con **encabezado** y delimitado por **coma (,)**, **punto y coma (;)** o **TAB**.
- Esta versión incluye compatibilidad con encabezados alternos comunes (por ejemplo: `CCATASTRAL`, `CONTRIBUYENTE`, `SALDOPENDIENTE`, etc.), creando aliases hacia los nombres internos del tablero.

### Opción B — DBF (convertir a CSV)
Incluye un script en `tools/convert_dbf_to_csv.py`.

Ejemplo:
```bash
pip install geopandas
python tools/convert_dbf_to_csv.py "ANALISIS_2_DEUDA_CARTERA_CPM_IT_05012025.dbf" "data/mi_tabla.csv"
```
Después carga `data/mi_tabla.csv` desde el dashboard.

## 4) Personalización rápida
- Cambia colores y layout en `assets/styles.css`
- Cambia KPIs, columnas de tabla y gráficos en `assets/dashboard.js`
- Configura etiquetas y columnas numéricas en `data/columns.json`

---
Generado para ejecución local, sin dependencias externas.


### v5 (OSM)
Si el SHP viene en UTM y el ZIP incluye .prj con UTM/WGS84, el dashboard reproyecta a WGS84 para poder usar el mapa base de OpenStreetMap.


### v6
- OSM por defecto ON (si no hay internet muestra mensaje, no bloquea).
- Para SHP UTM 16N: incluye .prj en el ZIP o selecciona âUTM 16N (WGS84)â en el modal.
- USO (TXT) se reconoce para segmentaciÃ³n.
- Estilos por capa se configuran en popup.


### v7
- Iconos GIS en acciones de capa (tiles).


### v8
- Configuración (Datos) en popup (botón ⚙️).
- Estilo de capa compacto.
- Barra de herramientas vertical en el visor.
- Selector de mapa base OSM.
- Consultar: clic sobre geometría para ver atributos y datos TXT asociados (si hay vínculo).


### v9
KPIs configurables y mapas base ampliados (OSM + ESRI + XYZ/WMS). WFS se agrega como capa.
