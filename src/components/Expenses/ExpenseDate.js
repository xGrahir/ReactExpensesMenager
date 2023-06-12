import React from 'react'
import './ExpenseDate.css'

const ExpenseDate = props => {
	return (
		<div className='expense-item__date'>
			<div>{props.date.toLocaleString('pl-PL', { day: '2-digit' })}</div>
			<div>{props.date.toLocaleString('pl-PL', { month: 'short' })}</div>
			<div>{props.date.getFullYear()}</div>
		</div>
	)
}

export default ExpenseDate
