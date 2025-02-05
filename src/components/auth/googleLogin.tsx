import { GoogleLogin as _GoogleLogin, useGoogleLogin } from '@react-oauth/google';


export const GoogleLogin = ({text}) => {
    const login = useGoogleLogin({
        flow: 'auth-code',
        redirect_uri: 'http://localhost:8108/auth/google/authenticate/'
    })

    return (<span className="w-full">
        <_GoogleLogin
            text={text || 'signin_with'}
            onSuccess={credentialResponse => {
                console.log(credentialResponse)
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    </span>)
}
