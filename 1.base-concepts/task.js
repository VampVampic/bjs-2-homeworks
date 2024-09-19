"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let discrim = b ** 2 - 4 * a * c;

	if (discrim === 0) {
		let root = -b / (2 * a);
		arr.push(root);
	} else if (discrim > 0) {
		let root1 = (-b + Math.sqrt(discrim)) / (2 * a);
		let root2 = (-b - Math.sqrt(discrim)) / (2 * a);
		arr.push(root1, root2);
	}

	return arr;

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
  let totalAmount = countMonths * monthlyPayment;

  return Number(totalAmount.toFixed(2));
}