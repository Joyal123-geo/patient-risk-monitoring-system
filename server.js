const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/* Home Route */
app.get("/", (req, res) => {
  res.send("✅ Patient Risk Backend Running Successfully!");
});

function calculateRisk(patient) {
  let score = 0;
  let critical = false;

  if (patient.age > 75) score += 2;
  else if (patient.age >= 60) score += 1;

  if (patient.heartRate > 140) critical = true;
  else if (patient.heartRate > 120) score += 2;
  else if (patient.heartRate >= 100) score += 1;

  if (patient.systolicBP < 80) critical = true;
  else if (patient.systolicBP < 90) score += 2;

  if (patient.spo2 < 85) critical = true;
  else if (patient.spo2 < 90) score += 2;
  else if (patient.spo2 <= 93) score += 1;

  if (patient.temperature > 39) score += 2;
  else if (patient.temperature >= 38) score += 1;

  if (patient.respiratoryRate > 24) score += 1;

  score += patient.chronicCount;

  if (patient.erVisits > 3) score += 2;
  else if (patient.erVisits >= 2) score += 1;

  if (patient.wbc === "yes") score += 1;
  if (patient.creatinine === "yes") score += 1;
  if (patient.crp === "yes") score += 1;

  let level = "LOW";
  if (critical || score >= 6) level = "HIGH";
  else if (score >= 3) level = "MEDIUM";

  return { score, level };
}

/* API Route */
app.post("/calculate-risk", (req, res) => {
  const result = calculateRisk(req.body);
  res.json(result);
});

/* Start Server */
app.listen(5000, () => {
  console.log("✅ Backend running at http://localhost:5000");
});
