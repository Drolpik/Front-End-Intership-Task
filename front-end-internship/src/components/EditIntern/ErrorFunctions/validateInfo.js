export default function validateInfo(intern) {
    let errors = {};
    const requireInfo = "This field is required";

    if(!intern.name.trim()) {
        errors.nameError = requireInfo;
    }

    if(!intern.email) {
        errors.emailError = requireInfo;
    } else if(!/\S+@\S+\.\S+/.test(intern.email)) {
        errors.emailError = 'Email address is invalid';
    }

    if(!intern.internshipStart) {
        errors.internshipStartError = requireInfo;
    }

    if(!intern.internshipEnd) {
        errors.internshipEndError = requireInfo;
    } else if(Date.parse(intern.internshipStart.substring(0, 10)) > Date.parse(intern.internshipEnd.substring(0, 10))) {
        errors.internshipEndError = "This date is not correct";
    }

    return errors;
}