const text = document.querySelectorAll("text");
const btn = document.getElementById("btn");

console.log(text);

function subment() {
  // Inputs
  const firstname = document.getElementById("fname");
  const lastname = document.getElementById("lname");
  const birthday = document.getElementById("brt");
  const email = document.getElementById("email");
  const phoneno = document.getElementById("phoneno");
  const gender = document.querySelector('input[name="gender"]:checked');
  const subject = document.querySelector("#subject");
  console.log(firstname.value);

  // Validations
  const fnameError = document.querySelector("#fname-error");
  const lnameerror = document.querySelector("#lname-error");
  const brt = document.querySelector("#Birthday");
  const EmailError = document.querySelector("#E-mail");
  const phone = document.querySelector("#phone");
  const sub = document.querySelector("#chose");

  let isError = true;

  if (isError == true) {
    if (firstname.value == "") {
      fnameError.textContent = "Firstname is required";
      isError = true;
    } else if (firstname.value.length < 3) {
      fnameError.textContent = "First name must be atleast three charactors";
      isError = true;
    } else {
      isError = false;
      fnameError.textContent = "";
    }

    if (lastname.value == "") {
      lnameerror.textContent = "Lastname is requrid";
      isError = true;
    } else if (lastname.value.length < 3) {
      lnameerror.textContent = "Last name must be atleast three characters";
      isError = true;
    } else {
      lnameerror.textContent = "";
      isError = false;
    }

    if (birthday.value == "") {
      brt.textContent = "Birthday is requrid";
      isError = true;
    } else {
      brt.textContent = "";
      isError = false;
    }

    if (email.value == "") {
      EmailError.textContent = "Email is requrid";
      isError = true;
    } else if (email.value.length < 3) {
      EmailError.textContent = "@ is requrid";
      isError = true;
    } else {
      EmailError.textContent = "";
      isError = false;
    }

    if (phoneno.value == "") {
      phone.textContent = "Phone no is requrid";
      isError = true;
    } else if (phoneno.value.length < 11) {
      phone.textContent = " phone no atleast 11 digit.";
      isError = true;
    } else {
      isError = false;
      phone.textContent = "";
    }

    if (subject.value == "") {
      sub.textContent = "Subject is required.";
      isError = true;
    } else {
      sub.textContent = "";
      isError = false;
    }
  } else {
    console.log({
      firstname: firstname.value,
      lastname: lastname.value,
      birthday: birthday.value,
      gender: gender.value,
      email: email.value,
      phoneno: phoneno.value,
      subject: subject.value,

      // subject: subject.value,
    });

    //   const row = document.createElement("tr");

    //   const tdFirstName = document.createElement("td");
    //   tdFirstName.setAttribute("class", "cell");
    //   tdFirstName.textContent = firstname.value;
    //   // text

    //   row.appendChild(tdFirstName);

    //   const tdLastname = document.createElement("td");
    //   tdLastname.setAttribute("class", "cell");
    //   tdLastname.textContent = lastname.value;

    //   // text

    //   row.appendChild(tdLastname);

    //   const tdBirthday = document.createElement("td");
    //   tdBirthday.setAttribute("class", "cell");
    //   tdBirthday.textContent = birthday.value;

    //   // text

    //   row.appendChild(tdBirthday);

    //   const tdGender = document.createElement("td");
    //   tdGender.setAttribute("class", "cell");
    //   tdGender.textContent = gender.value;

    //   // text

    //   row.appendChild(tdGender);

    //   const tdemail = document.createElement("td");
    //   tdemail.setAttribute("class", "cell");
    //   tdemail.textContent = email.value;

    //   // text

    //   row.appendChild(tdemail);

    //   const tdphone = document.createElement("td");
    //   tdphone.setAttribute("class", "cell");
    //   tdphone.textContent = phoneno.value;

    //   // text

    //   row.appendChild(tdphone);

    //   const tdsubject = document.createElement("td");
    //   tdsubject.setAttribute("class", "cell");
    //   tdsubject.textContent = subject.value;

    //   // text

    //   row.appendChild(tdsubject);

    //   const table1 = document.querySelector("#table");

    //   const table = document;

    //   table.appendChild(row);
  }
  const row = document.createElement("div");
  row.setAttribute("class", "maintable");

  const tdFirstName = document.createElement("div");
  tdFirstName.setAttribute("class", "cell column");
  tdFirstName.textContent = firstname.value;
  row.appendChild(tdFirstName);

  const tdLastname = document.createElement("div");
  tdLastname.setAttribute("class", "cell column");
  tdLastname.textContent = lastname.value;
  row.appendChild(tdLastname);

  const tdBirthday = document.createElement("div");
  tdBirthday.setAttribute("class", "cell column");
  tdBirthday.textContent = birthday.value;
  row.appendChild(tdBirthday);

  const tdGender = document.createElement("div");
  tdGender.setAttribute("class", "cell column");
  tdGender.textContent = gender.value;
  row.appendChild(tdGender);

  const tdemail = document.createElement("div");
  tdemail.setAttribute("class", "cell column");
  tdemail.textContent = email.value;
  row.appendChild(tdemail);

  const tdphone = document.createElement("div");
  tdphone.setAttribute("class", "cell column");
  tdphone.textContent = phoneno.value;
  row.appendChild(tdphone);

  const tdsubject = document.createElement("div");
  tdsubject.setAttribute("class", "cell column");
  tdsubject.textContent = subject.value;
  row.appendChild(tdsubject);

  const table1 = document.querySelector("#table");
  table1.appendChild(row);
}
