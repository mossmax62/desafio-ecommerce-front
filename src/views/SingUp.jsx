import { useState } from "react";

const SingUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //await auth.createUserWithEmailAndPassword(email, password);
            console.log("Signed Up");
            console.log(email);
            console.log(password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="container">
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}
export default SingUp;