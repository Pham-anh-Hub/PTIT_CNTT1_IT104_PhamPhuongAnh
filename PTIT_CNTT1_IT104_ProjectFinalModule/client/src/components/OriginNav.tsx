import settingIcon from "/images/setting_icon.png";
import signOutIcon from "/images/signOutIcon.png";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "antd/es/modal";
export default function OriginNav() {
   const [modal, contextHolder] = Modal.useModal();
  const navigate = useNavigate();
  const isRemember = () => {
    const clone = localStorage.getItem("remember");
    return clone ? JSON.parse(clone) : false;
  };

  const config = {
    title: "LOG OUT?",
    content: "You want to log out",
  };
  const handleLogOut = async () => {
    const confirmed = await modal.confirm(config);
    if(confirmed){
      if(!isRemember()){
        localStorage.removeItem("userLoggined")
      }
      localStorage.setItem("remember", JSON.stringify(false))
      navigate("/login")
    }
  };
  return (
    <>
    {contextHolder}
      <ul>
        <li>
          <NavLink
            style={{ padding: "12px 16px" }}
            className="flex items-center gap-[8px] transition-all transform-border hover:opacity-60 hover:bg-gray-300"
            to={"#"}
          >
            <img className="w-[16px] h-[16px]" src={settingIcon} />{" "}
            <p className="text-[15px] font-medium text-[#0D6EFD]">Setting</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ padding: "12px 16px" }}
            className="flex items-center gap-[8px] transition-all transform-border hover:opacity-60 hover:bg-gray-300"
            to={""}
            onClick={handleLogOut}
          >
            <img className="w-[16px] h-[16px]" src={signOutIcon} />{" "}
            <p className="text-[15px] font-medium text-[#0D6EFD]">Sign Out</p>
          </NavLink>
        </li>
      </ul>
    </>
  );
}
