// scripts/build-data.js
const fs = require('fs');
const path = require('path');

// Helper to construct an organ object
function organ(
  speciesSlug,
  systemSlug,
  meshId,
  nameEn,
  nameAr,
  latinName,
  descriptionEn,
  descriptionAr,
  bloodSupplyEn,
  bloodSupplyAr,
  innervationEn,
  innervationAr,
  clinicalPearlsEn,
  clinicalPearlsAr,
  focusPos,
  focusTarget,
  shape,
  geomPos,
  geomRot,
  geomScale,
  color,
  roughness,
  metalness,
  q1En,
  q1Ar,
  q1Opts,
  q1Ans,
  q1ExpEn,
  q1ExpAr,
  q2En,
  q2Ar,
  q2Opts,
  q2Ans,
  q2ExpEn,
  q2ExpAr
) {
  return {
    speciesSlug,
    systemSlug,
    meshId,
    nameEn,
    nameAr,
    latinName,
    descriptionEn,
    descriptionAr,
    bloodSupplyEn,
    bloodSupplyAr,
    innervationEn,
    innervationAr,
    clinicalPearlsEn,
    clinicalPearlsAr,
    focusCoordinates: {
      position: focusPos,
      target: focusTarget,
    },
    geometry: {
      shape,
      position: geomPos,
      rotation: geomRot,
      scale: geomScale,
      color,
      roughness,
      metalness,
    },
    quizQuestions: [
      {
        questionEn: q1En,
        questionAr: q1Ar,
        options: q1Opts,
        correctAnswer: q1Ans,
        explanationEn: q1ExpEn,
        explanationAr: q1ExpAr,
      },
      {
        questionEn: q2En,
        questionAr: q2Ar,
        options: q2Opts,
        correctAnswer: q2Ans,
        explanationEn: q2ExpEn,
        explanationAr: q2ExpAr,
      },
    ],
  };
}

console.log('Script helper loaded.');
