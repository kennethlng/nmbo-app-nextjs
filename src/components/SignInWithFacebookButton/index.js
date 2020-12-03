import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import { firebase } from '../../lib/firebase';
import * as CONTENT_ID from '../../constants/contentId'; 
import * as CONTENT_TYPE from '../../constants/contentType'; 
import * as EVENTS from '../../constants/events'; 
import * as METHODS from '../../constants/methods'; 
import * as SNACKBAR from '../../constants/snackbar';
import * as ROUTES from '../../constants/routes'; 
import { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar'; 
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useRouter } from 'next/router'; 

export default function SignInWithFacebookButton() {
    const router = useRouter(); 
    const [loading, setLoading] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState(''); 

    const handleClick = () => {
        firebase.analytics().logEvent('select_content', {
            content_id: CONTENT_ID.SIGN_IN_WITH_FACEBOOK_BUTTON,
            content_type: CONTENT_TYPE.BUTTON
        })

        signIn(); 
    }

    const signIn = () => {
        setLoading(true); 

        var provider = new firebase.auth.FacebookAuthProvider(); 

        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;

                // Log event for successful login 
                firebase.analytics().logEvent(EVENTS.LOGIN, {
                    method: METHODS.FACEBOOK
                })

                // Snackbar
                setSnackbarOpen(true); 
                setSnackbarMessage("You're signed in!");

                setLoading(false); 

                // Push route
                router.push(ROUTES.HOME);
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log("Error signing in with Facebook: ", errorMessage)

                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...

                // Log event for sign in error
                firebase.analytics().logEvent(EVENTS.LOGIN_ERROR, {
                    error_code: errorCode,
                    error_message: errorMessage
                })

                // Snackbar
                setSnackbarOpen(true); 
                setSnackbarMessage("Oops! Something went wrong.");

                setLoading(false); 
            });
    }

    return (
        <div>
            <Button
                onClick={handleClick}
                variant="contained"
                disableElevation
                disableRipple
                fullWidth
                disabled={loading}
                size="large"
                startIcon={<Icon className="fab fa-facebook-f" fontSize="small" />}
            >
                Continue with Facebook
            </Button>
            <Snackbar
                anchorOrigin={{
                    vertical: SNACKBAR.VERTICAL_ANCHOR,
                    horizontal: SNACKBAR.HORIZONTAL_ANCHOR
                }}
                open={snackbarOpen}
                autoHideDuration={SNACKBAR.AUTO_HIDE_DURATION}
                onClose={() => setSnackbarOpen(false)}
                message={snackbarMessage}
                action={
                    <React.Fragment>
                        <IconButton size="small" color="inherit" onClick={() => setSnackbarOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    )
}