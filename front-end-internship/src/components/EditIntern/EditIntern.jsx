import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import classes from './EditIntern.module.scss';
import leftArrow from '../../assets/leftArrow.svg';
import validate from './ErrorFunctions/validateInfo';
import InternshipDates from './FormContent/InternshipDates/IntershipDates';
import NameAndEmail from './FormContent/NameAndEmail/NameAndEmail';

const EditIntern = () => {
    const { id } = useParams();

    const initialErrorsMsg = {
        nameError: '',
        emailError: '',
        internshipStartError: '',
        internshipEndError: '',
    }

    const [intern, setIntern] = useState({
        name: '',
        email: '',
        internshipStart: '',
        internshipEnd: ''
    });

    const [errorsMsg, setErrorsMsg] = useState({
        ...initialErrorsMsg
    });

    const updateIntern = async (event) => {
        event.preventDefault();
        const isValid = validate(intern);

        if(Object.keys(isValid).length === 0) {
            setErrorsMsg({...initialErrorsMsg});
            await axios.put(`http://localhost:3001/interns/${id}`, {...intern})
            .catch(error => {
                console.log(error);
            });
        } else {
            setErrorsMsg({...isValid});
        } 
    }

    const handler = (event, prop) => {
        let newData = {...intern};
        newData[prop] = event.target.value;
        setIntern(newData);
    }

    useEffect(() => {
        const getInternById = async () => {
            await axios.get(`http://localhost:3001/interns/${id}`)
            .then(response => {
                setIntern(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
        getInternById();
    }, [id]);

    return (
        <div className={classes.Container}>
            <div className={classes.ContentBox}>
                <NavLink 
                    to="/"
                    className={classes.Link}>
                    <div className={classes.BackBtn}>
                        <img src={leftArrow} alt="BackBtn" />
                        <label>Back to list</label>
                    </div>      
                </NavLink>
                <h1>Edit</h1>
                <form onSubmit={updateIntern}>
                    <NameAndEmail 
                        intern={intern}
                        errorsMsg={errorsMsg}
                        handler={handler}
                    />
                    <InternshipDates 
                        intern={intern}
                        errorMsg={errorsMsg.internshipEndError}
                        handler={handler}
                    />
                <input type="submit" className={classes.SubmitBtn} value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default EditIntern;