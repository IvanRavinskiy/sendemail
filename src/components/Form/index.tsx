import {ChangeEvent, FormEvent, useState} from "react";
import emailjs from '@emailjs/browser';

export const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const cleanForm = () => {
        setName('')
        setEmail('')
        setPassword('')
    }

    const sendToEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm('service_ozo4pup', 'template_v4xnbmc', e.currentTarget, '8PHv4YxKhdfQNkxdh')
            .then(res => {
                console.log(res)
                cleanForm()
            })
            .catch(err => console.log(err))
}

    return (
        <div>
            <h1>Registration form</h1>
            <form onSubmit={sendToEmail}>
                <div>
                    <label>Name </label>
                    <input type={'text'} name={'name'} value={name} onChange={changeName}/>
                </div>
                <div>
                    <label>Email </label>
                    <input type={'email'} name={'email'} value={email} onChange={changeEmail}/>
                </div>
                <div>
                    <label>Password </label>
                    <input type={'password'} name={'password'} value={password} onChange={changePassword}/>
                </div>
                <input type={'submit'} value={'Send'}/>
            </form>
        </div>
    )
}
