"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const pet_service_1 = require("./pet.service");
const pick_1 = __importDefault(require("../../shared/pick"));
const pet_const_1 = require("./pet.const");
const createPet = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    const petData = req.body;
    const result = yield pet_service_1.PetServices.createPet(petData, file);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Pet added successfully",
        statusCode: http_status_1.default.CREATED,
        data: result
    });
}));
const updateSinglePet = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = (0, pick_1.default)(req.body, pet_const_1.petUpdateableFields);
    const file = req.file;
    const result = yield pet_service_1.PetServices.updateSinglePet(id, data, file);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Pet profile updated successfully",
        statusCode: http_status_1.default.OK,
        data: result
    });
}));
const uploadMultiplePhotos = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body;
    const files = req.files;
    const result = yield pet_service_1.PetServices.uploadMultiplePhotos(files, id);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Multiple Photo Uploaded Successfully",
        statusCode: http_status_1.default.CREATED,
        data: result
    });
}));
const getAllPets = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, pet_const_1.petFilterableFields);
    const options = (0, pick_1.default)(req.query, ['page', "limit", "sortBy", "sortOrder", "age"]);
    const result = yield pet_service_1.PetServices.getAllPet(filters, options, req.query);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Pets retrieved successfully",
        statusCode: http_status_1.default.OK,
        meta: result.meta,
        data: result.data
    });
}));
const getSinglePet = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield pet_service_1.PetServices.getSinglePet(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Pet is retrieved successfully",
        statusCode: http_status_1.default.OK,
        data: result
    });
}));
const deleteSinglePet = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield pet_service_1.PetServices.deleteSinglePet(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Pet deleted successfully",
        statusCode: http_status_1.default.OK,
        data: result
    });
}));
const getUniqueAges = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pet_service_1.PetServices.getUniqueAges();
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Pets uniqueAges  get successfully",
        statusCode: http_status_1.default.OK,
        data: result
    });
}));
const getUniqueBreeds = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pet_service_1.PetServices.getUniqueBreeds();
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Pets uniqueBreeds  get successfully",
        statusCode: http_status_1.default.OK,
        data: result
    });
}));
const getUniqueLocations = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pet_service_1.PetServices.getUniqueLocations();
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Pets uniqueLocations  get successfully",
        statusCode: http_status_1.default.OK,
        data: result
    });
}));
const getUniqueSpecies = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pet_service_1.PetServices.getUniqueSpecies();
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Pets uniqueSpecies  get successfully",
        statusCode: http_status_1.default.OK,
        data: result
    });
}));
const getUniqueMedicalHistory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pet_service_1.PetServices.getUniqueMedicalHistory();
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Pets uniqueMedicalHistory  get successfully",
        statusCode: http_status_1.default.OK,
        data: result
    });
}));
exports.PetControllers = {
    getAllPets,
    getSinglePet,
    createPet,
    updateSinglePet,
    uploadMultiplePhotos,
    deleteSinglePet,
    getUniqueAges,
    getUniqueBreeds,
    getUniqueLocations,
    getUniqueSpecies,
    getUniqueMedicalHistory
};
