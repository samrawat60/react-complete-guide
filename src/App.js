import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App(){
    /* let expenseDate = new Date(2022, 6, 5);
    let expenseTitle = "Scooty Service";
    let expenseDesc = "Sunday Scooty Service";
    let expenseAmount = 700; */

    let expenses = [
        {
            id: 'e1',
            title: 'Scooty Service',
            desc: 'Sunday Scooty Service',
            amount: 700, 
            date: new Date(2022, 6, 5)
        },
        {
            id: 'e2',
            title: 'Max Bazar Shopping',
            desc: 'Grocery Shopping in Max Bazar',
            amount: 2000, 
            date: new Date(2022, 6, 7)
        },
        {
            id: 'e3',
            title: 'Internet Bill payment',
            desc: 'WIfi Payment',
            amount: 2100, 
            date: new Date(2022, 6, 9)
        },
        {
            id: 'e4',
            title: 'Mobile Recharge',
            desc: 'My Jio Mobile Recharge',
            amount: 444, 
            date: new Date(2022, 6, 7)
        }
    ];

    return( 
    <div className="app-container">
        <h2 className="text-center">Expense Tracker</h2>
        <ExpenseItem 
            date   = {expenses[0].date}
            title  = {expenses[0].title}
            desc   = {expenses[0].desc}
            amount = {expenses[0].amount}
        />
        <ExpenseItem 
            date   = {expenses[1].date}
            title  = {expenses[1].title}
            desc   = {expenses[1].desc}
            amount = {expenses[1].amount}
        />
        <ExpenseItem 
            date   = {expenses[2].date}
            title  = {expenses[2].title}
            desc   = {expenses[2].desc}
            amount = {expenses[2].amount}
        />
        <ExpenseItem 
            date   = {expenses[3].date}
            title  = {expenses[3].title}
            desc   = {expenses[3].desc}
            amount = {expenses[3].amount}
        />
    </div>);
        
}

export default App;