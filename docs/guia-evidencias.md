# Guía de evidencias

La rúbrica pide **al menos una evidencia por módulo**. Las diez fichas ya tienen evidencia enlazada: cinco son archivos dentro de `evidencias/` y las demás enlaces a repositorios de GitHub.

> La evidencia de adaptación es un enlace de Google Drive que todavía **pide iniciar sesión**. Para que el docente pueda abrirla, cambia el permiso del archivo a «Cualquier persona con el enlace». Después se comprueba en incógnito.

Una evidencia es una prueba de lo que hiciste: una captura, una foto del cuaderno, un archivo del proyecto o un enlace a un repositorio. **No se inventan**: si no tienes la captura, tómala de nuevo abriendo el programa, o usa una foto del material de clase.

## Qué capturar en cada módulo
Cada carpeta de `evidencias/` tiene su propio `LEEME.md` con la indicación exacta. Resumen:

| Carpeta | Qué mostrar |
|---|---|
| `01-adaptacion/` | Hoja de diagnóstico, acuerdos del equipo o actividad de integración |
| `02-m33-bd/` | MySQL Workbench con una base, una tabla o una consulta |
| `03-m34-documentacion/` | Documento del sistema, diagrama o propuesta técnica |
| `04-m36-ingles/` | Guion en inglés o diapositiva de la dramatización |
| `05-m38-proyecto/` | Galería, juego, stand de la feria o código en VS Code |
| `06-m1-aplicaciones/` | Formulario ASPX o CRUD en Windows Forms con Access |
| `07-m2-moviles/` | App en .NET MAUI en el emulador o tienda PrestaShop del spa |
| `08-mantenimiento/` | Modelo de datos de la cafetería o documento del proyecto |
| `09-cooperativismo/` | Organizador gráfico, mapa conceptual o trabajo grupal |
| `10-tesis-auralix/` | Plan de inversión, documento de tesis o base de datos |

## Cómo capturar (3 pasos)
1. **Abre el programa o el material** que quieres mostrar (MySQL, VS Code, la app, el cuaderno, el documento).
2. **Toma la captura:**
   - Windows: tecla **Windows + Shift + S** → recorta → se guarda en el portapapeles; pégala en Paint y guarda como `.png`/`.jpg`.
   - Celular: foto o captura de pantalla; recórtala para que no salga tu nombre ni el de otras personas.
   - Documento: abre la página que quieres probar y captura solo esa página.
3. **Guárdala en la carpeta del módulo** con el nombre sugerido (minúsculas, sin espacios, sin tildes).

## Nombres de archivo sugeridos
| Carpeta | Nombre sugerido |
|---|---|
| `01-adaptacion/` | `diagnostico.jpg` |
| `02-m33-bd/` | `consulta-sql.png` |
| `03-m34-documentacion/` | `documento-sistema.png` |
| `04-m36-ingles/` | `guion-dramatizacion.jpg` |
| `05-m38-proyecto/` | `feria-logros.jpg` |
| `06-m1-aplicaciones/` | `crud-access.png` |
| `07-m2-moviles/` | `app-maui.png` |
| `08-mantenimiento/` | `modelo-cafeteria.png` |
| `09-cooperativismo/` | `mapa-cooperativismo.jpg` |
| `10-tesis-auralix/` | `plan-inversion-auralix.png` |

## Cómo nombrar y guardar
1. Guarda el archivo dentro de la carpeta del módulo, con un nombre corto y sin espacios:
   `evidencias/02-m33-bd/consulta-join.png`
2. Formatos recomendados: `.png`, `.jpg`, `.pdf`. Evita `.docx` y `.zip` pesados.
3. Comprime las capturas para que no pasen de **500 KB** (puedes usar la herramienta Recortes de Windows y guardar como JPG).
4. **Tapa o recorta** nombres completos, correos, notas y datos de compañeros antes de publicar. El portal es público.

## Cómo enlazarla en el portal
Abre `data/modulos.js`, busca el módulo y agrega el campo `evidencias` (o añade un elemento si ya existe):

```js
evidencias:[
  rec("Consulta con JOIN en MySQL Workbench", "evidencias/02-m33-bd/consulta-join.png")
],
```

`rec` ya está definido al inicio del archivo: recibe el **título** y la **ruta**. La ruta siempre empieza por `evidencias/` y usa `/`, no `\`.

Si la evidencia es un enlace externo (por ejemplo un repositorio de GitHub), también funciona:

```js
evidencias:[
  rec("Repositorio del proyecto en GitHub", "https://github.com/TU-USUARIO/TU-REPO")
],
```

## Cómo comprobar que quedó bien
1. Abre el portal (Live Server o `python -m http.server`).
2. Abre la ficha del módulo: la evidencia debe aparecer como enlace, sin el aviso «Aún sin evidencia».
3. Haz clic en el enlace: debe abrir la imagen o el archivo, no dar error 404.
4. La tarjeta debe decir **«Ficha completa»** en lugar de «faltan 1 dato(s)».
5. Si publicaste en GitHub Pages, revisa el enlace en una ventana de incógnito: los nombres de archivo distinguen mayúsculas y minúsculas.

## Lista de control
- [x] `01-adaptacion` (enlace de Drive; falta dar acceso público)
- [x] `02-m33-bd`
- [x] `03-m34-documentacion`
- [x] `04-m36-ingles`
- [x] `05-m38-proyecto`
- [x] `06-m1-aplicaciones`
- [x] `07-m2-moviles`
- [x] `08-mantenimiento`
- [x] `09-cooperativismo`
- [x] `10-tesis-auralix`
- [x] Las diez fichas dicen «Ficha completa».
- [ ] Ningún enlace da error 404.
- [ ] No hay datos personales visibles.
