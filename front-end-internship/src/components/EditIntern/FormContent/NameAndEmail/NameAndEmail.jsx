import LabelAndInput from '../OtherElements/LabelAndTextInput/LabelAndTextInput';
import ErrorMsg from '../OtherElements/ErrorMsg/ErrorMsg';
import showErrorIcon from '../../ErrorFunctions/showErrorIcon';

const NameAndEmail = (props) => {
    const {
        intern,
        errorsMsg,
        handler
    } = props;

    return(
        <>
            <LabelAndInput 
                type="text"
                name="name"
                value={intern.name}
                changed={(event) => handler(event, 'name')}
                error={showErrorIcon(errorsMsg.nameError)}
            />
            <ErrorMsg errorMsg={errorsMsg.nameError} />

            <LabelAndInput 
                type="text"
                name="email"
                value={intern.email}
                changed={(event) => handler(event, 'email')}
                error={showErrorIcon(errorsMsg.emailError)}
            />
            <ErrorMsg errorMsg={errorsMsg.emailError} />
        </>
    );
}

export default NameAndEmail;