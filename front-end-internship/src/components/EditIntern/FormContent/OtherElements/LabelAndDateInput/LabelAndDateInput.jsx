import classes from './LabelAndDateInput.module.scss';
import dateIcon from '../../../../../assets/dateIcon.svg';

const LabelAndDateInput = (props) => {
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

    return(
        <div className={classes.Container}>
            <label>{name} *</label>
            <label className={[classes.InputBox, ErrorStatusClass].join(' ')}>
                <input
                    type={type} 
                    name={name} 
                    value={value}
                    onChange={changed}
                />
                <div className={classes.DatepickerToggleBtn}>
                    <img src={dateIcon} alt="dateIcon"/>
                </div>
            </label>
        </div>
    );
}

export default LabelAndDateInput;