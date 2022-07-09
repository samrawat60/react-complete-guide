import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){
    

    return (
        <div className='expense-item'>
           <ExpenseDate date={props.date}  />
            <div className='expense-item__desc'>
                <h2>{props.title} 
                    <br/><span className="font14">{props.desc}</span>
                </h2>
                <div className='expense-item__price'>₹ {props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;