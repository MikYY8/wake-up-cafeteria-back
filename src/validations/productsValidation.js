import { check } from "express-validator";
import { param } from "express-validator";

// VALIDACION DE ID --- Para GET ONE y DELETE.
export const idValidation = [
  param("id")
    .exists().withMessage("El ID es obligatorio")
    .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),
];

// VALIDACION PARA CREACIÓN DE PRODUCTO --- Para POST
export const productCreateValidation = [
  check("name")
    .notEmpty().withMessage("El nombre es obligatorio")
    .isString().withMessage("El nombre debe ser un string"),

  check("price")
    .notEmpty().withMessage("El precio es obligatorio")
    .isNumeric().withMessage("El precio debe ser numérico"),

  check("description")
    .optional()
    .isString().withMessage("La descripción debe ser un string"),

  check("image")
    .optional()
    .isString().withMessage("La imagen debe ser un string (URL)")
];

// VALIDACION PARA MODIFICACIÓN DE PRODUCTO --- Para PUT
export const productUpdateValidation = [
  param("id")
    .exists().withMessage("El ID es obligatorio")
    .isInt({ min: 1 }).withMessage("El ID debe ser un número entero positivo"),

  check("name")
    .optional()
    .isString().withMessage("El nombre debe ser un string"),

  check("price")
    .optional()
    .isNumeric().withMessage("El precio debe ser numérico"),

  check("description")
    .optional()
    .isString().withMessage("La descripción debe ser un string"),

  check("image")
    .optional()
    .isString()
];
