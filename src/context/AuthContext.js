import React, { useContext, useEffect, useState } from 'react'
import axios from "../lib/axios";
import Loading from '../Component/Loading';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        let token = localStorage.getItem('token');
        if (!currentUser && token) {
            axios.get('/api/user', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => {
                    setLoading(false);
                    if (res.data) {
                        setCurrentUser(true);
                    }
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                    navigate('/admin/login');
                })
        } else {
            setLoading(false);
            navigate('/admin/login');
        }
        if (currentUser) {
            navigate('/admin/dashboard');
        }
    }, [currentUser, navigate]);

    // signup function
    async function signup(email, password, username) {
        // const auth = getAuth();
        // await createUserWithEmailAndPassword(auth, email, password);

        // // update profile
        // await updateProfile(auth.currentUser, {
        //     displayName: username,
        // });

        // const user = auth.currentUser;
        // setCurrentUser({
        //     ...user,
        // });
    }

    // login function
    function login(email, password) {
        axios.post('/api/login', {
            email,
            password,
        }).then(res => {
            let data = res.data;
            console.log(data);
            if (data.token) {
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('token', data.token);
                setCurrentUser(data.user);
            }
        })
            .catch(err => console.log(err.responseText));
    }

    // logout function
    function logout() {
        // const auth = getAuth();
        // return signOut(auth);
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {/* {!loading && children} */}
            {loading ? <Loading /> : children}
        </AuthContext.Provider>
    );
}
