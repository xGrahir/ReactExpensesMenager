import React, { useState } from 'react'
import Card from '../UI/Card' // Wrapper Card
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

const Expenses = props => {
	let [year, changeYear] = useState('2019')

	const filterByYearHandler = newYear => {
		changeYear(newYear)
	}

	const filteredByYear = props.items.filter(item => item.date.getFullYear() === parseInt(year))

	return (
		<div>
			<Card className='expenses'>
				<ExpenseFilter selectedYear={year} getYear={filterByYearHandler} />
				<ExpensesChart expenses={filteredByYear}/>
				<ExpenseList items={filteredByYear}/>
			</Card>
		</div>
	)
}

export default Expenses
