# 🧭 Guía Rápida de Trabajo en Equipo con Git y GitHub

## 🌱 1. Clonar el repositorio

```bash
git clone https://github.com/MikYY8/wake-up-cafeteria-back.git
cd TU_REPO
```

## 🌿 2. Crear una nueva rama para tu tarea

⚠️ Nunca trabajes directo en main

```bash
git checkout -b feature/nombre-de-tu-tarea
```


📦 Ejemplo:

```bash
git checkout -b feature/login
```

## 🧱 3. Hacer tus cambios

Programá, editá y guardá tus archivos.
Podés verificar el estado de tus cambios con:

```bash
git status
```

## 💾 4. Guardar los cambios localmente

```bash
git add .
git commit -m "Descripción corta de lo que hiciste"
```

💡 Ejemplo:

```bash
git commit -m "Agrego formulario de login y estilos básicos"
```

## ☁️ 5. Subir tu rama al repositorio remoto

```bash
git push origin feature/nombre-de-tu-tarea
```

## 🔀 6. Crear un Pull Request (PR)

Entrá al repo en GitHub

Hacé clic en Pull requests → New pull request

Seleccioná tu rama → main

Escribí un título claro (ej: “Agrego página de login”)

Clic en Create pull request

## 🧩 7. Revisión y Merge

Revisar los cambios

Si todo está correcto → Merge pull request

¡Listo! los cambios se integran a main 🎉

## 💡 Reglas de oro

🚫 No pushear directo al main 

🌿 1 rama = 1 funcionalidad

🔁 Siempre crear Pull Requests para fusionar cambios

🧹 Actualizá tu rama con main si otros ya mergearon:

```bash
git checkout main
git pull origin main
git checkout feature/mi-rama
git merge main
```

👩‍💻 Tip: mantené los commits pequeños, claros y con mensajes descriptivos.
Esto ayuda a entender el historial y resolver conflictos fácilmente.