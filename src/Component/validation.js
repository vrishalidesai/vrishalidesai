const validation = (values) => {
  let errors = {};
  let pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  let validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");


if (!pattern.test(values.email)) {
    errors.email = "Email is invalid.";
  }

 if (!validPassword.test(values.password)) {
    errors.password = "Password must be secured and strong.";
  }
  return errors;
};
export default validation;
