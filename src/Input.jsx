function Input({ label, type, placeholder, value, onChange }) {
    return (
        <div className='input-group'>
            <p>{label}</p>
            <input
                type={type} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                min="0"
                max="99"
            />
        </div>
    );
}

export default Input;