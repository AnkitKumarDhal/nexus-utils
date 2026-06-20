/**
 * Formats a number to Indian Rupee currency format (₹)
 * @param {number} amount - The amount to format
 * @returns {string} - Formatted string like "₹12,34,567"
 */
export const formatINR = (amount) => {
  let amt = amount.toString();

  const parts = amt.split(".");
  const intPart = parts[0];
  const decPart = parts[1];

  let last3 = intPart.slice(-3);
  let restRev = intPart.slice(0, -3).split("").reverse();
  let restF = [];
  for (let i = 0; i < restRev.length; i += 2) {
    const first = restRev[i];
    const second = restRev[i + 1] || "";
    restF.push(`${first}${second}`);
  }
  let restC = restF.join(",");
  let restP = restC.split("").reverse().join("");

  const formattedInt = intPart.length > 3 ? `${restP},${last3}` : `${last3}`;
  const suffix = decPart ? `.${decPart}` : "";

  return `₹${formattedInt}${suffix}`;
};
