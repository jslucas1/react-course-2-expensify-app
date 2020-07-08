const selectExpensesTotal = (expenses = []) => {
    const totalExpenses = expenses.reduce(function(accumlator, expense){
        return accumlator + expense.amount;
    }, 0);
    return totalExpenses;
};

export default selectExpensesTotal;

