import type { Question } from "@/data/questions";

// Grade 11 questions: "ВЫБЕРИ СВОЙ ПУТЬ"
// Mapping: a=IT, b=Creative, c=Social, d=Technical
export const questions: Question[] = [
  {
    id: 1,
    text:
      "Через 10 лет ты встречаешь одноклассника. О чём мечтаешь рассказать?",
    answers: [
      { letter: "a", text: "Как создал стартап, который изменил индустрию", category: "IT" },
      { letter: "b", text: "О своих творческих проектах, признании и наградах", category: "Creative" },
      { letter: "c", text: "Как помогаю людям решать сложные жизненные вопросы", category: "Social" },
      { letter: "d", text: "Что построил/изобрел нечто реально полезное", category: "Technical" },
    ],
  },
  {
    id: 2,
    text: "Какой вызов тебя точно не напугает?",
    answers: [
      { letter: "a", text: "Написать приложение за 48 часов на хакатоне", category: "IT" },
      { letter: "b", text: "Выступить перед тысячей людей со своим творчеством", category: "Creative" },
      { letter: "c", text: "Провести переговоры с трудным клиентом", category: "Social" },
      { letter: "d", text: "Починить сложный механизм без инструкции", category: "Technical" },
    ],
  },
  {
    id: 3,
    text: "Если бы ты был миллиардером, как потратил первый миллион?",
    answers: [
      { letter: "a", text: "Инвестировал в разработку ИИ будущего", category: "IT" },
      { letter: "b", text: "Создал арт-пространство для молодых талантов", category: "Creative" },
      { letter: "c", text: "Открыл бесплатную школу для детей из неблагополучных семей", category: "Social" },
      { letter: "d", text: "Построил завод экологичных технологий", category: "Technical" },
    ],
  },
  {
    id: 4,
    text: "Какая книга никогда не заинтересует?",
    answers: [
      { letter: "a", text: '"Психология продаж" — слишком много теории о людях', category: "IT" },
      { letter: "b", text: '"Программирование на Java" — сухо и без творчества', category: "Creative" },
      { letter: "c", text: '"Абстрактное искусство" — не понимаю смысла', category: "Social" },
      { letter: "d", text: '"Философия бытия" — много слов, мало дела', category: "Technical" },
    ],
  },
  {
    id: 5,
    text: "Что для тебя идеальное рабочее место?",
    answers: [
      { letter: "a", text: "Современный офис IT-компании с крутыми коллегами", category: "IT" },
      { letter: "b", text: "Творческая студия с музыкой и вдохновляющей атмосферой", category: "Creative" },
      { letter: "c", text: "Место, где постоянно общаешься с разными интересными людьми", category: "Social" },
      { letter: "d", text: "Мастерская или лаборатория с профессиональным оборудованием", category: "Technical" },
    ],
  },
  {
    id: 6,
    text: "Какой комплимент приятнее всего услышать?",
    answers: [
      { letter: "a", text: "Ты технический гений!", category: "IT" },
      { letter: "b", text: "У тебя невероятный талант и стиль!", category: "Creative" },
      { letter: "c", text: "Ты так хорошо понимаешь людей!", category: "Social" },
      { letter: "d", text: "Золотые руки — можешь создать что угодно!", category: "Technical" },
    ],
  },
  {
    id: 7,
    text: "Что точно не про тебя?",
    answers: [
      { letter: "a", text: "Работать в одиночку без командного взаимодействия", category: "IT" },
      { letter: "b", text: "Заниматься рутинной работой без творческих задач", category: "Creative" },
      { letter: "c", text: "Сидеть за компьютером целый день без живого общения", category: "Social" },
      { letter: "d", text: "Работать только с теорией, без практического применения", category: "Technical" },
    ],
  },
  {
    id: 8,
    text: "Какой страх может тебя остановить?",
    answers: [
      { letter: "a", text: "Боюсь, что технологии изменятся быстрее, чем я освою", category: "IT" },
      { letter: "b", text: "Что моё творчество никому не будет интересно", category: "Creative" },
      { letter: "c", text: "Что не смогу помочь людям в критической ситуации", category: "Social" },
      { letter: "d", text: "Что сделаю что-то небезопасное или некачественное", category: "Technical" },
    ],
  },
  {
    id: 9,
    text: "Если бы ты вёл курс в университете, он был бы о чём?",
    answers: [
      { letter: "a", text: '"Программирование будущего: ИИ и машинное обучение"', category: "IT" },
      { letter: "b", text: '"Творческие индустрии: от идеи до воплощения"', category: "Creative" },
      { letter: "c", text: '"Психология коммуникаций и управление командой"', category: "Social" },
      { letter: "d", text: '"Инженерные решения для устойчивого развития"', category: "Technical" },
    ],
  },
  {
    id: 10,
    text: "Какой тип стресса ты точно не выдержишь?",
    answers: [
      { letter: "a", text: "Постоянно объяснять людям простые вещи", category: "IT" },
      { letter: "b", text: "Работать в строгих рамках без возможности творить", category: "Creative" },
      { letter: "c", text: "Сидеть в тишине без человеческого общения", category: "Social" },
      { letter: "d", text: "Заниматься только бумажной работой", category: "Technical" },
    ],
  },
  {
    id: 11,
    text: "Что мотивирует тебя больше всего?",
    answers: [
      { letter: "a", text: "Возможность создать что-то инновационное", category: "IT" },
      { letter: "b", text: "Желание выразить себя и вдохновить других", category: "Creative" },
      { letter: "c", text: "Стремление помочь людям стать лучше", category: "Social" },
      { letter: "d", text: "Потребность построить что-то долговечное и полезное", category: "Technical" },
    ],
  },
  {
    id: 12,
    text: "В какой ситуации ты чувствуешь себя в своей тарелке?",
    answers: [
      { letter: "a", text: "Отлаживаю код в 3 утра, решая сложную задачу", category: "IT" },
      { letter: "b", text: "Выступаю на сцене или представляю свой проект", category: "Creative" },
      { letter: "c", text: "Веду переговоры или консультирую по сложному вопросу", category: "Social" },
      { letter: "d", text: "Собираю или чиню что-то сложное своими руками", category: "Technical" },
    ],
  },
  {
    id: 13,
    text: "Какое качество в людях ценишь больше всего?",
    answers: [
      { letter: "a", text: "Логическое мышление и умение решать задачи", category: "IT" },
      { letter: "b", text: "Креативность и нестандартный подход", category: "Creative" },
      { letter: "c", text: "Эмпатия и умение работать в команде", category: "Social" },
      { letter: "d", text: "Надёжность и умение доводить дело до конца", category: "Technical" },
    ],
  },
  {
    id: 14,
    text: "Если бы ты писал автобиографию, какое название выбрал?",
    answers: [
      { letter: "a", text: '"Как я кодил будущее"', category: "IT" },
      { letter: "b", text: '"Творить, чтобы жить"', category: "Creative" },
      { letter: "c", text: '"Человек среди людей"', category: "Social" },
      { letter: "d", text: '"Строить мир своими руками"', category: "Technical" },
    ],
  },
  {
    id: 15,
    text: "Какая неудача расстроит тебя больше всего?",
    answers: [
      { letter: "a", text: "Программа с критической ошибкой попала в продакшн", category: "IT" },
      { letter: "b", text: "Творческий проект получил плохие отзывы критиков", category: "Creative" },
      { letter: "c", text: "Не смог помочь человеку в сложной ситуации", category: "Social" },
      { letter: "d", text: "Построенное мной оказалось небезопасным", category: "Technical" },
    ],
  },
  {
    id: 16,
    text: "В чём твоя суперсила?",
    answers: [
      { letter: "a", text: "Вижу системы и связи там, где другие видят хаос", category: "IT" },
      { letter: "b", text: "Превращаю обычные вещи в произведения искусства", category: "Creative" },
      { letter: "c", text: "Нахожу подход к любому человеку", category: "Social" },
      { letter: "d", text: "Могу починить или собрать практически что угодно", category: "Technical" },
    ],
  },
  {
    id: 17,
    text: "Какой результат работы даёт тебе максимальное удовлетворение?",
    answers: [
      { letter: "a", text: "Элегантный код, который работает быстро и надёжно", category: "IT" },
      { letter: "b", text: "Творческая работа, которая вызывает эмоции у людей", category: "Creative" },
      { letter: "c", text: "Успешно решённая проблема в отношениях или конфликте", category: "Social" },
      { letter: "d", text: "Что-то физическое, что можно потрогать и использовать", category: "Technical" },
    ],
  },
  {
    id: 18,
    text: "Как ты предпочитаешь учиться новому?",
    answers: [
      { letter: "a", text: "Читаю документацию и экспериментирую с кодом", category: "IT" },
      { letter: "b", text: "Ищу вдохновение в работах других и пробую повторить", category: "Creative" },
      { letter: "c", text: "Общаюсь с экспертами и учусь на их опыте", category: "Social" },
      { letter: "d", text: "Разбираю готовые решения и собираю заново", category: "Technical" },
    ],
  },
  {
    id: 19,
    text: "Какая фраза лучше всего описывает твой подход к работе?",
    answers: [
      { letter: "a", text: '"Код должен быть не только рабочим, но и красивым"', category: "IT" },
      { letter: "b", text: '"Без страсти нет настоящего искусства"', category: "Creative" },
      { letter: "c", text: '"В команде можно свернуть горы"', category: "Social" },
      { letter: "d", text: '"Лучше один раз увидеть, чем сто раз услышать"', category: "Technical" },
    ],
  },
  {
    id: 20,
    text: "Через 20 лет ты хочешь, чтобы о тебе сказали:",
    answers: [
      { letter: "a", text: '"Этот человек изменил то, как мы используем технологии"', category: "IT" },
      { letter: "b", text: '"Этот художник/музыкант/дизайнер изменил восприятие искусства"', category: "Creative" },
      { letter: "c", text: '"Этот человек изменил жизни тысяч людей к лучшему"', category: "Social" },
      { letter: "d", text: '"Этот инженер/строитель создал что-то, что будет служить веками"', category: "Technical" },
    ],
  },
];
