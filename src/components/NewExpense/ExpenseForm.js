import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('')
	const [enteredAmount, setEnteredAmount] = useState('')
	const [enteredDate, setEnteredDate] = useState('')

	const changeTitleHandle = e => {
		setEnteredTitle(e.target.value)
	}

	const changeAmountHandle = e => {
		setEnteredAmount(e.target.value)
	}

	const changeDateHandle = e => {
		setEnteredDate(e.target.value)
	}

	const submitHandle = e => {
        e.preventDefault()
        if(enteredTitle === "" || enteredAmount === "" || enteredDate === "") return

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		}
		props.onSaveExpenseData(expenseData)
		// Reseting states to clear inputs
		setEnteredTitle('')
		setEnteredAmount('')
		setEnteredDate('')
	}

	return (
		<form action='' onSubmit={submitHandle}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor='title'>Title</label>
					<input type='text' id='title' value={enteredTitle} onChange={changeTitleHandle} />
				</div>
				<div className='new-expense__control'>
					<label htmlFor=''>Amount</label>
					<input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={changeAmountHandle} />
				</div>
				<div className='new-expense__control'>
					<label htmlFor=''>Date</label>
					<input type='date' value={enteredDate} min='2019-01-01' max='2025-12-31' onChange={changeDateHandle} />
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
				<button onClick={props.onHideMenu}>Cancel</button>
			</div>
		</form>
	)
}

export default ExpenseForm