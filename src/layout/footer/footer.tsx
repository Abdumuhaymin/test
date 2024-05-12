import { Link } from "react-router-dom";
import Logo2 from "../../assets/logo2";

export const Footer = () => {
  return (
    <>
      <ul className="flex container justify-between items-start border-b-[1px] pb-[86px] border-footerBr">
        <li>
          <Link className="mb-5" to="/">
            <Logo2 />
          </Link>
          <h2 className="text-xl text-white">Консультация от врачей</h2>
        </li>
        <li>
          <h3 className="text-xl text-white mb-6">Каталог услуг</h3>
          <ul>
            <li>
              <Link
                className="text-xl text-white font-medium hover:text-primary"
                to="/"
              >
                Медицинская консультация
              </Link>
            </li>
            <li>
              <Link
                className="text-xl text-white font-medium hover:text-primary"
                to="/"
              >
                Справочник лекарств
              </Link>
            </li>
            <li>
              <Link
                className="text-xl text-white font-medium hover:text-primary"
                to="/"
              >
                Справочник болезней
              </Link>
            </li>
            <li>
              <Link
                className="text-xl text-white font-medium hover:text-primary"
                to="/"
              >
                Справочник лекарств
              </Link>
            </li>
            <li>
              <Link
                className="text-xl text-white font-medium hover:text-primary"
                to="/"
              >
                Справочник Врачей и Клиник
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="text-xl text-white mb-6">Выполнить</h3>
          <ul>
            <li>
              <Link
                className="text-xl text-white font-medium hover:text-primary"
                to="/"
              >
                Задать вопрос
              </Link>
            </li>
            <li>
              <Link
                className="text-xl text-white font-medium hover:text-primary"
                to="/"
              >
                Лучшие консультанты
              </Link>
            </li>
            <li>
              <Link
                className="text-xl text-white font-medium hover:text-primary"
                to="/"
              >
                Популярные вопросы
              </Link>
            </li>
            <li>
              <Link
                className="text-xl text-white font-medium hover:text-primary"
                to="/"
              >
                Регистрация
              </Link>
            </li>
            <li>
              <Link
                className="text-xl text-white font-medium hover:text-primary"
                to="/"
              >
                Вход в личный кабинет
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="text-xl text-white mb-6">Проект</h3>
          <ul>
            <li>
              <Link className="text-xl text-white hover:text-primary" to="/">
                Информация о проекте
              </Link>
            </li>
            <li>
              <Link className="text-xl text-white hover:text-primary" to="/">
                Сотрудничество
              </Link>
            </li>
            <li>
              <Link className="text-xl text-white hover:text-primary" to="/">
                Контакты для связи
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="flex items-center justify-between container pt-[30px]">
        <li className="mr-[355px]">
          <p className="text-sm text-lightGray">
            MedYordam 2024 - Все права защищены
          </p>
        </li>
        <li className="mr-[470px]">
          <p className="text-sm text-lightGray">Обработка данных</p>
        </li>
        <li>
          <p className="text-sm text-lightGray">Условия использования</p>
        </li>
      </ul>
    </>
  );
};
