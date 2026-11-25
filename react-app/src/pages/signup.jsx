
import "../App.css";

function Signup() {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    const message = document.getElementById("signup-message");

    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match!";
      return;
    }

    message.textContent =
      "Form completed! Account creation is not connected to a server yet.";
  }

  return (
    <>
      <nav className="navbar">
        <h2>🎨 ArtVerse</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/login">Login</a>
        </div>
      </nav>

      <div className="form-container">
        <div className="form-box">
          <h1>Create Account</h1>
          <h2>Join ArtVerse</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />

            <label className="role-label" htmlFor="role">
              Choose Account Type
            </label>

            <select name="role" id="role" required defaultValue="">
              <option value="" disabled>
                Select account type
              </option>

              <option value="user">Art Lover / User</option>
              <option value="artist">Artist / Admin</option>
            </select>

            <button type="submit" className="btn">
              Create Account
            </button>

            <p id="signup-message" role="status"></p>
          </form>

          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
