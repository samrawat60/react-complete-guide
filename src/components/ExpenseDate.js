import './ExpenseDate.css';

function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day   = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year  = props.date.getFullYear();

    return(
        <div>
             <p className='text-white text-center'>
                { month } { day }, { year }
            </p>
        </div>
    );
}

export default ExpenseDate;