import classes from './ErrorMsg.module.scss';

const ErrorMsg = (props) => {
    const { errorMsg } = props;
    return(
        <div className={classes.Container}>
            <p>{errorMsg}</p>
        </div>
    );
}

export default ErrorMsg;