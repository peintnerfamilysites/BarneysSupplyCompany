export const insuranceFrictionPoints = [
  {
    title: "The 'Delayed or Denied' Game",
    problem:
      "Insurance providers often use confusing, technical damage guidelines to delay processing structural claims, hoping homeowners give up or accept lower payouts.",
  },
  {
    title: "Missed Hidden Structural Faults",
    problem:
      "Standard claims adjusters look at surface-level impact. They regularly miss compromised underlying decking foundations or fractures that lead to catastrophic structural rot down the road.",
  },
  {
    title: "Vague, Incomplete Estimations",
    problem:
      "Payout scopes frequently underestimate real-world premium material prices or omit localized building code compliance costs required in Southwest Missouri.",
  },
];

export function getCalculatorGuidance({ damageType, roofAge, claimStatus }) {
  const steps = [];
  let urgency = "Moderate";
  let colorClass = "text-yellow-500";

  if (
    damageType === "leak" ||
    damageType === "tree" ||
    claimStatus === "denied"
  ) {
    urgency = "Critical / Immediate Action";
    colorClass = "text-red-500";
  }

  if (claimStatus === "not_filed") {
    steps.push(
      "Schedule a thorough structural diagnostic to map damage fields before contacting your carrier.",
      "Ensure your contractor tags structural codes (e.g., ice & water shield requirements).",
    );
  } else if (claimStatus === "waiting") {
    steps.push(
      "Request a joint on-site meeting. Our experts will stand out on the roof side-by-side with your insurance adjuster.",
      "Prepare explicit structural, multi-angle photographic evidence.",
    );
  } else {
    steps.push(
      "Obtain a complete itemized copy of the adjuster's structural estimate layout breakdown.",
      "File a formal structural dispute/supplement request backed by our certified assessment proof.",
    );
  }

  if (Number(roofAge) > 15) {
    steps.push(
      "Note: Roof components older than 15 years face stricter depreciation models. Detailed framework assessments are vital.",
    );
  }

  return { steps, urgency, colorClass };
}
