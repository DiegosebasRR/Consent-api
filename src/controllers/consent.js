import {
  deleteConsent,
  getConsent,
  postConsent,
  updateConsent,
  getConsents,
} from "../services/consent.js";

const getConsentsCtrl = async (req, res) => {
  try {
    const response = await getConsents();
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};

const getConsentCtrl = async ({ params }, res) => {
  try {
    const { id } = params;
    const response = await getConsent(id);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};

const postConsentCtrl = async ({ body }, res) => {
  try {
    const response = await postConsent(body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const updateConsentCtrl = async ({ body, params }, res) => {
  try {
    const { id } = params;
    const response = await updateConsent(id, body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteConsentCtrl = async ({ params }, res) => {
  try {
    const { id } = params;
    const response = await deleteConsent(id);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};

export {
  updateConsentCtrl,
  deleteConsentCtrl,
  postConsentCtrl,
  getConsentCtrl,
  getConsentsCtrl,
};
