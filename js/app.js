// DOM Elements
const tankSizeInput = document.getElementById("tank-size");
const fillCostInput = document.getElementById("fill-cost");
const milesPerTankInput = document.getElementById("miles-per-tank");
const mpgOutput = document.getElementById("mpg");
const costPerMileOutput = document.getElementById("cost-per-mile");
const costPer100MilesOutput = document.getElementById("cost-per-100-miles");
const rangePerLiterOutput = document.getElementById("range-per-liter");
const fuelConsumptionOutput = document.getElementById("fuel-consumption");
const pricePerLiterOutput = document.getElementById("price-per-liter");
const costPerTankOutput = document.getElementById("cost-per-tank");

// Event Listeners
tankSizeInput.addEventListener("input", updateCalculations);
fillCostInput.addEventListener("input", updateCalculations);
milesPerTankInput.addEventListener("input", updateCalculations);

// Main Function
function updateCalculations() {
  const tankSize = parseFloat(tankSizeInput.value);
  const fillCost = parseFloat(fillCostInput.value);
  const milesPerTank = parseFloat(milesPerTankInput.value);

  if (isNaN(tankSize) || isNaN(fillCost) || isNaN(milesPerTank) || 
      tankSize <= 0 || fillCost <= 0 || milesPerTank <= 0) {
    clearOutputs();
    return;
  }

  // Calculations
  const pricePerLiter = fillCost / tankSize;
  const mpg = milesPerTank / (tankSize / 4.546); // liters to gallons
  const costPerMile = fillCost / milesPerTank;
  const rangePerLiter = milesPerTank / tankSize;
  const fuelConsumption = (tankSize * 100) / milesPerTank; // liters per 100km

  // Display Results
  mpgOutput.textContent = `${round(mpg)} MPG`;
  costPerMileOutput.textContent = `${round(costPerMile)} £/mile`;
  costPer100MilesOutput.textContent = `${round(costPerMile * 100)} £/100 miles`;
  rangePerLiterOutput.textContent = `${round(rangePerLiter)} miles/liter`;
  fuelConsumptionOutput.textContent = `${round(fuelConsumption)} L/100km`;
  pricePerLiterOutput.textContent = `${round(pricePerLiter)} £/liter`;
  costPerTankOutput.textContent = `${round(fillCost)} £/tank`;
}

// Helper Functions
function round(value) {
  if (value % 1 === 0) return value.toFixed(0);
  if (value * 10 % 1 === 0) return value.toFixed(1);
  return value.toFixed(2);
}

function clearOutputs() {
  const outputs = [
    mpgOutput, costPerMileOutput, costPer100MilesOutput,
    rangePerLiterOutput, fuelConsumptionOutput,
    pricePerLiterOutput, costPerTankOutput
  ];
  outputs.forEach(el => el.textContent = "");
}

// Initialize
updateCalculations();
