import classes from './LabelAndTextInput.module.scss';

const LabelAndInput = (props) => {
    const {
        type, 
        name, 
        value, 
        changed,
        error
    } = props;

    let ErrorStatusClass = error 
        ? null 
        : classes.ErrorOn;

    return (
        <div className={classes.Container}>
            <label>{name} *</label>
            <label className={[classes.InputBox, ErrorStatusClass].join(' ')}>
                <input
                    type={type} 
                    name={name} 
                    value={value}
                    onChange={changed}
                /> 
            </label>          
        </div>
    );
}

export default LabelAndInput;