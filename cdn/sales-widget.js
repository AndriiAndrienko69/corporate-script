const i18nData = {
  en: {
    names: ["John", "Emma", "Liam", "Sophia", "Oliver", "Ava", "Noah", "Mia", "Lucas", "Isabella", "Ethan", "Charlotte", "James", "Amelia", "Benjamin", "Emily"],
    fromCities: [
      "from London", "from Berlin", "from Paris", "from Madrid", "from Rome", "from New York",
      "from Toronto", "from Sydney", "from Dublin", "from Amsterdam", "from Vienna", "from Zurich"
    ],
    inCities: [
      "in London", "in Berlin", "in Paris", "in Madrid", "in Rome", "in New York",
      "in Toronto", "in Sydney", "in Dublin", "in Amsterdam", "in Vienna", "in Zurich"
    ],
    templates: [
      "{name} {fromCity} just made a purchase.",
      "Someone {inCity} just placed an order.",
      "{name} completed a purchase a few minutes ago.",
      "New order received {fromCity}!",
      "{name} just placed an order.",
      "A customer {inCity} made a purchase.",
      "{name} just checked out.",
      "Order received {fromCity}.",
    ],
  },

  ua: {
    names: ["Олена", "Іван", "Марія", "Андрій", "Софія", "Олександр", "Катерина", "Михайло", "Наталія", "Богдан", "Владислав", "Анастасія"],
    fromCities: [
      "з Києва", "зі Львова", "з Харкова", "з Одеси", "з Дніпра", "з Вінниці",
      "з Полтави", "із Запоріжжя", "з Чернігова", "з Чернівців"
    ],
    inCities: [
      "у Києві", "у Львові", "у Харкові", "в Одесі", "у Дніпрі", "у Вінниці",
      "у Полтаві", "у Запоріжжі", "у Чернігові", "у Чернівцях"
    ],
    templates: [
      "{name} {fromCity} щойно оформив(-ла) замовлення.",
      "Хтось {inCity} щойно здійснив покупку.",
      "Нове замовлення {fromCity}!",
      "Отримано замовлення {fromCity}.",
      "Клієнт {inCity} щойно завершив покупку.",
      "Покупку здійснено кілька хвилин тому.",
      "{name} щойно завершив(-ла) покупку.",
      "Замовлення {inCity} підтверджено.",
    ],
  },

  es: {
    names: ["Juan", "Lucía", "Carlos", "María", "Pablo", "Ana", "Luis", "Sofía", "Diego", "Laura", "Miguel", "Elena"],
    fromCities: [
      "de Madrid", "de Barcelona", "de Valencia", "de Sevilla", "de Bilbao",
      "de Lima", "de Buenos Aires", "de Bogotá", "de Ciudad de México", "de Santiago"
    ],
    inCities: [
      "en Madrid", "en Barcelona", "en Valencia", "en Sevilla", "en Bilbao",
      "en Lima", "en Buenos Aires", "en Bogotá", "en Ciudad de México", "en Santiago"
    ],
    templates: [
      "{name} {fromCity} acaba de realizar una compra.",
      "Alguien {inCity} acaba de hacer un pedido.",
      "{name} finalizó su compra hace unos minutos.",
      "¡Nuevo pedido recibido {fromCity}!",
      "Un cliente {inCity} realizó una compra.",
      "Pedido recibido {fromCity}.",
      "{name} acaba de finalizar su pedido.",
      "Alguien {inCity} completó una compra.",
    ],
  },

  "es-mx": {
    names: ["Juan", "María", "Luis", "Ana", "Carlos", "Sofía", "Jorge", "Fernanda", "Miguel", "Valeria", "Pedro", "Andrea"],
    fromCities: [
      "de Ciudad de México", "de Guadalajara", "de Monterrey", "de Puebla", "de Tijuana",
      "de Mérida", "de León", "de Querétaro", "de Toluca", "de Cancún"
    ],
    inCities: [
      "en Ciudad de México", "en Guadalajara", "en Monterrey", "en Puebla", "en Tijuana",
      "en Mérida", "en León", "en Querétaro", "en Toluca", "en Cancún"
    ],
    templates: [
      "{name} {fromCity} acaba de realizar una compra.",
      "Alguien {inCity} acaba de hacer un pedido.",
      "{name} finalizó su compra hace unos minutos.",
      "¡Nuevo pedido recibido {fromCity}!",
      "Un cliente {inCity} hizo una compra.",
      "Pedido recibido {fromCity}.",
      "{name} acaba de finalizar su pedido.",
      "Alguien {inCity} completó una compra.",
    ],
  },

  pt: {
    names: ["João", "Maria", "Lucas", "Ana", "Pedro", "Beatriz", "Gabriel", "Sofia", "Bruno", "Carolina", "Rafael", "Larissa"],
    fromCities: [
      "de Lisboa", "do Porto", "de Curitiba", "de São Paulo", "de Brasília",
      "do Rio de Janeiro", "de Salvador", "de Belo Horizonte", "de Recife", "de Fortaleza"
    ],
    inCities: [
      "em Lisboa", "no Porto", "em Curitiba", "em São Paulo", "em Brasília",
      "no Rio de Janeiro", "em Salvador", "em Belo Horizonte", "em Recife", "em Fortaleza"
    ],
    templates: [
      "{name} {fromCity} acabou de fazer uma compra.",
      "Alguém {inCity} acabou de fazer um pedido.",
      "{name} finalizou a compra há alguns minutos.",
      "Novo pedido recebido {fromCity}!",
      "Um cliente {inCity} fez uma compra.",
      "Pedido recebido {fromCity}.",
      "{name} acabou de finalizar o pedido.",
      "Alguém {inCity} concluiu uma compra.",
    ],
  },

  hu: {
    names: ["János", "Anna", "László", "Katalin", "Péter", "Eszter", "Gábor", "Zsófia", "András", "Réka", "Balázs", "Nóra"],
    fromCities: [
      "Budapestről", "Szegedről", "Debrecenből", "Pécsről", "Miskolcról",
      "Győrből", "Szolnokról", "Kecskemétről", "Nyíregyházáról", "Székesfehérvárról"
    ],
    inCities: [
      "Budapesten", "Szegeden", "Debrecenben", "Pécsen", "Miskolcon",
      "Győrben", "Szolnokon", "Kecskeméten", "Nyíregyházán", "Székesfehérváron"
    ],
    templates: [
      "{name} {fromCity} most vásárolt.",
      "Valaki {inCity} most adott le egy rendelést.",
      "Új rendelés érkezett {fromCity}!",
      "Vásárló {inCity} vásárolt.",
      "{name} most fejezte be a vásárlást.",
      "Rendelés {fromCity} beérkezett.",
      "Pár perce teljesült egy vásárlás.",
      "{name} most leadott egy rendelést.",
    ],
  },

  de: {
    names: ["Johann", "Emma", "Lukas", "Sophie", "Leon", "Mia", "Paul", "Lea", "Felix", "Anna", "Jonas", "Laura"],
    fromCities: [
      "aus Berlin", "aus Hamburg", "aus München", "aus Köln", "aus Frankfurt",
      "aus Stuttgart", "aus Düsseldorf", "aus Dresden", "aus Leipzig", "aus Hannover"
    ],
    inCities: [
      "in Berlin", "in Hamburg", "in München", "in Köln", "in Frankfurt",
      "in Stuttgart", "in Düsseldorf", "in Dresden", "in Leipzig", "in Hannover"
    ],
    templates: [
      "{name} {fromCity} hat gerade einen Einkauf abgeschlossen.",
      "Jemand {inCity} hat gerade eine Bestellung aufgegeben.",
      "Neue Bestellung {fromCity} erhalten!",
      "Kunde {inCity} hat einen Einkauf abgeschlossen.",
      "{name} hat soeben ausgecheckt.",
      "Bestellung {fromCity} erhalten.",
      "Vor ein paar Minuten wurde ein Einkauf abgeschlossen.",
      "{name} hat gerade eine Bestellung aufgegeben.",
    ],
  },

  fr: {
    names: ["Jean", "Emma", "Luc", "Sophie", "Pierre", "Marie", "Louis", "Léa", "Thomas", "Julie", "Hugo", "Camille"],
    fromCities: [
      "de Paris", "de Lyon", "de Marseille", "de Toulouse", "de Nice",
      "de Bordeaux", "de Lille", "de Nantes", "de Strasbourg", "de Bruxelles", "de Montréal"
    ],
    inCities: [
      "à Paris", "à Lyon", "à Marseille", "à Toulouse", "à Nice",
      "à Bordeaux", "à Lille", "à Nantes", "à Strasbourg", "à Bruxelles", "à Montréal"
    ],
    templates: [
      "{name} {fromCity} vient de réaliser un achat.",
      "Quelqu’un {inCity} vient de passer une commande.",
      "Nouvelle commande reçue {fromCity} !",
      "Client {inCity} a réalisé un achat.",
      "{name} vient de finaliser sa commande.",
      "Commande reçue {fromCity}.",
      "Un achat a été effectué il y a quelques minutes.",
      "Commande passée {inCity}.",
    ],
  },

  it: {
    names: ["Giovanni", "Emma", "Luca", "Sofia", "Marco", "Giulia", "Matteo", "Chiara", "Alessandro", "Martina", "Leonardo", "Aurora"],
    fromCities: [
      "da Roma", "da Milano", "da Napoli", "da Torino", "da Palermo",
      "da Firenze", "da Bologna", "da Genova", "da Verona", "da Venezia"
    ],
    inCities: [
      "a Roma", "a Milano", "a Napoli", "a Torino", "a Palermo",
      "a Firenze", "a Bologna", "a Genova", "a Verona", "a Venezia"
    ],
    templates: [
      "{name} {fromCity} ha appena effettuato un acquisto.",
      "Qualcuno {inCity} ha appena fatto un ordine.",
      "{name} ha completato un acquisto pochi minuti fa.",
      "Nuovo ordine ricevuto {fromCity}!",
      "Un cliente {inCity} ha effettuato un acquisto.",
      "Ordine ricevuto {fromCity}.",
      "{name} ha appena completato il suo ordine.",
      "Qualcuno {inCity} ha concluso un acquisto.",
    ],
  },

  ru: {
    names: ["Иван", "Анна", "Мария", "Андрей", "Олег", "София", "Алексей", "Елена", "Дмитрий", "Наталья", "Сергей", "Ольга"],
    fromCities: [
      "из Москвы", "из Санкт‑Петербурга", "из Екатеринбурга", "из Новосибирска", "из Казани",
      "из Самары", "из Уфы", "из Ростова-на-Дону", "из Нижнего Новгорода", "из Краснодара"
    ],
    inCities: [
      "в Москве", "в Санкт‑Петербурге", "в Екатеринбурге", "в Новосибирске", "в Казани",
      "в Самаре", "в Уфе", "в Ростове-на-Дону", "в Нижнем Новгороде", "в Краснодаре"
    ],
    templates: [
      "{name} {fromCity} только что совершил(а) покупку.",
      "Кто-то {inCity} только что сделал заказ.",
      "Новый заказ {fromCity}!",
      "Заказ получен {fromCity}.",
      "Клиент {inCity} завершил покупку.",
      "Покупка была оформлена несколько минут назад.",
      "{name} только что оформил(а) заказ.",
      "Заказ {inCity} подтверждён.",
    ],
  },

  zh: {
    names: ["李先生", "王女士", "刘先生", "张女士", "陈先生", "赵女士", "杨先生", "周女士", "吴先生", "郑女士"],
    fromCities: [
      "来自北京", "来自上海", "来自广州", "来自深圳", "来自成都",
      "来自重庆", "来自杭州", "来自武汉", "来自南京", "来自西安"
    ],
    inCities: [
      "在北京", "在上海", "在广州", "在深圳", "在成都",
      "在重庆", "在杭州", "在武汉", "在南京", "在西安"
    ],
    templates: [
      "{name}{inCity}完成了购买。",
      "有人{inCity}刚刚下单。",
      "新订单{fromCity}！",
      "{fromCity}的订单已收到。",
      "{name}刚刚完成结账。",
      "{inCity}的用户完成了购买。",
      "几分钟前完成了一笔购买。",
      "我们已收到{fromCity}的订单。",
    ],
  },

  pl: {
    names: ["Jan", "Anna", "Marek", "Zofia", "Piotr", "Maria", "Paweł", "Katarzyna", "Michał", "Agnieszka", "Tomasz", "Ewa"],
    fromCities: [
      "z Warszawy", "z Krakowa", "z Wrocławia", "z Poznania", "z Gdańska",
      "z Łodzi", "z Bydgoszczy", "ze Szczecina", "z Lublina", "z Katowic"
    ],
    inCities: [
      "w Warszawie", "w Krakowie", "we Wrocławiu", "w Poznaniu", "w Gdańsku",
      "w Łodzi", "w Bydgoszczy", "w Szczecinie", "w Lublinie", "w Katowicach"
    ],
    templates: [
      "{name} {fromCity} właśnie dokonał zakupu.",
      "Ktoś {inCity} właśnie złożył zamówienie.",
      "Nowe zamówienie {fromCity}!",
      "Otrzymano zamówienie {fromCity}.",
      "Klient {inCity} dokonał zakupu.",
      "Zakup zrealizowano kilka minut temu.",
      "{name} właśnie sfinalizował zamówienie.",
      "Zamówienie {inCity} zostało złożone.",
    ],
  },

  tr: {
    names: ["Ahmet", "Elif", "Mehmet", "Zeynep", "Ali", "Ayşe", "Mustafa", "Fatma", "Emre", "Esra", "Can", "Buse"],
    fromCities: [
      "İstanbul'dan", "Ankara'dan", "İzmir'den", "Bursa'dan", "Adana'dan",
      "Antalya'dan", "Konya'dan", "Gaziantep'ten", "Samsun'dan", "Eskişehir'den"
    ],
    inCities: [
      "İstanbul'da", "Ankara'da", "İzmir'de", "Bursa'da", "Adana'da",
      "Antalya'da", "Konya'da", "Gaziantep'te", "Samsun'da", "Eskişehir'de"
    ],
    templates: [
      "{name} {fromCity} az önce alışveriş yaptı.",
      "Birisi {inCity} az önce sipariş verdi.",
      "{fromCity} yeni sipariş alındı!",
      "{inCity} bir müşteri alışveriş yaptı.",
      "{name} az önce siparişini tamamladı.",
      "Birkaç dakika önce bir alışveriş tamamlandı.",
      "Sipariş {fromCity} alındı.",
      "Birisi {inCity} alışverişi tamamladı.",
    ],
  },

  ro: {
    names: ["Ion", "Ana", "Mihai", "Sofia", "Andrei", "Maria", "Alexandru", "Elena", "Cristian", "Ioana", "Radu", "Gabriela"],
    fromCities: [
      "din București", "din Cluj", "din Iași", "din Timișoara", "din Brașov",
      "din Constanța", "din Craiova", "din Sibiu", "din Oradea", "din Pitești"
    ],
    inCities: [
      "în București", "în Cluj", "în Iași", "în Timișoara", "în Brașov",
      "în Constanța", "în Craiova", "în Sibiu", "în Oradea", "în Pitești"
    ],
    templates: [
      "{name} {fromCity} tocmai a finalizat o achiziție.",
      "Cineva {inCity} tocmai a plasat o comandă.",
      "Comandă nouă primită {fromCity}!",
      "Client {inCity} a realizat o achiziție.",
      "{name} tocmai și-a finalizat comanda.",
      "O achiziție a fost realizată acum câteva minute.",
      "Comandă primită {fromCity}.",
      "Comanda {inCity} a fost plasată.",
    ],
  },

  ja: {
    names: ["佐藤さん", "鈴木さん", "高橋さん", "田中さん", "伊藤さん", "山本さん", "小林さん", "吉田さん", "佐々木さん", "山田さん"],
    fromCities: [
      "東京からの", "大阪からの", "名古屋からの", "札幌からの", "福岡からの",
      "神戸からの", "京都からの", "横浜からの", "仙台からの", "広島からの"
    ],
    inCities: [
      "東京で", "大阪で", "名古屋で", "札幌で", "福岡で",
      "神戸で", "京都で", "横浜で", "仙台で", "広島で"
    ],
    templates: [
      "{name}が購入を完了しました。",
      "誰かが{inCity}注文を完了しました。",
      "{fromCity}新しい注文がありました！",
      "{name}がチェックアウトしました。",
      "{inCity}お客様が購入を完了しました。",
      "数分前に購入が完了しました。",
      "{fromCity}注文を受け取りました。",
      "注文が{inCity}行われました。",
    ],
  },

  ko: {
    names: ["김씨", "박씨", "이씨", "최씨", "정씨", "강씨", "조씨", "윤씨", "장씨", "임씨"],
    fromCities: [
      "서울에서", "부산에서", "인천에서", "대구에서", "광주에서",
      "대전에서", "울산에서", "수원에서", "창원에서", "청주에서"
    ],
    inCities: [
      "서울에서", "부산에서", "인천에서", "대구에서", "광주에서",
      "대전에서", "울산에서", "수원에서", "창원에서", "청주에서"
    ],
    templates: [
      "{name}가 구매를 완료했습니다.",
      "누군가가 {inCity} 주문을 완료했습니다.",
      "새로운 주문이 {fromCity} 접수되었습니다!",
      "{inCity} 고객이 구매를 완료했습니다.",
      "{name}가 방금 체크아웃했습니다.",
      "몇 분 전에 구매가 완료되었습니다.",
      "주문이 {fromCity} 접수되었습니다.",
      "{inCity} 주문이 완료되었습니다.",
    ],
  },

  ar: {
    names: ["محمد", "ليلى", "أحمد", "سارة", "خالد", "فاطمة", "يوسف", "ندى", "عمر", "مريم"],
    fromCities: [
      "من القاهرة", "من الرياض", "من دبي", "من جدة", "من الدار البيضاء",
      "من عمان", "من بيروت", "من الجزائر", "من الدوحة", "من تونس"
    ],
    inCities: [
      "في القاهرة", "في الرياض", "في دبي", "في جدة", "في الدار البيضاء",
      "في عمان", "في بيروت", "في الجزائر", "في الدوحة", "في تونس"
    ],
    templates: [
      "{name} أتم عملية الشراء الآن.",
      "شخص {inCity} أتم الطلب الآن.",
      "تم استلام طلب جديد {fromCity}!",
      "عميل {inCity} أتم عملية الشراء.",
      "{name} أنهى طلبه الآن.",
      "تم إكمال عملية شراء قبل دقائق قليلة.",
      "تم استلام الطلب {fromCity}.",
      "تم إتمام عملية شراء {inCity}.",
    ],
  },

  nl: {
    names: ["Jan", "Emma", "Lars", "Sophie", "Pieter", "Anna", "Thomas", "Laura", "Daan", "Lisa", "Bram", "Sara"],
    fromCities: [
      "uit Amsterdam", "uit Rotterdam", "uit Utrecht", "uit Eindhoven", "uit Groningen",
      "uit Maastricht", "uit Den Haag", "uit Nijmegen", "uit Haarlem", "uit Breda"
    ],
    inCities: [
      "in Amsterdam", "in Rotterdam", "in Utrecht", "in Eindhoven", "in Groningen",
      "in Maastricht", "in Den Haag", "in Nijmegen", "in Haarlem", "in Breda"
    ],
    templates: [
      "{name} {fromCity} heeft net een aankoop gedaan.",
      "Iemand {inCity} heeft zojuist een bestelling geplaatst.",
      "Nieuwe bestelling ontvangen {fromCity}!",
      "Klant {inCity} heeft een aankoop gedaan.",
      "{name} heeft zojuist uitgecheckt.",
      "Bestelling ontvangen {fromCity}.",
      "Een paar minuten geleden is er een aankoop voltooid.",
      "Bestelling geplaatst {inCity}.",
    ],
  },

  ge: {
    names: ["გიორგი", "ნინო", "ლუკა", "მარიამი", "დათო", "სალომე", "ირაკლი", "თათია", "სანდრო", "ელენე"],
    fromCities: [
      "თბილისიდან", "ბათუმიდან", "ქუთაისიდან", "რუსთავიდან", "ზუგდიდიდან",
      "გორიდან", "თელავიდან", "ქობულეთიდან", "ფოთიდან", "ახალციხიდან"
    ],
    inCities: [
      "თბილისში", "ბათუმში", "ქუთაისში", "რუსთავში", "ზუგდიდში",
      "გორში", "თელავში", "ქობულეთში", "ფოთში", "ახალციხეში"
    ],
    templates: [
      "{name} {fromCity} ახლახან შეიძინა პროდუქტი.",
      "ვიღაცა {inCity} ახლახან გააკეთა შეკვეთა.",
      "ახალი შეკვეთა მიღებულია {fromCity}!",
      "კლიენტმა {inCity} შეიძინა პროდუქტი.",
      "{name}-მა ახლახან დაასრულა შეკვეთა.",
      "რამდენიმე წუთის წინ შეძენა დასრულდა.",
      "შეკვეთა {fromCity} მიღებულია.",
      "შეკვეთა გაფორმდა {inCity}.",
    ],
  },

  dz: {
    names: ["أحمد", "ليلى", "يوسف", "فاطمة", "خالد", "سارة", "عمر", "نادية", "كريم", "مريم"],
    fromCities: [
      "من الجزائر", "من وهران", "من قسنطينة", "من عنابة", "من سطيف",
      "من بجاية", "من تلمسان", "من باتنة", "من البليدة", "من تيزي وزو"
    ],
    inCities: [
      "في الجزائر", "في وهران", "في قسنطينة", "في عنابة", "في سطيف",
      "في بجاية", "في تلمسان", "في باتنة", "في البليدة", "في تيزي وزو"
    ],
    templates: [
      "{name} أتم عملية الشراء الآن.",
      "شخص {inCity} أتم الطلب الآن.",
      "تم استلام طلب جديد {fromCity}!",
      "عميل {inCity} أتم عملية الشراء.",
      "{name} أنهى طلبه الآن.",
      "تم إكمال عملية شراء قبل دقائق قليلة.",
      "تم استلام الطلب {fromCity}.",
      "تم إتمام عملية شراء {inCity}.",
    ],
  },

  bg: {
    names: ["Иван", "Мария", "Георги", "Елена", "Николай", "Анна", "Димитър", "Виктория", "Петър", "София"],
    fromCities: [
      "от София", "от Пловдив", "от Варна", "от Бургас", "от Русе",
      "от Стара Загора", "от Плевен", "от Благоевград", "от Велико Търново", "от Шумен"
    ],
    inCities: [
      "в София", "в Пловдив", "в Варна", "в Бургас", "в Русе",
      "в Стара Загора", "в Плевен", "в Благоевград", "в Велико Търново", "в Шумен"
    ],
    templates: [
      "{name} {fromCity} току-що направи покупка.",
      "Някой {inCity} току-що направи поръчка.",
      "Нова поръчка получена {fromCity}!",
      "Клиент {inCity} направи покупка.",
      "{name} току-що завърши поръчката.",
      "Покупка беше направена преди няколко минути.",
      "Поръчка получена {fromCity}.",
      "Поръчка {inCity} беше направена.",
    ],
  },
  pl: {
    names: ["Jan", "Emma", "Kuba", "Zofia", "Oliwier", "Ava", "Natan", "Maja", "Łukasz", "Izabela", "Eryk", "Karolina", "Jakub", "Amelia", "Beniamin", "Emilia"],
    fromCities: [
      "z Warszawy", "z Berlina", "z Paryża", "z Madrytu", "z Rzymu", "z Nowego Jorku",
      "z Toronto", "z Sydney", "z Dublina", "z Amsterdamu", "z Wiednia", "z Zurychu"
    ],
    inCities: [
      "w Warszawie", "w Berlinie", "w Paryżu", "w Madrycie", "w Rzymie", "w Nowym Jorku",
      "w Toronto", "w Sydney", "w Dublinie", "w Amsterdamie", "w Wiedniu", "w Zurychu"
    ],
    templates: [
      "{name} {fromCity} właśnie dokonał zakupu.",
      "Ktoś {inCity} właśnie złożył zamówienie.",
      "{name} zakończył zakup kilka minut temu.",
      "Nowe zamówienie otrzymane {fromCity}!",
      "{name} właśnie złożył zamówienie.",
      "Klient {inCity} dokonał zakupu.",
      "{name} właśnie sfinalizował zamówienie.",
      "Zamówienie otrzymane {fromCity}.",
    ],
  },
  
  // Added comprehensive European languages
  cs: {
    names: ["Jan", "Eva", "Petr", "Lucie", "Jiří", "Anna", "Tomáš", "Marie", "Jakub", "Tereza"],
    fromCities: ["z Prahy", "z Brna", "z Ostravy", "z Plzně", "z Liberce", "z Olomouce"],
    inCities: ["v Praze", "v Brně", "v Ostravě", "v Plzni", "v Liberci", "v Olomouci"],
    templates: [
      "{name} {fromCity} právě uskutečnil nákup.",
      "Někdo {inCity} právě vytvořil objednávku.",
      "Nová objednávka přijata {fromCity}!",
      "Zákazník {inCity} uskutečnil nákup.",
      "{name} právě dokončil objednávku.",
      "Objednávka přijata {fromCity}.",
      "{name} dokončil nákup před pár minutami.",
      "Objednávka {inCity} byla vytvořena.",
    ],
  },
  sk: {
    names: ["Ján", "Eva", "Peter", "Lucia", "Marek", "Anna", "Tomáš", "Mária", "Jakub", "Katarína"],
    fromCities: ["z Bratislavy", "z Košíc", "zo Žiliny", "z Prešova", "z Nitry", "z Trnavy"],
    inCities: ["v Bratislave", "v Košiciach", "v Žiline", "v Prešove", "v Nitre", "v Trnave"],
    templates: [
      "{name} {fromCity} práve vykonal nákup.",
      "Niekto {inCity} práve vytvoril objednávku.",
      "Nová objednávka prijatá {fromCity}!",
      "Zákazník {inCity} uskutočnil nákup.",
      "{name} práve dokončil objednávku.",
      "Objednávka prijatá {fromCity}.",
      "Nákup bol dokončený pred pár minútami.",
      "Objednávka {inCity} bola vytvorená.",
    ],
  },
  sl: {
    names: ["Janez", "Ana", "Luka", "Maja", "Matej", "Nina", "Marko", "Sara", "Aljaž", "Tina"],
    fromCities: ["iz Ljubljane", "iz Maribora", "iz Celja", "iz Kranja", "iz Kopra"],
    inCities: ["v Ljubljani", "v Mariboru", "v Celju", "v Kranju", "v Kopru"],
    templates: [
      "{name} {fromCity} je pravkar opravil nakup.",
      "Nekdo {inCity} je pravkar oddal naročilo.",
      "Novo naročilo prejeto {fromCity}!",
      "Stranka {inCity} je opravila nakup.",
      "{name} je pravkar zaključil naročilo.",
      "Naročilo prejeto {fromCity}.",
      "Nakup je bil zaključen pred nekaj minutami.",
      "Naročilo {inCity} je bilo ustvarjeno.",
    ],
  },
  hr: {
    names: ["Ivan", "Ana", "Marko", "Marija", "Petar", "Ivana", "Luka", "Sara", "Nikola", "Maja"],
    fromCities: ["iz Zagreba", "iz Splita", "iz Rijeke", "iz Osijeka", "iz Zadra"],
    inCities: ["u Zagrebu", "u Splitu", "u Rijeci", "u Osijeku", "u Zadru"],
    templates: [
      "{name} {fromCity} upravo je obavio kupnju.",
      "Netko {inCity} upravo je napravio narudžbu.",
      "Nova narudžba zaprimljena {fromCity}!",
      "Kupac {inCity} obavio je kupnju.",
      "{name} upravo je dovršio narudžbu.",
      "Narudžba zaprimljena {fromCity}.",
      "Kupnja je dovršena prije nekoliko minuta.",
      "Narudžba {inCity} je kreirana.",
    ],
  },
  bs: {
    names: ["Amir", "Amina", "Haris", "Lejla", "Emir", "Sara", "Adnan", "Maja", "Nermin", "Selma"],
    fromCities: ["iz Sarajeva", "iz Banje Luke", "iz Tuzle", "iz Zenice", "iz Mostara"],
    inCities: ["u Sarajevu", "u Banjoj Luci", "u Tuzli", "u Zenici", "u Mostaru"],
    templates: [
      "{name} {fromCity} upravo je izvršio kupovinu.",
      "Neko {inCity} upravo je napravio narudžbu.",
      "Nova narudžba primljena {fromCity}!",
      "Kupac {inCity} je obavio kupovinu.",
      "{name} upravo je završio narudžbu.",
      "Narudžba primljena {fromCity}.",
      "Kupovina je obavljena prije nekoliko minuta.",
      "Narudžba {inCity} je kreirana.",
    ],
  },
  sr: {
    names: ["Иван", "Ана", "Марко", "Марија", "Петар", "Ивана", "Лука", "Сара", "Никола", "Маја"],
    fromCities: ["из Београда", "из Новог Сада", "из Ниша", "из Крагујевца", "из Суботице"],
    inCities: ["у Београду", "у Новом Саду", "у Нишу", "у Крагујевцу", "у Суботици"],
    templates: [
      "{name} {fromCity} управо је обавио куповину.",
      "Неко {inCity} управо је направио поруџбину.",
      "Нова поруџбина примљена {fromCity}!",
      "Купац {inCity} је обавио куповину.",
      "{name} управо је завршио поруџбину.",
      "Поруџбина примљена {fromCity}.",
      "Куповина је завршена пре неколико минута.",
      "Поруџбина {inCity} је креирана.",
    ],
  },
  "sr-latn": {
    names: ["Ivan", "Ana", "Marko", "Marija", "Petar", "Ivana", "Luka", "Sara", "Nikola", "Maja"],
    fromCities: ["iz Beograda", "iz Novog Sada", "iz Niša", "iz Kragujevca", "iz Subotice"],
    inCities: ["u Beogradu", "u Novom Sadu", "u Nišu", "u Kragujevcu", "u Subotici"],
    templates: [
      "{name} {fromCity} upravo je obavio kupovinu.",
      "Neko {inCity} upravo je napravio porudžbinu.",
      "Nova porudžbina primljena {fromCity}!",
      "Kupac {inCity} je obavio kupovinu.",
      "{name} upravo je završio porudžbinu.",
      "Porudžbina primljena {fromCity}.",
      "Kupovina je završena pre nekoliko minuta.",
      "Porudžbina {inCity} je kreirana.",
    ],
  },
  mk: {
    names: ["Иван", "Ана", "Марко", "Марија", "Петар", "Елена", "Димитар", "Сара", "Никола", "Тамара"],
    fromCities: ["од Скопје", "од Битола", "од Куманово", "од Прилеп", "од Тетово"],
    inCities: ["во Скопје", "во Битола", "во Куманово", "во Прилеп", "во Тетово"],
    templates: [
      "{name} {fromCity} штотуку изврши купување.",
      "Некој {inCity} штотуку направи нарачка.",
      "Нова нарачка примена {fromCity}!",
      "Купувач {inCity} изврши купување.",
      "{name} штотуку ја заврши нарачката.",
      "Нарачка примена {fromCity}.",
      "Купувањето беше завршено пред неколку минути.",
      "Нарачка {inCity} е креирана.",
    ],
  },
  sq: {
    names: ["Arben", "Elira", "Besnik", "Ariana", "Enis", "Drita", "Luan", "Albana", "Erion", "Teuta"],
    fromCities: ["nga Tirana", "nga Durrësi", "nga Shkodra", "nga Prishtina", "nga Vlora"],
    inCities: ["në Tiranë", "në Durrës", "në Shkodër", "në Prishtinë", "në Vlorë"],
    templates: [
      "{name} {fromCity} sapo bëri një blerje.",
      "Dikush {inCity} sapo bëri një porosi.",
      "Porosi e re e pranuar {fromCity}!",
      "Një klient {inCity} bëri një blerje.",
      "{name} sapo përfundoi porosinë.",
      "Porosia u pranua {fromCity}.",
      "Blerja u përfundua para pak minutash.",
      "Porosia {inCity} u krijua.",
    ],
  },
  el: {
    names: ["Γιάννης", "Μαρία", "Νίκος", "Ελένη", "Κώστας", "Σοφία", "Πέτρος", "Άννα", "Δημήτρης", "Κατερίνα"],
    fromCities: ["από την Αθήνα", "από τη Θεσσαλονίκη", "από την Πάτρα", "από το Ηράκλειο", "από τη Λάρισα"],
    inCities: ["στην Αθήνα", "στη Θεσσαλονίκη", "στην Πάτρα", "στο Ηράκλειο", "στη Λάρισα"],
    templates: [
      "{name} {fromCity} μόλις ολοκλήρωσε μια αγορά.",
      "Κάποιος {inCity} μόλις έκανε μια παραγγελία.",
      "Νέα παραγγελία παραλήφθηκε {fromCity}!",
      "Πελάτης {inCity} έκανε μια αγορά.",
      "{name} μόλις ολοκλήρωσε την παραγγελία του.",
      "Παραγγελία παραλήφθηκε {fromCity}.",
      "Μια αγορά ολοκληρώθηκε πριν από λίγα λεπτά.",
      "Η παραγγελία {inCity} δημιουργήθηκε.",
    ],
  },
  et: {
    names: ["Jaan", "Maarja", "Peeter", "Katrin", "Tanel", "Liis", "Mart", "Anu", "Priit", "Evelin"],
    fromCities: ["Tallinnast", "Tartust", "Narvast", "Pärnust", "Kohtla-Järvelt"],
    inCities: ["Tallinnas", "Tartus", "Narvas", "Pärnus", "Kohtla-Järvel"],
    templates: [
      "{name} {fromCity} just sooritas ostu.",
      "Keegi {inCity} just esitas tellimuse.",
      "Uus tellimus vastu võetud {fromCity}!",
      "Klient {inCity} sooritas ostu.",
      "{name} just lõpetas tellimuse.",
      "Tellimus vastu võetud {fromCity}.",
      "Ost sooritati paar minutit tagasi.",
      "Tellimus {inCity} on loodud.",
    ],
  },
  lv: {
    names: ["Jānis", "Anna", "Edgars", "Laura", "Mārtiņš", "Elīna", "Rihards", "Kristīne", "Artūrs", "Ilze"],
    fromCities: ["no Rīgas", "no Daugavpils", "no Liepājas", "no Jelgavas", "no Ventspils"],
    inCities: ["Rīgā", "Daugavpilī", "Liepājā", "Jelgavā", "Ventspilī"],
    templates: [
      "{name} {fromCity} tikko veica pirkumu.",
      "Kāds {inCity} tikko veica pasūtījumu.",
      "Jauns pasūtījums saņemts {fromCity}!",
      "Klients {inCity} veica pirkumu.",
      "{name} tikko pabeidza pasūtījumu.",
      "Pasūtījums saņemts {fromCity}.",
      "Pirkums tika pabeigts pirms dažām minūtēm.",
      "Pasūtījums {inCity} tika izveidots.",
    ],
  },
  lt: {
    names: ["Jonas", "Agnė", "Mantas", "Eglė", "Tomas", "Ieva", "Paulius", "Gabija", "Lukas", "Laura"],
    fromCities: ["iš Vilniaus", "iš Kauno", "iš Klaipėdos", "iš Šiaulių", "iš Panevėžio"],
    inCities: ["Vilniuje", "Kaune", "Klaipėdoje", "Šiauliuose", "Panevėžyje"],
    templates: [
      "{name} {fromCity} ką tik atliko pirkimą.",
      "Kažkas {inCity} ką tik pateikė užsakymą.",
      "Naujas užsakymas gautas {fromCity}!",
      "Klientas {inCity} atliko pirkimą.",
      "{name} ką tik baigė užsakymą.",
      "Užsakymas gautas {fromCity}.",
      "Pirkimas baigtas prieš kelias minutes.",
      "Užsakymas {inCity} sukurtas.",
    ],
  },
  fi: {
    names: ["Mikko", "Anna", "Jari", "Emilia", "Juha", "Laura", "Antti", "Sanna", "Timo", "Noora"],
    fromCities: ["Helsingistä", "Tampereelta", "Turusta", "Oulusta", "Espoosta"],
    inCities: ["Helsingissä", "Tampereella", "Turussa", "Oulussa", "Espoossa"],
    templates: [
      "{name} {fromCity} teki juuri ostoksen.",
      "Joku {inCity} teki juuri tilauksen.",
      "Uusi tilaus vastaanotettu {fromCity}!",
      "Asiakas {inCity} teki ostoksen.",
      "{name} juuri viimeisteli tilauksen.",
      "Tilaus vastaanotettu {fromCity}.",
      "Ostos tehtiin muutama minuutti sitten.",
      "Tilaus {inCity} luotiin.",
    ],
  },
  sv: {
    names: ["Johan", "Emma", "Lars", "Sofia", "Erik", "Anna", "Karl", "Elin", "Henrik", "Sara"],
    fromCities: ["från Stockholm", "från Göteborg", "från Malmö", "från Uppsala", "från Västerås"],
    inCities: ["i Stockholm", "i Göteborg", "i Malmö", "i Uppsala", "i Västerås"],
    templates: [
      "{name} {fromCity} gjorde precis ett köp.",
      "Någon {inCity} lade precis en beställning.",
      "Ny beställning mottagen {fromCity}!",
      "En kund {inCity} gjorde ett köp.",
      "{name} har precis slutfört sin beställning.",
      "Beställning mottagen {fromCity}.",
      "Ett köp slutfördes för några minuter sedan.",
      "Beställning {inCity} skapades.",
    ],
  },
  da: {
    names: ["Jens", "Emma", "Lars", "Sofia", "Mikkel", "Anna", "Peter", "Ida", "Nikolaj", "Sara"],
    fromCities: ["fra København", "fra Aarhus", "fra Odense", "fra Aalborg", "fra Esbjerg"],
    inCities: ["i København", "i Aarhus", "i Odense", "i Aalborg", "i Esbjerg"],
    templates: [
      "{name} {fromCity} foretog netop et køb.",
      "Nogen {inCity} lagde netop en ordre.",
      "Ny ordre modtaget {fromCity}!",
      "En kunde {inCity} foretog et køb.",
      "{name} har netop afsluttet sin ordre.",
      "Ordre modtaget {fromCity}.",
      "Et køb blev gennemført for få minutter siden.",
      "Ordre {inCity} blev oprettet.",
    ],
  },
  nb: {
    names: ["Per", "Emma", "Lars", "Sofie", "Anders", "Anna", "Ola", "Ingrid", "Henrik", "Kari"],
    fromCities: ["fra Oslo", "fra Bergen", "fra Trondheim", "fra Stavanger", "fra Drammen"],
    inCities: ["i Oslo", "i Bergen", "i Trondheim", "i Stavanger", "i Drammen"],
    templates: [
      "{name} {fromCity} gjorde nettopp et kjøp.",
      "Noen {inCity} la nettopp inn en bestilling.",
      "Ny bestilling mottatt {fromCity}!",
      "En kunde {inCity} gjorde et kjøp.",
      "{name} fullførte nettopp bestillingen.",
      "Bestilling mottatt {fromCity}.",
      "Et kjøp ble fullført for noen minutter siden.",
      "Bestilling {inCity} ble opprettet.",
    ],
  },
  nn: {
    names: ["Per", "Emma", "Lars", "Sofie", "Anders", "Anna", "Ola", "Ingrid", "Henrik", "Kari"],
    fromCities: ["frå Oslo", "frå Bergen", "frå Trondheim", "frå Stavanger", "frå Drammen"],
    inCities: ["i Oslo", "i Bergen", "i Trondheim", "i Stavanger", "i Drammen"],
    templates: [
      "{name} {fromCity} gjorde nettopp eit kjøp.",
      "Nokon {inCity} la nettopp inn ei bestilling.",
      "Ny bestilling motteken {fromCity}!",
      "Ein kunde {inCity} gjorde eit kjøp.",
      "{name} fullførte nettopp bestillinga.",
      "Bestilling motteken {fromCity}.",
      "Eit kjøp vart fullført for nokre minutt sidan.",
      "Bestilling {inCity} vart oppretta.",
    ],
  },
  is: {
    names: ["Jón", "Anna", "Guðmundur", "Guðrún", "Sigurður", "Kristín", "Einar", "Elín", "Björn", "Sara"],
    fromCities: ["frá Reykjavík", "frá Kópavogi", "frá Hafnarfirði", "frá Akureyri", "frá Garðabæ"],
    inCities: ["í Reykjavík", "í Kópavogi", "í Hafnarfirði", "í Akureyri", "í Garðabæ"],
    templates: [
      "{name} {fromCity} keypti nýlega.",
      "Einhver {inCity} lagði inn pöntun.",
      "Ný pöntun móttekin {fromCity}!",
      "Viðskiptavinur {inCity} keypti vöru.",
      "{name} lauk pöntun sinni rétt í þessu.",
      "Pöntun móttekin {fromCity}.",
      "Kaup voru kláruð fyrir fáeinum mínútum.",
      "Pöntun {inCity} var skráð.",
    ],
  },
  ga: {
    names: ["Seán", "Aoife", "Liam", "Saoirse", "Conor", "Niamh", "Patrick", "Ciara", "Cian", "Orla"],
    fromCities: ["ó Bhaile Átha Cliath", "ó Chorcaigh", "ó Luimneach", "ó Ghaillimh", "ó Bhéal Feirste"],
    inCities: ["i mBaile Átha Cliath", "i gCorcaigh", "i Luimneach", "i nGaillimh", "i mBéal Feirste"],
    templates: [
      "Thug {name} {fromCity} ceannach díreach anois.",
      "Rinne duine {inCity} ordú díreach anois.",
      "Ordú nua faighte {fromCity}!",
      "Rinne custaiméir {inCity} ceannach.",
      "Chríochnaigh {name} a ordú díreach anois.",
      "Ordú faighte {fromCity}.",
      "Críochnaíodh ceannach cúpla nóiméad ó shin.",
      "Cruthaíodh ordú {inCity}.",
    ],
  },
  cy: {
    names: ["Dafydd", "Carys", "Rhys", "Megan", "Gareth", "Lowri", "Owain", "Ffion", "Iwan", "Nia"],
    fromCities: ["o Gaerdydd", "o Fangor", "o Abertawe", "o Wrecsam", "o Gasnewydd"],
    inCities: ["yng Nghaerdydd", "yng Nghaerfyrddin", "yn Abertawe", "yn Wrecsam", "yn Gasnewydd"],
    templates: [
      "Gwnaeth {name} {fromCity} bryniant newydd.",
      "Gwnaeth rhywun {inCity} archeb nawr.",
      "Archeb newydd wedi'i dderbyn {fromCity}!",
      "Gwnaeth cwsmer {inCity} bryniant.",
      "Gorffennodd {name} ei archeb newydd nawr.",
      "Archeb wedi'i derbyn {fromCity}.",
      "Cwblhawyd pryniant ychydig funudau yn ôl.",
      "Crëwyd archeb {inCity}.",
    ],
  },
  gd: {
    names: ["Seumas", "Màiri", "Iain", "Eilidh", "Calum", "Anna", "Alasdair", "Isla", "Ruairidh", "Heather"],
    fromCities: ["à Dùn Èideann", "à Glaschu", "à Inbhir Nis", "à Peairt", "à Dùn Dè"],
    inCities: ["ann an Dùn Èideann", "ann an Glaschu", "ann an Inbhir Nis", "ann am Peairt", "ann an Dùn Dè"],
    templates: [
      "Rinn {name} {fromCity} ceannach an-dràsta fhèin.",
      "Rinn cuideigin {inCity} òrdugh an-dràsta.",
      "Òrdugh ùr air fhaighinn {fromCity}!",
      "Rinn neach-ceannach {inCity} ceannach.",
      "Chrìochnaich {name} an t-òrdugh aige/aice.",
      "Chaidh òrdugh fhaighinn {fromCity}.",
      "Chaidh ceannach a chrìochnachadh o chionn beagan mhionaidean.",
      "Chaidh òrdugh {inCity} a chruthachadh.",
    ],
  },
  mt: {
    names: ["Joseph", "Maria", "Liam", "Emma", "Matthew", "Sofia", "Daniel", "Nicole", "Luke", "Giulia"],
    fromCities: ["minn Valletta", "minn Birkirkara", "minn Mosta", "minn Qormi", "minn Żabbar"],
    inCities: ["f’Valletta", "f’Birkirkara", "f’Mosta", "f’Qormi", "f’Żabbar"],
    templates: [
      "{name} {fromCity} għamel xirja issa.",
      "Xi ħadd {inCity} għamel ordni issa.",
      "Ordni ġdida riċevuta {fromCity}!",
      "Klijent {inCity} għamel xirja.",
      "{name} għalaq l-ordni tiegħu/tagħha issa.",
      "Ordni riċevuta {fromCity}.",
      "Xirja ġiet konkluża ftit minuti ilu.",
      "Ordni {inCity} inħolqot.",
    ],
  },
  ca: {
    names: ["Jordi", "Laia", "Marc", "Núria", "Pau", "Clara", "Oriol", "Marta", "Pol", "Anna"],
    fromCities: ["de Barcelona", "de Girona", "de Tarragona", "de Lleida", "de Sabadell"],
    inCities: ["a Barcelona", "a Girona", "a Tarragona", "a Lleida", "a Sabadell"],
    templates: [
      "{name} {fromCity} acaba de fer una compra.",
      "Algú {inCity} acaba de fer una comanda.",
      "Nova comanda rebuda {fromCity}!",
      "Un client {inCity} ha fet una compra.",
      "{name} acaba de finalitzar la seva comanda.",
      "Comanda rebuda {fromCity}.",
      "S’ha completat una compra fa pocs minuts.",
      "S’ha creat una comanda {inCity}.",
    ],
  },
  gl: {
    names: ["Xoán", "María", "Diego", "Lucía", "Manuel", "Noa", "Pablo", "Sara", "Iago", "Antía"],
    fromCities: ["de A Coruña", "de Vigo", "de Ourense", "de Lugo", "de Santiago"],
    inCities: ["na Coruña", "en Vigo", "en Ourense", "en Lugo", "en Santiago"],
    templates: [
      "{name} {fromCity} acaba de realizar unha compra.",
      "Alguén {inCity} acaba de facer un pedido.",
      "Novo pedido recibido {fromCity}!",
      "Un cliente {inCity} realizou unha compra.",
      "{name} acaba de finalizar o seu pedido.",
      "Pedido recibido {fromCity}.",
      "Realizouse unha compra hai uns minutos.",
      "Creouse un pedido {inCity}.",
    ],
  },
  eu: {
    names: ["Iker", "Ane", "Unai", "Nerea", "Mikel", "Leire", "Jon", "Maite", "Asier", "June"],
    fromCities: ["Bilbotik", "Donostiatik", "Gasteiztik", "Iruñetik", "Getxotik"],
    inCities: ["Bilbon", "Donostian", "Gasteizen", "Iruñean", "Getxon"],
    templates: [
      "{name} {fromCity} oraintxe erosketa bat egin du.",
      "Norbaitek {inCity} eskaera egin berri du.",
      "Eskaera berria jaso da {fromCity}!",
      "Bezero batek {inCity} erosketa egin du.",
      "{name}k bere eskaera bukatu berri du.",
      "Eskaera jaso da {fromCity}.",
      "Duela minutu batzuk erosketa bat burutu da.",
      "Eskaera {inCity} sortu da.",
    ],
  },
  uk: {
    names: ["Олена", "Іван", "Марія", "Андрій", "Софія", "Олександр", "Катерина", "Михайло", "Наталія", "Богдан"],
    fromCities: ["з Києва", "зі Львова", "з Харкова", "з Одеси", "з Дніпра"],
    inCities: ["у Києві", "у Львові", "у Харкові", "в Одесі", "у Дніпрі"],
    templates: [
      "{name} {fromCity} щойно оформив(-ла) замовлення.",
      "Хтось {inCity} щойно здійснив покупку.",
      "Нове замовлення {fromCity}!",
      "Отримано замовлення {fromCity}.",
      "Клієнт {inCity} щойно завершив покупку.",
      "Покупку здійснено кілька хвилин тому.",
      "{name} щойно завершив(-ла) покупку.",
      "Замовлення {inCity} підтверджено.",
    ],
  },
  be: {
    names: ["Аляксей", "Марыя", "Іван", "Алена", "Дзмітрый", "Ганна", "Андрэй", "Тацяна", "Сяргей", "Наталля"],
    fromCities: ["з Мінска", "з Гродна", "з Брэста", "з Віцебска", "з Магілёва"],
    inCities: ["у Мінску", "у Гродне", "у Брэсце", "у Віцебску", "у Магілёве"],
    templates: [
      "{name} {fromCity} толькі што зрабіў(ла) пакупку.",
      "Нехта {inCity} толькі што аформіў заказ.",
      "Новы заказ атрыманы {fromCity}!",
      "Кліент {inCity} зрабіў пакупку.",
      "{name} толькі што завяршыў(ла) заказ.",
      "Заказ атрыманы {fromCity}.",
      "Пакупка была зроблена некалькі хвілін таму.",
      "Заказ {inCity} быў аформлены.",
    ],
  },
  ci: {
    names: [
      "Awa", "Yao", "Koffi", "Aminata", "Adama", "Mariam", "Ismaël", "Fanta", "Moussa", "Kouadio"
    ],
    fromCities: [
      "Abidjan", "Bouaké", "Yamoussoukro", "Daloa", "San Pedro", "Korhogo", "Man", "Gagnoa", "Divo", "Abengourou"
    ],
    inCities: [
      "Abidjan", "Bouaké", "Yamoussoukro", "Daloa", "San Pedro", "Korhogo", "Man", "Gagnoa", "Divo", "Abengourou"
    ],
    templates: [
      "{name} de {fromCity} a effectué un achat à {inCity}.",
      "{name} a commandé un produit depuis {fromCity}.",
      "{name} vient de passer une commande à {inCity} !",
      "{name} de {fromCity} a récemment acheté un article.",
      "{name} vient de finaliser son achat à {inCity}."
    ]
  },
};

