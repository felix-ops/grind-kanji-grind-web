export interface KanjiEntry {
  kanji: string;
  meaning: string;
}

export interface KanjiData {
  JLPT_N5: KanjiEntry[];
  JLPT_N4: KanjiEntry[];
  JLPT_N3: KanjiEntry[];
  JLPT_N2: KanjiEntry[];
  JLPT_N1: KanjiEntry[];
  RTK_5ED: KanjiEntry[];
  RTK_6ED: KanjiEntry[];
}

export const kanjiData: KanjiData = {
  JLPT_N5: [
    {
      kanji: "月",
      meaning: "month, moon",
    },
    {
      kanji: "見",
      meaning: "chances, hopes, idea, look at, opinion, see, visible",
    },
    {
      kanji: "食",
      meaning: "eat, food",
    },
    {
      kanji: "間",
      meaning: "interval, space",
    },
    {
      kanji: "読",
      meaning: "read",
    },
    {
      kanji: "母",
      meaning: "mother",
    },
    {
      kanji: "大",
      meaning: "big, large",
    },
    {
      kanji: "南",
      meaning: "south",
    },
    {
      kanji: "一",
      meaning: "one, one radical (no.1)",
    },
    {
      kanji: "二",
      meaning: "two, two radical (no. 7)",
    },
    {
      kanji: "人",
      meaning: "person",
    },
    {
      kanji: "日",
      meaning: "Japan, counter for days, day, sun",
    },
    {
      kanji: "入",
      meaning: "enter, insert",
    },
    {
      kanji: "気",
      meaning: "air, atmosphere, mind, mood, spirit",
    },
    {
      kanji: "時",
      meaning: "hour, time",
    },
    {
      kanji: "水",
      meaning: "water",
    },
    {
      kanji: "年",
      meaning: "counter for years, year",
    },
    {
      kanji: "右",
      meaning: "right",
    },
    {
      kanji: "雨",
      meaning: "rain",
    },
    {
      kanji: "七",
      meaning: "seven",
    },
    {
      kanji: "五",
      meaning: "five",
    },
    {
      kanji: "午",
      meaning:
        "11AM-1PM, noon, seventh sign of Chinese zodiac, sign of the horse",
    },
    {
      kanji: "後",
      meaning: "back, behind, later",
    },
    {
      kanji: "男",
      meaning: "male",
    },
    {
      kanji: "語",
      meaning: "language, speech, word",
    },
    {
      kanji: "車",
      meaning: "car",
    },
    {
      kanji: "六",
      meaning: "six",
    },
    {
      kanji: "話",
      meaning: "tale, talk",
    },
    {
      kanji: "生",
      meaning: "birth, genuine, life",
    },
    {
      kanji: "北",
      meaning: "north",
    },
    {
      kanji: "木",
      meaning: "tree, wood",
    },
    {
      kanji: "西",
      meaning: "Spain, west",
    },
    {
      kanji: "円",
      meaning: "circle, round, yen",
    },
    {
      kanji: "行",
      meaning: "act, bank, carry out, conduct, going, journey, line, row",
    },
    {
      kanji: "白",
      meaning: "white",
    },
    {
      kanji: "本",
      meaning:
        "book, counter for long cylindrical things, main, origin, present, real, true",
    },
    {
      kanji: "中",
      meaning: "center, in, inside, mean, middle",
    },
    {
      kanji: "九",
      meaning: "nine",
    },
    {
      kanji: "毎",
      meaning: "every",
    },
    {
      kanji: "休",
      meaning: "day off, rest, retire, sleep",
    },
    {
      kanji: "校",
      meaning: "correction, exam, printing, proof, school",
    },
    {
      kanji: "八",
      meaning: "eight, eight radical (no. 12)",
    },
    {
      kanji: "万",
      meaning: "10,000, ten thousand",
    },
    {
      kanji: "高",
      meaning: "expensive, high, tall",
    },
    {
      kanji: "長",
      meaning: "leader, long, senior, superior",
    },
    {
      kanji: "半",
      meaning: "half, middle, odd number, part-, semi-",
    },
    {
      kanji: "下",
      meaning: "below, descend, down, give, inferior, low",
    },
    {
      kanji: "火",
      meaning: "fire",
    },
    {
      kanji: "名",
      meaning: "distinguished, name, noted, reputation",
    },
    {
      kanji: "何",
      meaning: "what",
    },
    {
      kanji: "十",
      meaning: "ten",
    },
    {
      kanji: "千",
      meaning: "thousand",
    },
    {
      kanji: "川",
      meaning: "river, river or three-stroke river radical (no. 47), stream",
    },
    {
      kanji: "先",
      meaning: "ahead, before, future, precedence, previous",
    },
    {
      kanji: "国",
      meaning: "country",
    },
    {
      kanji: "今",
      meaning: "now",
    },
    {
      kanji: "出",
      meaning: "come out, exit, go out, leave, protrude, put out",
    },
    {
      kanji: "左",
      meaning: "left",
    },
    {
      kanji: "前",
      meaning: "before, in front",
    },
    {
      kanji: "金",
      meaning: "gold",
    },
    {
      kanji: "書",
      meaning: "write",
    },
    {
      kanji: "友",
      meaning: "friend",
    },
    {
      kanji: "百",
      meaning: "hundred",
    },
    {
      kanji: "女",
      meaning: "female, woman",
    },
    {
      kanji: "小",
      meaning: "little, small",
    },
    {
      kanji: "天",
      meaning: "heavens, imperial, sky",
    },
    {
      kanji: "外",
      meaning: "outside",
    },
    {
      kanji: "父",
      meaning: "father",
    },
    {
      kanji: "電",
      meaning: "electricity",
    },
    {
      kanji: "土",
      meaning: "Turkey, earth, ground, soil",
    },
    {
      kanji: "東",
      meaning: "east",
    },
    {
      kanji: "学",
      meaning: "learning, science, study",
    },
    {
      kanji: "来",
      meaning: "become, cause, come, due, next",
    },
    {
      kanji: "三",
      meaning: "three",
    },
    {
      kanji: "山",
      meaning: "mountain",
    },
    {
      kanji: "上",
      meaning: "above, up",
    },
    {
      kanji: "子",
      meaning: "11PM-1AM, child, first sign of Chinese zodiac, sign of the rat",
    },
    {
      kanji: "分",
      meaning:
        "1%, chances, degree, duty, know, minute of time, one's lot, part, rate, segment, shaku/100, share, understand",
    },
    {
      kanji: "聞",
      meaning: "ask, hear, listen",
    },
    {
      kanji: "四",
      meaning: "four",
    },
  ],
  JLPT_N4: [
    {
      kanji: "同",
      meaning: "agree, equal, same",
    },
    {
      kanji: "犬",
      meaning: "dog",
    },
    {
      kanji: "死",
      meaning: "death, die",
    },
    {
      kanji: "動",
      meaning: "change, confusion, motion, move, shake, shift",
    },
    {
      kanji: "堂",
      meaning: "hall, public chamber",
    },
    {
      kanji: "色",
      meaning: "color",
    },
    {
      kanji: "多",
      meaning: "frequent, many, much",
    },
    {
      kanji: "悪",
      meaning: "bad, evil, false, rascal, vice, wrong",
    },
    {
      kanji: "道",
      meaning: "course, district, journey, moral, road-way, street, teachings",
    },
    {
      kanji: "建",
      meaning: "build",
    },
    {
      kanji: "研",
      meaning: "polish, sharpen, study of",
    },
    {
      kanji: "私",
      meaning: "I, me, private",
    },
    {
      kanji: "使",
      meaning:
        "ambassador, cause, envoy, messenger, order, send on a mission, use",
    },
    {
      kanji: "旅",
      meaning: "travel, trip",
    },
    {
      kanji: "始",
      meaning: "begin, commence",
    },
    {
      kanji: "安",
      meaning: "cheap, contented, low, peaceful, quiet, relax, rested",
    },
    {
      kanji: "姉",
      meaning: "elder sister",
    },
    {
      kanji: "特",
      meaning: "special",
    },
    {
      kanji: "別",
      meaning: "another, branch off, diverge, extra, fork, separate, specially",
    },
    {
      kanji: "以",
      meaning: "because, by means of, compared with, in view of",
    },
    {
      kanji: "体",
      meaning: "body, counter for images, object, reality, substance",
    },
    {
      kanji: "料",
      meaning: "fee, materials",
    },
    {
      kanji: "思",
      meaning: "think",
    },
    {
      kanji: "心",
      meaning: "heart, heart radical (no. 61), mind, spirit",
    },
    {
      kanji: "待",
      meaning: "depend on, wait",
    },
    {
      kanji: "医",
      meaning: "doctor, medicine",
    },
    {
      kanji: "漢",
      meaning: "China, Sino-",
    },
    {
      kanji: "紙",
      meaning: "paper",
    },
    {
      kanji: "勉",
      meaning: "diligent, encourage, endeavour, exertion, make effort, strive",
    },
    {
      kanji: "歩",
      meaning: "counter for steps, walk",
    },
    {
      kanji: "力",
      meaning: "bear up, exert, power, strain, strength, strong",
    },
    {
      kanji: "貸",
      meaning: "lend",
    },
    {
      kanji: "館",
      meaning: "building, large building, mansion, palace",
    },
    {
      kanji: "試",
      meaning: "attempt, experiment, ordeal, test, try",
    },
    {
      kanji: "験",
      meaning: "effect, testing, verification",
    },
    {
      kanji: "真",
      meaning: "Buddhist sect, reality, true",
    },
    {
      kanji: "意",
      meaning: "care, desire, heart, idea, liking, mind, taste, thought",
    },
    {
      kanji: "元",
      meaning: "beginning, former time, origin",
    },
    {
      kanji: "代",
      meaning:
        "age, change, charge, convert, counter for decades of ages, eras, etc., fee, generation, period, rate, replace, substitute",
    },
    {
      kanji: "台",
      meaning: "a stand, counter for machines and vehicles, pedestal",
    },
    {
      kanji: "言",
      meaning: "say, word",
    },
    {
      kanji: "題",
      meaning: "subject, topic",
    },
    {
      kanji: "方",
      meaning: "alternative, direction, person",
    },
    {
      kanji: "字",
      meaning: "character, letter, section of village, word",
    },
    {
      kanji: "新",
      meaning: "new",
    },
    {
      kanji: "耳",
      meaning: "ear",
    },
    {
      kanji: "自",
      meaning: "oneself",
    },
    {
      kanji: "親",
      meaning: "dealer (cards), familiarity, intimacy, parent, relative",
    },
    {
      kanji: "肉",
      meaning: "meat",
    },
    {
      kanji: "事",
      meaning: "business, fact, matter, possibly, reason, thing",
    },
    {
      kanji: "古",
      meaning: "old",
    },
    {
      kanji: "持",
      meaning: "have, hold",
    },
    {
      kanji: "員",
      meaning: "employee, member, number, the one in charge",
    },
    {
      kanji: "院",
      meaning: "Inst., institution, mansion, school, temple",
    },
    {
      kanji: "飲",
      meaning: "drink, smoke, take",
    },
    {
      kanji: "図",
      meaning: "audacious, drawing, extraordinary, map, plan",
    },
    {
      kanji: "起",
      meaning: "get up, rouse, wake up",
    },
    {
      kanji: "帰",
      meaning: "arrive at, homecoming, lead to, result in",
    },
    {
      kanji: "室",
      meaning: "apartment, cellar, chamber, greenhouse, room",
    },
    {
      kanji: "運",
      meaning: "advance, carry, destiny, fate, lot, luck, progress, transport",
    },
    {
      kanji: "英",
      meaning: "England, English, calyx, hero, outstanding",
    },
    {
      kanji: "質",
      meaning: "matter, quality, substance, temperament",
    },
    {
      kanji: "映",
      meaning: "projection, reflect, reflection",
    },
    {
      kanji: "写",
      meaning: "be photographed, copy, describe",
    },
    {
      kanji: "社",
      meaning: "association, company, firm, office, shrine",
    },
    {
      kanji: "口",
      meaning: "mouth",
    },
    {
      kanji: "地",
      meaning: "earth, ground",
    },
    {
      kanji: "工",
      meaning: "construction, craft, katakana e radical (no. 48)",
    },
    {
      kanji: "者",
      meaning: "person, someone",
    },
    {
      kanji: "知",
      meaning: "know, wisdom",
    },
    {
      kanji: "世",
      meaning: "generation, public, society, world",
    },
    {
      kanji: "駅",
      meaning: "station",
    },
    {
      kanji: "広",
      meaning: "broad, spacious, wide",
    },
    {
      kanji: "正",
      meaning: "10**40, correct, justice, righteous",
    },
    {
      kanji: "売",
      meaning: "sell",
    },
    {
      kanji: "借",
      meaning: "borrow, rent",
    },
    {
      kanji: "考",
      meaning: "consider, think over",
    },
    {
      kanji: "青",
      meaning: "blue, green",
    },
    {
      kanji: "買",
      meaning: "buy",
    },
    {
      kanji: "茶",
      meaning: "tea",
    },
    {
      kanji: "着",
      meaning: "arrive, counter for suits of clothing, don, wear",
    },
    {
      kanji: "手",
      meaning: "hand",
    },
    {
      kanji: "主",
      meaning: "chief, lord, main thing, master, principal",
    },
    {
      kanji: "注",
      meaning:
        "annotate, comment, concentrate on, flow into, irrigate, notes, pour, shed (tears)",
    },
    {
      kanji: "昼",
      meaning: "daytime, noon",
    },
    {
      kanji: "妹",
      meaning: "younger sister",
    },
    {
      kanji: "発",
      meaning:
        "counter for gunshots, departure, discharge, disclose, emit, publish, start from",
    },
    {
      kanji: "究",
      meaning: "research, study",
    },
    {
      kanji: "夕",
      meaning: "evening",
    },
    {
      kanji: "急",
      meaning: "emergency, hurry, steep, sudden",
    },
    {
      kanji: "町",
      meaning: "block, street, town, village",
    },
    {
      kanji: "赤",
      meaning: "red",
    },
    {
      kanji: "屋",
      meaning: "dealer, house, roof, seller, shop",
    },
    {
      kanji: "味",
      meaning: "flavor, taste",
    },
    {
      kanji: "秋",
      meaning: "autumn",
    },
    {
      kanji: "牛",
      meaning: "cow",
    },
    {
      kanji: "鳥",
      meaning: "bird, chicken",
    },
    {
      kanji: "去",
      meaning: "divorce, elapse, eliminate, gone, leave, past, quit",
    },
    {
      kanji: "朝",
      meaning: "(North) Korea, dynasty, epoch, morning, period, regime",
    },
    {
      kanji: "音",
      meaning: "noise, sound",
    },
    {
      kanji: "終",
      meaning: "end, finish",
    },
    {
      kanji: "習",
      meaning: "learn",
    },
    {
      kanji: "週",
      meaning: "week",
    },
    {
      kanji: "切",
      meaning: "be sharp, cut, cutoff",
    },
    {
      kanji: "集",
      meaning: "congregate, flock, gather, meet, swarm",
    },
    {
      kanji: "魚",
      meaning: "fish",
    },
    {
      kanji: "飯",
      meaning: "boiled rice, meal",
    },
    {
      kanji: "明",
      meaning: "bright, light",
    },
    {
      kanji: "花",
      meaning: "flower",
    },
    {
      kanji: "京",
      meaning: "10**16, capital",
    },
    {
      kanji: "住",
      meaning: "dwell, inhabit, live, reside",
    },
    {
      kanji: "重",
      meaning:
        "-fold, esteem, heap up, heavy, important, nest of boxes, pile up, respect",
    },
    {
      kanji: "夏",
      meaning: "summer",
    },
    {
      kanji: "家",
      meaning: "expert, family, home, house, performer, professional",
    },
    {
      kanji: "黒",
      meaning: "black",
    },
    {
      kanji: "通",
      meaning:
        "avenue, commute, counter for letters, notes, documents, etc., pass through, traffic",
    },
    {
      kanji: "強",
      meaning: "strong",
    },
    {
      kanji: "教",
      meaning: "doctrine, faith, teach",
    },
    {
      kanji: "目",
      meaning: "care, class, experience, eye, favor, insight, look",
    },
    {
      kanji: "歌",
      meaning: "sing, song",
    },
    {
      kanji: "問",
      meaning: "ask, problem, question",
    },
    {
      kanji: "弟",
      meaning: "faithful service to elders, younger brother",
    },
    {
      kanji: "夜",
      meaning: "evening, night",
    },
    {
      kanji: "春",
      meaning: "spring (season), springtime",
    },
    {
      kanji: "野",
      meaning: "civilian life, field, plains, rustic",
    },
    {
      kanji: "業",
      meaning: "arts, business, performance, vocation",
    },
    {
      kanji: "画",
      meaning: "brush-stroke, picture",
    },
    {
      kanji: "会",
      meaning: "association, interview, join, meet, meeting, party",
    },
    {
      kanji: "近",
      meaning: "akin, early, near, tantamount",
    },
    {
      kanji: "的",
      meaning: "adjective ending, bull's eye, mark, object, target",
    },
    {
      kanji: "有",
      meaning: "approx, exist, happen, have, occur, possess",
    },
    {
      kanji: "海",
      meaning: "ocean, sea",
    },
    {
      kanji: "界",
      meaning: "boundary, world",
    },
    {
      kanji: "開",
      meaning: "open, unfold, unseal",
    },
    {
      kanji: "銀",
      meaning: "silver",
    },
    {
      kanji: "病",
      meaning: "ill, sick",
    },
    {
      kanji: "少",
      meaning: "few, little",
    },
    {
      kanji: "品",
      meaning: "article, counter for meal courses, dignity, goods, refinement",
    },
    {
      kanji: "店",
      meaning: "shop, store",
    },
    {
      kanji: "早",
      meaning: "early, fast",
    },
    {
      kanji: "空",
      meaning: "empty, sky, vacant, vacuum, void",
    },
    {
      kanji: "走",
      meaning: "run",
    },
    {
      kanji: "転",
      meaning: "change, revolve, turn around",
    },
    {
      kanji: "田",
      meaning: "rice field, rice paddy",
    },
    {
      kanji: "不",
      meaning: "bad, clumsy, negative, non-, ugly",
    },
    {
      kanji: "用",
      meaning: "business, employ, service, use, utilize",
    },
    {
      kanji: "送",
      meaning: "escort, send",
    },
    {
      kanji: "洋",
      meaning: "Western style, foreign, ocean, sea",
    },
    {
      kanji: "作",
      meaning: "build, make, prepare, production",
    },
    {
      kanji: "兄",
      meaning: "big brother, elder brother",
    },
    {
      kanji: "度",
      meaning:
        "attitude, consider, counter for occurrences, degrees, occurrence, time",
    },
    {
      kanji: "冬",
      meaning: "winter",
    },
    {
      kanji: "曜",
      meaning: "weekday",
    },
    {
      kanji: "計",
      meaning: "measure, plan, plot, scheme",
    },
    {
      kanji: "楽",
      meaning: "comfort, ease, music",
    },
    {
      kanji: "風",
      meaning: "air, manner, style, wind",
    },
    {
      kanji: "服",
      meaning: "admit, clothing, discharge, obey",
    },
    {
      kanji: "足",
      meaning: "be sufficient, counter for pairs of footwear, foot, leg",
    },
    {
      kanji: "物",
      meaning: "matter, object, thing",
    },
    {
      kanji: "答",
      meaning: "answer, solution",
    },
    {
      kanji: "理",
      meaning: "arrangement, justice, logic, reason, truth",
    },
    {
      kanji: "族",
      meaning: "family, tribe",
    },
    {
      kanji: "止",
      meaning: "halt, stop",
    },
    {
      kanji: "文",
      meaning:
        "art, decoration, figures, literary radical (no. 67), literature, plan, sentence, style",
    },
    {
      kanji: "仕",
      meaning: "attend, doing, official, serve",
    },
    {
      kanji: "場",
      meaning: "location, place",
    },
    {
      kanji: "立",
      meaning: "erect, rise, set up, stand up",
    },
  ],
  JLPT_N3: [
    {
      kanji: "市",
      meaning: "city, market, town",
    },
    {
      kanji: "流",
      meaning: "a sink, current, flow, forfeit",
    },
    {
      kanji: "件",
      meaning: "affair, case, item, matter",
    },
    {
      kanji: "閉",
      meaning: "closed, shut",
    },
    {
      kanji: "留",
      meaning: "detain, fasten, halt, stop",
    },
    {
      kanji: "愛",
      meaning: "affection, favourite, love",
    },
    {
      kanji: "他",
      meaning: "another, other, the others",
    },
    {
      kanji: "寒",
      meaning: "cold",
    },
    {
      kanji: "打",
      meaning: "dozen, hit, knock, pound, strike",
    },
    {
      kanji: "働",
      meaning: "(kokuji), work",
    },
    {
      kanji: "県",
      meaning: "prefecture",
    },
    {
      kanji: "米",
      meaning: "USA, metre, rice",
    },
    {
      kanji: "太",
      meaning: "big around, plump, thick",
    },
    {
      kanji: "両",
      meaning:
        "both, counter for carriages (e.g., in a train), old Japanese coin, two",
    },
    {
      kanji: "暗",
      meaning: "be blinded, darkness, disappear, grow dark, informal, shade",
    },
    {
      kanji: "職",
      meaning: "employment, post, work",
    },
    {
      kanji: "対",
      meaning: "anti-, compare, equal, even, opposite, versus, vis-a-vis",
    },
    {
      kanji: "得",
      meaning:
        "able to, acquire, advantage, benefit, can, earn, find, gain, get, may, profit",
    },
    {
      kanji: "良",
      meaning: "good, pleasing, skilled",
    },
    {
      kanji: "険",
      meaning:
        "impregnable position, inaccessible place, precipitous, sharp eyes, steep place",
    },
    {
      kanji: "位",
      meaning: "about, crown, grade, rank, some, throne",
    },
    {
      kanji: "返",
      meaning: "answer, fade, repay, return",
    },
    {
      kanji: "指",
      meaning:
        "finger, indicate, measure (ruler), play (chess), point to, put into",
    },
    {
      kanji: "申",
      meaning:
        "3-5PM, have the honor to, ninth sign of Chinese zodiac, sign of the monkey",
    },
    {
      kanji: "変",
      meaning: "change, strange, unusual",
    },
    {
      kanji: "感",
      meaning: "emotion, feeling, sensation",
    },
    {
      kanji: "師",
      meaning:
        "army (incl. counter), exemplar, expert, master, model, teacher, war",
    },
    {
      kanji: "退",
      meaning: "expel, reject, repel, resign, retire, retreat, withdraw",
    },
    {
      kanji: "慣",
      meaning: "accustomed, become experienced, get used to",
    },
    {
      kanji: "身",
      meaning: "one's station in life, person, somebody",
    },
    {
      kanji: "関",
      meaning: "barrier, concerning, connection, gateway, involve",
    },
    {
      kanji: "突",
      meaning: "collision, pierce, prick, protruding, stab, sudden, thrust",
    },
    {
      kanji: "便",
      meaning: "chance, convenience, excrement, facility, feces, letter",
    },
    {
      kanji: "権",
      meaning: "authority, power, rights",
    },
    {
      kanji: "信",
      meaning: "faith, fidelity, trust, truth",
    },
    {
      kanji: "歯",
      meaning: "cog, tooth",
    },
    {
      kanji: "神",
      meaning: "gods, mind, soul",
    },
    {
      kanji: "捕",
      meaning: "capture, catch",
    },
    {
      kanji: "林",
      meaning: "forest, grove",
    },
    {
      kanji: "偉",
      meaning: "admirable, conceited, excellent, famous, greatness, remarkable",
    },
    {
      kanji: "資",
      meaning:
        "assets, be conducive to, capital, contribute to, data, funds, resources",
    },
    {
      kanji: "観",
      meaning: "appearance, condition, look, outlook, view",
    },
    {
      kanji: "違",
      meaning: "differ, difference",
    },
    {
      kanji: "深",
      meaning: "deep, heighten, intensify, strengthen",
    },
    {
      kanji: "内",
      meaning: "among, between, home, house, inside, within",
    },
    {
      kanji: "暮",
      meaning:
        "evening, livelihood, make a living, season's end, spend time, twilight",
    },
    {
      kanji: "進",
      meaning: "advance, proceed, progress, promote",
    },
    {
      kanji: "森",
      meaning: "forest, woods",
    },
    {
      kanji: "限",
      meaning: "limit, restrict, to best of ability",
    },
    {
      kanji: "示",
      meaning: "display, express, indicate, point out, show",
    },
    {
      kanji: "宅",
      meaning: "home, house, my husband, our house, residence",
    },
    {
      kanji: "類",
      meaning: "class, genus, kind, sort, variety",
    },
    {
      kanji: "原",
      meaning:
        "field, meadow, original, plain, prairie, primitive, tundra, wilderness",
    },
    {
      kanji: "寝",
      meaning: "bed, lie down, remain unsold, rest, sleep",
    },
    {
      kanji: "育",
      meaning: "bring up, grow up, raise, rear",
    },
    {
      kanji: "現",
      meaning: "actual, existing, present",
    },
    {
      kanji: "難",
      meaning: "accident, defect, difficult, impossible, trouble",
    },
    {
      kanji: "礼",
      meaning: "bow, ceremony, remuneration, salute, thanks",
    },
    {
      kanji: "次",
      meaning: "next, order, sequence",
    },
    {
      kanji: "冷",
      meaning: "chill, cold (beer, person), cool",
    },
    {
      kanji: "顔",
      meaning: "expression, face",
    },
    {
      kanji: "抱",
      meaning: "embrace, hold in arms, hug",
    },
    {
      kanji: "戻",
      meaning: "go backwards, re-, restore, resume, return, revert",
    },
    {
      kanji: "願",
      meaning: "hope, petition, request, vow, wish",
    },
    {
      kanji: "似",
      meaning: "becoming, counterfeit, imitate, resemble, suitable",
    },
    {
      kanji: "放",
      meaning: "banish, emit, fire, liberate, release, set free, shoot",
    },
    {
      kanji: "例",
      meaning: "custom, example, precedent, usage",
    },
    {
      kanji: "法",
      meaning: "law, method, model, principle, rule, system",
    },
    {
      kanji: "引",
      meaning: "admit, install, jerk, pull, quote, refer to, tug",
    },
    {
      kanji: "危",
      meaning: "dangerous, fear, uneasy",
    },
    {
      kanji: "因",
      meaning: "be associated with, be limited to, cause, depend on, factor",
    },
    {
      kanji: "呼",
      meaning: "call, call out to, invite",
    },
    {
      kanji: "治",
      meaning:
        "be at peace, calm down, conserve, cure, govt, heal, quell, reign, rule, subdue",
    },
    {
      kanji: "達",
      meaning: "accomplished, arrive, attain, reach",
    },
    {
      kanji: "任",
      meaning: "appoint, duty, entrust to, responsibility, term",
    },
    {
      kanji: "辞",
      meaning: "expression, resign, term, word",
    },
    {
      kanji: "訪",
      meaning: "call on, look up, offer sympathy, visit",
    },
    {
      kanji: "列",
      meaning: "column, file, rank, row, tier",
    },
    {
      kanji: "認",
      meaning: "acknowledge, appreciate, believe, discern, recognize, witness",
    },
    {
      kanji: "報",
      meaning: "news, report, retribution, reward",
    },
    {
      kanji: "単",
      meaning: "merely, one, simple, single",
    },
    {
      kanji: "熱",
      meaning: "fever, heat, mania, passion, temperature",
    },
    {
      kanji: "式",
      meaning:
        "ceremony, expression, form, function, method, rite, style, system",
    },
    {
      kanji: "吹",
      meaning: "blow, breathe, emit, puff, smoke",
    },
    {
      kanji: "念",
      meaning: "attention, desire, feeling, idea, sense, thought, wish",
    },
    {
      kanji: "連",
      meaning: "clique, connect, gang, join, lead, party, take along",
    },
    {
      kanji: "識",
      meaning: "discriminating, know, write",
    },
    {
      kanji: "探",
      meaning: "grope, look for, search",
    },
    {
      kanji: "記",
      meaning: "account, narrative, scribe",
    },
    {
      kanji: "亡",
      meaning: "deceased, dying, perish, the late",
    },
    {
      kanji: "短",
      meaning: "brevity, defect, fault, short, weak point",
    },
    {
      kanji: "忙",
      meaning: "busy, occupied, restless",
    },
    {
      kanji: "失",
      meaning: "disadvantage, error, fault, lose, loss",
    },
    {
      kanji: "能",
      meaning: "ability, capacity, skill, talent",
    },
    {
      kanji: "互",
      meaning: "mutually, reciprocally, together",
    },
    {
      kanji: "忘",
      meaning: "forget",
    },
    {
      kanji: "路",
      meaning: "distance, path, road, route",
    },
    {
      kanji: "寄",
      meaning: "bring near, collect, draw near, forward, gather, send, stop in",
    },
    {
      kanji: "規",
      meaning: "measure, standard",
    },
    {
      kanji: "老",
      meaning: "grow old, old age, old man",
    },
    {
      kanji: "労",
      meaning: "labor, reward for, thank for, toil, trouble",
    },
    {
      kanji: "泳",
      meaning: "swim",
    },
    {
      kanji: "喜",
      meaning: "rejoice, take pleasure in",
    },
    {
      kanji: "段",
      meaning: "grade, stairs, steps",
    },
    {
      kanji: "断",
      meaning:
        "apologize, cutting, decision, decline, dismiss, judgement, prohibit, refuse, severance, warn",
    },
    {
      kanji: "実",
      meaning: "fruit, nut, reality, seed, truth",
    },
    {
      kanji: "破",
      meaning: "break, defeat, destroy, frustrate, rend, rip, tear",
    },
    {
      kanji: "期",
      meaning: "date, period, term, time",
    },
    {
      kanji: "誤",
      meaning: "do wrong, err, mislead, mistake",
    },
    {
      kanji: "数",
      meaning: "fate, figures, law, number, strength",
    },
    {
      kanji: "談",
      meaning: "discuss, talk",
    },
    {
      kanji: "馬",
      meaning: "horse",
    },
    {
      kanji: "望",
      meaning: "ambition, aspire to, desire, expect, full moon, hope",
    },
    {
      kanji: "池",
      meaning: "cistern, pond, pool, reservoir",
    },
    {
      kanji: "杯",
      meaning: "counter for cupfuls, glass, toast, wine glass",
    },
    {
      kanji: "易",
      meaning: "divination, easy, fortune-telling, ready to, simple",
    },
    {
      kanji: "値",
      meaning: "cost, price, value",
    },
    {
      kanji: "背",
      meaning:
        "back, behind, defy, disobey, go back on, height, rebel, stature",
    },
    {
      kanji: "恥",
      meaning: "dishonor, shame",
    },
    {
      kanji: "論",
      meaning: "argument, discourse",
    },
    {
      kanji: "機",
      meaning:
        "airplane, efficacy, loom, machine, mechanism, occasion, opportunity, potency",
    },
    {
      kanji: "遅",
      meaning: "back, late, later, slow",
    },
    {
      kanji: "配",
      meaning: "distribute, exile, rationing, spouse",
    },
    {
      kanji: "和",
      meaning: "Japan, Japanese style, harmony, peace, soften",
    },
    {
      kanji: "敗",
      meaning: "defeat, failure, reversal",
    },
    {
      kanji: "越",
      meaning: "Vietnam, cross over, exceed, move to, surpass",
    },
    {
      kanji: "交",
      meaning: "association, coming & going, mingle, mixing",
    },
    {
      kanji: "成",
      meaning: "become, elapse, get, grow, reach, turn into",
    },
    {
      kanji: "置",
      meaning: "deposit, employ, keep, leave behind, pawn, placement, put, set",
    },
    {
      kanji: "光",
      meaning: "light, ray",
    },
    {
      kanji: "向",
      meaning: "approach, beyond, confront, defy, facing, tend toward, yonder",
    },
    {
      kanji: "声",
      meaning: "voice",
    },
    {
      kanji: "制",
      meaning: "law, rule, system",
    },
    {
      kanji: "疑",
      meaning: "be suspicious, distrust, doubt, question",
    },
    {
      kanji: "好",
      meaning: "fond, like something, pleasing",
    },
    {
      kanji: "性",
      meaning: "gender, nature, sex",
    },
    {
      kanji: "若",
      meaning: "if, immature, low number, perhaps, possibly, young",
    },
    {
      kanji: "議",
      meaning: "consideration, consultation, debate, deliberation",
    },
    {
      kanji: "弱",
      meaning: "frail, weak",
    },
    {
      kanji: "政",
      meaning: "government, politics",
    },
    {
      kanji: "園",
      meaning: "farm, garden, park, yard",
    },
    {
      kanji: "煙",
      meaning: "smoke",
    },
    {
      kanji: "更",
      meaning:
        "again, further, grow late, more and more, night watch, of course, renew, renovate, sit up late",
    },
    {
      kanji: "守",
      meaning: "defend, guard, obey, protect",
    },
    {
      kanji: "遠",
      meaning: "distant, far",
    },
    {
      kanji: "幸",
      meaning: "blessing, fortune, happiness",
    },
    {
      kanji: "客",
      meaning: "client, customer, guest, visitor",
    },
    {
      kanji: "取",
      meaning: "fetch, take, take up",
    },
    {
      kanji: "演",
      meaning: "act, performance, play, render, stage",
    },
    {
      kanji: "首",
      meaning: "counter for songs and poems, neck",
    },
    {
      kanji: "晴",
      meaning: "clear up",
    },
    {
      kanji: "酒",
      meaning: "alcohol, sake",
    },
    {
      kanji: "王",
      meaning: "king, magnate, rule",
    },
    {
      kanji: "種",
      meaning: "class, kind, seed, species, variety",
    },
    {
      kanji: "精",
      meaning:
        "energy, excellence, fairy, ghost, purity, refined, semen, skill, vitality",
    },
    {
      kanji: "箱",
      meaning: "bin, box, case, chest, railway car",
    },
    {
      kanji: "受",
      meaning: "accept, answer (phone), catch, get, receive, take, undergo",
    },
    {
      kanji: "静",
      meaning: "quiet",
    },
    {
      kanji: "押",
      meaning:
        "attach, check, do in spite of, press, push, seal, seize, shove, stop, subdue, weight",
    },
    {
      kanji: "吸",
      meaning: "imbibe, inhale, sip, suck",
    },
    {
      kanji: "候",
      meaning: "climate, expect, season, wait for, weather",
    },
    {
      kanji: "末",
      meaning: "close, end, posterity, powder, tip",
    },
    {
      kanji: "求",
      meaning: "demand, request, require, want, wish for",
    },
    {
      kanji: "髪",
      meaning: "hair of the head",
    },
    {
      kanji: "降",
      meaning: "descend, fall, precipitate, surrender",
    },
    {
      kanji: "収",
      meaning: "income, obtain, pay, reap, store, supply",
    },
    {
      kanji: "満",
      meaning: "enough, full, fullness, satisfy",
    },
    {
      kanji: "石",
      meaning: "stone",
    },
    {
      kanji: "抜",
      meaning: "extract, omit, pilfer, pull out, quote, remove, slip out",
    },
    {
      kanji: "横",
      meaning:
        "horizontal, perverse, side, sideways, unreasonable, width, woof",
    },
    {
      kanji: "昔",
      meaning: "antiquity, old times, once upon a time",
    },
    {
      kanji: "未",
      meaning:
        "1-3PM, eighth sign of Chinese zodiac, even now, hitherto, not yet, sign of the ram, still, un-",
    },
    {
      kanji: "反",
      meaning: "anti-",
    },
    {
      kanji: "席",
      meaning: "mat, occasion, place, seat",
    },
    {
      kanji: "球",
      meaning: "ball, sphere",
    },
    {
      kanji: "給",
      meaning: "allow, bestow on, gift, grant, salary, wage",
    },
    {
      kanji: "犯",
      meaning: "crime, offense, sin",
    },
    {
      kanji: "港",
      meaning: "harbor",
    },
    {
      kanji: "頂",
      meaning: "peak, place on the head, receive, summit, top, top of head",
    },
    {
      kanji: "責",
      meaning: "blame, censure, condemn",
    },
    {
      kanji: "判",
      meaning: "judgement, judgment, seal, signature, stamp",
    },
    {
      kanji: "民",
      meaning: "nation, people, subjects",
    },
    {
      kanji: "積",
      meaning:
        "acreage, amass, contents, load, pile up, product (x*y), stack, volume",
    },
    {
      kanji: "眠",
      meaning: "die, sleep, sleepy",
    },
    {
      kanji: "居",
      meaning: "exist, live with, reside, to be",
    },
    {
      kanji: "阪",
      meaning: "heights, slope",
    },
    {
      kanji: "構",
      meaning: "appearance, build, posture, set up, stance",
    },
    {
      kanji: "務",
      meaning: "duties, task",
    },
    {
      kanji: "折",
      meaning: "bend, break, fold, fracture, submit, yield",
    },
    {
      kanji: "夢",
      meaning: "dream, illusion, vision",
    },
    {
      kanji: "化",
      meaning: "-ization, change, delude, enchant, influence, take the form of",
    },
    {
      kanji: "許",
      meaning: "approve, permit",
    },
    {
      kanji: "娘",
      meaning: "daughter, girl",
    },
    {
      kanji: "加",
      meaning: "Canada, add, addition, include, increase, join",
    },
    {
      kanji: "可",
      meaning: "can, do not, mustn't, passable, should not",
    },
    {
      kanji: "調",
      meaning:
        "exorcise, harmonize, investigate, key (music), mediate, meter, prepare, tone, tune, writing style",
    },
    {
      kanji: "命",
      meaning: "appoint, command, decree, destiny, fate, life",
    },
    {
      kanji: "御",
      meaning: "govern, honorable, manipulate",
    },
    {
      kanji: "雪",
      meaning: "snow",
    },
    {
      kanji: "迷",
      meaning: "astray, be perplexed, err, illusion, in doubt, lost",
    },
    {
      kanji: "直",
      meaning: "fix, frankness, honesty, repair, straightaway",
    },
    {
      kanji: "共",
      meaning: "alike, all, and, both, neither, together, with",
    },
    {
      kanji: "号",
      meaning: "call, item, name, nickname, number, pseudonym, title",
    },
    {
      kanji: "説",
      meaning: "explanation, opinion, rumor, theory",
    },
    {
      kanji: "合",
      meaning: "0.1, fit, join, suit",
    },
    {
      kanji: "果",
      meaning:
        "achieve, carry out, complete, end, finish, fruit, reward, succeed",
    },
    {
      kanji: "絶",
      meaning:
        "abstain, be beyond, cut off, discontinue, interrupt, peerless, sever, suppress, unparalleled, without match",
    },
    {
      kanji: "鳴",
      meaning: "bark, chirp, cry, echo, honk, ring, sound",
    },
    {
      kanji: "晩",
      meaning: "night, nightfall",
    },
    {
      kanji: "科",
      meaning: "course, department, section",
    },
    {
      kanji: "供",
      meaning: "accompany, offer, present, serve (meal), submit",
    },
    {
      kanji: "番",
      meaning: "number in a series, turn",
    },
    {
      kanji: "面",
      meaning: "face, features, mask, surface",
    },
    {
      kanji: "告",
      meaning: "announce, inform, revelation, tell",
    },
    {
      kanji: "追",
      meaning: "chase, drive away, follow, meanwhile, pursue",
    },
    {
      kanji: "刻",
      meaning: "carving, chop, cut fine, engrave, hash, mince, time",
    },
    {
      kanji: "恐",
      meaning: "awe, dread, fear",
    },
    {
      kanji: "否",
      meaning: "decline, deny, negate, no, noes, refuse",
    },
    {
      kanji: "洗",
      meaning: "inquire into, probe, wash",
    },
    {
      kanji: "痛",
      meaning: "bruise, damage, hurt, pain",
    },
    {
      kanji: "宿",
      meaning:
        "be pregnant, dwell, dwelling, home, inn, lodge, lodging, relay station",
    },
    {
      kanji: "彼",
      meaning: "he, that, the",
    },
    {
      kanji: "過",
      meaning: "error, exceed, go beyond, overdo",
    },
    {
      kanji: "非",
      meaning: "injustice, mistake, negative, non-, un-",
    },
    {
      kanji: "込",
      meaning: "(kokuji), crowded, in bulk, included, mixture",
    },
    {
      kanji: "船",
      meaning: "boat, ship",
    },
    {
      kanji: "靴",
      meaning: "shoes",
    },
    {
      kanji: "戦",
      meaning: "battle, match, war",
    },
    {
      kanji: "低",
      meaning: "humble, lower, short",
    },
    {
      kanji: "飛",
      meaning: "fly, scatter, skip (pages)",
    },
    {
      kanji: "門",
      meaning: "counter for cannons, gate",
    },
    {
      kanji: "疲",
      meaning: "exhausted, tire, weary",
    },
    {
      kanji: "困",
      meaning: "annoyed, become distressed, quandary",
    },
    {
      kanji: "術",
      meaning: "art, magic, means, resources, skill, technique, trick",
    },
    {
      kanji: "定",
      meaning: "decide, determine, establish, fix",
    },
    {
      kanji: "悲",
      meaning: "deplore, grieve, regret, sad",
    },
    {
      kanji: "婚",
      meaning: "marriage",
    },
    {
      kanji: "費",
      meaning: "consume, cost, expense, spend, waste",
    },
    {
      kanji: "役",
      meaning: "campaign, drafted labor, duty, office, role, service, war",
    },
    {
      kanji: "約",
      meaning: "approximately, promise, shrink",
    },
    {
      kanji: "曲",
      meaning:
        "bend, composition, crooked, curve, fault, injustice, lean, melody, music, perverse, pleasure",
    },
    {
      kanji: "選",
      meaning: "choose, elect, prefer, select",
    },
    {
      kanji: "薬",
      meaning: "benefit, chemical, enamel, gunpowder, medicine",
    },
    {
      kanji: "局",
      meaning:
        "affair, board, bureau, conclusion, court lady, her apartment, lady-in-waiting, office",
    },
    {
      kanji: "庭",
      meaning: "courtyard, garden, yard",
    },
    {
      kanji: "美",
      meaning: "beautiful, beauty",
    },
    {
      kanji: "備",
      meaning: "equip, preparation, provision",
    },
    {
      kanji: "由",
      meaning: "a reason, wherefore",
    },
    {
      kanji: "全",
      meaning: "all, complete, entire, fulfill, whole",
    },
    {
      kanji: "回",
      meaning: "-times, counter for occurrences, game, revolve, round",
    },
    {
      kanji: "処",
      meaning:
        "act, behave, condemn, deal with, dispose, manage, place, sentence",
    },
    {
      kanji: "然",
      meaning: "if so, in that case, so, sort of thing, well",
    },
    {
      kanji: "程",
      meaning: "amount, degree, distance, extent, formula, law, limits",
    },
    {
      kanji: "差",
      meaning:
        "balance, difference, discrepancy, distinction, margin, variation",
    },
    {
      kanji: "初",
      meaning: "beginning, first time",
    },
    {
      kanji: "必",
      meaning: "certain, inevitable, invariably",
    },
    {
      kanji: "所",
      meaning: "extent, place",
    },
    {
      kanji: "勤",
      meaning: "become employed, diligence, serve",
    },
    {
      kanji: "座",
      meaning: "cushion, gathering, seat, sit, squat",
    },
    {
      kanji: "暑",
      meaning: "hot, sultry, summer heat",
    },
    {
      kanji: "才",
      meaning: "cubic shaku, genius, years old",
    },
    {
      kanji: "緒",
      meaning:
        "beginning, cord, end, inception, mental or emotional state, strap, thong",
    },
    {
      kanji: "祖",
      meaning: "ancestor, founder, pioneer",
    },
    {
      kanji: "表",
      meaning: "chart, diagram, surface, table",
    },
    {
      kanji: "皆",
      meaning: "all, everything",
    },
    {
      kanji: "妻",
      meaning: "spouse, wife",
    },
    {
      kanji: "適",
      meaning: "capable, occasional, qualified, rare, suitable",
    },
    {
      kanji: "絵",
      meaning: "drawing, painting, picture, sketch",
    },
    {
      kanji: "助",
      meaning: "assist, help, rescue",
    },
    {
      kanji: "組",
      meaning:
        "assemble, association, braid, construct, cooperate, grapple, plait, unite",
    },
    {
      kanji: "遊",
      meaning: "play",
    },
    {
      kanji: "区",
      meaning: "district, ward",
    },
    {
      kanji: "除",
      meaning: "abolish, cancel, division (x/3), except, exclude, remove",
    },
    {
      kanji: "解",
      meaning:
        "absolve, answer, cancel, explain, explanation, key, minute, notes, solve, understanding, undo, unravel, untie",
    },
    {
      kanji: "苦",
      meaning: "feel bitter, hardship, scowl, suffering, trial, worry",
    },
    {
      kanji: "済",
      meaning:
        "come to an end, excusable, finish, need not, relieve (burden), settle (debt, etc.)",
    },
    {
      kanji: "猫",
      meaning: "cat",
    },
    {
      kanji: "具",
      meaning:
        "counter for armor, suits, sets of furniture, ingredients, means, possess, tool, utensil",
    },
    {
      kanji: "優",
      meaning: "actor, excel, gentleness, superiority, surpass, tenderness",
    },
    {
      kanji: "与",
      meaning:
        "award, bestow, cause, gift, give, godsend, impart, participate in, provide",
    },
    {
      kanji: "菜",
      meaning: "greens, side dish, vegetable",
    },
    {
      kanji: "点",
      meaning: "decimal point, mark, point, speck, spot",
    },
    {
      kanji: "貧",
      meaning: "poor, poverty",
    },
    {
      kanji: "予",
      meaning: "I, beforehand, myself, previous",
    },
    {
      kanji: "最",
      meaning: "extreme, most, utmost",
    },
    {
      kanji: "争",
      meaning: "argue, contend, dispute",
    },
    {
      kanji: "余",
      meaning: "myself, other, remainder, surplus, too much",
    },
    {
      kanji: "偶",
      meaning: "accidentally, couple, even number, man & wife, same kind",
    },
    {
      kanji: "害",
      meaning: "harm, injury",
    },
    {
      kanji: "相",
      meaning:
        "aspect, councillor, each other, inter-, minister of state, mutual, phase, physiognomy, together",
    },
    {
      kanji: "招",
      meaning: "beckon, engage, invite, summon",
    },
    {
      kanji: "歳",
      meaning: "age, occasion, opportunity, year-end",
    },
    {
      kanji: "草",
      meaning: "draft, grass, herbs, pasture, weeds, write",
    },
    {
      kanji: "伝",
      meaning:
        "communicate, follow, go along, legend, report, tradition, transmit, walk along",
    },
    {
      kanji: "夫",
      meaning: "husband, man",
    },
    {
      kanji: "際",
      meaning:
        "adventurous, dangerous, edge, indecent, occasion, side, time, verge, when",
    },
    {
      kanji: "付",
      meaning: "adhere, append, attach, refer to",
    },
    {
      kanji: "要",
      meaning: "essence, key to, main point, need, pivot",
    },
    {
      kanji: "在",
      meaning: "exist, located in, outskirts, suburbs",
    },
    {
      kanji: "容",
      meaning: "contain, form, looks",
    },
    {
      kanji: "君",
      meaning: "male name suffix, mister, ruler, you",
    },
    {
      kanji: "徒",
      meaning:
        "emptiness, ephemeral thing, futility, gang, junior, on foot, party, people, set, uselessness, vanity",
    },
    {
      kanji: "怖",
      meaning: "be frightened, dreadful, fearful",
    },
    {
      kanji: "財",
      meaning: "assets, money, property, wealth",
    },
    {
      kanji: "消",
      meaning: "blow out, cancel, extinguish, neutralize, turn off",
    },
    {
      kanji: "途",
      meaning: "road, route, way",
    },
    {
      kanji: "罪",
      meaning: "blame, crime, fault, guilt, offense, sin",
    },
    {
      kanji: "都",
      meaning: "all, capital, everything, metropolis",
    },
    {
      kanji: "葉",
      meaning:
        "blade, counter for flat things, fragment, leaf, lobe, needle, piece, plane, spear",
    },
    {
      kanji: "渡",
      meaning:
        "cross, deliver, diameter, ferry, ford, import, migrate, transit",
    },
    {
      kanji: "陽",
      meaning: "daytime, heaven, male, positive, sunshine, yang principle",
    },
    {
      kanji: "負",
      meaning: "-, assume a responsibility, bear, defeat, minus, negative, owe",
    },
    {
      kanji: "笑",
      meaning: "laugh",
    },
    {
      kanji: "窓",
      meaning: "pane, window",
    },
    {
      kanji: "昨",
      meaning: "previous, yesterday",
    },
    {
      kanji: "浮",
      meaning: "float, floating, rise to surface",
    },
    {
      kanji: "様",
      meaning: "Esq., manner, polite suffix, situation, way",
    },
    {
      kanji: "格",
      meaning: "capacity, case (law, grammar), character, rank, status",
    },
    {
      kanji: "商",
      meaning: "dealing in, make a deal, merchant, selling",
    },
    {
      kanji: "婦",
      meaning: "bride, lady, wife, woman",
    },
    {
      kanji: "形",
      meaning: "form, shape, style",
    },
    {
      kanji: "努",
      meaning: "as much as possible, diligent, toil",
    },
    {
      kanji: "富",
      meaning: "abundant, enrich, wealth",
    },
    {
      kanji: "怒",
      meaning: "angry, be offended",
    },
    {
      kanji: "覚",
      meaning: "awake, learn, memorize, remember, sober up",
    },
    {
      kanji: "係",
      meaning: "concern oneself, connection, duty, person in charge",
    },
    {
      kanji: "勝",
      meaning: "excel, prevail, victory, win",
    },
    {
      kanji: "想",
      meaning: "concept, idea, think, thought",
    },
    {
      kanji: "当",
      meaning: "appropriate, himself, hit, right",
    },
    {
      kanji: "確",
      meaning: "assurance, clear, confirm, evident, firm, hard, solid, tight",
    },
    {
      kanji: "投",
      meaning:
        "abandon, discard, give up, hurl, invest in, join, launch into, sell at a loss, throw",
    },
    {
      kanji: "欲",
      meaning: "covetousness, craving, desire, greed, longing, passion",
    },
    {
      kanji: "到",
      meaning: "arrival, attain, proceed, reach, result in",
    },
    {
      kanji: "部",
      meaning:
        "bureau, class, copy, counter for copies of a newspaper or magazine, dept, part, portion, section",
    },
    {
      kanji: "殺",
      meaning:
        "butcher, diminish, kill, murder, reduce, slice off, split, spoil",
    },
    {
      kanji: "逃",
      meaning: "escape, evade, flee, set free, shirk",
    },
    {
      kanji: "舞",
      meaning: "circle, dance, flit, wheel",
    },
    {
      kanji: "経",
      meaning: "expire, longitude, pass thru, sutra, warp",
    },
    {
      kanji: "察",
      meaning: "guess, judge, presume, surmise, understand",
    },
    {
      kanji: "倒",
      meaning: "break down, collapse, drop, fall, overthrow",
    },
    {
      kanji: "景",
      meaning: "scenery, view",
    },
    {
      kanji: "雑",
      meaning: "miscellaneous",
    },
    {
      kanji: "軽",
      meaning: "lightly, trifling, unimportant",
    },
    {
      kanji: "増",
      meaning: "add, augment, gain, increase, promote",
    },
    {
      kanji: "頼",
      meaning: "request, trust",
    },
    {
      kanji: "活",
      meaning: "being helped, lively, living, resuscitation",
    },
    {
      kanji: "参",
      meaning:
        "be defeated, be madly in love, coming, die, going, nonplussed, participate, take part in, three (in documents), visit, visiting",
    },
    {
      kanji: "福",
      meaning: "blessing, fortune, luck, wealth",
    },
    {
      kanji: "落",
      meaning: "come down, drop, fall, hamlet, village",
    },
    {
      kanji: "腹",
      meaning: "abdomen, belly, stomach",
    },
    {
      kanji: "盗",
      meaning: "pilfer, rob, steal",
    },
    {
      kanji: "割",
      meaning: "comparatively, cut, divide, proportion, separate, split",
    },
    {
      kanji: "産",
      meaning:
        "bear, childbirth, give birth, native, products, property, yield",
    },
    {
      kanji: "束",
      meaning: "bundle, control, govern, manage, ream, sheaf, tie in bundles",
    },
    {
      kanji: "払",
      meaning: "banish, clear out, dispose of, pay, prune",
    },
    {
      kanji: "警",
      meaning: "admonish, commandment",
    },
    {
      kanji: "散",
      meaning: "disperse, scatter, spend, squander",
    },
    {
      kanji: "息",
      meaning:
        "breath, coming to an end, interest (on money), nuture, respiration, rest, son",
    },
    {
      kanji: "迎",
      meaning: "greet, meet, welcome",
    },
    {
      kanji: "賛",
      meaning:
        "agree with, approve, assist, praise, title or inscription on picture",
    },
    {
      kanji: "登",
      meaning: "ascend, climb up",
    },
    {
      kanji: "残",
      meaning: "balance, leftover, remainder",
    },
    {
      kanji: "速",
      meaning: "fast, quick",
    },
    {
      kanji: "利",
      meaning: "advantage, benefit, profit",
    },
    {
      kanji: "状",
      meaning: "appearance, circumstances, conditions, form, status quo",
    },
    {
      kanji: "側",
      meaning: "lean, oppose, regret, side",
    },
    {
      kanji: "等",
      meaning: "and so forth, class (first), equal, etc., quality, similar",
    },
    {
      kanji: "乗",
      meaning:
        "board, counter for vehicles, join, mount, multiplication, power, record, ride",
    },
    {
      kanji: "支",
      meaning: "branch, branch radical (no. 65), support, sustain",
    },
    {
      kanji: "欠",
      meaning: "fail, gap, lack, yawning radical (no. 76)",
    },
    {
      kanji: "常",
      meaning:
        "always, common, continually, long-lasting, normal, ordinary, regular, usual",
    },
    {
      kanji: "情",
      meaning: "circumstances, emotion, facts, feelings, passion, sympathy",
    },
    {
      kanji: "続",
      meaning: "continue, sequel, series",
    },
    {
      kanji: "頭",
      meaning: "counter for large animals, head",
    },
    {
      kanji: "完",
      meaning: "completion, end, perfect",
    },
    {
      kanji: "決",
      meaning: "agree upon, appoint, decide, fix",
    },
    {
      kanji: "平",
      meaning: "even, flat, peace",
    },
    {
      kanji: "官",
      meaning: "bureaucrat, organ, the government",
    },
    {
      kanji: "存",
      meaning: "be aware of, believe, exist, feel, suppose",
    },
    {
      kanji: "村",
      meaning: "town, village",
    },
  ],
  JLPT_N2: [
    {
      kanji: "巻",
      meaning:
        "book, coil, counter for texts (or book scrolls), part, roll up, scroll, tie, volume, wind up",
    },
    {
      kanji: "孫",
      meaning: "descendants, grandchild",
    },
    {
      kanji: "並",
      meaning:
        "and, as well as, besides, equal, line up, rank with, rival, row",
    },
    {
      kanji: "略",
      meaning: "abbreviation, capture, omission, outline, plunder, shorten",
    },
    {
      kanji: "看",
      meaning: "see, watch over",
    },
    {
      kanji: "尊",
      meaning: "exalted, noble, precious, revered, valuable",
    },
    {
      kanji: "損",
      meaning: "damage, disadvantage, hurt, injure, loss",
    },
    {
      kanji: "乾",
      meaning: "dessicate, drink up, drought, dry, emperor, heaven",
    },
    {
      kanji: "糸",
      meaning: "thread",
    },
    {
      kanji: "券",
      meaning: "ticket",
    },
    {
      kanji: "童",
      meaning: "child, juvenile",
    },
    {
      kanji: "粒",
      meaning: "counter for tiny particles, drop, grains",
    },
    {
      kanji: "肩",
      meaning: "shoulder",
    },
    {
      kanji: "伺",
      meaning: "ask, implore, inquire, pay respects, question, visit",
    },
    {
      kanji: "志",
      meaning: "aspire, hopes, intention, motive, plan, resolve, shilling",
    },
    {
      kanji: "圧",
      meaning: "dominate, oppress, overwhelm, pressure, push",
    },
    {
      kanji: "植",
      meaning: "plant",
    },
    {
      kanji: "銅",
      meaning: "copper",
    },
    {
      kanji: "導",
      meaning: "conduct, guidance, leading, usher",
    },
    {
      kanji: "換",
      meaning: "change, convert, interchange, period, renew, replace",
    },
    {
      kanji: "刺",
      meaning: "calling card, pierce, prick, stab, sting, thorn",
    },
    {
      kanji: "壁",
      meaning: "fence, lining (stomach), wall",
    },
    {
      kanji: "触",
      meaning: "announce, conflict, contact, feel, hit, proclaim, touch",
    },
    {
      kanji: "了",
      meaning: "complete, finish",
    },
    {
      kanji: "案",
      meaning:
        "bench, draft, expectation, fear, idea, plan, ponder, proposition, suggestion, table, worry",
    },
    {
      kanji: "枝",
      meaning: "bough, branch, counter for branches, limb, twig",
    },
    {
      kanji: "軒",
      meaning: "counter for houses, eaves, flats",
    },
    {
      kanji: "健",
      meaning: "health, healthy, persistence, strength",
    },
    {
      kanji: "片",
      meaning: "leaf, one-sided, right-side kata radical (no. 91), sheet",
    },
    {
      kanji: "衣",
      meaning: "clothes, dressing, garment",
    },
    {
      kanji: "辺",
      meaning: "border, boundary, environs, vicinity",
    },
    {
      kanji: "涼",
      meaning: "nice and cool, refreshing",
    },
    {
      kanji: "囲",
      meaning:
        "besiege, encircle, enclosure, keep, paling, preserve, store, surround",
    },
    {
      kanji: "毒",
      meaning: "germ, harm, injury, poison, spite, venom, virus",
    },
    {
      kanji: "伸",
      meaning: "expand, extend, increase, lengthen, stretch",
    },
    {
      kanji: "量",
      meaning: "amount, consider, estimate, measure, quantity, surmise, weight",
    },
    {
      kanji: "依",
      meaning: "consequently, depend on, due to, reliant, therefore",
    },
    {
      kanji: "臣",
      meaning: "retainer, subject",
    },
    {
      kanji: "委",
      meaning: "committee, devote, discard, entrust to, leave to",
    },
    {
      kanji: "帯",
      meaning: "belt, obi, region, sash, zone",
    },
    {
      kanji: "編",
      meaning:
        "braid, compilation, completed poem, editing, knit, part of a book, plait, twist",
    },
    {
      kanji: "領",
      meaning: "dominion, fief, jurisdiction, reign, territory",
    },
    {
      kanji: "管",
      meaning:
        "control, drunken talk, jurisdiction, pipe, tube, wind instrument",
    },
    {
      kanji: "脂",
      meaning: "fat, grease, gum, lard, rosin, tallow, tar",
    },
    {
      kanji: "辛",
      meaning: "acrid, bitter, hot, spicy",
    },
    {
      kanji: "療",
      meaning: "cure, heal",
    },
    {
      kanji: "袋",
      meaning: "bag, pouch, sack",
    },
    {
      kanji: "届",
      meaning: "arrive, deliver, forward, notify, reach, report",
    },
    {
      kanji: "胃",
      meaning: "craw, crop, paunch, stomach",
    },
    {
      kanji: "賢",
      meaning: "cleverness, intelligent, wisdom, wise",
    },
    {
      kanji: "詞",
      meaning: "part of speech, poetry, words",
    },
    {
      kanji: "替",
      meaning: "exchange, per-, spare, substitute",
    },
    {
      kanji: "保",
      meaning: "guarantee, keep, preserve, protect, support, sustain",
    },
    {
      kanji: "異",
      meaning:
        "curious, different, queerness, strangeness, uncommon, unusual, wonderful",
    },
    {
      kanji: "緑",
      meaning: "green",
    },
    {
      kanji: "移",
      meaning: "catch (cold, fire), change, drift, move, pass into, shift",
    },
    {
      kanji: "鈍",
      meaning: "blunt, dull, foolish, slow",
    },
    {
      kanji: "補",
      meaning:
        "assistant, compensate, learner, make good, offset, supplement, supply",
    },
    {
      kanji: "環",
      meaning: "circle, loop, ring",
    },
    {
      kanji: "曇",
      meaning: "cloud up, cloudy weather",
    },
    {
      kanji: "簡",
      meaning: "brevity, simplicity",
    },
    {
      kanji: "輪",
      meaning:
        "circle, counter for wheels and flowers, link, loop, ring, wheel",
    },
    {
      kanji: "募",
      meaning:
        "campaign, enlist, gather (contributions), grow violent, recruit",
    },
    {
      kanji: "誌",
      meaning: "document, records",
    },
    {
      kanji: "針",
      meaning: "needle, pin, staple, stinger",
    },
    {
      kanji: "涙",
      meaning: "sympathy, tears",
    },
    {
      kanji: "丸",
      meaning:
        "-ship, curl up, explain away, full (month), make round, perfection, pills, roll up, round, seduce",
    },
    {
      kanji: "含",
      meaning:
        "bear in mind, cherish, contain, hold in the mouth, include, understand",
    },
    {
      kanji: "岸",
      meaning: "beach",
    },
    {
      kanji: "包",
      meaning: "conceal, cover, pack up, wrap",
    },
    {
      kanji: "域",
      meaning: "level, limits, range, region, stage",
    },
    {
      kanji: "岩",
      meaning: "boulder, cliff, rock",
    },
    {
      kanji: "軟",
      meaning: "soft",
    },
    {
      kanji: "令",
      meaning: "command, decree, good, laws, orders",
    },
    {
      kanji: "寺",
      meaning: "Buddhist temple",
    },
    {
      kanji: "減",
      meaning: "curtail, decline, decrease, dwindle, get hungry, reduce",
    },
    {
      kanji: "宝",
      meaning: "treasure, valuables, wealth",
    },
    {
      kanji: "震",
      meaning: "quake, quiver, shake, shiver, tremble",
    },
    {
      kanji: "濯",
      meaning: "laundry, pour on, rinse, wash",
    },
    {
      kanji: "児",
      meaning: "child, newborn babe, young of animals",
    },
    {
      kanji: "戸",
      meaning: "counter for houses, door, door radical (no. 63)",
    },
    {
      kanji: "零",
      meaning: "cipher, nothing, overflow, spill, zero",
    },
    {
      kanji: "印",
      meaning:
        "India, emblem, evidence, imprint, mark, seal, souvenir, stamp, symbol, trademark",
    },
    {
      kanji: "机",
      meaning: "desk, table",
    },
    {
      kanji: "固",
      meaning: "clot, curdle, harden, set",
    },
    {
      kanji: "乳",
      meaning: "breasts, milk",
    },
    {
      kanji: "齢",
      meaning: "age",
    },
    {
      kanji: "希",
      meaning:
        "Greece, beg, beseech, dilute (acid), few, hope, phenomenal, pray, rare, request",
    },
    {
      kanji: "歴",
      meaning: "continuation, curriculum, passage of time",
    },
    {
      kanji: "故",
      meaning:
        "cause, circumstances, consequently, especially, happenstance, intentionally, reason, the late, therefore",
    },
    {
      kanji: "祈",
      meaning: "pray, wish",
    },
    {
      kanji: "枯",
      meaning: "be seasoned, die, dry up, wither",
    },
    {
      kanji: "担",
      meaning: "bear, carry, raise, shouldering",
    },
    {
      kanji: "季",
      meaning: "seasons",
    },
    {
      kanji: "個",
      meaning: "counter for articles, individual",
    },
    {
      kanji: "豊",
      meaning: "bountiful, excellent, rich",
    },
    {
      kanji: "庫",
      meaning: "storehouse, warehouse",
    },
    {
      kanji: "炭",
      meaning: "charcoal, coal",
    },
    {
      kanji: "恋",
      meaning: "darling, in love, miss, romance, yearn for",
    },
    {
      kanji: "湖",
      meaning: "lake",
    },
    {
      kanji: "宇",
      meaning: "eaves, heaven, house, roof",
    },
    {
      kanji: "雇",
      meaning: "employ, hire",
    },
    {
      kanji: "羽",
      meaning: "counter for birds, rabbits, feathers",
    },
    {
      kanji: "練",
      meaning: "drill, gloss, polish, practice, refine, train",
    },
    {
      kanji: "燃",
      meaning: "blaze, burn, glow",
    },
    {
      kanji: "悩",
      meaning: "distress, illness, in pain, trouble, worry",
    },
    {
      kanji: "基",
      meaning: "counter for machines, foundation, fundamentals, radical (chem)",
    },
    {
      kanji: "脳",
      meaning: "brain, memory",
    },
    {
      kanji: "農",
      meaning: "agriculture, farmers",
    },
    {
      kanji: "防",
      meaning: "defend, protect, resist, ward off",
    },
    {
      kanji: "雲",
      meaning: "cloud",
    },
    {
      kanji: "湿",
      meaning: "damp, moist, wet",
    },
    {
      kanji: "団",
      meaning: "association, group",
    },
    {
      kanji: "濃",
      meaning: "concentrated, dark, thick, undiluted",
    },
    {
      kanji: "永",
      meaning: "eternity, lengthy, long",
    },
    {
      kanji: "波",
      meaning: "Poland, billows, waves",
    },
    {
      kanji: "栄",
      meaning: "flourish, glory, honor, prosperity, splendor",
    },
    {
      kanji: "営",
      meaning: "build, camp, conduct (business), perform",
    },
    {
      kanji: "帽",
      meaning: "cap, headgear",
    },
    {
      kanji: "鋭",
      meaning: "edge, pointed, sharp, sharpness, violent, weapon",
    },
    {
      kanji: "拝",
      meaning: "adore, pray to, worship",
    },
    {
      kanji: "棒",
      meaning: "cane, club, line, pole, rod, stick",
    },
    {
      kanji: "公",
      meaning: "governmental, official, prince, public",
    },
    {
      kanji: "貿",
      meaning: "exchange, trade",
    },
    {
      kanji: "録",
      meaning: "record",
    },
    {
      kanji: "捨",
      meaning: "abandon, discard, reject, resign, sacrifice, throw away",
    },
    {
      kanji: "暴",
      meaning: "cruelty, force, fret, outburst, outrage, rave, violence",
    },
    {
      kanji: "液",
      meaning: "fluid, juice, liquid, sap, secretion",
    },
    {
      kanji: "技",
      meaning: "ability, art, arts, craft, feat, performance, skill, vocation",
    },
    {
      kanji: "竹",
      meaning: "bamboo",
    },
    {
      kanji: "畜",
      meaning: "domestic fowl and animals, livestock",
    },
    {
      kanji: "倍",
      meaning: "double, fold, times, twice",
    },
    {
      kanji: "湾",
      meaning: "bay, gulf, inlet",
    },
    {
      kanji: "延",
      meaning: "prolong, stretching",
    },
    {
      kanji: "姓",
      meaning: "surname",
    },
    {
      kanji: "腕",
      meaning: "ability, arm, talent",
    },
    {
      kanji: "築",
      meaning: "build, construct, fabricate",
    },
    {
      kanji: "星",
      meaning: "dot, mark, spot, star",
    },
    {
      kanji: "喫",
      meaning: "consume, drink, eat, receive (a blow), smoke",
    },
    {
      kanji: "省",
      meaning: "conserve, government ministry, omit",
    },
    {
      kanji: "詰",
      meaning: "blame, close, packed, pressed, rebuke, reprove",
    },
    {
      kanji: "効",
      meaning: "benefit, efficacy, efficiency, merit",
    },
    {
      kanji: "仲",
      meaning: "go-between, relationship",
    },
    {
      kanji: "泊",
      meaning: "overnight stay, put up at, ride at anchor",
    },
    {
      kanji: "虫",
      meaning: "bug, insect, temper",
    },
    {
      kanji: "清",
      meaning: "Manchu dynasty, cleanse, exorcise, pure, purify",
    },
    {
      kanji: "塩",
      meaning: "salt",
    },
    {
      kanji: "肯",
      meaning: "agreement, comply with, consent",
    },
    {
      kanji: "逆",
      meaning: "inverted, opposite, reverse, wicked",
    },
    {
      kanji: "磨",
      meaning: "brush (teeth), grind, improve, polish, scour",
    },
    {
      kanji: "厚",
      meaning: "brazen, cordial, heavy, kind, rich, shameless, thick",
    },
    {
      kanji: "薄",
      meaning: "dilute, pampas grass, thin, weak (tea)",
    },
    {
      kanji: "勢",
      meaning: "energy, forces, military strength",
    },
    {
      kanji: "麦",
      meaning: "barley, wheat",
    },
    {
      kanji: "汚",
      meaning: "defile, dirty, disgrace, pollute, rape",
    },
    {
      kanji: "久",
      meaning: "long time, old story",
    },
    {
      kanji: "柱",
      meaning: "cylinder, pillar, post, support",
    },
    {
      kanji: "枚",
      meaning: "counter for flat thin objects or sheets, sheet of...",
    },
    {
      kanji: "紅",
      meaning: "crimson, deep red",
    },
    {
      kanji: "爆",
      meaning: "bomb, burst open, pop, split",
    },
    {
      kanji: "央",
      meaning: "center, middle",
    },
    {
      kanji: "荒",
      meaning: "laid waste, rough, rude, wild",
    },
    {
      kanji: "埋",
      meaning: "be filled up, bury, embedded",
    },
    {
      kanji: "応",
      meaning: "OK, accept, answer, apply, reply, yes",
    },
    {
      kanji: "旧",
      meaning: "ex-, former, old friend, old things, old times",
    },
    {
      kanji: "郊",
      meaning: "outskirts, rural area, suburbs",
    },
    {
      kanji: "香",
      meaning: "incense, perfume, smell",
    },
    {
      kanji: "駐",
      meaning: "reside in, resident, stop-over",
    },
    {
      kanji: "著",
      meaning:
        "arrival, counter for suits of clothing, don, finish (race), literary work, phenomenal, publish, put on, remarkable, renowned, wear, write",
    },
    {
      kanji: "肌",
      meaning: "body, grain, skin, texture",
    },
    {
      kanji: "授",
      meaning: "confer, grant, impart, instruct",
    },
    {
      kanji: "整",
      meaning: "arranging, key (music), meter, organize, tone, tune",
    },
    {
      kanji: "貯",
      meaning: "keep, lay in, savings, store, wear mustache",
    },
    {
      kanji: "欧",
      meaning: "Europe",
    },
    {
      kanji: "耕",
      meaning: "cultivate, plow, till",
    },
    {
      kanji: "航",
      meaning: "cruise, fly, navigate, sail",
    },
    {
      kanji: "税",
      meaning: "duty, tax",
    },
    {
      kanji: "庁",
      meaning: "government office",
    },
    {
      kanji: "兆",
      meaning: "10**12, omen, portent, sign, symptoms, trillion",
    },
    {
      kanji: "奥",
      meaning: "heart, interior",
    },
    {
      kanji: "康",
      meaning: "ease, peace",
    },
    {
      kanji: "州",
      meaning: "province, state",
    },
    {
      kanji: "舟",
      meaning: "boat, ship",
    },
    {
      kanji: "億",
      meaning: "10**8, hundred million",
    },
    {
      kanji: "黄",
      meaning: "yellow",
    },
    {
      kanji: "周",
      meaning: "circuit, circumference, lap",
    },
    {
      kanji: "張",
      meaning:
        "counter for bows & stringed instruments, put up (tent), spread, stretch",
    },
    {
      kanji: "拾",
      meaning: "find, gather, go on foot, pick up, ten",
    },
    {
      kanji: "硬",
      meaning: "hard, stiff",
    },
    {
      kanji: "修",
      meaning: "conduct oneself well, discipline, master, study",
    },
    {
      kanji: "巨",
      meaning: "big, gigantic, great, large",
    },
    {
      kanji: "坂",
      meaning: "hill, incline, slope",
    },
    {
      kanji: "鉱",
      meaning: "mineral, ore",
    },
    {
      kanji: "績",
      meaning: "achievements, exploits, unreeling cocoons",
    },
    {
      kanji: "超",
      meaning: "super-, transcend, ultra-",
    },
    {
      kanji: "温",
      meaning: "warm",
    },
    {
      kanji: "板",
      meaning: "board, plank, plate, stage",
    },
    {
      kanji: "版",
      meaning: "edition, impression, label, printing block, printing plate",
    },
    {
      kanji: "無",
      meaning: "ain't, nil, none, not, nothing, nothingness",
    },
    {
      kanji: "般",
      meaning: "all, carrier, carry, general, kind, sort",
    },
    {
      kanji: "接",
      meaning: "adjoin, contact, piece together, touch",
    },
    {
      kanji: "販",
      meaning: "marketing, sell, trade",
    },
    {
      kanji: "設",
      meaning: "establishment, prepare, provision",
    },
    {
      kanji: "仮",
      meaning: "assumed (name), informal, interim, sham, temporary",
    },
    {
      kanji: "講",
      meaning: "association, club, lecture",
    },
    {
      kanji: "漁",
      meaning: "fishery, fishing",
    },
    {
      kanji: "節",
      meaning:
        "clause, honor, joint, knob, knot, knuckle, melody, node, occasion, period, season, stanza, tune, verse",
    },
    {
      kanji: "価",
      meaning: "price, value",
    },
    {
      kanji: "叫",
      meaning: "exclaim, shout, yell",
    },
    {
      kanji: "沈",
      meaning: "aloes, be depressed, be submerged, sink, subside",
    },
    {
      kanji: "河",
      meaning: "river",
    },
    {
      kanji: "珍",
      meaning: "curious, rare, strange",
    },
    {
      kanji: "柔",
      meaning: "gentleness, softness, tender, weakness",
    },
    {
      kanji: "協",
      meaning: "co-, cooperation",
    },
    {
      kanji: "占",
      meaning:
        "divining, forecasting, fortune-telling, get, have, hold, occupy, take",
    },
    {
      kanji: "賃",
      meaning: "charge, fare, fee, hire, rent, wages",
    },
    {
      kanji: "綿",
      meaning: "cotton",
    },
    {
      kanji: "況",
      meaning: "condition, situation",
    },
    {
      kanji: "谷",
      meaning: "valley",
    },
    {
      kanji: "比",
      meaning: "Philippines, compare, race, ratio",
    },
    {
      kanji: "荷",
      meaning:
        "baggage, bear (a burden), cargo, freight, load, shoulder (a gun), shoulder-pole load",
    },
    {
      kanji: "挟",
      meaning: "between, pinch",
    },
    {
      kanji: "専",
      meaning: "exclusive, mainly, solely, specialty",
    },
    {
      kanji: "皮",
      meaning: "hide, leather, pelt, skin, skin radical (no. 107)",
    },
    {
      kanji: "泉",
      meaning: "fountain, spring",
    },
    {
      kanji: "毛",
      meaning: "down, feather, fur, hair",
    },
    {
      kanji: "菓",
      meaning: "cakes, candy, fruit",
    },
    {
      kanji: "浅",
      meaning: "frivolous, shallow, shameful, superficial, wretched",
    },
    {
      kanji: "貨",
      meaning: "freight, goods, property",
    },
    {
      kanji: "祝",
      meaning: "celebrate, congratulate",
    },
    {
      kanji: "批",
      meaning: "criticism, strike",
    },
    {
      kanji: "胸",
      meaning: "bosom, breast, chest, feelings, heart",
    },
    {
      kanji: "骨",
      meaning: "bone, frame, remains, skeleton",
    },
    {
      kanji: "境",
      meaning: "border, boundary, region",
    },
    {
      kanji: "橋",
      meaning: "bridge",
    },
    {
      kanji: "述",
      meaning: "mention, relate, speak, state",
    },
    {
      kanji: "被",
      meaning:
        "be exposed (film), brood over, cover, incur, put on, receiving, shelter, veil, wear",
    },
    {
      kanji: "競",
      meaning:
        "bid, bout, compete with, contest, emulate, race, sell at auction",
    },
    {
      kanji: "課",
      meaning:
        "chapter, counter for chapters (of a book), department, division, lesson, section",
    },
    {
      kanji: "根",
      meaning: "head (pimple), radical, root",
    },
    {
      kanji: "底",
      meaning: "base, bottom, bottom price, depth, kind, sole, sort",
    },
    {
      kanji: "混",
      meaning: "blend, confuse, mix",
    },
    {
      kanji: "線",
      meaning: "line, track",
    },
    {
      kanji: "純",
      meaning: "genuine, innocence, net (profit), purity",
    },
    {
      kanji: "極",
      meaning:
        "10**48, conclusion, electric poles, end, extremely, highest rank, highly, most, poles, settlement, very",
    },
    {
      kanji: "玉",
      meaning: "ball, jewel",
    },
    {
      kanji: "順",
      meaning: "docility, obey, occasion, order, right, turn",
    },
    {
      kanji: "停",
      meaning: "halt, stopping",
    },
    {
      kanji: "介",
      meaning: "concern oneself with, jammed in, mediate, shellfish",
    },
    {
      kanji: "準",
      meaning: "conform, correspond to, imitate, proportionate to, semi-",
    },
    {
      kanji: "鼻",
      meaning: "nose, snout",
    },
    {
      kanji: "油",
      meaning: "fat, oil",
    },
    {
      kanji: "査",
      meaning: "investigate",
    },
    {
      kanji: "灰",
      meaning: "ashes, cremate, puckery juice",
    },
    {
      kanji: "均",
      meaning: "average, level",
    },
    {
      kanji: "砂",
      meaning: "sand",
    },
    {
      kanji: "善",
      meaning: "good, goodness, virtuous",
    },
    {
      kanji: "匹",
      meaning: "counter for small animals, equal, head, roll of cloth",
    },
    {
      kanji: "快",
      meaning: "agreeable, cheerful, comfortable, pleasant",
    },
    {
      kanji: "輸",
      meaning: "be inferior, send, transport",
    },
    {
      kanji: "改",
      meaning:
        "change, examine, inspect, mend, modify, reformation, renew, search",
    },
    {
      kanji: "筆",
      meaning: "handwriting, painting brush, writing, writing brush",
    },
    {
      kanji: "泥",
      meaning: "adhere to, be attached to, mire, mud",
    },
    {
      kanji: "署",
      meaning: "govt office, police station, signature",
    },
    {
      kanji: "氷",
      meaning: "congeal, freeze, hail, ice, icicle",
    },
    {
      kanji: "勇",
      meaning: "be in high spirits, bravery, cheer up, courage, heroism",
    },
    {
      kanji: "禁",
      meaning: "ban, forbid, prohibition",
    },
    {
      kanji: "再",
      meaning: "again, second time, twice",
    },
    {
      kanji: "諸",
      meaning: "many, several, together, various",
    },
    {
      kanji: "滴",
      meaning: "drip, drop",
    },
    {
      kanji: "郵",
      meaning: "mail, stagecoach stop",
    },
    {
      kanji: "械",
      meaning: "contraption, fetter, instrument, machine",
    },
    {
      kanji: "評",
      meaning: "comment, criticism, evaluate",
    },
    {
      kanji: "標",
      meaning:
        "emblem, evidence, imprint, mark, seal, signpost, souvenir, stamp, symbol, target, trademark",
    },
    {
      kanji: "階",
      meaning: "counter for storeys of a building, stair, storey",
    },
    {
      kanji: "鉄",
      meaning: "iron",
    },
    {
      kanji: "秒",
      meaning: "second (1/60 minute)",
    },
    {
      kanji: "採",
      meaning: "fetch, pick, take, take up",
    },
    {
      kanji: "祭",
      meaning: "celebrate, deify, enshrine, offer prayers, ritual, worship",
    },
    {
      kanji: "双",
      meaning: "comparison, counter for pairs, pair, set",
    },
    {
      kanji: "細",
      meaning: "dainty, detailed, get thin, narrow, precise, slender, taper",
    },
    {
      kanji: "召",
      meaning:
        "buy, call, catch (cold), drink, eat, put on, ride in, seduce, send for, wear",
    },
    {
      kanji: "貝",
      meaning: "shellfish",
    },
    {
      kanji: "床",
      meaning: "bed, counter for beds, floor, padding, tatami",
    },
    {
      kanji: "展",
      meaning: "expand, unfold",
    },
    {
      kanji: "預",
      meaning: "custody, deposit, entrust to, leave with",
    },
    {
      kanji: "隅",
      meaning: "corner, nook",
    },
    {
      kanji: "幼",
      meaning: "childhood, infancy",
    },
    {
      kanji: "承",
      meaning: "acquiesce, be informed, hear, listen to, receive",
    },
    {
      kanji: "掘",
      meaning: "delve, dig, excavate",
    },
    {
      kanji: "昇",
      meaning: "rise up",
    },
    {
      kanji: "殿",
      meaning: "Mr., hall, lord, mansion, palace, temple",
    },
    {
      kanji: "捜",
      meaning: "locate, look for, search",
    },
    {
      kanji: "布",
      meaning: "cloth, distribute, linen, spread",
    },
    {
      kanji: "材",
      meaning: "ingredients, log, lumber, materials, talent, timber, wood",
    },
    {
      kanji: "府",
      meaning:
        "borough, govt office, representative body, storehouse, urban prefecture",
    },
    {
      kanji: "訓",
      meaning: "Japanese character reading, explanation, instruction, read",
    },
    {
      kanji: "将",
      meaning:
        "admiral, and again, commander, from now on, general, just about, leader, or, soon",
    },
    {
      kanji: "掃",
      meaning: "brush, sweep",
    },
    {
      kanji: "各",
      meaning: "each, either, every",
    },
    {
      kanji: "軍",
      meaning: "army, battle, force, troops, war",
    },
    {
      kanji: "角",
      meaning: "angle, antlers, corner, horn, square",
    },
    {
      kanji: "塗",
      meaning: "coating, daub, paint, plaster, smear",
    },
    {
      kanji: "溶",
      meaning: "dissolve, melt, thaw",
    },
    {
      kanji: "拡",
      meaning: "broaden, enlarge, expand, extend",
    },
    {
      kanji: "群",
      meaning: "cluster, crowd, flock, group, herd, swarm",
    },
    {
      kanji: "腰",
      meaning: "hips, loins, low wainscoting, waist",
    },
    {
      kanji: "革",
      meaning: "become serious, leather, reform, skin",
    },
    {
      kanji: "符",
      meaning: "charm, mark, sign, tally, token",
    },
    {
      kanji: "踊",
      meaning: "dance, jump, leap, skip",
    },
    {
      kanji: "章",
      meaning: "badge, chapter, composition, design, poem",
    },
    {
      kanji: "紹",
      meaning: "help, inherit, introduce",
    },
    {
      kanji: "装",
      meaning: "attire, disguise, dress, pretend, profess",
    },
    {
      kanji: "普",
      meaning: "Prussia, generally, universal, wide(ly)",
    },
    {
      kanji: "較",
      meaning: "compare, contrast",
    },
    {
      kanji: "型",
      meaning: "model, mould, type",
    },
    {
      kanji: "咲",
      meaning: "bloom, blossom",
    },
    {
      kanji: "層",
      meaning: "floor, layer, social class, story, stratum",
    },
    {
      kanji: "灯",
      meaning: "a light, counter for lights, lamp, light",
    },
    {
      kanji: "膚",
      meaning: "body, disposition, grain, skin, texture",
    },
    {
      kanji: "冊",
      meaning: "counter for books, tome, volume",
    },
    {
      kanji: "総",
      meaning: "all, full, general, total, whole",
    },
    {
      kanji: "札",
      meaning: "bid, counter for bonds, paper money, placard, tag",
    },
    {
      kanji: "焼",
      meaning: "bake, burning",
    },
    {
      kanji: "恵",
      meaning: "blessing, favor, grace, kindness",
    },
    {
      kanji: "刷",
      meaning: "brush, print, printing",
    },
    {
      kanji: "浴",
      meaning: "bask in, bathe, be favored with",
    },
    {
      kanji: "武",
      meaning: "arms, chivalry, military, warrior",
    },
    {
      kanji: "操",
      meaning:
        "chastity, fidelity, maneuver, manipulate, operate, steer, virginity",
    },
    {
      kanji: "翌",
      meaning: "next, the following",
    },
    {
      kanji: "燥",
      meaning: "dry up, parch",
    },
    {
      kanji: "封",
      meaning: "closing, seal",
    },
    {
      kanji: "象",
      meaning:
        "elephant, image, imitate, pattern after, shape, sign (of the times)",
    },
    {
      kanji: "凍",
      meaning: "congeal, frozen, refrigerate",
    },
    {
      kanji: "額",
      meaning: "amount, forehead, framed picture, plaque, sum, tablet, volume",
    },
    {
      kanji: "敬",
      meaning: "awe, honor, respect, revere",
    },
    {
      kanji: "造",
      meaning: "create, make, physique, structure",
    },
    {
      kanji: "島",
      meaning: "island",
    },
    {
      kanji: "皿",
      meaning: "a helping, dish, plate",
    },
    {
      kanji: "照",
      meaning: "bashful, compare, illuminate, shine",
    },
    {
      kanji: "像",
      meaning: "figure, image, picture, portrait, statue",
    },
    {
      kanji: "副",
      meaning: "aide, assistant, copy, duplicate, vice-",
    },
    {
      kanji: "傾",
      meaning: "bias, incline, lean, ruin, sink, tilt, trend, wane",
    },
    {
      kanji: "幅",
      meaning: "hanging scroll, width",
    },
    {
      kanji: "憎",
      meaning: "detest, hate",
    },
    {
      kanji: "復",
      meaning: "restore, resume, return to, revert",
    },
    {
      kanji: "絡",
      meaning: "coil around, entwine, get caught in",
    },
    {
      kanji: "蔵",
      meaning: "have, hide, own, possess, storehouse",
    },
    {
      kanji: "党",
      meaning: "clique, faction, party",
    },
    {
      kanji: "贈",
      meaning:
        "award to, confer on, give to, presenting something, presents, send",
    },
    {
      kanji: "臓",
      meaning: "bowels, entrails, viscera",
    },
    {
      kanji: "複",
      meaning: "compound, double, duplicate, multiple",
    },
    {
      kanji: "賞",
      meaning: "praise, prize, reward",
    },
    {
      kanji: "乱",
      meaning: "disorder, disturb, riot, war",
    },
    {
      kanji: "塔",
      meaning: "pagoda, steeple, tower",
    },
    {
      kanji: "卵",
      meaning: "egg, ovum, roe, spawn",
    },
    {
      kanji: "沸",
      meaning: "boil, breed, ferment, seethe, uproar",
    },
    {
      kanji: "仏",
      meaning: "Buddha, France, the dead",
    },
    {
      kanji: "算",
      meaning: "abacus, calculate, divining, number, probability",
    },
    {
      kanji: "則",
      meaning: "based on, follow, law, model after, rule",
    },
    {
      kanji: "湯",
      meaning: "bath, hot spring, hot water",
    },
    {
      kanji: "芸",
      meaning: "acting, art, craft, performance, stunt, technique, trick",
    },
    {
      kanji: "粉",
      meaning: "dust, flour, powder",
    },
    {
      kanji: "条",
      meaning:
        "article, clause, counter for articles, clauses, paragraphs, etc., item, streak, stripe, twig",
    },
    {
      kanji: "劇",
      meaning: "drama, play",
    },
    {
      kanji: "測",
      meaning: "fathom, measure, plan, scheme",
    },
    {
      kanji: "筒",
      meaning: "cylinder, gun barrel, pipe, sleeve, tube",
    },
    {
      kanji: "干",
      meaning: "dry, ebb, intercede, interfere, parch, recede",
    },
    {
      kanji: "城",
      meaning: "castle",
    },
    {
      kanji: "刊",
      meaning: "carve, engrave, publish",
    },
    {
      kanji: "裏",
      meaning:
        "amidst, back, in, inside, lining, palm, rear, reverse, sole, wrong side",
    },
    {
      kanji: "甘",
      meaning: "be content, coax, pamper, sugary, sweet",
    },
    {
      kanji: "汗",
      meaning: "perspire, sweat",
    },
    {
      kanji: "血",
      meaning: "blood",
    },
    {
      kanji: "卒",
      meaning: "die, graduate, private, soldier",
    },
    {
      kanji: "陸",
      meaning: "land, six",
    },
    {
      kanji: "史",
      meaning: "chronicle, history",
    },
    {
      kanji: "畳",
      meaning:
        "counter for tatami mats, do away with, fold, shut up, tatami mat",
    },
    {
      kanji: "司",
      meaning: "administer, director, govt office, official, rule",
    },
    {
      kanji: "蒸",
      meaning: "foment, get musty, heat, steam, sultry",
    },
    {
      kanji: "兵",
      meaning: "army, private, soldier, strategy, tactics, troops, warfare",
    },
    {
      kanji: "律",
      meaning: "control, gauge, law, regulation, rhythm",
    },
  ],
  JLPT_N1: [
    {
      kanji: "潔",
      meaning: "clean, gallant, pure, righteous, undefiled",
    },
    {
      kanji: "壌",
      meaning: "earth, lot, soil",
    },
    {
      kanji: "亜",
      meaning: "-ous, Asia, come after, rank next",
    },
    {
      kanji: "矢",
      meaning: "arrow, dart",
    },
    {
      kanji: "嬢",
      meaning: "Miss, daughter, girl, lass",
    },
    {
      kanji: "洞",
      meaning: "cave, den, excavation",
    },
    {
      kanji: "柄",
      meaning:
        "build, character, crank, design, grip, handle, knob, nature, pattern, shaft",
    },
    {
      kanji: "柳",
      meaning: "willow",
    },
    {
      kanji: "哀",
      meaning: "grief, pathetic, pathos, pity, sorrow, sympathize",
    },
    {
      kanji: "陥",
      meaning: "cave in, collapse, fall (castle), fall into, slide into",
    },
    {
      kanji: "旨",
      meaning:
        "clever, delicious, expert, purport, relish, show a liking for, will",
    },
    {
      kanji: "錠",
      meaning: "fetters, lock, shackles",
    },
    {
      kanji: "胴",
      meaning: "hub of wheel, hull (ship), torso, trunk",
    },
    {
      kanji: "陛",
      meaning: "highness, steps (of throne)",
    },
    {
      kanji: "譲",
      meaning: "convey, defer, transfer, turnover",
    },
    {
      kanji: "勘",
      meaning: "check, compare, intuition, perception, sixth sense",
    },
    {
      kanji: "醸",
      meaning: "brew, cause",
    },
    {
      kanji: "塀",
      meaning: "(kokuji), fence, wall",
    },
    {
      kanji: "竜",
      meaning: "dragon, imperial",
    },
    {
      kanji: "患",
      meaning: "afflicted, be ill, disease, suffer from",
    },
    {
      kanji: "至",
      meaning: "arrive, attain, climax, proceed, reach, result in",
    },
    {
      kanji: "幣",
      meaning:
        "Shinto offerings of cloth, bad habit, cash, cut paper, gift, humble prefix, rope",
    },
    {
      kanji: "貫",
      meaning: "8 1/3lbs, brace, penetrate, pierce",
    },
    {
      kanji: "汰",
      meaning: "filtering, luxury, sieving, washing, weeding out",
    },
    {
      kanji: "弊",
      meaning: "abuse, breakage, evil, vice",
    },
    {
      kanji: "隆",
      meaning: "high, hump, noble, prosperity",
    },
    {
      kanji: "握",
      meaning: "bribe, grip, hold, mould sushi",
    },
    {
      kanji: "硫",
      meaning: "sulphur",
    },
    {
      kanji: "喚",
      meaning: "call, cry, scream, summon, yell",
    },
    {
      kanji: "妥",
      meaning: "depravity, gentle, peace",
    },
    {
      kanji: "扱",
      meaning: "entertain, handle, strip, thresh",
    },
    {
      kanji: "堪",
      meaning: "endure, resist, support, withstand",
    },
    {
      kanji: "殖",
      meaning: "augment, increase, multiply, raise",
    },
    {
      kanji: "倹",
      meaning: "economy, frugal, thrifty",
    },
    {
      kanji: "飾",
      meaning: "adorn, decorate, embellish, ornament",
    },
    {
      kanji: "堕",
      meaning: "degenerate, descend to, lapse into",
    },
    {
      kanji: "瞳",
      meaning: "pupil (of eye)",
    },
    {
      kanji: "虜",
      meaning: "barbarian, captive, low epithet for the enemy",
    },
    {
      kanji: "嵐",
      meaning: "storm, tempest",
    },
    {
      kanji: "敢",
      meaning: "bold, brave, daring, pitiful, sad, tragic",
    },
    {
      kanji: "兼",
      meaning: "and, beforehand, concurrently, in advance",
    },
    {
      kanji: "惰",
      meaning: "laziness, lazy",
    },
    {
      kanji: "峠",
      meaning: "(kokuji), climax, crest, mountain pass, mountain peak",
    },
    {
      kanji: "慮",
      meaning: "concern, consider, deliberate, fear, prudence, thought",
    },
    {
      kanji: "棺",
      meaning: "casket, coffin",
    },
    {
      kanji: "剣",
      meaning: "blade, clock hand, sabre, sword",
    },
    {
      kanji: "嘱",
      meaning: "entrust, request, send a message",
    },
    {
      kanji: "駄",
      meaning:
        "burdensome, horse load, pack horse, send by horse, trivial, worthless",
    },
    {
      kanji: "匿",
      meaning: "hide, shelter, shield",
    },
    {
      kanji: "癖",
      meaning: "fault, habit, kink, mannerism, trait, vice",
    },
    {
      kanji: "款",
      meaning: "article, collusion, friendship, goodwill, section",
    },
    {
      kanji: "拳",
      meaning: "fist",
    },
    {
      kanji: "織",
      meaning: "fabric, weave",
    },
    {
      kanji: "祉",
      meaning: "happiness, welfare",
    },
    {
      kanji: "閑",
      meaning: "leisure",
    },
    {
      kanji: "肢",
      meaning: "arms & legs, limb",
    },
    {
      kanji: "辱",
      meaning: "embarrass, humiliate, shame",
    },
    {
      kanji: "督",
      meaning: "coach, command, lead, supervise, urge",
    },
    {
      kanji: "勧",
      meaning: "advise, encourage, offer, persuade, recommend",
    },
    {
      kanji: "姿",
      meaning: "figure, form, shape",
    },
    {
      kanji: "耐",
      meaning: "-proof, enduring",
    },
    {
      kanji: "徳",
      meaning: "benevolence, commanding respect, goodness, virtue",
    },
    {
      kanji: "寛",
      meaning:
        "be at ease, broadminded, feel at home, generosity, leniency, relax, tolerant",
    },
    {
      kanji: "圏",
      meaning: "circle, radius, range, sphere",
    },
    {
      kanji: "篤",
      meaning: "cordial, deliberate, fervent, kind, serious",
    },
    {
      kanji: "猟",
      meaning: "bag, game, game-hunting, shooting",
    },
    {
      kanji: "幹",
      meaning: "capability, main part, talent, tree trunk",
    },
    {
      kanji: "堅",
      meaning: "hard, reliable, solid, strict, tight, tough",
    },
    {
      kanji: "怠",
      meaning: "laziness, neglect",
    },
    {
      kanji: "陵",
      meaning: "hill, imperial tomb, mausoleum, mound",
    },
    {
      kanji: "検",
      meaning: "examination, investigate",
    },
    {
      kanji: "施",
      meaning: "alms, bestow, give, perform",
    },
    {
      kanji: "胎",
      meaning: "uterus, womb",
    },
    {
      kanji: "独",
      meaning: "Germany, alone, single, spontaneously",
    },
    {
      kanji: "偏",
      meaning: "biased, inclining, left-side radical, partial, side",
    },
    {
      kanji: "嫌",
      meaning: "detest, dislike, hate",
    },
    {
      kanji: "遍",
      meaning: "everywhere, generally, times, widely",
    },
    {
      kanji: "僚",
      meaning: "colleague, companion, official",
    },
    {
      kanji: "献",
      meaning: "counter for drinks, offer, offering, present",
    },
    {
      kanji: "威",
      meaning: "dignity, intimidate, majesty, menace, threaten",
    },
    {
      kanji: "絹",
      meaning: "silk",
    },
    {
      kanji: "泰",
      meaning:
        "Thailand, calm, easy, excessive, extreme, great, peace, peaceful",
    },
    {
      kanji: "凸",
      meaning: "beetle brow, convex, uneven",
    },
    {
      kanji: "弁",
      meaning:
        "braid, conical cap, dialect, discrimination, dispose of, distinguish, petal, speech, valve",
    },
    {
      kanji: "寮",
      meaning: "dormitory, hostel, tea pavillion, villa",
    },
    {
      kanji: "為",
      meaning:
        "advantage, as a result of, be of use, benefit, change, cost, do, good, make, practice, reach to, serve as, try, welfare",
    },
    {
      kanji: "遣",
      meaning: "despatch, dispatch, do, donate, give, send, undertake",
    },
    {
      kanji: "歓",
      meaning: "delight, joy",
    },
    {
      kanji: "視",
      meaning: "inspection, look at, regard as, see",
    },
    {
      kanji: "侵",
      meaning: "encroach, invade, raid, trespass, violate",
    },
    {
      kanji: "瞭",
      meaning: "clear",
    },
    {
      kanji: "監",
      meaning: "administer, govt office, official, oversee, rule",
    },
    {
      kanji: "憲",
      meaning: "constitution, law",
    },
    {
      kanji: "紫",
      meaning: "purple, violet",
    },
    {
      kanji: "逮",
      meaning: "apprehend, chase",
    },
    {
      kanji: "屯",
      meaning: "barracks, camp, police station, ton",
    },
    {
      kanji: "糧",
      meaning: "bread, food, provisions",
    },
    {
      kanji: "尉",
      meaning: "jailer, military officer, old man, rank",
    },
    {
      kanji: "緩",
      meaning: "be moderate, ease, lessen, loosen, relax, slacken",
    },
    {
      kanji: "津",
      meaning: "ferry, harbor, haven, port",
    },
    {
      kanji: "豚",
      meaning: "pig, pork",
    },
    {
      kanji: "憾",
      meaning: "be sorry, regret, remorse",
    },
    {
      kanji: "謙",
      meaning: "be modest, condescend, humble oneself, self-effacing",
    },
    {
      kanji: "還",
      meaning: "return, send back",
    },
    {
      kanji: "嗣",
      meaning: "heir, succeed",
    },
    {
      kanji: "唇",
      meaning: "lips",
    },
    {
      kanji: "隊",
      meaning: "company, party, regiment, squad",
    },
    {
      kanji: "繭",
      meaning: "cocoon",
    },
    {
      kanji: "娠",
      meaning: "pregnancy, with child",
    },
    {
      kanji: "滞",
      meaning: "arrears, be delayed, overdue, stagnate",
    },
    {
      kanji: "厘",
      meaning: "1/10 bu, 1/10 sen, rin",
    },
    {
      kanji: "顕",
      meaning: "appear, existing",
    },
    {
      kanji: "詩",
      meaning: "poem, poetry",
    },
    {
      kanji: "振",
      meaning: "shake, swing, wag, wave",
    },
    {
      kanji: "態",
      meaning: "appearance, attitude, condition, figure, voice (of verbs)",
    },
    {
      kanji: "舗",
      meaning: "pave, shop, store",
    },
    {
      kanji: "倫",
      meaning: "companion, ethics",
    },
    {
      kanji: "浸",
      meaning: "dip, dunk, immersed, moisten, soak, steep, wet",
    },
    {
      kanji: "懸",
      meaning: "consult, depend, distant, far apart, hang, state of suspension",
    },
    {
      kanji: "飼",
      meaning: "domesticate, feed, keep, raise",
    },
    {
      kanji: "那",
      meaning: "what?",
    },
    {
      kanji: "隣",
      meaning: "neighboring",
    },
    {
      kanji: "奈",
      meaning: "Nara, what?",
    },
    {
      kanji: "墓",
      meaning: "grave, tomb",
    },
    {
      kanji: "臨",
      meaning: "attend, call on, confront, face, look to, meet",
    },
    {
      kanji: "艦",
      meaning: "warship",
    },
    {
      kanji: "幻",
      meaning: "apparition, dream, illusion, phantasm, vision",
    },
    {
      kanji: "雌",
      meaning: "female, feminine",
    },
    {
      kanji: "慕",
      meaning: "adore, love dearly, pining, yearn for",
    },
    {
      kanji: "瑠",
      meaning: "lapis lazuli",
    },
    {
      kanji: "維",
      meaning: "fiber, rope, tie",
    },
    {
      kanji: "鑑",
      meaning: "learn from, specimen, take warning from",
    },
    {
      kanji: "玄",
      meaning: "black, deep, mysterious, occultness, profound",
    },
    {
      kanji: "紳",
      meaning: "gentleman, good belt, sire",
    },
    {
      kanji: "第",
      meaning: "No., residence",
    },
    {
      kanji: "梨",
      meaning: "pear tree",
    },
    {
      kanji: "慰",
      meaning:
        "amusement, cheer, comfort, consolation, console, make sport of, seduce",
    },
    {
      kanji: "賜",
      meaning: "boon, gift, grant, results",
    },
    {
      kanji: "簿",
      meaning: "record book, register",
    },
    {
      kanji: "累",
      meaning: "accumulate, continually, involvement, tie up, trouble",
    },
    {
      kanji: "遺",
      meaning: "bequeath, leave behind, reserve",
    },
    {
      kanji: "弦",
      meaning: "bowstring, chord, hypotenuse",
    },
    {
      kanji: "諮",
      meaning: "consult with",
    },
    {
      kanji: "滝",
      meaning: "cascade, rapids, waterfall",
    },
    {
      kanji: "塁",
      meaning: "base(ball), bases, fort, rampart, walls",
    },
    {
      kanji: "緯",
      meaning:
        "(parallels of) latitude, horizontal, left & right, prediction, woof",
    },
    {
      kanji: "診",
      meaning: "checkup, diagnose, examine, seeing",
    },
    {
      kanji: "択",
      meaning: "choose, elect, prefer, select",
    },
    {
      kanji: "芳",
      meaning: "balmy, favorable, fragrant, perfume",
    },
    {
      kanji: "慎",
      meaning: "be careful, discreet, humility, prudent",
    },
    {
      kanji: "沢",
      meaning: "brilliance, grace, marsh, swamp",
    },
    {
      kanji: "邦",
      meaning: "Japan, country, home country",
    },
    {
      kanji: "眼",
      meaning: "eyeball",
    },
    {
      kanji: "卓",
      meaning: "desk, eminent, high, table",
    },
    {
      kanji: "奉",
      meaning: "dedicate, observance, offer, present",
    },
    {
      kanji: "壱",
      meaning: "one (in documents)",
    },
    {
      kanji: "頑",
      meaning: "firmly, foolish, stubborn",
    },
    {
      kanji: "審",
      meaning: "hearing, judge, trial",
    },
    {
      kanji: "拓",
      meaning: "break up (land), clear (the land), open",
    },
    {
      kanji: "尼",
      meaning: "nun",
    },
    {
      kanji: "励",
      meaning: "be diligent, encourage, inspire",
    },
    {
      kanji: "逸",
      meaning:
        "deviate, diverge, elude, evade, idleness, leisure, miss the mark, parry",
    },
    {
      kanji: "源",
      meaning: "origin, source",
    },
    {
      kanji: "託",
      meaning: "consign, entrusting with, hint, pretend, requesting",
    },
    {
      kanji: "弐",
      meaning: "II, second, two",
    },
    {
      kanji: "厳",
      meaning: "rigidity, severity, stern, strictness",
    },
    {
      kanji: "薪",
      meaning: "firewood, fuel, kindling",
    },
    {
      kanji: "芋",
      meaning: "potato",
    },
    {
      kanji: "企",
      meaning: "attempt, design, plan, scheme, undertake",
    },
    {
      kanji: "己",
      meaning: "self",
    },
    {
      kanji: "諾",
      meaning: "agreement, assent, consent",
    },
    {
      kanji: "鈴",
      meaning: "buzzer, small bell",
    },
    {
      kanji: "伎",
      meaning: "deed, skill",
    },
    {
      kanji: "濁",
      meaning: "impurity, nigori, uncleanness, voiced, wrong",
    },
    {
      kanji: "虹",
      meaning: "rainbow",
    },
    {
      kanji: "泡",
      meaning: "bubbles, foam, froth, suds",
    },
    {
      kanji: "侍",
      meaning: "samurai, serve, wait upon, waiter",
    },
    {
      kanji: "刃",
      meaning: "blade, edge, sword",
    },
    {
      kanji: "但",
      meaning: "but, however",
    },
    {
      kanji: "胞",
      meaning: "placenta, sac, sheath",
    },
    {
      kanji: "霊",
      meaning: "soul, spirits",
    },
    {
      kanji: "仁",
      meaning: "benevolence, charity, humanity, kernel, man, virtue",
    },
    {
      kanji: "俸",
      meaning: "salary, stipend",
    },
    {
      kanji: "隷",
      meaning: "criminal, follower, prisoner, servant, slave",
    },
    {
      kanji: "尽",
      meaning: "befriend, deplete, exhaust, run out of, serve, use up",
    },
    {
      kanji: "脱",
      meaning:
        "be left out, escape from, get rid of, removing, take off, undress",
    },
    {
      kanji: "倣",
      meaning: "emulate, imitate",
    },
    {
      kanji: "姻",
      meaning: "marry, matrimony",
    },
    {
      kanji: "岐",
      meaning: "arena, branch off, fork in road, scene, theater",
    },
    {
      kanji: "迅",
      meaning: "fast, swift",
    },
    {
      kanji: "奪",
      meaning: "dispossess, plunder, rob, snatch away, take by force, usurp",
    },
    {
      kanji: "尿",
      meaning: "urine",
    },
    {
      kanji: "峰",
      meaning: "peak, summit",
    },
    {
      kanji: "麗",
      meaning: "beautiful, graceful, lovely, resplendent",
    },
    {
      kanji: "虎",
      meaning: "drunkard, tiger",
    },
    {
      kanji: "滋",
      meaning: "be luxuriant, more & more, nourishing, planting, turbidity",
    },
    {
      kanji: "甚",
      meaning: "exceedingly, great, tremendously, very",
    },
    {
      kanji: "棚",
      meaning: "ledge, mantle, mount, rack, shelf, trellis",
    },
    {
      kanji: "砲",
      meaning: "cannon, gun",
    },
    {
      kanji: "暦",
      meaning: "almanac, calendar",
    },
    {
      kanji: "忌",
      meaning: "abhor, death anniversary, detestable, mourning",
    },
    {
      kanji: "孤",
      meaning: "alone, orphan",
    },
    {
      kanji: "慈",
      meaning: "mercy",
    },
    {
      kanji: "陣",
      meaning: "battle array, brief time, camp, position, ranks, sudden",
    },
    {
      kanji: "妊",
      meaning: "pregnancy",
    },
    {
      kanji: "崩",
      meaning: "crumble, demolish, die, level",
    },
    {
      kanji: "汽",
      meaning: "steam, vapor",
    },
    {
      kanji: "弧",
      meaning: "arc, arch, bow",
    },
    {
      kanji: "尋",
      meaning: "fathom, inquire, look for",
    },
    {
      kanji: "丹",
      meaning: "pills, red, red lead, rust-colored, sincerity",
    },
    {
      kanji: "忍",
      meaning: "bear, conceal, endure, put up with, secrete, sneak, spy",
    },
    {
      kanji: "陰",
      meaning: "negative, secret, sex organs, shade, shadow, yin",
    },
    {
      kanji: "奇",
      meaning: "curiosity, strange, strangeness",
    },
    {
      kanji: "磁",
      meaning: "magnet, porcelain",
    },
    {
      kanji: "旦",
      meaning: "dawn, daybreak, morning",
    },
    {
      kanji: "劣",
      meaning: "be inferior to, be worse, inferiority",
    },
    {
      kanji: "須",
      meaning: "by all means, necessarily, ought",
    },
    {
      kanji: "寧",
      meaning: "peaceful, preferably, quiet, rather, tranquility",
    },
    {
      kanji: "烈",
      meaning: "ardent, extreme, furious, severe, vehement, violent",
    },
    {
      kanji: "隠",
      meaning: "conceal, cover, hide",
    },
    {
      kanji: "裂",
      meaning: "rend, split, tear",
    },
    {
      kanji: "韻",
      meaning: "elegance, rhyme, tone",
    },
    {
      kanji: "紀",
      meaning:
        "account, annals, chronicle, geologic period, history, narrative",
    },
    {
      kanji: "鹿",
      meaning: "deer",
    },
    {
      kanji: "飽",
      meaning: "bored, sated, satiate, tired of",
    },
    {
      kanji: "軌",
      meaning: "model, rut, track, way of doing, wheel",
    },
    {
      kanji: "胆",
      meaning: "courage, gall bladder, nerve, pluck",
    },
    {
      kanji: "褒",
      meaning: "extol, praise",
    },
    {
      kanji: "既",
      meaning: "already, long ago, previously",
    },
    {
      kanji: "垂",
      meaning: "droop, hang, slouch, suspend",
    },
    {
      kanji: "縫",
      meaning: "embroider, sew, stitch",
    },
    {
      kanji: "廉",
      meaning:
        "account, bargain, charge, cheap, contented, honest, low price, peaceful, point, purity, reason, rested, suspicion",
    },
    {
      kanji: "誇",
      meaning: "be proud, boast, pride, triumphantly",
    },
    {
      kanji: "軸",
      meaning: "axis, counter for book scrolls, pivot, stalk, stem",
    },
    {
      kanji: "炊",
      meaning: "boil, cook",
    },
    {
      kanji: "淡",
      meaning: "faint, fleeting, pale, thin",
    },
    {
      kanji: "粘",
      meaning: "glutinous, greasy, persevere, sticky",
    },
    {
      kanji: "鼓",
      meaning: "beat, drum, muster, rouse",
    },
    {
      kanji: "帥",
      meaning: "commander, governor, leading troops",
    },
    {
      kanji: "乏",
      meaning: "destitution, limited, scarce",
    },
    {
      kanji: "錬",
      meaning: "drill, polish, refine, tempering, train",
    },
    {
      kanji: "唄",
      meaning: "ballad, song",
    },
    {
      kanji: "飢",
      meaning: "hungry, starve",
    },
    {
      kanji: "粋",
      meaning: "chic, choice, cream, elite, essence, pith, purity, style",
    },
    {
      kanji: "嘆",
      meaning: "grieve, lament, moan, sigh, sigh of admiration",
    },
    {
      kanji: "呂",
      meaning: "backbone, spine",
    },
    {
      kanji: "鬼",
      meaning: "devil, ghost",
    },
    {
      kanji: "顧",
      meaning: "examine oneself, look back, review, turn around",
    },
    {
      kanji: "衰",
      meaning: "decline, wane, weaken",
    },
    {
      kanji: "端",
      meaning: "border, cape, edge, end, origin, point, verge",
    },
    {
      kanji: "納",
      meaning: "obtain, pay, reap, settlement, store, supply",
    },
    {
      kanji: "炉",
      meaning: "furnace, hearth, kiln, reactor",
    },
    {
      kanji: "畝",
      meaning: "furrow, rib, ridge, thirty tsubo",
    },
    {
      kanji: "推",
      meaning: "conjecture, guess, infer, push (for), support, suppose",
    },
    {
      kanji: "妨",
      meaning: "disturb, hamper, obstruct, prevent",
    },
    {
      kanji: "浦",
      meaning: "bay, beach, creek, gulf, inlet, seacoast",
    },
    {
      kanji: "疾",
      meaning: "rapidly",
    },
    {
      kanji: "酔",
      meaning: "drunk, elated, feel sick, poisoned, spellbound",
    },
    {
      kanji: "誕",
      meaning: "be arbitrary, be born, declension, lie, nativity",
    },
    {
      kanji: "執",
      meaning: "grasp, take hold, take to heart, tenacious",
    },
    {
      kanji: "遂",
      meaning: "accomplish, attain, commit (suicide), consummate",
    },
    {
      kanji: "鍛",
      meaning: "discipline, forge, train",
    },
    {
      kanji: "露",
      meaning: "Russia, dew, expose, tears",
    },
    {
      kanji: "呉",
      meaning: "do something for, give, kingdom of Wu",
    },
    {
      kanji: "睡",
      meaning: "die, drowsy, sleep",
    },
    {
      kanji: "房",
      meaning:
        "bunch, fringe, house, lock (hair), room, segment (orange), tassel, tuft",
    },
    {
      kanji: "亀",
      meaning: "tortoise, turtle",
    },
    {
      kanji: "穂",
      meaning: "crest (wave), ear, ear (grain), head",
    },
    {
      kanji: "把",
      meaning: "bunch, counter for bundles, faggot, grasp",
    },
    {
      kanji: "肪",
      meaning: "fat, obese",
    },
    {
      kanji: "娯",
      meaning: "pleasure, recreation",
    },
    {
      kanji: "漆",
      meaning: "lacquer, seven, varnish",
    },
    {
      kanji: "随",
      meaning:
        "all, at the mercy of (the waves), both, comply, during, follow, notwithstanding, obey, submit to, though, while",
    },
    {
      kanji: "某",
      meaning: "a certain, one, so-and-so, that person",
    },
    {
      kanji: "幾",
      meaning: "how far, how long, how many, how much, several, some",
    },
    {
      kanji: "悟",
      meaning: "discern, enlightenment, perceive, realize, understand",
    },
    {
      kanji: "髄",
      meaning: "essence, marrow, pith",
    },
    {
      kanji: "派",
      meaning: "clique, faction, group, party, school, sect",
    },
    {
      kanji: "冒",
      meaning: "assume (a name), damage, dare, defy, face, risk",
    },
    {
      kanji: "郎",
      meaning: "counter for sons, son",
    },
    {
      kanji: "揮",
      meaning: "brandish, shake, swing, wag, wave",
    },
    {
      kanji: "碁",
      meaning: "Go",
    },
    {
      kanji: "枢",
      meaning: "center of things, door, hinge, pivot",
    },
    {
      kanji: "弾",
      meaning: "bullet, flip, snap, twang",
    },
    {
      kanji: "剖",
      meaning: "divide",
    },
    {
      kanji: "朗",
      meaning: "bright, cheerful, clear, melodious, serene",
    },
    {
      kanji: "芝",
      meaning: "lawn, turf",
    },
    {
      kanji: "崇",
      meaning: "adore, respect, revere, worship",
    },
    {
      kanji: "暖",
      meaning: "warmth",
    },
    {
      kanji: "覇",
      meaning: "champion, hegemony, leadership, supremacy",
    },
    {
      kanji: "紡",
      meaning: "spinning",
    },
    {
      kanji: "浪",
      meaning: "billows, reckless, unrestrained, wandering, waves",
    },
    {
      kanji: "棋",
      meaning: "Japanese chess, chess piece, shogi",
    },
    {
      kanji: "廊",
      meaning: "corridor, hall, tower",
    },
    {
      kanji: "詠",
      meaning: "composing, poem, recitation, song",
    },
    {
      kanji: "貴",
      meaning: "esteem, honor, precious, prize, value",
    },
    {
      kanji: "護",
      meaning: "protect, safeguard",
    },
    {
      kanji: "据",
      meaning: "equip, install, lay a foundation, set, sit down, squat down",
    },
    {
      kanji: "壇",
      meaning: "podium, rostrum, stage, terrace",
    },
    {
      kanji: "婆",
      meaning: "grandma, old woman, wet nurse",
    },
    {
      kanji: "傍",
      meaning: "besides, bystander, nearby, side, third person, while",
    },
    {
      kanji: "楼",
      meaning: "high building, lookout, watchtower",
    },
    {
      kanji: "影",
      meaning: "phantom, shadow, silhouette",
    },
    {
      kanji: "棄",
      meaning: "abandon, discard, reject, resign, sacrifice, throw away",
    },
    {
      kanji: "杉",
      meaning: "cedar, cryptomeria",
    },
    {
      kanji: "漏",
      meaning: "escape, leak, time",
    },
    {
      kanji: "舎",
      meaning: "cottage, house, hut, inn, mansion",
    },
    {
      kanji: "衛",
      meaning: "defense, protection",
    },
    {
      kanji: "旗",
      meaning: "banner, national flag, standard",
    },
    {
      kanji: "寸",
      meaning: "a little, measurement, small, tenth of a shaku",
    },
    {
      kanji: "器",
      meaning:
        "ability, container, implement, instrument, receptacle, set, tool, utensil, vessel",
    },
    {
      kanji: "射",
      meaning: "archery, onto, shine into, shoot",
    },
    {
      kanji: "瀬",
      meaning: "current, rapids, shallows, shoal, torrent",
    },
    {
      kanji: "疫",
      meaning: "epidemic",
    },
    {
      kanji: "孔",
      meaning: "cavity, exceedingly, great, hole, slit, very",
    },
    {
      kanji: "是",
      meaning: "just so, justice, right, this",
    },
    {
      kanji: "肺",
      meaning: "lungs",
    },
    {
      kanji: "益",
      meaning: "advantage, benefit, gain, profit",
    },
    {
      kanji: "輝",
      meaning: "gleam, radiance, shine, sparkle, twinkle",
    },
    {
      kanji: "功",
      meaning: "achievement, credit, honor, merits, success",
    },
    {
      kanji: "赦",
      meaning: "forgiveness, pardon",
    },
    {
      kanji: "井",
      meaning: "community, town, well, well crib",
    },
    {
      kanji: "致",
      meaning: "cause, do, doth, engage, exert, forward, incur, send",
    },
    {
      kanji: "俳",
      meaning: "actor, haiku",
    },
    {
      kanji: "膨",
      meaning: "get fat, swell, thick",
    },
    {
      kanji: "巧",
      meaning: "adroit, ingenuity, skilled",
    },
    {
      kanji: "斜",
      meaning: "diagonal, oblique, slanting",
    },
    {
      kanji: "謀",
      meaning:
        "cheat, conspire, deceive, devise, have in mind, impose on, plan, scheme",
    },
    {
      kanji: "騎",
      meaning: "counter for equestrians, equestrian, riding on horses",
    },
    {
      kanji: "煮",
      meaning: "boil, cook",
    },
    {
      kanji: "痴",
      meaning: "foolish, stupid",
    },
    {
      kanji: "排",
      meaning: "arrange, exclude, expel, line up, reject, repudiate",
    },
    {
      kanji: "悦",
      meaning: "ecstasy, joy, rapture",
    },
    {
      kanji: "甲",
      meaning:
        "A grade, armor, carapace, first class, former, high (voice), instep",
    },
    {
      kanji: "遮",
      meaning: "intercept, interrupt, obstruct",
    },
    {
      kanji: "稚",
      meaning: "immature, young",
    },
    {
      kanji: "賄",
      meaning: "board, bribe, finance, supply",
    },
    {
      kanji: "宜",
      meaning: "best regards, good",
    },
    {
      kanji: "謝",
      meaning: "apologize, refuse, thank",
    },
    {
      kanji: "廃",
      meaning: "abandon, abolish, cessation, discarding, obsolete",
    },
    {
      kanji: "謁",
      meaning: "audience, audience (with king)",
    },
    {
      kanji: "偽",
      meaning: "counterfeit, deceive, falsehood, forgery, lie, pretend",
    },
    {
      kanji: "邪",
      meaning: "injustice, wicked, wrong",
    },
    {
      kanji: "輩",
      meaning: "companions, comrade, fellow, people",
    },
    {
      kanji: "朴",
      meaning: "crude, docile, plain, simple",
    },
    {
      kanji: "惑",
      meaning: "beguile, delusion, perplexity",
    },
    {
      kanji: "閲",
      meaning: "inspection, review, revision",
    },
    {
      kanji: "欺",
      meaning: "cheat, deceit, delude",
    },
    {
      kanji: "蛇",
      meaning: "hard drinker, serpent, snake",
    },
    {
      kanji: "牧",
      meaning: "breed, care for, feed, pasture, shepherd",
    },
    {
      kanji: "枠",
      meaning: "(kokuji), bounding-box, frame, framework, spindle, spool",
    },
    {
      kanji: "義",
      meaning: "honor, justice, loyalty, meaning, morality, righteousness",
    },
    {
      kanji: "后",
      meaning: "after, back, behind, empress, later, queen",
    },
    {
      kanji: "尺",
      meaning: "Japanese foot, measure, rule, scale, shaku",
    },
    {
      kanji: "睦",
      meaning: "friendly, harmonious, intimate",
    },
    {
      kanji: "逐",
      meaning: "accomplish, attain, chase, commit, drive away, pursue",
    },
    {
      kanji: "梅",
      meaning: "plum",
    },
    {
      kanji: "僕",
      meaning: "I (male), manservant, me, servant",
    },
    {
      kanji: "沿",
      meaning: "follow along, lie along, run along, run alongside",
    },
    {
      kanji: "儀",
      meaning: "a matter, affair, case, ceremony, rule",
    },
    {
      kanji: "江",
      meaning: "bay, creek, inlet",
    },
    {
      kanji: "酌",
      meaning:
        "bar-tending, draw (water), ladle, pump, scoop, serving sake, the host",
    },
    {
      kanji: "征",
      meaning: "attack the rebellious, collect taxes, subjugate",
    },
    {
      kanji: "蓄",
      meaning: "amass, hoard, raise, store",
    },
    {
      kanji: "培",
      meaning: "cultivate, foster",
    },
    {
      kanji: "墨",
      meaning: "India ink, Mexico, black ink, ink stick",
    },
    {
      kanji: "炎",
      meaning: "blaze, flame, inflammation",
    },
    {
      kanji: "戯",
      meaning: "frolic, play, sport",
    },
    {
      kanji: "釈",
      meaning: "explanation",
    },
    {
      kanji: "陪",
      meaning: "accompany, attend on, follow, obeisance",
    },
    {
      kanji: "撲",
      meaning: "beat, hit, slap, speak, strike, tell",
    },
    {
      kanji: "擬",
      meaning: "aim (a gun) at, imitate, mimic, nominate",
    },
    {
      kanji: "爵",
      meaning: "baron, court rank, peerage",
    },
    {
      kanji: "秩",
      meaning: "order, regularity, salary",
    },
    {
      kanji: "媒",
      meaning: "go-between, mediator",
    },
    {
      kanji: "没",
      meaning: "die, disappear, drown, fall into, hide, sink",
    },
    {
      kanji: "宴",
      meaning: "banquet, feast, party",
    },
    {
      kanji: "犠",
      meaning: "sacrifice",
    },
    {
      kanji: "坑",
      meaning: "hole, pit",
    },
    {
      kanji: "斉",
      meaning: "adjusted, alike, equal, similar variety of",
    },
    {
      kanji: "窒",
      meaning: "obstruct, plug up",
    },
    {
      kanji: "媛",
      meaning: "beautiful woman, princess",
    },
    {
      kanji: "孝",
      meaning: "child's respect, filial piety",
    },
    {
      kanji: "賠",
      meaning: "compensation, indemnify",
    },
    {
      kanji: "堀",
      meaning: "canal, ditch, moat",
    },
    {
      kanji: "援",
      meaning: "abet, help, save",
    },
    {
      kanji: "菊",
      meaning: "chrysanthemum",
    },
    {
      kanji: "抗",
      meaning: "confront, defy, oppose, resist",
    },
    {
      kanji: "寂",
      meaning: "death of a priest, loneliness, mature, mellow, quietly",
    },
    {
      kanji: "吉",
      meaning: "congratulations, good luck, joy",
    },
    {
      kanji: "攻",
      meaning: "aggression, attack, criticize, polish",
    },
    {
      kanji: "牲",
      meaning: "animal sacrifice, offering",
    },
    {
      kanji: "嫡",
      meaning: "direct descent (non-bastard), legitimate wife",
    },
    {
      kanji: "伯",
      meaning: "Brazil, chief, count, earl, uncle",
    },
    {
      kanji: "奔",
      meaning: "bustle, run",
    },
    {
      kanji: "拍",
      meaning: "beat (music), clap",
    },
    {
      kanji: "翻",
      meaning: "change (mind), flip, flutter, turn over, wave",
    },
    {
      kanji: "猿",
      meaning: "monkey",
    },
    {
      kanji: "凡",
      meaning: "commonplace, mediocre, ordinary",
    },
    {
      kanji: "却",
      meaning: "instead, on the contrary, rather, retreat, step back, withdraw",
    },
    {
      kanji: "朱",
      meaning: "bloody, cinnabar, red, scarlet, vermilion",
    },
    {
      kanji: "逝",
      meaning: "departed, die",
    },
    {
      kanji: "迫",
      meaning: "force, imminent, spur on, urge",
    },
    {
      kanji: "盆",
      meaning: "basin, lantern festival, tray",
    },
    {
      kanji: "鉛",
      meaning: "lead",
    },
    {
      kanji: "拘",
      meaning: "adhere to, arrest, concerned, despite, seize",
    },
    {
      kanji: "沖",
      meaning: "offing, open sea, rise high into sky",
    },
    {
      kanji: "麻",
      meaning: "flax, hemp, numb",
    },
    {
      kanji: "脚",
      meaning: "base, leg, lower part, skids, undercarriage",
    },
    {
      kanji: "狩",
      meaning: "gather, hunt, raid",
    },
    {
      kanji: "盛",
      meaning: "boom, copulate, prosper",
    },
    {
      kanji: "宙",
      meaning: "air, interval of time, memorization, mid-air, sky, space",
    },
    {
      kanji: "舶",
      meaning: "liner, ship",
    },
    {
      kanji: "摩",
      meaning: "chafe, grind, polish, rub, scrape",
    },
    {
      kanji: "侯",
      meaning: "daimyo, lord, marquis",
    },
    {
      kanji: "婿",
      meaning: "bridegroom, son-in-law",
    },
    {
      kanji: "忠",
      meaning: "faithfulness, fidelity, loyalty",
    },
    {
      kanji: "博",
      meaning: "Dr., Ph.D., command, esteem, exposition, fair, win acclaim",
    },
    {
      kanji: "縁",
      meaning: "affinity, border, brink, connection, edge, relation, verge",
    },
    {
      kanji: "虐",
      meaning: "oppress, tyrannize",
    },
    {
      kanji: "殊",
      meaning: "especially, exceptionally, particularly",
    },
    {
      kanji: "抽",
      meaning: "excel, extract, pluck, pull",
    },
    {
      kanji: "魔",
      meaning: "demon, evil spirit, witch",
    },
    {
      kanji: "艶",
      meaning: "captivating, charm, colorful, glaze, glossy, luster, polish",
    },
    {
      kanji: "恒",
      meaning: "always, constancy",
    },
    {
      kanji: "珠",
      meaning: "gem, jewel, pearl",
    },
    {
      kanji: "洪",
      meaning: "deluge, flood, vast",
    },
    {
      kanji: "聖",
      meaning: "holy, master, priest, sage, saint",
    },
    {
      kanji: "漠",
      meaning: "desert, obscure, vague, wide",
    },
    {
      kanji: "及",
      meaning: "cause, exercise, exert, reach out",
    },
    {
      kanji: "皇",
      meaning: "emperor",
    },
    {
      kanji: "誠",
      meaning: "admonish, fidelity, prohibit, sincerity, truth, warn",
    },
    {
      kanji: "縛",
      meaning: "arrest, bind, restrain, tie, truss",
    },
    {
      kanji: "凹",
      meaning: "concave, hollow, sunken",
    },
    {
      kanji: "弓",
      meaning: "bow, bow (archery, violin)",
    },
    {
      kanji: "衷",
      meaning: "heart, inmost, inside, mind",
    },
    {
      kanji: "丘",
      meaning: "hill, knoll",
    },
    {
      kanji: "趣",
      meaning: "become, elegance, gist, interest, proceed to, purport, tend",
    },
    {
      kanji: "製",
      meaning: "made in..., manufacture",
    },
    {
      kanji: "誓",
      meaning: "pledge, swear, vow",
    },
    {
      kanji: "鋳",
      meaning: "casting, mint",
    },
    {
      kanji: "幕",
      meaning: "act of play, bunting, curtain",
    },
    {
      kanji: "往",
      meaning: "before, chase away, formerly, going, journey, let go, travel",
    },
    {
      kanji: "膜",
      meaning: "membrane",
    },
    {
      kanji: "請",
      meaning: "ask, invite, solicit",
    },
    {
      kanji: "旺",
      meaning: "beautiful, flourishing, successful, vigorous",
    },
    {
      kanji: "朽",
      meaning: "decay, remain in seclusion, rot",
    },
    {
      kanji: "又",
      meaning: "furthermore, on the other hand, or again",
    },
    {
      kanji: "需",
      meaning: "demand, need, request",
    },
    {
      kanji: "丁",
      meaning:
        "4th calendar sign, counter for guns, tools, leaves or cakes of something, even number, street, town, ward",
    },
    {
      kanji: "鉢",
      meaning: "bowl, crown, pot, rice tub",
    },
    {
      kanji: "殴",
      meaning: "assault, beat, hit, thrash",
    },
    {
      kanji: "儒",
      meaning: "Confucian",
    },
    {
      kanji: "弔",
      meaning: "condolences, funeral, mourning",
    },
    {
      kanji: "抹",
      meaning: "erase, paint, rub",
    },
    {
      kanji: "桜",
      meaning: "cherry",
    },
    {
      kanji: "貢",
      meaning: "finance, support, tribute",
    },
    {
      kanji: "樹",
      meaning: "establish, set up, timber, trees, wood",
    },
    {
      kanji: "翁",
      meaning: "venerable old man",
    },
    {
      kanji: "泣",
      meaning: "cry, moan, weep",
    },
    {
      kanji: "斥",
      meaning: "recede, reject, repel, repulse, retreat, withdraw",
    },
    {
      kanji: "伐",
      meaning: "attack, fell, punish, strike",
    },
    {
      kanji: "囚",
      meaning: "arrest, captured, catch, criminal",
    },
    {
      kanji: "慢",
      meaning: "laziness, ridicule",
    },
    {
      kanji: "級",
      meaning: "class, grade, rank",
    },
    {
      kanji: "罰",
      meaning: "penalty, punishment",
    },
    {
      kanji: "漫",
      meaning:
        "cartoon, corrupt, in spite of oneself, involuntarily, unrestrained",
    },
    {
      kanji: "岡",
      meaning: "hill, knoll, mount",
    },
    {
      kanji: "糾",
      meaning: "ask, investigate, twist, verify",
    },
    {
      kanji: "控",
      meaning: "be moderate, draw in, hold back, refrain from, withdraw",
    },
    {
      kanji: "挑",
      meaning: "challenge, contend for, make love to",
    },
    {
      kanji: "閥",
      meaning: "clan, clique, faction, lineage, pedigree",
    },
    {
      kanji: "宮",
      meaning: "Shinto shrine, constellations, palace, princess",
    },
    {
      kanji: "秀",
      meaning: "beauty, excel, excellence, surpass",
    },
    {
      kanji: "析",
      meaning: "analyze, chop, divide, tear",
    },
    {
      kanji: "帳",
      meaning: "account book, album, curtain, net, notebook, tent, veil",
    },
    {
      kanji: "救",
      meaning: "help, reclaim, rescue, salvation, save",
    },
    {
      kanji: "魅",
      meaning: "bewitch, charm, fascination",
    },
    {
      kanji: "憶",
      meaning: "recollection, remember, think",
    },
    {
      kanji: "宗",
      meaning: "denomination, essence, main point, origin, religion, sect",
    },
    {
      kanji: "彫",
      meaning: "carve, chisel, engrave",
    },
    {
      kanji: "岬",
      meaning: "cape, headland, promontory, spit",
    },
    {
      kanji: "隻",
      meaning: "arrows, birds, counter for ships, fish, one of a pair, vessels",
    },
    {
      kanji: "眺",
      meaning: "look at, scrutinize, see, stare, watch",
    },
    {
      kanji: "密",
      meaning: "carefulness, density (pop), minuteness, secrecy",
    },
    {
      kanji: "虞",
      meaning: "anxiety, concern, consideration, expectation, fear, uneasiness",
    },
    {
      kanji: "惜",
      meaning: "be sparing of, frugal, pity, regret, stingy",
    },
    {
      kanji: "釣",
      meaning: "allure, angling, catch, ensnare, fish",
    },
    {
      kanji: "帆",
      meaning: "sail",
    },
    {
      kanji: "乙",
      meaning:
        "duplicate, fishhook radical (no. 5), strange, the latter, witty",
    },
    {
      kanji: "窮",
      meaning: "cornered, destitute, hard up, perplexed, suffer",
    },
    {
      kanji: "臭",
      meaning:
        "be bright, be fragrant, fragrance, glow, ill-smelling, odor, savor, stink, stinking, suspicious looking",
    },
    {
      kanji: "脈",
      meaning: "hope, pulse, vein",
    },
    {
      kanji: "絞",
      meaning: "constrict, strangle, wring",
    },
    {
      kanji: "伴",
      meaning: "accompany, bring with, companion, consort",
    },
    {
      kanji: "妙",
      meaning:
        "charming, delicate, excellent, exquisite, miracle, mystery, queer, strange",
    },
    {
      kanji: "卸",
      meaning: "wholesale",
    },
    {
      kanji: "項",
      meaning: "clause, item, nape of neck, paragraph, term (expression)",
    },
    {
      kanji: "跡",
      meaning: "impression, mark, print, tracks",
    },
    {
      kanji: "溝",
      meaning: "10**32, ditch, drain, gutter, sewer",
    },
    {
      kanji: "恩",
      meaning: "benefit, blessing, favor, goodness, grace, kindness, mercy",
    },
    {
      kanji: "矛",
      meaning: "arms, festival float, halberd",
    },
    {
      kanji: "拒",
      meaning: "decline, refuse, reject, repel",
    },
    {
      kanji: "籍",
      meaning: "domiciliary register, enroll, membership",
    },
    {
      kanji: "腸",
      meaning: "bowels, guts, intestines, viscera",
    },
    {
      kanji: "穏",
      meaning: "calm, moderation, quiet",
    },
    {
      kanji: "拠",
      meaning: "based on, follow, foothold, therefore",
    },
    {
      kanji: "綱",
      meaning: "cable, class (genus), cord, hawser, rope",
    },
    {
      kanji: "跳",
      meaning:
        "buck, hop, jerk, leap up, prance, snap, splash, spring, sputter",
    },
    {
      kanji: "挙",
      meaning: "actions, behavior, plan, project, raise",
    },
    {
      kanji: "酵",
      meaning: "fermentation",
    },
    {
      kanji: "就",
      meaning: "concerning, depart, per, settle, study, take position",
    },
    {
      kanji: "徴",
      meaning:
        "collect, indications, omen, question, refer to, seek, sign, symptom",
    },
    {
      kanji: "班",
      meaning: "corps, group, squad, unit",
    },
    {
      kanji: "虚",
      meaning: "crack, emptiness, fissure, unpreparedness, untruth, void",
    },
    {
      kanji: "稿",
      meaning: "copy, draft, manuscript, straw",
    },
    {
      kanji: "衆",
      meaning: "great numbers, masses, multitude, populace",
    },
    {
      kanji: "拙",
      meaning: "bungling, clumsy, unskillful",
    },
    {
      kanji: "畔",
      meaning: "levee, paddy ridge",
    },
    {
      kanji: "霧",
      meaning: "fog, mist",
    },
    {
      kanji: "興",
      meaning: "entertain, interest, pleasure, retrieve, revive",
    },
    {
      kanji: "窃",
      meaning: "hushed, private, secret, steal, stealth",
    },
    {
      kanji: "潮",
      meaning: "opportunity, salt water, tide",
    },
    {
      kanji: "距",
      meaning: "fetlock, long-distance, spur",
    },
    {
      kanji: "衡",
      meaning: "equilibrium, measuring rod, scale",
    },
    {
      kanji: "愁",
      meaning: "be anxious, distress, grieve, lament",
    },
    {
      kanji: "澄",
      meaning: "be clear, clarify, clear, look grave, lucidity, settle, strain",
    },
    {
      kanji: "鋼",
      meaning: "steel",
    },
    {
      kanji: "酬",
      meaning: "repay, retribution, reward",
    },
    {
      kanji: "醜",
      meaning: "bad looking, shame, ugly, unclean",
    },
    {
      kanji: "聴",
      meaning: "careful inquiry, headstrong, listen, naughty",
    },
    {
      kanji: "購",
      meaning: "buy, subscription",
    },
    {
      kanji: "摂",
      meaning: "absorb, act in addition to, surrogate, take in, vicarious",
    },
    {
      kanji: "懲",
      meaning: "chastise, discipline, penal, punish",
    },
    {
      kanji: "搬",
      meaning: "carry, conveyor, transport",
    },
    {
      kanji: "凶",
      meaning: "bad luck, disaster, evil, villain",
    },
    {
      kanji: "襲",
      meaning: "advance on, attack, heap, pile, succeed to",
    },
    {
      kanji: "煩",
      meaning: "annoy, anxiety, ill, irksome, nuisance, pain, trouble, worry",
    },
    {
      kanji: "佳",
      meaning: "beautiful, excellent, good, pleasing, skilled",
    },
    {
      kanji: "勅",
      meaning: "imperial order",
    },
    {
      kanji: "頒",
      meaning: "disseminate, distribute, partition, understand",
    },
    {
      kanji: "盟",
      meaning: "alliance, oath",
    },
    {
      kanji: "汁",
      meaning: "broth, gravy, juice, pus, sap, soup",
    },
    {
      kanji: "舌",
      meaning: "clapper, reed, tongue",
    },
    {
      kanji: "範",
      meaning: "example, model, pattern",
    },
    {
      kanji: "銘",
      meaning: "inscription, signature (of artisan)",
    },
    {
      kanji: "狂",
      meaning: "confuse, crazy, insane, lunatic",
    },
    {
      kanji: "拷",
      meaning: "beat, torture",
    },
    {
      kanji: "充",
      meaning: "allot, fill",
    },
    {
      kanji: "繁",
      meaning: "complexity, frequency, luxuriant, overgrown, thick, trouble",
    },
    {
      kanji: "剛",
      meaning: "strength, sturdy",
    },
    {
      kanji: "藩",
      meaning: "clan, enclosure",
    },
    {
      kanji: "滅",
      meaning: "destroy, overthrow, perish, ruin",
    },
    {
      kanji: "享",
      meaning: "answer (phone), catch, enjoy, get, receive, take, undergo",
    },
    {
      kanji: "朕",
      meaning: "imperial we, majestic plural",
    },
    {
      kanji: "免",
      meaning: "dismissal, excuse",
    },
    {
      kanji: "豪",
      meaning: "Australia, excelling, great, overpowering, powerful",
    },
    {
      kanji: "仙",
      meaning: "cent, hermit, wizard",
    },
    {
      kanji: "陳",
      meaning: "exhibit, explain, relate, state",
    },
    {
      kanji: "架",
      meaning: "construct, erect, frame, mount, shelf, support",
    },
    {
      kanji: "克",
      meaning: "kindly, overcome, skillfully",
    },
    {
      kanji: "従",
      meaning:
        "accompany, comply, follow, incidental, obey, secondary, submit to, subordinate",
    },
    {
      kanji: "蛮",
      meaning: "barbarian",
    },
    {
      kanji: "渋",
      meaning: "astringent, have diarrhea, hesitate, reluctant",
    },
    {
      kanji: "鎮",
      meaning: "ancient peace-preservation centers, tranquilize",
    },
    {
      kanji: "盤",
      meaning: "board, phonograph record, platter, shallow bowl, tray, tub",
    },
    {
      kanji: "峡",
      meaning: "gorge, ravine",
    },
    {
      kanji: "銃",
      meaning: "arms, gun",
    },
    {
      kanji: "宣",
      meaning: "announce, proclaim, say",
    },
    {
      kanji: "茂",
      meaning: "be luxuriant, grow thick, overgrown",
    },
    {
      kanji: "獣",
      meaning: "animal, beast",
    },
    {
      kanji: "椎",
      meaning: "chinquapin, mallet, spine",
    },
    {
      kanji: "模",
      meaning: "copy, imitation, mock",
    },
    {
      kanji: "華",
      meaning:
        "flower, gay, gorgeous, luster, ostentatious, petal, shine, showy, splendor",
    },
    {
      kanji: "狭",
      meaning: "contract, cramped, narrow, tight",
    },
    {
      kanji: "縦",
      meaning: "height, length, self-indulgent, vertical, wayward",
    },
    {
      kanji: "墜",
      meaning: "crash, fall (down)",
    },
    {
      kanji: "妃",
      meaning: "princess, queen",
    },
    {
      kanji: "叔",
      meaning: "uncle, youth",
    },
    {
      kanji: "妄",
      meaning: "delusion, reckless, unnecessarily, without authority",
    },
    {
      kanji: "恭",
      meaning: "respect, reverent",
    },
    {
      kanji: "穀",
      meaning: "cereals, grain",
    },
    {
      kanji: "盲",
      meaning: "blind, blind man, ignoramus",
    },
    {
      kanji: "渦",
      meaning: "eddy, vortex, whirlpool",
    },
    {
      kanji: "酷",
      meaning: "atrocious, cruel, severe, unjust",
    },
    {
      kanji: "染",
      meaning: "color, dye, paint, print, stain",
    },
    {
      kanji: "塚",
      meaning: "hillock, mound",
    },
    {
      kanji: "耗",
      meaning: "decrease",
    },
    {
      kanji: "脅",
      meaning: "coerce, threaten",
    },
    {
      kanji: "獄",
      meaning: "jail, prison",
    },
    {
      kanji: "淑",
      meaning: "gentle, graceful, pure",
    },
    {
      kanji: "扇",
      meaning: "fan, folding fan",
    },
    {
      kanji: "漬",
      meaning: "moisten, pickling, soak, steep",
    },
    {
      kanji: "披",
      meaning: "expose, open",
    },
    {
      kanji: "猛",
      meaning: "become furious, fierce, rave, rush, strength, wildness",
    },
    {
      kanji: "嫁",
      meaning: "bride, marry into",
    },
    {
      kanji: "粛",
      meaning: "quietly, softly, solemn",
    },
    {
      kanji: "栓",
      meaning: "bolt, bung, cork, plug, stopper",
    },
    {
      kanji: "坪",
      meaning: "approx. thirty-six sq ft, two-mat area",
    },
    {
      kanji: "肥",
      meaning: "fertile, fertilizer, get fat, manure, pamper",
    },
    {
      kanji: "網",
      meaning: "netting, network",
    },
    {
      kanji: "暇",
      meaning: "leave of absence, leisure, rest, spare time, time",
    },
    {
      kanji: "駒",
      meaning: "colt, horse, pony",
    },
    {
      kanji: "縮",
      meaning: "contract, reduce, shrink, shrivel, wrinkle",
    },
    {
      kanji: "旋",
      meaning: "go around, rotation",
    },
    {
      kanji: "禍",
      meaning: "calamity, curse, evil, misfortune",
    },
    {
      kanji: "郷",
      meaning: "district, home town, native place, village",
    },
    {
      kanji: "塾",
      meaning: "cram school, private school",
    },
    {
      kanji: "鶴",
      meaning: "crane, stork",
    },
    {
      kanji: "卑",
      meaning: "base, despise, lowly, vile, vulgar",
    },
    {
      kanji: "黙",
      meaning: "become silent, leave as is, silence, stop speaking",
    },
    {
      kanji: "熟",
      meaning: "acquire skill, mature, mellow, ripen",
    },
    {
      kanji: "寡",
      meaning: "few, minority, widow",
    },
    {
      kanji: "呈",
      meaning: "display, exhibit, offer, present, send",
    },
    {
      kanji: "紋",
      meaning: "family crest, figures",
    },
    {
      kanji: "矯",
      meaning:
        "control, correct, cure, falsify, pretend, rectify, reform, straighten",
    },
    {
      kanji: "廷",
      meaning: "courts, government office, imperial court",
    },
    {
      kanji: "秘",
      meaning: "conceal, secret",
    },
    {
      kanji: "箇",
      meaning: "counter for articles",
    },
    {
      kanji: "鏡",
      meaning: "barrel-head, mirror, round rice-cake offering, speculum",
    },
    {
      kanji: "昆",
      meaning: "descendants, elder brother, insect",
    },
    {
      kanji: "冶",
      meaning: "melting, smelting",
    },
    {
      kanji: "稼",
      meaning: "earn money, earnings, work",
    },
    {
      kanji: "恨",
      meaning: "bear a grudge, hatred, malice, regret, resentment",
    },
    {
      kanji: "俊",
      meaning: "excellence, genius, sagacious",
    },
    {
      kanji: "響",
      meaning: "echo, resound, ring, sound, vibrate",
    },
    {
      kanji: "践",
      meaning: "carry through, practice, step on, trample, tread",
    },
    {
      kanji: "扉",
      meaning: "front door, front page, title page",
    },
    {
      kanji: "蚊",
      meaning: "mosquito",
    },
    {
      kanji: "驚",
      meaning: "amazed, be surprised, frightened, wonder",
    },
    {
      kanji: "瞬",
      meaning: "blink, twinkle, wink",
    },
    {
      kanji: "抵",
      meaning: "reach, resist, touch",
    },
    {
      kanji: "弥",
      meaning: "all the more, increasingly",
    },
    {
      kanji: "仰",
      meaning: "depend, drink, face-up, look up, respect, revere, seek, take",
    },
    {
      kanji: "旬",
      meaning: "decameron, season (for specific products), ten-day period",
    },
    {
      kanji: "銭",
      meaning: ".01 yen, coin, money",
    },
    {
      kanji: "邸",
      meaning: "mansion, residence",
    },
    {
      kanji: "碑",
      meaning: "monument, tombstone",
    },
    {
      kanji: "厄",
      meaning: "bad luck, disaster, misfortune, unlucky",
    },
    {
      kanji: "暁",
      meaning: "dawn, daybreak, in the event",
    },
    {
      kanji: "巡",
      meaning: "circumference, go around, patrol",
    },
    {
      kanji: "潜",
      meaning: "conceal, hide, hush, lower (voice), submerge",
    },
    {
      kanji: "亭",
      meaning:
        "arbor, cottage, mansion, music hall, pavilion, restaurant, stage name, vaudeville",
    },
    {
      kanji: "罷",
      meaning: "go, leave, quit, stop, withdraw",
    },
    {
      kanji: "我",
      meaning: "I, ego, oneself, our, selfish",
    },
    {
      kanji: "紺",
      meaning: "dark blue, navy",
    },
    {
      kanji: "盾",
      meaning: "escutcheon, pretext, shield",
    },
    {
      kanji: "貞",
      meaning: "chastity, constancy, righteousness, upright",
    },
    {
      kanji: "避",
      meaning: "avert, avoid, evade, shirk, shun, ward off",
    },
    {
      kanji: "凝",
      meaning: "be absorbed in, congeal, freeze, stiff",
    },
    {
      kanji: "魂",
      meaning: "soul, spirit",
    },
    {
      kanji: "准",
      meaning: "associate, quasi-, semi-",
    },
    {
      kanji: "遷",
      meaning: "change, move, transition",
    },
    {
      kanji: "帝",
      meaning: "creator, god, sovereign, the emperor",
    },
    {
      kanji: "尾",
      meaning: "counter for fish, end, lower slope of mountain, tail",
    },
    {
      kanji: "訳",
      meaning: "case, circumstance, reason, translate",
    },
    {
      kanji: "芽",
      meaning: "bud, germ, spear, sprout",
    },
    {
      kanji: "墾",
      meaning: "ground-breaking, open up farmland",
    },
    {
      kanji: "殉",
      meaning: "follow by resigning, martyrdom",
    },
    {
      kanji: "訂",
      meaning: "correct, decide, revise",
    },
    {
      kanji: "眉",
      meaning: "eyebrow",
    },
    {
      kanji: "賀",
      meaning: "congratulations, joy",
    },
    {
      kanji: "懇",
      meaning: "cordial, courteous, hospitable, kind, sociable",
    },
    {
      kanji: "薦",
      meaning: "advise, encourage, mat, offer, recommend",
    },
    {
      kanji: "躍",
      meaning: "dance, leap, skip",
    },
    {
      kanji: "雅",
      meaning: "elegant, graceful, gracious, refined",
    },
    {
      kanji: "循",
      meaning: "follow, sequential",
    },
    {
      kanji: "繊",
      meaning: "fine, slender, thin kimono",
    },
    {
      kanji: "逓",
      meaning: "in turn, relay, sending",
    },
    {
      kanji: "餓",
      meaning: "hungry, starve, thirst",
    },
    {
      kanji: "佐",
      meaning: "assistant, help",
    },
    {
      kanji: "鮮",
      meaning: "Korea, brilliant, clear, fresh, vivid",
    },
    {
      kanji: "微",
      meaning: "delicate, insignificance, minuteness",
    },
    {
      kanji: "沙",
      meaning: "sand",
    },
    {
      kanji: "偵",
      meaning: "spy",
    },
    {
      kanji: "斤",
      meaning:
        "1.32 lb, axe, axe radical (no. 69), catty, counter for loaves of bread",
    },
    {
      kanji: "潤",
      meaning:
        "be watered, charm, favor, profit by, receive benefits, steep, wet",
    },
    {
      kanji: "堤",
      meaning: "bank, dike, embankment",
    },
    {
      kanji: "遵",
      meaning: "abide by, follow, learn, obey",
    },
    {
      kanji: "提",
      meaning: "carry in hand, propose, take along",
    },
    {
      kanji: "愉",
      meaning: "happy, pleasure, rejoice",
    },
    {
      kanji: "唆",
      meaning: "instigate, promote, seduce, tempt",
    },
    {
      kanji: "諭",
      meaning: "admonish, charge, persuade, rebuke, warn",
    },
    {
      kanji: "禅",
      meaning: "Zen, silent meditation",
    },
    {
      kanji: "艇",
      meaning: "rowboat, small boat",
    },
    {
      kanji: "戒",
      meaning: "commandment",
    },
    {
      kanji: "菌",
      meaning: "bacteria, fungus, germ",
    },
    {
      kanji: "詐",
      meaning: "deceive, falsehood, lie, pretend",
    },
    {
      kanji: "漸",
      meaning: "barely, finally, gradually advancing, steadily",
    },
    {
      kanji: "締",
      meaning: "fasten, lock, shut, tie, tighten",
    },
    {
      kanji: "泌",
      meaning: "flow, ooze, penetrate, secrete, soak in",
    },
    {
      kanji: "癒",
      meaning: "cure, healing, quench (thirst), wreak",
    },
    {
      kanji: "鎖",
      meaning: "chain, connection, irons",
    },
    {
      kanji: "唯",
      meaning: "merely, only, simply, solely",
    },
    {
      kanji: "怪",
      meaning: "apparition, mystery, suspicious",
    },
    {
      kanji: "琴",
      meaning: "harp, koto",
    },
    {
      kanji: "庶",
      meaning: "all, bastard, commoner",
    },
    {
      kanji: "繕",
      meaning: "adjust, darning, mend, repair, tidy up, trim",
    },
    {
      kanji: "姫",
      meaning: "princess",
    },
    {
      kanji: "拐",
      meaning: "falsify, kidnap",
    },
    {
      kanji: "筋",
      meaning: "descent, fiber, muscle, plan, plot, sinew, tendon",
    },
    {
      kanji: "狙",
      meaning: "aim at, shadow, sight, stalk",
    },
    {
      kanji: "悔",
      meaning: "regret, repent",
    },
    {
      kanji: "阻",
      meaning: "deter, impede, obstruct, prevent, separate from, thwart",
    },
    {
      kanji: "笛",
      meaning: "bagpipe, clarinet, flute, piccolo, pipe, whistle",
    },
    {
      kanji: "摘",
      meaning: "clip, pick, pinch, pluck, summarize, trim",
    },
    {
      kanji: "幽",
      meaning:
        "calm, confine to a room, dark, deep, faint, profound, seclude, secluded, tranquil",
    },
    {
      kanji: "緊",
      meaning: "hard, reliable, solid, tense, tight",
    },
    {
      kanji: "災",
      meaning: "calamity, curse, disaster, evil, woe",
    },
    {
      kanji: "租",
      meaning: "borrowing, crop tax, tariff",
    },
    {
      kanji: "俵",
      meaning: "bag, bale, counter for bags, sack",
    },
    {
      kanji: "悠",
      meaning: "distant, leisure, long time, permanence",
    },
    {
      kanji: "錦",
      meaning: "brocade, fine dress, honors",
    },
    {
      kanji: "素",
      meaning: "elementary, naked, principle, uncovered",
    },
    {
      kanji: "票",
      meaning: "ballot, label, sign, ticket",
    },
    {
      kanji: "謹",
      meaning: "discreet, humbly, reverently",
    },
    {
      kanji: "采",
      meaning: "appearance, coloring, dice, form, gather, take",
    },
    {
      kanji: "如",
      meaning: "as if, best, better, equal, like, likeness, such as",
    },
    {
      kanji: "措",
      meaning: "discontinue, except, give up, lay aside, set aside, suspend",
    },
    {
      kanji: "敵",
      meaning: "enemy, foe, opponent",
    },
    {
      kanji: "湧",
      meaning: "boil, breed, ferment, seethe, uproar",
    },
    {
      kanji: "襟",
      meaning: "collar, lapel, neck, one's inner feelings",
    },
    {
      kanji: "砕",
      meaning: "break, crush, familiar, popular, smash",
    },
    {
      kanji: "粗",
      meaning: "coarse, rough, rugged",
    },
    {
      kanji: "漂",
      meaning: "drift, float (on liquid)",
    },
    {
      kanji: "猶",
      meaning: "furthermore, still, yet",
    },
    {
      kanji: "吟",
      meaning: "recital, singing, versify",
    },
    {
      kanji: "宰",
      meaning: "manager, rule, superintend",
    },
    {
      kanji: "序",
      meaning:
        "beginning, chance, incidentally, occasion, order, precedence, preface",
    },
    {
      kanji: "迭",
      meaning: "alternation, transfer",
    },
    {
      kanji: "裕",
      meaning: "abundant, fertile, rich",
    },
    {
      kanji: "栽",
      meaning: "plantation, planting",
    },
    {
      kanji: "叙",
      meaning: "confer, describe, narrate, relate",
    },
    {
      kanji: "疎",
      meaning: "alienate, neglect, penetrate, rough, shun, sparse",
    },
    {
      kanji: "哲",
      meaning: "clear, philosophy",
    },
    {
      kanji: "苗",
      meaning: "sapling, seedling, shoot",
    },
    {
      kanji: "塊",
      meaning: "chunk, clod, clot, lump, mass",
    },
    {
      kanji: "彩",
      meaning: "coloring, makeup, paint",
    },
    {
      kanji: "徐",
      meaning: "deliberately, gently, gradually, slowly",
    },
    {
      kanji: "訴",
      meaning: "accusation, appeal to, complain of pain, sue",
    },
    {
      kanji: "雄",
      meaning: "excellence, hero, leader, male, masculine, superiority",
    },
    {
      kanji: "句",
      meaning:
        "clause, counter for haiku, paragraph, passage, phrase, sentence",
    },
    {
      kanji: "塑",
      meaning: "model, molding",
    },
    {
      kanji: "徹",
      meaning: "clear, penetrate, pierce, sit up (all night), strike home",
    },
    {
      kanji: "誘",
      meaning: "allure, ask, call for, entice, invite, lead, seduce, tempt",
    },
    {
      kanji: "撤",
      meaning: "disarm, dismantle, exclude, reject, remove, withdraw",
    },
    {
      kanji: "描",
      meaning: "compose, draw, paint, sketch, write",
    },
    {
      kanji: "憂",
      meaning: "be anxious, grieve, lament, melancholy, sad, unhappy",
    },
    {
      kanji: "駆",
      meaning: "advance, drive, gallop, impel, inspire, run",
    },
    {
      kanji: "升",
      meaning: "1.8 liter, measuring box",
    },
    {
      kanji: "礎",
      meaning: "cornerstone, foundation stone",
    },
    {
      kanji: "融",
      meaning: "dissolve, melt",
    },
    {
      kanji: "壊",
      meaning: "break, demolition, destroy",
    },
    {
      kanji: "斎",
      meaning: "Buddhist food, alike, avoid, purification, room, worship",
    },
    {
      kanji: "典",
      meaning: "ceremony, code, law, rule",
    },
    {
      kanji: "懐",
      meaning:
        "become attached to, bosom, breast, feelings, heart, miss someone, pocket, yearn",
    },
    {
      kanji: "壮",
      meaning: "manhood, prosperity, robust",
    },
    {
      kanji: "浜",
      meaning: "beach, seacoast, seashore",
    },
    {
      kanji: "愚",
      meaning: "absurdity, folly, foolish, stupid",
    },
    {
      kanji: "匠",
      meaning: "artisan, carpenter, workman",
    },
    {
      kanji: "賓",
      meaning: "V.I.P., guest",
    },
    {
      kanji: "裁",
      meaning: "cut out (pattern), decision, judge, tailor",
    },
    {
      kanji: "抄",
      meaning: "copy, extract, selection, spread thin, summary",
    },
    {
      kanji: "添",
      meaning:
        "accompany, annexed, append, attach, garnish, imitate, marry, meet, satisfy, suit",
    },
    {
      kanji: "頻",
      meaning: "recur, repeatedly",
    },
    {
      kanji: "誉",
      meaning: "glory, honor, praise, reputation",
    },
    {
      kanji: "劾",
      meaning: "censure, criminal investigation",
    },
    {
      kanji: "遇",
      meaning:
        "deal with, encounter, entertain, interview, meet, receive, treat",
    },
    {
      kanji: "債",
      meaning: "bond, debt, loan",
    },
    {
      kanji: "肖",
      meaning: "resemblance",
    },
    {
      kanji: "奏",
      meaning: "complete, play music, speak to a ruler",
    },
    {
      kanji: "敏",
      meaning: "agile, alert, cleverness",
    },
    {
      kanji: "催",
      meaning: "give (a dinner), hold (a meeting), sponsor",
    },
    {
      kanji: "尚",
      meaning: "esteem, furthermore, still, yet",
    },
    {
      kanji: "瓶",
      meaning: "bottle, jar, jug, urn, vat, vial",
    },
    {
      kanji: "荘",
      meaning: "cottage, dignified, feudal manor, inn, solemn, villa",
    },
    {
      kanji: "涯",
      meaning: "bound, horizon, limit, shore",
    },
    {
      kanji: "屈",
      meaning: "bend, flinch, submit, yield",
    },
    {
      kanji: "羊",
      meaning: "sheep",
    },
    {
      kanji: "街",
      meaning: "boulevard, street, town",
    },
    {
      kanji: "載",
      meaning: "10**44, board, get on, place, publish, record, ride, spread",
    },
    {
      kanji: "慨",
      meaning: "be sad, lament, rue, sigh",
    },
    {
      kanji: "松",
      meaning: "pine tree",
    },
    {
      kanji: "倉",
      meaning: "cellar, godown, storehouse, treasury, warehouse",
    },
    {
      kanji: "熊",
      meaning: "bear",
    },
    {
      kanji: "沼",
      meaning: "bog, lake, marsh, pond, swamp",
    },
    {
      kanji: "斗",
      meaning:
        "Big Dipper, dots and cross radical (no. 68), sake dipper, ten sho (vol)",
    },
    {
      kanji: "該",
      meaning: "above-stated, that specific, the said",
    },
    {
      kanji: "繰",
      meaning: "look up, reel, refer to, spin, turn (pages), winding",
    },
    {
      kanji: "昭",
      meaning: "bright, shining",
    },
    {
      kanji: "挿",
      meaning: "graft, insert, put in, wear (sword)",
    },
    {
      kanji: "吐",
      meaning: "belch, confess, spit, tell (lies), vomit",
    },
    {
      kanji: "扶",
      meaning: "aid, assist, help",
    },
    {
      kanji: "概",
      meaning: "approximation, condition, generally, outline",
    },
    {
      kanji: "宵",
      meaning: "early night, evening, wee hours",
    },
    {
      kanji: "桑",
      meaning: "mulberry",
    },
    {
      kanji: "庸",
      meaning: "commonplace, employment, ordinary",
    },
    {
      kanji: "剤",
      meaning: "dose, drug, medicine",
    },
    {
      kanji: "巣",
      meaning: "cobweb, den, hive, nest, rookery",
    },
    {
      kanji: "揚",
      meaning: "elevate, extol, fry in deep fat, hoist, praise, raise",
    },
    {
      kanji: "垣",
      meaning: "fence, hedge, wall",
    },
    {
      kanji: "勲",
      meaning: "merit, meritorious deed",
    },
    {
      kanji: "揺",
      meaning: "rock, shake, sway, swing, tremble, vibrate",
    },
    {
      kanji: "薫",
      meaning: "be scented, fragrant, send forth fragrance, smoke (tobacco)",
    },
    {
      kanji: "症",
      meaning: "illness, symptoms",
    },
    {
      kanji: "曹",
      meaning: "comrade, fellow, office, official",
    },
    {
      kanji: "附",
      meaning: "affixed, append, attach, refer to",
    },
    {
      kanji: "崎",
      meaning: "cape, promontory, spit",
    },
    {
      kanji: "祥",
      meaning: "auspicious, blessedness, good fortune, good omen, happiness",
    },
    {
      kanji: "郡",
      meaning: "county, district",
    },
    {
      kanji: "称",
      meaning: "admire, appellation, fame, name, praise, title",
    },
    {
      kanji: "爽",
      meaning: "bracing, clear, refreshing, resonant, sweet",
    },
    {
      kanji: "削",
      meaning: "pare, plane, sharpen, shave, whittle",
    },
    {
      kanji: "赴",
      meaning: "become, get, proceed, tend",
    },
    {
      kanji: "唱",
      meaning: "call upon, chant, recite, yell",
    },
    {
      kanji: "創",
      meaning: "genesis, hurt, injury, originate, start, wound",
    },
    {
      kanji: "刑",
      meaning: "penalty, punish, punishment, sentence",
    },
    {
      kanji: "喪",
      meaning: "miss, mourning",
    },
    {
      kanji: "奴",
      meaning: "fellow, guy, manservant, slave",
    },
    {
      kanji: "核",
      meaning: "core, kernel, nucleus",
    },
    {
      kanji: "索",
      meaning: "cord, inquiring, rope, searching",
    },
    {
      kanji: "渉",
      meaning: "ferry, ford, go cross, import, involve, transit",
    },
    {
      kanji: "殻",
      meaning: "husk, nut shell",
    },
    {
      kanji: "系",
      meaning: "lineage, system",
    },
    {
      kanji: "策",
      meaning: "means, plan, policy, scheme, step",
    },
    {
      kanji: "葬",
      meaning: "bury, interment, shelve",
    },
    {
      kanji: "窯",
      meaning: "furnace, kiln, oven",
    },
    {
      kanji: "郭",
      meaning: "enclosure, fortification, quarters, red-light district",
    },
    {
      kanji: "径",
      meaning: "diameter, method, path",
    },
    {
      kanji: "酢",
      meaning: "acid, sour, tart, vinegar",
    },
    {
      kanji: "養",
      meaning: "bring up, develop, foster, nurture, rear",
    },
    {
      kanji: "茎",
      meaning: "stalk, stem",
    },
    {
      kanji: "搾",
      meaning: "squeeze",
    },
    {
      kanji: "訟",
      meaning: "accuse, sue",
    },
    {
      kanji: "僧",
      meaning: "Buddhist priest, monk",
    },
    {
      kanji: "刀",
      meaning: "knife, saber, sword",
    },
    {
      kanji: "腐",
      meaning: "decay, rot, sour",
    },
    {
      kanji: "擁",
      meaning: "embrace, hug, lead, possess, protect",
    },
    {
      kanji: "錯",
      meaning: "be in disorder, confused, mix",
    },
    {
      kanji: "敷",
      meaning: "pave, promulgate, sit, spread",
    },
    {
      kanji: "謡",
      meaning: "ballad, noh chanting, sing, song",
    },
    {
      kanji: "隔",
      meaning: "alternate, distance, gulf, isolate, separate",
    },
    {
      kanji: "掌",
      meaning: "administer, conduct, manipulate, palm of hand, rule",
    },
    {
      kanji: "閣",
      meaning: "palace, tall building, tower",
    },
    {
      kanji: "契",
      meaning: "pledge, promise, vow",
    },
    {
      kanji: "晶",
      meaning: "clear, crystal, sparkle",
    },
    {
      kanji: "賦",
      meaning: "installment, levy, ode, poem, prose, tribute",
    },
    {
      kanji: "抑",
      meaning:
        "do in spite of, in the first place, now, press, push, repress, seal, shove, well",
    },
    {
      kanji: "遭",
      meaning: "association, encounter, interview, join, meet, party",
    },
    {
      kanji: "譜",
      meaning: "genealogy, music, musical score, note, staff, table",
    },
    {
      kanji: "獲",
      meaning: "able to, acquire, can, earn, find, get, may, seize",
    },
    {
      kanji: "焦",
      meaning: "burn, char, hurry, impatient, irritate, scorch, singe",
    },
    {
      kanji: "槽",
      meaning: "tank, tub, vat",
    },
    {
      kanji: "豆",
      meaning: "beans, midget, pea",
    },
    {
      kanji: "侮",
      meaning: "contempt, despise, make light of, scorn",
    },
    {
      kanji: "嚇",
      meaning: "dignity, majesty, menacing, threaten",
    },
    {
      kanji: "啓",
      meaning: "disclose, open, say",
    },
    {
      kanji: "硝",
      meaning: "nitrate, saltpeter",
    },
    {
      kanji: "穫",
      meaning: "harvest, reap",
    },
    {
      kanji: "掲",
      meaning:
        "describe, display, hang out, hoist, publish, put up, put up (a notice)",
    },
    {
      kanji: "渓",
      meaning: "mountain stream, valley",
    },
    {
      kanji: "詔",
      meaning: "imperial edict",
    },
    {
      kanji: "翼",
      meaning: "flank, plane, wing",
    },
    {
      kanji: "岳",
      meaning: "mountain, peak, point",
    },
    {
      kanji: "証",
      meaning: "certificate, evidence, proof",
    },
    {
      kanji: "霜",
      meaning: "frost",
    },
    {
      kanji: "蛍",
      meaning: "firefly, lightning-bug",
    },
    {
      kanji: "撮",
      meaning: "snapshot, take pictures",
    },
    {
      kanji: "騒",
      meaning: "boisterous, clamor, disturb, excite, make noise",
    },
    {
      kanji: "裸",
      meaning: "naked, nude, partially clothed, uncovered",
    },
    {
      kanji: "擦",
      meaning: "chafe, grate, rub, scour, scrape, scratch",
    },
    {
      kanji: "傷",
      meaning:
        "cut, gash, hurt, impair, injure, injury, pain, scar, weak point, wound",
    },
    {
      kanji: "藻",
      meaning: "duckweed, seaweed",
    },
    {
      kanji: "伏",
      meaning: "bend down, bow, cover, lay (pipes), prostrated",
    },
    {
      kanji: "羅",
      meaning: "Rome, arrange, gauze, spread out, thin silk",
    },
    {
      kanji: "奨",
      meaning: "encourage, exhort, urge",
    },
    {
      kanji: "掛",
      meaning: "arrive at, depend, hang, pour, suspend, tax",
    },
    {
      kanji: "桃",
      meaning: "peach",
    },
    {
      kanji: "雷",
      meaning: "lightning bolt, thunder",
    },
    {
      kanji: "潟",
      meaning: "lagoon",
    },
    {
      kanji: "詳",
      meaning: "accurate, detailed, full, minute, well-informed",
    },
    {
      kanji: "討",
      meaning: "attack, chastise, conquer, defeat, destroy",
    },
    {
      kanji: "括",
      meaning: "arrest, constrict, fasten, tie up",
    },
    {
      kanji: "携",
      meaning: "armed with, bring along, carry (in hand), portable",
    },
    {
      kanji: "彰",
      meaning: "clear, patent",
    },
    {
      kanji: "透",
      meaning: "filter, penetrate, permeate, transparent",
    },
    {
      kanji: "継",
      meaning: "continue, graft (tree), inherit, patch, succeed",
    },
    {
      kanji: "障",
      meaning: "harm, hinder, hurt",
    },
    {
      kanji: "喝",
      meaning: "hoarse, scold",
    },
    {
      kanji: "桟",
      meaning: "bolt (door), cleat, frame, jetty, scaffold",
    },
    {
      kanji: "憧",
      meaning: "admire, adore, aspire to, long for, yearn after",
    },
    {
      kanji: "悼",
      meaning: "grieve over, lament",
    },
    {
      kanji: "酪",
      meaning: "broth, dairy products, fruit juice, whey",
    },
    {
      kanji: "渇",
      meaning: "dry up, parch, thirst",
    },
    {
      kanji: "慶",
      meaning: "be happy, congratulate, jubilation, rejoice",
    },
    {
      kanji: "蚕",
      meaning: "silkworm",
    },
    {
      kanji: "衝",
      meaning:
        "brunt, collide, highway, opposition (astronomy), pierce, prick, stab, thrust",
    },
    {
      kanji: "惨",
      meaning: "cruelty, disaster, harsh, wretched",
    },
    {
      kanji: "即",
      meaning: "adapt, agree, as is, conform, instant, namely",
    },
    {
      kanji: "陶",
      meaning: "porcelain, pottery",
    },
    {
      kanji: "覆",
      meaning: "be ruined, capsize, cover, mantle, shade",
    },
    {
      kanji: "償",
      meaning: "make up for, recompense, redeem, reparation",
    },
    {
      kanji: "滑",
      meaning: "fail exam, slide, slip, slippery",
    },
    {
      kanji: "憩",
      meaning: "recess, relax, repose, rest",
    },
    {
      kanji: "傘",
      meaning: "umbrella",
    },
    {
      kanji: "礁",
      meaning: "reef, sunken rock",
    },
    {
      kanji: "搭",
      meaning: "board, load (a vehicle), ride",
    },
    {
      kanji: "覧",
      meaning: "perusal, see",
    },
    {
      kanji: "褐",
      meaning: "brown, woollen kimono",
    },
    {
      kanji: "鐘",
      meaning: "bell, chimes, gong",
    },
    {
      kanji: "促",
      meaning: "demand, incite, press, stimulate, urge",
    },
    {
      kanji: "棟",
      meaning: "ridge, ridgepole",
    },
    {
      kanji: "濫",
      meaning: "excessive, overflow, spread out",
    },
    {
      kanji: "轄",
      meaning: "control, wedge",
    },
    {
      kanji: "鶏",
      meaning: "chicken",
    },
    {
      kanji: "藍",
      meaning: "indigo",
    },
    {
      kanji: "且",
      meaning: "also, furthermore, moreover",
    },
    {
      kanji: "酸",
      meaning: "acid, bitterness, sour, tart",
    },
    {
      kanji: "痘",
      meaning: "pox, smallpox",
    },
    {
      kanji: "欄",
      meaning: "blank, column, handrail, space",
    },
    {
      kanji: "株",
      meaning: "counter for small plants, shares, stock, stocks, stump",
    },
    {
      kanji: "冗",
      meaning: "superfluous, uselessness",
    },
    {
      kanji: "紛",
      meaning: "be mistaken for, distract, divert, go astray",
    },
    {
      kanji: "吏",
      meaning: "an official, officer",
    },
    {
      kanji: "鯨",
      meaning: "whale",
    },
    {
      kanji: "雰",
      meaning: "atmosphere, fog",
    },
    {
      kanji: "鎌",
      meaning: "scythe, sickle, trick",
    },
    {
      kanji: "噴",
      meaning: "emit, erupt, flush out, spout",
    },
    {
      kanji: "刈",
      meaning: "clip, cut, prune, reap, trim",
    },
    {
      kanji: "暫",
      meaning: "a while, long time, moment, temporarily",
    },
    {
      kanji: "墳",
      meaning: "mound, tomb",
    },
    {
      kanji: "撃",
      meaning: "attack, beat, conquer, defeat",
    },
    {
      kanji: "士",
      meaning: "gentleman, samurai, samurai radical (no. 33), scholar",
    },
    {
      kanji: "俗",
      meaning: "customs, manners, mundane things, vulgar, worldliness",
    },
    {
      kanji: "統",
      meaning: "governing, overall, relationship, ruling",
    },
    {
      kanji: "憤",
      meaning: "anger, aroused, be indignant, resent",
    },
    {
      kanji: "痢",
      meaning: "diarrhea",
    },
    {
      kanji: "激",
      meaning: "chafe, enraged, get excited, incite, violent",
    },
    {
      kanji: "浄",
      meaning: "Manchu Dynasty, clean, cleanse, exorcise, purify",
    },
    {
      kanji: "稲",
      meaning: "rice plant",
    },
    {
      kanji: "奮",
      meaning: "be invigorated, flourish, stirred up",
    },
    {
      kanji: "剰",
      meaning: "besides, surplus",
    },
    {
      kanji: "属",
      meaning: "affiliated, belong, genus, subordinate official",
    },
    {
      kanji: "踏",
      meaning: "appraise, carry through, evade payment, step, trample",
    },
    {
      kanji: "履",
      meaning: "boots, complete, footgear, perform, put on (the feet), shoes",
    },
    {
      kanji: "賊",
      meaning: "burglar, rebel, robber, traitor",
    },
    {
      kanji: "糖",
      meaning: "sugar",
    },
    {
      kanji: "璃",
      meaning: "glassy, lapis lazuli",
    },
    {
      kanji: "缶",
      meaning: "container, jar radical (no. 121), tin can",
    },
    {
      kanji: "穴",
      meaning: "aperture, cave, den, hole, slit",
    },
    {
      kanji: "氏",
      meaning: "clan, family name, surname",
    },
    {
      kanji: "離",
      meaning: "detach, digress, disjoin, separation",
    },
    {
      kanji: "謄",
      meaning: "copy, mimeograph",
    },
    {
      kanji: "丙",
      meaning: "3rd, 3rd calendar sign, third class",
    },
    {
      kanji: "肝",
      meaning: "chutzpah, liver, nerve, pluck",
    },
    {
      kanji: "率",
      meaning: "%, command, factor, lead, proportion, rate, ratio, spearhead",
    },
    {
      kanji: "藤",
      meaning: "wisteria",
    },
    {
      kanji: "結",
      meaning: "bind, contract, do up hair, fasten, join, organize, tie",
    },
    {
      kanji: "闘",
      meaning: "fight, war",
    },
    {
      kanji: "冠",
      meaning: "best, crown, peerless",
    },
    {
      kanji: "傑",
      meaning: "excellence, greatness",
    },
    {
      kanji: "縄",
      meaning: "cord, straw rope",
    },
    {
      kanji: "騰",
      meaning: "advancing, going, jumping up, leaping up, rising",
    },
    {
      kanji: "併",
      meaning: "collective, get together, join, unite",
    },
  ],
  RTK_5ED: [
    {
      kanji: "一",
      meaning: "one",
    },
    {
      kanji: "二",
      meaning: "two",
    },
    {
      kanji: "三",
      meaning: "three",
    },
    {
      kanji: "四",
      meaning: "four",
    },
    {
      kanji: "五",
      meaning: "five",
    },
    {
      kanji: "六",
      meaning: "six",
    },
    {
      kanji: "七",
      meaning: "seven",
    },
    {
      kanji: "八",
      meaning: "eight",
    },
    {
      kanji: "九",
      meaning: "nine",
    },
    {
      kanji: "十",
      meaning: "ten",
    },
    {
      kanji: "口",
      meaning: "mouth",
    },
    {
      kanji: "日",
      meaning: "day",
    },
    {
      kanji: "月",
      meaning: "month",
    },
    {
      kanji: "田",
      meaning: "rice field",
    },
    {
      kanji: "目",
      meaning: "eye",
    },
    {
      kanji: "古",
      meaning: "old",
    },
    {
      kanji: "吾",
      meaning: "I",
    },
    {
      kanji: "冒",
      meaning: "risk",
    },
    {
      kanji: "朋",
      meaning: "companion",
    },
    {
      kanji: "明",
      meaning: "bright",
    },
    {
      kanji: "唱",
      meaning: "chant",
    },
    {
      kanji: "晶",
      meaning: "sparkle",
    },
    {
      kanji: "品",
      meaning: "goods",
    },
    {
      kanji: "呂",
      meaning: "spine",
    },
    {
      kanji: "昌",
      meaning: "prosperous",
    },
    {
      kanji: "早",
      meaning: "early",
    },
    {
      kanji: "旭",
      meaning: "rising sun",
    },
    {
      kanji: "世",
      meaning: "generation",
    },
    {
      kanji: "胃",
      meaning: "stomach",
    },
    {
      kanji: "旦",
      meaning: "nightbreak",
    },
    {
      kanji: "胆",
      meaning: "gall bladder",
    },
    {
      kanji: "亘",
      meaning: "span",
    },
    {
      kanji: "凹",
      meaning: "concave",
    },
    {
      kanji: "凸",
      meaning: "convex",
    },
    {
      kanji: "旧",
      meaning: "olden times",
    },
    {
      kanji: "自",
      meaning: "oneself",
    },
    {
      kanji: "白",
      meaning: "white",
    },
    {
      kanji: "百",
      meaning: "hundred",
    },
    {
      kanji: "中",
      meaning: "in",
    },
    {
      kanji: "千",
      meaning: "thousand",
    },
    {
      kanji: "舌",
      meaning: "tongue",
    },
    {
      kanji: "升",
      meaning: "measuring box",
    },
    {
      kanji: "昇",
      meaning: "rise up",
    },
    {
      kanji: "丸",
      meaning: "round",
    },
    {
      kanji: "寸",
      meaning: "measurement",
    },
    {
      kanji: "専",
      meaning: "specialty",
    },
    {
      kanji: "博",
      meaning: "Dr.",
    },
    {
      kanji: "占",
      meaning: "fortune-telling",
    },
    {
      kanji: "上",
      meaning: "above",
    },
    {
      kanji: "下",
      meaning: "below",
    },
    {
      kanji: "卓",
      meaning: "eminent",
    },
    {
      kanji: "朝",
      meaning: "morning",
    },
    {
      kanji: "只",
      meaning: "only",
    },
    {
      kanji: "貝",
      meaning: "shellfish",
    },
    {
      kanji: "貞",
      meaning: "upright",
    },
    {
      kanji: "員",
      meaning: "employee",
    },
    {
      kanji: "見",
      meaning: "see",
    },
    {
      kanji: "児",
      meaning: "newborn babe",
    },
    {
      kanji: "元",
      meaning: "beginning",
    },
    {
      kanji: "頁",
      meaning: "page",
    },
    {
      kanji: "頑",
      meaning: "stubborn",
    },
    {
      kanji: "凡",
      meaning: "mediocre",
    },
    {
      kanji: "負",
      meaning: "defeat",
    },
    {
      kanji: "万",
      meaning: "ten thousand",
    },
    {
      kanji: "句",
      meaning: "phrase",
    },
    {
      kanji: "肌",
      meaning: "texture",
    },
    {
      kanji: "旬",
      meaning: "decameron",
    },
    {
      kanji: "勺",
      meaning: "ladle",
    },
    {
      kanji: "的",
      meaning: "bull's eye",
    },
    {
      kanji: "首",
      meaning: "neck",
    },
    {
      kanji: "乙",
      meaning: "fish guts",
    },
    {
      kanji: "乱",
      meaning: "riot",
    },
    {
      kanji: "直",
      meaning: "straightaway",
    },
    {
      kanji: "具",
      meaning: "tool",
    },
    {
      kanji: "真",
      meaning: "true",
    },
    {
      kanji: "工",
      meaning: "craft",
    },
    {
      kanji: "左",
      meaning: "left",
    },
    {
      kanji: "右",
      meaning: "right",
    },
    {
      kanji: "有",
      meaning: "possess",
    },
    {
      kanji: "賄",
      meaning: "bribe",
    },
    {
      kanji: "貢",
      meaning: "tribute",
    },
    {
      kanji: "項",
      meaning: "paragraph",
    },
    {
      kanji: "刀",
      meaning: "sword",
    },
    {
      kanji: "刃",
      meaning: "blade",
    },
    {
      kanji: "切",
      meaning: "cut",
    },
    {
      kanji: "召",
      meaning: "seduce",
    },
    {
      kanji: "昭",
      meaning: "shining",
    },
    {
      kanji: "則",
      meaning: "rule",
    },
    {
      kanji: "副",
      meaning: "vice-",
    },
    {
      kanji: "別",
      meaning: "separate",
    },
    {
      kanji: "丁",
      meaning: "street",
    },
    {
      kanji: "町",
      meaning: "village",
    },
    {
      kanji: "可",
      meaning: "can",
    },
    {
      kanji: "頂",
      meaning: "place on the head",
    },
    {
      kanji: "子",
      meaning: "child",
    },
    {
      kanji: "孔",
      meaning: "cavity",
    },
    {
      kanji: "了",
      meaning: "complete",
    },
    {
      kanji: "女",
      meaning: "woman",
    },
    {
      kanji: "好",
      meaning: "fond",
    },
    {
      kanji: "如",
      meaning: "likeness",
    },
    {
      kanji: "母",
      meaning: "mama",
    },
    {
      kanji: "貫",
      meaning: "pierce",
    },
    {
      kanji: "兄",
      meaning: "elder brother",
    },
    {
      kanji: "克",
      meaning: "overcome",
    },
    {
      kanji: "小",
      meaning: "little",
    },
    {
      kanji: "少",
      meaning: "few",
    },
    {
      kanji: "大",
      meaning: "large",
    },
    {
      kanji: "多",
      meaning: "many",
    },
    {
      kanji: "夕",
      meaning: "evening",
    },
    {
      kanji: "汐",
      meaning: "eventide",
    },
    {
      kanji: "外",
      meaning: "outside",
    },
    {
      kanji: "名",
      meaning: "name",
    },
    {
      kanji: "石",
      meaning: "stone",
    },
    {
      kanji: "肖",
      meaning: "resemblance",
    },
    {
      kanji: "硝",
      meaning: "nitrate",
    },
    {
      kanji: "砕",
      meaning: "smash",
    },
    {
      kanji: "砂",
      meaning: "sand",
    },
    {
      kanji: "削",
      meaning: "plane",
    },
    {
      kanji: "光",
      meaning: "ray",
    },
    {
      kanji: "太",
      meaning: "plump",
    },
    {
      kanji: "器",
      meaning: "utensil",
    },
    {
      kanji: "臭",
      meaning: "stinking",
    },
    {
      kanji: "妙",
      meaning: "exquisite",
    },
    {
      kanji: "省",
      meaning: "focus",
    },
    {
      kanji: "厚",
      meaning: "thick",
    },
    {
      kanji: "奇",
      meaning: "strange",
    },
    {
      kanji: "川",
      meaning: "stream",
    },
    {
      kanji: "州",
      meaning: "state",
    },
    {
      kanji: "順",
      meaning: "obey",
    },
    {
      kanji: "水",
      meaning: "water",
    },
    {
      kanji: "氷",
      meaning: "icicle",
    },
    {
      kanji: "永",
      meaning: "eternity",
    },
    {
      kanji: "泉",
      meaning: "spring",
    },
    {
      kanji: "原",
      meaning: "meadow",
    },
    {
      kanji: "願",
      meaning: "petition",
    },
    {
      kanji: "泳",
      meaning: "swim",
    },
    {
      kanji: "沼",
      meaning: "marsh",
    },
    {
      kanji: "沖",
      meaning: "open sea",
    },
    {
      kanji: "江",
      meaning: "creek",
    },
    {
      kanji: "汁",
      meaning: "soup",
    },
    {
      kanji: "潮",
      meaning: "tide",
    },
    {
      kanji: "源",
      meaning: "source",
    },
    {
      kanji: "活",
      meaning: "lively",
    },
    {
      kanji: "消",
      meaning: "extinguish",
    },
    {
      kanji: "況",
      meaning: "but of course",
    },
    {
      kanji: "河",
      meaning: "river",
    },
    {
      kanji: "泊",
      meaning: "overnight",
    },
    {
      kanji: "湖",
      meaning: "lake",
    },
    {
      kanji: "測",
      meaning: "fathom",
    },
    {
      kanji: "土",
      meaning: "soil",
    },
    {
      kanji: "吐",
      meaning: "spit",
    },
    {
      kanji: "圧",
      meaning: "pressure",
    },
    {
      kanji: "埼",
      meaning: "cape",
    },
    {
      kanji: "垣",
      meaning: "hedge",
    },
    {
      kanji: "圭",
      meaning: "squared jewel",
    },
    {
      kanji: "封",
      meaning: "seal",
    },
    {
      kanji: "涯",
      meaning: "horizon",
    },
    {
      kanji: "寺",
      meaning: "Buddhist temple",
    },
    {
      kanji: "時",
      meaning: "time",
    },
    {
      kanji: "均",
      meaning: "level",
    },
    {
      kanji: "火",
      meaning: "fire",
    },
    {
      kanji: "炎",
      meaning: "inflammation",
    },
    {
      kanji: "煩",
      meaning: "anxiety",
    },
    {
      kanji: "淡",
      meaning: "thin",
    },
    {
      kanji: "灯",
      meaning: "lamp",
    },
    {
      kanji: "畑",
      meaning: "farm",
    },
    {
      kanji: "災",
      meaning: "disaster",
    },
    {
      kanji: "灰",
      meaning: "ashes",
    },
    {
      kanji: "点",
      meaning: "spot",
    },
    {
      kanji: "照",
      meaning: "illuminate",
    },
    {
      kanji: "魚",
      meaning: "fish",
    },
    {
      kanji: "漁",
      meaning: "fishing",
    },
    {
      kanji: "里",
      meaning: "ri",
    },
    {
      kanji: "黒",
      meaning: "black",
    },
    {
      kanji: "墨",
      meaning: "black ink",
    },
    {
      kanji: "鯉",
      meaning: "carp",
    },
    {
      kanji: "量",
      meaning: "quantity",
    },
    {
      kanji: "厘",
      meaning: "rin",
    },
    {
      kanji: "埋",
      meaning: "bury",
    },
    {
      kanji: "同",
      meaning: "same",
    },
    {
      kanji: "洞",
      meaning: "den",
    },
    {
      kanji: "胴",
      meaning: "trunk",
    },
    {
      kanji: "向",
      meaning: "yonder",
    },
    {
      kanji: "尚",
      meaning: "esteem",
    },
    {
      kanji: "字",
      meaning: "character",
    },
    {
      kanji: "守",
      meaning: "guard",
    },
    {
      kanji: "完",
      meaning: "perfect",
    },
    {
      kanji: "宣",
      meaning: "proclaim",
    },
    {
      kanji: "宵",
      meaning: "wee hours",
    },
    {
      kanji: "安",
      meaning: "relax",
    },
    {
      kanji: "宴",
      meaning: "banquet",
    },
    {
      kanji: "寄",
      meaning: "draw near",
    },
    {
      kanji: "富",
      meaning: "wealth",
    },
    {
      kanji: "貯",
      meaning: "savings",
    },
    {
      kanji: "木",
      meaning: "tree",
    },
    {
      kanji: "林",
      meaning: "grove",
    },
    {
      kanji: "森",
      meaning: "forest",
    },
    {
      kanji: "桂",
      meaning: "Japanese Judas-tree",
    },
    {
      kanji: "柏",
      meaning: "oak",
    },
    {
      kanji: "枠",
      meaning: "frame",
    },
    {
      kanji: "梢",
      meaning: "treetops",
    },
    {
      kanji: "棚",
      meaning: "shelf",
    },
    {
      kanji: "杏",
      meaning: "apricot",
    },
    {
      kanji: "桐",
      meaning: "paulownia",
    },
    {
      kanji: "植",
      meaning: "plant",
    },
    {
      kanji: "枯",
      meaning: "wither",
    },
    {
      kanji: "朴",
      meaning: "crude",
    },
    {
      kanji: "村",
      meaning: "town",
    },
    {
      kanji: "相",
      meaning: "inter-",
    },
    {
      kanji: "机",
      meaning: "desk",
    },
    {
      kanji: "本",
      meaning: "book",
    },
    {
      kanji: "札",
      meaning: "tag",
    },
    {
      kanji: "暦",
      meaning: "calendar",
    },
    {
      kanji: "案",
      meaning: "plan",
    },
    {
      kanji: "燥",
      meaning: "parch",
    },
    {
      kanji: "未",
      meaning: "not yet",
    },
    {
      kanji: "末",
      meaning: "extremity",
    },
    {
      kanji: "沫",
      meaning: "splash",
    },
    {
      kanji: "味",
      meaning: "flavor",
    },
    {
      kanji: "妹",
      meaning: "younger sister",
    },
    {
      kanji: "朱",
      meaning: "vermilion",
    },
    {
      kanji: "株",
      meaning: "stocks",
    },
    {
      kanji: "若",
      meaning: "young",
    },
    {
      kanji: "草",
      meaning: "grass",
    },
    {
      kanji: "苦",
      meaning: "suffering",
    },
    {
      kanji: "寛",
      meaning: "tolerant",
    },
    {
      kanji: "薄",
      meaning: "dilute",
    },
    {
      kanji: "葉",
      meaning: "leaf",
    },
    {
      kanji: "模",
      meaning: "imitation",
    },
    {
      kanji: "漠",
      meaning: "vague",
    },
    {
      kanji: "墓",
      meaning: "grave",
    },
    {
      kanji: "暮",
      meaning: "livelihood",
    },
    {
      kanji: "膜",
      meaning: "membrane",
    },
    {
      kanji: "苗",
      meaning: "seedling",
    },
    {
      kanji: "兆",
      meaning: "portent",
    },
    {
      kanji: "桃",
      meaning: "peach tree",
    },
    {
      kanji: "眺",
      meaning: "stare",
    },
    {
      kanji: "犬",
      meaning: "dog",
    },
    {
      kanji: "状",
      meaning: "status quo",
    },
    {
      kanji: "黙",
      meaning: "silence",
    },
    {
      kanji: "然",
      meaning: "sort of thing",
    },
    {
      kanji: "荻",
      meaning: "reed",
    },
    {
      kanji: "狩",
      meaning: "hunt",
    },
    {
      kanji: "猫",
      meaning: "cat",
    },
    {
      kanji: "牛",
      meaning: "cow",
    },
    {
      kanji: "特",
      meaning: "special",
    },
    {
      kanji: "告",
      meaning: "revelation",
    },
    {
      kanji: "先",
      meaning: "before",
    },
    {
      kanji: "洗",
      meaning: "wash",
    },
    {
      kanji: "介",
      meaning: "jammed in",
    },
    {
      kanji: "界",
      meaning: "world",
    },
    {
      kanji: "茶",
      meaning: "tea",
    },
    {
      kanji: "合",
      meaning: "fit",
    },
    {
      kanji: "塔",
      meaning: "pagoda",
    },
    {
      kanji: "王",
      meaning: "king",
    },
    {
      kanji: "玉",
      meaning: "jewel",
    },
    {
      kanji: "宝",
      meaning: "treasure",
    },
    {
      kanji: "珠",
      meaning: "pearl",
    },
    {
      kanji: "現",
      meaning: "present",
    },
    {
      kanji: "狂",
      meaning: "lunatic",
    },
    {
      kanji: "皇",
      meaning: "emperor",
    },
    {
      kanji: "呈",
      meaning: "display",
    },
    {
      kanji: "全",
      meaning: "whole",
    },
    {
      kanji: "栓",
      meaning: "plug",
    },
    {
      kanji: "理",
      meaning: "logic",
    },
    {
      kanji: "主",
      meaning: "lord",
    },
    {
      kanji: "注",
      meaning: "pour",
    },
    {
      kanji: "柱",
      meaning: "pillar",
    },
    {
      kanji: "金",
      meaning: "gold",
    },
    {
      kanji: "銑",
      meaning: "pig iron",
    },
    {
      kanji: "鉢",
      meaning: "bowl",
    },
    {
      kanji: "銅",
      meaning: "copper",
    },
    {
      kanji: "釣",
      meaning: "angling",
    },
    {
      kanji: "針",
      meaning: "needle",
    },
    {
      kanji: "銘",
      meaning: "inscription",
    },
    {
      kanji: "鎮",
      meaning: "tranquillize",
    },
    {
      kanji: "道",
      meaning: "road-way",
    },
    {
      kanji: "導",
      meaning: "guidance",
    },
    {
      kanji: "辻",
      meaning: "crossing",
    },
    {
      kanji: "迅",
      meaning: "swift",
    },
    {
      kanji: "造",
      meaning: "create",
    },
    {
      kanji: "迫",
      meaning: "urge",
    },
    {
      kanji: "逃",
      meaning: "escape",
    },
    {
      kanji: "辺",
      meaning: "environs",
    },
    {
      kanji: "巡",
      meaning: "patrol",
    },
    {
      kanji: "車",
      meaning: "car",
    },
    {
      kanji: "連",
      meaning: "take along",
    },
    {
      kanji: "軌",
      meaning: "rut",
    },
    {
      kanji: "輸",
      meaning: "transport",
    },
    {
      kanji: "前",
      meaning: "in front",
    },
    {
      kanji: "各",
      meaning: "each",
    },
    {
      kanji: "格",
      meaning: "status",
    },
    {
      kanji: "略",
      meaning: "abbreviation",
    },
    {
      kanji: "客",
      meaning: "guest",
    },
    {
      kanji: "額",
      meaning: "forehead",
    },
    {
      kanji: "夏",
      meaning: "summer",
    },
    {
      kanji: "処",
      meaning: "dispose",
    },
    {
      kanji: "条",
      meaning: "twig",
    },
    {
      kanji: "落",
      meaning: "fall",
    },
    {
      kanji: "冗",
      meaning: "superfluous",
    },
    {
      kanji: "軍",
      meaning: "army",
    },
    {
      kanji: "輝",
      meaning: "radiance",
    },
    {
      kanji: "運",
      meaning: "carry",
    },
    {
      kanji: "冠",
      meaning: "crown",
    },
    {
      kanji: "夢",
      meaning: "dream",
    },
    {
      kanji: "坑",
      meaning: "pit",
    },
    {
      kanji: "高",
      meaning: "tall",
    },
    {
      kanji: "享",
      meaning: "receive",
    },
    {
      kanji: "塾",
      meaning: "cram school",
    },
    {
      kanji: "熟",
      meaning: "mellow",
    },
    {
      kanji: "亭",
      meaning: "pavilion",
    },
    {
      kanji: "京",
      meaning: "capital",
    },
    {
      kanji: "涼",
      meaning: "refreshing",
    },
    {
      kanji: "景",
      meaning: "scenery",
    },
    {
      kanji: "鯨",
      meaning: "whale",
    },
    {
      kanji: "舎",
      meaning: "cottage",
    },
    {
      kanji: "周",
      meaning: "circumference",
    },
    {
      kanji: "週",
      meaning: "week",
    },
    {
      kanji: "士",
      meaning: "gentleman",
    },
    {
      kanji: "吉",
      meaning: "good luck",
    },
    {
      kanji: "壮",
      meaning: "robust",
    },
    {
      kanji: "荘",
      meaning: "villa",
    },
    {
      kanji: "売",
      meaning: "sell",
    },
    {
      kanji: "学",
      meaning: "study",
    },
    {
      kanji: "覚",
      meaning: "memorize",
    },
    {
      kanji: "栄",
      meaning: "flourish",
    },
    {
      kanji: "書",
      meaning: "write",
    },
    {
      kanji: "津",
      meaning: "haven",
    },
    {
      kanji: "牧",
      meaning: "breed",
    },
    {
      kanji: "攻",
      meaning: "aggression",
    },
    {
      kanji: "敗",
      meaning: "failure",
    },
    {
      kanji: "枚",
      meaning: "sheet of",
    },
    {
      kanji: "故",
      meaning: "happenstance",
    },
    {
      kanji: "敬",
      meaning: "awe",
    },
    {
      kanji: "言",
      meaning: "say",
    },
    {
      kanji: "警",
      meaning: "admonish",
    },
    {
      kanji: "計",
      meaning: "plot",
    },
    {
      kanji: "獄",
      meaning: "prison",
    },
    {
      kanji: "訂",
      meaning: "revise",
    },
    {
      kanji: "討",
      meaning: "chastise",
    },
    {
      kanji: "訓",
      meaning: "instruction",
    },
    {
      kanji: "詔",
      meaning: "imperial edict",
    },
    {
      kanji: "詰",
      meaning: "packed",
    },
    {
      kanji: "話",
      meaning: "tale",
    },
    {
      kanji: "詠",
      meaning: "recitation",
    },
    {
      kanji: "詩",
      meaning: "poem",
    },
    {
      kanji: "語",
      meaning: "word",
    },
    {
      kanji: "読",
      meaning: "read",
    },
    {
      kanji: "調",
      meaning: "tune",
    },
    {
      kanji: "談",
      meaning: "discuss",
    },
    {
      kanji: "諾",
      meaning: "consent",
    },
    {
      kanji: "諭",
      meaning: "rebuke",
    },
    {
      kanji: "式",
      meaning: "style",
    },
    {
      kanji: "試",
      meaning: "test",
    },
    {
      kanji: "弐",
      meaning: "II (two)",
    },
    {
      kanji: "域",
      meaning: "range",
    },
    {
      kanji: "賊",
      meaning: "burglar",
    },
    {
      kanji: "栽",
      meaning: "plantation",
    },
    {
      kanji: "載",
      meaning: "load",
    },
    {
      kanji: "茂",
      meaning: "overgrown",
    },
    {
      kanji: "成",
      meaning: "turn into",
    },
    {
      kanji: "城",
      meaning: "castle",
    },
    {
      kanji: "誠",
      meaning: "sincerity",
    },
    {
      kanji: "威",
      meaning: "intimidate",
    },
    {
      kanji: "滅",
      meaning: "destroy",
    },
    {
      kanji: "減",
      meaning: "dwindle",
    },
    {
      kanji: "桟",
      meaning: "scaffold",
    },
    {
      kanji: "銭",
      meaning: "coin",
    },
    {
      kanji: "浅",
      meaning: "shallow",
    },
    {
      kanji: "止",
      meaning: "stop",
    },
    {
      kanji: "歩",
      meaning: "walk",
    },
    {
      kanji: "渉",
      meaning: "ford",
    },
    {
      kanji: "頻",
      meaning: "repeatedly",
    },
    {
      kanji: "肯",
      meaning: "agreement",
    },
    {
      kanji: "企",
      meaning: "undertake",
    },
    {
      kanji: "歴",
      meaning: "curriculum",
    },
    {
      kanji: "武",
      meaning: "warrior",
    },
    {
      kanji: "賦",
      meaning: "levy",
    },
    {
      kanji: "正",
      meaning: "correct",
    },
    {
      kanji: "証",
      meaning: "evidence",
    },
    {
      kanji: "政",
      meaning: "politics",
    },
    {
      kanji: "定",
      meaning: "determine",
    },
    {
      kanji: "錠",
      meaning: "lock",
    },
    {
      kanji: "走",
      meaning: "run",
    },
    {
      kanji: "超",
      meaning: "transcend",
    },
    {
      kanji: "赴",
      meaning: "proceed",
    },
    {
      kanji: "越",
      meaning: "surpass",
    },
    {
      kanji: "是",
      meaning: "just so",
    },
    {
      kanji: "題",
      meaning: "topic",
    },
    {
      kanji: "堤",
      meaning: "dike",
    },
    {
      kanji: "建",
      meaning: "build",
    },
    {
      kanji: "延",
      meaning: "prolong",
    },
    {
      kanji: "誕",
      meaning: "nativity",
    },
    {
      kanji: "礎",
      meaning: "cornerstone",
    },
    {
      kanji: "婿",
      meaning: "bridegroom",
    },
    {
      kanji: "衣",
      meaning: "garment",
    },
    {
      kanji: "裁",
      meaning: "tailor",
    },
    {
      kanji: "装",
      meaning: "attire",
    },
    {
      kanji: "裏",
      meaning: "back",
    },
    {
      kanji: "壊",
      meaning: "demolition",
    },
    {
      kanji: "哀",
      meaning: "pathetic",
    },
    {
      kanji: "遠",
      meaning: "distant",
    },
    {
      kanji: "猿",
      meaning: "monkey",
    },
    {
      kanji: "初",
      meaning: "first time",
    },
    {
      kanji: "布",
      meaning: "linen",
    },
    {
      kanji: "帆",
      meaning: "sail",
    },
    {
      kanji: "幅",
      meaning: "hanging scroll",
    },
    {
      kanji: "帽",
      meaning: "cap",
    },
    {
      kanji: "幕",
      meaning: "curtain",
    },
    {
      kanji: "幌",
      meaning: "canopy",
    },
    {
      kanji: "錦",
      meaning: "brocade",
    },
    {
      kanji: "市",
      meaning: "market",
    },
    {
      kanji: "姉",
      meaning: "elder sister",
    },
    {
      kanji: "肺",
      meaning: "lungs",
    },
    {
      kanji: "帯",
      meaning: "sash",
    },
    {
      kanji: "滞",
      meaning: "stagnate",
    },
    {
      kanji: "刺",
      meaning: "thorn",
    },
    {
      kanji: "制",
      meaning: "system",
    },
    {
      kanji: "製",
      meaning: "made in...",
    },
    {
      kanji: "転",
      meaning: "revolve",
    },
    {
      kanji: "芸",
      meaning: "technique",
    },
    {
      kanji: "雨",
      meaning: "rain",
    },
    {
      kanji: "雲",
      meaning: "cloud",
    },
    {
      kanji: "曇",
      meaning: "cloudy weather",
    },
    {
      kanji: "雷",
      meaning: "thunder",
    },
    {
      kanji: "霜",
      meaning: "frost",
    },
    {
      kanji: "冬",
      meaning: "winter",
    },
    {
      kanji: "天",
      meaning: "heavens",
    },
    {
      kanji: "橋",
      meaning: "bridge",
    },
    {
      kanji: "嬌",
      meaning: "attractive",
    },
    {
      kanji: "立",
      meaning: "stand up",
    },
    {
      kanji: "泣",
      meaning: "cry",
    },
    {
      kanji: "章",
      meaning: "badge",
    },
    {
      kanji: "競",
      meaning: "vie",
    },
    {
      kanji: "帝",
      meaning: "sovereign",
    },
    {
      kanji: "童",
      meaning: "juvenile",
    },
    {
      kanji: "瞳",
      meaning: "pupil",
    },
    {
      kanji: "鐘",
      meaning: "bell",
    },
    {
      kanji: "商",
      meaning: "make a deal",
    },
    {
      kanji: "嫡",
      meaning: "legitimate wife",
    },
    {
      kanji: "適",
      meaning: "suitable",
    },
    {
      kanji: "滴",
      meaning: "drip",
    },
    {
      kanji: "敵",
      meaning: "enemy",
    },
    {
      kanji: "匕",
      meaning: "spoon",
    },
    {
      kanji: "北",
      meaning: "north",
    },
    {
      kanji: "背",
      meaning: "stature",
    },
    {
      kanji: "比",
      meaning: "compare",
    },
    {
      kanji: "昆",
      meaning: "descendants",
    },
    {
      kanji: "皆",
      meaning: "all",
    },
    {
      kanji: "混",
      meaning: "mix",
    },
    {
      kanji: "渇",
      meaning: "thirst",
    },
    {
      kanji: "謁",
      meaning: "audience",
    },
    {
      kanji: "褐",
      meaning: "brown",
    },
    {
      kanji: "喝",
      meaning: "hoarse",
    },
    {
      kanji: "旨",
      meaning: "delicious",
    },
    {
      kanji: "脂",
      meaning: "fat",
    },
    {
      kanji: "壱",
      meaning: "I (one)",
    },
    {
      kanji: "毎",
      meaning: "every",
    },
    {
      kanji: "敏",
      meaning: "cleverness",
    },
    {
      kanji: "梅",
      meaning: "plum",
    },
    {
      kanji: "海",
      meaning: "sea",
    },
    {
      kanji: "乞",
      meaning: "beg",
    },
    {
      kanji: "乾",
      meaning: "drought",
    },
    {
      kanji: "腹",
      meaning: "abdomen",
    },
    {
      kanji: "複",
      meaning: "duplicate",
    },
    {
      kanji: "欠",
      meaning: "lack",
    },
    {
      kanji: "吹",
      meaning: "blow",
    },
    {
      kanji: "炊",
      meaning: "cook",
    },
    {
      kanji: "歌",
      meaning: "song",
    },
    {
      kanji: "軟",
      meaning: "soft",
    },
    {
      kanji: "次",
      meaning: "next",
    },
    {
      kanji: "茨",
      meaning: "briar",
    },
    {
      kanji: "資",
      meaning: "assets",
    },
    {
      kanji: "姿",
      meaning: "figure",
    },
    {
      kanji: "諮",
      meaning: "consult with",
    },
    {
      kanji: "賠",
      meaning: "compensation",
    },
    {
      kanji: "培",
      meaning: "cultivate",
    },
    {
      kanji: "剖",
      meaning: "divide",
    },
    {
      kanji: "音",
      meaning: "sound",
    },
    {
      kanji: "暗",
      meaning: "darkness",
    },
    {
      kanji: "韻",
      meaning: "rhyme",
    },
    {
      kanji: "識",
      meaning: "discriminating",
    },
    {
      kanji: "鏡",
      meaning: "mirror",
    },
    {
      kanji: "境",
      meaning: "boundary",
    },
    {
      kanji: "亡",
      meaning: "deceased",
    },
    {
      kanji: "盲",
      meaning: "blind",
    },
    {
      kanji: "妄",
      meaning: "delusion",
    },
    {
      kanji: "荒",
      meaning: "laid waste",
    },
    {
      kanji: "望",
      meaning: "ambition",
    },
    {
      kanji: "方",
      meaning: "direction",
    },
    {
      kanji: "妨",
      meaning: "disturb",
    },
    {
      kanji: "坊",
      meaning: "boy",
    },
    {
      kanji: "芳",
      meaning: "perfumed",
    },
    {
      kanji: "肪",
      meaning: "obese",
    },
    {
      kanji: "訪",
      meaning: "call on",
    },
    {
      kanji: "放",
      meaning: "set free",
    },
    {
      kanji: "激",
      meaning: "violent",
    },
    {
      kanji: "脱",
      meaning: "undress",
    },
    {
      kanji: "説",
      meaning: "explanation",
    },
    {
      kanji: "鋭",
      meaning: "pointed",
    },
    {
      kanji: "曽",
      meaning: "formerly",
    },
    {
      kanji: "増",
      meaning: "increase",
    },
    {
      kanji: "贈",
      meaning: "presents",
    },
    {
      kanji: "東",
      meaning: "east",
    },
    {
      kanji: "棟",
      meaning: "ridgepole",
    },
    {
      kanji: "凍",
      meaning: "frozen",
    },
    {
      kanji: "妊",
      meaning: "pregnancy",
    },
    {
      kanji: "廷",
      meaning: "courts",
    },
    {
      kanji: "染",
      meaning: "dye",
    },
    {
      kanji: "燃",
      meaning: "burn",
    },
    {
      kanji: "賓",
      meaning: "V.I.P.",
    },
    {
      kanji: "歳",
      meaning: "year-end",
    },
    {
      kanji: "県",
      meaning: "prefecture",
    },
    {
      kanji: "栃",
      meaning: "horse chestnut",
    },
    {
      kanji: "地",
      meaning: "ground",
    },
    {
      kanji: "池",
      meaning: "pond",
    },
    {
      kanji: "虫",
      meaning: "insect",
    },
    {
      kanji: "蛍",
      meaning: "lightning bug",
    },
    {
      kanji: "蛇",
      meaning: "snake",
    },
    {
      kanji: "虹",
      meaning: "rainbow",
    },
    {
      kanji: "蝶",
      meaning: "butterfly",
    },
    {
      kanji: "独",
      meaning: "single",
    },
    {
      kanji: "蚕",
      meaning: "silkworm",
    },
    {
      kanji: "風",
      meaning: "wind",
    },
    {
      kanji: "己",
      meaning: "self",
    },
    {
      kanji: "起",
      meaning: "rouse",
    },
    {
      kanji: "妃",
      meaning: "queen",
    },
    {
      kanji: "改",
      meaning: "reformation",
    },
    {
      kanji: "記",
      meaning: "scribe",
    },
    {
      kanji: "包",
      meaning: "wrap",
    },
    {
      kanji: "胞",
      meaning: "placenta",
    },
    {
      kanji: "砲",
      meaning: "cannon",
    },
    {
      kanji: "泡",
      meaning: "bubble",
    },
    {
      kanji: "亀",
      meaning: "tortoise",
    },
    {
      kanji: "電",
      meaning: "electricity",
    },
    {
      kanji: "竜",
      meaning: "dragon",
    },
    {
      kanji: "滝",
      meaning: "waterfall",
    },
    {
      kanji: "豚",
      meaning: "pork",
    },
    {
      kanji: "逐",
      meaning: "pursue",
    },
    {
      kanji: "遂",
      meaning: "consummate",
    },
    {
      kanji: "家",
      meaning: "house",
    },
    {
      kanji: "嫁",
      meaning: "marry into",
    },
    {
      kanji: "豪",
      meaning: "overpowering",
    },
    {
      kanji: "腸",
      meaning: "intestines",
    },
    {
      kanji: "場",
      meaning: "location",
    },
    {
      kanji: "湯",
      meaning: "hot water",
    },
    {
      kanji: "羊",
      meaning: "sheep",
    },
    {
      kanji: "美",
      meaning: "beauty",
    },
    {
      kanji: "洋",
      meaning: "ocean",
    },
    {
      kanji: "詳",
      meaning: "detailed",
    },
    {
      kanji: "鮮",
      meaning: "fresh",
    },
    {
      kanji: "達",
      meaning: "accomplished",
    },
    {
      kanji: "羨",
      meaning: "envious",
    },
    {
      kanji: "差",
      meaning: "distinction",
    },
    {
      kanji: "着",
      meaning: "don",
    },
    {
      kanji: "唯",
      meaning: "solely",
    },
    {
      kanji: "焦",
      meaning: "char",
    },
    {
      kanji: "礁",
      meaning: "reef",
    },
    {
      kanji: "集",
      meaning: "gather",
    },
    {
      kanji: "准",
      meaning: "quasi-",
    },
    {
      kanji: "進",
      meaning: "advance",
    },
    {
      kanji: "雑",
      meaning: "miscellaneous",
    },
    {
      kanji: "雌",
      meaning: "female",
    },
    {
      kanji: "準",
      meaning: "semi-",
    },
    {
      kanji: "奮",
      meaning: "stirred up",
    },
    {
      kanji: "奪",
      meaning: "rob",
    },
    {
      kanji: "確",
      meaning: "assurance",
    },
    {
      kanji: "午",
      meaning: "noon",
    },
    {
      kanji: "許",
      meaning: "permit",
    },
    {
      kanji: "歓",
      meaning: "delight",
    },
    {
      kanji: "権",
      meaning: "authority",
    },
    {
      kanji: "観",
      meaning: "outlook",
    },
    {
      kanji: "羽",
      meaning: "feathers",
    },
    {
      kanji: "習",
      meaning: "learn",
    },
    {
      kanji: "翌",
      meaning: "the following",
    },
    {
      kanji: "曜",
      meaning: "weekday",
    },
    {
      kanji: "濯",
      meaning: "laundry",
    },
    {
      kanji: "曰",
      meaning: "sayeth",
    },
    {
      kanji: "困",
      meaning: "quandary",
    },
    {
      kanji: "固",
      meaning: "harden",
    },
    {
      kanji: "国",
      meaning: "country",
    },
    {
      kanji: "団",
      meaning: "group",
    },
    {
      kanji: "因",
      meaning: "cause",
    },
    {
      kanji: "姻",
      meaning: "matrimony",
    },
    {
      kanji: "園",
      meaning: "park",
    },
    {
      kanji: "回",
      meaning: "-times",
    },
    {
      kanji: "壇",
      meaning: "podium",
    },
    {
      kanji: "店",
      meaning: "store",
    },
    {
      kanji: "庫",
      meaning: "warehouse",
    },
    {
      kanji: "庭",
      meaning: "courtyard",
    },
    {
      kanji: "庁",
      meaning: "government office",
    },
    {
      kanji: "床",
      meaning: "bed",
    },
    {
      kanji: "麻",
      meaning: "hemp",
    },
    {
      kanji: "磨",
      meaning: "grind",
    },
    {
      kanji: "心",
      meaning: "heart",
    },
    {
      kanji: "忘",
      meaning: "forget",
    },
    {
      kanji: "忍",
      meaning: "endure",
    },
    {
      kanji: "認",
      meaning: "acknowledge",
    },
    {
      kanji: "忌",
      meaning: "mourning",
    },
    {
      kanji: "志",
      meaning: "intention",
    },
    {
      kanji: "誌",
      meaning: "document",
    },
    {
      kanji: "忠",
      meaning: "loyalty",
    },
    {
      kanji: "串",
      meaning: "shish kebab",
    },
    {
      kanji: "患",
      meaning: "afflicted",
    },
    {
      kanji: "思",
      meaning: "think",
    },
    {
      kanji: "恩",
      meaning: "grace",
    },
    {
      kanji: "応",
      meaning: "apply",
    },
    {
      kanji: "意",
      meaning: "idea",
    },
    {
      kanji: "想",
      meaning: "concept",
    },
    {
      kanji: "息",
      meaning: "breath",
    },
    {
      kanji: "憩",
      meaning: "recess",
    },
    {
      kanji: "恵",
      meaning: "favor",
    },
    {
      kanji: "恐",
      meaning: "fear",
    },
    {
      kanji: "惑",
      meaning: "beguile",
    },
    {
      kanji: "感",
      meaning: "emotion",
    },
    {
      kanji: "憂",
      meaning: "melancholy",
    },
    {
      kanji: "寡",
      meaning: "widow",
    },
    {
      kanji: "忙",
      meaning: "busy",
    },
    {
      kanji: "悦",
      meaning: "ecstasy",
    },
    {
      kanji: "恒",
      meaning: "constancy",
    },
    {
      kanji: "悼",
      meaning: "lament",
    },
    {
      kanji: "悟",
      meaning: "enlightenment",
    },
    {
      kanji: "怖",
      meaning: "dreadful",
    },
    {
      kanji: "慌",
      meaning: "disconcerted",
    },
    {
      kanji: "悔",
      meaning: "repent",
    },
    {
      kanji: "憎",
      meaning: "hate",
    },
    {
      kanji: "慣",
      meaning: "accustomed",
    },
    {
      kanji: "愉",
      meaning: "pleasure",
    },
    {
      kanji: "惰",
      meaning: "lazy",
    },
    {
      kanji: "慎",
      meaning: "humility",
    },
    {
      kanji: "憾",
      meaning: "remorse",
    },
    {
      kanji: "憶",
      meaning: "recollection",
    },
    {
      kanji: "慕",
      meaning: "pining",
    },
    {
      kanji: "添",
      meaning: "annexed",
    },
    {
      kanji: "必",
      meaning: "invariably",
    },
    {
      kanji: "泌",
      meaning: "ooze",
    },
    {
      kanji: "手",
      meaning: "hand",
    },
    {
      kanji: "看",
      meaning: "watch over",
    },
    {
      kanji: "摩",
      meaning: "chafe",
    },
    {
      kanji: "我",
      meaning: "ego",
    },
    {
      kanji: "義",
      meaning: "righteousness",
    },
    {
      kanji: "議",
      meaning: "deliberation",
    },
    {
      kanji: "犠",
      meaning: "sacrifice",
    },
    {
      kanji: "抹",
      meaning: "rub",
    },
    {
      kanji: "抱",
      meaning: "embrace",
    },
    {
      kanji: "搭",
      meaning: "board",
    },
    {
      kanji: "抄",
      meaning: "extract",
    },
    {
      kanji: "抗",
      meaning: "confront",
    },
    {
      kanji: "批",
      meaning: "criticism",
    },
    {
      kanji: "招",
      meaning: "beckon",
    },
    {
      kanji: "拓",
      meaning: "clear the land",
    },
    {
      kanji: "拍",
      meaning: "clap",
    },
    {
      kanji: "打",
      meaning: "strike",
    },
    {
      kanji: "拘",
      meaning: "arrest",
    },
    {
      kanji: "捨",
      meaning: "discard",
    },
    {
      kanji: "拐",
      meaning: "kidnap",
    },
    {
      kanji: "摘",
      meaning: "pinch",
    },
    {
      kanji: "挑",
      meaning: "challenge",
    },
    {
      kanji: "指",
      meaning: "finger",
    },
    {
      kanji: "持",
      meaning: "hold",
    },
    {
      kanji: "括",
      meaning: "fasten",
    },
    {
      kanji: "揮",
      meaning: "brandish",
    },
    {
      kanji: "推",
      meaning: "conjecture",
    },
    {
      kanji: "揚",
      meaning: "hoist",
    },
    {
      kanji: "提",
      meaning: "propose",
    },
    {
      kanji: "損",
      meaning: "damage",
    },
    {
      kanji: "拾",
      meaning: "pick up",
    },
    {
      kanji: "担",
      meaning: "shouldering",
    },
    {
      kanji: "拠",
      meaning: "foothold",
    },
    {
      kanji: "描",
      meaning: "sketch",
    },
    {
      kanji: "操",
      meaning: "maneuver",
    },
    {
      kanji: "接",
      meaning: "touch",
    },
    {
      kanji: "掲",
      meaning: "put up a notice",
    },
    {
      kanji: "掛",
      meaning: "hang",
    },
    {
      kanji: "研",
      meaning: "polish",
    },
    {
      kanji: "戒",
      meaning: "commandment",
    },
    {
      kanji: "械",
      meaning: "contraption",
    },
    {
      kanji: "鼻",
      meaning: "nose",
    },
    {
      kanji: "刑",
      meaning: "punish",
    },
    {
      kanji: "型",
      meaning: "mould",
    },
    {
      kanji: "才",
      meaning: "genius",
    },
    {
      kanji: "財",
      meaning: "property",
    },
    {
      kanji: "材",
      meaning: "lumber",
    },
    {
      kanji: "存",
      meaning: "suppose",
    },
    {
      kanji: "在",
      meaning: "exist",
    },
    {
      kanji: "乃",
      meaning: "from",
    },
    {
      kanji: "携",
      meaning: "portable",
    },
    {
      kanji: "及",
      meaning: "reach out",
    },
    {
      kanji: "吸",
      meaning: "suck",
    },
    {
      kanji: "扱",
      meaning: "handle",
    },
    {
      kanji: "丈",
      meaning: "length",
    },
    {
      kanji: "史",
      meaning: "history",
    },
    {
      kanji: "吏",
      meaning: "officer",
    },
    {
      kanji: "更",
      meaning: "grow late",
    },
    {
      kanji: "硬",
      meaning: "stiff",
    },
    {
      kanji: "又",
      meaning: "or again",
    },
    {
      kanji: "双",
      meaning: "pair",
    },
    {
      kanji: "桑",
      meaning: "mulberry",
    },
    {
      kanji: "隻",
      meaning: "vessels",
    },
    {
      kanji: "護",
      meaning: "safeguard",
    },
    {
      kanji: "獲",
      meaning: "seize",
    },
    {
      kanji: "奴",
      meaning: "guy",
    },
    {
      kanji: "怒",
      meaning: "angry",
    },
    {
      kanji: "友",
      meaning: "friend",
    },
    {
      kanji: "抜",
      meaning: "slip out",
    },
    {
      kanji: "投",
      meaning: "throw",
    },
    {
      kanji: "没",
      meaning: "drown",
    },
    {
      kanji: "設",
      meaning: "establishment",
    },
    {
      kanji: "撃",
      meaning: "beat",
    },
    {
      kanji: "殻",
      meaning: "husk",
    },
    {
      kanji: "支",
      meaning: "branch",
    },
    {
      kanji: "技",
      meaning: "skill",
    },
    {
      kanji: "枝",
      meaning: "bough",
    },
    {
      kanji: "肢",
      meaning: "limb",
    },
    {
      kanji: "茎",
      meaning: "stalk",
    },
    {
      kanji: "怪",
      meaning: "suspicious",
    },
    {
      kanji: "軽",
      meaning: "lightly",
    },
    {
      kanji: "叔",
      meaning: "uncle",
    },
    {
      kanji: "督",
      meaning: "coach",
    },
    {
      kanji: "寂",
      meaning: "loneliness",
    },
    {
      kanji: "淑",
      meaning: "graceful",
    },
    {
      kanji: "反",
      meaning: "anti-",
    },
    {
      kanji: "坂",
      meaning: "slope",
    },
    {
      kanji: "板",
      meaning: "plank",
    },
    {
      kanji: "返",
      meaning: "return",
    },
    {
      kanji: "販",
      meaning: "marketing",
    },
    {
      kanji: "爪",
      meaning: "claw",
    },
    {
      kanji: "妥",
      meaning: "gentle",
    },
    {
      kanji: "乳",
      meaning: "milk",
    },
    {
      kanji: "浮",
      meaning: "floating",
    },
    {
      kanji: "将",
      meaning: "leader",
    },
    {
      kanji: "奨",
      meaning: "exhort",
    },
    {
      kanji: "採",
      meaning: "pick",
    },
    {
      kanji: "菜",
      meaning: "vegetable",
    },
    {
      kanji: "受",
      meaning: "accept",
    },
    {
      kanji: "授",
      meaning: "impart",
    },
    {
      kanji: "愛",
      meaning: "love",
    },
    {
      kanji: "払",
      meaning: "pay",
    },
    {
      kanji: "広",
      meaning: "wide",
    },
    {
      kanji: "拡",
      meaning: "broaden",
    },
    {
      kanji: "鉱",
      meaning: "mineral",
    },
    {
      kanji: "弁",
      meaning: "valve",
    },
    {
      kanji: "雄",
      meaning: "male",
    },
    {
      kanji: "台",
      meaning: "pedestal",
    },
    {
      kanji: "怠",
      meaning: "neglect",
    },
    {
      kanji: "治",
      meaning: "reign",
    },
    {
      kanji: "始",
      meaning: "commence",
    },
    {
      kanji: "胎",
      meaning: "womb",
    },
    {
      kanji: "窓",
      meaning: "window",
    },
    {
      kanji: "去",
      meaning: "gone",
    },
    {
      kanji: "法",
      meaning: "method",
    },
    {
      kanji: "会",
      meaning: "meeting",
    },
    {
      kanji: "至",
      meaning: "climax",
    },
    {
      kanji: "室",
      meaning: "room",
    },
    {
      kanji: "到",
      meaning: "arrival",
    },
    {
      kanji: "致",
      meaning: "doth",
    },
    {
      kanji: "互",
      meaning: "mutually",
    },
    {
      kanji: "棄",
      meaning: "abandon",
    },
    {
      kanji: "育",
      meaning: "bring up",
    },
    {
      kanji: "撤",
      meaning: "remove",
    },
    {
      kanji: "充",
      meaning: "allot",
    },
    {
      kanji: "銃",
      meaning: "gun",
    },
    {
      kanji: "硫",
      meaning: "sulfur",
    },
    {
      kanji: "流",
      meaning: "current",
    },
    {
      kanji: "允",
      meaning: "license",
    },
    {
      kanji: "唆",
      meaning: "tempt",
    },
    {
      kanji: "出",
      meaning: "exit",
    },
    {
      kanji: "山",
      meaning: "mountain",
    },
    {
      kanji: "拙",
      meaning: "bungling",
    },
    {
      kanji: "岩",
      meaning: "boulder",
    },
    {
      kanji: "炭",
      meaning: "charcoal",
    },
    {
      kanji: "岐",
      meaning: "branch off",
    },
    {
      kanji: "峠",
      meaning: "mountain pass",
    },
    {
      kanji: "崩",
      meaning: "crumble",
    },
    {
      kanji: "密",
      meaning: "secrecy",
    },
    {
      kanji: "蜜",
      meaning: "honey",
    },
    {
      kanji: "嵐",
      meaning: "storm",
    },
    {
      kanji: "崎",
      meaning: "promontory",
    },
    {
      kanji: "入",
      meaning: "enter",
    },
    {
      kanji: "込",
      meaning: "crowded",
    },
    {
      kanji: "分",
      meaning: "part",
    },
    {
      kanji: "貧",
      meaning: "poverty",
    },
    {
      kanji: "頒",
      meaning: "partition",
    },
    {
      kanji: "公",
      meaning: "public",
    },
    {
      kanji: "松",
      meaning: "pine tree",
    },
    {
      kanji: "翁",
      meaning: "venerable old man",
    },
    {
      kanji: "訟",
      meaning: "sue",
    },
    {
      kanji: "谷",
      meaning: "valley",
    },
    {
      kanji: "浴",
      meaning: "bathe",
    },
    {
      kanji: "容",
      meaning: "contain",
    },
    {
      kanji: "溶",
      meaning: "melt",
    },
    {
      kanji: "欲",
      meaning: "longing",
    },
    {
      kanji: "裕",
      meaning: "abundant",
    },
    {
      kanji: "鉛",
      meaning: "lead (metal)",
    },
    {
      kanji: "沿",
      meaning: "run alongside",
    },
    {
      kanji: "賞",
      meaning: "prize",
    },
    {
      kanji: "党",
      meaning: "party",
    },
    {
      kanji: "堂",
      meaning: "hall",
    },
    {
      kanji: "常",
      meaning: "usual",
    },
    {
      kanji: "裳",
      meaning: "skirt",
    },
    {
      kanji: "掌",
      meaning: "manipulate",
    },
    {
      kanji: "皮",
      meaning: "pelt",
    },
    {
      kanji: "波",
      meaning: "waves",
    },
    {
      kanji: "婆",
      meaning: "old woman",
    },
    {
      kanji: "披",
      meaning: "expose",
    },
    {
      kanji: "破",
      meaning: "rend",
    },
    {
      kanji: "被",
      meaning: "incur",
    },
    {
      kanji: "残",
      meaning: "remainder",
    },
    {
      kanji: "殉",
      meaning: "martyrdom",
    },
    {
      kanji: "殊",
      meaning: "particularly",
    },
    {
      kanji: "殖",
      meaning: "augment",
    },
    {
      kanji: "列",
      meaning: "file",
    },
    {
      kanji: "裂",
      meaning: "split",
    },
    {
      kanji: "烈",
      meaning: "ardent",
    },
    {
      kanji: "死",
      meaning: "death",
    },
    {
      kanji: "葬",
      meaning: "interment",
    },
    {
      kanji: "瞬",
      meaning: "wink",
    },
    {
      kanji: "耳",
      meaning: "ear",
    },
    {
      kanji: "取",
      meaning: "take",
    },
    {
      kanji: "趣",
      meaning: "gist",
    },
    {
      kanji: "最",
      meaning: "utmost",
    },
    {
      kanji: "撮",
      meaning: "snapshot",
    },
    {
      kanji: "恥",
      meaning: "shame",
    },
    {
      kanji: "職",
      meaning: "post",
    },
    {
      kanji: "聖",
      meaning: "holy",
    },
    {
      kanji: "敢",
      meaning: "daring",
    },
    {
      kanji: "聴",
      meaning: "listen",
    },
    {
      kanji: "懐",
      meaning: "pocket",
    },
    {
      kanji: "慢",
      meaning: "ridicule",
    },
    {
      kanji: "漫",
      meaning: "loose",
    },
    {
      kanji: "買",
      meaning: "buy",
    },
    {
      kanji: "置",
      meaning: "placement",
    },
    {
      kanji: "罰",
      meaning: "penalty",
    },
    {
      kanji: "寧",
      meaning: "rather",
    },
    {
      kanji: "濁",
      meaning: "voiced",
    },
    {
      kanji: "環",
      meaning: "ring",
    },
    {
      kanji: "還",
      meaning: "send back",
    },
    {
      kanji: "夫",
      meaning: "husband",
    },
    {
      kanji: "扶",
      meaning: "aid",
    },
    {
      kanji: "渓",
      meaning: "mountain stream",
    },
    {
      kanji: "規",
      meaning: "standard",
    },
    {
      kanji: "替",
      meaning: "exchange",
    },
    {
      kanji: "賛",
      meaning: "approve",
    },
    {
      kanji: "潜",
      meaning: "submerge",
    },
    {
      kanji: "失",
      meaning: "lose",
    },
    {
      kanji: "鉄",
      meaning: "iron",
    },
    {
      kanji: "迭",
      meaning: "alternate",
    },
    {
      kanji: "臣",
      meaning: "retainer",
    },
    {
      kanji: "姫",
      meaning: "princess",
    },
    {
      kanji: "蔵",
      meaning: "storehouse",
    },
    {
      kanji: "臓",
      meaning: "entrails",
    },
    {
      kanji: "賢",
      meaning: "intelligent",
    },
    {
      kanji: "堅",
      meaning: "strict",
    },
    {
      kanji: "臨",
      meaning: "look to",
    },
    {
      kanji: "覧",
      meaning: "perusal",
    },
    {
      kanji: "巨",
      meaning: "gigantic",
    },
    {
      kanji: "拒",
      meaning: "repel",
    },
    {
      kanji: "力",
      meaning: "power",
    },
    {
      kanji: "男",
      meaning: "man",
    },
    {
      kanji: "労",
      meaning: "labor",
    },
    {
      kanji: "募",
      meaning: "recruit",
    },
    {
      kanji: "劣",
      meaning: "inferiority",
    },
    {
      kanji: "功",
      meaning: "achievement",
    },
    {
      kanji: "勧",
      meaning: "persuade",
    },
    {
      kanji: "努",
      meaning: "toil",
    },
    {
      kanji: "励",
      meaning: "encourage",
    },
    {
      kanji: "加",
      meaning: "add",
    },
    {
      kanji: "賀",
      meaning: "congratulations",
    },
    {
      kanji: "架",
      meaning: "erect",
    },
    {
      kanji: "脇",
      meaning: "armpit",
    },
    {
      kanji: "脅",
      meaning: "threaten",
    },
    {
      kanji: "協",
      meaning: "co-",
    },
    {
      kanji: "行",
      meaning: "going",
    },
    {
      kanji: "律",
      meaning: "rhythm",
    },
    {
      kanji: "復",
      meaning: "restore",
    },
    {
      kanji: "得",
      meaning: "gain",
    },
    {
      kanji: "従",
      meaning: "accompany",
    },
    {
      kanji: "徒",
      meaning: "junior",
    },
    {
      kanji: "待",
      meaning: "wait",
    },
    {
      kanji: "往",
      meaning: "journey",
    },
    {
      kanji: "征",
      meaning: "subjugate",
    },
    {
      kanji: "径",
      meaning: "diameter",
    },
    {
      kanji: "彼",
      meaning: "he",
    },
    {
      kanji: "役",
      meaning: "duty",
    },
    {
      kanji: "徳",
      meaning: "benevolence",
    },
    {
      kanji: "徹",
      meaning: "penetrate",
    },
    {
      kanji: "徴",
      meaning: "indications",
    },
    {
      kanji: "懲",
      meaning: "penal",
    },
    {
      kanji: "微",
      meaning: "delicate",
    },
    {
      kanji: "街",
      meaning: "boulevard",
    },
    {
      kanji: "衡",
      meaning: "equilibrium",
    },
    {
      kanji: "稿",
      meaning: "draft",
    },
    {
      kanji: "稼",
      meaning: "earnings",
    },
    {
      kanji: "程",
      meaning: "extent",
    },
    {
      kanji: "税",
      meaning: "tax",
    },
    {
      kanji: "稚",
      meaning: "immature",
    },
    {
      kanji: "和",
      meaning: "harmony",
    },
    {
      kanji: "移",
      meaning: "shift",
    },
    {
      kanji: "秒",
      meaning: "second",
    },
    {
      kanji: "秋",
      meaning: "autumn",
    },
    {
      kanji: "愁",
      meaning: "distress",
    },
    {
      kanji: "私",
      meaning: "private",
    },
    {
      kanji: "秩",
      meaning: "regularity",
    },
    {
      kanji: "秘",
      meaning: "secret",
    },
    {
      kanji: "称",
      meaning: "appellation",
    },
    {
      kanji: "利",
      meaning: "profit",
    },
    {
      kanji: "梨",
      meaning: "pear tree",
    },
    {
      kanji: "穫",
      meaning: "harvest",
    },
    {
      kanji: "穂",
      meaning: "ear of a plant",
    },
    {
      kanji: "稲",
      meaning: "rice plant",
    },
    {
      kanji: "香",
      meaning: "incense",
    },
    {
      kanji: "季",
      meaning: "seasons",
    },
    {
      kanji: "委",
      meaning: "committee",
    },
    {
      kanji: "秀",
      meaning: "excel",
    },
    {
      kanji: "透",
      meaning: "transparent",
    },
    {
      kanji: "誘",
      meaning: "entice",
    },
    {
      kanji: "穀",
      meaning: "cereals",
    },
    {
      kanji: "菌",
      meaning: "germ",
    },
    {
      kanji: "米",
      meaning: "rice",
    },
    {
      kanji: "粉",
      meaning: "flour",
    },
    {
      kanji: "粘",
      meaning: "sticky",
    },
    {
      kanji: "粒",
      meaning: "grains",
    },
    {
      kanji: "粧",
      meaning: "cosmetics",
    },
    {
      kanji: "迷",
      meaning: "astray",
    },
    {
      kanji: "粋",
      meaning: "chic",
    },
    {
      kanji: "糧",
      meaning: "provisions",
    },
    {
      kanji: "菊",
      meaning: "chrysanthemum",
    },
    {
      kanji: "奥",
      meaning: "core",
    },
    {
      kanji: "数",
      meaning: "number",
    },
    {
      kanji: "楼",
      meaning: "watchtower",
    },
    {
      kanji: "類",
      meaning: "sort",
    },
    {
      kanji: "漆",
      meaning: "lacquer",
    },
    {
      kanji: "様",
      meaning: "Esq.",
    },
    {
      kanji: "求",
      meaning: "request",
    },
    {
      kanji: "球",
      meaning: "ball",
    },
    {
      kanji: "救",
      meaning: "salvation",
    },
    {
      kanji: "竹",
      meaning: "bamboo",
    },
    {
      kanji: "笑",
      meaning: "laugh",
    },
    {
      kanji: "笠",
      meaning: "bamboo hat",
    },
    {
      kanji: "笹",
      meaning: "bamboo grass",
    },
    {
      kanji: "筋",
      meaning: "muscle",
    },
    {
      kanji: "箱",
      meaning: "box",
    },
    {
      kanji: "筆",
      meaning: "writing brush",
    },
    {
      kanji: "筒",
      meaning: "cylinder",
    },
    {
      kanji: "等",
      meaning: "etc.",
    },
    {
      kanji: "算",
      meaning: "calculate",
    },
    {
      kanji: "答",
      meaning: "solution",
    },
    {
      kanji: "策",
      meaning: "scheme",
    },
    {
      kanji: "簿",
      meaning: "register",
    },
    {
      kanji: "築",
      meaning: "fabricate",
    },
    {
      kanji: "人",
      meaning: "person",
    },
    {
      kanji: "佐",
      meaning: "assistant",
    },
    {
      kanji: "但",
      meaning: "however",
    },
    {
      kanji: "住",
      meaning: "dwell",
    },
    {
      kanji: "位",
      meaning: "rank",
    },
    {
      kanji: "仲",
      meaning: "go-between",
    },
    {
      kanji: "体",
      meaning: "body",
    },
    {
      kanji: "悠",
      meaning: "remote",
    },
    {
      kanji: "件",
      meaning: "affair",
    },
    {
      kanji: "仕",
      meaning: "attend",
    },
    {
      kanji: "他",
      meaning: "other",
    },
    {
      kanji: "伏",
      meaning: "prostrated",
    },
    {
      kanji: "伝",
      meaning: "transmit",
    },
    {
      kanji: "仏",
      meaning: "Buddha",
    },
    {
      kanji: "休",
      meaning: "rest",
    },
    {
      kanji: "仮",
      meaning: "provisional",
    },
    {
      kanji: "伯",
      meaning: "chief",
    },
    {
      kanji: "俗",
      meaning: "vulgar",
    },
    {
      kanji: "信",
      meaning: "faith",
    },
    {
      kanji: "佳",
      meaning: "excellent",
    },
    {
      kanji: "依",
      meaning: "reliant",
    },
    {
      kanji: "例",
      meaning: "example",
    },
    {
      kanji: "個",
      meaning: "individual",
    },
    {
      kanji: "健",
      meaning: "healthy",
    },
    {
      kanji: "側",
      meaning: "side",
    },
    {
      kanji: "侍",
      meaning: "waiter",
    },
    {
      kanji: "停",
      meaning: "halt",
    },
    {
      kanji: "値",
      meaning: "price",
    },
    {
      kanji: "倣",
      meaning: "emulate",
    },
    {
      kanji: "倒",
      meaning: "overthrow",
    },
    {
      kanji: "偵",
      meaning: "spy",
    },
    {
      kanji: "僧",
      meaning: "Buddhist priest",
    },
    {
      kanji: "億",
      meaning: "hundred million",
    },
    {
      kanji: "儀",
      meaning: "ceremony",
    },
    {
      kanji: "償",
      meaning: "reparation",
    },
    {
      kanji: "仙",
      meaning: "hermit",
    },
    {
      kanji: "催",
      meaning: "sponsor",
    },
    {
      kanji: "仁",
      meaning: "humanity",
    },
    {
      kanji: "侮",
      meaning: "scorn",
    },
    {
      kanji: "使",
      meaning: "use",
    },
    {
      kanji: "便",
      meaning: "convenience",
    },
    {
      kanji: "倍",
      meaning: "double",
    },
    {
      kanji: "優",
      meaning: "tenderness",
    },
    {
      kanji: "伐",
      meaning: "fell",
    },
    {
      kanji: "宿",
      meaning: "inn",
    },
    {
      kanji: "傷",
      meaning: "wound",
    },
    {
      kanji: "保",
      meaning: "protect",
    },
    {
      kanji: "褒",
      meaning: "praise",
    },
    {
      kanji: "傑",
      meaning: "greatness",
    },
    {
      kanji: "付",
      meaning: "adhere",
    },
    {
      kanji: "符",
      meaning: "token",
    },
    {
      kanji: "府",
      meaning: "municipality",
    },
    {
      kanji: "任",
      meaning: "responsibility",
    },
    {
      kanji: "賃",
      meaning: "fare",
    },
    {
      kanji: "代",
      meaning: "substitute",
    },
    {
      kanji: "袋",
      meaning: "sack",
    },
    {
      kanji: "貸",
      meaning: "lend",
    },
    {
      kanji: "化",
      meaning: "change",
    },
    {
      kanji: "花",
      meaning: "flower",
    },
    {
      kanji: "貨",
      meaning: "freight",
    },
    {
      kanji: "傾",
      meaning: "lean",
    },
    {
      kanji: "何",
      meaning: "what",
    },
    {
      kanji: "荷",
      meaning: "baggage",
    },
    {
      kanji: "俊",
      meaning: "sagacious",
    },
    {
      kanji: "傍",
      meaning: "bystander",
    },
    {
      kanji: "久",
      meaning: "long time",
    },
    {
      kanji: "畝",
      meaning: "furrow",
    },
    {
      kanji: "囚",
      meaning: "captured",
    },
    {
      kanji: "内",
      meaning: "inside",
    },
    {
      kanji: "丙",
      meaning: "third class",
    },
    {
      kanji: "柄",
      meaning: "design",
    },
    {
      kanji: "肉",
      meaning: "meat",
    },
    {
      kanji: "腐",
      meaning: "rot",
    },
    {
      kanji: "座",
      meaning: "sit",
    },
    {
      kanji: "卒",
      meaning: "graduate",
    },
    {
      kanji: "傘",
      meaning: "umbrella",
    },
    {
      kanji: "匁",
      meaning: "monme",
    },
    {
      kanji: "以",
      meaning: "by means of",
    },
    {
      kanji: "似",
      meaning: "similar",
    },
    {
      kanji: "併",
      meaning: "join",
    },
    {
      kanji: "瓦",
      meaning: "tile",
    },
    {
      kanji: "瓶",
      meaning: "flower pot",
    },
    {
      kanji: "宮",
      meaning: "Shinto shrine",
    },
    {
      kanji: "営",
      meaning: "occupation",
    },
    {
      kanji: "善",
      meaning: "virtuous",
    },
    {
      kanji: "年",
      meaning: "year",
    },
    {
      kanji: "夜",
      meaning: "night",
    },
    {
      kanji: "液",
      meaning: "fluid",
    },
    {
      kanji: "塚",
      meaning: "hillock",
    },
    {
      kanji: "幣",
      meaning: "cash",
    },
    {
      kanji: "弊",
      meaning: "abuse",
    },
    {
      kanji: "喚",
      meaning: "yell",
    },
    {
      kanji: "換",
      meaning: "interchange",
    },
    {
      kanji: "融",
      meaning: "dissolve",
    },
    {
      kanji: "施",
      meaning: "alms",
    },
    {
      kanji: "旋",
      meaning: "rotation",
    },
    {
      kanji: "遊",
      meaning: "play",
    },
    {
      kanji: "旅",
      meaning: "trip",
    },
    {
      kanji: "勿",
      meaning: "not",
    },
    {
      kanji: "物",
      meaning: "thing",
    },
    {
      kanji: "易",
      meaning: "easy",
    },
    {
      kanji: "賜",
      meaning: "grant",
    },
    {
      kanji: "尿",
      meaning: "urine",
    },
    {
      kanji: "尼",
      meaning: "nun",
    },
    {
      kanji: "泥",
      meaning: "mud",
    },
    {
      kanji: "塀",
      meaning: "fence",
    },
    {
      kanji: "履",
      meaning: "footgear",
    },
    {
      kanji: "屋",
      meaning: "roof",
    },
    {
      kanji: "握",
      meaning: "grip",
    },
    {
      kanji: "屈",
      meaning: "yield",
    },
    {
      kanji: "掘",
      meaning: "dig",
    },
    {
      kanji: "堀",
      meaning: "ditch",
    },
    {
      kanji: "居",
      meaning: "reside",
    },
    {
      kanji: "据",
      meaning: "set",
    },
    {
      kanji: "層",
      meaning: "stratum",
    },
    {
      kanji: "局",
      meaning: "bureau",
    },
    {
      kanji: "遅",
      meaning: "slow",
    },
    {
      kanji: "漏",
      meaning: "leak",
    },
    {
      kanji: "刷",
      meaning: "printing",
    },
    {
      kanji: "尺",
      meaning: "shaku",
    },
    {
      kanji: "尽",
      meaning: "exhaust",
    },
    {
      kanji: "沢",
      meaning: "swamp",
    },
    {
      kanji: "訳",
      meaning: "translate",
    },
    {
      kanji: "択",
      meaning: "choose",
    },
    {
      kanji: "昼",
      meaning: "daytime",
    },
    {
      kanji: "戸",
      meaning: "door",
    },
    {
      kanji: "肩",
      meaning: "shoulder",
    },
    {
      kanji: "房",
      meaning: "tassel",
    },
    {
      kanji: "扇",
      meaning: "fan",
    },
    {
      kanji: "炉",
      meaning: "hearth",
    },
    {
      kanji: "戻",
      meaning: "re-",
    },
    {
      kanji: "涙",
      meaning: "tears",
    },
    {
      kanji: "雇",
      meaning: "employ",
    },
    {
      kanji: "顧",
      meaning: "look back",
    },
    {
      kanji: "啓",
      meaning: "disclose",
    },
    {
      kanji: "示",
      meaning: "show",
    },
    {
      kanji: "礼",
      meaning: "salutation",
    },
    {
      kanji: "祥",
      meaning: "auspicious",
    },
    {
      kanji: "祝",
      meaning: "celebrate",
    },
    {
      kanji: "福",
      meaning: "blessing",
    },
    {
      kanji: "祉",
      meaning: "welfare",
    },
    {
      kanji: "社",
      meaning: "company",
    },
    {
      kanji: "視",
      meaning: "inspection",
    },
    {
      kanji: "奈",
      meaning: "Nara",
    },
    {
      kanji: "尉",
      meaning: "military officer",
    },
    {
      kanji: "慰",
      meaning: "consolation",
    },
    {
      kanji: "款",
      meaning: "goodwill",
    },
    {
      kanji: "禁",
      meaning: "prohibition",
    },
    {
      kanji: "襟",
      meaning: "collar",
    },
    {
      kanji: "宗",
      meaning: "religion",
    },
    {
      kanji: "崇",
      meaning: "adore",
    },
    {
      kanji: "祭",
      meaning: "ritual",
    },
    {
      kanji: "察",
      meaning: "guess",
    },
    {
      kanji: "擦",
      meaning: "grate",
    },
    {
      kanji: "由",
      meaning: "wherefore",
    },
    {
      kanji: "抽",
      meaning: "pluck",
    },
    {
      kanji: "油",
      meaning: "oil",
    },
    {
      kanji: "袖",
      meaning: "sleeve",
    },
    {
      kanji: "宙",
      meaning: "mid-air",
    },
    {
      kanji: "届",
      meaning: "deliver",
    },
    {
      kanji: "笛",
      meaning: "flute",
    },
    {
      kanji: "軸",
      meaning: "axis",
    },
    {
      kanji: "甲",
      meaning: "armor",
    },
    {
      kanji: "押",
      meaning: "push",
    },
    {
      kanji: "岬",
      meaning: "headland",
    },
    {
      kanji: "挿",
      meaning: "insert",
    },
    {
      kanji: "申",
      meaning: "speaketh",
    },
    {
      kanji: "伸",
      meaning: "expand",
    },
    {
      kanji: "神",
      meaning: "gods",
    },
    {
      kanji: "捜",
      meaning: "search",
    },
    {
      kanji: "果",
      meaning: "fruit",
    },
    {
      kanji: "菓",
      meaning: "confectionary",
    },
    {
      kanji: "課",
      meaning: "chapter",
    },
    {
      kanji: "裸",
      meaning: "naked",
    },
    {
      kanji: "斤",
      meaning: "ax",
    },
    {
      kanji: "析",
      meaning: "chop",
    },
    {
      kanji: "所",
      meaning: "place",
    },
    {
      kanji: "祈",
      meaning: "pray",
    },
    {
      kanji: "近",
      meaning: "near",
    },
    {
      kanji: "折",
      meaning: "fold",
    },
    {
      kanji: "哲",
      meaning: "philosophy",
    },
    {
      kanji: "逝",
      meaning: "departed",
    },
    {
      kanji: "誓",
      meaning: "vow",
    },
    {
      kanji: "暫",
      meaning: "temporarily",
    },
    {
      kanji: "漸",
      meaning: "steadily",
    },
    {
      kanji: "断",
      meaning: "severance",
    },
    {
      kanji: "質",
      meaning: "substance",
    },
    {
      kanji: "斥",
      meaning: "reject",
    },
    {
      kanji: "訴",
      meaning: "accusation",
    },
    {
      kanji: "昨",
      meaning: "yesterday",
    },
    {
      kanji: "詐",
      meaning: "lie",
    },
    {
      kanji: "作",
      meaning: "make",
    },
    {
      kanji: "雪",
      meaning: "snow",
    },
    {
      kanji: "録",
      meaning: "record",
    },
    {
      kanji: "尋",
      meaning: "inquire",
    },
    {
      kanji: "急",
      meaning: "hurry",
    },
    {
      kanji: "穏",
      meaning: "calm",
    },
    {
      kanji: "侵",
      meaning: "encroach",
    },
    {
      kanji: "浸",
      meaning: "immersed",
    },
    {
      kanji: "寝",
      meaning: "lie down",
    },
    {
      kanji: "婦",
      meaning: "lady",
    },
    {
      kanji: "掃",
      meaning: "sweep",
    },
    {
      kanji: "当",
      meaning: "hit",
    },
    {
      kanji: "争",
      meaning: "contend",
    },
    {
      kanji: "浄",
      meaning: "clean",
    },
    {
      kanji: "事",
      meaning: "matter",
    },
    {
      kanji: "唐",
      meaning: "T'ang",
    },
    {
      kanji: "糖",
      meaning: "sugar",
    },
    {
      kanji: "康",
      meaning: "sane",
    },
    {
      kanji: "逮",
      meaning: "apprehend",
    },
    {
      kanji: "伊",
      meaning: "Italy",
    },
    {
      kanji: "君",
      meaning: "old boy",
    },
    {
      kanji: "群",
      meaning: "flock",
    },
    {
      kanji: "耐",
      meaning: "-proof",
    },
    {
      kanji: "需",
      meaning: "demand",
    },
    {
      kanji: "儒",
      meaning: "Confucian",
    },
    {
      kanji: "端",
      meaning: "edge",
    },
    {
      kanji: "両",
      meaning: "both",
    },
    {
      kanji: "満",
      meaning: "full",
    },
    {
      kanji: "画",
      meaning: "brush stroke",
    },
    {
      kanji: "歯",
      meaning: "tooth",
    },
    {
      kanji: "曲",
      meaning: "bend",
    },
    {
      kanji: "曹",
      meaning: "cadet",
    },
    {
      kanji: "遭",
      meaning: "encounter",
    },
    {
      kanji: "漕",
      meaning: "rowing",
    },
    {
      kanji: "槽",
      meaning: "vat",
    },
    {
      kanji: "斗",
      meaning: "Big Dipper",
    },
    {
      kanji: "料",
      meaning: "fee",
    },
    {
      kanji: "科",
      meaning: "department",
    },
    {
      kanji: "図",
      meaning: "map",
    },
    {
      kanji: "用",
      meaning: "utilize",
    },
    {
      kanji: "庸",
      meaning: "comfortable",
    },
    {
      kanji: "備",
      meaning: "equip",
    },
    {
      kanji: "昔",
      meaning: "once upon a time",
    },
    {
      kanji: "錯",
      meaning: "confused",
    },
    {
      kanji: "借",
      meaning: "borrow",
    },
    {
      kanji: "惜",
      meaning: "pity",
    },
    {
      kanji: "措",
      meaning: "set aside",
    },
    {
      kanji: "散",
      meaning: "scatter",
    },
    {
      kanji: "廿",
      meaning: "twenty",
    },
    {
      kanji: "庶",
      meaning: "commoner",
    },
    {
      kanji: "遮",
      meaning: "intercept",
    },
    {
      kanji: "席",
      meaning: "seat",
    },
    {
      kanji: "度",
      meaning: "degrees",
    },
    {
      kanji: "渡",
      meaning: "transit",
    },
    {
      kanji: "奔",
      meaning: "bustle",
    },
    {
      kanji: "噴",
      meaning: "erupt",
    },
    {
      kanji: "墳",
      meaning: "tomb",
    },
    {
      kanji: "憤",
      meaning: "aroused",
    },
    {
      kanji: "焼",
      meaning: "bake",
    },
    {
      kanji: "暁",
      meaning: "daybreak",
    },
    {
      kanji: "半",
      meaning: "half",
    },
    {
      kanji: "伴",
      meaning: "consort",
    },
    {
      kanji: "畔",
      meaning: "paddy ridge",
    },
    {
      kanji: "判",
      meaning: "judgment",
    },
    {
      kanji: "券",
      meaning: "ticket",
    },
    {
      kanji: "巻",
      meaning: "scroll",
    },
    {
      kanji: "圏",
      meaning: "sphere",
    },
    {
      kanji: "勝",
      meaning: "victory",
    },
    {
      kanji: "藤",
      meaning: "wisteria",
    },
    {
      kanji: "謄",
      meaning: "facsimilie",
    },
    {
      kanji: "片",
      meaning: "one-sided",
    },
    {
      kanji: "版",
      meaning: "printing block",
    },
    {
      kanji: "之",
      meaning: "of",
    },
    {
      kanji: "乏",
      meaning: "destitution",
    },
    {
      kanji: "芝",
      meaning: "turf",
    },
    {
      kanji: "不",
      meaning: "negative",
    },
    {
      kanji: "否",
      meaning: "negate",
    },
    {
      kanji: "杯",
      meaning: "cupfuls",
    },
    {
      kanji: "矢",
      meaning: "dart",
    },
    {
      kanji: "矯",
      meaning: "rectify",
    },
    {
      kanji: "族",
      meaning: "tribe",
    },
    {
      kanji: "知",
      meaning: "know",
    },
    {
      kanji: "智",
      meaning: "wisdom",
    },
    {
      kanji: "矛",
      meaning: "halberd",
    },
    {
      kanji: "柔",
      meaning: "tender",
    },
    {
      kanji: "務",
      meaning: "task",
    },
    {
      kanji: "霧",
      meaning: "fog",
    },
    {
      kanji: "班",
      meaning: "squad",
    },
    {
      kanji: "帰",
      meaning: "homecoming",
    },
    {
      kanji: "弓",
      meaning: "bow",
    },
    {
      kanji: "引",
      meaning: "pull",
    },
    {
      kanji: "弔",
      meaning: "condolences",
    },
    {
      kanji: "弘",
      meaning: "vast",
    },
    {
      kanji: "強",
      meaning: "strong",
    },
    {
      kanji: "弱",
      meaning: "weak",
    },
    {
      kanji: "沸",
      meaning: "seethe",
    },
    {
      kanji: "費",
      meaning: "expense",
    },
    {
      kanji: "第",
      meaning: "No.",
    },
    {
      kanji: "弟",
      meaning: "younger brother",
    },
    {
      kanji: "巧",
      meaning: "adroit",
    },
    {
      kanji: "号",
      meaning: "nickname",
    },
    {
      kanji: "朽",
      meaning: "decay",
    },
    {
      kanji: "誇",
      meaning: "boast",
    },
    {
      kanji: "汚",
      meaning: "dirty",
    },
    {
      kanji: "与",
      meaning: "bestow",
    },
    {
      kanji: "写",
      meaning: "copy",
    },
    {
      kanji: "身",
      meaning: "somebody",
    },
    {
      kanji: "射",
      meaning: "shoot",
    },
    {
      kanji: "謝",
      meaning: "apologize",
    },
    {
      kanji: "老",
      meaning: "old man",
    },
    {
      kanji: "考",
      meaning: "consider",
    },
    {
      kanji: "孝",
      meaning: "filial piety",
    },
    {
      kanji: "教",
      meaning: "teach",
    },
    {
      kanji: "拷",
      meaning: "torture",
    },
    {
      kanji: "者",
      meaning: "someone",
    },
    {
      kanji: "煮",
      meaning: "boil",
    },
    {
      kanji: "著",
      meaning: "renowned",
    },
    {
      kanji: "署",
      meaning: "signature",
    },
    {
      kanji: "暑",
      meaning: "sultry",
    },
    {
      kanji: "諸",
      meaning: "various",
    },
    {
      kanji: "猪",
      meaning: "boar",
    },
    {
      kanji: "渚",
      meaning: "strand",
    },
    {
      kanji: "賭",
      meaning: "gamble",
    },
    {
      kanji: "峡",
      meaning: "gorge",
    },
    {
      kanji: "狭",
      meaning: "cramped",
    },
    {
      kanji: "挟",
      meaning: "sandwiched",
    },
    {
      kanji: "追",
      meaning: "chase",
    },
    {
      kanji: "師",
      meaning: "expert",
    },
    {
      kanji: "帥",
      meaning: "commander",
    },
    {
      kanji: "官",
      meaning: "bureaucrat",
    },
    {
      kanji: "棺",
      meaning: "coffin",
    },
    {
      kanji: "管",
      meaning: "pipe",
    },
    {
      kanji: "父",
      meaning: "father",
    },
    {
      kanji: "交",
      meaning: "mingle",
    },
    {
      kanji: "効",
      meaning: "merit",
    },
    {
      kanji: "較",
      meaning: "contrast",
    },
    {
      kanji: "校",
      meaning: "exam",
    },
    {
      kanji: "足",
      meaning: "leg",
    },
    {
      kanji: "促",
      meaning: "stimulate",
    },
    {
      kanji: "距",
      meaning: "long-distance",
    },
    {
      kanji: "路",
      meaning: "path",
    },
    {
      kanji: "露",
      meaning: "dew",
    },
    {
      kanji: "跳",
      meaning: "hop",
    },
    {
      kanji: "躍",
      meaning: "leap",
    },
    {
      kanji: "践",
      meaning: "tread",
    },
    {
      kanji: "踏",
      meaning: "step",
    },
    {
      kanji: "骨",
      meaning: "skeleton",
    },
    {
      kanji: "滑",
      meaning: "slippery",
    },
    {
      kanji: "髄",
      meaning: "marrow",
    },
    {
      kanji: "禍",
      meaning: "calamity",
    },
    {
      kanji: "渦",
      meaning: "whirlpool",
    },
    {
      kanji: "過",
      meaning: "overdo",
    },
    {
      kanji: "阪",
      meaning: "Heights",
    },
    {
      kanji: "阿",
      meaning: "Africa",
    },
    {
      kanji: "際",
      meaning: "occasion",
    },
    {
      kanji: "障",
      meaning: "hinder",
    },
    {
      kanji: "随",
      meaning: "follow",
    },
    {
      kanji: "陪",
      meaning: "auxiliary",
    },
    {
      kanji: "陽",
      meaning: "sunshine",
    },
    {
      kanji: "陳",
      meaning: "line up",
    },
    {
      kanji: "防",
      meaning: "ward off",
    },
    {
      kanji: "附",
      meaning: "affixed",
    },
    {
      kanji: "院",
      meaning: "Inst.",
    },
    {
      kanji: "陣",
      meaning: "camp",
    },
    {
      kanji: "隊",
      meaning: "regiment",
    },
    {
      kanji: "墜",
      meaning: "crash",
    },
    {
      kanji: "降",
      meaning: "descend",
    },
    {
      kanji: "階",
      meaning: "story",
    },
    {
      kanji: "陛",
      meaning: "highness",
    },
    {
      kanji: "隣",
      meaning: "neighboring",
    },
    {
      kanji: "隔",
      meaning: "isolate",
    },
    {
      kanji: "隠",
      meaning: "conceal",
    },
    {
      kanji: "堕",
      meaning: "degenerate",
    },
    {
      kanji: "陥",
      meaning: "collapse",
    },
    {
      kanji: "穴",
      meaning: "hole",
    },
    {
      kanji: "空",
      meaning: "empty",
    },
    {
      kanji: "控",
      meaning: "withdraw",
    },
    {
      kanji: "突",
      meaning: "stab",
    },
    {
      kanji: "究",
      meaning: "research",
    },
    {
      kanji: "窒",
      meaning: "plug up",
    },
    {
      kanji: "窃",
      meaning: "stealth",
    },
    {
      kanji: "窪",
      meaning: "depression",
    },
    {
      kanji: "搾",
      meaning: "squeeze",
    },
    {
      kanji: "窯",
      meaning: "kiln",
    },
    {
      kanji: "窮",
      meaning: "hard up",
    },
    {
      kanji: "探",
      meaning: "grope",
    },
    {
      kanji: "深",
      meaning: "deep",
    },
    {
      kanji: "丘",
      meaning: "hill",
    },
    {
      kanji: "岳",
      meaning: "Point",
    },
    {
      kanji: "兵",
      meaning: "soldier",
    },
    {
      kanji: "浜",
      meaning: "seacoast",
    },
    {
      kanji: "糸",
      meaning: "thread",
    },
    {
      kanji: "織",
      meaning: "weave",
    },
    {
      kanji: "繕",
      meaning: "darning",
    },
    {
      kanji: "縮",
      meaning: "shrink",
    },
    {
      kanji: "繁",
      meaning: "luxuriant",
    },
    {
      kanji: "縦",
      meaning: "vertical",
    },
    {
      kanji: "線",
      meaning: "line",
    },
    {
      kanji: "締",
      meaning: "tighten",
    },
    {
      kanji: "維",
      meaning: "fiber",
    },
    {
      kanji: "羅",
      meaning: "gauze",
    },
    {
      kanji: "練",
      meaning: "practice",
    },
    {
      kanji: "緒",
      meaning: "thong",
    },
    {
      kanji: "続",
      meaning: "continue",
    },
    {
      kanji: "絵",
      meaning: "picture",
    },
    {
      kanji: "統",
      meaning: "overall",
    },
    {
      kanji: "絞",
      meaning: "strangle",
    },
    {
      kanji: "給",
      meaning: "salary",
    },
    {
      kanji: "絡",
      meaning: "entwine",
    },
    {
      kanji: "結",
      meaning: "tie",
    },
    {
      kanji: "終",
      meaning: "end",
    },
    {
      kanji: "級",
      meaning: "class",
    },
    {
      kanji: "紀",
      meaning: "chronicle",
    },
    {
      kanji: "紅",
      meaning: "crimson",
    },
    {
      kanji: "納",
      meaning: "settlement",
    },
    {
      kanji: "紡",
      meaning: "spinning",
    },
    {
      kanji: "紛",
      meaning: "distract",
    },
    {
      kanji: "紹",
      meaning: "introduce",
    },
    {
      kanji: "経",
      meaning: "sutra",
    },
    {
      kanji: "紳",
      meaning: "sire",
    },
    {
      kanji: "約",
      meaning: "promise",
    },
    {
      kanji: "細",
      meaning: "dainty",
    },
    {
      kanji: "累",
      meaning: "accumulate",
    },
    {
      kanji: "索",
      meaning: "cord",
    },
    {
      kanji: "総",
      meaning: "general",
    },
    {
      kanji: "綿",
      meaning: "cotton",
    },
    {
      kanji: "絹",
      meaning: "silk",
    },
    {
      kanji: "繰",
      meaning: "winding",
    },
    {
      kanji: "継",
      meaning: "inherit",
    },
    {
      kanji: "緑",
      meaning: "green",
    },
    {
      kanji: "縁",
      meaning: "affinity",
    },
    {
      kanji: "網",
      meaning: "netting",
    },
    {
      kanji: "緊",
      meaning: "tense",
    },
    {
      kanji: "紫",
      meaning: "purple",
    },
    {
      kanji: "縛",
      meaning: "truss",
    },
    {
      kanji: "縄",
      meaning: "straw rope",
    },
    {
      kanji: "幼",
      meaning: "infancy",
    },
    {
      kanji: "後",
      meaning: "behind",
    },
    {
      kanji: "幽",
      meaning: "faint",
    },
    {
      kanji: "幾",
      meaning: "how many",
    },
    {
      kanji: "機",
      meaning: "mechanism",
    },
    {
      kanji: "玄",
      meaning: "mysterious",
    },
    {
      kanji: "畜",
      meaning: "livestock",
    },
    {
      kanji: "蓄",
      meaning: "amass",
    },
    {
      kanji: "弦",
      meaning: "bowstring",
    },
    {
      kanji: "擁",
      meaning: "hug",
    },
    {
      kanji: "滋",
      meaning: "nourishing",
    },
    {
      kanji: "慈",
      meaning: "mercy",
    },
    {
      kanji: "磁",
      meaning: "magnet",
    },
    {
      kanji: "系",
      meaning: "lineage",
    },
    {
      kanji: "係",
      meaning: "person in charge",
    },
    {
      kanji: "孫",
      meaning: "grandchild",
    },
    {
      kanji: "懸",
      meaning: "suspend",
    },
    {
      kanji: "却",
      meaning: "instead",
    },
    {
      kanji: "脚",
      meaning: "shins",
    },
    {
      kanji: "卸",
      meaning: "wholesale",
    },
    {
      kanji: "御",
      meaning: "honorable",
    },
    {
      kanji: "服",
      meaning: "clothing",
    },
    {
      kanji: "命",
      meaning: "fate",
    },
    {
      kanji: "令",
      meaning: "orders",
    },
    {
      kanji: "零",
      meaning: "zero",
    },
    {
      kanji: "齢",
      meaning: "age",
    },
    {
      kanji: "冷",
      meaning: "cool",
    },
    {
      kanji: "領",
      meaning: "jurisdiction",
    },
    {
      kanji: "鈴",
      meaning: "small bell",
    },
    {
      kanji: "勇",
      meaning: "courage",
    },
    {
      kanji: "通",
      meaning: "traffic",
    },
    {
      kanji: "踊",
      meaning: "jump",
    },
    {
      kanji: "疑",
      meaning: "doubt",
    },
    {
      kanji: "擬",
      meaning: "mimic",
    },
    {
      kanji: "凝",
      meaning: "congeal",
    },
    {
      kanji: "範",
      meaning: "pattern",
    },
    {
      kanji: "犯",
      meaning: "crime",
    },
    {
      kanji: "厄",
      meaning: "unlucky",
    },
    {
      kanji: "危",
      meaning: "dangerous",
    },
    {
      kanji: "宛",
      meaning: "address",
    },
    {
      kanji: "腕",
      meaning: "arm",
    },
    {
      kanji: "苑",
      meaning: "garden",
    },
    {
      kanji: "怨",
      meaning: "grudge",
    },
    {
      kanji: "柳",
      meaning: "willow",
    },
    {
      kanji: "卵",
      meaning: "egg",
    },
    {
      kanji: "留",
      meaning: "detain",
    },
    {
      kanji: "貿",
      meaning: "trade",
    },
    {
      kanji: "印",
      meaning: "stamp",
    },
    {
      kanji: "興",
      meaning: "entertain",
    },
    {
      kanji: "酉",
      meaning: "sign of the bird",
    },
    {
      kanji: "酒",
      meaning: "sake",
    },
    {
      kanji: "酌",
      meaning: "bartending",
    },
    {
      kanji: "酵",
      meaning: "fermentation",
    },
    {
      kanji: "酷",
      meaning: "cruel",
    },
    {
      kanji: "酬",
      meaning: "repay",
    },
    {
      kanji: "酪",
      meaning: "dairy products",
    },
    {
      kanji: "酢",
      meaning: "vinegar",
    },
    {
      kanji: "酔",
      meaning: "drunk",
    },
    {
      kanji: "配",
      meaning: "distribute",
    },
    {
      kanji: "酸",
      meaning: "acid",
    },
    {
      kanji: "猶",
      meaning: "waver",
    },
    {
      kanji: "尊",
      meaning: "revered",
    },
    {
      kanji: "豆",
      meaning: "beans",
    },
    {
      kanji: "頭",
      meaning: "head",
    },
    {
      kanji: "短",
      meaning: "short",
    },
    {
      kanji: "豊",
      meaning: "bountiful",
    },
    {
      kanji: "鼓",
      meaning: "drum",
    },
    {
      kanji: "喜",
      meaning: "rejoice",
    },
    {
      kanji: "樹",
      meaning: "timber-trees",
    },
    {
      kanji: "皿",
      meaning: "dish",
    },
    {
      kanji: "血",
      meaning: "blood",
    },
    {
      kanji: "盆",
      meaning: "basin",
    },
    {
      kanji: "盟",
      meaning: "alliance",
    },
    {
      kanji: "盗",
      meaning: "steal",
    },
    {
      kanji: "温",
      meaning: "warm",
    },
    {
      kanji: "監",
      meaning: "oversee",
    },
    {
      kanji: "濫",
      meaning: "overflow",
    },
    {
      kanji: "鑑",
      meaning: "specimen",
    },
    {
      kanji: "猛",
      meaning: "fierce",
    },
    {
      kanji: "盛",
      meaning: "boom",
    },
    {
      kanji: "塩",
      meaning: "salt",
    },
    {
      kanji: "銀",
      meaning: "silver",
    },
    {
      kanji: "恨",
      meaning: "resentment",
    },
    {
      kanji: "根",
      meaning: "root",
    },
    {
      kanji: "即",
      meaning: "instant",
    },
    {
      kanji: "爵",
      meaning: "baron",
    },
    {
      kanji: "節",
      meaning: "node",
    },
    {
      kanji: "退",
      meaning: "retreat",
    },
    {
      kanji: "限",
      meaning: "limit",
    },
    {
      kanji: "眼",
      meaning: "eyeball",
    },
    {
      kanji: "良",
      meaning: "good",
    },
    {
      kanji: "朗",
      meaning: "melodious",
    },
    {
      kanji: "浪",
      meaning: "wandering",
    },
    {
      kanji: "娘",
      meaning: "daughter",
    },
    {
      kanji: "食",
      meaning: "eat",
    },
    {
      kanji: "飯",
      meaning: "meal",
    },
    {
      kanji: "飲",
      meaning: "drink",
    },
    {
      kanji: "飢",
      meaning: "hungry",
    },
    {
      kanji: "餓",
      meaning: "starve",
    },
    {
      kanji: "飾",
      meaning: "decorate",
    },
    {
      kanji: "館",
      meaning: "Bldg.",
    },
    {
      kanji: "養",
      meaning: "foster",
    },
    {
      kanji: "飽",
      meaning: "sated",
    },
    {
      kanji: "既",
      meaning: "previously",
    },
    {
      kanji: "概",
      meaning: "outline",
    },
    {
      kanji: "慨",
      meaning: "rue",
    },
    {
      kanji: "平",
      meaning: "even",
    },
    {
      kanji: "呼",
      meaning: "call",
    },
    {
      kanji: "坪",
      meaning: "two-mat area",
    },
    {
      kanji: "評",
      meaning: "evaluate",
    },
    {
      kanji: "刈",
      meaning: "reap",
    },
    {
      kanji: "希",
      meaning: "hope",
    },
    {
      kanji: "凶",
      meaning: "villain",
    },
    {
      kanji: "胸",
      meaning: "bosom",
    },
    {
      kanji: "離",
      meaning: "detach",
    },
    {
      kanji: "殺",
      meaning: "kill",
    },
    {
      kanji: "純",
      meaning: "genuine",
    },
    {
      kanji: "鈍",
      meaning: "dull",
    },
    {
      kanji: "辛",
      meaning: "spicy",
    },
    {
      kanji: "辞",
      meaning: "resign",
    },
    {
      kanji: "梓",
      meaning: "catalpa",
    },
    {
      kanji: "宰",
      meaning: "superintend",
    },
    {
      kanji: "壁",
      meaning: "wall",
    },
    {
      kanji: "避",
      meaning: "evade",
    },
    {
      kanji: "新",
      meaning: "new",
    },
    {
      kanji: "薪",
      meaning: "firewood",
    },
    {
      kanji: "親",
      meaning: "parent",
    },
    {
      kanji: "幸",
      meaning: "happiness",
    },
    {
      kanji: "執",
      meaning: "tenacious",
    },
    {
      kanji: "報",
      meaning: "report",
    },
    {
      kanji: "叫",
      meaning: "shout",
    },
    {
      kanji: "糾",
      meaning: "twist",
    },
    {
      kanji: "収",
      meaning: "income",
    },
    {
      kanji: "卑",
      meaning: "lowly",
    },
    {
      kanji: "碑",
      meaning: "tombstone",
    },
    {
      kanji: "陸",
      meaning: "land",
    },
    {
      kanji: "睦",
      meaning: "intimate",
    },
    {
      kanji: "勢",
      meaning: "forces",
    },
    {
      kanji: "熱",
      meaning: "heat",
    },
    {
      kanji: "菱",
      meaning: "diamond",
    },
    {
      kanji: "陵",
      meaning: "mausoleum",
    },
    {
      kanji: "亥",
      meaning: "sign of the hog",
    },
    {
      kanji: "核",
      meaning: "nucleus",
    },
    {
      kanji: "刻",
      meaning: "engrave",
    },
    {
      kanji: "該",
      meaning: "above-stated",
    },
    {
      kanji: "劾",
      meaning: "censure",
    },
    {
      kanji: "述",
      meaning: "mention",
    },
    {
      kanji: "術",
      meaning: "art",
    },
    {
      kanji: "寒",
      meaning: "cold",
    },
    {
      kanji: "醸",
      meaning: "brew",
    },
    {
      kanji: "譲",
      meaning: "defer",
    },
    {
      kanji: "壌",
      meaning: "lot",
    },
    {
      kanji: "嬢",
      meaning: "lass",
    },
    {
      kanji: "毒",
      meaning: "poison",
    },
    {
      kanji: "素",
      meaning: "elementary",
    },
    {
      kanji: "麦",
      meaning: "barley",
    },
    {
      kanji: "青",
      meaning: "blue",
    },
    {
      kanji: "精",
      meaning: "refined",
    },
    {
      kanji: "請",
      meaning: "solicit",
    },
    {
      kanji: "情",
      meaning: "feelings",
    },
    {
      kanji: "晴",
      meaning: "clear up",
    },
    {
      kanji: "清",
      meaning: "pure",
    },
    {
      kanji: "静",
      meaning: "quiet",
    },
    {
      kanji: "責",
      meaning: "blame",
    },
    {
      kanji: "績",
      meaning: "exploits",
    },
    {
      kanji: "積",
      meaning: "volume",
    },
    {
      kanji: "債",
      meaning: "bond",
    },
    {
      kanji: "漬",
      meaning: "pickling",
    },
    {
      kanji: "表",
      meaning: "surface",
    },
    {
      kanji: "俵",
      meaning: "bag",
    },
    {
      kanji: "潔",
      meaning: "undefiled",
    },
    {
      kanji: "契",
      meaning: "pledge",
    },
    {
      kanji: "喫",
      meaning: "consume",
    },
    {
      kanji: "害",
      meaning: "harm",
    },
    {
      kanji: "轄",
      meaning: "control",
    },
    {
      kanji: "割",
      meaning: "proportion",
    },
    {
      kanji: "憲",
      meaning: "constitution",
    },
    {
      kanji: "生",
      meaning: "life",
    },
    {
      kanji: "星",
      meaning: "star",
    },
    {
      kanji: "姓",
      meaning: "surname",
    },
    {
      kanji: "性",
      meaning: "sex",
    },
    {
      kanji: "牲",
      meaning: "animal sacrifice",
    },
    {
      kanji: "産",
      meaning: "products",
    },
    {
      kanji: "隆",
      meaning: "hump",
    },
    {
      kanji: "峰",
      meaning: "summit",
    },
    {
      kanji: "縫",
      meaning: "sew",
    },
    {
      kanji: "拝",
      meaning: "worship",
    },
    {
      kanji: "寿",
      meaning: "longevity",
    },
    {
      kanji: "鋳",
      meaning: "casting",
    },
    {
      kanji: "籍",
      meaning: "enroll",
    },
    {
      kanji: "春",
      meaning: "springtime",
    },
    {
      kanji: "椿",
      meaning: "camellia",
    },
    {
      kanji: "泰",
      meaning: "peaceful",
    },
    {
      kanji: "奏",
      meaning: "play music",
    },
    {
      kanji: "実",
      meaning: "reality",
    },
    {
      kanji: "奉",
      meaning: "dedicate",
    },
    {
      kanji: "俸",
      meaning: "stipend",
    },
    {
      kanji: "棒",
      meaning: "rod",
    },
    {
      kanji: "謹",
      meaning: "discreet",
    },
    {
      kanji: "勤",
      meaning: "diligence",
    },
    {
      kanji: "漢",
      meaning: "Sino-",
    },
    {
      kanji: "嘆",
      meaning: "sigh",
    },
    {
      kanji: "難",
      meaning: "difficult",
    },
    {
      kanji: "華",
      meaning: "splendor",
    },
    {
      kanji: "垂",
      meaning: "droop",
    },
    {
      kanji: "睡",
      meaning: "drowsy",
    },
    {
      kanji: "錘",
      meaning: "spindle",
    },
    {
      kanji: "乗",
      meaning: "ride",
    },
    {
      kanji: "剰",
      meaning: "surplus",
    },
    {
      kanji: "今",
      meaning: "now",
    },
    {
      kanji: "含",
      meaning: "include",
    },
    {
      kanji: "吟",
      meaning: "versify",
    },
    {
      kanji: "念",
      meaning: "wish",
    },
    {
      kanji: "琴",
      meaning: "harp",
    },
    {
      kanji: "陰",
      meaning: "shade",
    },
    {
      kanji: "予",
      meaning: "beforehand",
    },
    {
      kanji: "序",
      meaning: "preface",
    },
    {
      kanji: "預",
      meaning: "deposit",
    },
    {
      kanji: "野",
      meaning: "plains",
    },
    {
      kanji: "兼",
      meaning: "concurrently",
    },
    {
      kanji: "嫌",
      meaning: "dislike",
    },
    {
      kanji: "鎌",
      meaning: "sickle",
    },
    {
      kanji: "謙",
      meaning: "self-effacing",
    },
    {
      kanji: "廉",
      meaning: "bargain",
    },
    {
      kanji: "西",
      meaning: "west",
    },
    {
      kanji: "価",
      meaning: "value",
    },
    {
      kanji: "要",
      meaning: "need",
    },
    {
      kanji: "腰",
      meaning: "loins",
    },
    {
      kanji: "票",
      meaning: "ballot",
    },
    {
      kanji: "漂",
      meaning: "drift",
    },
    {
      kanji: "標",
      meaning: "signpost",
    },
    {
      kanji: "栗",
      meaning: "chestnut",
    },
    {
      kanji: "遷",
      meaning: "transition",
    },
    {
      kanji: "覆",
      meaning: "capsize",
    },
    {
      kanji: "煙",
      meaning: "smoke",
    },
    {
      kanji: "南",
      meaning: "south",
    },
    {
      kanji: "楠",
      meaning: "camphor tree",
    },
    {
      kanji: "献",
      meaning: "offering",
    },
    {
      kanji: "門",
      meaning: "gates",
    },
    {
      kanji: "問",
      meaning: "question",
    },
    {
      kanji: "閲",
      meaning: "review",
    },
    {
      kanji: "閥",
      meaning: "clique",
    },
    {
      kanji: "間",
      meaning: "interval",
    },
    {
      kanji: "簡",
      meaning: "simplicity",
    },
    {
      kanji: "開",
      meaning: "open",
    },
    {
      kanji: "閉",
      meaning: "closed",
    },
    {
      kanji: "閣",
      meaning: "tower",
    },
    {
      kanji: "閑",
      meaning: "leisure",
    },
    {
      kanji: "聞",
      meaning: "hear",
    },
    {
      kanji: "潤",
      meaning: "wet",
    },
    {
      kanji: "欄",
      meaning: "column",
    },
    {
      kanji: "闘",
      meaning: "fight",
    },
    {
      kanji: "倉",
      meaning: "godown",
    },
    {
      kanji: "創",
      meaning: "genesis",
    },
    {
      kanji: "非",
      meaning: "un-",
    },
    {
      kanji: "俳",
      meaning: "haiku",
    },
    {
      kanji: "排",
      meaning: "repudiate",
    },
    {
      kanji: "悲",
      meaning: "sad",
    },
    {
      kanji: "罪",
      meaning: "guilt",
    },
    {
      kanji: "輩",
      meaning: "comrade",
    },
    {
      kanji: "扉",
      meaning: "front door",
    },
    {
      kanji: "侯",
      meaning: "marquis",
    },
    {
      kanji: "候",
      meaning: "climate",
    },
    {
      kanji: "決",
      meaning: "decide",
    },
    {
      kanji: "快",
      meaning: "cheerful",
    },
    {
      kanji: "偉",
      meaning: "admirable",
    },
    {
      kanji: "違",
      meaning: "difference",
    },
    {
      kanji: "緯",
      meaning: "horizontal",
    },
    {
      kanji: "衛",
      meaning: "defense",
    },
    {
      kanji: "韓",
      meaning: "Korea",
    },
    {
      kanji: "干",
      meaning: "dry",
    },
    {
      kanji: "肝",
      meaning: "liver",
    },
    {
      kanji: "刊",
      meaning: "publish",
    },
    {
      kanji: "汗",
      meaning: "sweat",
    },
    {
      kanji: "軒",
      meaning: "flats",
    },
    {
      kanji: "岸",
      meaning: "beach",
    },
    {
      kanji: "幹",
      meaning: "tree trunk",
    },
    {
      kanji: "芋",
      meaning: "potato",
    },
    {
      kanji: "宇",
      meaning: "eaves",
    },
    {
      kanji: "余",
      meaning: "too much",
    },
    {
      kanji: "除",
      meaning: "exclude",
    },
    {
      kanji: "徐",
      meaning: "gradually",
    },
    {
      kanji: "叙",
      meaning: "confer",
    },
    {
      kanji: "途",
      meaning: "route",
    },
    {
      kanji: "斜",
      meaning: "diagonal",
    },
    {
      kanji: "塗",
      meaning: "paint",
    },
    {
      kanji: "束",
      meaning: "bundle",
    },
    {
      kanji: "頼",
      meaning: "trust",
    },
    {
      kanji: "瀬",
      meaning: "rapids",
    },
    {
      kanji: "勅",
      meaning: "imperial order",
    },
    {
      kanji: "疎",
      meaning: "alienate",
    },
    {
      kanji: "速",
      meaning: "quick",
    },
    {
      kanji: "整",
      meaning: "organize",
    },
    {
      kanji: "剣",
      meaning: "saber",
    },
    {
      kanji: "険",
      meaning: "precipitous",
    },
    {
      kanji: "検",
      meaning: "examination",
    },
    {
      kanji: "倹",
      meaning: "frugal",
    },
    {
      kanji: "重",
      meaning: "heavy",
    },
    {
      kanji: "動",
      meaning: "move",
    },
    {
      kanji: "勲",
      meaning: "meritorious deed",
    },
    {
      kanji: "働",
      meaning: "work",
    },
    {
      kanji: "種",
      meaning: "species",
    },
    {
      kanji: "衝",
      meaning: "collide",
    },
    {
      kanji: "薫",
      meaning: "fragrant",
    },
    {
      kanji: "病",
      meaning: "ill",
    },
    {
      kanji: "痴",
      meaning: "stupid",
    },
    {
      kanji: "痘",
      meaning: "pox",
    },
    {
      kanji: "症",
      meaning: "symptoms",
    },
    {
      kanji: "疾",
      meaning: "rapidly",
    },
    {
      kanji: "痢",
      meaning: "diarrhea",
    },
    {
      kanji: "疲",
      meaning: "tired",
    },
    {
      kanji: "疫",
      meaning: "epidemic",
    },
    {
      kanji: "痛",
      meaning: "pain",
    },
    {
      kanji: "癖",
      meaning: "mannerism",
    },
    {
      kanji: "匿",
      meaning: "hide",
    },
    {
      kanji: "匠",
      meaning: "artisan",
    },
    {
      kanji: "医",
      meaning: "doctor",
    },
    {
      kanji: "匹",
      meaning: "equal",
    },
    {
      kanji: "区",
      meaning: "ward",
    },
    {
      kanji: "枢",
      meaning: "hinge",
    },
    {
      kanji: "殴",
      meaning: "assault",
    },
    {
      kanji: "欧",
      meaning: "Europe",
    },
    {
      kanji: "抑",
      meaning: "repress",
    },
    {
      kanji: "仰",
      meaning: "faceup",
    },
    {
      kanji: "迎",
      meaning: "welcome",
    },
    {
      kanji: "登",
      meaning: "ascend",
    },
    {
      kanji: "澄",
      meaning: "lucidity",
    },
    {
      kanji: "発",
      meaning: "discharge",
    },
    {
      kanji: "廃",
      meaning: "abolish",
    },
    {
      kanji: "僚",
      meaning: "colleague",
    },
    {
      kanji: "寮",
      meaning: "dormitory",
    },
    {
      kanji: "療",
      meaning: "heal",
    },
    {
      kanji: "彫",
      meaning: "carve",
    },
    {
      kanji: "形",
      meaning: "shape",
    },
    {
      kanji: "影",
      meaning: "shadow",
    },
    {
      kanji: "杉",
      meaning: "cedar",
    },
    {
      kanji: "彩",
      meaning: "coloring",
    },
    {
      kanji: "彰",
      meaning: "patent",
    },
    {
      kanji: "彦",
      meaning: "lad",
    },
    {
      kanji: "顔",
      meaning: "face",
    },
    {
      kanji: "須",
      meaning: "ought",
    },
    {
      kanji: "膨",
      meaning: "swell",
    },
    {
      kanji: "参",
      meaning: "visit",
    },
    {
      kanji: "惨",
      meaning: "wretched",
    },
    {
      kanji: "修",
      meaning: "discipline",
    },
    {
      kanji: "珍",
      meaning: "rare",
    },
    {
      kanji: "診",
      meaning: "checkup",
    },
    {
      kanji: "文",
      meaning: "sentence",
    },
    {
      kanji: "対",
      meaning: "vis-a-vis",
    },
    {
      kanji: "紋",
      meaning: "family crest",
    },
    {
      kanji: "蚊",
      meaning: "mosquito",
    },
    {
      kanji: "斉",
      meaning: "adjusted",
    },
    {
      kanji: "剤",
      meaning: "dose",
    },
    {
      kanji: "済",
      meaning: "finish",
    },
    {
      kanji: "斎",
      meaning: "purification",
    },
    {
      kanji: "粛",
      meaning: "solemn",
    },
    {
      kanji: "塁",
      meaning: "bases",
    },
    {
      kanji: "楽",
      meaning: "music",
    },
    {
      kanji: "薬",
      meaning: "medicine",
    },
    {
      kanji: "率",
      meaning: "ratio",
    },
    {
      kanji: "渋",
      meaning: "astringent",
    },
    {
      kanji: "摂",
      meaning: "vicarious",
    },
    {
      kanji: "央",
      meaning: "center",
    },
    {
      kanji: "英",
      meaning: "England",
    },
    {
      kanji: "映",
      meaning: "reflect",
    },
    {
      kanji: "赤",
      meaning: "red",
    },
    {
      kanji: "赦",
      meaning: "pardon",
    },
    {
      kanji: "変",
      meaning: "unusual",
    },
    {
      kanji: "跡",
      meaning: "tracks",
    },
    {
      kanji: "蛮",
      meaning: "barbarian",
    },
    {
      kanji: "恋",
      meaning: "romance",
    },
    {
      kanji: "湾",
      meaning: "gulf",
    },
    {
      kanji: "黄",
      meaning: "yellow",
    },
    {
      kanji: "横",
      meaning: "sideways",
    },
    {
      kanji: "把",
      meaning: "grasp",
    },
    {
      kanji: "色",
      meaning: "color",
    },
    {
      kanji: "絶",
      meaning: "discontinue",
    },
    {
      kanji: "艶",
      meaning: "glossy",
    },
    {
      kanji: "肥",
      meaning: "fertilizer",
    },
    {
      kanji: "甘",
      meaning: "sweet",
    },
    {
      kanji: "紺",
      meaning: "navy blue",
    },
    {
      kanji: "某",
      meaning: "so-and-so",
    },
    {
      kanji: "謀",
      meaning: "conspire",
    },
    {
      kanji: "媒",
      meaning: "mediator",
    },
    {
      kanji: "欺",
      meaning: "deceit",
    },
    {
      kanji: "棋",
      meaning: "chess piece",
    },
    {
      kanji: "旗",
      meaning: "national flag",
    },
    {
      kanji: "期",
      meaning: "period",
    },
    {
      kanji: "碁",
      meaning: "Go",
    },
    {
      kanji: "基",
      meaning: "fundamentals",
    },
    {
      kanji: "甚",
      meaning: "tremendously",
    },
    {
      kanji: "勘",
      meaning: "intuition",
    },
    {
      kanji: "堪",
      meaning: "withstand",
    },
    {
      kanji: "貴",
      meaning: "precious",
    },
    {
      kanji: "遺",
      meaning: "bequeath",
    },
    {
      kanji: "遣",
      meaning: "dispatch",
    },
    {
      kanji: "舞",
      meaning: "dance",
    },
    {
      kanji: "無",
      meaning: "nothingness",
    },
    {
      kanji: "組",
      meaning: "association",
    },
    {
      kanji: "粗",
      meaning: "coarse",
    },
    {
      kanji: "租",
      meaning: "tariff",
    },
    {
      kanji: "祖",
      meaning: "ancestor",
    },
    {
      kanji: "阻",
      meaning: "thwart",
    },
    {
      kanji: "査",
      meaning: "investigate",
    },
    {
      kanji: "助",
      meaning: "help",
    },
    {
      kanji: "宜",
      meaning: "best regards",
    },
    {
      kanji: "畳",
      meaning: "tatami mat",
    },
    {
      kanji: "並",
      meaning: "row",
    },
    {
      kanji: "普",
      meaning: "universal",
    },
    {
      kanji: "譜",
      meaning: "musical score",
    },
    {
      kanji: "湿",
      meaning: "damp",
    },
    {
      kanji: "顕",
      meaning: "appear",
    },
    {
      kanji: "繊",
      meaning: "slender",
    },
    {
      kanji: "霊",
      meaning: "spirits",
    },
    {
      kanji: "業",
      meaning: "profession",
    },
    {
      kanji: "撲",
      meaning: "slap",
    },
    {
      kanji: "僕",
      meaning: "me",
    },
    {
      kanji: "共",
      meaning: "together",
    },
    {
      kanji: "供",
      meaning: "submit",
    },
    {
      kanji: "異",
      meaning: "uncommon",
    },
    {
      kanji: "翼",
      meaning: "wing",
    },
    {
      kanji: "洪",
      meaning: "deluge",
    },
    {
      kanji: "港",
      meaning: "harbor",
    },
    {
      kanji: "暴",
      meaning: "outburst",
    },
    {
      kanji: "爆",
      meaning: "bomb",
    },
    {
      kanji: "恭",
      meaning: "respect",
    },
    {
      kanji: "選",
      meaning: "elect",
    },
    {
      kanji: "殿",
      meaning: "Mr.",
    },
    {
      kanji: "井",
      meaning: "well",
    },
    {
      kanji: "囲",
      meaning: "surround",
    },
    {
      kanji: "耕",
      meaning: "till",
    },
    {
      kanji: "亜",
      meaning: "Asia",
    },
    {
      kanji: "悪",
      meaning: "bad",
    },
    {
      kanji: "円",
      meaning: "circle",
    },
    {
      kanji: "角",
      meaning: "angle",
    },
    {
      kanji: "触",
      meaning: "contact",
    },
    {
      kanji: "解",
      meaning: "unravel",
    },
    {
      kanji: "再",
      meaning: "again",
    },
    {
      kanji: "講",
      meaning: "lecture",
    },
    {
      kanji: "購",
      meaning: "subscription",
    },
    {
      kanji: "構",
      meaning: "posture",
    },
    {
      kanji: "溝",
      meaning: "gutter",
    },
    {
      kanji: "論",
      meaning: "argument",
    },
    {
      kanji: "倫",
      meaning: "ethics",
    },
    {
      kanji: "輪",
      meaning: "wheel",
    },
    {
      kanji: "偏",
      meaning: "partial",
    },
    {
      kanji: "遍",
      meaning: "everywhere",
    },
    {
      kanji: "編",
      meaning: "compilation",
    },
    {
      kanji: "冊",
      meaning: "tome",
    },
    {
      kanji: "典",
      meaning: "code",
    },
    {
      kanji: "氏",
      meaning: "family name",
    },
    {
      kanji: "紙",
      meaning: "paper",
    },
    {
      kanji: "婚",
      meaning: "marriage",
    },
    {
      kanji: "低",
      meaning: "lower",
    },
    {
      kanji: "抵",
      meaning: "resist",
    },
    {
      kanji: "底",
      meaning: "bottom",
    },
    {
      kanji: "民",
      meaning: "people",
    },
    {
      kanji: "眠",
      meaning: "sleep",
    },
    {
      kanji: "捕",
      meaning: "catch",
    },
    {
      kanji: "浦",
      meaning: "bay",
    },
    {
      kanji: "蒲",
      meaning: "bullrush",
    },
    {
      kanji: "舗",
      meaning: "shop",
    },
    {
      kanji: "補",
      meaning: "supplement",
    },
    {
      kanji: "邸",
      meaning: "residence",
    },
    {
      kanji: "郭",
      meaning: "enclosure",
    },
    {
      kanji: "郡",
      meaning: "county",
    },
    {
      kanji: "郊",
      meaning: "outskirts",
    },
    {
      kanji: "部",
      meaning: "section",
    },
    {
      kanji: "都",
      meaning: "metropolis",
    },
    {
      kanji: "郵",
      meaning: "mail",
    },
    {
      kanji: "邦",
      meaning: "home country",
    },
    {
      kanji: "郷",
      meaning: "hometown",
    },
    {
      kanji: "響",
      meaning: "echo",
    },
    {
      kanji: "郎",
      meaning: "son",
    },
    {
      kanji: "廊",
      meaning: "corridor",
    },
    {
      kanji: "盾",
      meaning: "shield",
    },
    {
      kanji: "循",
      meaning: "sequential",
    },
    {
      kanji: "派",
      meaning: "faction",
    },
    {
      kanji: "脈",
      meaning: "vein",
    },
    {
      kanji: "衆",
      meaning: "masses",
    },
    {
      kanji: "逓",
      meaning: "parcel post",
    },
    {
      kanji: "段",
      meaning: "grade",
    },
    {
      kanji: "鍛",
      meaning: "forge",
    },
    {
      kanji: "后",
      meaning: "empress",
    },
    {
      kanji: "幻",
      meaning: "phantasm",
    },
    {
      kanji: "司",
      meaning: "director",
    },
    {
      kanji: "伺",
      meaning: "pay respects",
    },
    {
      kanji: "詞",
      meaning: "parts of speech",
    },
    {
      kanji: "飼",
      meaning: "domesticate",
    },
    {
      kanji: "嗣",
      meaning: "heir",
    },
    {
      kanji: "舟",
      meaning: "boat",
    },
    {
      kanji: "舶",
      meaning: "liner",
    },
    {
      kanji: "航",
      meaning: "navigate",
    },
    {
      kanji: "般",
      meaning: "carrier",
    },
    {
      kanji: "盤",
      meaning: "tray",
    },
    {
      kanji: "搬",
      meaning: "conveyor",
    },
    {
      kanji: "船",
      meaning: "ship",
    },
    {
      kanji: "艦",
      meaning: "warship",
    },
    {
      kanji: "艇",
      meaning: "rowboat",
    },
    {
      kanji: "瓜",
      meaning: "melon",
    },
    {
      kanji: "弧",
      meaning: "arc",
    },
    {
      kanji: "孤",
      meaning: "orphan",
    },
    {
      kanji: "繭",
      meaning: "cocoon",
    },
    {
      kanji: "益",
      meaning: "benefit",
    },
    {
      kanji: "暇",
      meaning: "spare time",
    },
    {
      kanji: "敷",
      meaning: "spread",
    },
    {
      kanji: "来",
      meaning: "come",
    },
    {
      kanji: "気",
      meaning: "spirit",
    },
    {
      kanji: "汽",
      meaning: "vapor",
    },
    {
      kanji: "飛",
      meaning: "fly",
    },
    {
      kanji: "沈",
      meaning: "sink",
    },
    {
      kanji: "妻",
      meaning: "wife",
    },
    {
      kanji: "衰",
      meaning: "decline",
    },
    {
      kanji: "衷",
      meaning: "inmost",
    },
    {
      kanji: "面",
      meaning: "mask",
    },
    {
      kanji: "革",
      meaning: "leather",
    },
    {
      kanji: "靴",
      meaning: "shoes",
    },
    {
      kanji: "覇",
      meaning: "hegemony",
    },
    {
      kanji: "声",
      meaning: "voice",
    },
    {
      kanji: "呉",
      meaning: "give",
    },
    {
      kanji: "娯",
      meaning: "recreation",
    },
    {
      kanji: "誤",
      meaning: "mistake",
    },
    {
      kanji: "蒸",
      meaning: "steam",
    },
    {
      kanji: "承",
      meaning: "acquiesce",
    },
    {
      kanji: "函",
      meaning: "bin",
    },
    {
      kanji: "極",
      meaning: "poles",
    },
    {
      kanji: "牙",
      meaning: "tusk",
    },
    {
      kanji: "芽",
      meaning: "bud",
    },
    {
      kanji: "邪",
      meaning: "wicked",
    },
    {
      kanji: "雅",
      meaning: "gracious",
    },
    {
      kanji: "釈",
      meaning: "interpretation",
    },
    {
      kanji: "番",
      meaning: "turn",
    },
    {
      kanji: "審",
      meaning: "hearing",
    },
    {
      kanji: "翻",
      meaning: "flip",
    },
    {
      kanji: "藩",
      meaning: "clan",
    },
    {
      kanji: "毛",
      meaning: "fur",
    },
    {
      kanji: "耗",
      meaning: "decrease",
    },
    {
      kanji: "尾",
      meaning: "tail",
    },
    {
      kanji: "宅",
      meaning: "home",
    },
    {
      kanji: "託",
      meaning: "consign",
    },
    {
      kanji: "為",
      meaning: "do",
    },
    {
      kanji: "偽",
      meaning: "falsehood",
    },
    {
      kanji: "長",
      meaning: "long",
    },
    {
      kanji: "張",
      meaning: "lengthen",
    },
    {
      kanji: "帳",
      meaning: "notebook",
    },
    {
      kanji: "脹",
      meaning: "dilate",
    },
    {
      kanji: "髪",
      meaning: "hair of the head",
    },
    {
      kanji: "展",
      meaning: "unfold",
    },
    {
      kanji: "喪",
      meaning: "miss",
    },
    {
      kanji: "巣",
      meaning: "nest",
    },
    {
      kanji: "単",
      meaning: "simple",
    },
    {
      kanji: "戦",
      meaning: "war",
    },
    {
      kanji: "禅",
      meaning: "Zen",
    },
    {
      kanji: "弾",
      meaning: "bullet",
    },
    {
      kanji: "桜",
      meaning: "cherry tree",
    },
    {
      kanji: "獣",
      meaning: "animal",
    },
    {
      kanji: "脳",
      meaning: "brain",
    },
    {
      kanji: "悩",
      meaning: "trouble",
    },
    {
      kanji: "厳",
      meaning: "stern",
    },
    {
      kanji: "鎖",
      meaning: "chain",
    },
    {
      kanji: "挙",
      meaning: "raise",
    },
    {
      kanji: "誉",
      meaning: "reputation",
    },
    {
      kanji: "猟",
      meaning: "game hunting",
    },
    {
      kanji: "鳥",
      meaning: "bird",
    },
    {
      kanji: "鳴",
      meaning: "chirp",
    },
    {
      kanji: "鶴",
      meaning: "crane",
    },
    {
      kanji: "烏",
      meaning: "crow",
    },
    {
      kanji: "蔦",
      meaning: "vine",
    },
    {
      kanji: "鳩",
      meaning: "pigeon",
    },
    {
      kanji: "鶏",
      meaning: "chicken",
    },
    {
      kanji: "島",
      meaning: "island",
    },
    {
      kanji: "暖",
      meaning: "warmth",
    },
    {
      kanji: "媛",
      meaning: "beautiful woman",
    },
    {
      kanji: "援",
      meaning: "abet",
    },
    {
      kanji: "緩",
      meaning: "slacken",
    },
    {
      kanji: "属",
      meaning: "belong",
    },
    {
      kanji: "嘱",
      meaning: "entrust",
    },
    {
      kanji: "偶",
      meaning: "accidentally",
    },
    {
      kanji: "遇",
      meaning: "interview",
    },
    {
      kanji: "愚",
      meaning: "foolish",
    },
    {
      kanji: "隅",
      meaning: "corner",
    },
    {
      kanji: "逆",
      meaning: "inverted",
    },
    {
      kanji: "塑",
      meaning: "model",
    },
    {
      kanji: "岡",
      meaning: "Mount",
    },
    {
      kanji: "鋼",
      meaning: "steel",
    },
    {
      kanji: "綱",
      meaning: "hawser",
    },
    {
      kanji: "剛",
      meaning: "sturdy",
    },
    {
      kanji: "缶",
      meaning: "tin can",
    },
    {
      kanji: "陶",
      meaning: "pottery",
    },
    {
      kanji: "揺",
      meaning: "swing",
    },
    {
      kanji: "謡",
      meaning: "Noh chanting",
    },
    {
      kanji: "就",
      meaning: "concerning",
    },
    {
      kanji: "懇",
      meaning: "sociable",
    },
    {
      kanji: "墾",
      meaning: "groundbreaking",
    },
    {
      kanji: "免",
      meaning: "excuse",
    },
    {
      kanji: "逸",
      meaning: "elude",
    },
    {
      kanji: "晩",
      meaning: "nightfall",
    },
    {
      kanji: "勉",
      meaning: "exertion",
    },
    {
      kanji: "象",
      meaning: "elephant",
    },
    {
      kanji: "像",
      meaning: "statue",
    },
    {
      kanji: "馬",
      meaning: "horse",
    },
    {
      kanji: "駒",
      meaning: "pony",
    },
    {
      kanji: "験",
      meaning: "verification",
    },
    {
      kanji: "騎",
      meaning: "equestrian",
    },
    {
      kanji: "駐",
      meaning: "parking",
    },
    {
      kanji: "駆",
      meaning: "drive",
    },
    {
      kanji: "駅",
      meaning: "station",
    },
    {
      kanji: "騒",
      meaning: "boisterous",
    },
    {
      kanji: "駄",
      meaning: "burdensome",
    },
    {
      kanji: "驚",
      meaning: "wonder",
    },
    {
      kanji: "篤",
      meaning: "fervent",
    },
    {
      kanji: "騰",
      meaning: "inflation",
    },
    {
      kanji: "虎",
      meaning: "tiger",
    },
    {
      kanji: "虜",
      meaning: "captive",
    },
    {
      kanji: "膚",
      meaning: "skin",
    },
    {
      kanji: "虚",
      meaning: "void",
    },
    {
      kanji: "戯",
      meaning: "frolic",
    },
    {
      kanji: "虞",
      meaning: "uneasiness",
    },
    {
      kanji: "慮",
      meaning: "prudence",
    },
    {
      kanji: "劇",
      meaning: "drama",
    },
    {
      kanji: "虐",
      meaning: "tyrannize",
    },
    {
      kanji: "鹿",
      meaning: "deer",
    },
    {
      kanji: "薦",
      meaning: "recommend",
    },
    {
      kanji: "慶",
      meaning: "jubilation",
    },
    {
      kanji: "麗",
      meaning: "lovely",
    },
    {
      kanji: "熊",
      meaning: "bear",
    },
    {
      kanji: "能",
      meaning: "ability",
    },
    {
      kanji: "態",
      meaning: "attitude",
    },
    {
      kanji: "寅",
      meaning: "sign of the tiger",
    },
    {
      kanji: "演",
      meaning: "performance",
    },
    {
      kanji: "辰",
      meaning: "sign of the dragon",
    },
    {
      kanji: "辱",
      meaning: "embarrass",
    },
    {
      kanji: "震",
      meaning: "quake",
    },
    {
      kanji: "振",
      meaning: "shake",
    },
    {
      kanji: "娠",
      meaning: "with child",
    },
    {
      kanji: "唇",
      meaning: "lips",
    },
    {
      kanji: "農",
      meaning: "agriculture",
    },
    {
      kanji: "濃",
      meaning: "concentrated",
    },
    {
      kanji: "送",
      meaning: "send off",
    },
    {
      kanji: "関",
      meaning: "connection",
    },
    {
      kanji: "咲",
      meaning: "blossom",
    },
    {
      kanji: "鬼",
      meaning: "ghost",
    },
    {
      kanji: "醜",
      meaning: "ugly",
    },
    {
      kanji: "魂",
      meaning: "soul",
    },
    {
      kanji: "魔",
      meaning: "witch",
    },
    {
      kanji: "魅",
      meaning: "fascination",
    },
    {
      kanji: "塊",
      meaning: "clod",
    },
    {
      kanji: "襲",
      meaning: "attack",
    },
    {
      kanji: "嚇",
      meaning: "upbraid",
    },
    {
      kanji: "朕",
      meaning: "majestic plural",
    },
    {
      kanji: "雰",
      meaning: "atmosphere",
    },
    {
      kanji: "箇",
      meaning: "item",
    },
    {
      kanji: "錬",
      meaning: "tempering",
    },
    {
      kanji: "遵",
      meaning: "abide by",
    },
    {
      kanji: "罷",
      meaning: "quit",
    },
    {
      kanji: "屯",
      meaning: "barracks",
    },
    {
      kanji: "且",
      meaning: "moreover",
    },
    {
      kanji: "藻",
      meaning: "seaweed",
    },
    {
      kanji: "隷",
      meaning: "slave",
    },
    {
      kanji: "癒",
      meaning: "healing",
    },
    {
      kanji: "丹",
      meaning: "cinnabar",
    },
    {
      kanji: "潟",
      meaning: "lagoon",
    },
    {
      kanji: "丑",
      meaning: "sign of the cow",
    },
    {
      kanji: "卯",
      meaning: "sign of the hare",
    },
    {
      kanji: "巳",
      meaning: "sign of the snake",
    },
  ],
  RTK_6ED: [
    {
      kanji: "一",
      meaning: "one",
    },
    {
      kanji: "二",
      meaning: "two",
    },
    {
      kanji: "三",
      meaning: "three",
    },
    {
      kanji: "四",
      meaning: "four",
    },
    {
      kanji: "五",
      meaning: "five",
    },
    {
      kanji: "六",
      meaning: "six",
    },
    {
      kanji: "七",
      meaning: "seven",
    },
    {
      kanji: "八",
      meaning: "eight",
    },
    {
      kanji: "九",
      meaning: "nine",
    },
    {
      kanji: "十",
      meaning: "ten",
    },
    {
      kanji: "口",
      meaning: "mouth",
    },
    {
      kanji: "日",
      meaning: "day",
    },
    {
      kanji: "月",
      meaning: "month",
    },
    {
      kanji: "田",
      meaning: "rice field",
    },
    {
      kanji: "目",
      meaning: "eye",
    },
    {
      kanji: "古",
      meaning: "old",
    },
    {
      kanji: "吾",
      meaning: "I",
    },
    {
      kanji: "冒",
      meaning: "risk",
    },
    {
      kanji: "朋",
      meaning: "companion",
    },
    {
      kanji: "明",
      meaning: "bright",
    },
    {
      kanji: "唱",
      meaning: "chant",
    },
    {
      kanji: "晶",
      meaning: "sparkle",
    },
    {
      kanji: "品",
      meaning: "goods",
    },
    {
      kanji: "呂",
      meaning: "spine",
    },
    {
      kanji: "昌",
      meaning: "prosperous",
    },
    {
      kanji: "早",
      meaning: "early",
    },
    {
      kanji: "旭",
      meaning: "rising sun",
    },
    {
      kanji: "世",
      meaning: "generation",
    },
    {
      kanji: "胃",
      meaning: "stomach",
    },
    {
      kanji: "旦",
      meaning: "nightbreak",
    },
    {
      kanji: "胆",
      meaning: "gall bladder",
    },
    {
      kanji: "亘",
      meaning: "span",
    },
    {
      kanji: "凹",
      meaning: "concave",
    },
    {
      kanji: "凸",
      meaning: "convex",
    },
    {
      kanji: "旧",
      meaning: "olden times",
    },
    {
      kanji: "自",
      meaning: "oneself",
    },
    {
      kanji: "白",
      meaning: "white",
    },
    {
      kanji: "百",
      meaning: "hundred",
    },
    {
      kanji: "中",
      meaning: "in",
    },
    {
      kanji: "千",
      meaning: "thousand",
    },
    {
      kanji: "舌",
      meaning: "tongue",
    },
    {
      kanji: "升",
      meaning: "measuring box",
    },
    {
      kanji: "昇",
      meaning: "rise up",
    },
    {
      kanji: "丸",
      meaning: "round",
    },
    {
      kanji: "寸",
      meaning: "measurement",
    },
    {
      kanji: "肘",
      meaning: "elbow",
    },
    {
      kanji: "専",
      meaning: "specialty",
    },
    {
      kanji: "博",
      meaning: "Dr.",
    },
    {
      kanji: "占",
      meaning: "fortune-telling",
    },
    {
      kanji: "上",
      meaning: "above",
    },
    {
      kanji: "下",
      meaning: "below",
    },
    {
      kanji: "卓",
      meaning: "eminent",
    },
    {
      kanji: "朝",
      meaning: "morning",
    },
    {
      kanji: "嘲",
      meaning: "derision",
    },
    {
      kanji: "只",
      meaning: "only",
    },
    {
      kanji: "貝",
      meaning: "shellfish",
    },
    {
      kanji: "唄",
      meaning: "pop song",
    },
    {
      kanji: "貞",
      meaning: "upright",
    },
    {
      kanji: "員",
      meaning: "employee",
    },
    {
      kanji: "貼",
      meaning: "post a bill",
    },
    {
      kanji: "見",
      meaning: "see",
    },
    {
      kanji: "児",
      meaning: "newborn babe",
    },
    {
      kanji: "元",
      meaning: "beginning",
    },
    {
      kanji: "頁",
      meaning: "page",
    },
    {
      kanji: "頑",
      meaning: "stubborn",
    },
    {
      kanji: "凡",
      meaning: "mediocre",
    },
    {
      kanji: "負",
      meaning: "defeat",
    },
    {
      kanji: "万",
      meaning: "ten thousand",
    },
    {
      kanji: "句",
      meaning: "phrase",
    },
    {
      kanji: "肌",
      meaning: "texture",
    },
    {
      kanji: "旬",
      meaning: "decameron",
    },
    {
      kanji: "勺",
      meaning: "ladle",
    },
    {
      kanji: "的",
      meaning: "bull's eye",
    },
    {
      kanji: "首",
      meaning: "neck",
    },
    {
      kanji: "乙",
      meaning: "fish guts",
    },
    {
      kanji: "乱",
      meaning: "riot",
    },
    {
      kanji: "直",
      meaning: "straightaway",
    },
    {
      kanji: "具",
      meaning: "tool",
    },
    {
      kanji: "真",
      meaning: "true",
    },
    {
      kanji: "工",
      meaning: "craft",
    },
    {
      kanji: "左",
      meaning: "left",
    },
    {
      kanji: "右",
      meaning: "right",
    },
    {
      kanji: "有",
      meaning: "possess",
    },
    {
      kanji: "賄",
      meaning: "bribe",
    },
    {
      kanji: "貢",
      meaning: "tribute",
    },
    {
      kanji: "項",
      meaning: "paragraph",
    },
    {
      kanji: "刀",
      meaning: "sword",
    },
    {
      kanji: "刃",
      meaning: "blade",
    },
    {
      kanji: "切",
      meaning: "cut",
    },
    {
      kanji: "召",
      meaning: "seduce",
    },
    {
      kanji: "昭",
      meaning: "shining",
    },
    {
      kanji: "則",
      meaning: "rule",
    },
    {
      kanji: "副",
      meaning: "vice-",
    },
    {
      kanji: "別",
      meaning: "separate",
    },
    {
      kanji: "丁",
      meaning: "street",
    },
    {
      kanji: "町",
      meaning: "village",
    },
    {
      kanji: "可",
      meaning: "can",
    },
    {
      kanji: "頂",
      meaning: "place on the head",
    },
    {
      kanji: "子",
      meaning: "child",
    },
    {
      kanji: "孔",
      meaning: "cavity",
    },
    {
      kanji: "了",
      meaning: "complete",
    },
    {
      kanji: "女",
      meaning: "woman",
    },
    {
      kanji: "好",
      meaning: "fond",
    },
    {
      kanji: "如",
      meaning: "likeness",
    },
    {
      kanji: "母",
      meaning: "mama",
    },
    {
      kanji: "貫",
      meaning: "pierce",
    },
    {
      kanji: "兄",
      meaning: "elder brother",
    },
    {
      kanji: "呪",
      meaning: "curse",
    },
    {
      kanji: "克",
      meaning: "overcome",
    },
    {
      kanji: "小",
      meaning: "little",
    },
    {
      kanji: "少",
      meaning: "few",
    },
    {
      kanji: "大",
      meaning: "large",
    },
    {
      kanji: "多",
      meaning: "many",
    },
    {
      kanji: "夕",
      meaning: "evening",
    },
    {
      kanji: "汐",
      meaning: "eventide",
    },
    {
      kanji: "外",
      meaning: "outside",
    },
    {
      kanji: "名",
      meaning: "name",
    },
    {
      kanji: "石",
      meaning: "stone",
    },
    {
      kanji: "肖",
      meaning: "resemblance",
    },
    {
      kanji: "硝",
      meaning: "nitrate",
    },
    {
      kanji: "砕",
      meaning: "smash",
    },
    {
      kanji: "砂",
      meaning: "sand",
    },
    {
      kanji: "妬",
      meaning: "jealous",
    },
    {
      kanji: "削",
      meaning: "plane",
    },
    {
      kanji: "光",
      meaning: "ray",
    },
    {
      kanji: "太",
      meaning: "plump",
    },
    {
      kanji: "器",
      meaning: "utensil",
    },
    {
      kanji: "臭",
      meaning: "stinking",
    },
    {
      kanji: "嗅",
      meaning: "sniff",
    },
    {
      kanji: "妙",
      meaning: "exquisite",
    },
    {
      kanji: "省",
      meaning: "focus",
    },
    {
      kanji: "厚",
      meaning: "thick",
    },
    {
      kanji: "奇",
      meaning: "strange",
    },
    {
      kanji: "川",
      meaning: "stream",
    },
    {
      kanji: "州",
      meaning: "state",
    },
    {
      kanji: "順",
      meaning: "obey",
    },
    {
      kanji: "水",
      meaning: "water",
    },
    {
      kanji: "氷",
      meaning: "icicle",
    },
    {
      kanji: "永",
      meaning: "eternity",
    },
    {
      kanji: "泉",
      meaning: "spring",
    },
    {
      kanji: "腺",
      meaning: "gland",
    },
    {
      kanji: "原",
      meaning: "meadow",
    },
    {
      kanji: "願",
      meaning: "petition",
    },
    {
      kanji: "泳",
      meaning: "swim",
    },
    {
      kanji: "沼",
      meaning: "marsh",
    },
    {
      kanji: "沖",
      meaning: "open sea",
    },
    {
      kanji: "汎",
      meaning: "pan-",
    },
    {
      kanji: "江",
      meaning: "creek",
    },
    {
      kanji: "汰",
      meaning: "cleanse",
    },
    {
      kanji: "汁",
      meaning: "soup",
    },
    {
      kanji: "沙",
      meaning: "grains of sand",
    },
    {
      kanji: "潮",
      meaning: "tide",
    },
    {
      kanji: "源",
      meaning: "source",
    },
    {
      kanji: "活",
      meaning: "lively",
    },
    {
      kanji: "消",
      meaning: "extinguish",
    },
    {
      kanji: "況",
      meaning: "but of course",
    },
    {
      kanji: "河",
      meaning: "river",
    },
    {
      kanji: "泊",
      meaning: "overnight",
    },
    {
      kanji: "湖",
      meaning: "lake",
    },
    {
      kanji: "測",
      meaning: "fathom",
    },
    {
      kanji: "土",
      meaning: "soil",
    },
    {
      kanji: "吐",
      meaning: "spit",
    },
    {
      kanji: "圧",
      meaning: "pressure",
    },
    {
      kanji: "埼",
      meaning: "cape",
    },
    {
      kanji: "垣",
      meaning: "hedge",
    },
    {
      kanji: "填",
      meaning: "inlay",
    },
    {
      kanji: "圭",
      meaning: "squared jewel",
    },
    {
      kanji: "封",
      meaning: "seal",
    },
    {
      kanji: "涯",
      meaning: "horizon",
    },
    {
      kanji: "寺",
      meaning: "Buddhist temple",
    },
    {
      kanji: "時",
      meaning: "time",
    },
    {
      kanji: "均",
      meaning: "level",
    },
    {
      kanji: "火",
      meaning: "fire",
    },
    {
      kanji: "炎",
      meaning: "inflammation",
    },
    {
      kanji: "煩",
      meaning: "anxiety",
    },
    {
      kanji: "淡",
      meaning: "thin",
    },
    {
      kanji: "灯",
      meaning: "lamp",
    },
    {
      kanji: "畑",
      meaning: "farm",
    },
    {
      kanji: "災",
      meaning: "disaster",
    },
    {
      kanji: "灰",
      meaning: "ashes",
    },
    {
      kanji: "点",
      meaning: "spot",
    },
    {
      kanji: "照",
      meaning: "illuminate",
    },
    {
      kanji: "魚",
      meaning: "fish",
    },
    {
      kanji: "漁",
      meaning: "fishing",
    },
    {
      kanji: "里",
      meaning: "ri",
    },
    {
      kanji: "黒",
      meaning: "black",
    },
    {
      kanji: "墨",
      meaning: "black ink",
    },
    {
      kanji: "鯉",
      meaning: "carp",
    },
    {
      kanji: "量",
      meaning: "quantity",
    },
    {
      kanji: "厘",
      meaning: "rin",
    },
    {
      kanji: "埋",
      meaning: "bury",
    },
    {
      kanji: "同",
      meaning: "same",
    },
    {
      kanji: "洞",
      meaning: "den",
    },
    {
      kanji: "胴",
      meaning: "trunk",
    },
    {
      kanji: "向",
      meaning: "yonder",
    },
    {
      kanji: "尚",
      meaning: "esteem",
    },
    {
      kanji: "字",
      meaning: "character",
    },
    {
      kanji: "守",
      meaning: "guard",
    },
    {
      kanji: "完",
      meaning: "perfect",
    },
    {
      kanji: "宣",
      meaning: "proclaim",
    },
    {
      kanji: "宵",
      meaning: "wee hours",
    },
    {
      kanji: "安",
      meaning: "relax",
    },
    {
      kanji: "宴",
      meaning: "banquet",
    },
    {
      kanji: "寄",
      meaning: "draw near",
    },
    {
      kanji: "富",
      meaning: "wealth",
    },
    {
      kanji: "貯",
      meaning: "savings",
    },
    {
      kanji: "木",
      meaning: "tree",
    },
    {
      kanji: "林",
      meaning: "grove",
    },
    {
      kanji: "森",
      meaning: "forest",
    },
    {
      kanji: "桂",
      meaning: "Japanese Judas-tree",
    },
    {
      kanji: "柏",
      meaning: "oak",
    },
    {
      kanji: "枠",
      meaning: "frame",
    },
    {
      kanji: "梢",
      meaning: "treetops",
    },
    {
      kanji: "棚",
      meaning: "shelf",
    },
    {
      kanji: "杏",
      meaning: "apricot",
    },
    {
      kanji: "桐",
      meaning: "paulownia",
    },
    {
      kanji: "植",
      meaning: "plant",
    },
    {
      kanji: "椅",
      meaning: "chair",
    },
    {
      kanji: "枯",
      meaning: "wither",
    },
    {
      kanji: "朴",
      meaning: "crude",
    },
    {
      kanji: "村",
      meaning: "town",
    },
    {
      kanji: "相",
      meaning: "inter-",
    },
    {
      kanji: "机",
      meaning: "desk",
    },
    {
      kanji: "本",
      meaning: "book",
    },
    {
      kanji: "札",
      meaning: "tag",
    },
    {
      kanji: "暦",
      meaning: "calendar",
    },
    {
      kanji: "案",
      meaning: "plan",
    },
    {
      kanji: "燥",
      meaning: "parch",
    },
    {
      kanji: "未",
      meaning: "not yet",
    },
    {
      kanji: "末",
      meaning: "extremity",
    },
    {
      kanji: "昧",
      meaning: "obscure",
    },
    {
      kanji: "沫",
      meaning: "splash",
    },
    {
      kanji: "味",
      meaning: "flavor",
    },
    {
      kanji: "妹",
      meaning: "younger sister",
    },
    {
      kanji: "朱",
      meaning: "vermilion",
    },
    {
      kanji: "株",
      meaning: "stocks",
    },
    {
      kanji: "若",
      meaning: "young",
    },
    {
      kanji: "草",
      meaning: "grass",
    },
    {
      kanji: "苦",
      meaning: "suffering",
    },
    {
      kanji: "苛",
      meaning: "bullying",
    },
    {
      kanji: "寛",
      meaning: "tolerant",
    },
    {
      kanji: "薄",
      meaning: "dilute",
    },
    {
      kanji: "葉",
      meaning: "leaf",
    },
    {
      kanji: "模",
      meaning: "imitation",
    },
    {
      kanji: "漠",
      meaning: "vague",
    },
    {
      kanji: "墓",
      meaning: "grave",
    },
    {
      kanji: "暮",
      meaning: "livelihood",
    },
    {
      kanji: "膜",
      meaning: "membrane",
    },
    {
      kanji: "苗",
      meaning: "seedling",
    },
    {
      kanji: "兆",
      meaning: "portent",
    },
    {
      kanji: "桃",
      meaning: "peach tree",
    },
    {
      kanji: "眺",
      meaning: "stare",
    },
    {
      kanji: "犬",
      meaning: "dog",
    },
    {
      kanji: "状",
      meaning: "status quo",
    },
    {
      kanji: "黙",
      meaning: "silence",
    },
    {
      kanji: "然",
      meaning: "sort of thing",
    },
    {
      kanji: "荻",
      meaning: "reed",
    },
    {
      kanji: "狩",
      meaning: "hunt",
    },
    {
      kanji: "猫",
      meaning: "cat",
    },
    {
      kanji: "牛",
      meaning: "cow",
    },
    {
      kanji: "特",
      meaning: "special",
    },
    {
      kanji: "告",
      meaning: "revelation",
    },
    {
      kanji: "先",
      meaning: "before",
    },
    {
      kanji: "洗",
      meaning: "wash",
    },
    {
      kanji: "介",
      meaning: "jammed in",
    },
    {
      kanji: "界",
      meaning: "world",
    },
    {
      kanji: "茶",
      meaning: "tea",
    },
    {
      kanji: "脊",
      meaning: "spinal column",
    },
    {
      kanji: "合",
      meaning: "fit",
    },
    {
      kanji: "塔",
      meaning: "pagoda",
    },
    {
      kanji: "王",
      meaning: "king",
    },
    {
      kanji: "玉",
      meaning: "jewel",
    },
    {
      kanji: "宝",
      meaning: "treasure",
    },
    {
      kanji: "珠",
      meaning: "pearl",
    },
    {
      kanji: "現",
      meaning: "present",
    },
    {
      kanji: "玩",
      meaning: "toy",
    },
    {
      kanji: "狂",
      meaning: "lunatic",
    },
    {
      kanji: "旺",
      meaning: "effulgent",
    },
    {
      kanji: "皇",
      meaning: "emperor",
    },
    {
      kanji: "呈",
      meaning: "display",
    },
    {
      kanji: "全",
      meaning: "whole",
    },
    {
      kanji: "栓",
      meaning: "plug",
    },
    {
      kanji: "理",
      meaning: "logic",
    },
    {
      kanji: "主",
      meaning: "lord",
    },
    {
      kanji: "注",
      meaning: "pour",
    },
    {
      kanji: "柱",
      meaning: "pillar",
    },
    {
      kanji: "金",
      meaning: "gold",
    },
    {
      kanji: "銑",
      meaning: "pig iron",
    },
    {
      kanji: "鉢",
      meaning: "bowl",
    },
    {
      kanji: "銅",
      meaning: "copper",
    },
    {
      kanji: "釣",
      meaning: "angling",
    },
    {
      kanji: "針",
      meaning: "needle",
    },
    {
      kanji: "銘",
      meaning: "inscription",
    },
    {
      kanji: "鎮",
      meaning: "tranquillize",
    },
    {
      kanji: "道",
      meaning: "road-way",
    },
    {
      kanji: "導",
      meaning: "guidance",
    },
    {
      kanji: "辻",
      meaning: "crossing",
    },
    {
      kanji: "迅",
      meaning: "swift",
    },
    {
      kanji: "造",
      meaning: "create",
    },
    {
      kanji: "迫",
      meaning: "urge",
    },
    {
      kanji: "逃",
      meaning: "escape",
    },
    {
      kanji: "辺",
      meaning: "environs",
    },
    {
      kanji: "巡",
      meaning: "patrol",
    },
    {
      kanji: "車",
      meaning: "car",
    },
    {
      kanji: "連",
      meaning: "take along",
    },
    {
      kanji: "軌",
      meaning: "rut",
    },
    {
      kanji: "輸",
      meaning: "transport",
    },
    {
      kanji: "喩",
      meaning: "metaphor",
    },
    {
      kanji: "前",
      meaning: "in front",
    },
    {
      kanji: "煎",
      meaning: "roast",
    },
    {
      kanji: "各",
      meaning: "each",
    },
    {
      kanji: "格",
      meaning: "status",
    },
    {
      kanji: "賂",
      meaning: "graft",
    },
    {
      kanji: "略",
      meaning: "abbreviation",
    },
    {
      kanji: "客",
      meaning: "guest",
    },
    {
      kanji: "額",
      meaning: "forehead",
    },
    {
      kanji: "夏",
      meaning: "summer",
    },
    {
      kanji: "処",
      meaning: "dispose",
    },
    {
      kanji: "条",
      meaning: "twig",
    },
    {
      kanji: "落",
      meaning: "fall",
    },
    {
      kanji: "冗",
      meaning: "superfluous",
    },
    {
      kanji: "冥",
      meaning: "Hades",
    },
    {
      kanji: "軍",
      meaning: "army",
    },
    {
      kanji: "輝",
      meaning: "radiance",
    },
    {
      kanji: "運",
      meaning: "carry",
    },
    {
      kanji: "冠",
      meaning: "crown",
    },
    {
      kanji: "夢",
      meaning: "dream",
    },
    {
      kanji: "坑",
      meaning: "pit",
    },
    {
      kanji: "高",
      meaning: "tall",
    },
    {
      kanji: "享",
      meaning: "receive",
    },
    {
      kanji: "塾",
      meaning: "cram school",
    },
    {
      kanji: "熟",
      meaning: "mellow",
    },
    {
      kanji: "亭",
      meaning: "pavilion",
    },
    {
      kanji: "京",
      meaning: "capital",
    },
    {
      kanji: "涼",
      meaning: "refreshing",
    },
    {
      kanji: "景",
      meaning: "scenery",
    },
    {
      kanji: "鯨",
      meaning: "whale",
    },
    {
      kanji: "舎",
      meaning: "cottage",
    },
    {
      kanji: "周",
      meaning: "circumference",
    },
    {
      kanji: "週",
      meaning: "week",
    },
    {
      kanji: "士",
      meaning: "gentleman",
    },
    {
      kanji: "吉",
      meaning: "good luck",
    },
    {
      kanji: "壮",
      meaning: "robust",
    },
    {
      kanji: "荘",
      meaning: "villa",
    },
    {
      kanji: "売",
      meaning: "sell",
    },
    {
      kanji: "学",
      meaning: "study",
    },
    {
      kanji: "覚",
      meaning: "memorize",
    },
    {
      kanji: "栄",
      meaning: "flourish",
    },
    {
      kanji: "書",
      meaning: "write",
    },
    {
      kanji: "津",
      meaning: "haven",
    },
    {
      kanji: "牧",
      meaning: "breed",
    },
    {
      kanji: "攻",
      meaning: "aggression",
    },
    {
      kanji: "敗",
      meaning: "failure",
    },
    {
      kanji: "枚",
      meaning: "a sheet of",
    },
    {
      kanji: "故",
      meaning: "happenstance",
    },
    {
      kanji: "敬",
      meaning: "awe",
    },
    {
      kanji: "言",
      meaning: "say",
    },
    {
      kanji: "警",
      meaning: "admonish",
    },
    {
      kanji: "計",
      meaning: "plot",
    },
    {
      kanji: "詮",
      meaning: "elucidate",
    },
    {
      kanji: "獄",
      meaning: "prison",
    },
    {
      kanji: "訂",
      meaning: "revise",
    },
    {
      kanji: "訃",
      meaning: "obituary",
    },
    {
      kanji: "討",
      meaning: "chastise",
    },
    {
      kanji: "訓",
      meaning: "instruction",
    },
    {
      kanji: "詔",
      meaning: "imperial edict",
    },
    {
      kanji: "詰",
      meaning: "packed",
    },
    {
      kanji: "話",
      meaning: "tale",
    },
    {
      kanji: "詠",
      meaning: "recitation",
    },
    {
      kanji: "詩",
      meaning: "poem",
    },
    {
      kanji: "語",
      meaning: "word",
    },
    {
      kanji: "読",
      meaning: "read",
    },
    {
      kanji: "調",
      meaning: "tune",
    },
    {
      kanji: "談",
      meaning: "discuss",
    },
    {
      kanji: "諾",
      meaning: "consent",
    },
    {
      kanji: "諭",
      meaning: "rebuke",
    },
    {
      kanji: "式",
      meaning: "style",
    },
    {
      kanji: "試",
      meaning: "test",
    },
    {
      kanji: "弐",
      meaning: "II (two)",
    },
    {
      kanji: "域",
      meaning: "range",
    },
    {
      kanji: "賊",
      meaning: "burglar",
    },
    {
      kanji: "栽",
      meaning: "plantation",
    },
    {
      kanji: "載",
      meaning: "load",
    },
    {
      kanji: "茂",
      meaning: "overgrown",
    },
    {
      kanji: "戚",
      meaning: "relatives",
    },
    {
      kanji: "成",
      meaning: "turn into",
    },
    {
      kanji: "城",
      meaning: "castle",
    },
    {
      kanji: "誠",
      meaning: "sincerity",
    },
    {
      kanji: "威",
      meaning: "intimidate",
    },
    {
      kanji: "滅",
      meaning: "destroy",
    },
    {
      kanji: "減",
      meaning: "dwindle",
    },
    {
      kanji: "蔑",
      meaning: "revile",
    },
    {
      kanji: "桟",
      meaning: "scaffold",
    },
    {
      kanji: "銭",
      meaning: "coin",
    },
    {
      kanji: "浅",
      meaning: "shallow",
    },
    {
      kanji: "止",
      meaning: "stop",
    },
    {
      kanji: "歩",
      meaning: "walk",
    },
    {
      kanji: "渉",
      meaning: "ford",
    },
    {
      kanji: "頻",
      meaning: "repeatedly",
    },
    {
      kanji: "肯",
      meaning: "agreement",
    },
    {
      kanji: "企",
      meaning: "undertake",
    },
    {
      kanji: "歴",
      meaning: "curriculum",
    },
    {
      kanji: "武",
      meaning: "warrior",
    },
    {
      kanji: "賦",
      meaning: "levy",
    },
    {
      kanji: "正",
      meaning: "correct",
    },
    {
      kanji: "証",
      meaning: "evidence",
    },
    {
      kanji: "政",
      meaning: "politics",
    },
    {
      kanji: "定",
      meaning: "determine",
    },
    {
      kanji: "錠",
      meaning: "lock",
    },
    {
      kanji: "走",
      meaning: "run",
    },
    {
      kanji: "超",
      meaning: "transcend",
    },
    {
      kanji: "赴",
      meaning: "proceed",
    },
    {
      kanji: "越",
      meaning: "surpass",
    },
    {
      kanji: "是",
      meaning: "just so",
    },
    {
      kanji: "題",
      meaning: "topic",
    },
    {
      kanji: "堤",
      meaning: "dike",
    },
    {
      kanji: "建",
      meaning: "build",
    },
    {
      kanji: "鍵",
      meaning: "key",
    },
    {
      kanji: "延",
      meaning: "prolong",
    },
    {
      kanji: "誕",
      meaning: "nativity",
    },
    {
      kanji: "礎",
      meaning: "cornerstone",
    },
    {
      kanji: "婿",
      meaning: "bridegroom",
    },
    {
      kanji: "衣",
      meaning: "garment",
    },
    {
      kanji: "裁",
      meaning: "tailor",
    },
    {
      kanji: "装",
      meaning: "attire",
    },
    {
      kanji: "裏",
      meaning: "back",
    },
    {
      kanji: "壊",
      meaning: "demolition",
    },
    {
      kanji: "哀",
      meaning: "pathetic",
    },
    {
      kanji: "遠",
      meaning: "distant",
    },
    {
      kanji: "猿",
      meaning: "monkey",
    },
    {
      kanji: "初",
      meaning: "first time",
    },
    {
      kanji: "巾",
      meaning: "towel",
    },
    {
      kanji: "布",
      meaning: "linen",
    },
    {
      kanji: "帆",
      meaning: "sail",
    },
    {
      kanji: "幅",
      meaning: "hanging scroll",
    },
    {
      kanji: "帽",
      meaning: "cap",
    },
    {
      kanji: "幕",
      meaning: "curtain",
    },
    {
      kanji: "幌",
      meaning: "canopy",
    },
    {
      kanji: "錦",
      meaning: "brocade",
    },
    {
      kanji: "市",
      meaning: "market",
    },
    {
      kanji: "柿",
      meaning: "persimmon",
    },
    {
      kanji: "姉",
      meaning: "elder sister",
    },
    {
      kanji: "肺",
      meaning: "lungs",
    },
    {
      kanji: "帯",
      meaning: "sash",
    },
    {
      kanji: "滞",
      meaning: "stagnate",
    },
    {
      kanji: "刺",
      meaning: "thorn",
    },
    {
      kanji: "制",
      meaning: "system",
    },
    {
      kanji: "製",
      meaning: "made in...",
    },
    {
      kanji: "転",
      meaning: "revolve",
    },
    {
      kanji: "芸",
      meaning: "technique",
    },
    {
      kanji: "雨",
      meaning: "rain",
    },
    {
      kanji: "雲",
      meaning: "cloud",
    },
    {
      kanji: "曇",
      meaning: "cloudy weather",
    },
    {
      kanji: "雷",
      meaning: "thunder",
    },
    {
      kanji: "霜",
      meaning: "frost",
    },
    {
      kanji: "冬",
      meaning: "winter",
    },
    {
      kanji: "天",
      meaning: "heavens",
    },
    {
      kanji: "妖",
      meaning: "bewitched",
    },
    {
      kanji: "沃",
      meaning: "irrigate",
    },
    {
      kanji: "橋",
      meaning: "bridge",
    },
    {
      kanji: "嬌",
      meaning: "attractive",
    },
    {
      kanji: "立",
      meaning: "stand up",
    },
    {
      kanji: "泣",
      meaning: "cry",
    },
    {
      kanji: "章",
      meaning: "badge",
    },
    {
      kanji: "競",
      meaning: "vie",
    },
    {
      kanji: "帝",
      meaning: "sovereign",
    },
    {
      kanji: "諦",
      meaning: "renunciation",
    },
    {
      kanji: "童",
      meaning: "juvenile",
    },
    {
      kanji: "瞳",
      meaning: "pupil",
    },
    {
      kanji: "鐘",
      meaning: "bell",
    },
    {
      kanji: "商",
      meaning: "make a deal",
    },
    {
      kanji: "嫡",
      meaning: "legitimate wife",
    },
    {
      kanji: "適",
      meaning: "suitable",
    },
    {
      kanji: "滴",
      meaning: "drip",
    },
    {
      kanji: "敵",
      meaning: "enemy",
    },
    {
      kanji: "匕",
      meaning: "spoon",
    },
    {
      kanji: "叱",
      meaning: "scold",
    },
    {
      kanji: "匂",
      meaning: "aroma",
    },
    {
      kanji: "頃",
      meaning: "about that time",
    },
    {
      kanji: "北",
      meaning: "north",
    },
    {
      kanji: "背",
      meaning: "stature",
    },
    {
      kanji: "比",
      meaning: "compare",
    },
    {
      kanji: "昆",
      meaning: "descendants",
    },
    {
      kanji: "皆",
      meaning: "all",
    },
    {
      kanji: "楷",
      meaning: "block letters",
    },
    {
      kanji: "諧",
      meaning: "orderliness",
    },
    {
      kanji: "混",
      meaning: "mix",
    },
    {
      kanji: "渇",
      meaning: "thirst",
    },
    {
      kanji: "謁",
      meaning: "audience",
    },
    {
      kanji: "褐",
      meaning: "brown",
    },
    {
      kanji: "喝",
      meaning: "hoarse",
    },
    {
      kanji: "葛",
      meaning: "kudzu",
    },
    {
      kanji: "旨",
      meaning: "delicious",
    },
    {
      kanji: "脂",
      meaning: "fat",
    },
    {
      kanji: "詣",
      meaning: "visit a shrine",
    },
    {
      kanji: "壱",
      meaning: "I (one)",
    },
    {
      kanji: "毎",
      meaning: "every",
    },
    {
      kanji: "敏",
      meaning: "cleverness",
    },
    {
      kanji: "梅",
      meaning: "plum",
    },
    {
      kanji: "海",
      meaning: "sea",
    },
    {
      kanji: "乞",
      meaning: "beg",
    },
    {
      kanji: "乾",
      meaning: "drought",
    },
    {
      kanji: "腹",
      meaning: "abdomen",
    },
    {
      kanji: "複",
      meaning: "duplicate",
    },
    {
      kanji: "欠",
      meaning: "lack",
    },
    {
      kanji: "吹",
      meaning: "blow",
    },
    {
      kanji: "炊",
      meaning: "cook",
    },
    {
      kanji: "歌",
      meaning: "song",
    },
    {
      kanji: "軟",
      meaning: "soft",
    },
    {
      kanji: "次",
      meaning: "next",
    },
    {
      kanji: "茨",
      meaning: "briar",
    },
    {
      kanji: "資",
      meaning: "assets",
    },
    {
      kanji: "姿",
      meaning: "figure",
    },
    {
      kanji: "諮",
      meaning: "consult with",
    },
    {
      kanji: "賠",
      meaning: "compensation",
    },
    {
      kanji: "培",
      meaning: "cultivate",
    },
    {
      kanji: "剖",
      meaning: "divide",
    },
    {
      kanji: "音",
      meaning: "sound",
    },
    {
      kanji: "暗",
      meaning: "darkness",
    },
    {
      kanji: "韻",
      meaning: "rhyme",
    },
    {
      kanji: "識",
      meaning: "discriminating",
    },
    {
      kanji: "鏡",
      meaning: "mirror",
    },
    {
      kanji: "境",
      meaning: "boundary",
    },
    {
      kanji: "亡",
      meaning: "deceased",
    },
    {
      kanji: "盲",
      meaning: "blind",
    },
    {
      kanji: "妄",
      meaning: "delusion",
    },
    {
      kanji: "荒",
      meaning: "laid waste",
    },
    {
      kanji: "望",
      meaning: "ambition",
    },
    {
      kanji: "方",
      meaning: "direction",
    },
    {
      kanji: "妨",
      meaning: "disturb",
    },
    {
      kanji: "坊",
      meaning: "boy",
    },
    {
      kanji: "芳",
      meaning: "perfumed",
    },
    {
      kanji: "肪",
      meaning: "obese",
    },
    {
      kanji: "訪",
      meaning: "call on",
    },
    {
      kanji: "放",
      meaning: "set free",
    },
    {
      kanji: "激",
      meaning: "violent",
    },
    {
      kanji: "脱",
      meaning: "undress",
    },
    {
      kanji: "説",
      meaning: "explanation",
    },
    {
      kanji: "鋭",
      meaning: "pointed",
    },
    {
      kanji: "曽",
      meaning: "formerly",
    },
    {
      kanji: "増",
      meaning: "increase",
    },
    {
      kanji: "贈",
      meaning: "presents",
    },
    {
      kanji: "東",
      meaning: "east",
    },
    {
      kanji: "棟",
      meaning: "ridgepole",
    },
    {
      kanji: "凍",
      meaning: "frozen",
    },
    {
      kanji: "妊",
      meaning: "pregnancy",
    },
    {
      kanji: "廷",
      meaning: "courts",
    },
    {
      kanji: "染",
      meaning: "dye",
    },
    {
      kanji: "燃",
      meaning: "burn",
    },
    {
      kanji: "賓",
      meaning: "V.I.P.",
    },
    {
      kanji: "歳",
      meaning: "year-end",
    },
    {
      kanji: "県",
      meaning: "prefecture",
    },
    {
      kanji: "栃",
      meaning: "horse chestnut",
    },
    {
      kanji: "地",
      meaning: "ground",
    },
    {
      kanji: "池",
      meaning: "pond",
    },
    {
      kanji: "虫",
      meaning: "insect",
    },
    {
      kanji: "蛍",
      meaning: "lightning bug",
    },
    {
      kanji: "蛇",
      meaning: "snake",
    },
    {
      kanji: "虹",
      meaning: "rainbow",
    },
    {
      kanji: "蝶",
      meaning: "butterfly",
    },
    {
      kanji: "独",
      meaning: "single",
    },
    {
      kanji: "蚕",
      meaning: "silkworm",
    },
    {
      kanji: "風",
      meaning: "wind",
    },
    {
      kanji: "己",
      meaning: "self",
    },
    {
      kanji: "起",
      meaning: "rouse",
    },
    {
      kanji: "妃",
      meaning: "queen",
    },
    {
      kanji: "改",
      meaning: "reformation",
    },
    {
      kanji: "記",
      meaning: "scribe",
    },
    {
      kanji: "包",
      meaning: "wrap",
    },
    {
      kanji: "胞",
      meaning: "placenta",
    },
    {
      kanji: "砲",
      meaning: "cannon",
    },
    {
      kanji: "泡",
      meaning: "bubble",
    },
    {
      kanji: "亀",
      meaning: "tortoise",
    },
    {
      kanji: "電",
      meaning: "electricity",
    },
    {
      kanji: "竜",
      meaning: "dragon",
    },
    {
      kanji: "滝",
      meaning: "waterfall",
    },
    {
      kanji: "豚",
      meaning: "pork",
    },
    {
      kanji: "逐",
      meaning: "pursue",
    },
    {
      kanji: "遂",
      meaning: "consummate",
    },
    {
      kanji: "家",
      meaning: "house",
    },
    {
      kanji: "嫁",
      meaning: "marry into",
    },
    {
      kanji: "豪",
      meaning: "overpowering",
    },
    {
      kanji: "腸",
      meaning: "intestines",
    },
    {
      kanji: "場",
      meaning: "location",
    },
    {
      kanji: "湯",
      meaning: "hot water",
    },
    {
      kanji: "羊",
      meaning: "sheep",
    },
    {
      kanji: "美",
      meaning: "beauty",
    },
    {
      kanji: "洋",
      meaning: "ocean",
    },
    {
      kanji: "詳",
      meaning: "detailed",
    },
    {
      kanji: "鮮",
      meaning: "fresh",
    },
    {
      kanji: "達",
      meaning: "accomplished",
    },
    {
      kanji: "羨",
      meaning: "envious",
    },
    {
      kanji: "差",
      meaning: "distinction",
    },
    {
      kanji: "着",
      meaning: "don",
    },
    {
      kanji: "唯",
      meaning: "solely",
    },
    {
      kanji: "堆",
      meaning: "piled high",
    },
    {
      kanji: "椎",
      meaning: "sweet oak",
    },
    {
      kanji: "誰",
      meaning: "who?",
    },
    {
      kanji: "焦",
      meaning: "char",
    },
    {
      kanji: "礁",
      meaning: "reef",
    },
    {
      kanji: "集",
      meaning: "gather",
    },
    {
      kanji: "准",
      meaning: "quasi-",
    },
    {
      kanji: "進",
      meaning: "advance",
    },
    {
      kanji: "雑",
      meaning: "miscellaneous",
    },
    {
      kanji: "雌",
      meaning: "female",
    },
    {
      kanji: "準",
      meaning: "semi-",
    },
    {
      kanji: "奮",
      meaning: "stirred up",
    },
    {
      kanji: "奪",
      meaning: "rob",
    },
    {
      kanji: "確",
      meaning: "assurance",
    },
    {
      kanji: "午",
      meaning: "noon",
    },
    {
      kanji: "許",
      meaning: "permit",
    },
    {
      kanji: "歓",
      meaning: "delight",
    },
    {
      kanji: "権",
      meaning: "authority",
    },
    {
      kanji: "観",
      meaning: "outlook",
    },
    {
      kanji: "羽",
      meaning: "feathers",
    },
    {
      kanji: "習",
      meaning: "learn",
    },
    {
      kanji: "翌",
      meaning: "the following",
    },
    {
      kanji: "曜",
      meaning: "weekday",
    },
    {
      kanji: "濯",
      meaning: "laundry",
    },
    {
      kanji: "曰",
      meaning: "sayeth",
    },
    {
      kanji: "困",
      meaning: "quandary",
    },
    {
      kanji: "固",
      meaning: "harden",
    },
    {
      kanji: "錮",
      meaning: "weld",
    },
    {
      kanji: "国",
      meaning: "country",
    },
    {
      kanji: "団",
      meaning: "group",
    },
    {
      kanji: "因",
      meaning: "cause",
    },
    {
      kanji: "姻",
      meaning: "matrimony",
    },
    {
      kanji: "咽",
      meaning: "windpipe",
    },
    {
      kanji: "園",
      meaning: "park",
    },
    {
      kanji: "回",
      meaning: "-times",
    },
    {
      kanji: "壇",
      meaning: "podium",
    },
    {
      kanji: "店",
      meaning: "store",
    },
    {
      kanji: "庫",
      meaning: "warehouse",
    },
    {
      kanji: "庭",
      meaning: "courtyard",
    },
    {
      kanji: "庁",
      meaning: "government office",
    },
    {
      kanji: "床",
      meaning: "bed",
    },
    {
      kanji: "麻",
      meaning: "hemp",
    },
    {
      kanji: "磨",
      meaning: "grind",
    },
    {
      kanji: "心",
      meaning: "heart",
    },
    {
      kanji: "忘",
      meaning: "forget",
    },
    {
      kanji: "恣",
      meaning: "selfish",
    },
    {
      kanji: "忍",
      meaning: "endure",
    },
    {
      kanji: "認",
      meaning: "acknowledge",
    },
    {
      kanji: "忌",
      meaning: "mourning",
    },
    {
      kanji: "志",
      meaning: "intention",
    },
    {
      kanji: "誌",
      meaning: "document",
    },
    {
      kanji: "芯",
      meaning: "wick",
    },
    {
      kanji: "忠",
      meaning: "loyalty",
    },
    {
      kanji: "串",
      meaning: "shish kebab",
    },
    {
      kanji: "患",
      meaning: "afflicted",
    },
    {
      kanji: "思",
      meaning: "think",
    },
    {
      kanji: "恩",
      meaning: "grace",
    },
    {
      kanji: "応",
      meaning: "apply",
    },
    {
      kanji: "意",
      meaning: "idea",
    },
    {
      kanji: "臆",
      meaning: "cowardice",
    },
    {
      kanji: "想",
      meaning: "concept",
    },
    {
      kanji: "息",
      meaning: "breath",
    },
    {
      kanji: "憩",
      meaning: "recess",
    },
    {
      kanji: "恵",
      meaning: "favor",
    },
    {
      kanji: "恐",
      meaning: "fear",
    },
    {
      kanji: "惑",
      meaning: "beguile",
    },
    {
      kanji: "感",
      meaning: "emotion",
    },
    {
      kanji: "憂",
      meaning: "melancholy",
    },
    {
      kanji: "寡",
      meaning: "widow",
    },
    {
      kanji: "忙",
      meaning: "busy",
    },
    {
      kanji: "悦",
      meaning: "ecstasy",
    },
    {
      kanji: "恒",
      meaning: "constancy",
    },
    {
      kanji: "悼",
      meaning: "lament",
    },
    {
      kanji: "悟",
      meaning: "enlightenment",
    },
    {
      kanji: "怖",
      meaning: "dreadful",
    },
    {
      kanji: "慌",
      meaning: "disconcerted",
    },
    {
      kanji: "悔",
      meaning: "repent",
    },
    {
      kanji: "憎",
      meaning: "hate",
    },
    {
      kanji: "慣",
      meaning: "accustomed",
    },
    {
      kanji: "愉",
      meaning: "pleasure",
    },
    {
      kanji: "惰",
      meaning: "lazy",
    },
    {
      kanji: "慎",
      meaning: "humility",
    },
    {
      kanji: "憾",
      meaning: "remorse",
    },
    {
      kanji: "憶",
      meaning: "recollection",
    },
    {
      kanji: "惧",
      meaning: "disquieting",
    },
    {
      kanji: "憧",
      meaning: "yearn",
    },
    {
      kanji: "憬",
      meaning: "hanker",
    },
    {
      kanji: "慕",
      meaning: "pining",
    },
    {
      kanji: "添",
      meaning: "annexed",
    },
    {
      kanji: "必",
      meaning: "invariably",
    },
    {
      kanji: "泌",
      meaning: "ooze",
    },
    {
      kanji: "手",
      meaning: "hand",
    },
    {
      kanji: "看",
      meaning: "watch over",
    },
    {
      kanji: "摩",
      meaning: "chafe",
    },
    {
      kanji: "我",
      meaning: "ego",
    },
    {
      kanji: "義",
      meaning: "righteousness",
    },
    {
      kanji: "議",
      meaning: "deliberation",
    },
    {
      kanji: "犠",
      meaning: "sacrifice",
    },
    {
      kanji: "抹",
      meaning: "rub",
    },
    {
      kanji: "拭",
      meaning: "wipe",
    },
    {
      kanji: "拉",
      meaning: "yank",
    },
    {
      kanji: "抱",
      meaning: "embrace",
    },
    {
      kanji: "搭",
      meaning: "board",
    },
    {
      kanji: "抄",
      meaning: "extract",
    },
    {
      kanji: "抗",
      meaning: "confront",
    },
    {
      kanji: "批",
      meaning: "criticism",
    },
    {
      kanji: "招",
      meaning: "beckon",
    },
    {
      kanji: "拓",
      meaning: "clear the land",
    },
    {
      kanji: "拍",
      meaning: "clap",
    },
    {
      kanji: "打",
      meaning: "strike",
    },
    {
      kanji: "拘",
      meaning: "arrest",
    },
    {
      kanji: "捨",
      meaning: "discard",
    },
    {
      kanji: "拐",
      meaning: "kidnap",
    },
    {
      kanji: "摘",
      meaning: "pinch",
    },
    {
      kanji: "挑",
      meaning: "challenge",
    },
    {
      kanji: "指",
      meaning: "finger",
    },
    {
      kanji: "持",
      meaning: "hold",
    },
    {
      kanji: "拶",
      meaning: "imminent",
    },
    {
      kanji: "括",
      meaning: "fasten",
    },
    {
      kanji: "揮",
      meaning: "brandish",
    },
    {
      kanji: "推",
      meaning: "conjecture",
    },
    {
      kanji: "揚",
      meaning: "hoist",
    },
    {
      kanji: "提",
      meaning: "propose",
    },
    {
      kanji: "損",
      meaning: "damage",
    },
    {
      kanji: "拾",
      meaning: "pick up",
    },
    {
      kanji: "担",
      meaning: "shouldering",
    },
    {
      kanji: "拠",
      meaning: "foothold",
    },
    {
      kanji: "描",
      meaning: "sketch",
    },
    {
      kanji: "操",
      meaning: "maneuver",
    },
    {
      kanji: "接",
      meaning: "touch",
    },
    {
      kanji: "掲",
      meaning: "put up a notice",
    },
    {
      kanji: "掛",
      meaning: "hang",
    },
    {
      kanji: "捗",
      meaning: "make headway",
    },
    {
      kanji: "研",
      meaning: "polish",
    },
    {
      kanji: "戒",
      meaning: "commandment",
    },
    {
      kanji: "弄",
      meaning: "tinker with",
    },
    {
      kanji: "械",
      meaning: "contraption",
    },
    {
      kanji: "鼻",
      meaning: "nose",
    },
    {
      kanji: "刑",
      meaning: "punish",
    },
    {
      kanji: "型",
      meaning: "mould",
    },
    {
      kanji: "才",
      meaning: "genius",
    },
    {
      kanji: "財",
      meaning: "property",
    },
    {
      kanji: "材",
      meaning: "lumber",
    },
    {
      kanji: "存",
      meaning: "suppose",
    },
    {
      kanji: "在",
      meaning: "exist",
    },
    {
      kanji: "乃",
      meaning: "from",
    },
    {
      kanji: "携",
      meaning: "portable",
    },
    {
      kanji: "及",
      meaning: "reach out",
    },
    {
      kanji: "吸",
      meaning: "suck",
    },
    {
      kanji: "扱",
      meaning: "handle",
    },
    {
      kanji: "丈",
      meaning: "length",
    },
    {
      kanji: "史",
      meaning: "history",
    },
    {
      kanji: "吏",
      meaning: "officer",
    },
    {
      kanji: "更",
      meaning: "grow late",
    },
    {
      kanji: "硬",
      meaning: "stiff",
    },
    {
      kanji: "梗",
      meaning: "spiny",
    },
    {
      kanji: "又",
      meaning: "or again",
    },
    {
      kanji: "双",
      meaning: "pair",
    },
    {
      kanji: "桑",
      meaning: "mulberry",
    },
    {
      kanji: "隻",
      meaning: "vessels",
    },
    {
      kanji: "護",
      meaning: "safeguard",
    },
    {
      kanji: "獲",
      meaning: "seize",
    },
    {
      kanji: "奴",
      meaning: "guy",
    },
    {
      kanji: "怒",
      meaning: "angry",
    },
    {
      kanji: "友",
      meaning: "friend",
    },
    {
      kanji: "抜",
      meaning: "slip out",
    },
    {
      kanji: "投",
      meaning: "throw",
    },
    {
      kanji: "没",
      meaning: "drown",
    },
    {
      kanji: "股",
      meaning: "thigh",
    },
    {
      kanji: "設",
      meaning: "establishment",
    },
    {
      kanji: "撃",
      meaning: "beat",
    },
    {
      kanji: "殻",
      meaning: "husk",
    },
    {
      kanji: "支",
      meaning: "branch",
    },
    {
      kanji: "技",
      meaning: "skill",
    },
    {
      kanji: "枝",
      meaning: "bough",
    },
    {
      kanji: "肢",
      meaning: "limb",
    },
    {
      kanji: "茎",
      meaning: "stalk",
    },
    {
      kanji: "怪",
      meaning: "suspicious",
    },
    {
      kanji: "軽",
      meaning: "lightly",
    },
    {
      kanji: "叔",
      meaning: "uncle",
    },
    {
      kanji: "督",
      meaning: "coach",
    },
    {
      kanji: "寂",
      meaning: "loneliness",
    },
    {
      kanji: "淑",
      meaning: "graceful",
    },
    {
      kanji: "反",
      meaning: "anti-",
    },
    {
      kanji: "坂",
      meaning: "slope",
    },
    {
      kanji: "板",
      meaning: "plank",
    },
    {
      kanji: "返",
      meaning: "return",
    },
    {
      kanji: "販",
      meaning: "marketing",
    },
    {
      kanji: "爪",
      meaning: "claw",
    },
    {
      kanji: "妥",
      meaning: "gentle",
    },
    {
      kanji: "乳",
      meaning: "milk",
    },
    {
      kanji: "浮",
      meaning: "floating",
    },
    {
      kanji: "淫",
      meaning: "lewd",
    },
    {
      kanji: "将",
      meaning: "leader",
    },
    {
      kanji: "奨",
      meaning: "exhort",
    },
    {
      kanji: "采",
      meaning: "grab",
    },
    {
      kanji: "採",
      meaning: "pick",
    },
    {
      kanji: "菜",
      meaning: "vegetable",
    },
    {
      kanji: "受",
      meaning: "accept",
    },
    {
      kanji: "授",
      meaning: "impart",
    },
    {
      kanji: "愛",
      meaning: "love",
    },
    {
      kanji: "曖",
      meaning: "unclear",
    },
    {
      kanji: "払",
      meaning: "pay",
    },
    {
      kanji: "広",
      meaning: "wide",
    },
    {
      kanji: "勾",
      meaning: "hooked",
    },
    {
      kanji: "拡",
      meaning: "broaden",
    },
    {
      kanji: "鉱",
      meaning: "mineral",
    },
    {
      kanji: "弁",
      meaning: "valve",
    },
    {
      kanji: "雄",
      meaning: "male",
    },
    {
      kanji: "台",
      meaning: "pedestal",
    },
    {
      kanji: "怠",
      meaning: "neglect",
    },
    {
      kanji: "治",
      meaning: "reign",
    },
    {
      kanji: "冶",
      meaning: "metallurgy",
    },
    {
      kanji: "始",
      meaning: "commence",
    },
    {
      kanji: "胎",
      meaning: "womb",
    },
    {
      kanji: "窓",
      meaning: "window",
    },
    {
      kanji: "去",
      meaning: "gone",
    },
    {
      kanji: "法",
      meaning: "method",
    },
    {
      kanji: "会",
      meaning: "meeting",
    },
    {
      kanji: "至",
      meaning: "climax",
    },
    {
      kanji: "室",
      meaning: "room",
    },
    {
      kanji: "到",
      meaning: "arrival",
    },
    {
      kanji: "致",
      meaning: "doth",
    },
    {
      kanji: "互",
      meaning: "mutually",
    },
    {
      kanji: "棄",
      meaning: "abandon",
    },
    {
      kanji: "育",
      meaning: "bring up",
    },
    {
      kanji: "撤",
      meaning: "remove",
    },
    {
      kanji: "充",
      meaning: "allot",
    },
    {
      kanji: "銃",
      meaning: "gun",
    },
    {
      kanji: "硫",
      meaning: "sulfur",
    },
    {
      kanji: "流",
      meaning: "current",
    },
    {
      kanji: "允",
      meaning: "license",
    },
    {
      kanji: "唆",
      meaning: "tempt",
    },
    {
      kanji: "出",
      meaning: "exit",
    },
    {
      kanji: "山",
      meaning: "mountain",
    },
    {
      kanji: "拙",
      meaning: "bungling",
    },
    {
      kanji: "岩",
      meaning: "boulder",
    },
    {
      kanji: "炭",
      meaning: "charcoal",
    },
    {
      kanji: "岐",
      meaning: "branch off",
    },
    {
      kanji: "峠",
      meaning: "mountain pass",
    },
    {
      kanji: "崩",
      meaning: "crumble",
    },
    {
      kanji: "密",
      meaning: "secrecy",
    },
    {
      kanji: "蜜",
      meaning: "honey",
    },
    {
      kanji: "嵐",
      meaning: "storm",
    },
    {
      kanji: "崎",
      meaning: "promontory",
    },
    {
      kanji: "崖",
      meaning: "bluffs",
    },
    {
      kanji: "入",
      meaning: "enter",
    },
    {
      kanji: "込",
      meaning: "crowded",
    },
    {
      kanji: "分",
      meaning: "part",
    },
    {
      kanji: "貧",
      meaning: "poverty",
    },
    {
      kanji: "頒",
      meaning: "partition",
    },
    {
      kanji: "公",
      meaning: "public",
    },
    {
      kanji: "松",
      meaning: "pine tree",
    },
    {
      kanji: "翁",
      meaning: "venerable old man",
    },
    {
      kanji: "訟",
      meaning: "sue",
    },
    {
      kanji: "谷",
      meaning: "valley",
    },
    {
      kanji: "浴",
      meaning: "bathe",
    },
    {
      kanji: "容",
      meaning: "contain",
    },
    {
      kanji: "溶",
      meaning: "melt",
    },
    {
      kanji: "欲",
      meaning: "longing",
    },
    {
      kanji: "裕",
      meaning: "abundant",
    },
    {
      kanji: "鉛",
      meaning: "lead (metal)",
    },
    {
      kanji: "沿",
      meaning: "run alongside",
    },
    {
      kanji: "賞",
      meaning: "prize",
    },
    {
      kanji: "党",
      meaning: "party",
    },
    {
      kanji: "堂",
      meaning: "hall",
    },
    {
      kanji: "常",
      meaning: "usual",
    },
    {
      kanji: "裳",
      meaning: "skirt",
    },
    {
      kanji: "掌",
      meaning: "manipulate",
    },
    {
      kanji: "皮",
      meaning: "pelt",
    },
    {
      kanji: "波",
      meaning: "waves",
    },
    {
      kanji: "婆",
      meaning: "old woman",
    },
    {
      kanji: "披",
      meaning: "expose",
    },
    {
      kanji: "破",
      meaning: "rend",
    },
    {
      kanji: "被",
      meaning: "incur",
    },
    {
      kanji: "残",
      meaning: "remainder",
    },
    {
      kanji: "殉",
      meaning: "martyrdom",
    },
    {
      kanji: "殊",
      meaning: "particularly",
    },
    {
      kanji: "殖",
      meaning: "augment",
    },
    {
      kanji: "列",
      meaning: "file",
    },
    {
      kanji: "裂",
      meaning: "split",
    },
    {
      kanji: "烈",
      meaning: "ardent",
    },
    {
      kanji: "死",
      meaning: "death",
    },
    {
      kanji: "葬",
      meaning: "interment",
    },
    {
      kanji: "瞬",
      meaning: "wink",
    },
    {
      kanji: "耳",
      meaning: "ear",
    },
    {
      kanji: "取",
      meaning: "take",
    },
    {
      kanji: "趣",
      meaning: "gist",
    },
    {
      kanji: "最",
      meaning: "utmost",
    },
    {
      kanji: "撮",
      meaning: "snapshot",
    },
    {
      kanji: "恥",
      meaning: "shame",
    },
    {
      kanji: "職",
      meaning: "post",
    },
    {
      kanji: "聖",
      meaning: "holy",
    },
    {
      kanji: "敢",
      meaning: "daring",
    },
    {
      kanji: "聴",
      meaning: "listen",
    },
    {
      kanji: "懐",
      meaning: "pocket",
    },
    {
      kanji: "慢",
      meaning: "ridicule",
    },
    {
      kanji: "漫",
      meaning: "loose",
    },
    {
      kanji: "買",
      meaning: "buy",
    },
    {
      kanji: "置",
      meaning: "placement",
    },
    {
      kanji: "罰",
      meaning: "penalty",
    },
    {
      kanji: "寧",
      meaning: "rather",
    },
    {
      kanji: "濁",
      meaning: "voiced",
    },
    {
      kanji: "環",
      meaning: "ring",
    },
    {
      kanji: "還",
      meaning: "send back",
    },
    {
      kanji: "夫",
      meaning: "husband",
    },
    {
      kanji: "扶",
      meaning: "aid",
    },
    {
      kanji: "渓",
      meaning: "mountain stream",
    },
    {
      kanji: "規",
      meaning: "standard",
    },
    {
      kanji: "替",
      meaning: "exchange",
    },
    {
      kanji: "賛",
      meaning: "approve",
    },
    {
      kanji: "潜",
      meaning: "submerge",
    },
    {
      kanji: "失",
      meaning: "lose",
    },
    {
      kanji: "鉄",
      meaning: "iron",
    },
    {
      kanji: "迭",
      meaning: "alternate",
    },
    {
      kanji: "臣",
      meaning: "retainer",
    },
    {
      kanji: "姫",
      meaning: "princess",
    },
    {
      kanji: "蔵",
      meaning: "storehouse",
    },
    {
      kanji: "臓",
      meaning: "entrails",
    },
    {
      kanji: "賢",
      meaning: "intelligent",
    },
    {
      kanji: "腎",
      meaning: "kidney",
    },
    {
      kanji: "堅",
      meaning: "strict",
    },
    {
      kanji: "臨",
      meaning: "look to",
    },
    {
      kanji: "覧",
      meaning: "perusal",
    },
    {
      kanji: "巨",
      meaning: "gigantic",
    },
    {
      kanji: "拒",
      meaning: "repel",
    },
    {
      kanji: "力",
      meaning: "power",
    },
    {
      kanji: "男",
      meaning: "man",
    },
    {
      kanji: "労",
      meaning: "labor",
    },
    {
      kanji: "募",
      meaning: "recruit",
    },
    {
      kanji: "劣",
      meaning: "inferiority",
    },
    {
      kanji: "功",
      meaning: "achievement",
    },
    {
      kanji: "勧",
      meaning: "persuade",
    },
    {
      kanji: "努",
      meaning: "toil",
    },
    {
      kanji: "勃",
      meaning: "uprising",
    },
    {
      kanji: "励",
      meaning: "encourage",
    },
    {
      kanji: "加",
      meaning: "add",
    },
    {
      kanji: "賀",
      meaning: "congratulations",
    },
    {
      kanji: "架",
      meaning: "erect",
    },
    {
      kanji: "脇",
      meaning: "armpit",
    },
    {
      kanji: "脅",
      meaning: "threaten",
    },
    {
      kanji: "協",
      meaning: "co-",
    },
    {
      kanji: "行",
      meaning: "going",
    },
    {
      kanji: "律",
      meaning: "rhythm",
    },
    {
      kanji: "復",
      meaning: "restore",
    },
    {
      kanji: "得",
      meaning: "gain",
    },
    {
      kanji: "従",
      meaning: "accompany",
    },
    {
      kanji: "徒",
      meaning: "junior",
    },
    {
      kanji: "待",
      meaning: "wait",
    },
    {
      kanji: "往",
      meaning: "journey",
    },
    {
      kanji: "征",
      meaning: "subjugate",
    },
    {
      kanji: "径",
      meaning: "diameter",
    },
    {
      kanji: "彼",
      meaning: "he",
    },
    {
      kanji: "役",
      meaning: "duty",
    },
    {
      kanji: "徳",
      meaning: "benevolence",
    },
    {
      kanji: "徹",
      meaning: "penetrate",
    },
    {
      kanji: "徴",
      meaning: "indications",
    },
    {
      kanji: "懲",
      meaning: "penal",
    },
    {
      kanji: "微",
      meaning: "delicate",
    },
    {
      kanji: "街",
      meaning: "boulevard",
    },
    {
      kanji: "桁",
      meaning: "girder",
    },
    {
      kanji: "衡",
      meaning: "equilibrium",
    },
    {
      kanji: "稿",
      meaning: "draft",
    },
    {
      kanji: "稼",
      meaning: "earnings",
    },
    {
      kanji: "程",
      meaning: "extent",
    },
    {
      kanji: "税",
      meaning: "tax",
    },
    {
      kanji: "稚",
      meaning: "immature",
    },
    {
      kanji: "和",
      meaning: "harmony",
    },
    {
      kanji: "移",
      meaning: "shift",
    },
    {
      kanji: "秒",
      meaning: "second",
    },
    {
      kanji: "秋",
      meaning: "autumn",
    },
    {
      kanji: "愁",
      meaning: "distress",
    },
    {
      kanji: "私",
      meaning: "private",
    },
    {
      kanji: "秩",
      meaning: "regularity",
    },
    {
      kanji: "秘",
      meaning: "secret",
    },
    {
      kanji: "称",
      meaning: "appellation",
    },
    {
      kanji: "利",
      meaning: "profit",
    },
    {
      kanji: "梨",
      meaning: "pear tree",
    },
    {
      kanji: "穫",
      meaning: "harvest",
    },
    {
      kanji: "穂",
      meaning: "ear of a plant",
    },
    {
      kanji: "稲",
      meaning: "rice plant",
    },
    {
      kanji: "香",
      meaning: "incense",
    },
    {
      kanji: "季",
      meaning: "seasons",
    },
    {
      kanji: "委",
      meaning: "committee",
    },
    {
      kanji: "秀",
      meaning: "excel",
    },
    {
      kanji: "透",
      meaning: "transparent",
    },
    {
      kanji: "誘",
      meaning: "entice",
    },
    {
      kanji: "稽",
      meaning: "training",
    },
    {
      kanji: "穀",
      meaning: "cereals",
    },
    {
      kanji: "菌",
      meaning: "germ",
    },
    {
      kanji: "萎",
      meaning: "numb",
    },
    {
      kanji: "米",
      meaning: "rice",
    },
    {
      kanji: "粉",
      meaning: "flour",
    },
    {
      kanji: "粘",
      meaning: "sticky",
    },
    {
      kanji: "粒",
      meaning: "grains",
    },
    {
      kanji: "粧",
      meaning: "cosmetics",
    },
    {
      kanji: "迷",
      meaning: "astray",
    },
    {
      kanji: "粋",
      meaning: "chic",
    },
    {
      kanji: "謎",
      meaning: "riddle",
    },
    {
      kanji: "糧",
      meaning: "provisions",
    },
    {
      kanji: "菊",
      meaning: "chrysanthemum",
    },
    {
      kanji: "奥",
      meaning: "core",
    },
    {
      kanji: "数",
      meaning: "number",
    },
    {
      kanji: "楼",
      meaning: "watchtower",
    },
    {
      kanji: "類",
      meaning: "sort",
    },
    {
      kanji: "漆",
      meaning: "lacquer",
    },
    {
      kanji: "膝",
      meaning: "knee",
    },
    {
      kanji: "様",
      meaning: "Esq.",
    },
    {
      kanji: "求",
      meaning: "request",
    },
    {
      kanji: "球",
      meaning: "ball",
    },
    {
      kanji: "救",
      meaning: "salvation",
    },
    {
      kanji: "竹",
      meaning: "bamboo",
    },
    {
      kanji: "笑",
      meaning: "laugh",
    },
    {
      kanji: "笠",
      meaning: "bamboo hat",
    },
    {
      kanji: "笹",
      meaning: "bamboo grass",
    },
    {
      kanji: "箋",
      meaning: "stationery",
    },
    {
      kanji: "筋",
      meaning: "muscle",
    },
    {
      kanji: "箱",
      meaning: "box",
    },
    {
      kanji: "筆",
      meaning: "writing brush",
    },
    {
      kanji: "筒",
      meaning: "cylinder",
    },
    {
      kanji: "等",
      meaning: "etc.",
    },
    {
      kanji: "算",
      meaning: "calculate",
    },
    {
      kanji: "答",
      meaning: "solution",
    },
    {
      kanji: "策",
      meaning: "scheme",
    },
    {
      kanji: "簿",
      meaning: "register",
    },
    {
      kanji: "築",
      meaning: "fabricate",
    },
    {
      kanji: "篭",
      meaning: "basket",
    },
    {
      kanji: "人",
      meaning: "person",
    },
    {
      kanji: "佐",
      meaning: "assistant",
    },
    {
      kanji: "侶",
      meaning: "partner",
    },
    {
      kanji: "但",
      meaning: "however",
    },
    {
      kanji: "住",
      meaning: "dwell",
    },
    {
      kanji: "位",
      meaning: "rank",
    },
    {
      kanji: "仲",
      meaning: "go-between",
    },
    {
      kanji: "体",
      meaning: "body",
    },
    {
      kanji: "悠",
      meaning: "remote",
    },
    {
      kanji: "件",
      meaning: "affair",
    },
    {
      kanji: "仕",
      meaning: "attend",
    },
    {
      kanji: "他",
      meaning: "other",
    },
    {
      kanji: "伏",
      meaning: "prostrated",
    },
    {
      kanji: "伝",
      meaning: "transmit",
    },
    {
      kanji: "仏",
      meaning: "Buddha",
    },
    {
      kanji: "休",
      meaning: "rest",
    },
    {
      kanji: "仮",
      meaning: "provisional",
    },
    {
      kanji: "伎",
      meaning: "performing artist",
    },
    {
      kanji: "伯",
      meaning: "chief",
    },
    {
      kanji: "俗",
      meaning: "vulgar",
    },
    {
      kanji: "信",
      meaning: "faith",
    },
    {
      kanji: "佳",
      meaning: "excellent",
    },
    {
      kanji: "依",
      meaning: "reliant",
    },
    {
      kanji: "例",
      meaning: "example",
    },
    {
      kanji: "個",
      meaning: "individual",
    },
    {
      kanji: "健",
      meaning: "healthy",
    },
    {
      kanji: "側",
      meaning: "side",
    },
    {
      kanji: "侍",
      meaning: "waiter",
    },
    {
      kanji: "停",
      meaning: "halt",
    },
    {
      kanji: "値",
      meaning: "price",
    },
    {
      kanji: "倣",
      meaning: "emulate",
    },
    {
      kanji: "傲",
      meaning: "arrogance",
    },
    {
      kanji: "倒",
      meaning: "overthrow",
    },
    {
      kanji: "偵",
      meaning: "spy",
    },
    {
      kanji: "僧",
      meaning: "Buddhist priest",
    },
    {
      kanji: "億",
      meaning: "hundred million",
    },
    {
      kanji: "儀",
      meaning: "ceremony",
    },
    {
      kanji: "償",
      meaning: "reparation",
    },
    {
      kanji: "仙",
      meaning: "hermit",
    },
    {
      kanji: "催",
      meaning: "sponsor",
    },
    {
      kanji: "仁",
      meaning: "humanity",
    },
    {
      kanji: "侮",
      meaning: "scorn",
    },
    {
      kanji: "使",
      meaning: "use",
    },
    {
      kanji: "便",
      meaning: "convenience",
    },
    {
      kanji: "倍",
      meaning: "double",
    },
    {
      kanji: "優",
      meaning: "tenderness",
    },
    {
      kanji: "伐",
      meaning: "fell",
    },
    {
      kanji: "宿",
      meaning: "inn",
    },
    {
      kanji: "傷",
      meaning: "wound",
    },
    {
      kanji: "保",
      meaning: "protect",
    },
    {
      kanji: "褒",
      meaning: "praise",
    },
    {
      kanji: "傑",
      meaning: "greatness",
    },
    {
      kanji: "付",
      meaning: "adhere",
    },
    {
      kanji: "符",
      meaning: "token",
    },
    {
      kanji: "府",
      meaning: "municipality",
    },
    {
      kanji: "任",
      meaning: "responsibility",
    },
    {
      kanji: "賃",
      meaning: "fare",
    },
    {
      kanji: "代",
      meaning: "substitute",
    },
    {
      kanji: "袋",
      meaning: "sack",
    },
    {
      kanji: "貸",
      meaning: "lend",
    },
    {
      kanji: "化",
      meaning: "change",
    },
    {
      kanji: "花",
      meaning: "flower",
    },
    {
      kanji: "貨",
      meaning: "freight",
    },
    {
      kanji: "傾",
      meaning: "lean",
    },
    {
      kanji: "何",
      meaning: "what",
    },
    {
      kanji: "荷",
      meaning: "baggage",
    },
    {
      kanji: "俊",
      meaning: "sagacious",
    },
    {
      kanji: "傍",
      meaning: "bystander",
    },
    {
      kanji: "俺",
      meaning: "myself",
    },
    {
      kanji: "久",
      meaning: "long time",
    },
    {
      kanji: "畝",
      meaning: "furrow",
    },
    {
      kanji: "囚",
      meaning: "captured",
    },
    {
      kanji: "内",
      meaning: "inside",
    },
    {
      kanji: "丙",
      meaning: "third class",
    },
    {
      kanji: "柄",
      meaning: "design",
    },
    {
      kanji: "肉",
      meaning: "meat",
    },
    {
      kanji: "腐",
      meaning: "rot",
    },
    {
      kanji: "座",
      meaning: "sit",
    },
    {
      kanji: "挫",
      meaning: "sprain",
    },
    {
      kanji: "卒",
      meaning: "graduate",
    },
    {
      kanji: "傘",
      meaning: "umbrella",
    },
    {
      kanji: "匁",
      meaning: "monme",
    },
    {
      kanji: "以",
      meaning: "by means of",
    },
    {
      kanji: "似",
      meaning: "similar",
    },
    {
      kanji: "併",
      meaning: "join",
    },
    {
      kanji: "瓦",
      meaning: "tile",
    },
    {
      kanji: "瓶",
      meaning: "flower pot",
    },
    {
      kanji: "宮",
      meaning: "Shinto shrine",
    },
    {
      kanji: "営",
      meaning: "occupation",
    },
    {
      kanji: "善",
      meaning: "virtuous",
    },
    {
      kanji: "膳",
      meaning: "dining tray",
    },
    {
      kanji: "年",
      meaning: "year",
    },
    {
      kanji: "夜",
      meaning: "night",
    },
    {
      kanji: "液",
      meaning: "fluid",
    },
    {
      kanji: "塚",
      meaning: "hillock",
    },
    {
      kanji: "幣",
      meaning: "cash",
    },
    {
      kanji: "蔽",
      meaning: "cover over",
    },
    {
      kanji: "弊",
      meaning: "abuse",
    },
    {
      kanji: "喚",
      meaning: "yell",
    },
    {
      kanji: "換",
      meaning: "interchange",
    },
    {
      kanji: "融",
      meaning: "dissolve",
    },
    {
      kanji: "施",
      meaning: "alms",
    },
    {
      kanji: "旋",
      meaning: "rotation",
    },
    {
      kanji: "遊",
      meaning: "play",
    },
    {
      kanji: "旅",
      meaning: "trip",
    },
    {
      kanji: "勿",
      meaning: "not",
    },
    {
      kanji: "物",
      meaning: "thing",
    },
    {
      kanji: "易",
      meaning: "easy",
    },
    {
      kanji: "賜",
      meaning: "grant",
    },
    {
      kanji: "尿",
      meaning: "urine",
    },
    {
      kanji: "尼",
      meaning: "nun",
    },
    {
      kanji: "尻",
      meaning: "buttocks",
    },
    {
      kanji: "泥",
      meaning: "mud",
    },
    {
      kanji: "塀",
      meaning: "fence",
    },
    {
      kanji: "履",
      meaning: "footgear",
    },
    {
      kanji: "屋",
      meaning: "roof",
    },
    {
      kanji: "握",
      meaning: "grip",
    },
    {
      kanji: "屈",
      meaning: "yield",
    },
    {
      kanji: "掘",
      meaning: "dig",
    },
    {
      kanji: "堀",
      meaning: "ditch",
    },
    {
      kanji: "居",
      meaning: "reside",
    },
    {
      kanji: "据",
      meaning: "set",
    },
    {
      kanji: "裾",
      meaning: "hem",
    },
    {
      kanji: "層",
      meaning: "stratum",
    },
    {
      kanji: "局",
      meaning: "bureau",
    },
    {
      kanji: "遅",
      meaning: "slow",
    },
    {
      kanji: "漏",
      meaning: "leak",
    },
    {
      kanji: "刷",
      meaning: "printing",
    },
    {
      kanji: "尺",
      meaning: "shaku",
    },
    {
      kanji: "尽",
      meaning: "exhaust",
    },
    {
      kanji: "沢",
      meaning: "swamp",
    },
    {
      kanji: "訳",
      meaning: "translate",
    },
    {
      kanji: "択",
      meaning: "choose",
    },
    {
      kanji: "昼",
      meaning: "daytime",
    },
    {
      kanji: "戸",
      meaning: "door",
    },
    {
      kanji: "肩",
      meaning: "shoulder",
    },
    {
      kanji: "房",
      meaning: "tassel",
    },
    {
      kanji: "扇",
      meaning: "fan",
    },
    {
      kanji: "炉",
      meaning: "hearth",
    },
    {
      kanji: "戻",
      meaning: "re-",
    },
    {
      kanji: "涙",
      meaning: "tears",
    },
    {
      kanji: "雇",
      meaning: "employ",
    },
    {
      kanji: "顧",
      meaning: "look back",
    },
    {
      kanji: "啓",
      meaning: "disclose",
    },
    {
      kanji: "示",
      meaning: "show",
    },
    {
      kanji: "礼",
      meaning: "salutation",
    },
    {
      kanji: "祥",
      meaning: "auspicious",
    },
    {
      kanji: "祝",
      meaning: "celebrate",
    },
    {
      kanji: "福",
      meaning: "blessing",
    },
    {
      kanji: "祉",
      meaning: "welfare",
    },
    {
      kanji: "社",
      meaning: "company",
    },
    {
      kanji: "視",
      meaning: "inspection",
    },
    {
      kanji: "奈",
      meaning: "Nara",
    },
    {
      kanji: "尉",
      meaning: "military officer",
    },
    {
      kanji: "慰",
      meaning: "consolation",
    },
    {
      kanji: "款",
      meaning: "goodwill",
    },
    {
      kanji: "禁",
      meaning: "prohibition",
    },
    {
      kanji: "襟",
      meaning: "collar",
    },
    {
      kanji: "宗",
      meaning: "religion",
    },
    {
      kanji: "崇",
      meaning: "adore",
    },
    {
      kanji: "祭",
      meaning: "ritual",
    },
    {
      kanji: "察",
      meaning: "guess",
    },
    {
      kanji: "擦",
      meaning: "grate",
    },
    {
      kanji: "由",
      meaning: "wherefore",
    },
    {
      kanji: "抽",
      meaning: "pluck",
    },
    {
      kanji: "油",
      meaning: "oil",
    },
    {
      kanji: "袖",
      meaning: "sleeve",
    },
    {
      kanji: "宙",
      meaning: "mid-air",
    },
    {
      kanji: "届",
      meaning: "deliver",
    },
    {
      kanji: "笛",
      meaning: "flute",
    },
    {
      kanji: "軸",
      meaning: "axis",
    },
    {
      kanji: "甲",
      meaning: "armor",
    },
    {
      kanji: "押",
      meaning: "push",
    },
    {
      kanji: "岬",
      meaning: "headland",
    },
    {
      kanji: "挿",
      meaning: "insert",
    },
    {
      kanji: "申",
      meaning: "speaketh",
    },
    {
      kanji: "伸",
      meaning: "expand",
    },
    {
      kanji: "神",
      meaning: "gods",
    },
    {
      kanji: "捜",
      meaning: "search",
    },
    {
      kanji: "果",
      meaning: "fruit",
    },
    {
      kanji: "菓",
      meaning: "confectionary",
    },
    {
      kanji: "課",
      meaning: "chapter",
    },
    {
      kanji: "裸",
      meaning: "naked",
    },
    {
      kanji: "斤",
      meaning: "ax",
    },
    {
      kanji: "析",
      meaning: "chop",
    },
    {
      kanji: "所",
      meaning: "place",
    },
    {
      kanji: "祈",
      meaning: "pray",
    },
    {
      kanji: "近",
      meaning: "near",
    },
    {
      kanji: "折",
      meaning: "fold",
    },
    {
      kanji: "哲",
      meaning: "philosophy",
    },
    {
      kanji: "逝",
      meaning: "departed",
    },
    {
      kanji: "誓",
      meaning: "vow",
    },
    {
      kanji: "斬",
      meaning: "chop off",
    },
    {
      kanji: "暫",
      meaning: "temporarily",
    },
    {
      kanji: "漸",
      meaning: "steadily",
    },
    {
      kanji: "断",
      meaning: "severance",
    },
    {
      kanji: "質",
      meaning: "substance",
    },
    {
      kanji: "斥",
      meaning: "reject",
    },
    {
      kanji: "訴",
      meaning: "accusation",
    },
    {
      kanji: "昨",
      meaning: "yesterday",
    },
    {
      kanji: "詐",
      meaning: "lie",
    },
    {
      kanji: "作",
      meaning: "make",
    },
    {
      kanji: "雪",
      meaning: "snow",
    },
    {
      kanji: "録",
      meaning: "record",
    },
    {
      kanji: "剥",
      meaning: "peel off",
    },
    {
      kanji: "尋",
      meaning: "inquire",
    },
    {
      kanji: "急",
      meaning: "hurry",
    },
    {
      kanji: "穏",
      meaning: "calm",
    },
    {
      kanji: "侵",
      meaning: "encroach",
    },
    {
      kanji: "浸",
      meaning: "immersed",
    },
    {
      kanji: "寝",
      meaning: "lie down",
    },
    {
      kanji: "婦",
      meaning: "lady",
    },
    {
      kanji: "掃",
      meaning: "sweep",
    },
    {
      kanji: "当",
      meaning: "hit",
    },
    {
      kanji: "彙",
      meaning: "glossary",
    },
    {
      kanji: "争",
      meaning: "contend",
    },
    {
      kanji: "浄",
      meaning: "clean",
    },
    {
      kanji: "事",
      meaning: "matter",
    },
    {
      kanji: "唐",
      meaning: "T'ang",
    },
    {
      kanji: "糖",
      meaning: "sugar",
    },
    {
      kanji: "康",
      meaning: "sane",
    },
    {
      kanji: "逮",
      meaning: "apprehend",
    },
    {
      kanji: "伊",
      meaning: "Italy",
    },
    {
      kanji: "君",
      meaning: "old boy",
    },
    {
      kanji: "群",
      meaning: "flock",
    },
    {
      kanji: "耐",
      meaning: "-proof",
    },
    {
      kanji: "需",
      meaning: "demand",
    },
    {
      kanji: "儒",
      meaning: "Confucian",
    },
    {
      kanji: "端",
      meaning: "edge",
    },
    {
      kanji: "両",
      meaning: "both",
    },
    {
      kanji: "満",
      meaning: "full",
    },
    {
      kanji: "画",
      meaning: "brush-stroke",
    },
    {
      kanji: "歯",
      meaning: "tooth",
    },
    {
      kanji: "曲",
      meaning: "bend",
    },
    {
      kanji: "曹",
      meaning: "cadet",
    },
    {
      kanji: "遭",
      meaning: "encounter",
    },
    {
      kanji: "漕",
      meaning: "rowing",
    },
    {
      kanji: "槽",
      meaning: "vat",
    },
    {
      kanji: "斗",
      meaning: "Big Dipper",
    },
    {
      kanji: "料",
      meaning: "fee",
    },
    {
      kanji: "科",
      meaning: "department",
    },
    {
      kanji: "図",
      meaning: "map",
    },
    {
      kanji: "用",
      meaning: "utilize",
    },
    {
      kanji: "庸",
      meaning: "comfortable",
    },
    {
      kanji: "備",
      meaning: "equip",
    },
    {
      kanji: "昔",
      meaning: "once upon a time",
    },
    {
      kanji: "錯",
      meaning: "confused",
    },
    {
      kanji: "借",
      meaning: "borrow",
    },
    {
      kanji: "惜",
      meaning: "pity",
    },
    {
      kanji: "措",
      meaning: "set aside",
    },
    {
      kanji: "散",
      meaning: "scatter",
    },
    {
      kanji: "廿",
      meaning: "twenty",
    },
    {
      kanji: "庶",
      meaning: "commoner",
    },
    {
      kanji: "遮",
      meaning: "intercept",
    },
    {
      kanji: "席",
      meaning: "seat",
    },
    {
      kanji: "度",
      meaning: "degrees",
    },
    {
      kanji: "渡",
      meaning: "transit",
    },
    {
      kanji: "奔",
      meaning: "bustle",
    },
    {
      kanji: "噴",
      meaning: "erupt",
    },
    {
      kanji: "墳",
      meaning: "tomb",
    },
    {
      kanji: "憤",
      meaning: "aroused",
    },
    {
      kanji: "焼",
      meaning: "bake",
    },
    {
      kanji: "暁",
      meaning: "daybreak",
    },
    {
      kanji: "半",
      meaning: "half",
    },
    {
      kanji: "伴",
      meaning: "consort",
    },
    {
      kanji: "畔",
      meaning: "paddy ridge",
    },
    {
      kanji: "判",
      meaning: "judgment",
    },
    {
      kanji: "拳",
      meaning: "fist",
    },
    {
      kanji: "券",
      meaning: "ticket",
    },
    {
      kanji: "巻",
      meaning: "scroll",
    },
    {
      kanji: "圏",
      meaning: "sphere",
    },
    {
      kanji: "勝",
      meaning: "victory",
    },
    {
      kanji: "藤",
      meaning: "wisteria",
    },
    {
      kanji: "謄",
      meaning: "facsimilie",
    },
    {
      kanji: "片",
      meaning: "one-sided",
    },
    {
      kanji: "版",
      meaning: "printing block",
    },
    {
      kanji: "之",
      meaning: "of",
    },
    {
      kanji: "乏",
      meaning: "destitution",
    },
    {
      kanji: "芝",
      meaning: "turf",
    },
    {
      kanji: "不",
      meaning: "negative",
    },
    {
      kanji: "否",
      meaning: "negate",
    },
    {
      kanji: "杯",
      meaning: "cupfuls",
    },
    {
      kanji: "矢",
      meaning: "dart",
    },
    {
      kanji: "矯",
      meaning: "rectify",
    },
    {
      kanji: "族",
      meaning: "tribe",
    },
    {
      kanji: "知",
      meaning: "know",
    },
    {
      kanji: "智",
      meaning: "wisdom",
    },
    {
      kanji: "挨",
      meaning: "shove",
    },
    {
      kanji: "矛",
      meaning: "halberd",
    },
    {
      kanji: "柔",
      meaning: "tender",
    },
    {
      kanji: "務",
      meaning: "task",
    },
    {
      kanji: "霧",
      meaning: "fog",
    },
    {
      kanji: "班",
      meaning: "squad",
    },
    {
      kanji: "帰",
      meaning: "homecoming",
    },
    {
      kanji: "弓",
      meaning: "bow",
    },
    {
      kanji: "引",
      meaning: "pull",
    },
    {
      kanji: "弔",
      meaning: "condolences",
    },
    {
      kanji: "弘",
      meaning: "vast",
    },
    {
      kanji: "強",
      meaning: "strong",
    },
    {
      kanji: "弥",
      meaning: "more and more",
    },
    {
      kanji: "弱",
      meaning: "weak",
    },
    {
      kanji: "溺",
      meaning: "drowning",
    },
    {
      kanji: "沸",
      meaning: "seethe",
    },
    {
      kanji: "費",
      meaning: "expense",
    },
    {
      kanji: "第",
      meaning: "No.",
    },
    {
      kanji: "弟",
      meaning: "younger brother",
    },
    {
      kanji: "巧",
      meaning: "adroit",
    },
    {
      kanji: "号",
      meaning: "nickname",
    },
    {
      kanji: "朽",
      meaning: "decay",
    },
    {
      kanji: "誇",
      meaning: "boast",
    },
    {
      kanji: "顎",
      meaning: "chin",
    },
    {
      kanji: "汚",
      meaning: "dirty",
    },
    {
      kanji: "与",
      meaning: "bestow",
    },
    {
      kanji: "写",
      meaning: "copy",
    },
    {
      kanji: "身",
      meaning: "somebody",
    },
    {
      kanji: "射",
      meaning: "shoot",
    },
    {
      kanji: "謝",
      meaning: "apologize",
    },
    {
      kanji: "老",
      meaning: "old man",
    },
    {
      kanji: "考",
      meaning: "consider",
    },
    {
      kanji: "孝",
      meaning: "filial piety",
    },
    {
      kanji: "教",
      meaning: "teach",
    },
    {
      kanji: "拷",
      meaning: "torture",
    },
    {
      kanji: "者",
      meaning: "someone",
    },
    {
      kanji: "煮",
      meaning: "boil",
    },
    {
      kanji: "著",
      meaning: "renowned",
    },
    {
      kanji: "箸",
      meaning: "chopsticks",
    },
    {
      kanji: "署",
      meaning: "signature",
    },
    {
      kanji: "暑",
      meaning: "sultry",
    },
    {
      kanji: "諸",
      meaning: "various",
    },
    {
      kanji: "猪",
      meaning: "boar",
    },
    {
      kanji: "渚",
      meaning: "strand",
    },
    {
      kanji: "賭",
      meaning: "gamble",
    },
    {
      kanji: "峡",
      meaning: "gorge",
    },
    {
      kanji: "狭",
      meaning: "cramped",
    },
    {
      kanji: "挟",
      meaning: "sandwiched",
    },
    {
      kanji: "頬",
      meaning: "cheek",
    },
    {
      kanji: "追",
      meaning: "chase",
    },
    {
      kanji: "阜",
      meaning: "large hill",
    },
    {
      kanji: "師",
      meaning: "expert",
    },
    {
      kanji: "帥",
      meaning: "commander",
    },
    {
      kanji: "官",
      meaning: "bureaucrat",
    },
    {
      kanji: "棺",
      meaning: "coffin",
    },
    {
      kanji: "管",
      meaning: "pipe",
    },
    {
      kanji: "父",
      meaning: "father",
    },
    {
      kanji: "釜",
      meaning: "cauldron",
    },
    {
      kanji: "交",
      meaning: "mingle",
    },
    {
      kanji: "効",
      meaning: "merit",
    },
    {
      kanji: "較",
      meaning: "contrast",
    },
    {
      kanji: "校",
      meaning: "exam",
    },
    {
      kanji: "足",
      meaning: "leg",
    },
    {
      kanji: "促",
      meaning: "stimulate",
    },
    {
      kanji: "捉",
      meaning: "nab",
    },
    {
      kanji: "距",
      meaning: "long-distance",
    },
    {
      kanji: "路",
      meaning: "path",
    },
    {
      kanji: "露",
      meaning: "dew",
    },
    {
      kanji: "跳",
      meaning: "hop",
    },
    {
      kanji: "躍",
      meaning: "leap",
    },
    {
      kanji: "践",
      meaning: "tread",
    },
    {
      kanji: "踏",
      meaning: "step",
    },
    {
      kanji: "踪",
      meaning: "trail",
    },
    {
      kanji: "骨",
      meaning: "skeleton",
    },
    {
      kanji: "滑",
      meaning: "slippery",
    },
    {
      kanji: "髄",
      meaning: "marrow",
    },
    {
      kanji: "禍",
      meaning: "calamity",
    },
    {
      kanji: "渦",
      meaning: "whirlpool",
    },
    {
      kanji: "鍋",
      meaning: "pot",
    },
    {
      kanji: "過",
      meaning: "overdo",
    },
    {
      kanji: "阪",
      meaning: "Heights",
    },
    {
      kanji: "阿",
      meaning: "Africa",
    },
    {
      kanji: "際",
      meaning: "occasion",
    },
    {
      kanji: "障",
      meaning: "hinder",
    },
    {
      kanji: "隙",
      meaning: "chink",
    },
    {
      kanji: "随",
      meaning: "follow",
    },
    {
      kanji: "陪",
      meaning: "auxiliary",
    },
    {
      kanji: "陽",
      meaning: "sunshine",
    },
    {
      kanji: "陳",
      meaning: "line up",
    },
    {
      kanji: "防",
      meaning: "ward off",
    },
    {
      kanji: "附",
      meaning: "affixed",
    },
    {
      kanji: "院",
      meaning: "Inst.",
    },
    {
      kanji: "陣",
      meaning: "camp",
    },
    {
      kanji: "隊",
      meaning: "regiment",
    },
    {
      kanji: "墜",
      meaning: "crash",
    },
    {
      kanji: "降",
      meaning: "descend",
    },
    {
      kanji: "階",
      meaning: "story",
    },
    {
      kanji: "陛",
      meaning: "highness",
    },
    {
      kanji: "隣",
      meaning: "neighboring",
    },
    {
      kanji: "隔",
      meaning: "isolate",
    },
    {
      kanji: "隠",
      meaning: "conceal",
    },
    {
      kanji: "堕",
      meaning: "degenerate",
    },
    {
      kanji: "陥",
      meaning: "collapse",
    },
    {
      kanji: "穴",
      meaning: "hole",
    },
    {
      kanji: "空",
      meaning: "empty",
    },
    {
      kanji: "控",
      meaning: "withdraw",
    },
    {
      kanji: "突",
      meaning: "stab",
    },
    {
      kanji: "究",
      meaning: "research",
    },
    {
      kanji: "窒",
      meaning: "plug up",
    },
    {
      kanji: "窃",
      meaning: "stealth",
    },
    {
      kanji: "窟",
      meaning: "cavern",
    },
    {
      kanji: "窪",
      meaning: "depression",
    },
    {
      kanji: "搾",
      meaning: "squeeze",
    },
    {
      kanji: "窯",
      meaning: "kiln",
    },
    {
      kanji: "窮",
      meaning: "hard up",
    },
    {
      kanji: "探",
      meaning: "grope",
    },
    {
      kanji: "深",
      meaning: "deep",
    },
    {
      kanji: "丘",
      meaning: "hill",
    },
    {
      kanji: "岳",
      meaning: "Point",
    },
    {
      kanji: "兵",
      meaning: "soldier",
    },
    {
      kanji: "浜",
      meaning: "seacoast",
    },
    {
      kanji: "糸",
      meaning: "thread",
    },
    {
      kanji: "織",
      meaning: "weave",
    },
    {
      kanji: "繕",
      meaning: "darning",
    },
    {
      kanji: "縮",
      meaning: "shrink",
    },
    {
      kanji: "繁",
      meaning: "luxuriant",
    },
    {
      kanji: "縦",
      meaning: "vertical",
    },
    {
      kanji: "緻",
      meaning: "fine",
    },
    {
      kanji: "線",
      meaning: "line",
    },
    {
      kanji: "綻",
      meaning: "come apart at the seams",
    },
    {
      kanji: "締",
      meaning: "tighten",
    },
    {
      kanji: "維",
      meaning: "fiber",
    },
    {
      kanji: "羅",
      meaning: "gauze",
    },
    {
      kanji: "練",
      meaning: "practice",
    },
    {
      kanji: "緒",
      meaning: "thong",
    },
    {
      kanji: "続",
      meaning: "continue",
    },
    {
      kanji: "絵",
      meaning: "picture",
    },
    {
      kanji: "統",
      meaning: "overall",
    },
    {
      kanji: "絞",
      meaning: "strangle",
    },
    {
      kanji: "給",
      meaning: "salary",
    },
    {
      kanji: "絡",
      meaning: "entwine",
    },
    {
      kanji: "結",
      meaning: "tie",
    },
    {
      kanji: "終",
      meaning: "end",
    },
    {
      kanji: "級",
      meaning: "class",
    },
    {
      kanji: "紀",
      meaning: "chronicle",
    },
    {
      kanji: "紅",
      meaning: "crimson",
    },
    {
      kanji: "納",
      meaning: "settlement",
    },
    {
      kanji: "紡",
      meaning: "spinning",
    },
    {
      kanji: "紛",
      meaning: "distract",
    },
    {
      kanji: "紹",
      meaning: "introduce",
    },
    {
      kanji: "経",
      meaning: "sutra",
    },
    {
      kanji: "紳",
      meaning: "sire",
    },
    {
      kanji: "約",
      meaning: "promise",
    },
    {
      kanji: "細",
      meaning: "dainty",
    },
    {
      kanji: "累",
      meaning: "accumulate",
    },
    {
      kanji: "索",
      meaning: "cord",
    },
    {
      kanji: "総",
      meaning: "general",
    },
    {
      kanji: "綿",
      meaning: "cotton",
    },
    {
      kanji: "絹",
      meaning: "silk",
    },
    {
      kanji: "繰",
      meaning: "winding",
    },
    {
      kanji: "継",
      meaning: "inherit",
    },
    {
      kanji: "緑",
      meaning: "green",
    },
    {
      kanji: "縁",
      meaning: "affinity",
    },
    {
      kanji: "網",
      meaning: "netting",
    },
    {
      kanji: "緊",
      meaning: "tense",
    },
    {
      kanji: "紫",
      meaning: "purple",
    },
    {
      kanji: "縛",
      meaning: "truss",
    },
    {
      kanji: "縄",
      meaning: "straw rope",
    },
    {
      kanji: "幼",
      meaning: "infancy",
    },
    {
      kanji: "後",
      meaning: "behind",
    },
    {
      kanji: "幽",
      meaning: "faint",
    },
    {
      kanji: "幾",
      meaning: "how many",
    },
    {
      kanji: "機",
      meaning: "mechanism",
    },
    {
      kanji: "畿",
      meaning: "capital suburbs",
    },
    {
      kanji: "玄",
      meaning: "mysterious",
    },
    {
      kanji: "畜",
      meaning: "livestock",
    },
    {
      kanji: "蓄",
      meaning: "amass",
    },
    {
      kanji: "弦",
      meaning: "bowstring",
    },
    {
      kanji: "擁",
      meaning: "hug",
    },
    {
      kanji: "滋",
      meaning: "nourishing",
    },
    {
      kanji: "慈",
      meaning: "mercy",
    },
    {
      kanji: "磁",
      meaning: "magnet",
    },
    {
      kanji: "系",
      meaning: "lineage",
    },
    {
      kanji: "係",
      meaning: "person in charge",
    },
    {
      kanji: "孫",
      meaning: "grandchild",
    },
    {
      kanji: "懸",
      meaning: "suspend",
    },
    {
      kanji: "遜",
      meaning: "modest",
    },
    {
      kanji: "却",
      meaning: "instead",
    },
    {
      kanji: "脚",
      meaning: "shins",
    },
    {
      kanji: "卸",
      meaning: "wholesale",
    },
    {
      kanji: "御",
      meaning: "honorable",
    },
    {
      kanji: "服",
      meaning: "clothing",
    },
    {
      kanji: "命",
      meaning: "fate",
    },
    {
      kanji: "令",
      meaning: "orders",
    },
    {
      kanji: "零",
      meaning: "zero",
    },
    {
      kanji: "齢",
      meaning: "age",
    },
    {
      kanji: "冷",
      meaning: "cool",
    },
    {
      kanji: "領",
      meaning: "jurisdiction",
    },
    {
      kanji: "鈴",
      meaning: "small bell",
    },
    {
      kanji: "勇",
      meaning: "courage",
    },
    {
      kanji: "湧",
      meaning: "bubble up",
    },
    {
      kanji: "通",
      meaning: "traffic",
    },
    {
      kanji: "踊",
      meaning: "jump",
    },
    {
      kanji: "疑",
      meaning: "doubt",
    },
    {
      kanji: "擬",
      meaning: "mimic",
    },
    {
      kanji: "凝",
      meaning: "congeal",
    },
    {
      kanji: "範",
      meaning: "pattern",
    },
    {
      kanji: "犯",
      meaning: "crime",
    },
    {
      kanji: "氾",
      meaning: "widespread",
    },
    {
      kanji: "厄",
      meaning: "unlucky",
    },
    {
      kanji: "危",
      meaning: "dangerous",
    },
    {
      kanji: "宛",
      meaning: "address",
    },
    {
      kanji: "腕",
      meaning: "arm",
    },
    {
      kanji: "苑",
      meaning: "garden",
    },
    {
      kanji: "怨",
      meaning: "grudge",
    },
    {
      kanji: "柳",
      meaning: "willow",
    },
    {
      kanji: "卵",
      meaning: "egg",
    },
    {
      kanji: "留",
      meaning: "detain",
    },
    {
      kanji: "瑠",
      meaning: "marine blue",
    },
    {
      kanji: "貿",
      meaning: "trade",
    },
    {
      kanji: "印",
      meaning: "stamp",
    },
    {
      kanji: "臼",
      meaning: "mortar",
    },
    {
      kanji: "毀",
      meaning: "break",
    },
    {
      kanji: "興",
      meaning: "entertain",
    },
    {
      kanji: "酉",
      meaning: "sign of the bird",
    },
    {
      kanji: "酒",
      meaning: "sake",
    },
    {
      kanji: "酌",
      meaning: "bartending",
    },
    {
      kanji: "酎",
      meaning: "hooch",
    },
    {
      kanji: "酵",
      meaning: "fermentation",
    },
    {
      kanji: "酷",
      meaning: "cruel",
    },
    {
      kanji: "酬",
      meaning: "repay",
    },
    {
      kanji: "酪",
      meaning: "dairy products",
    },
    {
      kanji: "酢",
      meaning: "vinegar",
    },
    {
      kanji: "酔",
      meaning: "drunk",
    },
    {
      kanji: "配",
      meaning: "distribute",
    },
    {
      kanji: "酸",
      meaning: "acid",
    },
    {
      kanji: "猶",
      meaning: "waver",
    },
    {
      kanji: "尊",
      meaning: "revered",
    },
    {
      kanji: "豆",
      meaning: "beans",
    },
    {
      kanji: "頭",
      meaning: "head",
    },
    {
      kanji: "短",
      meaning: "short",
    },
    {
      kanji: "豊",
      meaning: "bountiful",
    },
    {
      kanji: "鼓",
      meaning: "drum",
    },
    {
      kanji: "喜",
      meaning: "rejoice",
    },
    {
      kanji: "樹",
      meaning: "timber-trees",
    },
    {
      kanji: "皿",
      meaning: "dish",
    },
    {
      kanji: "血",
      meaning: "blood",
    },
    {
      kanji: "盆",
      meaning: "basin",
    },
    {
      kanji: "盟",
      meaning: "alliance",
    },
    {
      kanji: "盗",
      meaning: "steal",
    },
    {
      kanji: "温",
      meaning: "warm",
    },
    {
      kanji: "蓋",
      meaning: "lid",
    },
    {
      kanji: "監",
      meaning: "oversee",
    },
    {
      kanji: "濫",
      meaning: "overflow",
    },
    {
      kanji: "鑑",
      meaning: "specimen",
    },
    {
      kanji: "藍",
      meaning: "indigo",
    },
    {
      kanji: "猛",
      meaning: "fierce",
    },
    {
      kanji: "盛",
      meaning: "boom",
    },
    {
      kanji: "塩",
      meaning: "salt",
    },
    {
      kanji: "銀",
      meaning: "silver",
    },
    {
      kanji: "恨",
      meaning: "resentment",
    },
    {
      kanji: "根",
      meaning: "root",
    },
    {
      kanji: "即",
      meaning: "instant",
    },
    {
      kanji: "爵",
      meaning: "baron",
    },
    {
      kanji: "節",
      meaning: "node",
    },
    {
      kanji: "退",
      meaning: "retreat",
    },
    {
      kanji: "限",
      meaning: "limit",
    },
    {
      kanji: "眼",
      meaning: "eyeball",
    },
    {
      kanji: "良",
      meaning: "good",
    },
    {
      kanji: "朗",
      meaning: "melodious",
    },
    {
      kanji: "浪",
      meaning: "wandering",
    },
    {
      kanji: "娘",
      meaning: "daughter",
    },
    {
      kanji: "食",
      meaning: "eat",
    },
    {
      kanji: "飯",
      meaning: "meal",
    },
    {
      kanji: "飲",
      meaning: "drink",
    },
    {
      kanji: "飢",
      meaning: "hungry",
    },
    {
      kanji: "餓",
      meaning: "starve",
    },
    {
      kanji: "飾",
      meaning: "decorate",
    },
    {
      kanji: "餌",
      meaning: "feed",
    },
    {
      kanji: "館",
      meaning: "Bldg.",
    },
    {
      kanji: "餅",
      meaning: "mochi",
    },
    {
      kanji: "養",
      meaning: "foster",
    },
    {
      kanji: "飽",
      meaning: "sated",
    },
    {
      kanji: "既",
      meaning: "previously",
    },
    {
      kanji: "概",
      meaning: "outline",
    },
    {
      kanji: "慨",
      meaning: "rue",
    },
    {
      kanji: "平",
      meaning: "even",
    },
    {
      kanji: "呼",
      meaning: "call",
    },
    {
      kanji: "坪",
      meaning: "two-mat area",
    },
    {
      kanji: "評",
      meaning: "evaluate",
    },
    {
      kanji: "刈",
      meaning: "reap",
    },
    {
      kanji: "刹",
      meaning: "moment",
    },
    {
      kanji: "希",
      meaning: "hope",
    },
    {
      kanji: "凶",
      meaning: "villain",
    },
    {
      kanji: "胸",
      meaning: "bosom",
    },
    {
      kanji: "離",
      meaning: "detach",
    },
    {
      kanji: "璃",
      meaning: "crystal",
    },
    {
      kanji: "殺",
      meaning: "kill",
    },
    {
      kanji: "爽",
      meaning: "bracing",
    },
    {
      kanji: "純",
      meaning: "genuine",
    },
    {
      kanji: "頓",
      meaning: "immediate",
    },
    {
      kanji: "鈍",
      meaning: "dull",
    },
    {
      kanji: "辛",
      meaning: "spicy",
    },
    {
      kanji: "辞",
      meaning: "resign",
    },
    {
      kanji: "梓",
      meaning: "catalpa",
    },
    {
      kanji: "宰",
      meaning: "superintend",
    },
    {
      kanji: "壁",
      meaning: "wall",
    },
    {
      kanji: "璧",
      meaning: "holed gem",
    },
    {
      kanji: "避",
      meaning: "evade",
    },
    {
      kanji: "新",
      meaning: "new",
    },
    {
      kanji: "薪",
      meaning: "firewood",
    },
    {
      kanji: "親",
      meaning: "parent",
    },
    {
      kanji: "幸",
      meaning: "happiness",
    },
    {
      kanji: "執",
      meaning: "tenacious",
    },
    {
      kanji: "摯",
      meaning: "clasp",
    },
    {
      kanji: "報",
      meaning: "report",
    },
    {
      kanji: "叫",
      meaning: "shout",
    },
    {
      kanji: "糾",
      meaning: "twist",
    },
    {
      kanji: "収",
      meaning: "income",
    },
    {
      kanji: "卑",
      meaning: "lowly",
    },
    {
      kanji: "碑",
      meaning: "tombstone",
    },
    {
      kanji: "陸",
      meaning: "land",
    },
    {
      kanji: "睦",
      meaning: "intimate",
    },
    {
      kanji: "勢",
      meaning: "forces",
    },
    {
      kanji: "熱",
      meaning: "heat",
    },
    {
      kanji: "菱",
      meaning: "diamond",
    },
    {
      kanji: "陵",
      meaning: "mausoleum",
    },
    {
      kanji: "亥",
      meaning: "sign of the hog",
    },
    {
      kanji: "核",
      meaning: "nucleus",
    },
    {
      kanji: "刻",
      meaning: "engrave",
    },
    {
      kanji: "該",
      meaning: "above-stated",
    },
    {
      kanji: "骸",
      meaning: "remains",
    },
    {
      kanji: "劾",
      meaning: "censure",
    },
    {
      kanji: "述",
      meaning: "mention",
    },
    {
      kanji: "術",
      meaning: "art",
    },
    {
      kanji: "寒",
      meaning: "cold",
    },
    {
      kanji: "塞",
      meaning: "block up",
    },
    {
      kanji: "醸",
      meaning: "brew",
    },
    {
      kanji: "譲",
      meaning: "defer",
    },
    {
      kanji: "壌",
      meaning: "lot",
    },
    {
      kanji: "嬢",
      meaning: "lass",
    },
    {
      kanji: "毒",
      meaning: "poison",
    },
    {
      kanji: "素",
      meaning: "elementary",
    },
    {
      kanji: "麦",
      meaning: "barley",
    },
    {
      kanji: "青",
      meaning: "blue",
    },
    {
      kanji: "精",
      meaning: "refined",
    },
    {
      kanji: "請",
      meaning: "solicit",
    },
    {
      kanji: "情",
      meaning: "feelings",
    },
    {
      kanji: "晴",
      meaning: "clear up",
    },
    {
      kanji: "清",
      meaning: "pure",
    },
    {
      kanji: "静",
      meaning: "quiet",
    },
    {
      kanji: "責",
      meaning: "blame",
    },
    {
      kanji: "績",
      meaning: "exploits",
    },
    {
      kanji: "積",
      meaning: "volume",
    },
    {
      kanji: "債",
      meaning: "bond",
    },
    {
      kanji: "漬",
      meaning: "pickling",
    },
    {
      kanji: "表",
      meaning: "surface",
    },
    {
      kanji: "俵",
      meaning: "bag",
    },
    {
      kanji: "潔",
      meaning: "undefiled",
    },
    {
      kanji: "契",
      meaning: "pledge",
    },
    {
      kanji: "喫",
      meaning: "consume",
    },
    {
      kanji: "害",
      meaning: "harm",
    },
    {
      kanji: "轄",
      meaning: "control",
    },
    {
      kanji: "割",
      meaning: "proportion",
    },
    {
      kanji: "憲",
      meaning: "constitution",
    },
    {
      kanji: "生",
      meaning: "life",
    },
    {
      kanji: "星",
      meaning: "star",
    },
    {
      kanji: "醒",
      meaning: "awakening",
    },
    {
      kanji: "姓",
      meaning: "surname",
    },
    {
      kanji: "性",
      meaning: "sex",
    },
    {
      kanji: "牲",
      meaning: "animal sacrifice",
    },
    {
      kanji: "産",
      meaning: "products",
    },
    {
      kanji: "隆",
      meaning: "hump",
    },
    {
      kanji: "峰",
      meaning: "summit",
    },
    {
      kanji: "蜂",
      meaning: "bee",
    },
    {
      kanji: "縫",
      meaning: "sew",
    },
    {
      kanji: "拝",
      meaning: "worship",
    },
    {
      kanji: "寿",
      meaning: "longevity",
    },
    {
      kanji: "鋳",
      meaning: "casting",
    },
    {
      kanji: "籍",
      meaning: "enroll",
    },
    {
      kanji: "春",
      meaning: "springtime",
    },
    {
      kanji: "椿",
      meaning: "camellia",
    },
    {
      kanji: "泰",
      meaning: "peaceful",
    },
    {
      kanji: "奏",
      meaning: "play music",
    },
    {
      kanji: "実",
      meaning: "reality",
    },
    {
      kanji: "奉",
      meaning: "dedicate",
    },
    {
      kanji: "俸",
      meaning: "stipend",
    },
    {
      kanji: "棒",
      meaning: "rod",
    },
    {
      kanji: "謹",
      meaning: "discreet",
    },
    {
      kanji: "僅",
      meaning: "trifle",
    },
    {
      kanji: "勤",
      meaning: "diligence",
    },
    {
      kanji: "漢",
      meaning: "Sino-",
    },
    {
      kanji: "嘆",
      meaning: "sigh",
    },
    {
      kanji: "難",
      meaning: "difficult",
    },
    {
      kanji: "華",
      meaning: "splendor",
    },
    {
      kanji: "垂",
      meaning: "droop",
    },
    {
      kanji: "唾",
      meaning: "saliva",
    },
    {
      kanji: "睡",
      meaning: "drowsy",
    },
    {
      kanji: "錘",
      meaning: "spindle",
    },
    {
      kanji: "乗",
      meaning: "ride",
    },
    {
      kanji: "剰",
      meaning: "surplus",
    },
    {
      kanji: "今",
      meaning: "now",
    },
    {
      kanji: "含",
      meaning: "include",
    },
    {
      kanji: "貪",
      meaning: "covet",
    },
    {
      kanji: "吟",
      meaning: "versify",
    },
    {
      kanji: "念",
      meaning: "wish",
    },
    {
      kanji: "捻",
      meaning: "wrench",
    },
    {
      kanji: "琴",
      meaning: "harp",
    },
    {
      kanji: "陰",
      meaning: "shade",
    },
    {
      kanji: "予",
      meaning: "beforehand",
    },
    {
      kanji: "序",
      meaning: "preface",
    },
    {
      kanji: "預",
      meaning: "deposit",
    },
    {
      kanji: "野",
      meaning: "plains",
    },
    {
      kanji: "兼",
      meaning: "concurrently",
    },
    {
      kanji: "嫌",
      meaning: "dislike",
    },
    {
      kanji: "鎌",
      meaning: "sickle",
    },
    {
      kanji: "謙",
      meaning: "self-effacing",
    },
    {
      kanji: "廉",
      meaning: "bargain",
    },
    {
      kanji: "西",
      meaning: "west",
    },
    {
      kanji: "価",
      meaning: "value",
    },
    {
      kanji: "要",
      meaning: "need",
    },
    {
      kanji: "腰",
      meaning: "loins",
    },
    {
      kanji: "票",
      meaning: "ballot",
    },
    {
      kanji: "漂",
      meaning: "drift",
    },
    {
      kanji: "標",
      meaning: "signpost",
    },
    {
      kanji: "栗",
      meaning: "chestnut",
    },
    {
      kanji: "慄",
      meaning: "shudder",
    },
    {
      kanji: "遷",
      meaning: "transition",
    },
    {
      kanji: "覆",
      meaning: "capsize",
    },
    {
      kanji: "煙",
      meaning: "smoke",
    },
    {
      kanji: "南",
      meaning: "south",
    },
    {
      kanji: "楠",
      meaning: "camphor tree",
    },
    {
      kanji: "献",
      meaning: "offering",
    },
    {
      kanji: "門",
      meaning: "gates",
    },
    {
      kanji: "問",
      meaning: "question",
    },
    {
      kanji: "閲",
      meaning: "review",
    },
    {
      kanji: "閥",
      meaning: "clique",
    },
    {
      kanji: "間",
      meaning: "interval",
    },
    {
      kanji: "闇",
      meaning: "pitch dark",
    },
    {
      kanji: "簡",
      meaning: "simplicity",
    },
    {
      kanji: "開",
      meaning: "open",
    },
    {
      kanji: "閉",
      meaning: "closed",
    },
    {
      kanji: "閣",
      meaning: "tower",
    },
    {
      kanji: "閑",
      meaning: "leisure",
    },
    {
      kanji: "聞",
      meaning: "hear",
    },
    {
      kanji: "潤",
      meaning: "wet",
    },
    {
      kanji: "欄",
      meaning: "column",
    },
    {
      kanji: "闘",
      meaning: "fight",
    },
    {
      kanji: "倉",
      meaning: "godown",
    },
    {
      kanji: "創",
      meaning: "genesis",
    },
    {
      kanji: "非",
      meaning: "un-",
    },
    {
      kanji: "俳",
      meaning: "haiku",
    },
    {
      kanji: "排",
      meaning: "repudiate",
    },
    {
      kanji: "悲",
      meaning: "sad",
    },
    {
      kanji: "罪",
      meaning: "guilt",
    },
    {
      kanji: "輩",
      meaning: "comrade",
    },
    {
      kanji: "扉",
      meaning: "front door",
    },
    {
      kanji: "侯",
      meaning: "marquis",
    },
    {
      kanji: "喉",
      meaning: "throat",
    },
    {
      kanji: "候",
      meaning: "climate",
    },
    {
      kanji: "決",
      meaning: "decide",
    },
    {
      kanji: "快",
      meaning: "cheerful",
    },
    {
      kanji: "偉",
      meaning: "admirable",
    },
    {
      kanji: "違",
      meaning: "difference",
    },
    {
      kanji: "緯",
      meaning: "horizontal",
    },
    {
      kanji: "衛",
      meaning: "defense",
    },
    {
      kanji: "韓",
      meaning: "Korea",
    },
    {
      kanji: "干",
      meaning: "dry",
    },
    {
      kanji: "肝",
      meaning: "liver",
    },
    {
      kanji: "刊",
      meaning: "publish",
    },
    {
      kanji: "汗",
      meaning: "sweat",
    },
    {
      kanji: "軒",
      meaning: "flats",
    },
    {
      kanji: "岸",
      meaning: "beach",
    },
    {
      kanji: "幹",
      meaning: "tree trunk",
    },
    {
      kanji: "芋",
      meaning: "potato",
    },
    {
      kanji: "宇",
      meaning: "eaves",
    },
    {
      kanji: "余",
      meaning: "too much",
    },
    {
      kanji: "除",
      meaning: "exclude",
    },
    {
      kanji: "徐",
      meaning: "gradually",
    },
    {
      kanji: "叙",
      meaning: "confer",
    },
    {
      kanji: "途",
      meaning: "route",
    },
    {
      kanji: "斜",
      meaning: "diagonal",
    },
    {
      kanji: "塗",
      meaning: "paint",
    },
    {
      kanji: "束",
      meaning: "bundle",
    },
    {
      kanji: "頼",
      meaning: "trust",
    },
    {
      kanji: "瀬",
      meaning: "rapids",
    },
    {
      kanji: "勅",
      meaning: "imperial order",
    },
    {
      kanji: "疎",
      meaning: "alienate",
    },
    {
      kanji: "辣",
      meaning: "bitter",
    },
    {
      kanji: "速",
      meaning: "quick",
    },
    {
      kanji: "整",
      meaning: "organize",
    },
    {
      kanji: "剣",
      meaning: "saber",
    },
    {
      kanji: "険",
      meaning: "precipitous",
    },
    {
      kanji: "検",
      meaning: "examination",
    },
    {
      kanji: "倹",
      meaning: "frugal",
    },
    {
      kanji: "重",
      meaning: "heavy",
    },
    {
      kanji: "動",
      meaning: "move",
    },
    {
      kanji: "腫",
      meaning: "tumor",
    },
    {
      kanji: "勲",
      meaning: "meritorious deed",
    },
    {
      kanji: "働",
      meaning: "work",
    },
    {
      kanji: "種",
      meaning: "species",
    },
    {
      kanji: "衝",
      meaning: "collide",
    },
    {
      kanji: "薫",
      meaning: "fragrant",
    },
    {
      kanji: "病",
      meaning: "ill",
    },
    {
      kanji: "痴",
      meaning: "stupid",
    },
    {
      kanji: "痘",
      meaning: "pox",
    },
    {
      kanji: "症",
      meaning: "symptoms",
    },
    {
      kanji: "瘍",
      meaning: "carbuncle",
    },
    {
      kanji: "痩",
      meaning: "lose weight",
    },
    {
      kanji: "疾",
      meaning: "rapidly",
    },
    {
      kanji: "嫉",
      meaning: "envy",
    },
    {
      kanji: "痢",
      meaning: "diarrhea",
    },
    {
      kanji: "痕",
      meaning: "scar",
    },
    {
      kanji: "疲",
      meaning: "tired",
    },
    {
      kanji: "疫",
      meaning: "epidemic",
    },
    {
      kanji: "痛",
      meaning: "pain",
    },
    {
      kanji: "癖",
      meaning: "mannerism",
    },
    {
      kanji: "匿",
      meaning: "hide",
    },
    {
      kanji: "匠",
      meaning: "artisan",
    },
    {
      kanji: "医",
      meaning: "doctor",
    },
    {
      kanji: "匹",
      meaning: "equal",
    },
    {
      kanji: "区",
      meaning: "ward",
    },
    {
      kanji: "枢",
      meaning: "hinge",
    },
    {
      kanji: "殴",
      meaning: "assault",
    },
    {
      kanji: "欧",
      meaning: "Europe",
    },
    {
      kanji: "抑",
      meaning: "repress",
    },
    {
      kanji: "仰",
      meaning: "faceup",
    },
    {
      kanji: "迎",
      meaning: "welcome",
    },
    {
      kanji: "登",
      meaning: "ascend",
    },
    {
      kanji: "澄",
      meaning: "lucidity",
    },
    {
      kanji: "発",
      meaning: "discharge",
    },
    {
      kanji: "廃",
      meaning: "abolish",
    },
    {
      kanji: "僚",
      meaning: "colleague",
    },
    {
      kanji: "瞭",
      meaning: "obvious",
    },
    {
      kanji: "寮",
      meaning: "dormitory",
    },
    {
      kanji: "療",
      meaning: "heal",
    },
    {
      kanji: "彫",
      meaning: "carve",
    },
    {
      kanji: "形",
      meaning: "shape",
    },
    {
      kanji: "影",
      meaning: "shadow",
    },
    {
      kanji: "杉",
      meaning: "cedar",
    },
    {
      kanji: "彩",
      meaning: "coloring",
    },
    {
      kanji: "彰",
      meaning: "patent",
    },
    {
      kanji: "彦",
      meaning: "lad",
    },
    {
      kanji: "顔",
      meaning: "face",
    },
    {
      kanji: "須",
      meaning: "ought",
    },
    {
      kanji: "膨",
      meaning: "swell",
    },
    {
      kanji: "参",
      meaning: "visit",
    },
    {
      kanji: "惨",
      meaning: "wretched",
    },
    {
      kanji: "修",
      meaning: "discipline",
    },
    {
      kanji: "珍",
      meaning: "rare",
    },
    {
      kanji: "診",
      meaning: "checkup",
    },
    {
      kanji: "文",
      meaning: "sentence",
    },
    {
      kanji: "対",
      meaning: "vis-a-vis",
    },
    {
      kanji: "紋",
      meaning: "family crest",
    },
    {
      kanji: "蚊",
      meaning: "mosquito",
    },
    {
      kanji: "斑",
      meaning: "speckled",
    },
    {
      kanji: "斉",
      meaning: "adjusted",
    },
    {
      kanji: "剤",
      meaning: "dose",
    },
    {
      kanji: "済",
      meaning: "finish",
    },
    {
      kanji: "斎",
      meaning: "purification",
    },
    {
      kanji: "粛",
      meaning: "solemn",
    },
    {
      kanji: "塁",
      meaning: "bases",
    },
    {
      kanji: "楽",
      meaning: "music",
    },
    {
      kanji: "薬",
      meaning: "medicine",
    },
    {
      kanji: "率",
      meaning: "ratio",
    },
    {
      kanji: "渋",
      meaning: "astringent",
    },
    {
      kanji: "摂",
      meaning: "vicarious",
    },
    {
      kanji: "央",
      meaning: "center",
    },
    {
      kanji: "英",
      meaning: "England",
    },
    {
      kanji: "映",
      meaning: "reflect",
    },
    {
      kanji: "赤",
      meaning: "red",
    },
    {
      kanji: "赦",
      meaning: "pardon",
    },
    {
      kanji: "変",
      meaning: "unusual",
    },
    {
      kanji: "跡",
      meaning: "tracks",
    },
    {
      kanji: "蛮",
      meaning: "barbarian",
    },
    {
      kanji: "恋",
      meaning: "romance",
    },
    {
      kanji: "湾",
      meaning: "gulf",
    },
    {
      kanji: "黄",
      meaning: "yellow",
    },
    {
      kanji: "横",
      meaning: "sideways",
    },
    {
      kanji: "把",
      meaning: "grasp",
    },
    {
      kanji: "色",
      meaning: "color",
    },
    {
      kanji: "絶",
      meaning: "discontinue",
    },
    {
      kanji: "艶",
      meaning: "glossy",
    },
    {
      kanji: "肥",
      meaning: "fertilizer",
    },
    {
      kanji: "甘",
      meaning: "sweet",
    },
    {
      kanji: "紺",
      meaning: "navy blue",
    },
    {
      kanji: "某",
      meaning: "so-and-so",
    },
    {
      kanji: "謀",
      meaning: "conspire",
    },
    {
      kanji: "媒",
      meaning: "mediator",
    },
    {
      kanji: "欺",
      meaning: "deceit",
    },
    {
      kanji: "棋",
      meaning: "chess piece",
    },
    {
      kanji: "旗",
      meaning: "national flag",
    },
    {
      kanji: "期",
      meaning: "period",
    },
    {
      kanji: "碁",
      meaning: "Go",
    },
    {
      kanji: "基",
      meaning: "fundamentals",
    },
    {
      kanji: "甚",
      meaning: "tremendously",
    },
    {
      kanji: "勘",
      meaning: "intuition",
    },
    {
      kanji: "堪",
      meaning: "withstand",
    },
    {
      kanji: "貴",
      meaning: "precious",
    },
    {
      kanji: "遺",
      meaning: "bequeath",
    },
    {
      kanji: "遣",
      meaning: "dispatch",
    },
    {
      kanji: "潰",
      meaning: "defile",
    },
    {
      kanji: "舞",
      meaning: "dance",
    },
    {
      kanji: "無",
      meaning: "nothingness",
    },
    {
      kanji: "組",
      meaning: "association",
    },
    {
      kanji: "粗",
      meaning: "coarse",
    },
    {
      kanji: "租",
      meaning: "tariff",
    },
    {
      kanji: "狙",
      meaning: "aim at",
    },
    {
      kanji: "祖",
      meaning: "ancestor",
    },
    {
      kanji: "阻",
      meaning: "thwart",
    },
    {
      kanji: "査",
      meaning: "investigate",
    },
    {
      kanji: "助",
      meaning: "help",
    },
    {
      kanji: "宜",
      meaning: "best regards",
    },
    {
      kanji: "畳",
      meaning: "tatami mat",
    },
    {
      kanji: "並",
      meaning: "row",
    },
    {
      kanji: "普",
      meaning: "universal",
    },
    {
      kanji: "譜",
      meaning: "musical score",
    },
    {
      kanji: "湿",
      meaning: "damp",
    },
    {
      kanji: "顕",
      meaning: "appear",
    },
    {
      kanji: "繊",
      meaning: "slender",
    },
    {
      kanji: "霊",
      meaning: "spirits",
    },
    {
      kanji: "業",
      meaning: "profession",
    },
    {
      kanji: "撲",
      meaning: "slap",
    },
    {
      kanji: "僕",
      meaning: "me",
    },
    {
      kanji: "共",
      meaning: "together",
    },
    {
      kanji: "供",
      meaning: "submit",
    },
    {
      kanji: "異",
      meaning: "uncommon",
    },
    {
      kanji: "翼",
      meaning: "wing",
    },
    {
      kanji: "戴",
      meaning: "accept humbly",
    },
    {
      kanji: "洪",
      meaning: "deluge",
    },
    {
      kanji: "港",
      meaning: "harbor",
    },
    {
      kanji: "暴",
      meaning: "outburst",
    },
    {
      kanji: "爆",
      meaning: "bomb",
    },
    {
      kanji: "恭",
      meaning: "respect",
    },
    {
      kanji: "選",
      meaning: "elect",
    },
    {
      kanji: "殿",
      meaning: "Mr.",
    },
    {
      kanji: "井",
      meaning: "well",
    },
    {
      kanji: "丼",
      meaning: "donburi",
    },
    {
      kanji: "囲",
      meaning: "surround",
    },
    {
      kanji: "耕",
      meaning: "till",
    },
    {
      kanji: "亜",
      meaning: "Asia",
    },
    {
      kanji: "悪",
      meaning: "bad",
    },
    {
      kanji: "円",
      meaning: "circle",
    },
    {
      kanji: "角",
      meaning: "angle",
    },
    {
      kanji: "触",
      meaning: "contact",
    },
    {
      kanji: "解",
      meaning: "unravel",
    },
    {
      kanji: "再",
      meaning: "again",
    },
    {
      kanji: "講",
      meaning: "lecture",
    },
    {
      kanji: "購",
      meaning: "subscription",
    },
    {
      kanji: "構",
      meaning: "posture",
    },
    {
      kanji: "溝",
      meaning: "gutter",
    },
    {
      kanji: "論",
      meaning: "argument",
    },
    {
      kanji: "倫",
      meaning: "ethics",
    },
    {
      kanji: "輪",
      meaning: "wheel",
    },
    {
      kanji: "偏",
      meaning: "partial",
    },
    {
      kanji: "遍",
      meaning: "everywhere",
    },
    {
      kanji: "編",
      meaning: "compilation",
    },
    {
      kanji: "冊",
      meaning: "tome",
    },
    {
      kanji: "柵",
      meaning: "palisade",
    },
    {
      kanji: "典",
      meaning: "code",
    },
    {
      kanji: "氏",
      meaning: "family name",
    },
    {
      kanji: "紙",
      meaning: "paper",
    },
    {
      kanji: "婚",
      meaning: "marriage",
    },
    {
      kanji: "低",
      meaning: "lower",
    },
    {
      kanji: "抵",
      meaning: "resist",
    },
    {
      kanji: "底",
      meaning: "bottom",
    },
    {
      kanji: "民",
      meaning: "people",
    },
    {
      kanji: "眠",
      meaning: "sleep",
    },
    {
      kanji: "捕",
      meaning: "catch",
    },
    {
      kanji: "哺",
      meaning: "suckle",
    },
    {
      kanji: "浦",
      meaning: "bay",
    },
    {
      kanji: "蒲",
      meaning: "bullrush",
    },
    {
      kanji: "舗",
      meaning: "shop",
    },
    {
      kanji: "補",
      meaning: "supplement",
    },
    {
      kanji: "邸",
      meaning: "residence",
    },
    {
      kanji: "郭",
      meaning: "enclosure",
    },
    {
      kanji: "郡",
      meaning: "county",
    },
    {
      kanji: "郊",
      meaning: "outskirts",
    },
    {
      kanji: "部",
      meaning: "section",
    },
    {
      kanji: "都",
      meaning: "metropolis",
    },
    {
      kanji: "郵",
      meaning: "mail",
    },
    {
      kanji: "邦",
      meaning: "home country",
    },
    {
      kanji: "那",
      meaning: "interrogative",
    },
    {
      kanji: "郷",
      meaning: "hometown",
    },
    {
      kanji: "響",
      meaning: "echo",
    },
    {
      kanji: "郎",
      meaning: "son",
    },
    {
      kanji: "廊",
      meaning: "corridor",
    },
    {
      kanji: "盾",
      meaning: "shield",
    },
    {
      kanji: "循",
      meaning: "sequential",
    },
    {
      kanji: "派",
      meaning: "faction",
    },
    {
      kanji: "脈",
      meaning: "vein",
    },
    {
      kanji: "衆",
      meaning: "masses",
    },
    {
      kanji: "逓",
      meaning: "parcel post",
    },
    {
      kanji: "段",
      meaning: "grade",
    },
    {
      kanji: "鍛",
      meaning: "forge",
    },
    {
      kanji: "后",
      meaning: "empress",
    },
    {
      kanji: "幻",
      meaning: "phantasm",
    },
    {
      kanji: "司",
      meaning: "director",
    },
    {
      kanji: "伺",
      meaning: "pay respects",
    },
    {
      kanji: "詞",
      meaning: "parts of speech",
    },
    {
      kanji: "飼",
      meaning: "domesticate",
    },
    {
      kanji: "嗣",
      meaning: "heir",
    },
    {
      kanji: "舟",
      meaning: "boat",
    },
    {
      kanji: "舶",
      meaning: "liner",
    },
    {
      kanji: "航",
      meaning: "navigate",
    },
    {
      kanji: "舷",
      meaning: "gunwale",
    },
    {
      kanji: "般",
      meaning: "carrier",
    },
    {
      kanji: "盤",
      meaning: "tray",
    },
    {
      kanji: "搬",
      meaning: "conveyor",
    },
    {
      kanji: "船",
      meaning: "ship",
    },
    {
      kanji: "艦",
      meaning: "warship",
    },
    {
      kanji: "艇",
      meaning: "rowboat",
    },
    {
      kanji: "瓜",
      meaning: "melon",
    },
    {
      kanji: "弧",
      meaning: "arc",
    },
    {
      kanji: "孤",
      meaning: "orphan",
    },
    {
      kanji: "繭",
      meaning: "cocoon",
    },
    {
      kanji: "益",
      meaning: "benefit",
    },
    {
      kanji: "暇",
      meaning: "spare time",
    },
    {
      kanji: "敷",
      meaning: "spread",
    },
    {
      kanji: "来",
      meaning: "come",
    },
    {
      kanji: "気",
      meaning: "spirit",
    },
    {
      kanji: "汽",
      meaning: "vapor",
    },
    {
      kanji: "飛",
      meaning: "fly",
    },
    {
      kanji: "沈",
      meaning: "sink",
    },
    {
      kanji: "枕",
      meaning: "pillow",
    },
    {
      kanji: "妻",
      meaning: "wife",
    },
    {
      kanji: "凄",
      meaning: "nifty",
    },
    {
      kanji: "衰",
      meaning: "decline",
    },
    {
      kanji: "衷",
      meaning: "inmost",
    },
    {
      kanji: "面",
      meaning: "mask",
    },
    {
      kanji: "麺",
      meaning: "noodles",
    },
    {
      kanji: "革",
      meaning: "leather",
    },
    {
      kanji: "靴",
      meaning: "shoes",
    },
    {
      kanji: "覇",
      meaning: "hegemony",
    },
    {
      kanji: "声",
      meaning: "voice",
    },
    {
      kanji: "眉",
      meaning: "eyebrow",
    },
    {
      kanji: "呉",
      meaning: "give",
    },
    {
      kanji: "娯",
      meaning: "recreation",
    },
    {
      kanji: "誤",
      meaning: "mistake",
    },
    {
      kanji: "蒸",
      meaning: "steam",
    },
    {
      kanji: "承",
      meaning: "acquiesce",
    },
    {
      kanji: "函",
      meaning: "bin",
    },
    {
      kanji: "極",
      meaning: "poles",
    },
    {
      kanji: "牙",
      meaning: "tusk",
    },
    {
      kanji: "芽",
      meaning: "bud",
    },
    {
      kanji: "邪",
      meaning: "wicked",
    },
    {
      kanji: "雅",
      meaning: "gracious",
    },
    {
      kanji: "釈",
      meaning: "interpretation",
    },
    {
      kanji: "番",
      meaning: "turn",
    },
    {
      kanji: "審",
      meaning: "hearing",
    },
    {
      kanji: "翻",
      meaning: "flip",
    },
    {
      kanji: "藩",
      meaning: "clan",
    },
    {
      kanji: "毛",
      meaning: "fur",
    },
    {
      kanji: "耗",
      meaning: "decrease",
    },
    {
      kanji: "尾",
      meaning: "tail",
    },
    {
      kanji: "宅",
      meaning: "home",
    },
    {
      kanji: "託",
      meaning: "consign",
    },
    {
      kanji: "為",
      meaning: "do",
    },
    {
      kanji: "偽",
      meaning: "falsehood",
    },
    {
      kanji: "畏",
      meaning: "apprehensive",
    },
    {
      kanji: "長",
      meaning: "long",
    },
    {
      kanji: "張",
      meaning: "lengthen",
    },
    {
      kanji: "帳",
      meaning: "notebook",
    },
    {
      kanji: "脹",
      meaning: "dilate",
    },
    {
      kanji: "髪",
      meaning: "hair of the head",
    },
    {
      kanji: "展",
      meaning: "unfold",
    },
    {
      kanji: "喪",
      meaning: "miss",
    },
    {
      kanji: "巣",
      meaning: "nest",
    },
    {
      kanji: "単",
      meaning: "simple",
    },
    {
      kanji: "戦",
      meaning: "war",
    },
    {
      kanji: "禅",
      meaning: "Zen",
    },
    {
      kanji: "弾",
      meaning: "bullet",
    },
    {
      kanji: "桜",
      meaning: "cherry tree",
    },
    {
      kanji: "獣",
      meaning: "animal",
    },
    {
      kanji: "脳",
      meaning: "brain",
    },
    {
      kanji: "悩",
      meaning: "trouble",
    },
    {
      kanji: "厳",
      meaning: "stern",
    },
    {
      kanji: "鎖",
      meaning: "chain",
    },
    {
      kanji: "挙",
      meaning: "raise",
    },
    {
      kanji: "誉",
      meaning: "reputation",
    },
    {
      kanji: "猟",
      meaning: "game hunting",
    },
    {
      kanji: "鳥",
      meaning: "bird",
    },
    {
      kanji: "鳴",
      meaning: "chirp",
    },
    {
      kanji: "鶴",
      meaning: "crane",
    },
    {
      kanji: "烏",
      meaning: "crow",
    },
    {
      kanji: "蔦",
      meaning: "vine",
    },
    {
      kanji: "鳩",
      meaning: "pigeon",
    },
    {
      kanji: "鶏",
      meaning: "chicken",
    },
    {
      kanji: "島",
      meaning: "island",
    },
    {
      kanji: "暖",
      meaning: "warmth",
    },
    {
      kanji: "媛",
      meaning: "beautiful woman",
    },
    {
      kanji: "援",
      meaning: "abet",
    },
    {
      kanji: "緩",
      meaning: "slacken",
    },
    {
      kanji: "属",
      meaning: "belong",
    },
    {
      kanji: "嘱",
      meaning: "entrust",
    },
    {
      kanji: "偶",
      meaning: "accidentally",
    },
    {
      kanji: "遇",
      meaning: "interview",
    },
    {
      kanji: "愚",
      meaning: "foolish",
    },
    {
      kanji: "隅",
      meaning: "corner",
    },
    {
      kanji: "逆",
      meaning: "inverted",
    },
    {
      kanji: "塑",
      meaning: "model",
    },
    {
      kanji: "遡",
      meaning: "go upstream",
    },
    {
      kanji: "岡",
      meaning: "Mount",
    },
    {
      kanji: "鋼",
      meaning: "steel",
    },
    {
      kanji: "綱",
      meaning: "hawser",
    },
    {
      kanji: "剛",
      meaning: "sturdy",
    },
    {
      kanji: "缶",
      meaning: "tin can",
    },
    {
      kanji: "陶",
      meaning: "pottery",
    },
    {
      kanji: "揺",
      meaning: "swing",
    },
    {
      kanji: "謡",
      meaning: "Noh chanting",
    },
    {
      kanji: "鬱",
      meaning: "gloom",
    },
    {
      kanji: "就",
      meaning: "concerning",
    },
    {
      kanji: "蹴",
      meaning: "kick",
    },
    {
      kanji: "懇",
      meaning: "sociable",
    },
    {
      kanji: "墾",
      meaning: "groundbreaking",
    },
    {
      kanji: "貌",
      meaning: "countenance",
    },
    {
      kanji: "免",
      meaning: "excuse",
    },
    {
      kanji: "逸",
      meaning: "elude",
    },
    {
      kanji: "晩",
      meaning: "nightfall",
    },
    {
      kanji: "勉",
      meaning: "exertion",
    },
    {
      kanji: "象",
      meaning: "elephant",
    },
    {
      kanji: "像",
      meaning: "statue",
    },
    {
      kanji: "馬",
      meaning: "horse",
    },
    {
      kanji: "駒",
      meaning: "pony",
    },
    {
      kanji: "験",
      meaning: "verification",
    },
    {
      kanji: "騎",
      meaning: "equestrian",
    },
    {
      kanji: "駐",
      meaning: "parking",
    },
    {
      kanji: "駆",
      meaning: "drive",
    },
    {
      kanji: "駅",
      meaning: "station",
    },
    {
      kanji: "騒",
      meaning: "boisterous",
    },
    {
      kanji: "駄",
      meaning: "burdensome",
    },
    {
      kanji: "驚",
      meaning: "wonder",
    },
    {
      kanji: "篤",
      meaning: "fervent",
    },
    {
      kanji: "罵",
      meaning: "insult",
    },
    {
      kanji: "騰",
      meaning: "inflation",
    },
    {
      kanji: "虎",
      meaning: "tiger",
    },
    {
      kanji: "虜",
      meaning: "captive",
    },
    {
      kanji: "膚",
      meaning: "skin",
    },
    {
      kanji: "虚",
      meaning: "void",
    },
    {
      kanji: "戯",
      meaning: "frolic",
    },
    {
      kanji: "虞",
      meaning: "uneasiness",
    },
    {
      kanji: "慮",
      meaning: "prudence",
    },
    {
      kanji: "劇",
      meaning: "drama",
    },
    {
      kanji: "虐",
      meaning: "tyrannize",
    },
    {
      kanji: "鹿",
      meaning: "deer",
    },
    {
      kanji: "麓",
      meaning: "foot of a mountain",
    },
    {
      kanji: "薦",
      meaning: "recommend",
    },
    {
      kanji: "慶",
      meaning: "jubilation",
    },
    {
      kanji: "麗",
      meaning: "lovely",
    },
    {
      kanji: "熊",
      meaning: "bear",
    },
    {
      kanji: "能",
      meaning: "ability",
    },
    {
      kanji: "態",
      meaning: "attitude",
    },
    {
      kanji: "寅",
      meaning: "sign of the tiger",
    },
    {
      kanji: "演",
      meaning: "performance",
    },
    {
      kanji: "辰",
      meaning: "sign of the dragon",
    },
    {
      kanji: "辱",
      meaning: "embarrass",
    },
    {
      kanji: "震",
      meaning: "quake",
    },
    {
      kanji: "振",
      meaning: "shake",
    },
    {
      kanji: "娠",
      meaning: "with child",
    },
    {
      kanji: "唇",
      meaning: "lips",
    },
    {
      kanji: "農",
      meaning: "agriculture",
    },
    {
      kanji: "濃",
      meaning: "concentrated",
    },
    {
      kanji: "送",
      meaning: "send off",
    },
    {
      kanji: "関",
      meaning: "connection",
    },
    {
      kanji: "咲",
      meaning: "blossom",
    },
    {
      kanji: "鬼",
      meaning: "ghost",
    },
    {
      kanji: "醜",
      meaning: "ugly",
    },
    {
      kanji: "魂",
      meaning: "soul",
    },
    {
      kanji: "魔",
      meaning: "witch",
    },
    {
      kanji: "魅",
      meaning: "fascination",
    },
    {
      kanji: "塊",
      meaning: "clod",
    },
    {
      kanji: "襲",
      meaning: "attack",
    },
    {
      kanji: "嚇",
      meaning: "upbraid",
    },
    {
      kanji: "朕",
      meaning: "majestic plural",
    },
    {
      kanji: "雰",
      meaning: "atmosphere",
    },
    {
      kanji: "箇",
      meaning: "item",
    },
    {
      kanji: "錬",
      meaning: "tempering",
    },
    {
      kanji: "遵",
      meaning: "abide by",
    },
    {
      kanji: "罷",
      meaning: "quit",
    },
    {
      kanji: "屯",
      meaning: "barracks",
    },
    {
      kanji: "且",
      meaning: "moreover",
    },
    {
      kanji: "藻",
      meaning: "seaweed",
    },
    {
      kanji: "隷",
      meaning: "slave",
    },
    {
      kanji: "癒",
      meaning: "healing",
    },
    {
      kanji: "璽",
      meaning: "imperial seal",
    },
    {
      kanji: "潟",
      meaning: "lagoon",
    },
    {
      kanji: "丹",
      meaning: "cinnabar",
    },
    {
      kanji: "丑",
      meaning: "sign of the cow",
    },
    {
      kanji: "羞",
      meaning: "humiliate",
    },
    {
      kanji: "卯",
      meaning: "sign of the hare",
    },
    {
      kanji: "巳",
      meaning: "sign of the snake",
    },
    {
      kanji: "此",
      meaning: "this here",
    },
    {
      kanji: "柴",
      meaning: "brushwood",
    },
    {
      kanji: "些",
      meaning: "whit",
    },
    {
      kanji: "砦",
      meaning: "fort",
    },
    {
      kanji: "髭",
      meaning: "beard",
    },
    {
      kanji: "禽",
      meaning: "fowl",
    },
    {
      kanji: "檎",
      meaning: "apple",
    },
    {
      kanji: "憐",
      meaning: "sympathize with",
    },
    {
      kanji: "燐",
      meaning: "phosphorus",
    },
    {
      kanji: "麟",
      meaning: "camelopard",
    },
    {
      kanji: "鱗",
      meaning: "scaled",
    },
    {
      kanji: "奄",
      meaning: "encompassing",
    },
    {
      kanji: "庵",
      meaning: "hermitage",
    },
    {
      kanji: "掩",
      meaning: "shrouded",
    },
    {
      kanji: "悛",
      meaning: "make amends",
    },
    {
      kanji: "駿",
      meaning: "steed",
    },
    {
      kanji: "峻",
      meaning: "steep",
    },
    {
      kanji: "竣",
      meaning: "complete a job",
    },
    {
      kanji: "犀",
      meaning: "rhinoceros",
    },
    {
      kanji: "皐",
      meaning: "lunar month",
    },
    {
      kanji: "畷",
      meaning: "rice-field footpath",
    },
    {
      kanji: "綴",
      meaning: "mend",
    },
    {
      kanji: "鎧",
      meaning: "suit of armor",
    },
    {
      kanji: "凱",
      meaning: "triumph",
    },
    {
      kanji: "呑",
      meaning: "quaff",
    },
    {
      kanji: "韮",
      meaning: "leek",
    },
    {
      kanji: "籤",
      meaning: "lottery",
    },
    {
      kanji: "懺",
      meaning: "penitential",
    },
    {
      kanji: "芻",
      meaning: "hay",
    },
    {
      kanji: "雛",
      meaning: "chick",
    },
    {
      kanji: "趨",
      meaning: "scurry",
    },
    {
      kanji: "尤",
      meaning: "understandably",
    },
    {
      kanji: "厖",
      meaning: "immense",
    },
    {
      kanji: "或",
      meaning: "a  (a certain)",
    },
    {
      kanji: "兎",
      meaning: "rabbit",
    },
    {
      kanji: "也",
      meaning: "est",
    },
    {
      kanji: "巴",
      meaning: "comma-design",
    },
    {
      kanji: "疋",
      meaning: "critters",
    },
    {
      kanji: "菫",
      meaning: "violet",
    },
    {
      kanji: "曼",
      meaning: "mandala",
    },
    {
      kanji: "云",
      meaning: "quote",
    },
    {
      kanji: "莫",
      meaning: "shalt",
    },
    {
      kanji: "而",
      meaning: "and then",
    },
    {
      kanji: "倭",
      meaning: "Yamato",
    },
    {
      kanji: "侠",
      meaning: "chivalry",
    },
    {
      kanji: "倦",
      meaning: "fed up",
    },
    {
      kanji: "俄",
      meaning: "abrupt",
    },
    {
      kanji: "佃",
      meaning: "work a field",
    },
    {
      kanji: "仔",
      meaning: "animal offspring",
    },
    {
      kanji: "仇",
      meaning: "foe",
    },
    {
      kanji: "伽",
      meaning: "look after",
    },
    {
      kanji: "儲",
      meaning: "make a profit",
    },
    {
      kanji: "僑",
      meaning: "emigrant",
    },
    {
      kanji: "倶",
      meaning: "mate",
    },
    {
      kanji: "侃",
      meaning: "forthright",
    },
    {
      kanji: "偲",
      meaning: "memorial",
    },
    {
      kanji: "侭",
      meaning: "as is",
    },
    {
      kanji: "脩",
      meaning: "dried meat",
    },
    {
      kanji: "倅",
      meaning: "my son",
    },
    {
      kanji: "做",
      meaning: "make do",
    },
    {
      kanji: "冴",
      meaning: "sharp",
    },
    {
      kanji: "凋",
      meaning: "wilt",
    },
    {
      kanji: "凌",
      meaning: "pull through",
    },
    {
      kanji: "凛",
      meaning: "stately",
    },
    {
      kanji: "凧",
      meaning: "kite",
    },
    {
      kanji: "凪",
      meaning: "lull",
    },
    {
      kanji: "夙",
      meaning: "earlybird",
    },
    {
      kanji: "鳳",
      meaning: "phoenix",
    },
    {
      kanji: "剽",
      meaning: "menace",
    },
    {
      kanji: "劉",
      meaning: "slaughter",
    },
    {
      kanji: "剃",
      meaning: "shave",
    },
    {
      kanji: "厭",
      meaning: "despondent",
    },
    {
      kanji: "雁",
      meaning: "wild goose",
    },
    {
      kanji: "贋",
      meaning: "counterfeit",
    },
    {
      kanji: "厨",
      meaning: "kitchen",
    },
    {
      kanji: "仄",
      meaning: "insinuate",
    },
    {
      kanji: "哨",
      meaning: "scout",
    },
    {
      kanji: "咎",
      meaning: "reprehend",
    },
    {
      kanji: "囁",
      meaning: "whisper",
    },
    {
      kanji: "喋",
      meaning: "chatter",
    },
    {
      kanji: "嘩",
      meaning: "quarrel",
    },
    {
      kanji: "噂",
      meaning: "gossip",
    },
    {
      kanji: "咳",
      meaning: "cough",
    },
    {
      kanji: "喧",
      meaning: "clamor",
    },
    {
      kanji: "叩",
      meaning: "bash",
    },
    {
      kanji: "嘘",
      meaning: "fib",
    },
    {
      kanji: "啄",
      meaning: "peck at",
    },
    {
      kanji: "吠",
      meaning: "barking",
    },
    {
      kanji: "吊",
      meaning: "dangle",
    },
    {
      kanji: "噛",
      meaning: "chew",
    },
    {
      kanji: "叶",
      meaning: "within my ability",
    },
    {
      kanji: "吻",
      meaning: "sides of the mouth",
    },
    {
      kanji: "吃",
      meaning: "stammer",
    },
    {
      kanji: "噺",
      meaning: "spin a tale",
    },
    {
      kanji: "噌",
      meaning: "miso",
    },
    {
      kanji: "邑",
      meaning: "city walls",
    },
    {
      kanji: "呆",
      meaning: "dumbfounded",
    },
    {
      kanji: "喰",
      meaning: "ingest",
    },
    {
      kanji: "埴",
      meaning: "clay",
    },
    {
      kanji: "坤",
      meaning: "authochthonous",
    },
    {
      kanji: "壕",
      meaning: "dugout",
    },
    {
      kanji: "垢",
      meaning: "blemish",
    },
    {
      kanji: "坦",
      meaning: "flat",
    },
    {
      kanji: "埠",
      meaning: "wharf",
    },
    {
      kanji: "堰",
      meaning: "dam",
    },
    {
      kanji: "堵",
      meaning: "railing",
    },
    {
      kanji: "嬰",
      meaning: "suckling infant",
    },
    {
      kanji: "姦",
      meaning: "violate",
    },
    {
      kanji: "婢",
      meaning: "handmaiden",
    },
    {
      kanji: "婉",
      meaning: "well finished",
    },
    {
      kanji: "娼",
      meaning: "harlot",
    },
    {
      kanji: "妓",
      meaning: "courtesan",
    },
    {
      kanji: "娃",
      meaning: "fair",
    },
    {
      kanji: "姪",
      meaning: "niece",
    },
    {
      kanji: "嬬",
      meaning: "mistress",
    },
    {
      kanji: "姥",
      meaning: "aged woman",
    },
    {
      kanji: "姑",
      meaning: "mother-in-law",
    },
    {
      kanji: "姐",
      meaning: "young miss",
    },
    {
      kanji: "嬉",
      meaning: "overjoyed",
    },
    {
      kanji: "孕",
      meaning: "expecting",
    },
    {
      kanji: "孜",
      meaning: "assiduous",
    },
    {
      kanji: "宥",
      meaning: "soothe",
    },
    {
      kanji: "寓",
      meaning: "imply",
    },
    {
      kanji: "宏",
      meaning: "extensive",
    },
    {
      kanji: "牢",
      meaning: "jail",
    },
    {
      kanji: "宋",
      meaning: "Sung dynasty",
    },
    {
      kanji: "宍",
      meaning: "venison",
    },
    {
      kanji: "屠",
      meaning: "butchering",
    },
    {
      kanji: "屁",
      meaning: "fart",
    },
    {
      kanji: "屑",
      meaning: "rubbish",
    },
    {
      kanji: "屡",
      meaning: "frequently",
    },
    {
      kanji: "屍",
      meaning: "corpse",
    },
    {
      kanji: "屏",
      meaning: "folding screen",
    },
    {
      kanji: "嵩",
      meaning: "high-reaching",
    },
    {
      kanji: "崚",
      meaning: "rugged mountains",
    },
    {
      kanji: "嶺",
      meaning: "mountaintop",
    },
    {
      kanji: "嵌",
      meaning: "fit into",
    },
    {
      kanji: "帖",
      meaning: "quire",
    },
    {
      kanji: "幡",
      meaning: "banner",
    },
    {
      kanji: "幟",
      meaning: "pennant",
    },
    {
      kanji: "庖",
      meaning: "cleaver",
    },
    {
      kanji: "廓",
      meaning: "licensed quarters",
    },
    {
      kanji: "庇",
      meaning: "overhang",
    },
    {
      kanji: "鷹",
      meaning: "hawk",
    },
    {
      kanji: "庄",
      meaning: "shire",
    },
    {
      kanji: "廟",
      meaning: "tomb sanctuary",
    },
    {
      kanji: "彊",
      meaning: "strengthen",
    },
    {
      kanji: "弛",
      meaning: "loosen",
    },
    {
      kanji: "粥",
      meaning: "rice gruel",
    },
    {
      kanji: "挽",
      meaning: "lathe",
    },
    {
      kanji: "撞",
      meaning: "bump into",
    },
    {
      kanji: "扮",
      meaning: "disguise",
    },
    {
      kanji: "捏",
      meaning: "fabrication",
    },
    {
      kanji: "掴",
      meaning: "clutch",
    },
    {
      kanji: "捺",
      meaning: "impress",
    },
    {
      kanji: "掻",
      meaning: "scratch",
    },
    {
      kanji: "撰",
      meaning: "assortment",
    },
    {
      kanji: "揃",
      meaning: "muster",
    },
    {
      kanji: "捌",
      meaning: "deal with",
    },
    {
      kanji: "按",
      meaning: "press down on",
    },
    {
      kanji: "播",
      meaning: "disseminate",
    },
    {
      kanji: "揖",
      meaning: "collect",
    },
    {
      kanji: "托",
      meaning: "receptacle",
    },
    {
      kanji: "捧",
      meaning: "devote",
    },
    {
      kanji: "撚",
      meaning: "twirl",
    },
    {
      kanji: "挺",
      meaning: "counter for tools",
    },
    {
      kanji: "擾",
      meaning: "commotion",
    },
    {
      kanji: "撫",
      meaning: "petting",
    },
    {
      kanji: "撒",
      meaning: "sprinkle",
    },
    {
      kanji: "擢",
      meaning: "outstanding",
    },
    {
      kanji: "摺",
      meaning: "rubbing",
    },
    {
      kanji: "捷",
      meaning: "spoils",
    },
    {
      kanji: "抉",
      meaning: "gouge out",
    },
    {
      kanji: "怯",
      meaning: "wince",
    },
    {
      kanji: "惟",
      meaning: "ponder",
    },
    {
      kanji: "惚",
      meaning: "infatuation",
    },
    {
      kanji: "怜",
      meaning: "quickwitted",
    },
    {
      kanji: "惇",
      meaning: "considerate",
    },
    {
      kanji: "恰",
      meaning: "as if",
    },
    {
      kanji: "恢",
      meaning: "enlarge",
    },
    {
      kanji: "悌",
      meaning: "respect for elders",
    },
    {
      kanji: "澪",
      meaning: "canal",
    },
    {
      kanji: "洸",
      meaning: "glistening",
    },
    {
      kanji: "滉",
      meaning: "bounding main",
    },
    {
      kanji: "漱",
      meaning: "gargle",
    },
    {
      kanji: "洲",
      meaning: "continent",
    },
    {
      kanji: "洵",
      meaning: "swirling waters",
    },
    {
      kanji: "滲",
      meaning: "seep",
    },
    {
      kanji: "洒",
      meaning: "rinse",
    },
    {
      kanji: "沐",
      meaning: "douse",
    },
    {
      kanji: "泪",
      meaning: "teardrops",
    },
    {
      kanji: "渾",
      meaning: "gushing",
    },
    {
      kanji: "涜",
      meaning: "blaspheme",
    },
    {
      kanji: "梁",
      meaning: "roofbeam",
    },
    {
      kanji: "澱",
      meaning: "sediment",
    },
    {
      kanji: "洛",
      meaning: "old Kyoto",
    },
    {
      kanji: "汝",
      meaning: "thou",
    },
    {
      kanji: "漉",
      meaning: "filter",
    },
    {
      kanji: "瀕",
      meaning: "on the verge of",
    },
    {
      kanji: "濠",
      meaning: "moat",
    },
    {
      kanji: "溌",
      meaning: "spray",
    },
    {
      kanji: "湊",
      meaning: "port",
    },
    {
      kanji: "淋",
      meaning: "solitude",
    },
    {
      kanji: "浩",
      meaning: "abounding",
    },
    {
      kanji: "汀",
      meaning: "water’s edge",
    },
    {
      kanji: "鴻",
      meaning: "large goose",
    },
    {
      kanji: "潅",
      meaning: "souse",
    },
    {
      kanji: "溢",
      meaning: "brimming",
    },
    {
      kanji: "湛",
      meaning: "inundate",
    },
    {
      kanji: "淳",
      meaning: "immaculate",
    },
    {
      kanji: "渥",
      meaning: "moisten",
    },
    {
      kanji: "灘",
      meaning: "rough seas",
    },
    {
      kanji: "汲",
      meaning: "draw water",
    },
    {
      kanji: "瀞",
      meaning: "river pool",
    },
    {
      kanji: "溜",
      meaning: "cumulation",
    },
    {
      kanji: "渕",
      meaning: "abyss",
    },
    {
      kanji: "沌",
      meaning: "chaos",
    },
    {
      kanji: "濾",
      meaning: "strainer",
    },
    {
      kanji: "濡",
      meaning: "drench",
    },
    {
      kanji: "淀",
      meaning: "eddy",
    },
    {
      kanji: "涅",
      meaning: "black soil",
    },
    {
      kanji: "斧",
      meaning: "hatchet",
    },
    {
      kanji: "爺",
      meaning: "grandpa",
    },
    {
      kanji: "猾",
      meaning: "sly",
    },
    {
      kanji: "猥",
      meaning: "indecent",
    },
    {
      kanji: "狡",
      meaning: "cunning",
    },
    {
      kanji: "狸",
      meaning: "racoon dog",
    },
    {
      kanji: "狼",
      meaning: "wolf",
    },
    {
      kanji: "狽",
      meaning: "flustered",
    },
    {
      kanji: "狗",
      meaning: "pup",
    },
    {
      kanji: "狐",
      meaning: "fox",
    },
    {
      kanji: "狛",
      meaning: "a-un",
    },
    {
      kanji: "獅",
      meaning: "lion",
    },
    {
      kanji: "狒",
      meaning: "baboon",
    },
    {
      kanji: "莨",
      meaning: "tobacco",
    },
    {
      kanji: "茉",
      meaning: "jasmine",
    },
    {
      kanji: "莉",
      meaning: "hawthorn",
    },
    {
      kanji: "苺",
      meaning: "strawberry",
    },
    {
      kanji: "萩",
      meaning: "bush clover",
    },
    {
      kanji: "藝",
      meaning: "technique (old)",
    },
    {
      kanji: "薙",
      meaning: "trim",
    },
    {
      kanji: "蓑",
      meaning: "straw raincoat",
    },
    {
      kanji: "苔",
      meaning: "moss",
    },
    {
      kanji: "蕩",
      meaning: "prodigal",
    },
    {
      kanji: "蔓",
      meaning: "tendril",
    },
    {
      kanji: "蓮",
      meaning: "lotus",
    },
    {
      kanji: "芙",
      meaning: "lotus flower",
    },
    {
      kanji: "蓉",
      meaning: "lotus blossom",
    },
    {
      kanji: "蘭",
      meaning: "orchid",
    },
    {
      kanji: "芦",
      meaning: "hollow reed",
    },
    {
      kanji: "薯",
      meaning: "yam",
    },
    {
      kanji: "菖",
      meaning: "iris",
    },
    {
      kanji: "蕉",
      meaning: "banana",
    },
    {
      kanji: "蕎",
      meaning: "buckwheat",
    },
    {
      kanji: "蕗",
      meaning: "butterbur",
    },
    {
      kanji: "茄",
      meaning: "eggplant",
    },
    {
      kanji: "蔭",
      meaning: "behind the scenes",
    },
    {
      kanji: "蓬",
      meaning: "wormwood",
    },
    {
      kanji: "芥",
      meaning: "mustard",
    },
    {
      kanji: "萌",
      meaning: "germinate",
    },
    {
      kanji: "葡",
      meaning: "grape",
    },
    {
      kanji: "萄",
      meaning: "grape vine",
    },
    {
      kanji: "蘇",
      meaning: "resurrect",
    },
    {
      kanji: "蕃",
      meaning: "grow wild",
    },
    {
      kanji: "苓",
      meaning: "cocklebur",
    },
    {
      kanji: "菰",
      meaning: "rush mat",
    },
    {
      kanji: "蒙",
      meaning: "darken",
    },
    {
      kanji: "茅",
      meaning: "grassy reed",
    },
    {
      kanji: "芭",
      meaning: "plantain",
    },
    {
      kanji: "苅",
      meaning: "mow",
    },
    {
      kanji: "葱",
      meaning: "onion",
    },
    {
      kanji: "葵",
      meaning: "hollyhock",
    },
    {
      kanji: "葺",
      meaning: "shingling",
    },
    {
      kanji: "蕊",
      meaning: "stamen",
    },
    {
      kanji: "茸",
      meaning: "mushroom",
    },
    {
      kanji: "蒔",
      meaning: "sowing",
    },
    {
      kanji: "芹",
      meaning: "parsley",
    },
    {
      kanji: "苫",
      meaning: "thatching",
    },
    {
      kanji: "蒼",
      meaning: "pale blue",
    },
    {
      kanji: "藁",
      meaning: "straw",
    },
    {
      kanji: "蕪",
      meaning: "turnip",
    },
    {
      kanji: "藷",
      meaning: "sweet potato",
    },
    {
      kanji: "薮",
      meaning: "quack",
    },
    {
      kanji: "蒜",
      meaning: "garlic",
    },
    {
      kanji: "蕨",
      meaning: "bracken",
    },
    {
      kanji: "蔚",
      meaning: "grow plentiful",
    },
    {
      kanji: "茜",
      meaning: "madder red",
    },
    {
      kanji: "莞",
      meaning: "candle rush",
    },
    {
      kanji: "蒐",
      meaning: "collector",
    },
    {
      kanji: "菅",
      meaning: "sedge",
    },
    {
      kanji: "葦",
      meaning: "ditch reed",
    },
    {
      kanji: "迪",
      meaning: "Way",
    },
    {
      kanji: "辿",
      meaning: "track down",
    },
    {
      kanji: "這",
      meaning: "crawl",
    },
    {
      kanji: "迂",
      meaning: "detour",
    },
    {
      kanji: "遁",
      meaning: "shirk",
    },
    {
      kanji: "逢",
      meaning: "tryst",
    },
    {
      kanji: "遥",
      meaning: "far off",
    },
    {
      kanji: "遼",
      meaning: "faraway",
    },
    {
      kanji: "逼",
      meaning: "pressing",
    },
    {
      kanji: "迄",
      meaning: "until",
    },
    {
      kanji: "逗",
      meaning: "standstill",
    },
    {
      kanji: "鄭",
      meaning: "courtesy",
    },
    {
      kanji: "隕",
      meaning: "falling",
    },
    {
      kanji: "隈",
      meaning: "nook",
    },
    {
      kanji: "憑",
      meaning: "possessed",
    },
    {
      kanji: "惹",
      meaning: "attract",
    },
    {
      kanji: "悉",
      meaning: "without exception",
    },
    {
      kanji: "忽",
      meaning: "instantaneously",
    },
    {
      kanji: "惣",
      meaning: "firstborn son",
    },
    {
      kanji: "愈",
      meaning: "in the nick of time",
    },
    {
      kanji: "恕",
      meaning: "sensitive",
    },
    {
      kanji: "昴",
      meaning: "overarching",
    },
    {
      kanji: "晋",
      meaning: "progress",
    },
    {
      kanji: "晟",
      meaning: "aglow",
    },
    {
      kanji: "暈",
      meaning: "halo",
    },
    {
      kanji: "暉",
      meaning: "glitter",
    },
    {
      kanji: "旱",
      meaning: "dry weather",
    },
    {
      kanji: "晏",
      meaning: "clear skies",
    },
    {
      kanji: "晨",
      meaning: "morrow",
    },
    {
      kanji: "晒",
      meaning: "bleaching",
    },
    {
      kanji: "晃",
      meaning: "limpid",
    },
    {
      kanji: "曝",
      meaning: "air out",
    },
    {
      kanji: "曙",
      meaning: "dawn",
    },
    {
      kanji: "昂",
      meaning: "elevate",
    },
    {
      kanji: "昏",
      meaning: "dusk",
    },
    {
      kanji: "晦",
      meaning: "last day of the month",
    },
    {
      kanji: "膿",
      meaning: "pus",
    },
    {
      kanji: "腑",
      meaning: "viscera",
    },
    {
      kanji: "胱",
      meaning: "bladder",
    },
    {
      kanji: "胚",
      meaning: "embryo",
    },
    {
      kanji: "肛",
      meaning: "anus",
    },
    {
      kanji: "脆",
      meaning: "fragile",
    },
    {
      kanji: "肋",
      meaning: "rib",
    },
    {
      kanji: "腔",
      meaning: "body cavity",
    },
    {
      kanji: "肱",
      meaning: "armrest",
    },
    {
      kanji: "胡",
      meaning: "uncivilized",
    },
    {
      kanji: "楓",
      meaning: "maple tree",
    },
    {
      kanji: "楊",
      meaning: "purple willow",
    },
    {
      kanji: "椋",
      meaning: "Oriental elm",
    },
    {
      kanji: "榛",
      meaning: "hazel",
    },
    {
      kanji: "櫛",
      meaning: "comb",
    },
    {
      kanji: "槌",
      meaning: "wooden hammer",
    },
    {
      kanji: "樵",
      meaning: "mallet",
    },
    {
      kanji: "梯",
      meaning: "ladder",
    },
    {
      kanji: "柑",
      meaning: "citrus tree",
    },
    {
      kanji: "杭",
      meaning: "picket",
    },
    {
      kanji: "柊",
      meaning: "holly",
    },
    {
      kanji: "柚",
      meaning: "citron",
    },
    {
      kanji: "椀",
      meaning: "wooden bowl",
    },
    {
      kanji: "栂",
      meaning: "hemlock",
    },
    {
      kanji: "柾",
      meaning: "spindle tree",
    },
    {
      kanji: "榊",
      meaning: "sacred tree",
    },
    {
      kanji: "樫",
      meaning: "evergreen oak",
    },
    {
      kanji: "槙",
      meaning: "black pine",
    },
    {
      kanji: "楢",
      meaning: "Japanese oak",
    },
    {
      kanji: "橘",
      meaning: "mandarin orange",
    },
    {
      kanji: "桧",
      meaning: "Japanese cypress",
    },
    {
      kanji: "棲",
      meaning: "roost",
    },
    {
      kanji: "栖",
      meaning: "nestle",
    },
    {
      kanji: "桔",
      meaning: "bellflower",
    },
    {
      kanji: "杜",
      meaning: "temple grove",
    },
    {
      kanji: "杷",
      meaning: "grain rake",
    },
    {
      kanji: "梶",
      meaning: "oar",
    },
    {
      kanji: "杵",
      meaning: "wooden pestle",
    },
    {
      kanji: "杖",
      meaning: "cane",
    },
    {
      kanji: "樽",
      meaning: "barrel",
    },
    {
      kanji: "櫓",
      meaning: "turret",
    },
    {
      kanji: "橿",
      meaning: "sturdy oak",
    },
    {
      kanji: "杓",
      meaning: "wooden ladle",
    },
    {
      kanji: "李",
      meaning: "damson",
    },
    {
      kanji: "棉",
      meaning: "raw cotton",
    },
    {
      kanji: "楯",
      meaning: "escutcheon",
    },
    {
      kanji: "榎",
      meaning: "hackberry",
    },
    {
      kanji: "樺",
      meaning: "birch",
    },
    {
      kanji: "槍",
      meaning: "lance",
    },
    {
      kanji: "柘",
      meaning: "wild mulberry",
    },
    {
      kanji: "梱",
      meaning: "bale",
    },
    {
      kanji: "枇",
      meaning: "loquat",
    },
    {
      kanji: "樋",
      meaning: "downspout",
    },
    {
      kanji: "橇",
      meaning: "sled",
    },
    {
      kanji: "槃",
      meaning: "enjoyment",
    },
    {
      kanji: "栞",
      meaning: "bookmark",
    },
    {
      kanji: "椰",
      meaning: "coconut tree",
    },
    {
      kanji: "檀",
      meaning: "sandalwood",
    },
    {
      kanji: "樗",
      meaning: "sumac",
    },
    {
      kanji: "槻",
      meaning: "zelkova",
    },
    {
      kanji: "椙",
      meaning: "cryptomeria",
    },
    {
      kanji: "彬",
      meaning: "copious",
    },
    {
      kanji: "桶",
      meaning: "bucket",
    },
    {
      kanji: "楕",
      meaning: "ellipse",
    },
    {
      kanji: "樒",
      meaning: "star-anise",
    },
    {
      kanji: "毬",
      meaning: "furball",
    },
    {
      kanji: "燿",
      meaning: "twinkle",
    },
    {
      kanji: "燎",
      meaning: "watchfire",
    },
    {
      kanji: "炬",
      meaning: "torch",
    },
    {
      kanji: "焚",
      meaning: "kindle",
    },
    {
      kanji: "灸",
      meaning: "moxa",
    },
    {
      kanji: "煽",
      meaning: "fanning",
    },
    {
      kanji: "煤",
      meaning: "soot",
    },
    {
      kanji: "煉",
      meaning: "firing",
    },
    {
      kanji: "燦",
      meaning: "dazzling",
    },
    {
      kanji: "灼",
      meaning: "refulgent",
    },
    {
      kanji: "烙",
      meaning: "branding",
    },
    {
      kanji: "焔",
      meaning: "flames",
    },
    {
      kanji: "烹",
      meaning: "stew",
    },
    {
      kanji: "牽",
      meaning: "tug",
    },
    {
      kanji: "牝",
      meaning: "female animal",
    },
    {
      kanji: "牡",
      meaning: "male animal",
    },
    {
      kanji: "琳",
      meaning: "chime",
    },
    {
      kanji: "琉",
      meaning: "lapis lazuli",
    },
    {
      kanji: "瑳",
      meaning: "burnish",
    },
    {
      kanji: "琢",
      meaning: "hone",
    },
    {
      kanji: "珊",
      meaning: "coral",
    },
    {
      kanji: "瑚",
      meaning: "coral reef",
    },
    {
      kanji: "瑞",
      meaning: "fortunate",
    },
    {
      kanji: "玖",
      meaning: "jet",
    },
    {
      kanji: "瑛",
      meaning: "crystal stone",
    },
    {
      kanji: "玲",
      meaning: "tinkling",
    },
    {
      kanji: "畢",
      meaning: "lastly",
    },
    {
      kanji: "畦",
      meaning: "paddy-field ridge",
    },
    {
      kanji: "痒",
      meaning: "itch",
    },
    {
      kanji: "痰",
      meaning: "phlegm",
    },
    {
      kanji: "疹",
      meaning: "measles",
    },
    {
      kanji: "痔",
      meaning: "hemorrhoids",
    },
    {
      kanji: "癌",
      meaning: "cancer",
    },
    {
      kanji: "痺",
      meaning: "paralysis",
    },
    {
      kanji: "眸",
      meaning: "apple of the eye",
    },
    {
      kanji: "眩",
      meaning: "dizzy",
    },
    {
      kanji: "雉",
      meaning: "pheasant",
    },
    {
      kanji: "矩",
      meaning: "carpenter’s square",
    },
    {
      kanji: "磐",
      meaning: "crag",
    },
    {
      kanji: "碇",
      meaning: "grapnel",
    },
    {
      kanji: "碧",
      meaning: "blue-green",
    },
    {
      kanji: "硯",
      meaning: "inkstone",
    },
    {
      kanji: "砥",
      meaning: "grindstone",
    },
    {
      kanji: "碗",
      meaning: "teacup",
    },
    {
      kanji: "碍",
      meaning: "obstacle",
    },
    {
      kanji: "碩",
      meaning: "illustrious",
    },
    {
      kanji: "磯",
      meaning: "rocky beach",
    },
    {
      kanji: "砺",
      meaning: "whetstone",
    },
    {
      kanji: "碓",
      meaning: "mill",
    },
    {
      kanji: "禦",
      meaning: "fend off",
    },
    {
      kanji: "祷",
      meaning: "beseech",
    },
    {
      kanji: "祐",
      meaning: "ancestral tablet",
    },
    {
      kanji: "祇",
      meaning: "local god",
    },
    {
      kanji: "祢",
      meaning: "ancestral shrine",
    },
    {
      kanji: "禄",
      meaning: "salarium",
    },
    {
      kanji: "禎",
      meaning: "felicitation",
    },
    {
      kanji: "秤",
      meaning: "balancing scales",
    },
    {
      kanji: "黍",
      meaning: "millet",
    },
    {
      kanji: "禿",
      meaning: "bald",
    },
    {
      kanji: "稔",
      meaning: "bear fruit",
    },
    {
      kanji: "稗",
      meaning: "crabgrass",
    },
    {
      kanji: "穣",
      meaning: "bumper crop",
    },
    {
      kanji: "稜",
      meaning: "imperial authority",
    },
    {
      kanji: "稀",
      meaning: "sparse",
    },
    {
      kanji: "穆",
      meaning: "obeisant",
    },
    {
      kanji: "窺",
      meaning: "peep",
    },
    {
      kanji: "窄",
      meaning: "tight",
    },
    {
      kanji: "穿",
      meaning: "drill",
    },
    {
      kanji: "竃",
      meaning: "kitchen stove",
    },
    {
      kanji: "竪",
      meaning: "longness",
    },
    {
      kanji: "颯",
      meaning: "rustling",
    },
    {
      kanji: "站",
      meaning: "outpost",
    },
    {
      kanji: "靖",
      meaning: "repose",
    },
    {
      kanji: "妾",
      meaning: "concubine",
    },
    {
      kanji: "衿",
      meaning: "lapel",
    },
    {
      kanji: "袷",
      meaning: "lined kimono",
    },
    {
      kanji: "袴",
      meaning: "pleated skirt",
    },
    {
      kanji: "襖",
      meaning: "sliding door",
    },
    {
      kanji: "笙",
      meaning: "Chinese panpipe",
    },
    {
      kanji: "筏",
      meaning: "raft",
    },
    {
      kanji: "簾",
      meaning: "bamboo blinds",
    },
    {
      kanji: "箪",
      meaning: "rattan box",
    },
    {
      kanji: "竿",
      meaning: "pole",
    },
    {
      kanji: "箆",
      meaning: "spatula",
    },
    {
      kanji: "箔",
      meaning: "foil",
    },
    {
      kanji: "笥",
      meaning: "wardrobe",
    },
    {
      kanji: "箭",
      meaning: "arrow shaft",
    },
    {
      kanji: "筑",
      meaning: "ancient harp",
    },
    {
      kanji: "篠",
      meaning: "slender bamboo",
    },
    {
      kanji: "纂",
      meaning: "redaction",
    },
    {
      kanji: "竺",
      meaning: "bamboo cane",
    },
    {
      kanji: "箕",
      meaning: "winnowing fan",
    },
    {
      kanji: "笈",
      meaning: "backpack",
    },
    {
      kanji: "篇",
      meaning: "livraison",
    },
    {
      kanji: "筈",
      meaning: "should",
    },
    {
      kanji: "簸",
      meaning: "winnow",
    },
    {
      kanji: "粕",
      meaning: "settlings",
    },
    {
      kanji: "糟",
      meaning: "lees",
    },
    {
      kanji: "糊",
      meaning: "paste",
    },
    {
      kanji: "籾",
      meaning: "unhulled rice",
    },
    {
      kanji: "糠",
      meaning: "rice bran",
    },
    {
      kanji: "糞",
      meaning: "excrement",
    },
    {
      kanji: "粟",
      meaning: "foxtail millet",
    },
    {
      kanji: "繋",
      meaning: "link up",
    },
    {
      kanji: "綸",
      meaning: "twine",
    },
    {
      kanji: "絨",
      meaning: "carpet yarn",
    },
    {
      kanji: "絆",
      meaning: "ties",
    },
    {
      kanji: "緋",
      meaning: "scarlet",
    },
    {
      kanji: "綜",
      meaning: "synthesis",
    },
    {
      kanji: "紐",
      meaning: "string",
    },
    {
      kanji: "紘",
      meaning: "chinstrap",
    },
    {
      kanji: "纏",
      meaning: "summarize",
    },
    {
      kanji: "絢",
      meaning: "gorgeous",
    },
    {
      kanji: "繍",
      meaning: "embroidery",
    },
    {
      kanji: "紬",
      meaning: "pongee",
    },
    {
      kanji: "綺",
      meaning: "ornate",
    },
    {
      kanji: "綾",
      meaning: "damask",
    },
    {
      kanji: "絃",
      meaning: "catgut",
    },
    {
      kanji: "縞",
      meaning: "stripe",
    },
    {
      kanji: "綬",
      meaning: "gimp",
    },
    {
      kanji: "紗",
      meaning: "gossamer",
    },
    {
      kanji: "舵",
      meaning: "rudder",
    },
    {
      kanji: "聯",
      meaning: "strung together",
    },
    {
      kanji: "聡",
      meaning: "attentive",
    },
    {
      kanji: "聘",
      meaning: "summons",
    },
    {
      kanji: "耽",
      meaning: "addiction",
    },
    {
      kanji: "耶",
      meaning: "exclamation",
    },
    {
      kanji: "蚤",
      meaning: "flea",
    },
    {
      kanji: "蟹",
      meaning: "crab",
    },
    {
      kanji: "蛋",
      meaning: "protein",
    },
    {
      kanji: "蟄",
      meaning: "hibernation",
    },
    {
      kanji: "蝿",
      meaning: "housefly",
    },
    {
      kanji: "蟻",
      meaning: "ant",
    },
    {
      kanji: "蝋",
      meaning: "wax",
    },
    {
      kanji: "蝦",
      meaning: "shrimp",
    },
    {
      kanji: "蛸",
      meaning: "octopus",
    },
    {
      kanji: "螺",
      meaning: "screw",
    },
    {
      kanji: "蝉",
      meaning: "cicada",
    },
    {
      kanji: "蛙",
      meaning: "frog",
    },
    {
      kanji: "蛾",
      meaning: "moth",
    },
    {
      kanji: "蛤",
      meaning: "clam",
    },
    {
      kanji: "蛭",
      meaning: "leech",
    },
    {
      kanji: "蛎",
      meaning: "oyster",
    },
    {
      kanji: "罫",
      meaning: "ruled lines",
    },
    {
      kanji: "袈",
      meaning: "stole",
    },
    {
      kanji: "裟",
      meaning: "monk’s sash",
    },
    {
      kanji: "截",
      meaning: "incision",
    },
    {
      kanji: "哉",
      meaning: "I wonder",
    },
    {
      kanji: "詢",
      meaning: "counsel",
    },
    {
      kanji: "諄",
      meaning: "polite",
    },
    {
      kanji: "讐",
      meaning: "vendetta",
    },
    {
      kanji: "諌",
      meaning: "remonstrate",
    },
    {
      kanji: "諒",
      meaning: "verify",
    },
    {
      kanji: "讃",
      meaning: "compliment",
    },
    {
      kanji: "訊",
      meaning: "query",
    },
    {
      kanji: "訣",
      meaning: "split up",
    },
    {
      kanji: "詫",
      meaning: "beg another’s pardon",
    },
    {
      kanji: "誼",
      meaning: "familiarity",
    },
    {
      kanji: "謬",
      meaning: "fallible",
    },
    {
      kanji: "訝",
      meaning: "wary",
    },
    {
      kanji: "諺",
      meaning: "proverb",
    },
    {
      kanji: "誹",
      meaning: "slander",
    },
    {
      kanji: "謂",
      meaning: "so-called",
    },
    {
      kanji: "諜",
      meaning: "secret agent",
    },
    {
      kanji: "註",
      meaning: "footnote",
    },
    {
      kanji: "譬",
      meaning: "parable",
    },
    {
      kanji: "轟",
      meaning: "rumble",
    },
    {
      kanji: "輔",
      meaning: "reinforce",
    },
    {
      kanji: "輻",
      meaning: "spoke",
    },
    {
      kanji: "輯",
      meaning: "assemble",
    },
    {
      kanji: "豹",
      meaning: "panther",
    },
    {
      kanji: "賎",
      meaning: "despicable",
    },
    {
      kanji: "貰",
      meaning: "get",
    },
    {
      kanji: "賑",
      meaning: "bustling",
    },
    {
      kanji: "贖",
      meaning: "expiate",
    },
    {
      kanji: "躓",
      meaning: "stumble",
    },
    {
      kanji: "蹄",
      meaning: "hoof",
    },
    {
      kanji: "蹟",
      meaning: "vestiges",
    },
    {
      kanji: "跨",
      meaning: "straddle",
    },
    {
      kanji: "跪",
      meaning: "kneel",
    },
    {
      kanji: "醤",
      meaning: "soy sauce",
    },
    {
      kanji: "醍",
      meaning: "whey",
    },
    {
      kanji: "醐",
      meaning: "ghee",
    },
    {
      kanji: "醇",
      meaning: "strong sake",
    },
    {
      kanji: "麹",
      meaning: "malt",
    },
    {
      kanji: "釦",
      meaning: "button",
    },
    {
      kanji: "銚",
      meaning: "keg",
    },
    {
      kanji: "鋤",
      meaning: "plow",
    },
    {
      kanji: "鋸",
      meaning: "hand saw",
    },
    {
      kanji: "錐",
      meaning: "awl",
    },
    {
      kanji: "鍬",
      meaning: "hoe",
    },
    {
      kanji: "鋲",
      meaning: "rivet",
    },
    {
      kanji: "錫",
      meaning: "tin",
    },
    {
      kanji: "錨",
      meaning: "anchor",
    },
    {
      kanji: "釘",
      meaning: "nail",
    },
    {
      kanji: "鑓",
      meaning: "javelin",
    },
    {
      kanji: "鋒",
      meaning: "sword’s point",
    },
    {
      kanji: "鎚",
      meaning: "hammer",
    },
    {
      kanji: "鉦",
      meaning: "carillion",
    },
    {
      kanji: "錆",
      meaning: "rust",
    },
    {
      kanji: "鍾",
      meaning: "cluster",
    },
    {
      kanji: "鋏",
      meaning: "scissors",
    },
    {
      kanji: "閃",
      meaning: "flash",
    },
    {
      kanji: "悶",
      meaning: "agony",
    },
    {
      kanji: "閤",
      meaning: "side gate",
    },
    {
      kanji: "雫",
      meaning: "trickle",
    },
    {
      kanji: "霞",
      meaning: "haze",
    },
    {
      kanji: "翰",
      meaning: "quill",
    },
    {
      kanji: "斡",
      meaning: "auspices",
    },
    {
      kanji: "鞍",
      meaning: "saddle",
    },
    {
      kanji: "鞭",
      meaning: "whip",
    },
    {
      kanji: "鞘",
      meaning: "saddle straps",
    },
    {
      kanji: "鞄",
      meaning: "briefcase",
    },
    {
      kanji: "靭",
      meaning: "pliable",
    },
    {
      kanji: "鞠",
      meaning: "terminate",
    },
    {
      kanji: "顛",
      meaning: "overturn",
    },
    {
      kanji: "穎",
      meaning: "brush tip",
    },
    {
      kanji: "頗",
      meaning: "exceedingly",
    },
    {
      kanji: "頌",
      meaning: "accolade",
    },
    {
      kanji: "頚",
      meaning: "neck and throat",
    },
    {
      kanji: "餐",
      meaning: "repast",
    },
    {
      kanji: "饗",
      meaning: "feast",
    },
    {
      kanji: "蝕",
      meaning: "eclipse",
    },
    {
      kanji: "飴",
      meaning: "sweets",
    },
    {
      kanji: "駕",
      meaning: "stretcher",
    },
    {
      kanji: "騨",
      meaning: "piebald",
    },
    {
      kanji: "馳",
      meaning: "rush",
    },
    {
      kanji: "騙",
      meaning: "cheat",
    },
    {
      kanji: "馴",
      meaning: "tame",
    },
    {
      kanji: "駁",
      meaning: "rebuttal",
    },
    {
      kanji: "駈",
      meaning: "gallop",
    },
    {
      kanji: "驢",
      meaning: "donkey",
    },
    {
      kanji: "鰻",
      meaning: "eel",
    },
    {
      kanji: "鯛",
      meaning: "sea bream",
    },
    {
      kanji: "鰯",
      meaning: "sardine",
    },
    {
      kanji: "鱒",
      meaning: "trout",
    },
    {
      kanji: "鮭",
      meaning: "salmon",
    },
    {
      kanji: "鮪",
      meaning: "tuna",
    },
    {
      kanji: "鮎",
      meaning: "sweet smelt",
    },
    {
      kanji: "鯵",
      meaning: "horse mackerel",
    },
    {
      kanji: "鱈",
      meaning: "cod",
    },
    {
      kanji: "鯖",
      meaning: "mackerel",
    },
    {
      kanji: "鮫",
      meaning: "shark",
    },
    {
      kanji: "鰹",
      meaning: "bonito",
    },
    {
      kanji: "鰍",
      meaning: "bullhead",
    },
    {
      kanji: "鰐",
      meaning: "alligator",
    },
    {
      kanji: "鮒",
      meaning: "crucian carp",
    },
    {
      kanji: "鮨",
      meaning: "sushi",
    },
    {
      kanji: "鰭",
      meaning: "fish fin",
    },
    {
      kanji: "鴎",
      meaning: "seagull",
    },
    {
      kanji: "鵬",
      meaning: "roc",
    },
    {
      kanji: "鸚",
      meaning: "parakeet",
    },
    {
      kanji: "鵡",
      meaning: "parrot",
    },
    {
      kanji: "鵜",
      meaning: "cormorant",
    },
    {
      kanji: "鷺",
      meaning: "heron",
    },
    {
      kanji: "鷲",
      meaning: "eagle",
    },
    {
      kanji: "鴨",
      meaning: "wild duck",
    },
    {
      kanji: "鳶",
      meaning: "black kite",
    },
    {
      kanji: "梟",
      meaning: "owl",
    },
    {
      kanji: "塵",
      meaning: "dust",
    },
    {
      kanji: "麒",
      meaning: "giraffe",
    },
    {
      kanji: "舅",
      meaning: "father-in-law",
    },
    {
      kanji: "鼠",
      meaning: "mouse",
    },
    {
      kanji: "鑿",
      meaning: "bore",
    },
    {
      kanji: "艘",
      meaning: "small craft",
    },
    {
      kanji: "瞑",
      meaning: "close the eyes",
    },
    {
      kanji: "暝",
      meaning: "murky",
    },
    {
      kanji: "坐",
      meaning: "sitting in meditation",
    },
    {
      kanji: "朔",
      meaning: "first day of the month",
    },
    {
      kanji: "曳",
      meaning: "tow",
    },
    {
      kanji: "洩",
      meaning: "dribble out",
    },
    {
      kanji: "彗",
      meaning: "comet",
    },
    {
      kanji: "慧",
      meaning: "astute",
    },
    {
      kanji: "爾",
      meaning: "let it be",
    },
    {
      kanji: "嘉",
      meaning: "applaud",
    },
    {
      kanji: "兇",
      meaning: "evil",
    },
    {
      kanji: "兜",
      meaning: "helmet",
    },
    {
      kanji: "靄",
      meaning: "mist",
    },
    {
      kanji: "劫",
      meaning: "kalpa",
    },
    {
      kanji: "歎",
      meaning: "bemoan",
    },
    {
      kanji: "輿",
      meaning: "palanquin",
    },
    {
      kanji: "歪",
      meaning: "warped",
    },
    {
      kanji: "翠",
      meaning: "jade green",
    },
    {
      kanji: "黛",
      meaning: "blue-black",
    },
    {
      kanji: "鼎",
      meaning: "tripod",
    },
    {
      kanji: "鹵",
      meaning: "rocksalt",
    },
    {
      kanji: "鹸",
      meaning: "lye",
    },
    {
      kanji: "虔",
      meaning: "reserved",
    },
    {
      kanji: "燕",
      meaning: "swallow",
    },
    {
      kanji: "嘗",
      meaning: "lick",
    },
    {
      kanji: "殆",
      meaning: "almost",
    },
    {
      kanji: "牌",
      meaning: "mahjong tiles",
    },
    {
      kanji: "覗",
      meaning: "peek",
    },
    {
      kanji: "齟",
      meaning: "disagree",
    },
    {
      kanji: "齬",
      meaning: "discord",
    },
    {
      kanji: "秦",
      meaning: "Manchu dynasty",
    },
    {
      kanji: "雀",
      meaning: "sparrow",
    },
    {
      kanji: "隼",
      meaning: "peregrine falcon",
    },
    {
      kanji: "耀",
      meaning: "shimmering",
    },
    {
      kanji: "夷",
      meaning: "ebisu",
    },
    {
      kanji: "嚢",
      meaning: "cyst",
    },
    {
      kanji: "暢",
      meaning: "carefree",
    },
    {
      kanji: "廻",
      meaning: "circling",
    },
    {
      kanji: "欣",
      meaning: "elation",
    },
    {
      kanji: "毅",
      meaning: "stalwart",
    },
    {
      kanji: "斯",
      meaning: "this",
    },
    {
      kanji: "匙",
      meaning: "wooden spoon",
    },
    {
      kanji: "匡",
      meaning: "set straight",
    },
    {
      kanji: "肇",
      meaning: "founding",
    },
    {
      kanji: "麿",
      meaning: "Utamaro",
    },
    {
      kanji: "叢",
      meaning: "conglomerate",
    },
    {
      kanji: "肴",
      meaning: "entreat",
    },
    {
      kanji: "斐",
      meaning: "symmetrically patterned",
    },
    {
      kanji: "卿",
      meaning: "magistrate",
    },
    {
      kanji: "翫",
      meaning: "fiddle with",
    },
    {
      kanji: "於",
      meaning: "within",
    },
    {
      kanji: "套",
      meaning: "hackneyed",
    },
    {
      kanji: "叛",
      meaning: "rebellion",
    },
    {
      kanji: "尖",
      meaning: "sharp point",
    },
    {
      kanji: "壷",
      meaning: "crock",
    },
    {
      kanji: "叡",
      meaning: "sapience",
    },
    {
      kanji: "酋",
      meaning: "chieftain",
    },
    {
      kanji: "鴬",
      meaning: "nightingale",
    },
    {
      kanji: "赫",
      meaning: "incandescent",
    },
    {
      kanji: "臥",
      meaning: "supinate",
    },
    {
      kanji: "甥",
      meaning: "nephew",
    },
    {
      kanji: "瓢",
      meaning: "gourd",
    },
    {
      kanji: "琵",
      meaning: "biwa",
    },
    {
      kanji: "琶",
      meaning: "lute",
    },
    {
      kanji: "叉",
      meaning: "forked",
    },
    {
      kanji: "乖",
      meaning: "disobey",
    },
    {
      kanji: "畠",
      meaning: "dry field",
    },
    {
      kanji: "圃",
      meaning: "vegetable patch",
    },
    {
      kanji: "丞",
      meaning: "helping hand",
    },
    {
      kanji: "亮",
      meaning: "translucent",
    },
    {
      kanji: "胤",
      meaning: "blood relative",
    },
    {
      kanji: "疏",
      meaning: "transcription",
    },
    {
      kanji: "膏",
      meaning: "ointment",
    },
    {
      kanji: "魁",
      meaning: "pioneer",
    },
    {
      kanji: "馨",
      meaning: "ambrosial",
    },
    {
      kanji: "牒",
      meaning: "label",
    },
    {
      kanji: "瞥",
      meaning: "glimpse",
    },
    {
      kanji: "睾",
      meaning: "testicle",
    },
    {
      kanji: "巫",
      meaning: "sorceress",
    },
    {
      kanji: "敦",
      meaning: "empathetic",
    },
    {
      kanji: "奎",
      meaning: "Andromeda",
    },
    {
      kanji: "翔",
      meaning: "soar",
    },
    {
      kanji: "皓",
      meaning: "beaming",
    },
    {
      kanji: "黎",
      meaning: "tenebrous",
    },
    {
      kanji: "赳",
      meaning: "bold",
    },
    {
      kanji: "已",
      meaning: "stop short",
    },
    {
      kanji: "棘",
      meaning: "thornbush",
    },
    {
      kanji: "祟",
      meaning: "haunt",
    },
    {
      kanji: "甦",
      meaning: "resuscitate",
    },
    {
      kanji: "剪",
      meaning: "pruning",
    },
    {
      kanji: "躾",
      meaning: "upbringing",
    },
    {
      kanji: "夥",
      meaning: "plentiful",
    },
    {
      kanji: "鼾",
      meaning: "snore",
    },
    {
      kanji: "陀",
      meaning: "steeply inclined",
    },
    {
      kanji: "粁",
      meaning: "kilometer",
    },
    {
      kanji: "糎",
      meaning: "centimeter",
    },
    {
      kanji: "粍",
      meaning: "millimeter",
    },
    {
      kanji: "噸",
      meaning: "ton",
    },
    {
      kanji: "哩",
      meaning: "mile",
    },
    {
      kanji: "浬",
      meaning: "nautical mile",
    },
    {
      kanji: "吋",
      meaning: "inch",
    },
    {
      kanji: "呎",
      meaning: "foot",
    },
    {
      kanji: "梵",
      meaning: "brahman",
    },
    {
      kanji: "薩",
      meaning: "bodhisattva",
    },
    {
      kanji: "菩",
      meaning: "bo tree",
    },
    {
      kanji: "唖",
      meaning: "babble",
    },
    {
      kanji: "牟",
      meaning: "moo",
    },
    {
      kanji: "迦",
      meaning: "Sanskrit ka",
    },
    {
      kanji: "珈",
      meaning: "jeweled hairpin",
    },
    {
      kanji: "琲",
      meaning: "beaded hairpin",
    },
    {
      kanji: "檜",
      meaning: "Japanese cypress (old)",
    },
    {
      kanji: "轡",
      meaning: "tinkling bell",
    },
    {
      kanji: "淵",
      meaning: "abyss (old)",
    },
    {
      kanji: "伍",
      meaning: "V",
    },
    {
      kanji: "什",
      meaning: "X",
    },
    {
      kanji: "萬",
      meaning: "ten thousand (old)",
    },
    {
      kanji: "邁",
      meaning: "pass through",
    },
    {
      kanji: "燭",
      meaning: "candlelight",
    },
    {
      kanji: "逞",
      meaning: "tough",
    },
    {
      kanji: "燈",
      meaning: "lamp (old)",
    },
    {
      kanji: "裡",
      meaning: "back (old)",
    },
    {
      kanji: "薗",
      meaning: "park (alternate)",
    },
    {
      kanji: "鋪",
      meaning: "shop (alternate)",
    },
    {
      kanji: "嶋",
      meaning: "island (alternate)",
    },
    {
      kanji: "峯",
      meaning: "summit (alternate)",
    },
    {
      kanji: "埜",
      meaning: "plains (old)",
    },
    {
      kanji: "龍",
      meaning: "dragon (old)",
    },
    {
      kanji: "寵",
      meaning: "patronage",
    },
    {
      kanji: "聾",
      meaning: "deafness",
    },
    {
      kanji: "慾",
      meaning: "longing (old)",
    },
    {
      kanji: "嶽",
      meaning: "Point (old)",
    },
    {
      kanji: "國",
      meaning: "country (old)",
    },
    {
      kanji: "脛",
      meaning: "shin",
    },
    {
      kanji: "勁",
      meaning: "formidable",
    },
    {
      kanji: "祀",
      meaning: "enshrine",
    },
    {
      kanji: "祓",
      meaning: "exorcism",
    },
    {
      kanji: "躇",
      meaning: "dither",
    },
    {
      kanji: "壽",
      meaning: "longevity (old)",
    },
    {
      kanji: "躊",
      meaning: "hesitate",
    },
    {
      kanji: "饅",
      meaning: "bean jam",
    },
    {
      kanji: "嘔",
      meaning: "retch",
    },
    {
      kanji: "鼈",
      meaning: "snapping turtle",
    },
    {
      kanji: "亙",
      meaning: "",
    },
    {
      kanji: "亨",
      meaning: "",
    },
    {
      kanji: "伶",
      meaning: "",
    },
    {
      kanji: "佑",
      meaning: "",
    },
    {
      kanji: "佼",
      meaning: "",
    },
    {
      kanji: "侑",
      meaning: "",
    },
    {
      kanji: "俣",
      meaning: "",
    },
    {
      kanji: "倖",
      meaning: "",
    },
    {
      kanji: "傭",
      meaning: "",
    },
    {
      kanji: "僻",
      meaning: "",
    },
    {
      kanji: "卜",
      meaning: "",
    },
    {
      kanji: "喬",
      meaning: "",
    },
    {
      kanji: "孟",
      meaning: "",
    },
    {
      kanji: "尭",
      meaning: "",
    },
    {
      kanji: "峨",
      meaning: "",
    },
    {
      kanji: "嵯",
      meaning: "",
    },
    {
      kanji: "巌",
      meaning: "",
    },
    {
      kanji: "巽",
      meaning: "",
    },
    {
      kanji: "彪",
      meaning: "",
    },
    {
      kanji: "掟",
      meaning: "",
    },
    {
      kanji: "掠",
      meaning: "",
    },
    {
      kanji: "撹",
      meaning: "",
    },
    {
      kanji: "梧",
      meaning: "",
    },
    {
      kanji: "欝",
      meaning: "",
    },
    {
      kanji: "欽",
      meaning: "",
    },
    {
      kanji: "煕",
      meaning: "",
    },
    {
      kanji: "熔",
      meaning: "",
    },
    {
      kanji: "珪",
      meaning: "",
    },
    {
      kanji: "瑶",
      meaning: "",
    },
    {
      kanji: "甫",
      meaning: "",
    },
    {
      kanji: "籠",
      meaning: "",
    },
    {
      kanji: "聚",
      meaning: "",
    },
    {
      kanji: "舘",
      meaning: "",
    },
    {
      kanji: "舜",
      meaning: "",
    },
    {
      kanji: "詑",
      meaning: "",
    },
    {
      kanji: "諏",
      meaning: "",
    },
    {
      kanji: "躯",
      meaning: "",
    },
    {
      kanji: "郁",
      meaning: "",
    },
    {
      kanji: "鏑",
      meaning: "",
    },
  ],
};
