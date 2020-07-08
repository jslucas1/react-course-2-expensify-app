import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal();

    expect(result).toBe(0);
});

test('should correclty add up a single expense', () => {
    const singleExpense = [expenses[0]];
    const result = selectExpensesTotal(singleExpense);

    expect(result).toBe(expenses[0].amount);
});

test('should correclty add up multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    const tempTotal = expenses[0].amount + expenses[1].amount + expenses[2].amount;
    expect(result).toBe(tempTotal);
});