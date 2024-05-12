import Femail from "../assets/femail";
import doctor from "../assets/doctorD.png";
import Down from "../assets/down";
import Male from "../assets/male";

const CardPinc = () => {
  return (
    <div className="container ">
      <div className="rounded-[18px] overflow-hidden w-[1045px]  mb-10  bg-white">
        <div className="flex bg-gradient-to-r mb-6 from-Rockman to-primary px-6 py-4 justify-between  ">
          <p className="text-white text-base font-medium">Вопрос: 21408</p>
          <data value="27.01.2024 09:41" className="text-white">
            Январь 27, 2024 9:41 pm
          </data>
        </div>

        <div className="px-[18px] pb-[17px]">
          <div className="flex gap-[14px] items-start mb-5">
            <div className="p-6 bg-Wiston w-[925px] rounded-[12px] rounded-tr-none">
              <div className="flex justify-between mb-3 items-center ">
                <p className="text-primary">Получено ответов (3)</p>
                <p className="text-darkGrey text-base font-medium">
                  Kimberly Mastrangelo (24 лет)
                </p>
              </div>
              <hr className="mb-[10px]" />
              <p className="text-[14px] font-normal">
                "Здравствуйте, доктор. В последнее время я заметил(а), что
                стал(а) быстро уставать и появилась постоянная усталость,
                несмотря на полноценный сон.К тому же, у меня снизился аппетит,
                и я замечаю периодические головные боли. Могли бы вы подсказать,
                что это может быть и какие обследования мне стоит пройти для
                уточнения...
                <span className="underline text-[#747474]">
                  Читать полностью
                </span>
              </p>
            </div>
            <Femail />
          </div>
          <div className="flex gap-[14px] ">
            <img src={doctor} alt="doctor" className="w-[70px] h-[70px]" />
            <div className="bg-primary px-6 py-4 mb-6  rounded-[12px] rounded-tl-none">
              <div className="flex items-center mb-[10px] justify-between">
                <p className="font-normal text-sm text-white">
                  Mary Freund (Гастроинтеролог)
                </p>
                <p className="font-normal text-sm text-white">
                  Январь 28, 2024 9:41 pm
                </p>
              </div>
              <hr className="mb-[10px]" />
              <p className="text-[14px] font-normal text-white">
                "Можете ли вы, пожалуйста, объяснить, какие могут быть причины
                моих текущих симптомов (укажите свои симптомы), какие
                диагностические тесты вы рекомендуете для подтверждения
                диагноза, и какие методы лечения или изменения в образе жизни вы
                считаете наиболее эффективными для улучшения моего...{" "}
                <span className="underline">Читать полностью</span>
              </p>
            </div>
          </div>
          <button className="bg-[#F8F8F8] w-full flex items-center gap-3 justify-center px-6 py-4 rounded-[12px] text-darkGrey font-medium">
            Смотреть все ответы (2) <Down />
          </button>
        </div>
      </div>
    </div>
  );
};

const CardBlue = () => {
  return (
    <div className="container ">
      <div className="rounded-[18px] overflow-hidden w-[1045px] mb-10  bg-white">
        <div className="flex bg-gradient-to-r mb-6 from-Rockman to-primary px-6 py-4 justify-between  ">
          <p className="text-white text-base font-medium">Вопрос: 21408</p>
          <data value="27.01.2024 09:41" className="text-white">
            Январь 27, 2024 9:41 pm
          </data>
        </div>

        <div className="px-[18px] pb-[17px]">
          <div className="flex gap-[14px] items-start mb-5">
            <div className="p-6 bg-Wiston w-[925px] rounded-[12px] rounded-tr-none">
              <div className="flex justify-between mb-3 items-center ">
                <p className="text-primary">Получено ответов (3)</p>
                <p className="text-darkGrey text-base font-medium">
                  Lorri Warf (26 лет)
                </p>
              </div>
              <hr className="mb-[10px]" />
              <p className="text-[14px] font-normal">
                "Здравствуйте, доктор. В последнее время я заметил(а), что
                стал(а) быстро уставать и появилась постоянная усталость,
                несмотря на полноценный сон.К тому же, у меня снизился аппетит,
                и я замечаю периодические головные боли. Могли бы вы подсказать,
                что это может быть и какие обследования мне стоит пройти для
                уточнения...
                <span className="underline text-[#747474]">
                  Читать полностью
                </span>
              </p>
            </div>
            <Male />
          </div>
          <div className="flex gap-[14px] ">
            <img src={doctor} alt="doctor" className="w-[70px] h-[70px]" />
            <div className="bg-primary px-6 py-4 mb-6  rounded-[12px] rounded-tl-none">
              <div className="flex items-center mb-[10px] justify-between">
                <p className="font-normal text-sm text-white">
                  Mary Freund (Гастроинтеролог)
                </p>
                <p className="font-normal text-sm text-white">
                  Январь 28, 2024 9:41 pm
                </p>
              </div>
              <hr className="mb-[10px]" />
              <p className="text-[14px] font-normal text-white">
                "Можете ли вы, пожалуйста, объяснить, какие могут быть причины
                моих текущих симптомов (укажите свои симптомы), какие
                диагностические тесты вы рекомендуете для подтверждения
                диагноза, и какие методы лечения или изменения в образе жизни вы
                считаете наиболее эффективными для улучшения моего...{" "}
                <span className="underline">Читать полностью</span>
              </p>
            </div>
          </div>
          <button className="bg-[#F8F8F8] w-full flex items-center gap-3 justify-center px-6 py-4 rounded-[12px] text-darkGrey font-medium">
            Смотреть все ответы (2) <Down />
          </button>
        </div>
      </div>
    </div>
  );
};
export { CardPinc, CardBlue };
