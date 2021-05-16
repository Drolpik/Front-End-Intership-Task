export default function checkError(obj) {
    if(obj === undefined) {
        return true;
    }
    else { 
        return Object.keys(obj).length === 0;
    }
}