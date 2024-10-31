function Button({addCountryHandler, updateCountryHandler}) {
    return (
        <div className='button-group'>
            <button type='submit' onClick={addCountryHandler}>국가추가</button>
            <button type='button' onClick={updateCountryHandler}>업데이트</button>
        </div>
    );
}

export default Button;