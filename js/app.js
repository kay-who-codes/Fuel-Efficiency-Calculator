document.addEventListener('DOMContentLoaded', function() {
    const tankSizeInput = document.getElementById('tankSize');
    const fillCostInput = document.getElementById('fillCost');
    const milesPerTankInput = document.getElementById('milesPerTank');
    
    const costPerMileEl = document.getElementById('costPerMile');
    const milesPerLitreEl = document.getElementById('milesPerLitre');
    const litresPer100MilesEl = document.getElementById('litresPer100Miles');
    const costPer100MilesEl = document.getElementById('costPer100Miles');
    
    // Add event listeners to all inputs
    [tankSizeInput, fillCostInput, milesPerTankInput].forEach(input => {
        input.addEventListener('input', calculateEfficiency);
    });
    
    function calculateEfficiency() {
        const tankSize = parseFloat(tankSizeInput.value);
        const fillCost = parseFloat(fillCostInput.value);
        const milesPerTank = parseFloat(milesPerTankInput.value);
        
        // Only calculate if all fields have valid numbers
        if (isNaN(tankSize) || isNaN(fillCost) || isNaN(milesPerTank) {
            return;
        }
        
        // Calculate all metrics
        const costPerMile = fillCost / milesPerTank;
        const milesPerLitre = milesPerTank / tankSize;
        const litresPer100Miles = (tankSize / milesPerTank) * 100;
        const costPer100Miles = (fillCost / milesPerTank) * 100;
        
        // Update the DOM with formatted values
        costPerMileEl.textContent = formatNumber(costPerMile) + ' £/mi';
        milesPerLitreEl.textContent = formatNumber(milesPerLitre) + ' mi/L';
        litresPer100MilesEl.textContent = formatNumber(litresPer100Miles) + ' L/100mi';
        costPer100MilesEl.textContent = formatNumber(costPer100Miles) + ' £/100mi';
    }
    
    function formatNumber(num) {
        // Round to 2 decimal places if needed, otherwise show as whole number or single decimal
        const rounded = Math.round(num * 100) / 100;
        
        // Check if the number is a whole number or needs just one decimal place
        if (rounded % 1 === 0) {
            return rounded.toFixed(0);
        } else if (Math.round(rounded * 10) / 10 === rounded) {
            return rounded.toFixed(1);
        } else {
            return rounded.toFixed(2);
        }
    }
});
