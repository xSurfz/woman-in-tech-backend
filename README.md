# Women in Tech - Backend

Backend oficial de la plataforma **Women in Tech**.

## Descripción

API REST encargada de la gestión de contenido, autenticación y administración de la plataforma.

Proporciona endpoints para:

* Eventos
* Programas
* Recursos
* Testimonios
* Miembros
* Intereses
* Autenticación de administradores

## Tecnologías utilizadas

* Node.js
* Express
* TypeScript
* Prisma ORM
* SQLite
* JWT
* Multer

## Arquitectura

El proyecto sigue principios de:

* Clean Architecture
* Domain Driven Design (DDD)
* Arquitectura modular

Cada módulo se organiza en:

```text
modules/
├── application/
├── domain/
├── infrastructure/
└── presentation/
```

## Requisitos

* Node.js 20+
* npm 10+

## Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresar al proyecto:

```bash
cd woman-in-tech-backend
```

Instalar dependencias:

```bash
npm install
```

## Variables de entorno

Crear un archivo `.env`:

```env
DATABASE_URL="file:./dev.db"

JWT_SECRET="your-secret-key"

PORT=3000
```

## Base de datos

Ejecutar migraciones:

```bash
npx prisma migrate dev
```

Generar cliente Prisma:

```bash
npx prisma generate
```

Abrir Prisma Studio:

```bash
npx prisma studio
```

## Ejecución en desarrollo

```bash
npm run dev
```

Servidor disponible en:

```text
http://localhost:3000
```

## Estructura del proyecto

```text
src/
├── core/
├── infrastructure/
├── modules/
├── shared/
└── server.ts
```

## Módulos disponibles

### Públicos

```text
/api/events
/api/programs
/api/resources
/api/testimonials
/api/members
/api/interests
```

### Administración

```text
/api/admin/events
/api/admin/programs
/api/admin/resources
/api/admin/testimonials
/api/admin/members
/api/admin/interests
```

### Autenticación

```text
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

## Gestión de archivos

Las imágenes son gestionadas mediante:

* Multer
* Storage Provider
* Uploads locales

## Seguridad

* JWT
* Cookies HTTP Only
* Middleware de autenticación
* Validación de datos con Zod

## Autores

Proyecto desarrollado por Daniel Lancheros y Juan Giraldo, para la asignatura de Informática Social.
