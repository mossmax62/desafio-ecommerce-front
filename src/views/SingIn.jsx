import { useState } from 'react';

const SingIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        //await auth.signInWithEmailAndPassword(email, password);
        console.log('Signed In');
        console.log(email);
        console.log(password);
        } catch (error) {
        setError(error.message);
        }
    };
    
    return (
        <div className="container">
            <div>
                <h1>Sign In</h1>
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
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
    }
export default SingIn;