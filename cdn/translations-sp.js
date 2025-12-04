// ==== Translations  ====
    const translations = {
      en: { title: "Thank you", thanks: "Thanks for your order!", contact: "We received your order, it is being processed.", contact2: "We will contact you shortly.", name_placeholder: "Your name", phone_placeholder: "Your phone", update: "Update", correct: "Everything is correct", update_error: "An error occurred while updating. Please try again.", edit: "✏️ Edit", steps: ["Check that your details are correct", "Answer the call from our specialist", "Keep your phone nearby", "The call may come from an unknown number"], notice: "⚠️ Do not miss the call! Please keep your phone nearby and turn off silent mode." },
      ph: { title: "Thank you", thanks: "Thanks for your order!", contact: "We received your order, it is being processed.", contact2: "We will contact you shortly.", name_placeholder: "Your name", phone_placeholder: "Your phone", update: "Update", correct: "Everything is correct", update_error: "An error occurred while updating. Please try again.", edit: "✏️ Edit", steps: ["Check that your details are correct", "Answer the call from our specialist", "Keep your phone nearby", "The call may come from an unknown number"], notice: "⚠️ Do not miss the call! Please keep your phone nearby and turn off silent mode." },
      uk: { title: "Дякуємо", thanks: "Дякуємо за замовлення!", contact: "Ми отримали ваше замовлення, і воно обробляється.", contact2: "Спеціаліст зв’яжеться з вами найближчим часом.", name_placeholder: "Ваше ім'я", phone_placeholder: "Ваш телефон", update: "Оновити", correct: "Все вірно", update_error: "Сталася помилка при оновленні. Спробуйте ще раз.", edit: "✏️ Редагувати", steps: ["Перевірте правильність заповнення", "Відповідайте на дзвінок нашого спеціаліста", "Тримайте телефон поруч", "Дзвінок може бути з невідомого номера"], notice: "⚠️ Не пропустіть дзвінок! Будь ласка, тримайте телефон поруч та вимкніть беззвучний режим." },
      hu: { title: "Köszönjük", thanks: "Köszönjük a rendelését!", contact: "Rendelését megkaptuk, feldolgozás alatt.", contact2: "Hamarosan felvesszük Önnel a kapcsolatot.", name_placeholder: "Neve", phone_placeholder: "Telefonszáma", update: "Frissítés", correct: "Minden rendben", update_error: "Hiba történt a frissítés során. Kérjük, próbálja újra.", edit: "✏️ Szerkesztés", steps: ["Ellenőrizze az adatok helyességét", "Válaszoljon a szakértőnk hívására", "Tartsa a telefont a közelben", "A hívás ismeretlen számról érkezhet"], notice: "⚠️ Ne hagyja ki a hívást! Kérjük, tartsa telefonját kéznél, és kapcsolja ki a némítást." },
      it: { title: "Grazie", thanks: "Grazie per il tuo ordine!", contact: "Abbiamo ricevuto il tuo ordine, è in elaborazione.", contact2: "Ti contatteremo a breve.", name_placeholder: "Il tuo nome", phone_placeholder: "Il tuo telefono", update: "Aggiorna", correct: "Tutto corretto", update_error: "Si è verificato un errore durante l'aggiornamento. Riprova.", edit: "✏️ Modifica", steps: ["Controlla che i tuoi dati siano corretti", "Rispondi alla chiamata del nostro specialista", "Tieni il telefono vicino", "La chiamata può provenire da un numero sconosciuto"], notice: "⚠️ Non perdere la chiamata! Tieni il telefono vicino e disattiva la modalità silenziosa." },
      pt: { title: "Obrigado", thanks: "Obrigado pela sua encomenda!", contact: "Recebemos a sua encomenda, está a ser processada.", contact2: "Entraremos em contacto em breve.", name_placeholder: "O seu nome", phone_placeholder: "O seu telefone", update: "Atualizar", correct: "Está tudo correto", update_error: "Ocorreu um erro ao atualizar. Tente novamente.", edit: "✏️ Editar", steps: ["Verifique se os seus dados estão corretos", "Atenda a chamada do nosso especialista", "Mantenha o telefone por perto", "A chamada pode vir de um número desconhecido"], notice: "⚠️ Não perca a chamada! Mantenha o telefone por perto e desligue o modo silencioso." },
      nl: { title: "Dank u", thanks: "Bedankt voor uw bestelling!", contact: "We hebben uw bestelling ontvangen, deze wordt verwerkt.", contact2: "We nemen binnenkort contact met u op.", name_placeholder: "Uw naam", phone_placeholder: "Uw telefoon", update: "Bijwerken", correct: "Alles is correct", update_error: "Er is een fout opgetreden bij het bijwerken. Probeer het opnieuw.", edit: "✏️ Bewerken", steps: ["Controleer of uw gegevens juist zijn", "Beantwoord de oproep van onze specialist", "Houd uw telefoon in de buurt", "De oproep kan van een onbekend nummer komen"], notice: "⚠️ Mis het telefoontje niet! Houd uw telefoon bij de hand en zet de stille modus uit." },
      cs: { title: "Děkujeme", thanks: "Děkujeme za vaši objednávku!", contact: "Vaši objednávku jsme obdrželi, zpracovává se.", contact2: "Brzy vás budeme kontaktovat.", name_placeholder: "Vaše jméno", phone_placeholder: "Váš telefon", update: "Aktualizovat", correct: "Vše je správně", update_error: "Při aktualizaci došlo k chybě. Zkuste to znovu.", edit: "✏️ Upravit", steps: ["Zkontrolujte, že vaše údaje jsou správné", "Odpovězte na hovor našeho specialisty", "Mějte telefon poblíž", "Hovor může přijít z neznámého čísla"], notice: "⚠️ Nezmeškejte hovor! Mějte telefon poblíž a vypněte tichý režim." },
      sk: { title: "Ďakujeme", thanks: "Ďakujeme za vašu objednávku!", contact: "Vašu objednávku sme dostali, spracováva sa.", contact2: "Čoskoro vás budeme kontaktovať.", name_placeholder: "Vaše meno", phone_placeholder: "Váš telefón", update: "Aktualizovať", correct: "Všetko je správne", update_error: "Pri aktualizácii došlo k chybe. Skúste znova.", edit: "✏️ Upraviť", steps: ["Skontrolujte, či sú vaše údaje správne", "Odpovedzte na hovor nášho špecialistu", "Majte telefón pri sebe", "Hovor môže prísť z neznámeho čísla"], notice: "⚠️ Nezmeškajte hovor! Majte telefón pri sebe a vypnite tichý režim." },
      sl: { title: "Hvala", thanks: "Hvala za vaše naročilo!", contact: "Vaše naročilo smo prejeli, je v obdelavi.", contact2: "Kmalu vas bomo kontaktirali.", name_placeholder: "Vaše ime", phone_placeholder: "Vaša telefonska številka", update: "Posodobi", correct: "Vse je pravilno", update_error: "Pri posodobitvi je prišlo do napake. Poskusite znova.", edit: "✏️ Uredi", steps: ["Preverite, ali so vaši podatki pravilni", "Odgovorite na klic našega strokovnjaka", "Imejte telefon pri sebi", "Klic lahko pride iz neznane številke"], notice: "⚠️ Ne zamudite klica! Imejte telefon pri sebi in izklopite tihi način." },
      hr: { title: "Hvala", thanks: "Hvala na vašoj narudžbi!", contact: "Vašu narudžbu smo zaprimili, u obradi je.", contact2: "Uskoro ćemo vas kontaktirati.", name_placeholder: "Vaše ime", phone_placeholder: "Vaš telefon", update: "Ažuriraj", correct: "Sve je ispravno", update_error: "Došlo je do pogreške pri ažuriranju. Pokušajte ponovno.", edit: "✏️ Uredi", steps: ["Provjerite jesu li vaši podaci točni", "Odgovorite na poziv našeg stručnjaka", "Držite telefon u blizini", "Poziv može doći s nepoznatog broja"], notice: "⚠️ Ne propustite poziv! Držite telefon pri ruci i isključite tihi način." },
      sr: { title: "Hvala", thanks: "Hvala na vašoj porudžbini!", contact: "Vaša porudžbina je primljena, u obradi je.", contact2: "Uskoro ćemo vas kontaktirati.", name_placeholder: "Vaše ime", phone_placeholder: "Vaš telefon", update: "Ažuriraj", correct: "Sve je tačno", update_error: "Došlo je do greške pri ažuriranju. Pokušajte ponovo.", edit: "✏️ Izmeni", steps: ["Proverite da li su vaši podaci tačni", "Odgovorite na poziv našeg stručnjaka", "Držite телефон blizu", "Poziv može doći sa nepoznatog broja"], notice: "⚠️ Ne propustite poziv! Držite telefon blizu i isključite tihi režim." },
      bs: { title: "Hvala", thanks: "Hvala na vašoj narudžbi!", contact: "Vaša narudžba je primljena, u obradi je.", contact2: "Uskoro ćemo vas kontaktirati.", name_placeholder: "Vaše ime", phone_placeholder: "Vaš telefon", update: "Ažuriraj", correct: "Sve je tačno", update_error: "Došlo je do greške prilikom ažuriranja. Pokušajte ponovo.", edit: "✏️ Uredi", steps: ["Provjerite da li su vaši podaci tačni", "Odgovorite na poziv našeg stručnjaka", "Držite telefon blizu", "Poziv može doći sa nepoznatog broja"], notice: "⚠️ Ne propustite poziv! Držite telefon blizu i isključite tihi režim." },
      ro: { title: "Mulțumim", thanks: "Vă mulțumim pentru comandă!", contact: "Am primit comanda dvs., este în curs de procesare.", contact2: "Vă vom contacta în curând.", name_placeholder: "Numele dvs.", phone_placeholder: "Telefonul dvs.", update: "Actualizați", correct: "Totul este corect", update_error: "A apărut o eroare la actualizare. Încercați din nou.", edit: "✏️ Editați", steps: ["Verificați că datele sunt corecte", "Răspundeți la apelul specialistului nostru", "Țineți telefonul aproape", "Apelul poate veni de la un număr necunoscut"], notice: "⚠️ Nu ratați apelul! Vă rugăm să țineți telefonul aproape și să dezactivați modul silențios." },
      el: { title: "Ευχαριστούμε", thanks: "Σας ευχαριστούμε για την παραγγελία σας!", contact: "Λάβαμε την παραγγελία σας, βρίσκεται σε επεξεργασία.", contact2: "Θα επικοινωνήσουμε σύντομα μαζί σας.", name_placeholder: "Το όνομά σας", phone_placeholder: "Το τηλέφωνό σας", update: "Ενημέρωση", correct: "Όλα είναι σωστά", update_error: "Παρουσιάστηκε σφάλμα κατά την ενημέρωση. Δοκιμάστε ξανά.", edit: "✏️ Επεξεργασία", steps: ["Ελέγξτε ότι τα στοιχεία σας είναι σωστά", "Απαντήστε στην κλήση του ειδικού μας", "Κρατήστε το τηλέφωνο κοντά σας", "Η κλήση μπορεί να προέρχεται από άγνωστο αριθμό"], notice: "⚠️ Μην χάσετε την κλήση! Κρατήστε το τηλέφωνο κοντά και απενεργοποιήστε τη σίγαση." },
      fi: { title: "Kiitos", thanks: "Kiitos tilauksestasi!", contact: "Olemme vastaanottaneet tilauksesi, se on käsittelyssä.", contact2: "Otamme sinuun pian yhteyttä.", name_placeholder: "Nimesi", phone_placeholder: "Puhelimesi", update: "Päivitä", correct: "Kaikki on oikein", update_error: "Päivityksessä tapahtui virhe. Yritä uudelleen.", edit: "✏️ Muokkaa", steps: ["Tarkista että tietosi ovat oikein", "Vastaa asiantuntijamme puheluun", "Pidä puhelin lähellä", "Puhelu voi tulla tuntemattomasta numerosta"], notice: "⚠️ Älä missaa puhelua! Pidä puhelin lähellä ja poista äänetön tila käytöstä." },
      sv: { title: "Tack", thanks: "Tack för din beställning!", contact: "Vi har mottagit din beställning, den behandlas.", contact2: "Vi kontaktar dig inom kort.", name_placeholder: "Ditt namn", phone_placeholder: "Din telefon", update: "Uppdatera", correct: "Allt stämmer", update_error: "Ett fel uppstod vid uppdatering. Försök igen.", edit: "✏️ Redigera", steps: ["Kontrollera att dina uppgifter stämmer", "Svara på samtalet från vår specialist", "Ha telefonen nära till hands", "Samtalet kan komma från ett okänt nummer"], notice: "⚠️ Missa inte samtalet! Ha telefonen nära och stäng av ljudlöst läge." },
      da: { title: "Tak", thanks: "Tak for din ordre!", contact: "Vi har modtaget din ordre, den behandles.", contact2: "Vi kontakter dig snarest.", name_placeholder: "Dit navn", phone_placeholder: "Din telefon", update: "Opdater", correct: "Alt er korrekt", update_error: "Der opstod en fejl under opdateringen. Prøv igen.", edit: "✏️ Rediger", steps: ["Tjek at dine oplysninger er korrekte", "Besvar opkaldet fra vores specialist", "Hold din telefon i nærheden", "Opkaldet kan komme fra et ukendt nummer"], notice: "⚠️ Gå ikke glip af opkaldet! Hold din telefon i nærheden og slå lydløs fra." },
      no: { title: "Takk", thanks: "Takk for bestillingen!", contact: "Vi har mottatt bestillingen din, den behandles.", contact2: "Vi kontakter deg snart.", name_placeholder: "Navnet ditt", phone_placeholder: "Telefonen din", update: "Oppdater", correct: "Alt er riktig", update_error: "Det oppsto en feil under oppdateringen. Prøv igjen.", edit: "✏️ Rediger", steps: ["Sjekk at opplysningene dine er riktige", "Svar på samtalen fra vår spesialist", "Hold telefonen i nærheten", "Samtalen kan komme fra et ukjent nummer"], notice: "⚠️ Ikke gå glipp av samtalen! Hold telefonen i nærheten og slå av stillemodus." },
      is: { title: "Takk", thanks: "Takk fyrir pöntunina!", contact: "Við höfum móttekið pöntunina, hún er í vinnslu.", contact2: "Við höfum samband fljótlega.", name_placeholder: "Nafnið þitt", phone_placeholder: "Síminn þinn", update: "Uppfæra", correct: "Allt er rétt", update_error: "Villa kom upp við uppfærslu. Reyndu aftur.", edit: "✏️ Breyta", steps: ["Athugaðu að upplýsingarnar þínar séu réttar", "Svaraðu símtali frá sérfræðingi okkar", "Hafðu símann nálægt þér", "Símtalið gæti komið frá óþekktu númeri"], notice: "⚠️ Ekki missa af símtalinu! Hafðu símann nálægt þér og slökktu á hljóðlausum ham." },
      et: { title: "Aitäh", thanks: "Täname tellimuse eest!", contact: "Oleme teie tellimuse kätte saanud, see on töötlemisel.", contact2: "Võtame teiega peagi ühendust.", name_placeholder: "Teie nimi", phone_placeholder: "Teie telefon", update: "Värskenda", correct: "Kõik on õige", update_error: "Värskendamisel tekkis viga. Palun proovige uuesti.", edit: "✏️ Muuda", steps: ["Kontrollige, et teie andmed on õiged", "Vastake meie spetsialisti kõnele", "Hoidke telefon käepärast", "Kõne võib tulla tundmatult numbrilt"], notice: "⚠️ Ärge jätke kõnet vahele! Hoidke telefon käepärast ja lülitage välja vaikne režiim." },
      lv: { title: "Paldies", thanks: "Paldies par pasūtījumu!", contact: "Mēs esam saņēmuši jūsu pasūtījumu, tas tiek apstrādāts.", contact2: "Mēs ar jums drīzumā sazināsimies.", name_placeholder: "Jūsu vārds", phone_placeholder: "Jūsu tālrunis", update: "Atjaunināt", correct: "Viss ir pareizi", update_error: "Atjauninot radās kļūda. Lūdzu, mēģiniet vēlreiz.", edit: "✏️ Rediģēt", steps: ["Pārbaudiet, vai jūsu dati ir pareizi", "Atbildiet uz mūsu speciālista zvanu", "Turiet tālruni tuvumā", "Zvans var nākt no nezināma numura"], notice: "⚠️ Nepalaidiet garām zvanu! Lūdzu, turiet tālruni tuvumā un izslēdziet kluso režīmu." },
      lt: { title: "Ačiū", thanks: "Ačiū už jūsų užsakymą!", contact: "Mes gavome jūsų užsakymą, jis apdorojamas.", contact2: "Netrukus su jumis susisieksime.", name_placeholder: "Jūsų vardas", phone_placeholder: "Jūsų telefonas", update: "Atnaujinti", correct: "Viskas teisinga", update_error: "Atnaujinant įvyko klaida. Bandykite dar kartą.", edit: "✏️ Redaguoti", steps: ["Patikrinkite, ar jūsų duomenys teisingi", "Atsakykite į mūsų specialisto skambutį", "Laikykite telefoną šalia", "Skambutis gali būti iš nežinomo numerio"], notice: "⚠️ Nepraleiskite skambučio! Laikykite telefoną šalia ir išjunkite tylos režimą." },
      ru: { title: "Спасибо", thanks: "Спасибо за заказ!", contact: "Мы получили ваш заказ, он обрабатывается.", contact2: "Мы свяжемся с вами в ближайшее время.", name_placeholder: "Ваше имя", phone_placeholder: "Ваш телефон", update: "Обновить", correct: "Всё верно", update_error: "Произошла ошибка при обновлении. Попробуйте еще раз.", edit: "✏️ Редактировать", steps: ["Проверьте правильность данных", "Ответьте на звонок нашего специалиста", "Держите телефон рядом", "Звонок может поступить с неизвестного номера"], notice: "⚠️ Не пропустите звонок! Пожалуйста, держите телефон рядом и выключите беззвучный режим." },
      pl: { title: "Dziękujemy", thanks: "Dziękujemy za zamówienie!", contact: "Otrzymaliśmy twoje zamówienie, jest przetwarzane.", contact2: "Skontaktujemy się z tobą wkrótce.", name_placeholder: "Twoje imię", phone_placeholder: "Twój telefon", update: "Aktualizuj", correct: "Wszystko się zgadza", update_error: "Wystąpił błąd podczas aktualizacji. Spróbuj ponownie.", edit: "✏️ Edytuj", steps: ["Sprawdź, czy twoje dane są poprawne", "Odbierz telefon od naszego specjalisty", "Trzymaj telefon w pobliżu", "Telefon może zadzwonić z nieznanego numeru"], notice: "⚠️ Nie przegap połączenia! Trzymaj telefon w pobliżu i wyłącz tryb cichy." },
      de: { title: "Danke", thanks: "Vielen Dank für Ihre Bestellung!", contact: "Wir haben Ihre Bestellung erhalten, sie wird bearbeitet.", contact2: "Wir werden Sie in Kürze kontaktieren.", name_placeholder: "Ihr Name", phone_placeholder: "Ihre Telefonnummer", update: "Aktualisieren", correct: "Alles korrekt", update_error: "Beim Aktualisieren ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.", edit: "✏️ Bearbeiten", steps: ["Überprüfen Sie, ob Ihre Daten korrekt sind", "Beantworten Sie den Anruf unseres Spezialisten", "Halten Sie Ihr Telefon in der Nähe", "Der Anruf kann von einer unbekannten Nummer kommen"], notice: "⚠️ Verpassen Sie den Anruf nicht! Halten Sie Ihr Telefon in der Nähe und deaktivieren Sie den Lautlosmodus." },
      fr: { title: "Merci", thanks: "Merci pour votre commande!", contact: "Nous avons reçu votre commande, elle est en cours de traitement.", contact2: "Nous vous contacterons sous peu.", name_placeholder: "Votre nom", phone_placeholder: "Votre téléphone", update: "Mettre à jour", correct: "Tout est correct", update_error: "Une erreur s'est produite lors de la mise à jour. Veuillez réessayer.", edit: "✏️ Modifier", steps: ["Vérifiez que vos informations sont correctes", "Répondez à l'appel de notre spécialiste", "Gardez votre téléphone à proximité", "L'appel peut provenir d'un numéro inconnu"], notice: "⚠️ Ne manquez pas l'appel ! Veuillez garder votre téléphone à proximité et désactiver le mode silencieux." },
      ci: { title: "Merci", thanks: "Merci pour votre commande!", contact: "Nous avons reçu votre commande, elle est en cours de traitement.", contact2: "Nous vous contacterons sous peu.", name_placeholder: "Votre nom", phone_placeholder: "Votre téléphone", update: "Mettre à jour", correct: "Tout est correct", update_error: "Une erreur s'est produite lors de la mise à jour. Veuillez réessayer.", edit: "✏️ Modifier", steps: ["Vérifiez que vos informations sont correctes", "Répondez à l'appel de notre spécialiste", "Gardez votre téléphone à proximité", "L'appel peut provenir d'un numéro inconnu"], notice: "⚠️ Ne manquez pas l'appel ! Veuillez garder votre téléphone à proximité et désactiver le mode silencieux." },
              in: { 
        title: "धन्यवाद", thanks: "आपके आदेश के लिए धन्यवाद!", 
        contact: "हमने आपका आदेश प्राप्त कर लिया है, यह संसाधित किया जा रहा है।", 
        contact2: "हम आपसे जल्द ही संपर्क करेंगे।", 
        name_placeholder: "आपका नाम", phone_placeholder: "आपका फोन", 
        update: "अपडेट करें", correct: "सब कुछ सही है", 
        update_error: "अपडेट करते समय एक त्रुटि हुई। कृपया पुनः प्रयास करें।", 
        edit: "✏️ संपादित करें", 
        steps: ["जांचें कि आपकी जानकारी सही है", "हमारे विशेषज्ञ के कॉल का जवाब दें", "फोन पास रखें", "कॉल अज्ञात नंबर से आ सकता है"], 
        notice: "⚠️ कॉल न चूकें! कृपया फोन पास रखें और साइलेंट मोड बंद करें।" 
      },

      rs: { 
        title: "Hvala", thanks: "Hvala na vašoj porudžbini!", 
        contact: "Vaša porudžbina je primljena i obrađuje se.", 
        contact2: "Uskoro ćemo vas kontaktirati.", 
        name_placeholder: "Vaše ime", phone_placeholder: "Vaš telefon", 
        update: "Ažuriraj", correct: "Sve je tačno", 
        update_error: "Greška prilikom ažuriranja. Pokušajte ponovo.", 
        edit: "✏️ Izmeni", 
        steps: ["Proverite tačnost podataka", "Odgovorite na poziv našeg stručnjaka", "Držite telefon blizu", "Poziv može doći sa nepoznatog broja"], 
        notice: "⚠️ Ne propustite poziv! Držite telefon blizu i isključite tihi režim."
      },

      ms: { 
        title: "Terima kasih", thanks: "Terima kasih atas pesanan anda!", 
        contact: "Kami telah menerima pesanan anda, ia sedang diproses.", 
        contact2: "Kami akan menghubungi anda tidak lama lagi.", 
        name_placeholder: "Nama anda", phone_placeholder: "Telefon anda", 
        update: "Kemas kini", correct: "Semuanya betul", 
        update_error: "Ralat berlaku semasa mengemas kini. Sila cuba lagi.", 
        edit: "✏️ Edit", 
        steps: ["Pastikan maklumat anda betul", "Jawab panggilan pakar kami", "Pastikan telefon anda berdekatan", "Panggilan mungkin dari nombor tidak dikenal"], 
        notice: "⚠️ Jangan terlepas panggilan! Pastikan telefon dekat dan nyahaktifkan mod senyap."
      },

      zh_CN: {
        title: "谢谢", thanks: "感谢您的订单！",
        contact: "我们已经收到您的订单，正在处理。",
        contact2: "我们会尽快与您联系。",
        name_placeholder: "您的姓名", phone_placeholder: "您的电话",
        update: "更新", correct: "一切正确",
        update_error: "更新时发生错误。请重试。",
        edit: "✏️ 编辑",
        steps: ["检查您的信息是否正确", "接听我们专家的电话", "请随身携带手机", "电话可能来自未知号码"],
        notice: "⚠️ 请不要错过来电！请将手机放在身边并关闭静音模式。"
      },

      zh_TW: {
        title: "謝謝", thanks: "感謝您的訂單！",
        contact: "我們已收到您的訂單，正在處理中。",
        contact2: "我們將儘快與您聯繫。",
        name_placeholder: "您的姓名", phone_placeholder: "您的電話",
        update: "更新", correct: "一切正確",
        update_error: "更新時發生錯誤。請再試一次。",
        edit: "✏️ 編輯",
        steps: ["請確認您的資料正確", "請接聽我們專家的來電", "請將手機放在身邊", "來電可能來自未知號碼"],
        notice: "⚠️ 別錯過來電！請保持手機在身邊並關閉靜音模式。"
      },

      ja: {
        title: "ありがとうございます", thanks: "ご注文ありがとうございます！",
        contact: "ご注文を受け付けました。ただいま処理中です。",
        contact2: "担当者よりまもなくご連絡いたします。",
        name_placeholder: "お名前", phone_placeholder: "お電話番号",
        update: "更新", correct: "すべて正しい",
        update_error: "更新中にエラーが発生しました。再試行してください。",
        edit: "✏️ 編集",
        steps: ["情報が正しいか確認してください", "担当者からの電話に出てください", "電話を手元に置いてください", "電話は非通知番号の場合があります"],
        notice: "⚠️ 電話を見逃さないでください！サイレントモードを解除して近くに置いてください。"
      },

      ko: {
        title: "감사합니다", thanks: "주문해 주셔서 감사합니다!",
        contact: "주문을 성공적으로 접수했습니다. 처리 중입니다.",
        contact2: "곧 연락드리겠습니다.",
        name_placeholder: "이름", phone_placeholder: "전화번호",
        update: "업데이트", correct: "모두 정확합니다",
        update_error: "업데이트 중 오류가 발생했습니다. 다시 시도하세요.",
        edit: "✏️ 수정",
        steps: ["정보가 정확한지 확인하세요", "전문가의 전화를 받아주세요", "휴대폰을 가까이 두세요", "전화는 비공개 번호일 수 있습니다"],
        notice: "⚠️ 전화를 놓치지 마세요! 휴대폰을 가까이 두고 무음 모드를 해제하세요."
      },

      ar: {
        title: "شكراً", thanks: "شكراً لطلبك!",
        contact: "لقد استلمنا طلبك، وهو قيد المعالجة.",
        contact2: "سنتواصل معك قريباً.",
        name_placeholder: "اسمك", phone_placeholder: "هاتفك",
        update: "تحديث", correct: "كل شيء صحيح",
        update_error: "حدث خطأ أثناء التحديث. يرجى المحاولة مرة أخرى.",
        edit: "✏️ تعديل",
        steps: ["تحقق من صحة معلوماتك", "أجب على مكالمة المختص", "أبقِ هاتفك بالقرب منك", "قد تكون المكالمة من رقم غير معروف"],
        notice: "⚠️ لا تفوّت المكالمة! يرجى إبقاء هاتفك قريباً وإيقاف الوضع الصامت."
      },

      tr: {
        title: "Teşekkürler", thanks: "Siparişiniz için teşekkürler!",
        contact: "Siparişinizi aldık, işleniyor.",
        contact2: "Sizinle yakında iletişime geçeceğiz.",
        name_placeholder: "Adınız", phone_placeholder: "Telefonunuz",
        update: "Güncelle", correct: "Her şey doğru",
        update_error: "Güncelleme sırasında hata oluştu. Lütfen tekrar deneyin.",
        edit: "✏️ Düzenle",
        steps: ["Bilgilerinizin doğru olduğundan emin olun", "Uzmanımızın çağrısına cevap verin", "Telefonunuzu yakın tutun", "Arama bilinmeyen bir numaradan olabilir"],
        notice: "⚠️ Aramayı kaçırmayın! Telefonunuzu yakın tutun ve sessiz modu kapatın."
      },

      id: {
        title: "Terima kasih", thanks: "Terima kasih atas pesanan Anda!",
        contact: "Kami telah menerima pesanan Anda dan sedang diproses.",
        contact2: "Kami akan segera menghubungi Anda.",
        name_placeholder: "Nama Anda", phone_placeholder: "Telepon Anda",
        update: "Perbarui", correct: "Semua benar",
        update_error: "Terjadi kesalahan saat memperbarui. Coba lagi.",
        edit: "✏️ Edit",
        steps: ["Periksa apakah data Anda benar", "Jawab panggilan dari spesialis kami", "Jaga telepon tetap dekat", "Panggilan mungkin berasal dari nomor tak dikenal"],
        notice: "⚠️ Jangan lewatkan panggilan! Jaga telepon dekat dan matikan mode senyap."
      },

      vi: {
        title: "Cảm ơn", thanks: "Cảm ơn bạn đã đặt hàng!",
        contact: "Chúng tôi đã nhận được đơn hàng của bạn và đang xử lý.",
        contact2: "Chúng tôi sẽ liên hệ với bạn sớm.",
        name_placeholder: "Tên của bạn", phone_placeholder: "Số điện thoại",
        update: "Cập nhật", correct: "Mọi thứ đều đúng",
        update_error: "Đã xảy ra lỗi khi cập nhật. Vui lòng thử lại.",
        edit: "✏️ Chỉnh sửa",
        steps: ["Kiểm tra thông tin của bạn", "Trả lời cuộc gọi từ chuyên gia của chúng tôi", "Giữ điện thoại bên cạnh", "Cuộc gọi có thể đến từ số lạ"],
        notice: "⚠️ Đừng bỏ lỡ cuộc gọi! Giữ điện thoại gần và tắt chế độ im lặng."
      },

      th: {
        title: "ขอบคุณ", thanks: "ขอบคุณสำหรับคำสั่งซื้อ!",
        contact: "เราได้รับคำสั่งซื้อของคุณแล้ว กำลังดำเนินการอยู่",
        contact2: "เราจะติดต่อคุณในไม่ช้า",
        name_placeholder: "ชื่อของคุณ", phone_placeholder: "โทรศัพท์ของคุณ",
        update: "อัปเดต", correct: "ทุกอย่างถูกต้อง",
        update_error: "เกิดข้อผิดพลาดในการอัปเดต โปรดลองอีกครั้ง",
        edit: "✏️ แก้ไข",
        steps: ["ตรวจสอบข้อมูลให้ถูกต้อง", "รับสายจากผู้เชี่ยวชาญของเรา", "เก็บโทรศัพท์ไว้ใกล้ตัว", "สายอาจมาจากเบอร์ที่ไม่รู้จัก"],
        notice: "⚠️ ห้ามพลาดสาย! เก็บโทรศัพท์ไว้ใกล้และปิดโหมดเงียบ"
      },

      bn: {
        title: "ধন্যবাদ", thanks: "আপনার অর্ডারের জন্য ধন্যবাদ!",
        contact: "আমরা আপনার অর্ডার পেয়েছি, এটি প্রক্রিয়াধীন রয়েছে।",
        contact2: "আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
        name_placeholder: "আপনার নাম", phone_placeholder: "আপনার ফোন",
        update: "আপডেট", correct: "সবকিছু ঠিক আছে",
        update_error: "আপডেট করার সময় একটি ত্রুটি ঘটেছে। আবার চেষ্টা করুন।",
        edit: "✏️ সম্পাদনা",
        steps: ["আপনার তথ্য সঠিক কিনা যাচাই করুন", "আমাদের বিশেষজ্ঞের কলের উত্তর দিন", "ফোনটি কাছে রাখুন", "কলটি অজানা নম্বর থেকে আসতে পারে"],
        notice: "⚠️ কলটি মিস করবেন না! ফোনটি কাছে রাখুন এবং সাইলেন্ট মোড বন্ধ করুন।"
      },

      ur: {
        title: "شکریہ", thanks: "آپ کے آرڈر کا شکریہ!",
        contact: "ہمیں آپ کا آرڈر مل گیا ہے، یہ پراسیس ہو رہا ہے۔",
        contact2: "ہم جلد ہی آپ سے رابطہ کریں گے۔",
        name_placeholder: "آپ کا نام", phone_placeholder: "آپ کا فون",
        update: "اپ ڈیٹ کریں", correct: "سب درست ہے",
        update_error: "اپ ڈیٹ کے دوران خرابی ہوئی۔ دوبارہ کوشش کریں۔",
        edit: "✏️ ترمیم کریں",
        steps: ["اپنی معلومات کی درستگی چیک کریں", "ہمارے ماہر کی کال کا جواب دیں", "فون پاس رکھیں", "کال کسی انجان نمبر سے آ سکتی ہے"],
        notice: "⚠️ کال مس نہ کریں! براہ کرم فون قریب رکھیں اور سائلنٹ موڈ بند کریں۔"
      },

      he: {
        title: "תודה", thanks: "תודה על ההזמנה שלך!",
        contact: "קיבלנו את ההזמנה שלך, היא בטיפול.",
        contact2: "ניצור איתך קשר בקרוב.",
        name_placeholder: "השם שלך", phone_placeholder: "הטלפון שלך",
        update: "עדכן", correct: "הכול נכון",
        update_error: "אירעה שגיאה בעדכון. נסה שוב.",
        edit: "✏️ עריכה",
        steps: ["בדוק שהמידע שלך נכון", "ענה לשיחת המומחה שלנו", "השאר את הטלפון בקרבתך", "השיחה עשויה להגיע ממספר לא מוכר"],
        notice: "⚠️ אל תפספס את השיחה! השאר את הטלפון לידך וכבה מצב שקט."
      },

      fa: {
        title: "متشکرم", thanks: "از سفارش شما متشکریم!",
        contact: "سفارش شما دریافت شد و در حال پردازش است.",
        contact2: "به زودی با شما تماس خواهیم گرفت.",
        name_placeholder: "نام شما", phone_placeholder: "تلفن شما",
        update: "به‌روزرسانی", correct: "همه چیز درست است",
        update_error: "خطا در هنگام به‌روزرسانی رخ داد. دوباره تلاش کنید.",
        edit: "✏️ ویرایش",
        steps: ["اطلاعات خود را بررسی کنید", "به تماس کارشناس ما پاسخ دهید", "تلفن را نزدیک خود نگه دارید", "تماس ممکن است از شماره ناشناس باشد"],
        notice: "⚠️ تماس را از دست ندهید! تلفن را نزدیک نگه دارید و حالت بی‌صدا را خاموش کنید."
      },
        hn: {
  title: "Gracias",
  thanks: "¡Gracias por tu pedido!",
  contact: "Hemos recibido tu pedido, está siendo procesado.",
  contact2: "Nos pondremos en contacto contigo en breve.",
  name_placeholder: "Tu nombre",
  phone_placeholder: "Tu teléfono",
  update: "Actualizar",
  correct: "Todo es correcto",
  update_error: "Ocurrió un error al actualizar. Por favor, inténtalo de nuevo.",
  edit: "✏️ Editar",
  steps: [
    "Verifica que tus datos sean correctos",
    "Responde la llamada de nuestro especialista",
    "Mantén tu teléfono cerca",
    "La llamada puede venir de un número desconocido"
  ],
  notice: "⚠️ ¡No pierdas la llamada! Mantén tu teléfono cerca y desactiva el modo silencio."
},

    };


    // Язык
    function getLangFromBrowser() {
      const lang = (navigator.language || navigator.userLanguage || 'en')
        .slice(0, 2)
        .toLowerCase();
      return translations[lang] ? lang : 'en';
    }

    // Применение
    function applyTranslation(lang) {
      const t = translations[lang] || translations.en;

      // Заголовок страницы по переводу
      document.title = t.title || (translations.en && translations.en.title) || document.title;

      const set = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
      const setPh = (id, txt) => { const el = document.getElementById(id); if (el) el.placeholder = txt; };

      set("thanks", t.thanks);
      set("contact", t.contact);
      set("contact2", t.contact2);
      setPh("name_input", t.name_placeholder);
      setPh("phone_input", t.phone_placeholder);

      const updBtn = document.getElementById("update_btn");
      if (updBtn) updBtn.textContent = t.update;

      const okBtn = document.getElementById("confirm-ok-btn");
      if (okBtn) okBtn.textContent = t.correct;

      const editLink = document.getElementById("edit-link");
      if (editLink) editLink.textContent = t.edit;

      // Шаги
      const steps = document.querySelectorAll('.steps .step div:last-child');
      steps.forEach((el, i) => { if (t.steps && t.steps[i]) el.textContent = t.steps[i]; });

      const notice = document.getElementById("notice");
      if (notice) {
        notice.innerHTML = '<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zM12 16v-4h0v4zm0 4h0v-2h0v2z"/></svg> ' + t.notice;
      }

      // Текст ошибки для alert по переводу
      window.update_error_text = t.update_error;
    }


    // particles.js
    particlesJS("particles-js", { particles: { number: { value: 50, density: { enable: true, value_area: 800 } }, color: { value: "#739c3e" }, shape: { type: "circle" }, opacity: { value: .5, random: true }, size: { value: 10, random: true }, move: { enable: true, speed: .5, direction: "bottom", out_mode: "out" } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "bubble" }, onclick: { enable: true, mode: "repulse" } }, modes: { bubble: { distance: 400, size: 4, duration: .3, opacity: 1, speed: 3 }, repulse: { distance: 200, duration: .4 } } }, retina_detect: true });

    // Логика формы
    document.addEventListener("DOMContentLoaded", () => {
      // Применяем перевод сразу при загрузке
      applyTranslation(getLangFromBrowser());

      const form = document.getElementById('update-form');
      const nameEl = document.getElementById('name_input');
      const phoneEl = document.getElementById('phone_input');
      const updateBtn = document.getElementById('update_btn');
      const confirmOkBtn = document.getElementById('confirm-ok-btn');
      const successBlock = document.getElementById('checkmark-success');

      const showSuccess = () => {
        if (form) form.style.display = 'none';
        if (successBlock) successBlock.classList.add('visible');
      };

      if (updateBtn && form && nameEl && phoneEl) {
        // Клик по кнопке: если данные не менялись, просто показываем success
        updateBtn.addEventListener('click', e => {
          const unchanged =
            nameEl.value.trim() === nameEl.defaultValue.trim() &&
            phoneEl.value.trim() === phoneEl.defaultValue.trim();

          if (unchanged) {
            e.preventDefault();
            showSuccess();
          }
        });
      }

      if (form && nameEl && phoneEl) {
        // Submit (Enter или кнопка): если данные те же — success, иначе шлём POST
        form.addEventListener('submit', async e => {
          e.preventDefault();

          const unchanged =
            nameEl.value.trim() === nameEl.defaultValue.trim() &&
            phoneEl.value.trim() === phoneEl.defaultValue.trim();

          if (unchanged) {
            showSuccess();
            return;
          }

          try {
            const formData = new FormData(form);
            const response = await fetch(form.action, { method: 'POST', body: formData });
            // тут можно добавить проверку response.ok если нужно
            showSuccess();
          } catch (err) {
            alert(window.update_error_text || 'Error!');
          }
        });
      }

      if (confirmOkBtn) {
        confirmOkBtn.addEventListener('click', () => {
          showSuccess();
        });
      }
    });

