import { body } from "express-validator";

export const validateTurfInput = [
  body("name").notEmpty().withMessage("Name is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("location").notEmpty().withMessage("Location is required"),
  body("sportTypes").notEmpty().withMessage("Sport types is required"),
  body("pricePerHour")
    .optional()
    .isNumeric()
    .withMessage("Price per hour must be a number"),
  // New pricing structure validations
  body("pricing.weekdayMorning")
    .optional()
    .isNumeric()
    .withMessage("Weekday morning price must be a number"),
  body("pricing.weekdayEvening")
    .optional()
    .isNumeric()
    .withMessage("Weekday evening price must be a number"),
  body("pricing.weekendMorning")
    .optional()
    .isNumeric()
    .withMessage("Weekend morning price must be a number"),
  body("pricing.weekendEvening")
    .optional()
    .isNumeric()
    .withMessage("Weekend evening price must be a number"),
];
