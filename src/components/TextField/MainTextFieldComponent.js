import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import colors from 'utils/global'
import { makeStyles } from '@mui/styles'

import './MainTextFieldComponent.css'

const useStyles = makeStyles({
  root: {
    '& label.Mui-focused': {
      color: colors.pink
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: colors.pink
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: colors.pink
      }
    }
  }
})

const characters = /^[A-Za-z]+$/i
const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const MainTextFieldComponent = () => {
  const classes = useStyles()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => { alert(JSON.stringify(data)) }

  return (
    <div className="textFieldContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField className={classes.root} label={'Name'} variant={'outlined'} {...register('firstName', { maxLength: { value: 15, message: 'Maksimalan broj karaktera je 15' }, required: 'Ovo polje je obavezno', pattern: { value: characters, message: 'Dozvoljeno je uneti samo slova' } })} style={{ marginBottom: 15 }}/>
        {errors.firstName && <p style={{ marginTop: -10, fontSize: 13, color: colors.error }}>{errors.firstName.message}</p>}

        <TextField className={classes.root} label={'Surname'} variant={'outlined'} {...register('lastName', { maxLength: { value: 20, message: 'Maksimalan broj karaktera je 20' }, required: 'Ovo polje je obavezno', pattern: { value: characters, message: 'Dozvoljeno je uneti samo slova' } })} style={{ marginBottom: 15 }}/>
        {errors.lastName && <p style={{ marginTop: -10, fontSize: 13, color: colors.error }}>{errors.lastName.message}</p>}

        <TextField className={classes.root} label={'Email'} variant={'outlined'} {...register('email', { required: 'Ovo polje je obavezno', pattern: { value: email, message: 'Neispravna email adresa' } })} style={{ marginBottom: 15 }}/>
        {errors.email && <p style={{ marginTop: -10, fontSize: 13, color: colors.error }}>{errors.email.message}</p>}
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  )
}

export default MainTextFieldComponent
