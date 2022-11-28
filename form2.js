const form=document.getElementById("form");
const username=document.getElementById("username");
const last=document.getElementById("last");
const birth=document.getElementById("birth");
const contact=document.getElementById("contact");
const email=document.getElementById("email");
const address=document.getElementById("address");
const country=document.getElementById("country");
const state=document.getElementById("state");
const city=document.getElementById("city");
const password=document.getElementById("password");
const cpassword=document.getElementById("cpassword");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    validation();
});

const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector(".error");

    errorDisplay.innerText=message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

const setSuccess=(element)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector(".error");

    errorDisplay.innerText="";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}
//regex for username
const isValidUsername=(username)=>{
    var user=/^[A-Za-z]+$/;
   return user.test(username);
}
//regex for surname
const isValidSurname=(lastname)=>{
    var last=/^[A-Za-z]+$/;
    return last.test(lastname);
}

//regex for contact validation
const isValidContact=(contact)=>{
    var number=/^[789][0-9]{9}$/;
 return number.test(contact)
}

//regex for valid email
const isValidEmail=(email)=>{
    var em=/^([A-Za-z0-9])+\@(([A-Za-z0-9])+\.)+([A-Za-z]{2,4})+$/  
return em.test(email)
}

//regex for valid password
const isValidPassword=(pass)=>{
    var pas=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[`~!@#$%^&*()-_=+/.,?|]).{7,16}$/
    return pas.test(pass);
}

//regex gor address
const isValidAddress=(add)=>{
    var ad= /^[A-Za-z\s,=-]+$/;
    return ad.test(add);
}
// country validation
const isValidCountry=(country)=>{
    var cun= /^[A-Za-z]+$/;
    return cun.test(country);
}
//state validation
const isValidState=(state)=>{
    var sta= /^[A-Za-z]+$/;
    return sta.test(state);
}
const isValidCity=(city)=>{
    var cty=/^[A-Za-z]+$/;
    return cty.test(city);
}
const validation=()=>{
    const userValue=username.value.trim();
    const lastValue=last.value.trim();
    const birthValue=birth.value.trim();
    const contactValue=contact.value.trim();
    const emailValue=email.value.trim();
    const addressValue=address.value.trim();
    const countryValue=country.value.trim();
    const stateValue=state.value.trim();
    const cityValue=city.value.trim();
    const passwordValue=password.value.trim();
    const cpasswordValue=cpassword.value.trim();

    // username validation
    if(userValue===""){
        setError(username,"username required");
    }else if(userValue.length<3){
        setError(username,"name must be at least 3 charactor's");
    }else if(!isValidUsername(userValue)){
        setError(username,"envalid username");
    }
    else{
        setSuccess(username);
    }

    //surname validation

    if(lastValue==="")
    {
        setError(last,"surname is required")
    }else if(lastValue.length<3){
        setError(last,"must be at least 3 charactor's")
    }else if(!isValidSurname(lastValue)){
        setError(last,"envalid surname")
    }else{
        setSuccess(last);
    }

    //birth date validation
    if(birthValue===""){
        setError(birth,"birth date is required")
    }else{
        setSuccess(birth)
    }

    //contact validation
    if(contactValue==="")
    {
        setError(contact,"required");
    }else if(contactValue.length<10 || contactValue.length>10){
        setError(contact,"contact number must be 10 digits");
    }else if(!isValidContact(contactValue)){
        setError(contact,"not an indian number")
    }else{
        setSuccess(contact);
    }

    //email validation
    if(emailValue===""){
        setError(email," email is  required")
    } if(!isValidEmail(emailValue)){
        setError(email,"envalid email")
    }else{
        setSuccess(email);
    }

    //password validation
    if(passwordValue===""){
        setError(password,"password is required")
    }else if(passwordValue.length<7){
        setError(password,"password must be 7 charactor's")
    }else if(!isValidPassword(passwordValue)){
        setError(password,"password must be 1 uppercase,lowecase,special symbol")
    }else{
        setSuccess(password)
    }

    //confirm password validation
    if(cpasswordValue===""){
        setError(cpassword,"write password again")
    }else if(!cpasswordValue.match(passwordValue)){
        setError(cpassword,"password dosn't match")
    }else{
        setSuccess(cpassword)
    }

    //address validation
    if(addressValue===""){
        setError(address,"Address is required");
    }else if(addressValue.length<3){
        setError(address,"address incomplete");
    }else if(!isValidAddress(addressValue)){
        setError(address,"envalid address")
    }else{
        setSuccess(address);
    }
    // country validation
    if(countryValue===""){
        setError(country,"country is required")
    }else if(countryValue.length<3){
        setError(country,"country must be at least 3 charactor's")
    }else if(!isValidCountry(countryValue)){
        setError(country,"envalid country name")
    }else{
        setSuccess(country);
    }
    //state validation

    if(stateValue===""){
        setError(state,"write your state name");
    }else if(stateValue.length<3){
        setError(state,"state must have at least 3 charactor's")
    }else if(!isValidState(stateValue)){
        setError(state,"envalid state name")
    }else{
        setSuccess(state)
    }

    //city validation
    if(cityValue===""){
        setError(city,"write your city name");
    }else if(cityValue.length<3){
        setError(city,"city name at least 3 charactor's");
    }else if(!isValidCity(cityValue)){
        setError(city,"envalid city name")
    }else {
        setSuccess(city);
    }
}