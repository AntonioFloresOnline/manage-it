const SignUp = () => {
  return (
    <div className="signin-container">
      <form className="signin-box">
        <label htmlFor="user-name">User Name</label>
        <input id="user-name" type="text" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;