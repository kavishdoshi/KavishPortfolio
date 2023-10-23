import Cookie from 'js-cookie'
import { useEffect } from 'react'
import checkLoggedIn from './api/checkLoggedIn';

const CheckLoggedIn = ({route}) => {
    useEffect( async () => {
        const response = await fetch(checkLoggedIn, {
            method : 'POST',
          });
        const loggedIn = await response.text();
        if (loggedIn == "false")
        {
            Cookie.set('redirectURL', route, { expires: 1 , domain: '.kavishdoshi.com'})
            window.location.href = "https://login.kavishdoshi.com/login"
        }
    }, [])
    return null
}

export default CheckLoggedIn