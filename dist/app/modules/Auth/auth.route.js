"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const validateRequest_1 = __importDefault(require("../../middlewars/validateRequest"));
const auth_validation_1 = require("./auth.validation");
const auth_1 = __importDefault(require("../../middlewars/auth"));
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(auth_validation_1.AuthValidations.loginUser), auth_controller_1.AuthControllers.loginUser);
router.post("/change-password", (0, auth_1.default)(), (0, validateRequest_1.default)(auth_validation_1.AuthValidations.changePassword), auth_controller_1.AuthControllers.changePassword);
exports.AuthRoutes = router;
