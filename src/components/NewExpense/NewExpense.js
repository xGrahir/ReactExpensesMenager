import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


let i = 0
const NewExpense = (props) => {

    const [currentShowMenu, changeShowMenu] = useState(false)

    const saveDataHandler = (savedData) => {
        const expenseData = {
            ...savedData,
            id: i
        }
        props.onSaveAppJs(expenseData)
        i++
    }

    const showMenu= () => {
        changeShowMenu(true)
    }

    const hideMenu = () => {
        changeShowMenu(false)
    }

    let content = <div className="new-expense__actions"><button onClick={showMenu}>Add New Expense</button></div>

    if(currentShowMenu) {
        content = <ExpenseForm onSaveExpenseData ={saveDataHandler} onHideMenu={hideMenu}/>
    }

    return (
        <div className='new-expense'>
            {content}
        </div>
    )
}

export default NewExpense