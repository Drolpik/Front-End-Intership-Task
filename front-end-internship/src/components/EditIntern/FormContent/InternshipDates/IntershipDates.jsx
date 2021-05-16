import classes from './IntershipDates.module.scss';
import ErrorMsg from '../OtherElements/ErrorMsg/ErrorMsg';
import LabelAndDateInput from '../OtherElements/LabelAndDateInput/LabelAndDateInput';
import showErrorIcon from '../../ErrorFunctions/showErrorIcon';

const IntershipDates = (props) => {
    const {
        intern,
        errorMsg,
        handler
    } = props;

    return(
        <div className={classes.Container}>
            <div className={classes.InternshipStart}>
                <LabelAndDateInput 
                    type="date"
                    name="internship start"
                    value={intern.internshipStart.substring(0, 10)}
                    changed={(event) => handler(event, 'internshipStart')}
                    error={true}
                />
            </div>
            <div className={classes.InternshipEnd}>
                <LabelAndDateInput 
                    type="date" 
                    name="intership end" 
                    value={intern.internshipEnd.substring(0, 10)}
                    changed={(event) => handler(event, 'internshipEnd')}
                    error={showErrorIcon(errorMsg)}
                />
                <ErrorMsg errorMsg={errorMsg} />
            </div>
        </div>
    );
}

export default IntershipDates;