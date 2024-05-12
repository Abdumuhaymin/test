import { Link } from "react-router-dom";
import Cub from "../../assets/cub";
import Logo from "../../assets/logo";

export const Header = () => {
  return (
    <div className="flex justify-between  p-4 container">
      <Link to="/">
        <Logo />
      </Link>
      <Link
        to="/"
        className="flex items-center gap-[12px] bg-primary py-[20px] px-[60px] rounded-[16px] text-white text-base font-medium"
      >
        <Cub />
        Каталог услуг
      </Link>
      <ul className="flex bg-white rounded-2xl gap-[26px] py-[30px] px-5 text-base font-medium  ">
        <li>
          <Link to="/" className="hover:text-primary text-darkGrey">
            О проекте
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-primary text-darkGrey">
            Партнерство
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-primary text-darkGrey">
            Контакты
          </Link>
        </li>
      </ul>
      <Link
        to="/"
        className="flex items-center gap-[12px] bg-white py-[20px] px-[60px] rounded-[16px] text-primary text-base font-medium"
      >
        Вход / Регистрация
      </Link>
    </div>
  );
};
