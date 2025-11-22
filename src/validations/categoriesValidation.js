import { check } from "express-validator";


// VALIDACION DE ID --- Para GET ONE y DELETE.
export const idValidation = [
  param("id")
    .exists().withMessage("El ID es obligatorio")
    .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
];

// VALIDACION PARA CREACIÓN DE CATEGORÍA --- Para POST
export const categoryCreateValidation = [
    check("name")
        .notEmpty().withMessage("El nombre es obligatorio")
        .isString().withMessage("El nombre debe ser un string"),

    check("description")
        .optional()
        .isString().withMessage("La descripción debe ser un string"),

];

// VALIDACION PARA MODIFICACIÓN DE CATEGORÍA --- Para PUT
export const categoryUpdateValidation = [
  param("id")
    .exists().withMessage("El ID es obligatorio")
    .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),

  check("name")
    .optional()
    .isString().withMessage("El nombre debe ser un string"),

  check("description")
    .optional()
    .isString().withMessage("La descripción debe ser un string"),
];
