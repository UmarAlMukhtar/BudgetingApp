// react imports
import { useEffect, useRef } from 'react'

// rrd imports
import { useFetcher } from 'react-router-dom'

// library imports
import { PlusCircleIcon } from '@heroicons/react/24/solid';

const AddExpenseForm = ({ budgets }) => {
const fetcher = useFetcher();
    const formRef = useRef();
    const isSubmitting = fetcher.state === "submitting";
    const focusRef = useRef();

    useEffect(() => {
        if (!isSubmitting) {
            formRef.current.reset();
            focusRef.current.focus();
        }
    }, [isSubmitting]);
  return (
    <div className='form-wrapper'>
        <h2 className="h3">Add New{" "}<span className='accent'>
            {budgets.length === 1 && `${budgets.map(b => b.name)}`
            }</span>{" "}
            Expense
        </h2>
        <fetcher.Form 
            method="post" 
            className="grid-sm"
            ref={formRef}
        >
            <div className="expense-inputs">
                <div className="grid-xs">
                    <label htmlFor="newExpense">New Expense</label>
                    <input 
                        type="text" 
                        id="newExpense"     name="newExpense" 
                        required 
                        placeholder="e.g., Coffee"
                        ref={focusRef}
                    />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newExpenseAmount">Amount</label>
                    <input 
                        type="number" 
                        id="newExpenseAmount"
                        name="newExpenseAmount" 
                        step="0.01"
                        inputMode="decimal"
                        placeholder='e.g., 3.50'
                        required
                    />
                </div>
            </div>
            <div className="grid-xs" hidden={budgets.length === 1}>
                <label htmlFor="newExpenseBudget">Budget Category</label>
                <select name="newExpenseBudget" id="newExpenseBudget" required>
                    {
                        budgets.sort((a, b) => a.createdAt - b.createdAt).map(b => {
                            return (
                                <option key={b.id} value={b.id}>{b.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <input type="hidden" name="_action" value="createExpense" />
            <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                {
                    isSubmitting ? <span>Submitting...</span> : (
                        <>
                            <span>Add Expense</span>
                            <PlusCircleIcon width={20} />
                        </>
                    )
                }
            </button>
        </fetcher.Form>
    </div>
  )
}

export default AddExpenseForm