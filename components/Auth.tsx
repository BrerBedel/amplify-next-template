"use client";

import { useState } from 'react';
import { signUp, signIn } from 'aws-amplify/auth';

const AuthComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [formState, setFormState] = useState<'signIn' | 'signUp'>('signIn');
    const [error, setError] = useState<string | null>(null);
    
    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null); // Clear any previous errors
    
        try {
            if (formState === 'signIn') {
                await signIn({ username, password });
            } else if (formState === 'signUp') {
                await signUp({
                    username,
                    password,
                    options: {
                        userAttributes: { email },
                    },
                });
            }
        } catch (err: any) {
            console.error('Error during authentication:', err);
            setError(err.message); // Set the error message to display
        }
    };
    
    return (
        <div>
            <h2>{formState === 'signIn' ? 'Sign In' : 'Sign Up'}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {formState === 'signUp' && (
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                )}
                <button type="submit">{formState === 'signIn' ? 'Sign In' : 'Sign Up'}</button>
            </form>
            <button onClick={() => setFormState(formState === 'signIn' ? 'signUp' : 'signIn')}>
                {formState === 'signIn' ? 'Create an account' : 'Back to Sign In'}
            </button>
        </div>
    );
};

export default AuthComponent;