/* === sales-widget-i18n.js === */
(function () {
  /* ========= СТИЛІ (з першого віджета) ========= */
  const css = `
  .sales-widget-container {
    position: fixed;
    top: 20px;
    z-index: 9999;
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  }
  .sales-widget-container.right { right: 20px; }
  .sales-widget-container.left  { left: 20px; }

  .sale-toast {
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    padding: 10px 12px;
    margin-bottom: 10px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.35);
    opacity: 0;
    transition: transform 0.4s ease, opacity 0.4s ease;
    max-width: 280px;
    font-size: 14px;
    line-height: 1.3;
    transform: translateX(120%);
  }
  .sales-widget-container.left .sale-toast { transform: translateX(-120%); }
  .sale-toast.show { transform: translateX(0); opacity: 1; }

  .sale-toast.dark { background:#1c1c1c; color:#f1f1f1; }
  .sale-toast.light{ background:#fff; color:#333; border:1px solid #ddd; }
  .sale-toast.gold { background:#1c1c1c; color:#f8e08e; border:1px solid #d4af37; }
  .sale-toast.eco  { background:#f9f6f2; color:#2f4f2f; border:1px solid #a3c293; }

  .sale-avatar {
    flex-shrink: 0;
    width: 40px; height: 40px;
    border-radius: 50%;
    background: #fff;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }
  .sale-avatar img { width: 70%; height: 70%; object-fit: contain; }

  .sale-content { flex: 1; min-width: 0; }
  .sale-content strong { font-weight: 600; margin-right: 4px; white-space: nowrap; }
  .sale-time { font-size: 11px; opacity: 0.7; margin-top: 2px; }

  .sale-close { margin-left: 6px; cursor: pointer; font-size: 16px; opacity: 0.6; flex-shrink: 0; }
  .sale-close:hover { opacity: 1; }

  @media (max-width: 480px) {
    .sales-widget-container.right,
    .sales-widget-container.left {
      left: 50% !important;
      right: auto !important;
      transform: translateX(-50%);
      top: 14px;
      width: calc(100% - 32px);
      max-width: 300px;
    }
  }`;

  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);

  /* ========= НАЛАШТУВАННЯ (як у першому) ========= */
  const POSITION    = "right";   // "left" | "right"
  const THEME       = "light";   // "dark" | "light" | "gold" | "eco"
  const FIRST_DELAY = 7000;      // мс — перший показ
  const INTERVAL    = 20000;     // мс — інтервал між тостами
  const DURATION    = 5000;      // мс — скільки показувати тост

  /* ========= ЛОКАЛЬ + "N хв. тому" ========= */
  const rawLang = (document.documentElement.lang || navigator.language || "en").toLowerCase();
  const base = rawLang.split("-")[0];

  // мапа альтернатив до ключів у твоєму i18nData
  const aliasMap = {
    'uk':'ua','ua':'ua','cz':'cs','gr':'el','pt-br':'pt','pt-pt':'pt','es-es':'es','es-mx':'es-mx',
    'no':'nb','sr-latn':'sr-latn'
  };
  function pickLang() {
    if (i18nData[rawLang]) return rawLang;
    if (i18nData[base]) return base;
    const alias = aliasMap[rawLang] || aliasMap[base];
    if (alias && i18nData[alias]) return alias;
    return 'en';
  }
  const lang = pickLang();

  // коротке "N хв. тому" для популярних мов (fallback -> en)
  const agoDict = {
    en: m => `${m} minutes ago`,
    ua: m => `${m} хв. тому`,
    uk: m => `${m} хв. тому`,
    ru: m => `${m} мин. назад`,
    pl: m => `${m} min temu`,
    de: m => `vor ${m} Minuten`,
    fr: m => `il y a ${m} min`,
    it: m => `${m} minuti fa`,
    es: m => `hace ${m} min`,
    'es-mx': m => `hace ${m} min`,
    pt: m => `há ${m} min`,
    nl: m => `${m} minuten geleden`,
    cs: m => `před ${m} min`,
    sk: m => `pred ${m} min`,
    ro: m => `acum ${m} min`,
    hu: m => `${m} perce`,
    bg: m => `преди ${m} мин`,
    el: m => `πριν ${m} λεπτά`,
    tr: m => `${m} dakika önce`,
    lt: m => `prieš ${m} min.`,
    lv: m => `pirms ${m} min`,
    et: m => `${m} minutit tagasi`,
    sl: m => `pred ${m} min`,
    hr: m => `prije ${m} min`
  };
  const ago = agoDict[lang] || agoDict[base] || agoDict.en;

  /* ========= АВАТАРИ (залишив з першого) ========= */
  const avatars = [
  // 📦 Коробка
  "data:image/png;base64,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",
  // 🚚 Грузовичок
  "data:image/png;base64,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"
  ];
  const random = arr => arr[Math.floor(Math.random()*arr.length)];

  /* ========= ХЕЛПЕРИ ТЕКСТУ (використовуємо твій i18nData) ========= */
  function buildMessage() {
    const data = i18nData[lang] || i18nData.en;
    const t = random(data.templates);
    const name = random(data.names);
    const fromCity = random(data.fromCities);
    const inCity = random(data.inCities);
    return t
      .replace("{name}", name)
      .replace("{fromCity}", fromCity)
      .replace("{inCity}", inCity);
  }

  /* ========= КОНТЕЙНЕР ========= */
  const container = document.createElement('div');
  container.className = `sales-widget-container ${POSITION}`;
  document.body.appendChild(container);

  /* ========= ПОКАЗ ТОСТА ========= */
  function showToast(){
    const mins = Math.floor(Math.random()*5)+1;
    const avatar = random(avatars);
    const msg = buildMessage();

    const toast = document.createElement('div');
    toast.className = `sale-toast ${THEME}`;
    toast.innerHTML = `
      <div class="sale-avatar"><img src="${avatar}" alt="icon"></div>
      <div class="sale-content">
        <div class="sale-text">${msg}</div>
        <div class="sale-time">${ago(mins)}</div>
      </div>
      <div class="sale-close" aria-label="Close">&times;</div>
    `;
    container.appendChild(toast);

    requestAnimationFrame(()=> toast.classList.add('show'));
    setTimeout(()=> { toast.classList.remove('show'); toast.remove(); }, DURATION);
    toast.querySelector('.sale-close')?.addEventListener('click', ()=> toast.remove());
  }

  /* ========= СТАРТ ========= */
  setTimeout(showToast, FIRST_DELAY);
  setInterval(showToast, INTERVAL);
})();

