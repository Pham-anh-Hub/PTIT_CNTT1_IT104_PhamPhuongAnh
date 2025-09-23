import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { changeTheme } from '../redux/slices/theme.slices'

export default function ChangeTheme() {
    const {theme} = useAppSelector((state) => state.changeTheme)
    const dispatch = useAppDispatch()
    const handleChangeTheme = () => {
        dispatch(changeTheme())
    }
  return (
    <div>
        <div className={`theme-${theme}`}>
            <button onClick={handleChangeTheme}>{theme.toUpperCase()}</button>
        </div>
    </div>
  )
}
