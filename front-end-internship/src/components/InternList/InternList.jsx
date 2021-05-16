import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './InternList.module.scss';
import editIcon from '../../assets/editIcon.svg';

const InternList = () => {

    const [interns, setInterns] = useState([]);

    useEffect(() => {
        const fetchInterns = async () => {
            const response = await fetch('http://localhost:3001/interns');
            const interns = await response.json();
            setInterns(interns);
        }
        fetchInterns();
    }, []);

    return (
        <div className={classes.Container}>
            <h1>Participants</h1>
            <div className={classes.InternList}>
                {interns.map(u => (<div className={classes.InternElement} key={u.id}>{u.name} 
                    <NavLink 
                        to={`/interns/${u.id}`} 
                        className={classes.Link}>
                        <div className={classes.EditBtn}>
                            <img src={editIcon} alt="editIcon" />
                            <label>Edit</label>
                        </div>
                    </NavLink>
                </div>))}
            </div>
        </div>
    );
};

export default InternList;