// DOM Elements
const tankSizeInput = document.getElementById("tank-size");
const fillCostInput = document.getElementById("fill-cost");
const milesPerTankInput = document.getElementById("miles-per-tank");

// Mileage Outputs
const mpgOutput = document.getElementById("mpg");
const milesPerLitreOutput = document.getElementById("miles-per-litre");
const milesPer100LitresOutput = document.getElementById("miles-per-100-litres");
const milesPer10Output = document.getElementById("miles-per-10");
const milesPer100Output = document.getElementById("miles-per-100");

// Cost Outputs
const costPerLitreOutput = document.getElementById("cost-per-litre");
const costPer100LitresOutput = document.getElementById("cost-per-100-litres");
const costPerMileOutput = document.getElementById("cost-per-mile");
const costPer100MilesOutput = document.getElementById("cost-per-100-miles");

// Fuel Outputs
const litresPer100Output = document.getElementById("litres-per-100");
const litresPerMileOutput = document.getElementById("litres-per-mile");
const litresPer100MilesOutput = document.getElementById("litres-per-100-miles");

// Event Listeners
[tankSizeInput, fillCostInput, milesPerTankInput].forEach(input => {
  input.addEventListener("input", updateCalculations);
});

// Main Calculation Function
function updateCalculations() {
  const tankSize = parseFloat(tankSizeInput.value);
  const fillCost = parseFloat(fillCostInput.value);
  const milesPerTank = parseFloat(milesPerTankInput.value);

  if (isNaN(tankSize) || isNaN(fillCost) || isNaN(milesPerTank) || 
      tankSize <= 0 || fillCost <= 0 || milesPerTank <= 0) {
    clearOutputs();
    return;
  }

  // Core Calculations
  const pricePerLitre = fillCost / tankSize;
  const litresPerMile = tankSize / milesPerTank;
  const milesPerLitre = milesPerTank / tankSize;

  // Mileage Calculations
  const mpg = milesPerTank / (tankSize / 4.546); // UK gallons
  const milesPer100Litres = milesPerLitre * 100;
  const milesPer10 = (10 / pricePerLitre) * milesPerLitre;
  const milesPer100 = (100 / pricePerLitre) * milesPerLitre;

  // Cost Calculations
  const costPerMile = fillCost / milesPerTank;
  const costPer100Litres = pricePerLitre * 100;
  const costPer100Miles = costPerMile * 100;

  // Fuel Calculations
  const litresPer100Miles = litresPerMile * 100;
  const litresPer100 = 100 / pricePerLitre;

  // Update Outputs
  updateOutput(mpgOutput, round(mpg));
  updateOutput(milesPerLitreOutput, round(milesPerLitre));
  updateOutput(milesPer100LitresOutput, round(milesPer100Litres));
  updateOutput(milesPer10Output, round(milesPer10));
  updateOutput(milesPer100Output, round(milesPer100));

  updateOutput(costPerLitreOutput, round(pricePerLitre));
  updateOutput(costPer100LitresOutput, round(costPer100Litres));
  updateOutput(costPerMileOutput, round(costPerMile));
  updateOutput(costPer100MilesOutput, round(costPer100Miles));

  updateOutput(litresPer100Output, round(litresPer100));
  updateOutput(litresPerMileOutput, round(litresPerMile, 3)); // More precision for small values
  updateOutput(litresPer100MilesOutput, round(litresPer100Miles));
}

// Helper Functions
function updateOutput(element, value) {
  element.textContent = value;
}

function round(value, maxDecimals = 2) {
  if (value % 1 === 0) return value.toFixed(0);
  if (value * 10 % 1 === 0) return value.toFixed(1);
  return value.toFixed(maxDecimals);
}

function clearOutputs() {
  document.querySelectorAll(".result").forEach(el => {
    el.textContent = "--";
  });
}

// Initialize
updateCalculations();
