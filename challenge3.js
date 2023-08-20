const leoName = 'Leo';
const leoSurname = 'Musvaire';
const leoBalance = '-9394';

const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.2';

const divider = '----------------------------------';

// Convert balances to numbers
const leoBalanceNum = parseFloat(leoBalance);
const sarahBalanceNum = parseFloat(sarahBalance);

// Calculate total owed
const totalOwed = leoBalanceNum + sarahBalanceNum;

// Format total owed with 2 decimal places and thousands separator
const formattedTotalOwed = `R ${totalOwed.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;

// Construct the output string
const leoOwed = `${leoName} ${leoSurname} (Owed: R ${(-leoBalanceNum).toFixed(2)})`;
const sarahOwed = `${sarahName} ${sarahSurname} (Owed: R ${(-sarahBalanceNum).toFixed(2)})`;

const result = `
${leoOwed}
${sarahOwed}

${divider}
  Total amount owed: ${formattedTotalOwed}
${divider}
`;

console.log(result);
