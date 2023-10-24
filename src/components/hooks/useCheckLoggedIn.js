import Cookie from 'js-cookie'
import { useEffect } from 'react'
import checkLoggedIn from '@/pages/api/checkLoggedIn';

const checkLogin = async ({route}) => {
    const response = await fetch(checkLoggedIn, {
        method : 'POST',

      });
    const data = await response.text();
    console.log(data);
    let loggedIn = "false";
    if (Cookie.get('Auth') == 'Allowed')
    {
        loggedIn = "true"
    }
    if (loggedIn == "false")
    {
        Cookie.set('redirectURL', route, { expires: 1 , domain: '.kavishdoshi.com'})
        window.location.href = "https://login.kavishdoshi.com/login"
    }
}


const CheckLoggedIn = ({route}) => {
    useEffect(async () => {
        await checkLogin(route=route);
    }, [])
}

export default CheckLoggedIn