export interface Question {
  id: number;
  text: string;
  answers: Array<{
    letter: "a" | "b" | "c" | "d";
    text: string;
    category?: string;
  }>;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Представь, что у тебя есть суперсила творить что угодно. Что это будет? 💫",
    answers: [
      { letter: "a", text: "Крутое приложение или игру", category: "IT" },
      { letter: "b", text: "Визуальный шедевр: картину, фильм или дизайн", category: "Creative" },
      { letter: "c", text: "Что-то полезное своими руками", category: "Technical" },
      { letter: "d", text: "Помочь людям решить проблему", category: "Social" },
    ],
  },
  {
    id: 2,
    text: "Как ты проводишь свободное время? 🎮",
    answers: [
      { letter: "a", text: "Залипаю в YouTube или стримах", category: "Creative" },
      { letter: "b", text: "Общаюсь с друзьями онлайн/оффлайн", category: "Social" },
      { letter: "c", text: "Разбираюсь в новых технологиях/софте", category: "IT" },
      { letter: "d", text: "Занимаюсь спортом или активностями", category: "Technical" },
    ],
  },
  {
    id: 3,
    text: "Что тебе больше нравится делать на уроках? 📚",
    answers: [
      { letter: "a", text: "Решать логические задачи и головоломки", category: "IT" },
      { letter: "b", text: "Делать презентации и творческие проекты", category: "Creative" },
      { letter: "c", text: "Работать руками на практике", category: "Technical" },
      { letter: "d", text: "Работать в команде над проектом", category: "Social" },
    ],
  },
  {
    id: 4,
    text: "Какая работа кажется тебе самой интересной? 💼",
    answers: [
      { letter: "a", text: "Создавать сайты, приложения или ИИ", category: "IT" },
      { letter: "b", text: "Снимать видео, делать дизайн, музыку", category: "Creative" },
      { letter: "c", text: "Чинить, строить, мастерить", category: "Technical" },
      { letter: "d", text: "Помогать людям: учить, лечить, консультировать", category: "Social" },
    ],
  },
  {
    id: 5,
    text: "Что тебе важнее всего в будущей работе? ⭐",
    answers: [
      { letter: "a", text: "Творческая свобода и самовыражение", category: "Creative" },
      { letter: "b", text: "Хорошая зарплата и стабильность", category: "IT" },
      { letter: "c", text: "Возможность приносить пользу людям", category: "Social" },
      { letter: "d", text: "Работать с конкретными задачами и видеть результат", category: "Technical" },
    ],
  },
  {
    id: 6,
    text: "Какая среда работы тебе больше подходит? 🏢",
    answers: [
      { letter: "a", text: "Удаленно, где угодно с ноутбуком", category: "IT" },
      { letter: "b", text: "В офисе с командой", category: "Social" },
      { letter: "c", text: "В студии/мастерской с оборудованием", category: "Creative" },
      { letter: "d", text: "На производстве/в цеху", category: "Technical" },
    ],
  },
  {
    id: 7,
    text: "Что тебя больше вдохновляет? 🌟",
    answers: [
      { letter: "a", text: "Новые технологии и гаджеты", category: "IT" },
      { letter: "b", text: "Искусство, музыка, фильмы", category: "Creative" },
      { letter: "c", text: "Истории успеха реальных людей", category: "Social" },
      { letter: "d", text: "Как устроены вещи и механизмы", category: "Technical" },
    ],
  },
  {
    id: 8,
    text: "Какой у тебя стиль учебы? 📖",
    answers: [
      { letter: "a", text: "Люблю эксперименты и практику", category: "Technical" },
      { letter: "b", text: "Лучше понимаю через визуальные примеры", category: "Creative" },
      { letter: "c", text: "Предпочитаю логику и системный подход", category: "IT" },
      { letter: "d", text: "Лучше учусь в группе, обсуждая темы", category: "Social" },
    ],
  },
  {
    id: 9,
    text: "Что ты делаешь, когда сталкиваешься с проблемой? 🤔",
    answers: [
      { letter: "a", text: "Гуглю и ищу решение в интернете", category: "IT" },
      { letter: "b", text: "Спрашиваю совет у друзей/родителей", category: "Social" },
      { letter: "c", text: "Пробую разные варианты, пока не найду решение", category: "Technical" },
      { letter: "d", text: "Подхожу креативно, ищу нестандартный выход", category: "Creative" },
    ],
  },
  {
    id: 10,
    text: "Какой проект ты бы с удовольствием сделал? 🚀",
    answers: [
      { letter: "a", text: "Запрограммировать игру или бота", category: "IT" },
      { letter: "b", text: "Снять крутой видеоролик или создать бренд", category: "Creative" },
      { letter: "c", text: "Собрать устройство (дрон, робот)", category: "Technical" },
      { letter: "d", text: "Организовать мероприятие или волонтерский проект", category: "Social" },
    ],
  },
  {
    id: 11,
    text: "Как ты относишься к монотонной работе? 🔄",
    answers: [
      { letter: "a", text: "Спокойно, если вижу смысл", category: "Technical" },
      { letter: "b", text: "Могу, но предпочитаю разнообразие", category: "IT" },
      { letter: "c", text: "Не моё, нужна творческая свобода", category: "Creative" },
      { letter: "d", text: "Скучно, хочу работать с людьми", category: "Social" },
    ],
  },
  {
    id: 12,
    text: "Какой навык тебе кажется самым крутым? 🎯",
    answers: [
      { letter: "a", text: "Программирование на нескольких языках", category: "IT" },
      { letter: "b", text: "Умение рисовать/монтировать/дизайнить", category: "Creative" },
      { letter: "c", text: "Ремонт техники или работа с инструментами", category: "Technical" },
      { letter: "d", text: "Умение договариваться и убеждать", category: "Social" },
    ],
  },
  {
    id: 13,
    text: "Где ты видишь себя через 5 лет? 🔮",
    answers: [
      { letter: "a", text: "Работаю в IT-компании или фрилансером", category: "IT" },
      { letter: "b", text: "Создаю контент или управляю креативным проектом", category: "Creative" },
      { letter: "c", text: "Занимаюсь инженерией или производством", category: "Technical" },
      { letter: "d", text: "Работаю с людьми: медицина, образование, HR", category: "Social" },
    ],
  },
  {
    id: 14,
    text: "Что тебя больше мотивирует работать? 💪",
    answers: [
      { letter: "a", text: "Решение сложных задач", category: "IT" },
      { letter: "b", text: "Возможность выразить себя", category: "Creative" },
      { letter: "c", text: "Видеть конкретный результат своего труда", category: "Technical" },
      { letter: "d", text: "Помогать другим и видеть их благодарность", category: "Social" },
    ],
  },
  {
    id: 15,
    text: "Как ты предпочитаешь работать? 👥",
    answers: [
      { letter: "a", text: "Один, в своем темпе", category: "IT" },
      { letter: "b", text: "С небольшой креативной командой", category: "Creative" },
      { letter: "c", text: "В большой команде с четкими ролями", category: "Technical" },
      { letter: "d", text: "Постоянно взаимодействуя с разными людьми", category: "Social" },
    ],
  },
  {
    id: 16,
    text: "Какие предметы в школе тебе даются легче? 📐",
    answers: [
      { letter: "a", text: "Математика, информатика, физика", category: "IT" },
      { letter: "b", text: "Литература, искусство, история", category: "Creative" },
      { letter: "c", text: "Физика, химия, технология", category: "Technical" },
      { letter: "d", text: "Обществознание, биология, иностранные языки", category: "Social" },
    ],
  },
  {
    id: 17,
    text: "Какой формат обучения тебе ближе? 🎓",
    answers: [
      { letter: "a", text: "Онлайн-курсы и самообразование", category: "IT" },
      { letter: "b", text: "Мастер-классы и творческие воркшопы", category: "Creative" },
      { letter: "c", text: "Практика и стажировки на производстве", category: "Technical" },
      { letter: "d", text: "Университет с живым общением", category: "Social" },
    ],
  },
  {
    id: 18,
    text: "Что для тебя успех в карьере? 🏆",
    answers: [
      { letter: "a", text: "Создать что-то инновационное", category: "IT" },
      { letter: "b", text: "Стать известным в своей сфере", category: "Creative" },
      { letter: "c", text: "Построить что-то значимое и долговечное", category: "Technical" },
      { letter: "d", text: "Помочь многим людям улучшить жизнь", category: "Social" },
    ],
  },
  {
    id: 19,
    text: "Какие качества у тебя развиты больше всего? ✨",
    answers: [
      { letter: "a", text: "Логика, аналитическое мышление", category: "IT" },
      { letter: "b", text: "Креативность, воображение", category: "Creative" },
      { letter: "c", text: "Усидчивость, внимательность к деталям", category: "Technical" },
      { letter: "d", text: "Эмпатия, коммуникабельность", category: "Social" },
    ],
  },
  {
    id: 20,
    text: "Последний вопрос! Что тебя больше всего пугает в будущей работе? 😰",
    answers: [
      { letter: "a", text: "Рутина и отсутствие роста", category: "IT" },
      { letter: "b", text: "Невозможность реализовать свои идеи", category: "Creative" },
      { letter: "c", text: "Ненадежность и нестабильность", category: "Technical" },
      { letter: "d", text: "Одиночество и отсутствие взаимодействия", category: "Social" },
    ],
  },
];
