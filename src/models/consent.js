import { Schema, model } from "mongoose";

const ConsentSchema = new Schema({
  identifier: {
    type: String,
    required: true,
    unique: true,
    default: () => Math.random().toString(36).substring(2, 10).toUpperCase(),
  },
  status: { type: Boolean, required: true },
  subject: { type: String, required: true },
  identificationDocument: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  sex: { type: String, required: true },
  mobile: { type: String, required: true },
  emailAddress: { type: String, required: true },
  address: { type: String, required: true },
  language: { type: String, required: true },
  nationality: { type: String, required: true },
  age: { type: String, required: true },
  isMinor: { type: Boolean, required: true, default: false },
  responsible: {
    name: { type: String },
    dni: { type: String },
  },
  date: { type: String, required: true },
  grantor: { type: String, required: true },
  grantee: { type: String, required: true },
  manager: { type: String, required: true },
  controller: { type: String, required: true },
  sourceAttachment: { type: String, required: true },
  sourceReference: { type: String, required: true },
  regulatoryBasis: { type: String, required: true },
  policyBasis: {
    reference: { type: String, required: true },
    url: { type: String, required: true },
  },
  policyText: { type: String, required: true },
  verification: {
    verified: { type: Boolean, required: true },
    verificationType: { type: String, required: true },
    verifiedBy: { type: String, required: true },
    verifiedWith: { type: String, required: true },
    verificationDate: { type: String, required: true },
  },
  provision: {
    period: { type: String, required: true },
    actor: {
      role: { type: String, required: true },
      reference: { type: String, required: true },
    },
    action: { type: String, required: true },
    securityLabel: { type: String, required: true },
    purpose: { type: String, required: true },
    documentType: { type: String, required: true },
    resourceType: { type: String, required: true },
    code: { type: String, required: true },
    dataPeriod: { type: String, required: true },
    data: {
      DNAanalyses: { type: Boolean, required: true },
      SampleStorage: { type: Boolean, required: true },
      CodeSample: { type: Boolean, required: true },
      CarrierOfAGeneticVariant: { type: Boolean, required: true },
      ReceiveGeneticChangeInformation: { type: Boolean, required: true },
      ConsultationOnGeneticVariantEveryFewYears: {
        type: Boolean,
        required: true,
      },
      DisclosureOfResultsToFamilyMembers: { type: Boolean, required: true },
      PossibilityOfAdditionalTestingOfOtherFamilyMembers: {
        type: Boolean,
        required: true,
      },
      DegreeOfRiskOfSufferingFromAGeneticCondition: {
        type: Boolean,
        required: true,
      },
      ListOfGeneticDiseasesvalue: { type: Boolean, required: true },
      CausesOfGeneticDiseasesvalue: { type: Boolean, required: true },
      GeneticDataSentToGenomeRepositories: { type: Boolean, required: true },
      SharingGeneticSequencingData: { type: Boolean, required: true },
      SharingPhotographsOrImages: { type: Boolean, required: true },
      meaning: { type: String, required: true },
      reference: { type: String, required: true },
    },
    expression: { type: String, required: true },
    provision: { type: String, required: true },
  },
});

const ConsentModel = model("consent", ConsentSchema);

export { ConsentModel };
