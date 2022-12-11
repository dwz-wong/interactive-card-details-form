function creditForm() {
    let cardholder_name = document.getElementById("cardholder-name").value;
    let card_number = document.getElementById("card-number").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let cvc = document.getElementById("cvc").value;

    const cardnumber_regex = /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/;
    const month_year_regex = /^[0-9]{2}$/;
    const cvc_regex = /^[0-9]{3}$/;

    if (cardholder_name == "" || (card_number == "" || !cardnumber_regex.test(card_number)) || (month == "" || !month_year_regex.test(month)) || (year == "" || !month_year_regex.test(year)) || (cvc == "" || !cvc_regex.test(cvc))) {

        if (cardholder_name == "") { 
            document.getElementById("error-msg-for-cardholder-name").style.display = "block";
            document.getElementById("cardholder-name").style.borderColor = "hsl(0, 100%, 66%)";
        }
        else { 
            document.getElementById("error-msg-for-cardholder-name").style.display = "none"; 
            document.getElementById("cardholder-name").style.borderColor = "black";
        }

        if (card_number == "" || !cardnumber_regex.test(card_number)) { 
            document.getElementById("error-msg-for-card-number").style.display = "block"; 
            document.getElementById("card-number").style.borderColor = "hsl(0, 100%, 66%)";
        }
        else { 
            document.getElementById("error-msg-for-card-number").style.display = "none";
            document.getElementById("card-number").style.borderColor = "black";
        }

        if ((month == "" || !month_year_regex.test(month)) || (year == "" || !month_year_regex.test(year))) { 
            document.getElementById("error-msg-for-card-exp-date").style.display = "block";

            if (month == "" || !month_year_regex.test(month)) { document.getElementById("month").style.borderColor = "hsl(0, 100%, 66%)"; }
            else { document.getElementById("month").style.borderColor = "black"; }

            if (year == "" || !month_year_regex.test(year)) { document.getElementById("year").style.borderColor = "hsl(0, 100%, 66%)"; }
            else { document.getElementById("year").style.borderColor = "black"; }
        }
        else { 
            document.getElementById("error-msg-for-card-exp-date").style.display = "none";

            if (month != "" || month_year_regex.test(month)) { document.getElementById("month").style.borderColor = "black"; }
            if (year != "" || month_year_regex.test(year)) { document.getElementById("year").style.borderColor = "black"; }
        }

        if (cvc == "" || !cvc_regex.test(cvc)) { 
            document.getElementById("error-msg-for-cvc").style.display = "block";
            document.getElementById("cvc").style.borderColor = "hsl(0, 100%, 66%)";
        }
        else { 
            document.getElementById("error-msg-for-cvc").style.display = "none"; 
            document.getElementById("cvc").style.borderColor = "black";
        }
    } else {
        document.getElementById("form").style.display = "none";
        document.getElementById("completed-state").style.display = "block";
    }

    return false;
}

function cardholder_name_keyup() {
    let cardholder_name = document.getElementById("cardholder-name").value;

    if (cardholder_name == "") { document.getElementById("cardholder_name").innerHTML = "Jane Appleseed"; }
    else (document.getElementById("cardholder_name").innerHTML = cardholder_name);
}

function card_number_keyup() {
    let card_number = document.getElementById("card-number").value;
    //let card_number_without_space = card_number.replace(/ /g,"");

    if (card_number == "") { document.getElementById("card_number").innerHTML = "0000 0000 0000 0000"; }
    else {document.getElementById("card_number").innerHTML = card_number;}
}

function month_keyup() {
    let month = document.getElementById("month").value;

    if (month == "") { document.getElementById("exp-month").innerHTML = "00"; }
    else {document.getElementById("exp-month").innerHTML = month;}
}

function year_keyup() {
    let year = document.getElementById("year").value;

    if (year == "") { document.getElementById("exp-year").innerHTML = "00"; }
    else {document.getElementById("exp-year").innerHTML = year;}
}

function cvc_keyup() {
    let cvc = document.getElementById("cvc").value;

    if (cvc == "") { document.getElementById("card-verification-code").innerHTML = "000"; }
    else { document.getElementById("card-verification-code").innerHTML = cvc; }
}

function move_to_next_form() {
    document.getElementById("form").submit();
}
