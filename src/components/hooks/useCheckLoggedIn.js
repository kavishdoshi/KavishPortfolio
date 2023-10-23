import Cookie from 'js-cookie'
import { useEffect } from 'react'
import checkLoggedIn from '@/pages/api/checkLoggedIn';

const CheckLoggedIn = ({route}) => {
    useEffect( async () => {
        // const session = await getServerSession();
        // const response = await fetch(checkLoggedIn, {
        //     method : 'POST',

        //   });
        let loggedIn = "false";
        if (Cookie.get('Auth'))
        {
            if (Cookie.get('Auth') == 'Allowed')
            {
                loggedIn = "true"
            }
        }
        if (loggedIn == "false")
        {
            Cookie.set('redirectURL', route, { expires: 1 , domain: '.kavishdoshi.com'})
            window.location.href = "https://login.kavishdoshi.com/login"
        }
    }, [])
}

export default CheckLoggedIn