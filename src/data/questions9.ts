import type { Question } from "@/data/questions";

// Grade 9 questions: "НАЙДИ СВОЙ ВАЙБ"
// Mapping: a=IT, b=Creative, c=Social, d=Technical
export const questions: Question[] = [
  {
    id: 1,
    text:
      "Твой телефон сломался, а завтра важная тусовка. Что делаешь?",
    answers: [
      { letter: "a", text: "Сам чиню или ищу видос на YouTube как починить", category: "IT" },
      { letter: "b", text: "Иду к друзьям, устраиваем живое общение без гаджетов", category: "Creative" },
      { letter: "c", text: "Рисую приглашения от руки — получится имба", category: "Social" },
      { letter: "d", text: "Пишу код для простого чат-бота на компе", category: "Technical" },
    ],
  },
  {
    id: 2,
    text: "Если бы ты был супергероем, какая твоя суперсила?",
    answers: [
      { letter: "a", text: "Телепатия — читать мысли одноклассников на контрольной", category: "IT" },
      { letter: "b", text: "Превращать любую тяжёлую работу в игру одним касанием", category: "Creative" },
      { letter: "c", text: "Материализовать любой арт, который нарисую в воздухе", category: "Social" },
      { letter: "d", text: "Хакнуть любую систему силой мысли", category: "Technical" },
    ],
  },
  {
    id: 3,
    text: "Какой контент ты точно не будешь смотреть?",
    answers: [
      { letter: "a", text: "Скучные лекции по истории без мемов", category: "IT" },
      { letter: "b", text: "Видео про ремонт машин и сварку", category: "Creative" },
      { letter: "c", text: "Туториалы по программированию на 3 часа", category: "Social" },
      { letter: "d", text: "Разборы психологических тестов", category: "Technical" },
    ],
  },
  {
    id: 4,
    text:
      "Представь: ты выиграл миллион, но можешь потратить только на одно. Что выберешь?",
    answers: [
      { letter: "a", text: "Открою своё дело — буду флексить как предприниматель", category: "IT" },
      { letter: "b", text: "Куплю студию звукозаписи и буду творить огонь", category: "Creative" },
      { letter: "c", text: "Потрачу на благотворительность, помогу людям", category: "Social" },
      { letter: "d", text: "Создам мастерскую с крутым оборудованием", category: "Technical" },
    ],
  },
  {
    id: 5,
    text: "Какая фраза описывает твой стиль жизни?",
    answers: [
      { letter: "a", text: "Без стресса, на чиле решаю любые проблемы", category: "IT" },
      { letter: "b", text: "Творчество — мой смысл жизни, остальное лейм", category: "Creative" },
      { letter: "c", text: "Люди — это самое интересное в мире", category: "Social" },
      { letter: "d", text: "Программирую будущее уже сегодня", category: "Technical" },
    ],
  },
  {
    id: 6,
    text: "Что для тебя настоящий кринж?",
    answers: [
      { letter: "a", text: "Когда взрослые пытаются говорить на молодёжном сленге", category: "IT" },
      { letter: "b", text: "Сломанная техника, которую никто не может починить", category: "Creative" },
      { letter: "c", text: "Плохо смонтированные видео с кривым звуком", category: "Social" },
      { letter: "d", text: "Одноклассники, которые не умеют общаться", category: "Technical" },
    ],
  },
  {
    id: 7,
    text: "Если бы ты вёл свой ТикТок, какой контент постил?",
    answers: [
      { letter: "a", text: "Лайфхаки по коду и IT-приколы", category: "IT" },
      { letter: "b", text: "Арт-процессы и творческие челленджи", category: "Creative" },
      { letter: "c", text: "Социальные эксперименты и интервью", category: "Social" },
      { letter: "d", text: "Обзоры гаджетов и их разборка", category: "Technical" },
    ],
  },
  {
    id: 8,
    text: "Какой подарок на День Рождения тебя точно порадует?",
    answers: [
      { letter: "a", text: "Механическая клавиатура для программирования", category: "IT" },
      { letter: "b", text: "Профессиональные краски или музыкальное оборудование", category: "Creative" },
      { letter: "c", text: "Билеты на концерт любимой группы с бэсти", category: "Social" },
      { letter: "d", text: "Набор инструментов или конструктор", category: "Technical" },
    ],
  },
  {
    id: 9,
    text: "Ты в команде для школьного проекта. Какую роль берёшь?",
    answers: [
      { letter: "a", text: "Создаю сайт или презентацию — это изи для меня", category: "IT" },
      { letter: "b", text: "Отвечаю за дизайн и креативную подачу", category: "Creative" },
      { letter: "c", text: "Координирую команду и провожу исследования", category: "Social" },
      { letter: "d", text: "Делаю всё, что связано с техникой и оборудованием", category: "Technical" },
    ],
  },
  {
    id: 10,
    text: "Какой фильм посмотришь вечером?",
    answers: [
      { letter: "a", text: '"Социальная сеть" про создание Facebook', category: "IT" },
      { letter: "b", text: '"Тайна Коко" — мультик про музыку и семью', category: "Creative" },
      { letter: "c", text: '"Общество мертвых поэтов" про учителя и учеников', category: "Social" },
      { letter: "d", text: '"Форсаж" — про машины и экшн', category: "Technical" },
    ],
  },
  {
    id: 11,
    text: "Что делаешь, если видишь, что одноклассник грустный?",
    answers: [
      { letter: "a", text: "Отправляю смешные мемы в личку", category: "IT" },
      { letter: "b", text: "Рисую забавную картинку или включаю музыку", category: "Creative" },
      { letter: "c", text: "Подхожу и спрашиваю, что случилось, готов выслушать", category: "Social" },
      { letter: "d", text: "Предлагаю вместе что-то починить или собрать", category: "Technical" },
    ],
  },
  {
    id: 12,
    text: "Какое утверждение про тебя правда?",
    answers: [
      { letter: "a", text: "Могу часами сидеть за компом, создавая что-то новое", category: "IT" },
      { letter: "b", text: "Постоянно что-то рисую, напеваю или сочиняю", category: "Creative" },
      { letter: "c", text: "Люблю быть в центре событий, общаться с людьми", category: "Social" },
      { letter: "d", text: "Предпочитаю работать руками, а не головой", category: "Technical" },
    ],
  },
  {
    id: 13,
    text:
      "Если школа сгорела (никто не пострадал), что подумаешь первым?",
    answers: [
      { letter: "a", text: "Надо создать приложение для онлайн-обучения", category: "IT" },
      { letter: "b", text: "Можно нарисовать граффити на руинах — получится арт", category: "Creative" },
      { letter: "c", text: "Организую сбор средств на восстановление", category: "Social" },
      { letter: "d", text: "Помогу отстроить заново — знаю толк в стройке", category: "Technical" },
    ],
  },
  {
    id: 14,
    text: "Какой вид отдыха для тебя топ?",
    answers: [
      { letter: "a", text: "Геймить всю ночь в новую игру", category: "IT" },
      { letter: "b", text: "Рисовать под музыку или играть на инструменте", category: "Creative" },
      { letter: "c", text: "Тусить с друзьями, ходить на вечеринки", category: "Social" },
      { letter: "d", text: "Мастерить что-то в гараже или чинить велик", category: "Technical" },
    ],
  },
  {
    id: 15,
    text: "Что означает успех в твоём понимании?",
    answers: [
      { letter: "a", text: "Создать приложение, которым пользуются миллионы", category: "IT" },
      { letter: "b", text: "Чтобы моё творчество трогало людей до слёз", category: "Creative" },
      { letter: "c", text: "Помочь тысячам людей решить их проблемы", category: "Social" },
      { letter: "d", text: "Построить что-то, что будет служить людям годами", category: "Technical" },
    ],
  },
  {
    id: 16,
    text: "Какая работа кажется тебе настоящим зашкваром?",
    answers: [
      { letter: "a", text: "Сидеть целый день с людьми и их проблемами", category: "IT" },
      { letter: "b", text: "Программировать одно и то же 8 часов подряд", category: "Creative" },
      { letter: "c", text: "Рисовать по шаблону без творческой свободы", category: "Social" },
      { letter: "d", text: "Весь день заниматься документами за столом", category: "Technical" },
    ],
  },
  {
    id: 17,
    text: "Если бы ты открыл YouTube-канал, о чём бы он был?",
    answers: [
      { letter: "a", text: "Обзоры новых технологий и гаджетов", category: "IT" },
      { letter: "b", text: "Туториалы по рисованию и музыке", category: "Creative" },
      { letter: "c", text: "Социальные эксперименты и реакции людей", category: "Social" },
      { letter: "d", text: "Самоделки и лайфхаки для дома", category: "Technical" },
    ],
  },
  {
    id: 18,
    text: "Какая мечта кажется тебе самой крутой?",
    answers: [
      { letter: "a", text: "Работать в Google или Apple", category: "IT" },
      { letter: "b", text: "Выставлять свои работы в галерее или играть на сцене", category: "Creative" },
      { letter: "c", text: "Стать известным блогером или ведущим", category: "Social" },
      { letter: "d", text: "Открыть мастерскую и делать уникальные вещи", category: "Technical" },
    ],
  },
  {
    id: 19,
    text: "Что бы ты никогда не выложил в соцсети?",
    answers: [
      { letter: "a", text: "Фото сломанной техники — это кринж", category: "IT" },
      { letter: "b", text: "Скучные посты без креатива", category: "Creative" },
      { letter: "c", text: "Контент, который может кого-то обидеть", category: "Social" },
      { letter: "d", text: "Теоретические статьи без практики", category: "Technical" },
    ],
  },
  {
    id: 20,
    text: "Каким хочешь запомниться одноклассникам?",
    answers: [
      { letter: "a", text: "Тем, кто создал что-то цифровое и крутое", category: "IT" },
      { letter: "b", text: "Тем, кто делал школу ярче своим творчеством", category: "Creative" },
      { letter: "c", text: "Тем, кто всегда помогал и был душой компании", category: "Social" },
      { letter: "d", text: "Тем, кто мог починить любую вещь", category: "Technical" },
    ],
  },
];
