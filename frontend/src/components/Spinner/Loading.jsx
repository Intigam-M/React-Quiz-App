import React from 'react'
import classes from './Loading.module.scss'

function Loading() {
  return (
    <>
        <div className={classes.Backdrop}></div>
        <div className={classes.Spinner}><div></div><div></div><div></div><div></div></div>
    </>
  )
}

export default Loading