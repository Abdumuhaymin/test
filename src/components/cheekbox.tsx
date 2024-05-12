import X from "../assets/x";

export const Cheekbox = () => {
  return (
    <div className="w-[335px] px-5 py-[30px] h-[900px] bg-white rounded-[18px]">
      <div className="flex w-full mb-6 items-end">
        <h2 className="text-lg font-medium">Фильтрация по направлениям</h2>
        <button className="flex items-center text-sm font-medium px-0 text-red-600 gap-2">
          <X /> Сбросить
        </button>
      </div>
      <input
        type="text"
        placeholder="Поиск направления"
        className="bg-[#F8F8F8] px-4 py-3 mb-6 w-full rounded-[12px]"
      />
      <ul className="flex flex-col gap-6">
        <li>
          <input type="checkbox" name="Аллерголог" id="1" />
          <label htmlFor="1" className="text-base ml-3">
            {" "}
            Аллерголог
          </label>
        </li>
        <li>
          <input type="checkbox" name="Андролог" id="2" />
          <label htmlFor="2" className="text-base ml-3">
            {" "}
            Андролог
          </label>
        </li>
        <li>
          <input type="checkbox" name="Венеролог" id="3" />
          <label htmlFor="3" className="text-base ml-3">
            {" "}
            Венероло
          </label>
        </li>
        <li>
          <input type="checkbox" name="Врач УЗИ" id="4" />
          <label htmlFor="4" className="text-base ml-3">
            {" "}
            Врач УЗИ
          </label>
        </li>
        <li>
          <input type="checkbox" name="Гастроэтеролог" id="5" />
          <label htmlFor="5" className="text-base ml-3">
            {" "}
            Гастроэтеролог
          </label>
        </li>
        <li>
          <input type="checkbox" name="Гематолог" id="6" />
          <label htmlFor="6" className="text-base ml-3">
            {" "}
            Гематолог
          </label>
        </li>
        <li>
          <input type="checkbox" name="Генетик" id="7" />
          <label htmlFor="7" className="text-base ml-3">
            {" "}
            Генетик
          </label>
        </li>
        <li>
          <input type="checkbox" name="Гинеколог" id="8" />
          <label htmlFor="8" className="text-base ml-3">
            {" "}
            Гинеколог
          </label>
        </li>
        <li>
          <input type="checkbox" name="Дерматолог" id="9" />
          <label htmlFor="9" className="text-base ml-3">
            {" "}
            Дерматолог
          </label>
        </li>
        <li>
          <input type="checkbox" name="Диетолог" id="10" />
          <label htmlFor="10" className="text-base ml-3">
            Диетолог
          </label>
        </li>
        <li>
          <input type="checkbox" name="Инфекционист" id="11" />
          <label htmlFor="11" className="text-base ml-3">
            Инфекционист
          </label>
        </li>
        <li>
          <input type="checkbox" name="Кардиолог" id="12" />
          <label htmlFor="12" className="text-base ml-3">
            Кардиолог
          </label>
        </li>
        <li>
          <input type="checkbox" name="ЛОР" id="13" />
          <label htmlFor="13" className="text-base ml-3">
            ЛОР
          </label>
        </li>
        <li>
          <input type="checkbox" name="Маммолог" id="14" />
          <label htmlFor="14" className="text-base ml-3">
            Маммолог
          </label>
        </li>
        <li>
          <input type="checkbox" name="Нарколог" id="15" />
          <label htmlFor="15" className="text-base ml-3">
            Нарколог
          </label>
        </li>
      </ul>
    </div>
  );
};
