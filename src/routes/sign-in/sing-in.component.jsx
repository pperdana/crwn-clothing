import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SingUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleuser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleuser}>Sign in with Google Popup</button>
      <SingUpForm />
    </div>
  );
};

export default SignIn;
