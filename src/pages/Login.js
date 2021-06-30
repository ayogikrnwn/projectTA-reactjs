import React , {useEffect} from 'react'

import LoginForm from '../parts/LoginForm'

export default function Login() {

    useEffect(() => {
        window.scroll(0,0)

    }, [])


    return (
        <>
            <section className="container mx-auto ">
                <LoginForm></LoginForm>
            </section>
        </>
    )
}
