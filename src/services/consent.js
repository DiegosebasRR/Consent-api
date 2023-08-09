import { ConsentModel } from "../models/consent.js";

const getConsents = async () => {
  const response = await ConsentModel.find({});
  return response;
};
const getConsent = async (id) => {
  const response = await ConsentModel.findOne({ _id: id });
  return response;
};
const postConsent = async (data) => {
  const response = await ConsentModel.create(data);
  return response;
};
const updateConsent = async (id, data) => {
  const response = await ConsentModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return response;
};
const deleteConsent = async (id) => {
  const response = await ConsentModel.deleteOne({ _id: id });
  return response;
};

export { deleteConsent, getConsent, postConsent, updateConsent, getConsents };
