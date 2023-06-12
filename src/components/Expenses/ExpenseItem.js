import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

export const ExpenseItem = props => {
	return (
		<li>
			<Card className='expense-item'>
				<ExpenseDate date={props.date} />
				<div className='expense-item__info'>
					<h2>{props.title}</h2>
					<div className='expense-item__amount'>${props.amount}</div>
				</div>
			</Card>
		</li>
	)
}
