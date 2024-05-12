import { Link } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import bg from "./assets/bg.png";
import Star from "./assets/star";
import Quession from "./assets/quession";
import Icon from "./assets/icon";
import { CardBlue, CardPinc } from "./components/card";
import { Cheekbox } from "./components/cheekbox";
import Sort from "./assets/sort";

const App = () => {
  return (
    <>
      <MainLayout>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className=" px-[30px] pt-[70px] pb-10 container mb-20 "
        >
          <div className="text-center w-[1038px] mx-auto mb-7  ">
            <Link
              to="/"
              className="text-sm mb-[15px] inline-block rounded-[200px] px-4 py-[10px] border border-white text-white hover:text-primary hover:bg-white"
            >
              Консультация от врачей
            </Link>
            <h1 className="text-6xl font-medium  text-white">
              Получайте бесплатную консультацию от лучших специалистов
            </h1>
            <ul className="flex justify-center gap-5 mt-10">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-3 bg-white pl-[43px] pr-[41px] py-[30px] rounded-2xl text-base font-medium"
                >
                  <Star />
                  Лучшие консультанты
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-3 bg-white pl-[74px] pr-[73px] py-[30px] rounded-2xl text-base font-medium"
                >
                  <Quession />
                  Задать вопрос
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-3 bg-white pl-[43px] pr-[41px] py-[30px] rounded-2xl text-base font-medium"
                >
                  <Icon />
                  Популярные вопросы
                </Link>
              </li>
            </ul>
          </div>
          <ul className="grid grid-cols-4 gap-[15px]">
            <li className="py-[26px] blur-0 bg-[rgba(255,255,255,0.15) border border-Wisteria] rounded-[20px] w-[323px] text-start pl-6">
              <h3 className="text-[50px] font-medium text-white mb-2 ">
                +1 000
              </h3>
              <p className="text-base  text-white">
                Врачей различных специализаций{" "}
              </p>
            </li>
            <li className="py-[26px] blur-0 bg-[rgba(255,255,255,0.15) border border-Wisteria] rounded-[20px] w-[323px] text-start pl-6">
              <h3 className="text-[50px] font-medium text-white mb-2 ">24/7</h3>
              <p className="text-base  text-white">
                Доступ к медицинской помощи
              </p>
            </li>
            <li className="py-[26px] blur-0 bg-[rgba(255,255,255,0.15) border border-Wisteria] rounded-[20px] w-[323px] text-start pl-6">
              <h3 className="text-[50px] font-medium text-white mb-2 ">
                + 95%
              </h3>
              <p className="text-base  text-white">Положительных отзывов</p>
            </li>
            <li className="py-[26px] blur-0 bg-[rgba(255,255,255,0.15) border border-Wisteria] rounded-[20px] w-[323px] text-start pl-6">
              <h3 className="text-[50px] font-medium text-white mb-2 ">
                +20 000
              </h3>
              <p className="text-base  text-white">Анкет пользователей</p>
            </li>
          </ul>
        </div>
        <div className="container flex gap-5 mb-[160px]">
          <Cheekbox />
          <div className="pb-[60xp]">
            <div>
              <div className="flex justify-between mb-10">
                <h2 className="text-[30px] font-medium">
                  Список последних ответов на вопросы{" "}
                  <span className="text-darkGrey">(12 493)</span>
                </h2>
                <button className="text-sm flex items-center justify-between bg-white px-10 rounded-xl py-5 gap-[9px] font-medium text-darkGrey">
                  <Sort />
                  Сортировать по
                </button>
              </div>
              <div className="flex items-center justify-between mb-[30px]">
                <input
                  type="text"
                  placeholder="Искать по тексту в вопросе"
                  className="bg-white rounded-2xl pl-[30px] py-[30px]  pr-[593px]"
                />
                <button className="text-sm flex items-center justify-between bg-primary px-[60px]  rounded-xl py-[30px] gap-[9px] font-medium text-white">
                  Поиск
                </button>
              </div>
              <CardBlue />
              <CardPinc />
              <CardBlue />
              <CardPinc />
              <CardBlue />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default App;
