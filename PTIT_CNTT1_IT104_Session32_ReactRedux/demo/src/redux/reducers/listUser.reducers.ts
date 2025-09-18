export type UserType = {
    id: number, 
    userName: string,
    gender: string,
    dateBirth: string,
    address: string
}

const listUser :UserType[] = [
    {id: 1, userName: "Nguyễn Văn A", gender:"Nam", dateBirth:"22/09/2020", address:"Thanh Xuân, Hà Nội"},
    {id: 2, userName: "Nguyễn Thị B", gender:"Nữ", dateBirth:"25/10/2020", address:"Hà Đông, Hà Nội"}
]

const listUserReducer = (state = listUser) => {
    return state
}

export default listUserReducer