import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { changeMode } from '../redux/slices/mode.slices'

export default function ChangeMode() {
    const {displayMode} = useAppSelector((state) => state.changeMode)
    const dispatch = useAppDispatch()
    const handleChangeMode = () =>{
        console.log(displayMode);
        
        dispatch(changeMode())
    }
  return (
    <div>
        <button onClick={handleChangeMode}>{displayMode === "flex" ? "List Mode" : "Grid Mode"}</button>
        <div className='list-display'>
            <ul className={displayMode === "flex" ? "flex-mode" : "grid-mode"}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    </div>
  )
}
