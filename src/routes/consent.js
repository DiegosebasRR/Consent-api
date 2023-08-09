import { Router } from "express";
import {
  updateConsentCtrl,
  deleteConsentCtrl,
  postConsentCtrl,
  getConsentCtrl,
  getConsentsCtrl,
} from "../controllers/consent.js";

const router = Router();

router.get("/", getConsentsCtrl);

router.get("/:id", getConsentCtrl);

router.post("/", postConsentCtrl);

router.put("/:id", updateConsentCtrl);

router.delete("/:id", deleteConsentCtrl);

export { router as routerConsent };
