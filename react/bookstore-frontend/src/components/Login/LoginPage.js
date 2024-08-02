import React from "react";
const Login = () => {
return (
<>
<div class="card my_login_card" >
<div class="card-body">
<form>
<div class="mb-3">
<label class="form-label">
Email address
</label>
<input
type="email"
class="form-control"
id="exampleInputEmail1"
aria-describedby="emailHelp"
/>
</div>
<div class="mb-3">
<label class="form-label">
Password
</label>
<input
type="password"
class="form-control"
id="exampleInputPassword1"
/>
</div>
<button type="submit" class="btn btn-primary">
Submit
</button>
</form>
</div>
</div>
</>
);
};
export default Login;