import React from 'react'; //, { useState }
import { GoogleOutlined, GithubOutlined } from '@ant-design/icons';
// import { auth } from '../firebase';
// import firebase from 'firebase/app';
//import 'firebase/auth';

const SignIn = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleEmailChange = (e) => setEmail(e.target.value);
  // const handlePasswordChange = (e) => setPassword(e.target.value);

  // const handleGoogleLogin = () => {
  //   const provider = new firebase.auth.GoogleAuthProvider(); //change auth to correct service.
  //   auth.signInWithPopup(provider);
  // };

  // const handleGithubLogin = () => {
  //   const provider = new firebase.auth.GithubAuthProvider(); //change auth to correct service.
  //   auth.signInWithPopup(provider);
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   auth.signInWithEmailAndPassword(email, password);
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="bg-[#f8f8fa] p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-5">LogIn</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">Email:</label>
            <input
              type="email"
              id="email"
              required
              value={null}
              onChange={null}
              className="px-3 py-2 border-2 border-gray-300 rounded-lg w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">Password:</label>
            <input
              type="password"
              id="password"
              required
              value={null}
              onChange={null}
              className="px-3 py-2 border-2 border-gray-300 rounded-lg w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Sign In
          </button>
        </form>
        <div className="flex items-center justify-center mt-5">
          <div className="border-t border-gray-400 w-full"></div>
          <div className="mx-3 text-gray-500 font-bold">Or sign in with</div>
          <div className="border-t border-gray-400 w-full"></div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <button
            className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
            onClick={null}
          >
            <GoogleOutlined /> Google
          </button>
          <button
            className="bg-black text-white font-bold py-2 px-4 rounded-lg"
            onClick={null}
          >
            <GithubOutlined /> GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
