import React from 'react'
import './ExpenseList.css'

import { ExpenseItem } from './ExpenseItem'

const ExpenseList = (props) => {
    let content = <h2 className="expenses-list__fallback">No expenses found</h2>

	if (props.items.length > 0) {
		content = props.items.map(expense => (
			<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
		))
	}

    return <ul className="expenses-list">
        {content}
    </ul>
}

export default ExpenseList