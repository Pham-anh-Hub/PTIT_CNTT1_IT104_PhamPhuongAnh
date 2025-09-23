import { DashboardOutlined, DollarOutlined, FileOutlined, LeftOutlined, LineChartOutlined, RightOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { changeMenuMode } from '../redux/slices/menu.slices'

export default function MenuMode() {
    const {mode} = useAppSelector((state) => state.menuMode)
    const dispatch = useAppDispatch()
    const handleShorten = () => {
        dispatch(changeMenuMode())
    }
  return (
    <div className='menu-theme'>
        <ul>
            <li><DashboardOutlined /> {mode === "full" ? <p>Bảng điều khiển</p> : <></>}</li>
            <li><UserOutlined /> {mode === "full" ? <p>Tài khoản</p> : <></>}</li>
            <li><DollarOutlined /> {mode === "full" ? <p>Tài sản</p> : <></>} </li>
            <li><LineChartOutlined /> {mode === "full" ? <p>Thống kê</p> : <></>} </li>
            <li><FileOutlined /> {mode === "full" ? <p>Tài liệu</p> : <></>} </li>
            <li style={{cursor:"pointer"}} onClick={handleShorten}> {mode === "full" ? <><LeftOutlined /> <p>Thu gọn</p></> : <><RightOutlined /></>} </li>
        </ul>
    </div>
  )
}
