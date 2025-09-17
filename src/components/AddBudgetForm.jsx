import { Form } from "react-router-dom"

// library imports
import { CurrencyDollarIcon } from "@heroicons/react/24/solid"

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
        <h2 className="h3">
            Create Budget
        </h2>
        <Form
            method="post"
            className="grid-sm"
        >
            <div className="grid-xs">
                <label htmlFor="newBudget">Budget Name</label>
                <input 
                    type="text" 
                    id="newBudget"  name="newBudget" 
                    placeholder="e.g., Groceries"
                    required
                />
            </div>
            <div className="grid-xs">
                <label htmlFor="newBudgetAmount"> Amount</label>
                <input 
                    type="number" 
                    step="0.01"
                    id="newBudgetAmount"
                    name="newBudgetAmount"
                    placeholder="e.g., 100"
                    required
                    inputMode="decimal"
                />
            </div>
            <input type="hidden" name="_action" value="createBudget" />
            <button type="submit" className="btn btn--dark">
                <span>Create Budget</span>
                <CurrencyDollarIcon width={20} />
            </button>
        </Form>
    </div>
  )
}

export default AddBudgetForm