$(document).ready(() => {
    var accessCode;
    var isAccessCodeValid;

    if (window.localStorage.getItem('accessCode') && window.localStorage.getItem('isValid')) {
        accessCode = window.localStorage.getItem('accessCode');
        isAccessCodeValid = window.localStorage.getItem('isValid');
        console.log("ACCESS:", accessCode, isAccessCodeValid);
    }
})