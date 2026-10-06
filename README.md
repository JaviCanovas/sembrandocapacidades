# 🌱 Sembrando Capacidades — Prototipo Visual Mobile

Prototipo interactivo de alta fidelidad diseñado para la presentación de un proyecto universitario de innovación social e inclusión sociolaboral en la **Región de Murcia**.

---

## 🚀 Cómo ejecutar en local

Para poner en marcha el prototipo en tu ordenador:

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
```

Abre en tu navegador la dirección indicada en la terminal (habitualmente `http://localhost:5173/` o `http://localhost:5174/`).

---

## 📱 Guía de Navegación y Capturas Sugeridas

En la parte superior de la ventana encontrarás una **Barra de Presentación** con acceso directo de un solo clic a las **8 pantallas principales**, además de la barra de navegación inferior móvil.

| Botón | Pantalla | Captura sugerida para el documento universitario |
|:---:|:---|:---|
| **1** | **Bienvenida** | *Captura 1: Identidad visual, metáfora botánica de germinación, tagline ("Todas las personas tienen algo que aportar") y los tres pilares del proyecto.* |
| **2** | **Cuestionario (70%)** | *Captura 2: Algoritmo de personalización con barra al 70%, chips premarcados de comodidad/movilidad y mensaje respetuoso sin estigmas ni juicios.* |
| **3** | **Inicio / Match IA** | *Captura 3: Saludo personalizado ("Hola, Lucía"), selector adaptativo "¿Cómo estás hoy?" y tarjetas de afinidad calculada con porcentaje de match.* |
| **4** | **Detalle de Oferta** | *Captura 4: Detalle del empleo adaptado (Auxiliar de archivo 10h), desglose "¿Por qué te encaja?", ruta esquemática en Línea 9 de bus y política de bajones.* |
| **5** | **Explorar Oportunidades** | *Captura 5: Catálogo de iniciativas con filtros superiores (Todo, Empleo, Cursos, Talleres, Recursos) y selectores de ciudad y distancia de transporte.* |
| **6** | **Mi Perfil** | *Captura 6: Perfil de Lucía M., protección sensible del diagnóstico con candado, bloque "Mi forma de trabajar" y modal de recursos de apoyo con la Línea 024.* |
| **7** | **Espacio de Talentos** | *Captura 7: Puesta en valor de capacidades artísticas (Música), maqueta acústica, cuaderno de letras manuscritas y comentarios de ánimo de la comunidad.* |
| **8** | **Comunidad** | *Captura 8: Red de afinidad entre usuarios de la Región de Murcia (intercambio de talentos) y muro de apoyo mutuo.* |

---

## 🛠️ Características Técnicas

- **Stack**: React 18 + Vite + Tailwind CSS + Lucide React.
- **100% Offline y seguro**: Sin llamadas a APIs externas ni almacenamiento en base de datos.
- **Datos hardcodeados**: Centralizados en [`src/data/mock.js`](./src/data/mock.js).
- **Marco Smartphone**: Renderizado dentro de un marco de móvil centrado (~392x844 px) con Dynamic Island, reloj y barra de conectividad.
- **Modo Captura**: El botón **"Marco iPhone / Sin marco"** de la barra superior permite quitar el bisel exterior si deseas recortar directamente el contenido limpio de la pantalla.
- **Atajo en Windows**: Pulsa <kbd>Win</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> para recortar la captura de cada pantalla.
