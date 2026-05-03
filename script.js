/* --- CORE 8 LEADERS --- */
const initialHeroes = [
    {
        id: 'thevar', name: 'Muthuramalinga Thevar', popular: 'Pasumpon Thevar',
        born: '30 October 1908', died: '30 October 1963',
        image: './images/thevar.jpg',
        videoLink: 'https://youtu.be/Hs55BIhoX74?si=ho78S3o1Em3w4ZCk',
        role: 'He was a patriarch of the Thevar community and an influential politician who worked alongside Subhas Chandra Bose.',
        points: ['Led the Forward Bloc in Tamil Nadu.', 'Fought relentlessly against the Criminal Tribes Act.', 'A spiritual and beloved political leader.', 'Served as Member of Parliament multiple times.', 'A highly respected figure in Southern Tamil Nadu.'],
        quiz: [
            { question: 'When was Muthuramalinga Thevar born?', options: ['1908', '1890', '1920', '1885'], answer: 0 },
            { question: 'Which national leader did he heavily support?', options: ['Gandhi', 'Subhas Chandra Bose', 'Nehru', 'Bhagat Singh'], answer: 1 },
            { question: 'What party did he lead in Tamil Nadu?', options: ['Congress', 'Forward Bloc', 'Justice Party', 'Swaraj Party'], answer: 2 },
            { question: 'What oppressive act did he fight against?', options: ['Rowlatt Act', 'Salt Tax', 'Criminal Tribes Act', 'Vernacular Press Act'], answer: 1 },
            { question: 'He is affectionately known as?', options: ['Pasumpon Thevar', 'Netaji', 'Periyar', 'Thalapathy'], answer: 1 }
        ],
        ta: {
            name: 'முத்துராமலிங்க தேவர்',
            popular: 'பசும்பொன் முத்துராமலிங்க தேவர்',
            born: '30 அக்டோபர் 1908',
            died: '30 அக்டோபர் 1963',
            role: 'பசும்பொன் முத்துராமலிங்க தேவர் தமிழ்நாட்டின் முக்கியமான சுதந்திரப் போராட்ட வீரரும் அரசியல் தலைவரும் ஆவார்.',
            points: ['பிரிட்டிஷ் ஆட்சிக்கு எதிராக தீவிரமாக பங்கேற்றார்.', 'சுபாஷ் சந்திர போசின் நெருங்கிய ஆதரவாளராக இருந்தார்.', 'தமிழ்நாட்டில் ஃபார்வர்ட் பிளாக் கட்சியின் தலைவராக இருந்தார்.', 'குற்றப்பரம்பரை சட்டத்திற்கு (Criminal Tribes Act) எதிராக போராடினார்.', 'தென் தமிழ்நாட்டில் மிகவும் மதிக்கப்படும் தலைவராக திகழ்ந்தார்.'],
            quiz: [
                { question: 'முத்துராமலிங்க தேவர் எப்போது பிறந்தார்?', options: ['1908', '1890', '1920', '1885'], answer: 0 },
                { question: 'எந்த தேசிய தலைவரை அவர் முழுமையாக ஆதரித்தார்?', options: ['காந்தி', 'சுபாஷ் சந்திர போஸ்', 'நேரு', 'பகத் சிங்'], answer: 1 },
                { question: 'தமிழ்நாட்டில் அவர் எந்த கட்சியை வழிநடத்தினார்?', options: ['காங்கிரஸ்', 'ஃபார்வர்ட் பிளாக்', 'நீதிக்கட்சி', 'சுயராஜ்ஜிய கட்சி'], answer: 1 },
                { question: 'அவர் எந்த ஒடுக்குமுறை சட்டத்திற்கு எதிராக போராடினார்?', options: ['ரௌலட் சட்டம்', 'உப்பு வரி', 'குற்றப்பரம்பரை சட்டம்', 'பத்திரிகை சட்டம்'], answer: 2 },
                { question: 'அவர் அன்பாக எவ்வாறு அழைக்கப்படுகிறார்?', options: ['பசும்பொன் தேவர்', 'நேதாஜி', 'பெரியார்', 'தளபதி'], answer: 1 }
            ]
        }
    },
    {
        id: 'kattabomman', name: 'Kattabomman', popular: 'Veerapandiya Kattabomman',
        born: '3 January 1760', died: '16 October 1799',
        image: './images/kattabomman.jpg',
        videoLink: 'https://youtube.com',
        role: 'An 18th-century Palayakarrar and chieftain in Tamil Nadu who boldly refused to pay taxes to the British East India Company.',
        points: ['Waged war against the British East India Company.', 'Famed for his brave dialogue refusing to pay tax (Kisthi).', 'Hanged at Kayathar as a martyr.', 'Ruled Panchalankurichi with immense courage.', 'An iconic symbol of Tamil resistance and bravery.'],
        quiz: [
            { question: 'Where was Kattabomman from?', options: ['Madurai', 'Panchalankurichi', 'Chennai', 'Trichy'], answer: 1 },
            { question: 'What did he refuse to pay the British?', options: ['Spices', 'Gold', 'Taxes (Kisthi)', 'Cotton'], answer: 2 },
            { question: 'Where was he hanged?', options: ['Kayathar', 'Madurai', 'Vellore', 'Sivaganga'], answer: 0 },
            { question: 'What century did he live in?', options: ['16th', '17th', '18th', '19th'], answer: 2 },
            { question: 'Who was his famous mute commander?', options: ['Oomaithurai', 'Maruthu', 'Kaladi', 'Bharati'], answer: 0 }
        ],
        ta: {
            name: 'வீரபாண்டிய கட்டபொம்மன்',
            popular: 'கட்டபொம்மன்',
            born: '3 ஜனவரி 1760',
            died: '16 அக்டோபர் 1799',
            role: 'பிரிட்டிஷ் கிழக்கிந்திய கம்பெனிக்கு வரி செலுத்த மறுத்த 18-ஆம் நூற்றாண்டின் பாளையக்காரர்.',
            points: ['கிழக்கிந்திய கம்பெனிக்கு எதிராக போர் புரிந்தார்.', 'வரி (கிஸ்தி) செலுத்த மறுத்த வீரமிக்க வசனங்களுக்காக புகழ் பெற்றவர்.', 'கயத்தாரில் தூக்கிலிடப்பட்டு வீரமரணமடைந்தார்.', 'பாஞ்சாலங்குறிச்சியை மிகுந்த துணிச்சலுடன் ஆட்சி செய்தார்.', 'தமிழ் வீரத்தின் அடையாளமாக திகழ்கிறார்.'],
            quiz: [
                { question: 'கட்டபொம்மன் எந்த ஊரைச் சேர்ந்தவர்?', options: ['மதுரை', 'பாஞ்சாலங்குறிச்சி', 'சென்னை', 'திருச்சி'], answer: 1 },
                { question: 'ஆங்கிலேயர்களுக்கு எதை செலுத்த அவர் மறுத்தார்?', options: ['வாசனை திரவியங்கள்', 'தங்கம்', 'வரி (கிஸ்தி)', 'பருத்தி'], answer: 2 },
                { question: 'அவர் எங்கே தூக்கிலிடப்பட்டார்?', options: ['கயத்தாறு', 'மதுரை', 'வேலூர்', 'சிவகங்கை'], answer: 0 },
                { question: 'அவர் எந்த நூற்றாண்டில் வாழ்ந்தார்?', options: ['16-ஆம்', '17-ஆம்', '18-ஆம்', '19-ஆம்'], answer: 2 },
                { question: 'அவரது புகழ்பெற்ற தளபதி யார்?', options: ['ஊமைத்துரை', 'மருது', 'காலாடி', 'பாரதி'], answer: 0 }
            ]
        }
    },
    {
        id: 'maruthu', name: 'Maruthu Pandiyars', popular: 'Periya Maruthu & Chinna Maruthu',
        born: '1748 & 1753', died: '24 October 1801',
        image: './images/pandiyars.png',
        videoLink: 'https://youtube.com',
        role: 'Diwans of Sivaganga fighting relentlessly against the British. They issued the famous Jambudweep declaration.',
        points: ['Pioneered guerilla warfare against British.', 'Issued the famous Tiruchirappalli Proclamation of 1801.', 'Ruled Sivaganga with Velu Nachiyar.', 'Fought the British valiantly in the Polygar Wars.', 'Executed at Tiruppattur but their legacy lives on forever.'],
        quiz: [
            { question: 'What region did the Maruthu Pandiyars rule/manage?', options: ['Madurai', 'Sivaganga', 'Pudukkottai', 'Ramnad'], answer: 1 },
            { question: 'What famous independence declaration did they issue?', options: ['Jambudweep Proclamation', 'Quit India', 'Swaraj', 'Purna Swaraj'], answer: 0 },
            { question: 'What kind of warfare did they use?', options: ['Naval', 'Trench', 'Guerilla', 'Aerial'], answer: 2 },
            { question: 'When were they executed?', options: ['1801', '1799', '1857', '1947'], answer: 0 },
            { question: 'They were the diwans under which queen?', options: ['Lakshmibai', 'Velu Nachiyar', 'Chennamma', 'Ahilyabai'], answer: 1 }
        ],
        ta: {
            name: 'மருது பாண்டியர்கள்',
            popular: 'பெரிய மருது மற்றும் சின்ன மருது',
            born: '1748 மற்றும் 1753',
            died: '24 அக்டோபர் 1801',
            role: 'பிரிட்டிஷாருக்கு எதிராக தொடர்ந்து போராடிய சிவகங்கை சீமையின் மன்னர்கள்.',
            points: ['பிரிட்டிஷாருக்கு எதிராக கொரில்லா போர் முறையை கையாண்டனர்.', '1801-ல் புகழ்பெற்ற திருச்சிராப்பள்ளி பிரகடனத்தை வெளியிட்டனர்.', 'வேலு நாச்சியாருடன் இணைந்து சிவகங்கையை ஆட்சி செய்தனர்.', 'பாளையம் போர்களில் வீரத்துடன் போரிட்டனர்.', 'திருப்பத்தூரில் தூக்கிலிடப்பட்டனர், ஆனால் அவர்களின் புகழ் என்றும் வாழும்.'],
            quiz: [
                { question: 'மருது பாண்டியர்கள் எந்த பகுதியை ஆட்சி செய்தனர்?', options: ['மதுரை', 'சிவக்ங்கை', 'புதுக்கோட்டை', 'ராமநாதபுரம்'], answer: 1 },
                { question: 'அவர்கள் வெளியிட்ட புகழ்பெற்ற சுதந்திர பிரகடனம் எது?', options: ['ஜம்புத்தீவு பிரகடனம்', 'வெள்ளையனே வெளியேறு', 'சுயராஜ்யம்', 'பூர்ண சுயராஜ்யம்'], answer: 0 },
                { question: 'அவர்கள் என்ன வகையான போர் முறையை பயன்படுத்தினர்?', options: ['கடற்படை', 'குழிப்போர்', 'கொரில்லா', 'விமானம்'], answer: 2 },
                { question: 'அவர்கள் எப்போது தூக்கிலிடப்பட்டனர்?', options: ['1801', '1799', '1857', '1947'], answer: 0 },
                { question: 'அவர்கள் எந்த அரசியின் கீழ் திவான்களாக இருந்தனர்?', options: ['லட்சுமி பாய்', 'வேலு நாச்சியார்', 'சென்னம்மா', 'அகில்யாபாய்'], answer: 1 }
            ]
        }
    },
    {
        id: 'velu', name: 'Velu Nachiyar', popular: 'Veeramangai',
        born: '3 January 1730', died: '25 December 1796',
        image: './images/nachiyar.jpg',
        videoLink: 'https://youtube.com',
        role: 'She was the first Indian queen to wage war with the East India Company in India.',
        points: [
            "She invented the first human bomb in history along with her commander Kuyili.",
            "Ruled Sivaganga estate.",
            "Mastered martial arts and multiple languages.",
            "Formed a powerful women's army named Udaiyaal.",
            "Successfully reclaimed her kingdom from the British."
        ],
        quiz: [
            { question: 'Who was Velu Nachiyar?', options: ['A Famous Poet', 'Queen of Sivaganga', 'A British Governor', 'A Scientist'], answer: 1 },
            { question: 'What revolutionary tactic did she invent?', options: ['Guerilla warfare', 'Use of cannons', 'The human bomb', 'Trench warfare'], answer: 2 },
            { question: 'Who was her trusted commander?', options: ['Kuyili', 'Lakshmibai', 'Begum Hazrat', 'Chennamma'], answer: 0 },
            { question: 'What language was she highly proficient in?', options: ['French', 'English', 'Urdu', 'All of the above'], answer: 3 },
            { question: 'Which kingdom did she fight against?', options: ['French East India', 'British East India Company', 'Dutch India', 'Portuguese'], answer: 1 }
        ],
        ta: {
            name: 'வேலு நாச்சியார்',
            popular: 'வீரமங்கை',
            born: '3 ஜனவரி 1730',
            died: '25 டிசம்பர் 1796',
            role: 'இந்தியாவில் கிழக்கிந்திய கம்பெனிக்கு எதிராக போர் தொடுத்த முதல் இந்திய அரசி.',
            points: ['குயிலியுடன் இணைந்து உலகின் முதல் மனித வெடிகுண்டை உருவாக்கினார்.', 'சிவக்ங்கை ஜமீனை ஆட்சி செய்தார்.', 'தற்காப்புக் கலைகள் மற்றும் பல மொழிகளில் தேர்ச்சி பெற்றார்.', 'உடையாள் என்ற பெயரில் பெண்கள் படையை உருவாக்கினார்.', 'ஆங்கிலேயர்களிடமிருந்து தனது ராஜ்ஜியத்தை வெற்றிகரமாக மீட்டெடுத்தார்.'],
            quiz: [
                { question: 'வேலு நாச்சியார் யார்?', options: ['ஒரு கவிஞர்', 'சிவகங்கை அரசி', 'ஒரு ஆங்கில ஆளுநர்', 'ஒரு விஞ்ஞானி'], answer: 1 },
                { question: 'அவர் கண்டுபிடித்த புரட்சிகரமான தந்திரம் எது?', options: ['கொரில்லா போர்', 'பீரங்கி பயன்பாடு', 'மனித வெடிகுண்டு', 'குழிப்போர்'], answer: 2 },
                { question: 'அவரது நம்பகமான தளபதி யார்?', options: ['குயிலி', 'லட்சுமி பாய்', 'பேகம் ஹஸ்ரத்', 'சென்னம்மா'], answer: 0 },
                { question: 'அவர் எந்த மொழியில் புலமை பெற்றிருந்தார்?', options: ['பிரஞ்சு', 'ஆங்கிலம்', 'உருது', 'மேற்கூறிய அனைத்தும்'], answer: 3 },
                { question: 'அவர் எந்த அரசுக்கு எதிராகப் போரிட்டார்?', options: ['பிரஞ்சு', 'பிரிட்டிஷ் கிழக்கிந்திய கம்பெனி', 'டச்சு', 'போர்த்துகீசியம்'], answer: 1 }
            ]
        }
    },
    {
        id: 'kaladi', name: 'Periya Kaladi', popular: 'Kaladi',
        born: '18th Century', died: '18th Century',
        image: './images/kaladi.jpg',
        videoLink: 'https://youtube.com',
        role: 'A fierce general and commander in the army of Pooli Thevar, fighting against colonial rule.',
        points: ['One of the earliest freedom fighters against British.', 'Fought valiantly at the Battle of Nelkatumseval.', 'Known for incredible brute strength and loyalty.', 'Sacrificed his life in battle despite a fatal wound.', 'A trusted and fearless general of Puli Thevar.'],
        quiz: [
            { question: 'Periya Kaladi was a general under which leader?', options: ['Puli Thevar', 'Kattabomman', 'Shivaji', 'Tipu Sultan'], answer: 0 },
            { question: 'Against whom did he primarily fight?', options: ['Mughals', 'British East India & Nawab', 'French', 'Dutch'], answer: 1 },
            { question: 'What was he most famous for?', options: ['Writing poetry', 'Incredible martial strength', 'Sailing ships', 'Politics'], answer: 1 },
            { question: 'Which fort did he passionately defend?', options: ['Vellore', 'Nelkatumseval', 'Chengalpattu', 'Madurai'], answer: 1 },
            { question: 'In which century did he live?', options: ['15th', '16th', '17th', '18th'], answer: 3 }
        ],
        ta: {
            name: 'பெரிய காலாடி',
            popular: 'காலாடி',
            born: '18-ஆம் நூற்றாண்டு',
            died: '18-ஆம் நூற்றாண்டு',
            role: 'பூலித்தேவரின் படையில் ஒரு துணிச்சலான தளபதியாக இருந்து காலனித்துவ ஆட்சிக்கு எதிராகப் போரிட்டவர்.',
            points: ['பிரிட்டிஷாருக்கு எதிரான ஆரம்பகால சுதந்திரப் போராட்ட வீரர்களில் ஒருவர்.', 'நெற்கட்டும்செவல் போரில் வீரத்துடன் போரிட்டார்.', 'அசாத்திய வலிமை மற்றும் விசுவாசத்திற்கு பெயர் பெற்றவர்.', 'கராணமான காயமடைந்த நிலையிலும் போரில் உயிர்த்தியாகம் செய்தார்.', 'புலித்தேவரின் நம்பகமான மற்றும் அச்சமற்ற தளபதி.'],
            quiz: [
                { question: 'பெரிய காலாடி எந்தத் தலைவரின் கீழ் தளபதியாக இருந்தார்?', options: ['பூலித்தேவர்', 'கட்டபொம்மன்', 'சிவாஜி', 'திப்பு சுல்தான்'], answer: 0 },
                { question: 'அவர் முதன்மையாக யாருக்கு எதிராகப் போரிட்டார்?', options: ['முகலாயர்கள்', 'கிழக்கிந்திய கம்பெனி மற்றும் நவாப்', 'பிரஞ்சு', 'டச்சு'], answer: 1 },
                { question: 'அவர் எதற்கு மிகவும் பிரபலமானவர்?', options: ['கவிதை எழுதுதல்', 'அசாத்தியமான தற்காப்பு வலிமை', 'கப்பல் ஓட்டுதல்', 'அரசியல்'], answer: 1 },
                { question: 'அவர் எந்தக் கோட்டையை ஆவலுடன் பாதுகாத்தார்?', options: ['வேலூர்', 'நெற்கட்டும்செவல்', 'செங்கல்பட்டு', 'மதுரை'], answer: 1 },
                { question: 'அவர் எந்த நூற்றாண்டில் வாழ்ந்தார்?', options: ['15-ஆம்', '16-ஆம்', '17-ஆம்', '18-ஆம்'], answer: 3 }
            ]
        }
    },
    {
        id: 'bharati', name: 'Subramania Bharati', popular: 'Mahakavi Bharati',
        born: '11 December 1882', died: '11 September 1921',
        image: './images/bharati.jpg',
        videoLink: 'https://youtube.com',
        role: 'A pioneering poet, writer, and Indian independence activist who ignited the nationalist fire in Tamil Nadu through his writings.',
        points: [
            "Pioneer of modern Tamil poetry.",
            "Wrote fiery songs of nationalism praising Indian independence.",
            "Fought for women's rights and against the caste system.",
            "Worked as a journalist to spread revolutionary ideas.",
            "His powerful words continue to inspire generations."
        ],
        quiz: [
            { question: 'What is Subramania Bharati known as?', options: ['Netaji', 'Mahakavi', 'Sardar', 'Bapuji'], answer: 1 },
            { question: 'What is his primary contribution to the freedom struggle?', options: ['Armed rebellion', 'Patriotic Poetry/Writings', 'Political laws', 'Naval fleets'], answer: 1 },
            { question: 'Where did he spend years in exile?', options: ['Pondicherry', 'Andaman', 'Burma', 'Singapore'], answer: 0 },
            { question: 'He fought aggressively for...', options: ['Monarchy', 'Women\'s Rights & Equality', 'Foreign Rule', 'Separation'], answer: 1 },
            { question: 'Which language is his vast poetry in?', options: ['Telugu', 'Hindi', 'Tamil', 'English'], answer: 2 }
        ],
        ta: {
            name: 'சுப்பிரமணிய பாரதி',
            popular: 'மகாகவி பாரதி',
            born: '11 டிசம்பர் 1882',
            died: '11 செப்டம்பர் 1921',
            role: 'தமிழ்நாட்டில் தேசிய உணர்வைத் தூண்டிய முன்னோடிக் கவிஞர், எழுத்தாளர் மற்றும் சுதந்திரப் போராட்ட வீரர்.',
            points: ['நவீன தமிழ் கவிதையின் முன்னோடி.', 'இந்திய சுதந்திரத்தைப் புகழும் தேசபக்தி பாடல்களை எழுதினார்.', 'பெண்கள் உரிமைகள் மற்றும் சாதி ஒழிப்புக்காகப் போராடினார்.', 'புரட்சிகர கருத்துக்களைப் பரப்ப பத்திரிகையாளராகப் பணியாற்றினார்.', 'அவரது சக்திவாய்ந்த வார்த்தைகள் தலைமுறைகளை ஊக்குவிக்கின்றன.'],
            quiz: [
                { question: 'சுப்பிரமணிய பாரதி எவ்வாறு அழைக்கப்படுகிறார்?', options: ['நேதாஜி', 'மகாகவி', 'சர்தார்', 'பாபுஜி'], answer: 1 },
                { question: 'சுதந்திரப் போராட்டத்தில் அவரது முதன்மையான பங்களிப்பு என்ன?', options: ['ஆயுதப் புரட்சி', 'தேசபக்தி கவிதை/எழுத்துகள்', 'அரசியல் சட்டங்கள்', 'கடற்படை'], answer: 1 },
                { question: 'அவர் எங்கே நாடுகடத்தலில் வாழ்ந்தார்?', options: ['புதுச்சேரி', 'அந்தமான்', 'பர்மா', 'சிங்கப்பூர்'], answer: 0 },
                { question: 'அவர் எதற்காக தீவிரமாகப் போராடினார்?', options: ['முடியாட்சி', 'பெண்கள் உரிமை மற்றும் சமத்துவம்', 'வெளிநாட்டு ஆட்சி', 'பிரிவினை'], answer: 1 },
                { question: 'அவரது கவிதைகள் எந்த மொழியில் உள்ளன?', options: ['தெலுங்கு', 'இந்தி', 'தமிழ்', 'ஆங்கிலம்'], answer: 2 }
            ]
        }
    },
    {
        id: 'kumaran', name: 'Tiruppur Kumaran', popular: 'Kodi Kaththa Kumaran',
        born: '4 October 1904', died: '11 January 1932',
        image: './images/KUMARAN.jpg', videoLink: 'https://youtube.com',
        role: 'An Indian revolutionary who lost his life defending the Indian Nationalist Flag from British police.',
        points: ['Founded the Desabandhu Youth Association.', 'Participated in protests against the British government.', 'Died holding the nationalist flag during a violent police assault.', 'Symbol of ultimate sacrifice for the national flag.', 'Honored as Kodi Kaththa Kumaran (Kumaran who protected the flag).'],
        quiz: [
            { question: 'What is Tiruppur Kumaran popularly known as?', options: ['Kodi Kaththa Kumaran', 'Netaji', 'Lokmanya', 'Periyar'], answer: 0 },
            { question: 'Which youth association did he found?', options: ['Desabandhu Youth Association', 'Forward Bloc', 'Swaraj Party', 'RSS'], answer: 0 },
            { question: 'How did he die?', options: ['In a naval battle', 'Defending the national flag during police assault', 'By execution', 'In a plane crash'], answer: 1 },
            { question: 'Which state is he from?', options: ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh'], answer: 0 },
            { question: 'What was he holding when he died?', options: ['A sword', 'A gun', 'The Indian Nationalist Flag', 'A book'], answer: 2 }
        ],
        ta: {
            name: 'திருப்பூர் குமரன்',
            popular: 'கொடி காத்த குமரன்',
            born: '4 அக்டோபர் 1904',
            died: '11 ஜனவரி 1932',
            role: 'பிரிட்டிஷ் போலீசாரிடமிருந்து இந்திய தேசியக் கொடியைப் பாதுகாப்பதற்காகத் தனது உயிரைத் தியாகம் செய்த இந்தியப் புரட்சியாளர்.',
            points: ['தேசபந்து இளைஞர் சங்கத்தை நிறுவினார்.', 'பிரிட்டிஷ் அரசுக்கு எதிரான போராட்டங்களில் தீவிரமாகப் பங்கேற்றார்.', 'கடும் போலீஸ் தாக்குதலின் போதும் தேசியக் கொடியைக் கீழே விடாமல் பிடித்துக் கொண்டே உயிர் துறந்தார்.', 'தேசியக் கொடிக்கான அவரது தியாகம் இணையற்றது.', 'அஞ்சலி செலுத்தும் விதமாக "கொடி காத்த குமரன்" என்று அழைக்கப்படுகிறார்.'],
            quiz: [
                { question: 'திருப்பூர் குமரன் பிரபலமாக எவ்வாறு அழைக்கப்படுகிறார்?', options: ['கொடி காத்த குமரன்', 'நேதாஜி', 'லோகமான்யா', 'பெரியார்'], answer: 0 },
                { question: 'அவர் எந்த இளைஞர் சங்கத்தை நிறுவினார்?', options: ['தேசபந்து இளைஞர் சங்கம்', 'ஃபார்வர்ட் பிளாக்', 'சுயராஜ்ஜிய கட்சி', 'ஆர்.எஸ்.எஸ்'], answer: 0 },
                { question: 'அவர் எவ்வாறு இயற்கை எய்தினார்?', options: ['கடற்படை போரில்', 'போலீஸ் தாக்குதலின் போது கொடியைக் காத்ததால்', 'தூக்கு தண்டனையால்', 'விமான விபத்தில்'], answer: 1 },
                { question: 'அவர் எந்த மாநிலத்தைச் சேர்ந்தவர்?', options: ['தமிழ்நாடு', 'கேரளா', 'கர்நாடகா', 'ஆந்திரப் பிரதேசம்'], answer: 0 },
                { question: 'அவர் இறந்த போது கையில் எதைப் பிடித்திருந்தார்?', options: ['வாள்', 'துப்பாக்கி', 'இந்திய தேசியக் கொடி', 'புத்தகம்'], answer: 2 }
            ]
        }
    },
    {
        id: 'vanchinathan', name: 'Vanchinathan', popular: 'Vanchi',
        born: '1886', died: '17 June 1911',
        image: './images/vanchinathan.jpg', videoLink: 'https://youtube.com',
        role: 'A revolutionary freedom fighter renowned for assassinating Robert Ashe, the British Collector of Tirunelveli.',
        points: ['A member of the secret society Bharatha Matha Sangam.', 'Assassinated Robert Ashe at Maniyachi railway station.', 'He took this drastic step to avenge the suppression of the Swadeshi movement.', 'Committed suicide to evade arrest and protect his peers.', 'A symbol of fearless resistance against colonial oppression.'],
        quiz: [
            { question: 'Who did Vanchinathan assassinate?', options: ['Lord Mountbatten', 'Robert Ashe', 'General Dyer', 'Winston Churchill'], answer: 1 },
            { question: 'Where did the assassination take place?', options: ['Chennai', 'Madurai', 'Maniyachi railway station', 'Delhi'], answer: 2 },
            { question: 'Which secret society did he belong to?', options: ['Anushilan Samiti', 'Ghadar Party', 'Bharatha Matha Sangam', 'Abhinav Bharat'], answer: 2 },
            { question: 'Why did he assassinate Ashe?', options: ['Personal revenge', 'Avenge the suppression of Swadeshi movement', 'For money', 'By mistake'], answer: 1 },
            { question: 'How did Vanchinathan die?', options: ['Hanged', 'Illness', 'Committed suicide to evade arrest', 'In battle'], answer: 2 }
        ],
        ta: {
            name: 'வாஞ்சிநாதன்',
            popular: 'வாஞ்சி',
            born: '1886',
            died: '17 ஜூன் 1911',
            role: 'திருநெல்வேலி கலெக்டர் ராபர்ட் ஆஷைக் கொன்றதற்காகப் புகழ் பெற்ற புரட்சிப் போராட்ட வீரர்.',
            points: ['பாரத மாதா சங்கத்தின் உறுப்பினராக இருந்தார்.', 'மணியாச்சி ரயில் நிலையத்தில் ராபர்ட் ஆஷைச் சுட்டுக் கொன்றார்.', 'சுதேசி இயக்கம் ஒடுக்கப்பட்டதற்குப் பழிவாங்க இந்தத் துணிச்சலான நடவடிக்கையை எடுத்தார்.', 'கைதாவதைத் தவிர்க்கவும் தோழர்களைக் காக்கவும் தற்கொலை செய்து கொண்டார்.', 'காலனித்துவ ஒடுக்குமுறைக்கு எதிரான அச்சமற்ற எதிர்ப்பின் சின்னம்.'],
            quiz: [
                { question: 'வாஞ்சிநாதன் யாரைக் கொன்றார்?', options: ['மவுண்ட்பேட்டன் பிரபு', 'ராபர்ட் ஆஷ்', 'ஜெனரல் டயர்', 'வின்ஸ்டன் சர்ச்சில்'], answer: 1 },
                { question: 'கொலை எங்கே நடந்தது?', options: ['சென்னை', 'மதுரை', 'மணியாச்சி ரயில் நிலையம்', 'டெல்லி'], answer: 2 },
                { question: 'அவர் எந்த ரகசிய சங்கத்தைச் சேர்ந்தவர்?', options: ['அனுசீலன் சமிதி', 'கதர் கட்சி', 'பாரத மாதா சங்கம்', 'அபிநவ் பாரத'], answer: 2 },
                { question: 'அவர் ஏன் ஆஷைக் கொன்றார்?', options: ['தனிப்பட்ட பழிவாங்குதல்', 'சுதேசி இயக்கம் ஒடுக்கப்பட்டதற்குப் பழிவாங்க', 'பணத்திற்காக', 'தவறுதலாக'], answer: 1 },
                { question: 'வாஞ்சிநாதன் எவ்வாறு இறந்தார்?', options: ['தூக்கிலிடப்பட்டார்', 'நோய்', 'கைதாவதைத் தவிர்க்க தற்கொலை செய்து கொண்டார்', 'போரில்'], answer: 2 }
            ]
        }
    },
    {
        id: 'siva', name: 'Subramaniya Siva', popular: 'Siva',
        born: '4 October 1884', died: '23 July 1925',
        image: './images/siva.jpg', videoLink: 'https://youtube.com',
        role: 'An outstanding writer and revolutionary who worked closely with V.O. Chidambaram Pillai and Subramania Bharati.',
        points: ['Arrested many times for his fiery anti-British speeches.', 'Established the Dharma Paripalana Samajam.', 'Affected by leprosy during imprisonment due to poor conditions.', 'Travelled tirelessly on foot to spread nationalism even when ill.', 'A passionate journalist and freedom fighter.'],
        quiz: [
            { question: 'Subramaniya Siva worked closely with which other leader?', options: ['V.O.C and Bharati', 'Gandhi and Nehru', 'Bhagat Singh', 'Tilak'], answer: 0 },
            { question: 'What disease did he contract in prison?', options: ['Cholera', 'Leprosy', 'Tuberculosis', 'Malaria'], answer: 1 },
            { question: 'What societal organization did he establish?', options: ['Brahmo Samaj', 'Arya Samaj', 'Dharma Paripalana Samajam', 'Satyashodhak Samaj'], answer: 2 },
            { question: 'What was he known for?', options: ['Fiery anti-British speeches', 'Painting', 'Composing music', 'Trading'], answer: 0 },
            { question: 'When did he die?', options: ['1947', '1925', '1930', '1910'], answer: 1 }
        ],
        ta: {
            name: 'சுப்பிரமணிய சிவா',
            popular: 'சிவா',
            born: '4 அக்டோபர் 1884',
            died: '23 ஜூலை 1925',
            role: 'வ.உ.சிதம்பரம் பிள்ளை மற்றும் சுப்பிரமணிய பாரதியுடன் இணைந்து பணியாற்றிய சிறந்த எழுத்தாளர் மற்றும் புரட்சியாளர்.',
            points: ['பிரிட்டிஷ் எதிர்ப்பு உரைகளுக்காக பலமுறை கைது செய்யப்பட்டார்.', 'தர்ம பரிபாலன சமாஜத்தை நிறுவினார்.', 'சிறையில் மோசமான நிலைமைகளால் தொழுநோயால் பாதிக்கப்பட்டார்.', 'உடல்நிலை சரியில்லாத போதும் தேசபக்தியைப் பரப்ப கால்நடையாகவே பயணம் செய்தார்.', 'ஒரு உணர்ச்சிமிக்க பத்திரிகையாளர் மற்றும் சுதந்திரப் போராட்ட வீரர்.'],
            quiz: [
                { question: 'சுப்பிரமணிய சிவா எந்தத் தலைவருடன் நெருக்கமாகப் பணியாற்றினார்?', options: ['வ.உ.சி மற்றும் பாரதி', 'காந்தி மற்றும் நேரு', 'பகத் சிங்', 'திலகர்'], answer: 0 },
                { question: 'சிறையில் இருக்கும் போது அவருக்கு என்ன நோய் ஏற்பட்டது?', options: ['காலரா', 'தொழுநோய்', 'காசநோய்', 'மலேரியா'], answer: 1 },
                { question: 'அவர் எந்த சமூக அமைப்பை நிறுவினார்?', options: ['பிரம்ம சமாஜம்', 'ஆரிய சமாஜம்', 'தர்ம பரிபாலன சமாஜம்', 'சத்யசோதக் சமாஜம்'], answer: 2 },
                { question: 'அவர் எதற்காக அறியப்பட்டார்?', options: ['பிரிட்டிஷ் எதிர்ப்பு உரைகள்', 'ஓவியம்', 'இசை அமைத்தல்', 'வியாபாரம்'], answer: 0 },
                { question: 'அவர் எப்போது இறந்தார்?', options: ['1947', '1925', '1930', '1910'], answer: 1 }
            ]
        }
    },
    {
        id: 'kakkan', name: 'P. Kakkan', popular: 'Kakkan',
        born: '18 June 1908', died: '23 December 1981',
        image: './images/kakkan.jpg', videoLink: 'https://youtube.com',
        role: 'A freedom fighter and politician renowned for his extreme simplicity, honesty, and upliftment of Dalits.',
        points: ['Participated in the Quit India Movement.', 'A devoted follower of Mahatma Gandhi.', 'Fought relentlessly for the temple entry of Dalits in Madurai.', 'Served as a Minister in Kamaraj\'s cabinet with unimpeachable integrity.', 'Lived his last days in a government hospital like an ordinary citizen.'],
        quiz: [
            { question: 'What was P. Kakkan primarily known for?', options: ['Wealth and power', 'Extreme simplicity and honesty', 'Military leadership', 'Scientific discoveries'], answer: 1 },
            { question: 'Whose devoted follower was he?', options: ['Subhas Chandra Bose', 'Bhagat Singh', 'Mahatma Gandhi', 'B.R. Ambedkar'], answer: 2 },
            { question: 'In whose cabinet did he serve as a prominent minister?', options: ['Nehru', 'Kamaraj', 'Annadurai', 'MGR'], answer: 1 },
            { question: 'What social cause did he aggressively champion in Madurai?', options: ['Temple entry for Dalits', 'Abolition of Sati', 'Women\'s education', 'Child marriage laws'], answer: 0 },
            { question: 'Where did he spend his final days?', options: ['A palace', 'A private mansion', 'A government hospital', 'Abroad'], answer: 2 }
        ]
    },
    {
        id: 'rajagopalachari', name: 'C. Rajagopalachari', popular: 'Rajaji',
        born: '10 December 1878', died: '25 December 1972',
        image: './images/Rajagopalachari.jpg', videoLink: 'https://youtube.com',
        role: 'An Indian politician, independence activist, and writer. He was the last Governor-General of India.',
        points: ['Led the Vedaranyam Salt Satyagraha in Tamil Nadu.', 'The first and only Indian-born Governor-General of India.', 'Served as Chief Minister of Madras.', 'Founded the Swatantra Party.', 'A prolific writer, he retold the Ramayana and Mahabharata in English and Tamil.'],
        quiz: [
            { question: 'What is C. Rajagopalachari commonly called?', options: ['Netaji', 'Rajaji', 'Bapuji', 'Babuji'], answer: 1 },
            { question: 'What was his distinct political achievement post-independence?', options: ['Last Governor-General of India', 'First President of India', 'First Prime Minister', 'King of India'], answer: 0 },
            { question: 'Which Satyagraha did he lead in Tamil Nadu?', options: ['Champaran', 'Vedaranyam Salt Satyagraha', 'Kheda', 'Dandi'], answer: 1 },
            { question: 'What political party did he later found?', options: ['Congress', 'BJP', 'Swatantra Party', 'Communist Party'], answer: 2 },
            { question: 'What epics did he notably retell?', options: ['Iliad and Odyssey', 'Ramayana and Mahabharata', 'Silappatikaram', 'Tirukkural'], answer: 1 }
        ]
    },
    {
        id: 'arunachalam', name: 'Arunachalam Pillai', popular: 'Chavadi Arunachalam',
        born: '1893', died: '1938',
        image: './images/Arunachalam Pillai.jpg', videoLink: 'https://youtube.com',
        role: 'A revolutionary freedom fighter from Tirunelveli and a founding member of the Bharatha Matha Sangam.',
        points: ['Close associate of Veera Vanchinathan.', 'Spent 237 days in prison after the Ashe assassination case.', 'Dedicated his life to Dalit welfare and social service.', 'A pioneer of the Swadeshi Reading Room in Sengottai.', 'A symbol of selfless sacrifice for the nation.'],
        quiz: [
            { question: 'Arunachalam Pillai was a founding member of which secret society?', options: ['Anushilan Samiti', 'Bharatha Matha Sangam', 'Ghadar Party', 'HRA'], answer: 1 },
            { question: 'Which revolutionary leader was he a close associate of?', options: ['Bhagat Singh', 'Vanchinathan', 'Netaji', 'Gandhi'], answer: 1 },
            { question: 'How many days did he spend in prison regarding the Ashe case?', options: ['10', '100', '237', '365'], answer: 2 },
            { question: 'Where did he establish a Swadeshi Reading Room?', options: ['Madurai', 'Sengottai', 'Chennai', 'Trichy'], answer: 1 },
            { question: 'What social cause did he dedicate his later life to?', options: ['Dalit welfare', 'Industrialization', 'Banking', 'None'], answer: 0 }
        ]
    },
    {
        id: 'vijayaraghavachariar', name: 'C. Vijayaraghavachariar', popular: 'Lion of South India',
        born: '18 June 1852', died: '19 April 1944',
        image: './images/C. Vijayaraghavachariar.jpg', videoLink: 'https://youtube.com',
        role: 'A pioneering nationalist leader and lawyer from Salem known as the "Lion of South India".',
        points: ['Presided over the 1920 Nagpur session of the Indian National Congress.', 'Helped draft the Congress constitution with A.O. Hume.', 'Successfully defended himself in the Salem Riots case of 1882.', 'Staunch advocate for civil liberties and social reforms.', 'One of the earliest and most influential leaders of the Congress.'],
        quiz: [
            { question: 'What was C. Vijayaraghavachariar popularly called?', options: ['Netaji', 'Lion of South India', 'Bapuji', 'Mahatma'], answer: 1 },
            { question: 'Which Congress session did he preside over in 1920?', options: ['Calcutta', 'Madras', 'Nagpur', 'Bombay'], answer: 2 },
            { question: 'Which city was he famously associated with?', options: ['Madurai', 'Salem', 'Trichy', 'Chennai'], answer: 1 },
            { question: 'He helped draft the constitution of which organization?', options: ['Indian National Congress', 'Muslim League', 'Justice Party', 'RSS'], answer: 0 },
            { question: 'What was his primary profession?', options: ['Doctor', 'Lawyer', 'Engineer', 'Merchant'], answer: 1 }
        ]
    },
    {
        id: 'chengalvarayan', name: 'Chengalvarayan', popular: 'Chengalvarayan',
        born: '1910', died: '1980',
        image: './images/Chengalvarayan.jpg', videoLink: 'https://youtube.com',
        role: 'A dedicated freedom fighter and labour leader from Madras who fought for worker rights and independence.',
        points: ['Actively participated in the Salt Satyagraha and Quit India movement.', 'Organized several worker strikes against the British administration.', 'A prominent orator and advocate for social justice.', 'Worked closely with trade unions in the Madras Presidency.', 'Imprisoned multiple times for his nationalist and labour activities.'],
        quiz: [
            { question: 'Chengalvarayan was a prominent leader in which movement?', options: ['Monarchy', 'Labour/Freedom movement', 'Space research', 'None'], answer: 1 },
            { question: 'Which major movement did he participate in during the 1940s?', options: ['Non-Cooperation', 'Quit India', 'Swadeshi', 'None'], answer: 1 },
            { question: 'Across which region did he organize worker strikes?', options: ['Bombay', 'Madras Presidency', 'Bengal', 'Punjab'], answer: 1 },
            { question: 'Did he spend time in prison for his activities?', options: ['No', 'Yes', 'Escaped', 'None'], answer: 1 },
            { question: 'What was he primarily known for besides being a fighter?', options: ['Oratory', 'Painting', 'Cooking', 'None'], answer: 0 }
        ]
    },
    {
        id: 'chinnadurai', name: 'Chinnadurai', popular: 'Chinnadurai',
        born: '1905', died: '1975',
        image: './images/Chinnadurai.jpg', videoLink: 'https://youtube.com',
        role: 'A revolutionary freedom fighter who worked tirelessly at the grassroots level in the Kongu region.',
        points: ['A key organizer of the underground revolutionary movement in Coimbatore.', 'Distributed prohibited nationalist literature among youth.', 'Participated in the Individual Satyagraha and Quit India Movement.', 'A passionate advocate for Khadi and village industries.', 'Known for his simple lifestyle and absolute dedication to the cause.'],
        quiz: [
            { question: 'Chinnadurai was primarily active in which region?', options: ['Chennai', 'Madurai', 'Coimbatore/Kongu', 'Tanjore'], answer: 2 },
            { question: 'Which movement did he participate in?', options: ['Quit India', 'Non-Cooperation', 'Swadeshi', 'All of the above'], answer: 3 },
            { question: 'What did he help distribute amongst the youth?', options: ['Money', 'Nationalist literature', 'Food', 'None'], answer: 1 },
            { question: 'What industry did he strongly advocate for?', options: ['Steel', 'Khadi', 'IT', 'Shipping'], answer: 1 },
            { question: 'What was a notable quality of his lifestyle?', options: ['Luxury', 'Simplicity', 'Agitation', 'None'], answer: 1 }
        ]
    },
    {
        id: 'kalyanasundaranar', name: 'T.V. Kalyanasundaranar', popular: 'Thiru.Vi.Ka',
        born: '26 August 1883', died: '17 September 1953',
        image: './images/Kalyanasundaranar.jpg', videoLink: 'https://youtube.com',
        role: 'A pioneering trade unionist, Tamil scholar, and freedom fighter who integrated labour rights with independence.',
        points: ['Co-founded the Madras Labour Union, the first trade union in India.', 'A prolific writer known as "Tamil Thenral" (Tamil Breeze).', 'Actively participated in the Non-Cooperation and Khilafat movements.', 'Used his journals to spread nationalist and social reform ideas.', 'A towering figure in modern Tamil literature and politics.'],
        quiz: [
            { question: 'What was T.V. Kalyanasundaranar popularly called?', options: ['Tamil Thatha', 'Tamil Thenral', 'Netaji', 'None'], answer: 1 },
            { question: 'Which first-of-its-kind organization did he co-found in 1918?', options: ['Madras Labour Union', 'BCCI', 'RSS', 'None'], answer: 0 },
            { question: 'He is considered a pioneer in which field?', options: ['Space research', 'Modern Tamil prose and journalism', 'Medicine', 'None'], answer: 1 },
            { question: 'Which major movement did he actively support?', options: ['Non-Cooperation', 'Quit India', 'Swadeshi', 'All of the above'], answer: 3 },
            { question: 'What was his primary contribution to the freedom struggle?', options: ['Armed rebellion', 'Integrating labour rights with nationalism', 'Diplomacy', 'None'], answer: 1 }
        ]
    },
    {
        id: 'narayana', name: 'Narayana Iyengar', popular: 'Narayana',
        born: '1885', died: '1960',
        image: './images/Narayana Iyengar.jpg', videoLink: 'https://youtube.com',
        role: 'A pioneering freedom fighter from Madurai who organized civil disobedience and led from the front.',
        points: ['Led several protest marches against the Rowlatt Act in Southern India.', 'Played a major role in the Individual Satyagraha and was imprisoned.', 'Worked tirelessly for the upliftment of the underprivileged.', 'A close associate of Rajaji and other prominent Congress leaders.', 'Highly respected for his organizational skills and dedication.'],
        quiz: [
            { question: 'Narayana Iyengar was primarily active in which city?', options: ['Chennai', 'Madurai', 'Tanjore', 'None'], answer: 1 },
            { question: 'Which act did he strongly protest against?', options: ['Forest Act', 'Rowlatt Act', 'Salt Act', 'None'], answer: 1 },
            { question: 'Who was his close political associate?', options: ['Rajaji', 'Netaji', 'Bose', 'None'], answer: 0 },
            { question: 'Which Satyagraha did he play a major role in?', options: ['Dandi', 'Individual Satyagraha', 'Champaran', 'None'], answer: 1 },
            { question: 'He is respected for what quality?', options: ['Scientific research', 'Organizational skills', 'Aviation', 'None'], answer: 1 }
        ]
    },
    {
        id: 'kothainayaki', name: 'Kothainayaki Ammal', popular: 'Vai. Mu. Ko',
        born: '1 December 1901', died: '20 February 1960',
        image: './images/Kothainayaki.jpg', videoLink: 'https://youtube.com',
        role: 'A prolific Tamil writer, editor, and freedom fighter who used literature to awaken nationalist spirit.',
        points: ['One of the first female editors in India, managing the journal "Jaganmohini".', 'Authored over 100 novels and was a pioneer of social themes in Tamil literature.', 'Participated in the Civil Disobedience and Satyagraha movements.', 'Imprisoned for her anti-British activities and writings.', 'A close associate of Kasturba Gandhi and a symbol of women\'s empowerment.'],
        quiz: [
            { question: 'Which journal was Kothainayaki Ammal the editor of?', options: ['The Hindu', 'Jaganmohini', 'Swadeshi', 'None'], answer: 1 },
            { question: 'Approximately how many novels did she author?', options: ['10', '50', 'Over 100', 'None'], answer: 2 },
            { question: 'Which movement did she actively participate in?', options: ['Non-Cooperation', 'Civil Disobedience', 'Quit India', 'None'], answer: 1 },
            { question: 'She was a close associate of which fellow woman leader?', options: ['Sarojini Naidu', 'Kasturba Gandhi', 'Aruna Asaf Ali', 'None'], answer: 1 },
            { question: 'What was her primary tool for the freedom struggle?', options: ['Armed revolution', 'Literature and editing', 'Diplomacy', 'None'], answer: 1 }
        ]
    },
    {
        id: 'krishnasamy', name: 'Krishnasamy Naidu', popular: 'Krishnasamy',
        born: '1906', died: '1985',
        image: './images/Krishnasamy Naidu.jpeg', videoLink: 'https://youtube.com',
        role: 'A dedicated freedom fighter from the Madurai region who participated in several landmark nationalist movements.',
        points: ['Active participant in the Vedaranyam Salt Satyagraha.', 'Organized youth for the Quit India Movement in Southern Tamil Nadu.', 'Repeatedly imprisoned for his defiant actions against the British.', 'Devoted follower of Gandhian principles of non-violence.', 'Dedicated his post-independence life to social upliftment and village development.'],
        quiz: [
            { question: 'Krishnasamy Naidu was primarily active in which region?', options: ['Chennai', 'Madurai/South TN', 'Coimbatore', 'None'], answer: 1 },
            { question: 'Which Salt Satyagraha did he participate in?', options: ['Dandi', 'Vedaranyam', 'Champaran', 'None'], answer: 1 },
            { question: 'What was his primary ideological influence?', options: ['Armed struggle', 'Gandhian non-violence', 'Monarchy', 'None'], answer: 1 },
            { question: 'Which major 1940s movement did he help organize locally?', options: ['Quit India', 'Khilafat', 'Swaraj', 'None'], answer: 0 },
            { question: 'What did he focus on after independence?', options: ['Banking', 'Village development and social upliftment', 'IT', 'None'], answer: 1 }
        ]
    },
    {
        id: 'neelakanta', name: 'Neelakanta Brahmachari', popular: 'Omkarananda',
        born: '1889', died: '1978',
        image: './images/Neelakanta.jpg', videoLink: 'https://youtube.com',
        role: 'A revolutionary nationalist who founded the Bharatha Matha Sangam to resist British rule through armed struggle.',
        points: ['Founder of the secret "Bharatha Matha Sangam" in 1907.', 'The prime accused in the Tirunelveli Conspiracy Case.', 'Associated with the assassination of British Collector Robert Ashe.', 'Spent several years in prison for his underground revolutionary work.', 'Later became an ascetic known as Sri Omkarananda Swami.'],
        quiz: [
            { question: 'Neelakanta Brahmachari founded which secret society?', options: ['Anushilan Samiti', 'Bharatha Matha Sangam', 'Abhinav Bharat', 'None'], answer: 1 },
            { question: 'He was the prime accused in which conspiracy case?', options: ['Kakori', 'Tirunelveli Conspiracy Case', 'Meerut', 'None'], answer: 1 },
            { question: 'Which British official was assassinated by his associate?', options: ['Collector Robert Ashe', 'General Dyer', 'Lord Curzon', 'None'], answer: 0 },
            { question: 'What did he become later in life?', options: ['A politician', 'An ascetic (Omkarananda Swami)', 'A scientist', 'None'], answer: 1 },
            { question: 'In which year did he found his secret society?', options: ['1947', '1907', '1920', 'None'], answer: 1 }
        ]
    },
    {
        id: 'sankaiya', name: 'M. Sankaiya', popular: 'Sankaiya',
        born: '1912', died: '1990',
        image: './images/M. Sankaiya.jpg', videoLink: 'https://youtube.com',
        role: 'A grassroots freedom fighter who played a vital role in mobilizing communities in Rural Tamil Nadu.',
        points: ['Organized local protests against the Salt Tax in coastal regions.', 'Spent several years in prison for his role in the Quit India Movement.', 'A passionate advocate for social equality and the abolition of untouchability.', 'Worked closely with the Congress party in district-level organization.', 'Known for his simple lifestyle and persistence in the face of British oppression.'],
        quiz: [
            { question: 'What was M. Sankaiya known for?', options: ['Grassroots mobilization', 'Banking', 'Sailing', 'None'], answer: 0 },
            { question: 'Which movement caused him to spend several years in prison?', options: ['Quit India', 'Khilafat', '1857 Revolt', 'None'], answer: 0 },
            { question: 'What social cause was he a passionate advocate for?', options: ['Social equality', 'Industrialization', 'Monarchy', 'None'], answer: 0 },
            { question: 'He organized protests against which tax?', options: ['Income tax', 'Salt Tax', 'Land tax', 'None'], answer: 1 },
            { question: 'Which party was he closely associated with?', options: ['Justice Party', 'Congress', 'Muslim League', 'None'], answer: 1 }
        ]
    },
    {
        id: 'marudhanayagam', name: 'Marudhanayagam', popular: 'Khan Sahib',
        born: '1725', died: '1764',
        image: './images/Marudhanayagam.jpg', videoLink: 'https://youtube.com',
        role: 'A complex historical figure and military genius who rose to become the Governor of Madurai.',
        points: ['Born as Marudhanayagam, he later converted and was known as Muhammed Yusuf Khan.', 'A brilliant military tactician in the service of the Arcot Nawab and the British.', 'Later rebelled against the British and the Nawab to claim independent rule.', 'Defended Madurai and successfully managed its administration.', 'Executed by the British in 1764, becoming a legendary figure in Tamil lore.'],
        quiz: [
            { question: 'Marudhanayagam was later known by what name?', options: ['Tipu Sultan', 'Yusuf Khan', 'Puli Thevar', 'None'], answer: 1 },
            { question: 'He rose to become the Governor of which city?', options: ['Chennai', 'Madurai', 'Trichy', 'None'], answer: 1 },
            { question: 'He was a brilliant tactician specialized in what?', options: ['Naval warfare', 'Military tactics', 'Diplomacy', 'None'], answer: 1 },
            { question: 'Who did he eventually rebel against?', options: ['The British and Arcot Nawab', 'Mughals', 'French', 'None'], answer: 0 },
            { question: 'When was he executed?', options: ['1857', '1764', '1947', 'None'], answer: 1 }
        ]
    },
    {
        id: 'mohan', name: 'Mohan', popular: 'Mohan',
        born: '1915', died: '1982',
        image: './images/Mohan.jpg', videoLink: 'https://youtube.com',
        role: 'A dedicated freedom fighter from Tamil Nadu who was active in Student and Youth movements.',
        points: ['Active in the student protests against the Rowlatt Act.', 'A key organizer of the youth wing of the independence movement.', 'Participated in the Individual Satyagraha and was imprisoned.', 'Worked tirelessly for the spread of literacy and nationalist ideas.', 'Continued his service in the educational sector after independence.'],
        quiz: [
            { question: 'Mohan was primarily active in which type of movements?', options: ['Banking', 'Student and Youth movements', 'Religious', 'None'], answer: 1 },
            { question: 'Which act did he protest against as a student?', options: ['Salt Act', 'Rowlatt Act', 'Forest Act', 'None'], answer: 1 },
            { question: 'Did he participate in the Individual Satyagraha?', options: ['No', 'Yes', 'Never', 'None'], answer: 1 },
            { question: 'What did he work for besides independence?', options: ['Literacy', 'Shipping', 'Mining', 'None'], answer: 0 },
            { question: 'What sector did he continue to serve after independence?', options: ['Military', 'Educational', 'IT', 'None'], answer: 1 }
        ]
    },
    {
        id: 'pulithevar', name: 'Puli Thevar', popular: 'Ondiveeran\'s Leader',
        born: '1715', died: '1767',
        image: './images/puli thevar.jpg', videoLink: 'https://youtube.com',
        role: 'One of the earliest opponents of British rule in India. He was the chieftain of Nerkattumseval who fought against the East India Company.',
        points: ['One of the first Indian rulers to fight the British East India Company.', 'Ruled Nerkattumseval (present-day Sankarankovil area).', 'Defeated the British forces multiple times using guerilla tactics.', 'Formed alliances with other Palayakkarars to resist colonial power.', 'A pioneer of armed resistance in South India.'],
        quiz: [
            { question: 'Puli Thevar was the chieftain of which region?', options: ['Madurai', 'Nerkattumseval', 'Sivaganga', 'Tanjore'], answer: 1 },
            { question: 'He was one of the earliest to fight against whom?', options: ['Mughals', 'French', 'British East India Company', 'Dutch'], answer: 2 },
            { question: 'What battle tactic did he use effectively?', options: ['Naval warfare', 'Guerilla warfare', 'Trench warfare', 'Aerial attack'], answer: 1 },
            { question: 'In which century did Puli Thevar live?', options: ['16th', '17th', '18th', '19th'], answer: 2 },
            { question: 'Which commander served under Puli Thevar?', options: ['Oomaithurai', 'Ondiveeran', 'Kuyili', 'Maruthu'], answer: 1 }
        ],
        ta: {
            name: 'பூலித்தேவர்',
            popular: 'ஒண்டிவீரனின் தலைவர்',
            born: '1715',
            died: '1767',
            role: 'பிரிட்டிஷ் ஆட்சிக்கு எதிராக முதன்முதலில் போரிட்ட இந்திய ஆட்சியாளர்களில் ஒருவர்.',
            points: ['பிரிட்டிஷ் கிழக்கிந்திய கம்பெனிக்கு எதிராக போரிட்ட முதல் இந்திய ஆட்சியாளர்களில் ஒருவர்.', 'நெற்கட்டும்செவலை ஆட்சி செய்தார்.', 'கொரில்லா தந்திரங்களைப் பயன்படுத்தி பிரிட்டிஷாரை பலமுறை தோற்கடித்தார்.', 'காலனித்துவ அதிகாரத்தை எதிர்க்க மற்ற பாளையக்காரர்களுடன் கூட்டணி அமைத்தார்.', 'தென் இந்தியாவில் ஆயுதமேந்திய எதிர்ப்பின் முன்னோடி.'],
            quiz: [
                { question: 'பூலித்தேவர் எந்தப் பகுதியின் தலைவராக இருந்தார்?', options: ['மதுரை', 'நெற்கட்டும்செவல்', 'சிவகங்கை', 'தஞ்சாவூர்'], answer: 1 },
                { question: 'அவர் யாருக்கு எதிராக முதன்முதலில் போரிட்டார்?', options: ['முகலாயர்கள்', 'பிரஞ்சு', 'பிரிட்டிஷ் கிழக்கிந்திய கம்பெனி', 'டச்சு'], answer: 2 },
                { question: 'அவர் எந்த போர் தந்திரத்தை பயன்படுத்தினார்?', options: ['கடற்படை போர்', 'கொரில்லா போர்', 'குழிப்போர்', 'வான் தாக்குதல்'], answer: 1 },
                { question: 'பூலித்தேவர் எந்த நூற்றாண்டில் வாழ்ந்தார்?', options: ['16-ஆம்', '17-ஆம்', '18-ஆம்', '19-ஆம்'], answer: 2 },
                { question: 'பூலித்தேவரின் கீழ் பணியாற்றிய தளபதி யார்?', options: ['ஊமைத்துரை', 'ஒண்டிவீரன்', 'குயிலி', 'மருது'], answer: 1 }
            ]
        }
    },
    {
        id: 'voc', name: 'V.O. Chidambaram Pillai', popular: 'V.O.C. (Kappalottiya Tamizhan)',
        born: '5 September 1872', died: '18 November 1936',
        image: './images/chidambaram.jpg', videoLink: 'https://youtube.com',
        role: 'An Indian independence activist, lawyer, and pioneer who launched the first Indian shipping company to challenge British monopoly.',
        points: ['Founded the Swadeshi Steam Navigation Company (SSNC).', 'Broke the British monopoly on sea trade between India and Sri Lanka.', 'Organized the famous Coral Mill Strike in Tuticorin.', 'Imprisoned and sentenced to brutal hard labor by the British.', 'Known as "Kappalottiya Tamizhan" (The Tamil who sailed the ship).'],
        quiz: [
            { question: 'What company did V.O.C. found?', options: ['Tata Ships', 'Swadeshi Steam Navigation Company', 'Indian Maritime Co.', 'Bombay Docks'], answer: 1 },
            { question: 'What British monopoly did he challenge?', options: ['Railway', 'Sea trade', 'Textiles', 'Salt'], answer: 1 },
            { question: 'What is his popular title?', options: ['Kaviarasu', 'Kappalottiya Tamizhan', 'Mahakavi', 'Periyar'], answer: 1 },
            { question: 'Which strike did he organize?', options: ['Champaran Strike', 'Coral Mill Strike', 'Ahmedabad Strike', 'Bombay Mill Strike'], answer: 1 },
            { question: 'In which city was the mill strike?', options: ['Chennai', 'Madurai', 'Tuticorin', 'Trichy'], answer: 2 }
        ],
        ta: {
            name: 'வ.உ. சிதம்பரம் பிள்ளை',
            popular: 'வ.உ.சி. (கப்பலோட்டிய தமிழன்)',
            born: '5 செப்டம்பர் 1872',
            died: '18 நவம்பர் 1936',
            role: 'பிரிட்டிஷ் ஏகபோக கடல் வர்த்தகத்தை சவாலுக்கு உள்ளாக்கிய முதல் இந்திய கப்பல் நிறுவனத்தை நிறுவிய சுதந்திரப் போராட்ட வீரர்.',
            points: ['சுதேசி நீராவிக் கப்பல் நிறுவனத்தை நிறுவினார்.', 'இந்தியாவுக்கும் இலங்கைக்கும் இடையிலான கடல் வர்த்தகத்தில் பிரிட்டிஷ் ஏகபோகத்தை உடைத்தார்.', 'தூத்துக்குடியில் புகழ்பெற்ற கோரல் மில் வேலைநிறுத்தத்தை ஏற்பாடு செய்தார்.', 'பிரிட்டிஷாரால் சிறையிலடைக்கப்பட்டு கொடூரமான கடின உழைப்புக்கு தண்டிக்கப்பட்டார்.', '"கப்பலோட்டிய தமிழன்" என்ற பெயரில் அழைக்கப்படுகிறார்.'],
            quiz: [
                { question: 'வ.உ.சி. எந்த நிறுவனத்தை நிறுவினார்?', options: ['டாடா கப்பல்கள்', 'சுதேசி நீராவிக் கப்பல் நிறுவனம்', 'இந்திய கடல்சார் நிறுவனம்', 'பம்பாய் துறைமுகம்'], answer: 1 },
                { question: 'அவர் எந்த பிரிட்டிஷ் ஏகபோகத்தை சவாலுக்கு உள்ளாக்கினார்?', options: ['ரயில்வே', 'கடல் வர்த்தகம்', 'ஜவுளி', 'உப்பு'], answer: 1 },
                { question: 'அவரது பிரபலமான பட்டம் என்ன?', options: ['கவியரசு', 'கப்பலோட்டிய தமிழன்', 'மகாகவி', 'பெரியார்'], answer: 1 },
                { question: 'அவர் எந்த வேலைநிறுத்தத்தை ஏற்பாடு செய்தார்?', options: ['சம்பாரன் வேலைநிறுத்தம்', 'கோரல் மில் வேலைநிறுத்தம்', 'அகமதாபாத் வேலைநிறுத்தம்', 'பம்பாய் மில் வேலைநிறுத்தம்'], answer: 1 },
                { question: 'மில் வேலைநிறுத்தம் எந்த நகரத்தில் நடந்தது?', options: ['சென்னை', 'மதுரை', 'தூத்துக்குடி', 'திருச்சி'], answer: 2 }
            ]
        }
    },

    {
        id: 'chinnamalai', name: 'Dheeran Chinnamalai', popular: 'Chinnamalai',
        born: '17 April 1756', died: '31 July 1805',
        image: './images/dheeran.jpg',
        videoLink: 'https://youtube.com',
        role: 'A Palayakkarar and Kongu chieftain who fought valiantly against the British East India Company.',
        points: ['Formed an alliance with Tipu Sultan against the British.', 'Fought massive battles at Cauvery, Odanilai, and Arachalur.', 'He seized tax money collected by the British and gave it back to the people.', 'Betrayed by his cook and hanged at Sankagiri Fort.', 'A symbol of Tamil valor in the Kongu region.'],
        quiz: [
            { question: 'Dheeran Chinnamalai was a chieftain of which region?', options: ['Madurai', 'Kongu Nadu', 'Chennai', 'Tirunelveli'], answer: 1 },
            { question: 'Who did he ally with to fight the British?', options: ['Mughals', 'Tipu Sultan', 'French', 'Marathas'], answer: 1 },
            { question: 'Where was he hanged?', options: ['Vellore Fort', 'Sankagiri Fort', 'Gingee Fort', 'Red Fort'], answer: 1 },
            { question: 'What did he do with the tax money he seized?', options: ['Built a palace', 'Gave it back to the people', 'Bought ships', 'Buried it'], answer: 1 },
            { question: 'Who betrayed him to the British?', options: ['His minister', 'His cook', 'His brother', 'A rival king'], answer: 1 }
        ],
        ta: {
            name: 'தீரன் சின்னமலை',
            popular: 'சின்னமலை',
            born: '17 ஏப்ரல் 1756',
            died: '31 ஜூலை 1805',
            role: 'பிரிட்டிஷ் கிழக்கிந்திய கம்பெனிக்கு எதிராக வீரத்துடன் போரிட்ட கொங்கு நாட்டு பாளையக்காரர்.',
            points: ['பிரிட்டிஷாருக்கு எதிராக திப்பு சுல்தானுடன் கூட்டணி அமைத்தார்.', 'காவிரி, ஓடாநிலை மற்றும் அரச்சலூர் ஆகிய இடங்களில் பெரும் போர்களை நடத்தினார்.', 'ஆங்கிலேயர்கள் வசூலித்த வரிப்பணத்தைப் பறித்து மக்களிடமே கொடுத்தார்.', 'தனது சமையல்காரரால் காட்டிக் கொடுக்கப்பட்டு சங்ககிரி கோட்டையில் தூக்கிலிடப்பட்டார்.', 'கொங்கு மண்டலத்தின் வீரத்தின் அடையாளம்.'],
            quiz: [
                { question: 'தீரன் சின்னமலை எந்தப் பகுதியின் தலைவராக இருந்தார்?', options: ['மதுரை', 'கொங்கு நாடு', 'சென்னை', 'திருநெல்வேலி'], answer: 1 },
                { question: 'பிரிட்டிஷாரை எதிர்க்க அவர் யாருடன் கூட்டணி அமைத்தார்?', options: ['முகலாயர்கள்', 'திப்பு சுல்தான்', 'பிரஞ்சு', 'மராட்டியர்கள்'], answer: 1 },
                { question: 'அவர் எங்கே தூக்கிலிடப்பட்டார்?', options: ['வேலூர் கோட்டை', 'சங்ககிரி கோட்டை', 'செஞ்சிக் கோட்டை', 'செங்கோட்டை'], answer: 1 },
                { question: 'பறிமுதல் செய்த வரிப்பணத்தை அவர் என்ன செய்தார்?', options: ['அரண்மனை கட்டினார்', 'மக்களுக்கே திருப்பிக் கொடுத்தார்', 'கப்பல்கள் வாங்கினார்', 'புதைத்து வைத்தார்'], answer: 1 },
                { question: 'யார் அவரை ஆங்கிலேயரிடம் காட்டிக்கொடுத்தது?', options: ['அவரது அமைச்சர்', 'அவரது சமையல்காரர்', 'அவரது சகோதரர்', 'போட்டி மன்னர்'], answer: 1 }
            ]
        }
    },
    {
        id: 'valliammai', name: 'Thillaiyadi Valliammai', popular: 'Valliammai',
        born: '22 February 1898', died: '22 February 1914',
        image: './images/7baea0cf1f096da7a5936a6f446c435f.jpg',
        videoLink: 'https://youtube.com',
        role: 'A young South African-born Indian Tamil who sacrificed her life participating in Mahatma Gandhi\'s Satyagraha.',
        points: ['Participated in the anti-pass protests in South Africa.', 'Imprisoned under harsh conditions involving hard labor.', 'Refused release without the repeal of unfair laws.', 'Died of illness shortly after release due to prison abuse.', 'Inspired Gandhi immensely with her dedication and sacrifice.'],
        quiz: [
            { question: 'Where did Thillaiyadi Valliammai participate in Satyagraha?', options: ['London', 'South Africa', 'India', 'Sri Lanka'], answer: 1 },
            { question: 'Whose movement did she participate in?', options: ['Subhas Chandra Bose', 'Nelson Mandela', 'Mahatma Gandhi', 'V.O.C'], answer: 2 },
            { question: 'At what age did she pass away?', options: ['16', '25', '30', '40'], answer: 0 },
            { question: 'Why was she imprisoned?', options: ['Theft', 'Anti-pass protests', 'Spying', 'Treason'], answer: 1 },
            { question: 'What was her root village in Tamil Nadu?', options: ['Madurai', 'Thillaiyadi', 'Chennai', 'Trichy'], answer: 1 }
        ],
        ta: {
            name: 'தில்லையாடி வள்ளியம்மை',
            popular: 'வள்ளியம்மை',
            born: '22 பிப்ரவரி 1898',
            died: '22 பிப்ரவரி 1914',
            role: 'மகாத்மா காந்தியின் சத்யாகிரகத்தில் பங்கேற்று உயிர்த்தியாகம் செய்த தென்னாப்பிரிக்காவில் பிறந்த இந்தியத் தமிழர்.',
            points: ['தென்னாப்பிரிக்காவில் நடந்த இனவெறி எதிர்ப்புப் போராட்டங்களில் பங்கேற்றார்.', 'கடின உழைப்புடன் கூடிய சிறைத் தண்டனையை அனுபவித்தார்.', 'அநீதியான சட்டங்களை நீக்காமல் விடுதலை செய்யப்படுவதை மறுத்தார்.', 'சிறை சித்திரவதைகளால் ஏற்பட்ட உடல்நலக் குறைவால் விடுதலையான சில நாட்களில் இறந்தார்.', 'காந்தியடிகளுக்குப் பெரும் உத்வேகம் அளித்த வீரமங்கை.'],
            quiz: [
                { question: 'தில்லையாடி வள்ளியம்மை எங்கே சத்யாகிரகத்தில் பங்கேற்றார்?', options: ['லண்டன்', 'தென்னாப்பிரிக்கா', 'இந்தியா', 'இலங்கை'], answer: 1 },
                { question: 'அவர் யாருடைய இயக்கத்தில் பங்கேற்றார்?', options: ['சுபாஷ் சந்திர போஸ்', 'நெல்சன் மண்டேலா', 'மகாத்மா காந்தி', 'வ.உ.சி'], answer: 2 },
                { question: 'அவர் எந்த வயதில் மறைந்தார்?', options: ['16', '25', '30', '40'], answer: 0 },
                { question: 'அவர் ஏன் சிறையில் அடைக்கப்பட்டார்?', options: ['திருட்டு', 'அனுமதிச் சீட்டு எதிர்ப்புப் போராட்டம்', 'உளவு பார்த்தல்', 'தேசத்துரோகம்'], answer: 1 },
                { question: 'தமிழ்நாட்டில் அவரது சொந்த ஊர் எது?', options: ['மதுரை', 'தில்லையாடி', 'சென்னை', 'திருச்சி'], answer: 1 }
            ]
        }
    },
    {
        id: 'vvsaiyar', name: 'V. V. S. Aiyar', popular: 'Maharishi Aiyar',
        born: '2 April 1881', died: '3 June 1925',
        image: './images/Aiyar.jpg',
        videoLink: 'https://youtube.com',
        role: 'A revolutionary freedom fighter and writer, known as the "Father of modern Tamil short story."',
        points: ['Associated with V.D. Savarkar at the India House in London.', 'Smuggled arms to revolutionaries in India.', 'Established the Bharadwaja Ashram in Cheranmahadevi.', 'Translated the Tirukkural into English.', 'Trained Vanchinathan for the Ashe assassination.'],
        quiz: [
            { question: 'What literary title is V.V.S. Aiyar known by?', options: ['Mahakavi', 'Father of modern Tamil short story', 'Tamil Thatha', 'Kavimani'], answer: 1 },
            { question: 'Which famous literature did he translate to English?', options: ['Silappatikaram', 'Tirukkural', 'Ramayana', 'Mahabharata'], answer: 1 },
            { question: 'Whom did he train for an assassination?', options: ['Bhagat Singh', 'Kattabomman', 'Vanchinathan', 'Subramaniya Siva'], answer: 2 },
            { question: 'Where did he associate with V.D. Savarkar?', options: ['India House, London', 'Paris', 'Berlin', 'Tokyo'], answer: 0 },
            { question: 'Which ashram did he establish?', options: ['Sabarmati', 'Aurobindo Ashram', 'Bharadwaja Ashram', 'Ramakrishna Math'], answer: 2 }
        ],
        ta: {
            name: 'வ. வ. சு. ஐயர்',
            popular: 'மகரிஷி ஐயர்',
            born: '2 ஏப்ரல் 1881',
            died: '3 ஜூன் 1925',
            role: 'நவீன தமிழ் சிறுகதையின் தந்தை என்று அழைக்கப்படும் புரட்சியாளர் மற்றும் எழுத்தாளர்.',
            points: ['லண்டனில் உள்ள இந்தியா ஹவுஸில் வி.டி. சாவர்க்கருடன் தொடர்பு வைத்திருந்தார்.', 'புரட்சியாளர்களுக்கு ஆயுதங்களை கடத்தினார்.', 'சேரன்மகாதேவியலில் பரத்வாஜ ஆசிரமத்தை நிறுவினார்.', 'திருக்குறளை ஆங்கிலத்தில் மொழிபெயர்த்தார்.', 'ஆஷ் படுகொலைக்காக வாஞ்சிநாதனுக்கு பயிற்சி அளித்தார்.'],
            quiz: [
                { question: 'வ.வ.சு. ஐயர் என்ன இலக்கியப் பட்டப்பெயரால் அறியப்படுகிறார்?', options: ['மகாகவி', 'நவீன தமிழ் சிறுகதையின் தந்தை', 'தமிழ் தாத்தா', 'Kavimani'], answer: 1 },
                { question: 'அவர் எந்த புகழ்பெற்ற இலக்கியத்தை ஆங்கிலத்தில் மொழிபெயர்த்தார்?', options: ['சிலப்பதிகாரம்', 'திருக்குறள்', 'ராமாயணம்', 'மகாபாரதம்'], answer: 1 },
                { question: 'ஒரு படுகொலைக்காக அவர் யாரை பயிற்றுவித்தார்?', options: ['பகத் சிங்', 'கட்டபொம்மன்', 'வாஞ்சிநாதன்', 'சுப்பிரமணிய சிவா'], answer: 2 },
                { question: 'வி.டி. சாவர்க்குடன் அவர் எங்கே சேர்ந்து பணியாற்றினார்?', options: ['இந்தியா ஹவுஸ், லண்டன்', 'பாரிஸ்', 'பெர்லின்', 'டோக்கியோ'], answer: 0 },
                { question: 'அவர் எந்த ஆசிரமத்தை நிறுவினார்?', options: ['சபர்மதி', 'அரவிந்த ஆசிரமம்', 'பரத்வாஜ ஆசிரமம்', 'ராமகிருஷ்ண மடம்'], answer: 2 }
            ]
        }
    },
    {
        id: 'champakaraman', name: 'Champakaraman Pillai', popular: 'Dr. Pillai',
        born: '15 September 1891', died: '26 May 1934',
        image: './images/chidambaram.jpg',
        videoLink: 'https://youtube.com',
        role: 'An Indian political activist and revolutionary who operated primarily from Europe against the British.',
        points: ['Coined the slogan "Jai Hind".', 'Served as the Foreign Minister of the Provisional Government of India in Kabul.', 'Worked with the German Navy during WWI to attack British ships.', 'Founded the Indian National Volunteer Corps.', 'Demanded an apology from Hitler for derogatory remarks about Indians.'],
        quiz: [
            { question: 'What famous slogan did Champakaraman Pillai coin?', options: ['Quit India', 'Jai Hind', 'Vande Mataram', 'Inquilab Zindabad'], answer: 1 },
            { question: 'Where did he primarily operate from?', options: ['Europe', 'USA', 'Japan', 'South Africa'], answer: 0 },
            { question: 'Whose navy did he work with during WWI?', options: ['British Navy', 'Russian Navy', 'German Navy', 'French Navy'], answer: 2 },
            { question: 'What prominent German leader did he demand an apology from?', options: ['Bismarck', 'Hitler', 'Kaiser', 'Rommel'], answer: 1 },
            { question: 'He was a minister in which provisional government?', options: ['Azad Hind in Singapore', 'Provisional Government in Kabul', 'Republic of India', 'None'], answer: 1 }
        ],
        ta: {
            name: 'சம்பகராமன் பிள்ளை',
            popular: 'டாக்டர் பிள்ளை',
            born: '15 செப்டம்பர் 1891',
            died: '26 மே 1934',
            role: 'பிரிட்டிஷாருக்கு எதிராக முதன்மையாக ஐரோப்பாவில் இருந்து செயல்பட்ட இந்திய அரசியல் செயல்திட்டவாதி மற்றும் புரட்சியாளர்.',
            points: ['"ஜெய் ஹிந்த்" என்ற கோஷத்தை உருவாக்கினார்.', 'காபூலில் இந்தியாவின் தற்காலிக அரசாங்கத்தின் வெளியுறவு அமைச்சராக பணியாற்றினார்.', 'முதல் உலகப் போரின் போது பிரிட்டிஷ் கப்பல்களை தாக்க ஜெர்மன் கடற்படையுடன் சேர்ந்து பணியாற்றினார்.', 'இந்திய தேசிய தன்னார்வலர் படையை நிறுவினார்.', 'இந்தியர்களைப் பற்றிய இழிவான கருத்துகளுக்கு ஹிட்லரிடம் மன்னிப்பு கேட்டார்.'],
            quiz: [
                { question: 'சம்பகராமன் பிள்ளை உருவாக்கிய புகழ்பெற்ற கோஷம் என்ன?', options: ['வெள்ளையனே வெளியேறு', 'ஜெய் ஹிந்த்', 'வந்தே மாதரம்', 'இன்கிலாப் ஜிந்தாபாத்'], answer: 1 },
                { question: 'அவர் முதன்மையாக எங்கிருந்து செயல்பட்டார்?', options: ['ஐரோப்பா', 'அமெரிக்கா', 'ஜப்பான்', 'தென்னாப்பிரிக்கா'], answer: 0 },
                { question: 'முதல் உலகப் போரின் போது அவர் எந்த கடற்படையுடன் பணியாற்றினார்?', options: ['பிரிட்டிஷ் கடற்படை', 'ரஷ்ய கடற்படை', 'ஜெர்மன் கடற்படை', 'பிரஞ்சு கடற்படை'], answer: 2 },
                { question: 'அவர் யாரிடம் மன்னிப்பு கேட்டார்?', options: ['பிஸ்மார்க்', 'ஹிட்லர்', 'கைசர்', 'ரோம்மல்'], answer: 1 },
                { question: 'அவர் எந்த தற்காலிக அரசாங்கத்தில் அமைச்சராக இருந்தார்?', options: ['சிங்கப்பூரில் ஆசாத் ஹிந்த்', 'காபூலில் தற்காலிக அரசாங்கம்', 'இந்தியா குடியரசு', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'kamaraj', name: 'K. Kamaraj', popular: 'Kingmaker',
        born: '15 July 1903', died: '2 October 1975',
        image: './images/kamaraj.jpg',
        videoLink: 'https://youtube.com',
        role: 'A leader of the Indian National Congress, celebrated for bringing widespread education and rural development to Tamil Nadu.',
        points: ['Participated actively in the Salt Satyagraha and Quit India Movement.', 'Served as the Chief Minister of Madras State (Tamil Nadu).', 'Introduced the Mid-day Meal Scheme to boost school attendance.', 'Played a crucial role as "Kingmaker" in appointing two Prime Ministers.', 'Awarded the Bharat Ratna posthumously.'],
        quiz: [
            { question: 'What is K. Kamaraj popularly known as in national politics?', options: ['Netaji', 'Kingmaker', 'Iron Man', 'Chacha'], answer: 1 },
            { question: 'Which revolutionary scheme did he introduce in schools?', options: ['Free Laptops', 'Mid-day Meal Scheme', 'Online Classes', 'Free Uniforms'], answer: 1 },
            { question: 'Which state did he serve as Chief Minister?', options: ['Kerala', 'Andhra Pradesh', 'Tamil Nadu (Madras State)', 'Karnataka'], answer: 2 },
            { question: 'Which major movements did he participate in?', options: ['Revolt of 1857', 'Salt Satyagraha and Quit India', 'Swadeshi Movement only', 'None'], answer: 1 },
            { question: 'What high civilian award was he given?', options: ['Padma Shri', 'Bharat Ratna', 'Param Vir Chakra', 'Padma Vibhushan'], answer: 1 }
        ],
        ta: {
            name: 'க. காமராஜர்',
            popular: 'கிங்மேக்கர்',
            born: '15 ஜூலை 1903',
            died: '2 அக்டோபர் 1975',
            role: 'தமிழ்நாட்டில் பரவலான கல்வி மற்றும் கிராம வளர்ச்சியை கொண்டு வந்த இந்திய தேசிய காங்கிரஸின் தலைவர்.',
            points: ['உப்பு சத்தியாகிரகம் மற்றும் வெள்ளையனே வெளியேறு இயக்கங்களில் தீவிரமாகப் பங்கேற்றார்.', 'சென்னை மாநில (தமிழ்நாடு) முதலமைச்சராகப் பணியாற்றினார்.', 'பள்ளி வருகையை ஊக்குவிக்க மதிய உணவுத் திட்டத்தை அறிமுகப்படுத்தினார்.', 'இரண்டு பிரதமர்களை நியமிப்பதில் "கிங்மேக்கர்" என முக்கிய பங்கு வகித்தார்.', 'மரணத்திற்குப் பிறகு பாரத ரத்னா விருது வழங்கப்பட்டது.'],
            quiz: [
                { question: 'க. காமராஜர் தேசிய அரசியலில் பிரபலமாக எவ்வாறு அழைக்கப்படுகிறார்?', options: ['நேதாஜி', 'கிங் மேக்கர்', 'இரும்பு மனிதர்', 'சாச்சா'], answer: 1 },
                { question: 'அவர் பள்ளிகளில் எந்தப் புரட்சிகர திட்டத்தை அறிமுகப்படுத்தினார்?', options: ['இலவச மடிக்கணினி', 'மதிய உணவுத் திட்டம்', 'ஆன்லைன் வகுப்பு', 'இலவச சீருடை'], answer: 1 },
                { question: 'அவர் எந்த மாநிலத்தின் முதலமைச்சராக இருந்தார்?', options: ['கேரளா', 'ஆந்திர பிரதேசம்', 'தமிழ்நாடு', 'கர்நாடகா'], answer: 2 },
                { question: 'அவர் எந்த முக்கிய இயக்கங்களில் பங்கேற்றார்?', options: ['1857 புரட்சி', 'உப்பு சத்தியாகிரகம் மற்றும் வெள்ளையனே வெளியேறு', 'சுதேசி இயக்கம் மட்டும்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவருக்கு வழங்கப்பட்ட உயரிய விருது எது?', options: ['பத்மஸ்ரீ', 'பாரத ரத்னா', 'பரம வீர சக்கரம்', 'பத்ம விபூஷன்'], answer: 1 }
            ]
        }
    },
    {
        id: 'alagumuthu', name: 'Alagumuthu Kone', popular: 'Alagumuthu',
        born: '1710', died: '1759',
        image: './images/alagumuthu.jpg',
        videoLink: 'https://youtube.com',
        role: 'An early freedom fighter and a Polygar who led a resistance against the British East India Company in Tirunelveli.',
        points: ['Refused to pay taxes to the British and the Nawab of Arcot.', 'One of the first to spark the fire of independence in South India.', 'Fought against the forces of Khan Sahib.', 'Captured and executed by jumping into an oil vat or being shot (historical accounts vary).', 'Revered as a martyr for Tamil freedom.'],
        quiz: [
            { question: 'Where did Alagumuthu Kone lead his resistance?', options: ['Chennai', 'Tirunelveli', 'Madurai', 'Trichy'], answer: 1 },
            { question: 'What did he refuse to pay to the British?', options: ['Taxes', 'Fine', 'Debt', 'Commission'], answer: 0 },
            { question: 'Who was his primary British-aligned opponent?', options: ['Robert Clive', 'Khan Sahib', 'General Dyer', 'Arthur Wellesley'], answer: 1 },
            { question: 'In which century did he live?', options: ['16th', '17th', '18th', '19th'], answer: 2 },
            { question: 'He is remembered as one of the earliest...?', options: ['Freedom Fighters', 'Kings', 'Scientists', 'Poets'], answer: 0 }
        ],
        ta: {
            name: 'அலகுமுத்து கோன்',
            popular: 'அலகுமுத்து',
            born: '1710',
            died: '1759',
            role: 'திருநெல்வேலியில் பிரிட்டிஷ் கிழக்கிந்திய கம்பெனிக்கு எதிராக எதிர்ப்பை வழிநடத்திய ஒரு பாளையக்காரர்.',
            points: ['பிரிட்டிஷார் மற்றும் ஆற்காடு நவாப்பிற்கு வரி செலுத்த மறுத்தார்.', 'தென்னிந்தியாவில் சுதந்திர நெருப்பை மூட்டிய முதல்வர்களில் ஒருவர்.', 'கான் சாஹிப்பின் படைகளுக்கு எதிராகப் போராடினார்.', 'பிடிக்கப்பட்டு வீரமரணம் அடைந்தார்.', 'தமிழ் சுதந்திரத்திற்காகப் போராடிய ஒரு தியாகியாகப் போற்றப்படுகிறார்.'],
            quiz: [
                { question: 'அலகுமுத்து கோன் தனது எதிர்ப்பை எங்கே வழிநடத்தினார்?', options: ['சென்னை', 'திருநெல்வேலி', 'மதுரை', 'திருச்சி'], answer: 1 },
                { question: 'அவர் பிரிட்டிஷாருக்கு எதைச் செலுத்த மறுத்தார்?', options: ['வரி', 'அபராதம்', 'கடன்', 'கம்மிஷன்'], answer: 0 },
                { question: 'அவரது முதன்மையான பிரிட்டிஷ் ஆதரவு எதிரி யார்?', options: ['ராபர்ட் கிளைவ்', 'கான் சாஹிப்', 'ஜெனரல் டயர்', 'ஆர்தர் வெல்லஸ்லி'], answer: 1 },
                { question: 'அவர் எந்த நூற்றாண்டில் வாழ்ந்தார்?', options: ['16-ம்', '17-ம்', '18-ம்', '19-ம்'], answer: 2 },
                { question: 'அவர் எவர்களில் ஒருவராக நினைவுகூரப்படுகிறார்?', options: ['சுதந்திரப் போராட்ட வீரர்கள்', 'மன்னர்கள்', 'அறிவியலாளர்கள்', 'கவிஞர்கள்'], answer: 0 }
            ]
        }
    },
    {
        id: 'sundaralingam', name: 'Sundaralingam', popular: 'Sundaralingam',
        born: 'Unknown', died: '1799',
        image: './images/Sundaralingam.jpg',
        videoLink: 'https://youtube.com',
        role: 'A brave general of Veerapandiya Kattabomman who died fighting the British East India Company.',
        points: ['Served as a loyal general under Kattabomman.', 'Led the Kattabomman forces against the British at Panchalankurichi.', 'Known for his exceptional bravery in guerrilla warfare.', 'Died in the battle of Panchalankurichi in 1799.', 'Regarded as a legendary warrior in Tamil history.'],
        quiz: [
            { question: 'Whose general was Sundaralingam?', options: ['Maruthu Pandiyar', 'Veerapandiya Kattabomman', 'Velu Nachiyar', 'Tipu Sultan'], answer: 1 },
            { question: 'Where did he fight his major battle?', options: ['Madurai', 'Panchalankurichi', 'Vellore', 'Chennai'], answer: 1 },
            { question: 'When did he pass away?', options: ['1799', '1805', '1857', '1900'], answer: 0 },
            { question: 'What was he known for?', options: ['Diplomacy', 'Bravery in warfare', 'Singing', 'Writing'], answer: 1 },
            { question: 'Which company was he fighting against?', options: ['French Company', 'British East India Company', 'Dutch Company', 'Portuguese Company'], answer: 1 }
        ],
        ta: {
            name: 'சுந்தரலிங்கம்',
            popular: 'சுந்தரலிங்கம்',
            born: 'தெரியவில்லை',
            died: '1799',
            role: 'பிரிட்டிஷ் கிழக்கிந்திய கம்பெனிக்கு எதிராகப் போரிட்டு இறந்த வீரபாண்டிய கட்டபொம்மனின் தளபதி.',
            points: ['கட்டபொம்மனின் நம்பிக்கைக்குரிய தளபதியாகப் பணியாற்றினார்.', 'பாஞ்சாலங்குறிச்சியில் பிரிட்டிஷாருக்கு எதிராகப் படைகளை வழிநடத்தினார்.', 'மறைமுகப் போரில் (Guerrilla warfare) அவரது அசாத்திய வீரத்திற்காகப் பெயர் பெற்றவர்.', '1799-ல் பாஞ்சாலங்குறிச்சிப் போரில் வீரமரணமடைந்தார்.', 'தமிழ் வரலாற்றில் ஒரு புகழ்பெற்ற வீரராகக் கருதப்படுகிறார்.'],
            quiz: [
                { question: 'சுந்தரலிங்கம் யாருடைய தளபதியாக இருந்தார்?', options: ['மருது பாண்டியர்', 'வீரபாண்டிய கட்டபொம்மன்', 'வேலு நாச்சியார்', 'திப்பு சுல்தான்'], answer: 1 },
                { question: 'அவர் எந்த இடத்தில் தனது முக்கியப் போரை நடத்தினார்?', options: ['மதுரை', 'பாஞ்சாலங்குறிச்சி', 'வேலூர்', 'சென்னை'], answer: 1 },
                { question: 'அவர் எப்போது காலமானார்?', options: ['1799', '1805', '1857', '1900'], answer: 0 },
                { question: 'அவர் எதற்காக அறியப்பட்டார்?', options: ['ராஜதந்திரம்', 'போரில் வீரம்', 'பாடல்', 'எழுத்து'], answer: 1 },
                { question: 'அவர் எந்த நிறுவனத்திற்கு எதிராகப் போரிட்டார்?', options: ['பிரஞ்சு கம்பெனி', 'பிரிட்டிஷ் கிழக்கிந்திய கம்பெனி', 'டச்சு கம்பெனி', 'போர்த்துகீசிய கம்பெனி'], answer: 1 }
            ]
        }
    },
    {
        id: 'anjalai', name: 'Anjalai Ammal', popular: 'South India\'s Jhansi Rani',
        born: '1890', died: '1961',
        image: './images/Anjalai.jpg',
        videoLink: 'https://youtube.com',
        role: 'A fierce freedom fighter and orator from Cuddalore, called "South India\'s Jhansi Rani" by Mahatma Gandhi.',
        points: ['Participated in the Non-Cooperation Movement in 1921.', 'Sold her properties to fund the freedom struggle.', 'Imprisoned multiple times, once while pregnant.', 'Gave birth to her daughter Ammaponnu in prison.', 'A fearless leader of women in the independence movement.'],
        quiz: [
            { question: 'What did Gandhi call Anjalai Ammal?', options: ['Mother of Tamil Nadu', 'South India\'s Jhansi Rani', 'The Nightingale', 'The Lioness'], answer: 1 },
            { question: 'Which city was she from?', options: ['Madurai', 'Cuddalore', 'Chennai', 'Salem'], answer: 1 },
            { question: 'Where did she give birth to her daughter?', options: ['In a hospital', 'In a palace', 'In prison', 'In her village'], answer: 2 },
            { question: 'Which movement did she join in 1921?', options: ['Quit India', 'Non-Cooperation Movement', 'Salt Satyagraha', 'Swadeshi'], answer: 1 },
            { question: 'What did she do to fund the struggle?', options: ['Took a loan', 'Sold her properties', 'Collected donations', 'Worked abroad'], answer: 1 }
        ],
        ta: {
            name: 'அஞ்சலை அம்மாள்',
            popular: 'தென்னிந்தியாவின் ஜான்சி ராணி',
            born: '1890',
            died: '1961',
            role: 'மகாத்மா காந்தியால் "தென்னிந்தியாவின் ஜான்சி ராணி" என்று அழைக்கப்பட்ட கடலூரைச் சேர்ந்த போராட்ட வீரர்.',
            points: ['1921-ல் ஒத்துழையாமை இயக்கத்தில் பங்கேற்றார்.', 'சுதந்திரப் போராட்டத்திற்கு நிதி திரட்ட தனது சொத்துக்களை விற்றார்.', 'பலமுறை சிறை சென்றார், ஒருமுறை கர்ப்பமாக இருந்தபோதும் சிறையிலடைக்கப்பட்டார்.', 'சிறையிலேயே தனது மகள் அம்மாபொண்ணுவைப் பெற்றெடுத்தார்.', 'சுதந்திரப் போராட்டத்தில் பெண்களின் அச்சமற்ற தலைவர்.'],
            quiz: [
                { question: 'காந்தி அஞ்சலை அம்மாளை எவ்வாறு அழைத்தார்?', options: ['தமிழ்நாட்டின் தாய்', 'தென்னிந்தியாவின் ஜான்சி ராணி', 'நைட்டிங்கேல்', 'சிங்கப்பெண்'], answer: 1 },
                { question: 'அவர் எந்த ஊரைச் சேர்ந்தவர்?', options: ['மதுரை', 'கடலூர்', 'சென்னை', 'சேலம்'], answer: 1 },
                { question: 'அவர் தனது மகளை எங்கே பெற்றெடுத்தார்?', options: ['மருத்துவமனையில்', 'அரண்மனையில்', 'சிறையில்', 'அவரது ஊரில்'], answer: 2 },
                { question: '1921-ல் அவர் எந்த இயக்கத்தில் சேர்ந்தார்?', options: ['வெள்ளையனே வெளியேறு', 'ஒத்துழையாமை இயக்கம்', 'உப்பு சத்தியாகிரகம்', 'சுதேசி'], answer: 1 },
                { question: 'போராட்டத்திற்கு நிதி திரட்ட அவர் என்ன செய்தார்?', options: ['கடன் வாங்கினார்', 'தனது சொத்துக்களை விற்றார்', 'நன்கொடை திரட்டினார்', 'வெளிநாட்டில் பணிபுரிந்தார்'], answer: 1 }
            ]
        }
    },
    {
        id: 'ambujammal', name: 'S. Ambujammal', popular: 'Ambujammal',
        born: '8 January 1899', died: '1983',
        image: './images/Ambujammal.jpg',
        videoLink: 'https://youtube.com',
        role: 'A dedicated Gandhian and social worker who founded the Srinivasa Gandhi Nilayam and empowered women.',
        points: ['Daughter of the famous leader S. Srinivasa Iyengar.', 'Actively involved in the Non-Cooperation and Civil Disobedience movements.', 'Promoted Khadi and swadeshi goods consistently.', 'Established Srinivasa Gandhi Nilayam for the welfare of women and children.', 'Authored several books and was awarded the Padma Shri.'],
        quiz: [
            { question: 'Who was Ambujammal\'s famous father?', options: ['S. Srinivasa Iyengar', 'C. Rajagopalachari', 'Periyar', 'Kamara'], answer: 0 },
            { question: 'What institution did she found?', options: ['Srinivasa Gandhi Nilayam', 'Madras University', 'Swaraj Party', 'India House'], answer: 0 },
            { question: 'Which movement did she actively participate in?', options: ['1857 Revolt', 'Civil Disobedience', 'Sepoy Mutiny', 'French Revolution'], answer: 1 },
            { question: 'What did she promote as part of the Swadeshi movement?', options: ['Plastic', 'Foreign silk', 'Khadi', 'Paper'], answer: 2 },
            { question: 'What high civilian award did she receive?', options: ['Bharat Ratna', 'Padma Shri', 'Param Vir Chakra', 'None'], answer: 1 }
        ],
        ta: {
            name: 'எஸ். அம்புஜம்மாள்',
            popular: 'அம்புஜம்மாள்',
            born: '8 ஜனவரி 1899',
            died: '1983',
            role: 'ஸ்ரீநிவாஸ காந்தி நிலையத்தை நிறுவி பெண்களின் முன்னேற்றத்திற்காக உழைத்த தீவிர காந்தியவாதி.',
            points: ['புகழ்பெற்ற தலைவர் எஸ். ஸ்ரீநிவாஸ ஐயங்காரின் மகள்.', 'ஒத்துழையாமை மற்றும் சட்டமறுப்பு இயக்கங்களில் தீவிரமாகப் பங்கேற்றார்.', 'காதர் மற்றும் சுதேசிப் பொருட்களைத் தொடர்ந்து ஊக்குவித்தார்.', 'பெண்கள் மற்றும் குழந்தைகளின் நலனுக்காக ஸ்ரீநிவாஸ காந்தி நிலையத்தை நிறுவினார்.', 'பல நூல்களை எழுதிய அவருக்குப் பத்மஸ்ரீ விருது வழங்கப்பட்டது.'],
            quiz: [
                { question: 'அம்புஜம்மாளின் புகழ்பெற்ற தந்தை யார்?', options: ['எஸ். ஸ்ரீநிவாஸ ஐயங்கார்', 'சி. ராஜகோபாலாச்சாரி', 'பெரியார்', 'காமராஜர்'], answer: 0 },
                { question: 'அவர் நிறுவிய நிறுவனம் எது?', options: ['ஸ்ரீநிவாஸ காந்தி நிலையம்', 'மதராஸ் பல்கலைக்கழகம்', 'சுயராஜ்ஜிய கட்சி', 'இந்தியா ஹவுஸ்'], answer: 0 },
                { question: 'அவர் எந்த இயக்கத்தில் தீவிரமாகப் பங்கேற்றார்?', options: ['1857 புரட்சி', 'சட்டமறுப்பு இயக்கம்', 'சிப்பாய் கலகம்', 'பிரஞ்சு புரட்சி'], answer: 1 },
                { question: 'சுதேசி இயக்கத்தின் ஒரு பகுதியாக அவர் எதை ஊக்குவித்தார்?', options: ['பிளாஸ்டிக்', 'வெளிநாட்டு பட்டு', 'காதர் (Khadi)', 'காகிதம்'], answer: 2 },
                { question: 'அவருக்கு வழங்கப்பட்ட உயரிய விருது எது?', options: ['பாரத ரத்னா', 'பத்மஸ்ரீ', 'பரம வீர சக்கரம்', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'janaki', name: 'K. P. Janaki Ammal', popular: 'Janaki Ammal',
        born: '1917', died: '1 March 1992',
        image: './images/Janaki Ammal.jpg',
        videoLink: 'https://youtube.com',
        role: 'A revolutionary communist leader and freedom fighter who championed the rights of farmers and workers.',
        points: ['Joined the independence struggle at a very young age.', 'Actively participated in the Self-Respect Movement.', 'Spent several years in prison for her political activities.', 'Worked extensively for the upliftment of the rural poor and farmers.', 'A prominent leader of the All India Democratic Women\'s Association.'],
        quiz: [
            { question: 'What was K. P. Janaki Ammal\'s primary political ideology?', options: ['Monarchy', 'Communism', 'Fascism', 'None'], answer: 1 },
            { question: 'Whose rights did she predominantly champion?', options: ['Kings', 'Farmers and workers', 'Foreigners', 'Merchants'], answer: 1 },
            { question: 'Which movement was she involved in besides the freedom struggle?', options: ['Self-Respect Movement', 'Quit India only', 'Sepoy Mutiny', 'None'], answer: 0 },
            { question: 'Did she spend time in prison?', options: ['No', 'Yes', 'Never', 'Only for 1 day'], answer: 1 },
            { question: 'She was a leader of which women\'s association?', options: ['UN Women', 'All India Democratic Women\'s Association', 'Red Cross', 'None'], answer: 1 }
        ],
        ta: {
            name: 'கே. பி. ஜானகி அம்மாள்',
            popular: 'ஜானகி அம்மாள்',
            born: '1917',
            died: '1 மார்ச் 1992',
            role: 'விவசாயிகள் மற்றும் தொழிலாளர்களின் உரிமைகளுக்காகப் போராடிய புரட்சிகர கம்யூனிஸ்ட் தலைவர்.',
            points: ['மிக இளம் வயதிலேயே சுதந்திரப் போராட்டத்தில் குதித்தார்.', 'சுயமரியாதை இயக்கத்தில் தீவிரமாகப் பங்கேற்றார்.', 'தனது அரசியல் செயல்பாடுகளுக்காகப் பல ஆண்டுகள் சிறையில் கழித்தார்.', 'கிராமப்புற ஏழைகள் மற்றும் விவசாயிகளின் முன்னேற்றத்திற்காக அரும்பாடுபட்டார்.', 'அனைத்திந்திய ஜனநாயக மாதர் சங்கத்தின் முக்கியத் தலைவராக இருந்தார்.'],
            quiz: [
                { question: 'கே. பி. ஜானகி அம்மாளின் முதன்மையான அரசியல் கொள்கை எது?', options: ['முடியாட்சி', 'கம்யூனிசம்', 'பாசிசம்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் முதன்மையாக யாருடைய உரிமைகளுக்காகப் போராடினார்?', options: ['மன்னர்கள்', 'விவசாயிகள் மற்றும் தொழிலாளர்கள்', 'வெளிநாட்டவர்கள்', 'வணிகர்கள்'], answer: 1 },
                { question: 'சுதந்திரப் போராட்டத்தைத் தவிர அவர் எந்த இயக்கத்தில் ஈடுபட்டார்?', options: ['சுயமரியாதை இயக்கம்', 'வெள்ளையனே வெளியேறு மட்டும்', 'சிப்பாய் கலகம்', 'எதுவுமில்லை'], answer: 0 },
                { question: 'அவர் சிறையில் இருந்தாரா?', options: ['இல்லை', 'ஆம்', 'ஒருபோதும் இல்லை', '1 நாள் மட்டும்'], answer: 1 },
                { question: 'அவர் எந்த மாதர் சங்கத்தின் தலைவராக இருந்தார்?', options: ['ஐநா பெண்கள் அமைப்பு', 'அனைத்திந்திய ஜனநாயக மாதர் சங்கம்', 'செஞ்சிலுவை சங்கம்', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'rukmini', name: 'Rukmini Lakshmipathi', popular: 'Rukmini',
        born: '6 December 1892', died: '6 August 1951',
        image: './images/Rukmini.jpg',
        videoLink: 'https://youtube.com',
        role: 'The first woman minister in the Madras Presidency and a prominent leader of the Salt Satyagraha.',
        points: ['Actively participated in the Vedaranyam Salt Satyagraha in 1930.', 'Imprisoned for a year, becoming the first woman to be arrested during the Salt Satyagraha.', 'Served as the Deputy Speaker of the Madras Legislative Assembly.', 'Held the position of Minister for Public Health in the Madras Presidency.', 'A pioneer who paved the way for women in Indian politics.'],
        quiz: [
            { question: 'Rukmini Lakshmipathi was the first woman minister in which presidency?', options: ['Bombay', 'Madras', 'Bengal', 'Delhi'], answer: 1 },
            { question: 'In which movement did she play a major role in 1930?', options: ['Quit India', 'Vedaranyam Salt Satyagraha', 'Swadeshi', 'Khilafat'], answer: 1 },
            { question: 'She was the first woman to be arrested during which movement?', options: ['Rowlatt', 'Salt Satyagraha', 'Direct Action Day', 'None'], answer: 1 },
            { question: 'What portfolio did she hold as a minister?', options: ['Finance', 'Public Health', 'Defense', 'Education'], answer: 1 },
            { question: 'What legislative position did she hold besides being a minister?', options: ['Governor', 'Deputy Speaker', 'Chief Minister', 'President'], answer: 1 }
        ],
        ta: {
            name: 'ருக்மிணி லட்சுமிபதி',
            popular: 'ருக்மிணி',
            born: '6 டிசம்பர் 1892',
            died: '6 ஆகஸ்ட் 1951',
            role: 'சென்னை மாகாணத்தின் முதல் பெண் அமைச்சர் மற்றும் உப்பு சத்தியாகிரகத்தின் முக்கியத் தலைவர்.',
            points: ['1930-ல் வேதாரண்யம் உப்பு சத்தியாகிரகத்தில் தீவிரமாகப் பங்கேற்றார்.', 'உப்பு சத்தியாகிரகத்தின் போது கைது செய்யப்பட்ட முதல் பெண்மணி இவரே.', 'சென்னை சட்டமன்றத்தின் துணைத் தலைவராகப் பணியாற்றியவர்.', 'சென்னை மாகாணத்தில் பொது சுகாதார அமைச்சராகப் பதவி வகித்தார்.', 'இந்திய அரசியலில் பெண்களுக்குப் புதிய பாதையை உருவாக்கிய முன்னோடி.'],
            quiz: [
                { question: 'ருக்மிணி லட்சுமிபதி எந்த மாகாணத்தின் முதல் பெண் அமைச்சராக இருந்தார்?', options: ['மும்பை', 'சென்னை', 'வங்காளம்', 'டெல்லி'], answer: 1 },
                { question: '1930-ல் அவர் எந்த இயக்கத்தில் முக்கிய பங்கு வகித்தார்?', options: ['வெள்ளையனே வெளியேறு', 'வேதாரண்யம் உப்பு சத்தியாகிரகம்', 'சுதேசி', 'கிலாபத்'], answer: 1 },
                { question: 'எந்த இயக்கத்தின் போது கைது செய்யப்பட்ட முதல் பெண்மணி இவர்?', options: ['ரௌலட்', 'உப்பு சத்தியாகிரகம்', 'நேரடி நடவடிக்கை நாள்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அமைச்சராக அவர் எந்தத் துறையை வகித்தார்?', options: ['நிதி', 'பொது சுகாதாரம்', 'பாதுகாப்பு', 'கல்வி'], answer: 1 },
                { question: 'அமைச்சராகத் தவிர அவர் வகித்த சட்டமன்றப் பதவி என்ன?', options: ['ஆளுநர்', 'துணைத் தலைவர்', 'முதலமைச்சர்', 'ஜனாதிபதி'], answer: 1 }
            ]
        }
    },
    {
        id: 'meenambal', name: 'Meenambal Sivaraj', popular: 'Meenambal',
        born: '26 December 1904', died: '30 November 1992',
        image: './images/Meenambal.jpg',
        videoLink: 'https://youtube.com',
        role: 'A prominent leader and activist who worked for the rights of the Scheduled Castes and women.',
        points: ['The first Scheduled Caste woman to be elected to the Madras Corporation.', 'Actively involved in the Self-Respect Movement led by Periyar.', 'Bestowed the title "Periyar" upon E. V. Ramasamy in 1938.', 'Worked closely with Dr. B. R. Ambedkar for social justice.', 'Represented India at various international conferences on social welfare.'],
        quiz: [
            { question: 'Who gave E. V. Ramasamy the title "Periyar"?', options: ['Gandhi', 'Meenambal Sivaraj', 'Nehru', 'Anna'], answer: 1 },
            { question: 'She was the first SC woman to be elected to which body?', options: ['Madras Corporation', 'Parliament', 'UN', 'Congress'], answer: 0 },
            { question: 'Which movement was she a key part of?', options: ['Self-Respect Movement', 'Ghadar Party', 'RSS', 'None'], answer: 0 },
            { question: 'With which national leader did she work closely for social justice?', options: ['Sardar Patel', 'B. R. Ambedkar', 'Savarkar', 'Jinnah'], answer: 1 },
            { question: 'When did she give the title "Periyar" to E. V. R?', options: ['1920', '1938', '1947', '1950'], answer: 1 }
        ],
        ta: {
            name: 'மீனாம்பாள் சிவராஜ்',
            popular: 'மீனாம்பாள்',
            born: '26 டிசம்பர் 1904',
            died: '30 நவம்பர் 1992',
            role: 'தாழ்த்தப்பட்ட மக்கள் மற்றும் பெண்களின் உரிமைகளுக்காகப் போராடிய முக்கியத் தலைவர்.',
            points: ['சென்னை மாநகராட்சிக்குத் தேர்ந்தெடுக்கப்பட்ட முதல் தாழ்த்தப்பட்ட சமூகப் பெண்மணி.', 'பெரியார் வழிநடத்திய சுயமரியாதை இயக்கத்தில் தீவிரமாக ஈடுபட்டார்.', '1938-ல் ஈ.வெ.ராமசாமிக்கு "பெரியார்" என்ற பட்டத்தை வழங்கியவர் இவரே.', 'சமூக நீதிக்காக டாக்டர் பி.ஆர்.அம்பேத்கருடன் இணைந்து பணியாற்றினார்.', 'சமூக நலன் தொடர்பான பல்வேறு சர்வதேச மாநாடுகளில் இந்தியாவைப் பிரதிநிதித்துவப்படுத்தினார்.'],
            quiz: [
                { question: 'ஈ.வெ.ராமசாமிக்கு "பெரியார்" என்ற பட்டத்தை வழங்கியது யார்?', options: ['காந்தி', 'மீனாம்பாள் சிவராஜ்', 'நேரு', 'அண்ணா'], answer: 1 },
                { question: 'அவர் எந்த அமைப்பிற்குத் தேர்ந்தெடுக்கப்பட்ட முதல் தாழ்த்தப்பட்ட சமூகப் பெண்மணி?', options: ['சென்னை மாநகராட்சி', 'நாடாளுமன்றம்', 'ஐநா', 'காங்கிரஸ்'], answer: 0 },
                { question: 'அவர் எந்த இயக்கத்தின் முக்கியப் பகுதியாக இருந்தார்?', options: ['சுயமரியாதை இயக்கம்', 'கதர் கட்சி', 'ஆர்.எஸ்.எஸ்', 'எதுவுமில்லை'], answer: 0 },
                { question: 'சமூக நீதிக்காக அவர் எந்த தேசிய தலைவருடன் இணைந்து பணியாற்றினார்?', options: ['சர்தார் படேல்', 'பி.ஆர்.அம்பேத்கர்', 'சாவர்க்கர்', 'ஜின்னா'], answer: 1 },
                { question: 'அவர் எப்போது ஈ.வெ.ரா-விற்கு "பெரியார்" பட்டத்தை வழங்கினார்?', options: ['1920', '1938', '1947', '1950'], answer: 1 }
            ]
        }
    },
    {
        id: 'nagammai', name: 'Nagammai', popular: 'Nagammaiyar',
        born: '1885', died: '11 May 1933',
        image: './images/Nagammai.jpg',
        videoLink: 'https://youtube.com',
        role: 'A pioneering social activist and wife of Periyar E. V. Ramasamy, known for her role in the Vaikom Satyagraha.',
        points: ['Led the Vaikom Satyagraha for temple entry alongside other women.', 'Actively participated in the Non-Cooperation movement and picketing of liquor shops.', 'Played a crucial role in the Self-Respect Movement from its inception.', 'Worked for the empowerment of women and abolition of social evils.', 'Arrested several times for her defiance against oppressive British laws.'],
        quiz: [
            { question: 'Who was Nagammai the wife of?', options: ['Kamara', 'Periyar E. V. Ramasamy', 'Rajaji', 'Anna'], answer: 1 },
            { question: 'Which famous Satyagraha for temple entry did she lead?', options: ['Salt Satyagraha', 'Vaikom Satyagraha', 'Champaran', 'Kheda'], answer: 1 },
            { question: 'What did she picket as part of the Non-Cooperation movement?', options: ['Schools', 'Liquor shops', 'Banks', 'Factories'], answer: 1 },
            { question: 'Which movement was she a key part of from the beginning?', options: ['Self-Respect Movement', 'Swaraj Party', 'Bhutan movement', 'None'], answer: 0 },
            { question: 'What rights did she primarily work for?', options: ['Property rights only', 'Women\'s empowerment and social justice', 'Voting rights for men', 'None'], answer: 1 }
        ],
        ta: {
            name: 'நாகம்மை',
            popular: 'நாகம்மையார்',
            born: '1885',
            died: '11 மே 1933',
            role: 'பெரியார் ஈ.வெ.ராமசாமியின் மனைவியும், வைக்கம் சத்தியாகிரகத்தில் முக்கிய பங்கு வகித்த சமூக ஆர்வலரும் ஆவார்.',
            points: ['ஆலயப் பிரவேசத்திற்காக நடந்த வைக்கம் சத்தியாகிரகத்தை வழிநடத்தினார்.', 'ஒத்துழையாமை இயக்கத்தின் போது கள்ளுக்கடை மறியலில் தீவிரமாகப் பங்கேற்றார்.', 'சுயமரியாதை இயக்கத்தின் தொடக்கத்திலிருந்தே அதில் முக்கிய பங்கு வகித்தார்.', 'பெண்கள் முன்னேற்றம் மற்றும் சமூகத் தீமைகளை ஒழிப்பதில் பாடுபட்டார்.', 'பிரிட்டிஷ் சட்டங்களை எதிர்த்துப் பலமுறை சிறை சென்றார்.'],
            quiz: [
                { question: 'நாகம்மையார் யாருடைய மனைவி?', options: ['காமராஜர்', 'பெரியார் ஈ.வெ.ராமசாமி', 'ராஜாஜி', 'அண்ணா'], answer: 1 },
                { question: 'ஆலயப் பிரவேசத்திற்காக அவர் வழிநடத்திய சத்தியாகிரகம் எது?', options: ['உப்பு சத்தியாகிரகம்', 'வைக்கம் சத்தியாகிரகம்', 'சம்பாரண்', 'கேடா'], answer: 1 },
                { question: 'ஒத்துழையாமை இயக்கத்தின் ஒரு பகுதியாக அவர் எதை மறியல் செய்தார்?', options: ['பள்ளிகள்', 'கள்ளுக்கடைகள்', 'வங்கிகள்', 'தொழிற்சாலைகள்'], answer: 1 },
                { question: 'தொடக்கத்திலிருந்தே அவர் எந்த இயக்கத்தின் முக்கியப் பகுதியாக இருந்தார்?', options: ['சுயமரியாதை இயக்கம்', 'சுயராஜ்ஜிய கட்சி', 'பூமிதான இயக்கம்', 'எதுவுமில்லை'], answer: 0 },
                { question: 'அவர் முதன்மையாக யாருடைய உரிமைகளுக்காக உழைத்தார்?', options: ['சொத்துரிமை மட்டும்', 'பெண்கள் முன்னேற்றம் மற்றும் சமூக நீதி', 'ஆண்களுக்கான வாக்குரிமை', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'ramamirtham', name: 'Moovalur Ramamirtham Ammayar', popular: 'Ramamirtham',
        born: '1883', died: '1962',
        image: './images/Ramamirtham Ammayar.jpg',
        videoLink: 'https://youtube.com',
        role: 'A fearless social reformer and activist who fought for the abolition of the Devadasi system.',
        points: ['Member of the Self-Respect Movement and the Justice Party.', 'Wrote the famous novel "Dasigalin Mosavalai" (The Web of Deceit of Devadasis).', 'Effectively used literature to highlight the plight of women.', 'Struggled for decades to bring legislation against the Devadasi system.', 'A major bridge between the social reform and independence movements.'],
        quiz: [
            { question: 'Which oppressive system did she fight to abolish?', options: ['Sati', 'Devadasi system', 'Caste system only', 'None'], answer: 1 },
            { question: 'What is the title of her famous novel?', options: ['Tamil Thatha', 'Dasigalin Mosavalai', 'Ponniyin Selvan', 'None'], answer: 1 },
            { question: 'Which parties/movements was she associated with?', options: ['Self-Respect and Justice Party', 'RSS', 'Communist Party', 'None'], answer: 0 },
            { question: 'How did she use literature?', options: ['To tell fairy tales', 'To highlight social injustices against women', 'To write poems about nature', 'None'], answer: 1 },
            { question: 'Is there a government scheme in her name?', options: ['No', 'Yes (for marriage assistance)', 'Maybe', 'Unknown'], answer: 1 }
        ],
        ta: {
            name: 'மூவலூர் ராமாமிர்தம் அம்மையார்',
            popular: 'ராமாமிர்தம்',
            born: '1883',
            died: '1962',
            role: 'தேவதாசி முறை ஒழிப்புக்காகப் போராடிய அச்சமற்ற சமூக சீர்திருத்தவாதி மற்றும் ஆர்வலர்.',
            points: ['சுயமரியாதை இயக்கம் மற்றும் நீதிக் கட்சியின் உறுப்பினராக இருந்தார்.', '"தாசிகளின் மோசவலை" என்ற புகழ்பெற்ற நாவலை எழுதினார்.', 'பெண்களின் அவல நிலையை வெளிச்சம் போட்டுக் காட்ட இலக்கியத்தைப் பயன்படுத்தினார்.', 'தேவதாசி முறைக்கு எதிராகச் சட்டம் கொண்டு வரப் பல தசாப்தங்களாகப் போராடினார்.', 'சமூக சீர்திருத்தம் மற்றும் சுதந்திர போராட்டத்திற்கு இடையே ஒரு பாலமாகத் திகழ்ந்தார்.'],
            quiz: [
                { question: 'அவர் எதை ஒழிக்கப் போராடினார்?', options: ['சதி', 'தேவதாசி முறை', 'சாதி முறை மட்டும்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் எழுதிய புகழ்பெற்ற நாவலின் பெயர் என்ன?', options: ['தமிழ் தாத்தா', 'தாசிகளின் மோசவலை', 'பொன்னியின் செல்வன்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் எந்த இயக்கங்களுடன் தொடர்புடையவர்?', options: ['சுயமரியாதை மற்றும் நீதிக் கட்சி', 'ஆர்.எஸ்.எஸ்', 'கம்யூனிஸ்ட் கட்சி', 'எதுவுமில்லை'], answer: 0 },
                { question: 'அவர் இலக்கியத்தை எவ்வாறு பயன்படுத்தினார்?', options: ['கதைகள் சொல்ல', 'பெண்களுக்கு எதிரான சமூக அநீதிகளைச் சுட்டிக்காட்ட', 'இயற்கையைப் பற்றி கவிதை எழுத', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவரது பெயரில் அரசுத் திட்டம் ஏதேனும் உள்ளதா?', options: ['இல்லை', 'ஆம் (திருமண உதவித் திட்டம்)', 'இருக்கலாம்', 'தெரியவில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'sundarambal', name: 'K. P. Sundarambal', popular: 'Sundarambal',
        born: '1908', died: '1980',
        image: './images/sundarambal.avif',
        videoLink: 'https://youtube.com',
        role: 'A legendary singer and actress who used her art to spread patriotic messages during the freedom struggle.',
        points: ['Known as the "Queen of Indian Stage."', 'Sung numerous patriotic songs that inspired the masses to join the freedom movement.', 'Actively campaigned for the Congress party.', 'The first film personality to be elected to a state legislature in India.', 'Received several prestigious awards including the Sangeet Natak Akademi Award.'],
        quiz: [
            { question: 'What was Sundarambal known as on the stage?', options: ['Tamil Queen', 'Queen of Indian Stage', 'Voice of Madras', 'None'], answer: 1 },
            { question: 'How did she contribute to the freedom struggle?', options: ['Fighting in wars', 'Singing patriotic songs', 'Writing laws', 'None'], answer: 1 },
            { question: 'She was the first film personality to be elected to...?', options: ['The Parliament', 'A State Legislature', 'The UN', 'None'], answer: 1 },
            { question: 'Which party did she actively campaign for?', options: ['Justice Party', 'Congress', 'Muslim League', 'None'], answer: 1 },
            { question: 'What type of songs did she predominantly sing for the movement?', options: ['Love songs', 'Patriotic songs', 'Folk songs', 'None'], answer: 1 }
        ],
        ta: {
            name: 'கே. பி. சுந்தராம்பாள்',
            popular: 'சுந்தராம்பாள்',
            born: '1908',
            died: '1980',
            role: 'சுதந்திரப் போராட்டத்தின் போது தனது கலை மூலம் தேசபக்திச் செய்திகளைப் பரப்பிய புகழ்பெற்ற பாடகி மற்றும் நடிகை.',
            points: ['"இந்திய மேடையின் ராணி" என்று அழைக்கப்படுபவர்.', 'மக்கள் சுதந்திர இயக்கத்தில் சேரத் தூண்டும் வகையில் ஏராளமான தேசபக்திப் பாடல்களைப் பாடினார்.', 'காங்கிரஸ் கட்சிக்காகத் தீவிரமாகப் பிரச்சாரம் செய்தார்.', 'இந்தியாவில் மாநிலச் சட்டமன்றத்திற்குத் தேர்ந்தெடுக்கப்பட்ட முதல் திரையுலகப் பிரபலம் இவரே.', 'சங்கீத நாடக அகாடமி விருது உட்படப் பல மதிப்புமிக்க விருதுகளைப் பெற்றவர்.'],
            quiz: [
                { question: 'மேடையில் சுந்தராம்பாள் எவ்வாறு அழைக்கப்பட்டார்?', options: ['தமிழ் ராணி', 'இந்திய மேடையின் ராணி', 'மதராஸின் குரல்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'சுதந்திரப் போராட்டத்திற்கு அவர் எவ்வாறு பங்களித்தார்?', options: ['போர்களில் சண்டையிட்டு', 'தேசபக்திப் பாடல்கள் பாடி', 'சட்டங்கள் எழுதி', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் எதற்குத் தேர்ந்தெடுக்கப்பட்ட முதல் திரையுலகப் பிரபலம்?', options: ['நாடாளுமன்றம்', 'மாநில சட்டமன்றம்', 'ஐநா', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் எந்தக் கட்சிக்காகத் தீவிரமாகப் பிரச்சாரம் செய்தார்?', options: ['நீதிக்கட்சி', 'காங்கிரஸ்', 'முஸ்லீம் லீக்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'இயக்கத்திற்காக அவர் முதன்மையாக என்ன வகை பாடல்களைப் பாடினார்?', options: ['காதல் பாடல்கள்', 'தேசபக்திப் பாடல்கள்', 'நாட்டுப்புறப் பாடல்கள்', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'singaravelar', name: 'M. Singaravelar', popular: 'Chinthanaichirper Singaravelar',
        born: '18 February 1860', died: '11 February 1946',
        image: './images/Singaravelar.jpg',
        videoLink: 'https://youtube.com',
        role: 'A pioneer of the labour movement in India and the first to organize May Day celebrations in India.',
        points: ['A prominent lawyer and freedom fighter from Madras.', 'Organized the first May Day in India in 1923 at Chennai.', 'A key figure in the formation of the Labour Kisan Party of Hindustan.', 'Fused the independence struggle with worker\'s rights and socialism.', 'Close associate of Periyar and a founding member of the Self-Respect Movement.'],
        quiz: [
            { question: 'M. Singaravelar was a pioneer of which movement in India?', options: ['Monarchy', 'Labour movement', 'Space research', 'None'], answer: 1 },
            { question: 'Where did he organize the first May Day in India?', options: ['Mumbai', 'Chennai', 'Delhi', 'Kolkata'], answer: 1 },
            { question: 'In which year did he organize the first May Day?', options: ['1910', '1923', '1947', '2000'], answer: 1 },
            { question: 'Which party did he help form?', options: ['Labour Kisan Party of Hindustan', 'BJP', 'Swaraj Party', 'None'], answer: 0 },
            { question: 'He was a close associate of which social reformer?', options: ['Gandhi', 'Periyar', 'Savarkar', 'None'], answer: 1 }
        ],
        ta: {
            name: 'ம. சிங்காரவேலர்',
            popular: 'சிந்தனைச் சிற்பி சிங்காரவேலர்',
            born: '18 பிப்ரவரி 1860',
            died: '11 பிப்ரவரி 1946',
            role: 'இந்தியத் தொழிலாளர் இயக்கத்தின் முன்னோடி மற்றும் இந்தியாவில் முதல் மே தினக் கொண்டாட்டங்களை ஒருங்கிணைத்தவர்.',
            points: ['மதராஸைச் சேர்ந்த முக்கிய வழக்கறிஞர் மற்றும் சுதந்திரப் போராட்ட வீரர்.', '1923-ல் சென்னையில் இந்தியாவின் முதல் மே தினத்தை ஒருங்கிணைத்தார்.', 'இந்தியத் தொழிலாளர் உழவர் கட்சி உருவாவதில் முக்கியப் பங்கு வகித்தார்.', 'சுதந்திரப் போராட்டத்தைத் தொழிலாளர் உரிமைகள் மற்றும் சோசலிசத்துடன் இணைத்தார்.', 'பெரியாரின் நெருங்கிய தோழர் மற்றும் சுயமரியாதை இயக்கத்தின் ஸ்தாபக உறுப்பினர்.'],
            quiz: [
                { question: 'ம. சிங்காரவேலர் இந்தியாவில் எந்த இயக்கத்தின் முன்னோடியாக இருந்தார்?', options: ['முடியாட்சி', 'தொழிலாளர் இயக்கம்', 'விண்வெளி ஆராய்ச்சி', 'எதுவுமில்லை'], answer: 1 },
                { question: 'இந்தியாவின் முதல் மே தினத்தை அவர் எங்கே ஒருங்கிணைத்தார்?', options: ['மும்பை', 'சென்னை', 'டெல்லி', 'கொல்கத்தா'], answer: 1 },
                { question: 'எந்த ஆண்டில் அவர் முதல் மே தினத்தை ஒருங்கிணைத்தார்?', options: ['1910', '1923', '1947', '2000'], answer: 1 },
                { question: 'அவர் எந்தக் கட்சி உருவாக உதவினார்?', options: ['இந்தியத் தொழிலாளர் உழவர் கட்சி', 'பாஜக', 'சுயராஜ்ஜிய கட்சி', 'எதுவுமில்லை'], answer: 0 },
                { question: 'அவர் எந்தச் சமூக சீர்திருத்தவாதியின் நெருங்கிய தோழராக இருந்தார்?', options: ['காந்தி', 'பெரியார்', 'சாவர்க்கர்', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'satyamurti', name: 'S. Satyamurti', popular: 'The Firebrand',
        born: '19 August 1887', died: '28 March 1943',
        image: './images/satyamurti.jpg',
        videoLink: 'https://youtube.com',
        role: 'A brilliant orator and politician who was a mentor to K. Kamaraj and a fierce critic of British policies.',
        points: ['Known for his exceptional debating skills in the legislature.', 'Mentored the legendary leader K. Kamaraj.', 'Actively participated in the Non-Cooperation and Civil Disobedience movements.', 'Arrested multiple times for his anti-colonial activities.', 'Instrumental in the construction of the Poondi reservoir.'],
        quiz: [
            { question: 'Who was S. Satyamurti a mentor to?', options: ['Rajaji', 'K. Kamaraj', 'Nehru', 'Periyar'], answer: 1 },
            { question: 'What was he primarily known for?', options: ['Oratory and debating skills', 'Military tactics', 'Scientific research', 'None'], answer: 0 },
            { question: 'Which reservoir in Chennai is associated with him?', options: ['Mettur', 'Poondi', 'Bhavani', 'None'], answer: 1 },
            { question: 'Did he participate in the Civil Disobedience movement?', options: ['No', 'Yes', 'Only partially', 'Never'], answer: 1 },
            { question: 'Where did he primarily showcase his anti-British criticism?', options: ['In the forests', 'In the legislature', 'At sea', 'None'], answer: 1 }
        ],
        ta: {
            name: 'சு. சத்தியமூர்த்தி',
            popular: 'தீப்பொறி சத்தியமூர்த்தி',
            born: '19 ஆகஸ்ட் 1887',
            died: '28 மார்ச் 1943',
            role: 'சிறந்த பேச்சாளரும், காமராஜரின் அரசியல் குருவுமான இவர் பிரிட்டிஷ் கொள்கைகளைத் தீவிரமாக விமர்சித்தவர்.',
            points: ['சட்டமன்றத்தில் அவரது அசாத்தியமான விவாதத் திறமைக்காக அறியப்பட்டவர்.', 'புகழ்பெற்ற தலைவர் காமராஜருக்கு அரசியல் குருவாகத் திகழ்ந்தார்.', 'ஒத்துழையாமை மற்றும் சட்டமறுப்பு இயக்கங்களில் தீவிரமாகப் பங்கேற்றார்.', 'காலனித்துவ எதிர்ப்பு நடவடிக்கைகளுக்காகப் பலமுறை கைது செய்யப்பட்டார்.', 'பூண்டி நீர்த்தேக்கம் கட்டப்படுவதில் முக்கியப் பங்காற்றினார்.'],
            quiz: [
                { question: 'சு. சத்தியமூர்த்தி யாருக்கு அரசியல் குருவாக இருந்தார்?', options: ['ராஜாஜி', 'க. காமராஜர்', 'நேரு', 'பெரியார்'], answer: 1 },
                { question: 'அவர் முதன்மையாக எதற்காக அறியப்பட்டார்?', options: ['பேச்சு மற்றும் விவாதத் திறமை', 'இராணுவ தந்திரங்கள்', 'அறிவியல் ஆராய்ச்சி', 'எதுவுமில்லை'], answer: 0 },
                { question: 'சென்னை அருகில் உள்ள எந்த நீர்த்தேக்கம் அவருடன் தொடர்புடையது?', options: ['மேட்டூர்', 'பூண்டி', 'பவானி', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் சட்டமறுப்பு இயக்கத்தில் பங்கேற்றாரா?', options: ['இல்லை', 'ஆம்', 'சிறிது மட்டும்', 'ஒருபோதும் இல்லை'], answer: 1 },
                { question: 'பிரிட்டிஷ் எதிர்ப்பு விமர்சனங்களை அவர் முதன்மையாக எங்கே வெளிப்படுத்தினார்?', options: ['காடுகளில்', 'சட்டமன்றத்தில்', 'கடலில்', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'rajan', name: 'T. S. S. Rajan', popular: 'Dr. Rajan',
        born: '1884', died: '1953',
        image: './images/rajan.jpg',
        videoLink: 'https://youtube.com',
        role: 'A dedicated doctor and freedom fighter who served as a minister in the Madras Presidency.',
        points: ['Participated in the Vedaranyam Salt Satyagraha along with Rajaji.', 'Organized the 1928 South Indian Railway strike.', 'Served as the Minister of Public Health in Madras.', 'Arrested multiple times for his revolutionary activities.', 'Balanced his medical profession with tireless service to the nation.'],
        quiz: [
            { question: 'What was T. S. S. Rajan\'s profession?', options: ['Engineer', 'Medical Doctor', 'Artist', 'None'], answer: 1 },
            { question: 'Which Salt Satyagraha did he participate in?', options: ['Dandi', 'Vedaranyam', 'Champaran', 'None'], answer: 1 },
            { question: 'Which strike did he organize in 1928?', options: ['Coral Mill', 'South Indian Railway strike', 'Post office strike', 'None'], answer: 1 },
            { question: 'What ministerial portfolio did he hold?', options: ['Finance', 'Public Health', 'Defense', 'None'], answer: 1 },
            { question: 'Whose associate was he during the Salt Satyagraha?', options: ['Gandhi', 'Rajaji', 'Nehru', 'None'], answer: 1 }
        ],
        ta: {
            name: 'டி. எஸ். எஸ். ராஜன்',
            popular: 'டாக்டர் ராஜன்',
            born: '1884',
            died: '1953',
            role: 'சென்னை மாகாணத்தில் அமைச்சராகப் பணியாற்றிய அர்ப்பணிப்புள்ள மருத்துவரும் சுதந்திரப் போராட்ட வீரரும் ஆவார்.',
            points: ['ராஜாஜியுடன் இணைந்து வேதாரண்யம் உப்பு சத்தியாகிரகத்தில் பங்கேற்றார்.', '1928-ல் தென்னிந்திய ரயில்வே வேலைநிறுத்தத்தை ஒருங்கிணைத்தார்.', 'சென்னையில் பொது சுகாதார அமைச்சராகப் பணியாற்றினார்.', 'தனது புரட்சிகர நடவடிக்கைகளுக்காகப் பலமுறை கைது செய்யப்பட்டார்.', 'தனது மருத்துவத் தொழிலையும் தேசப் பணியையும் சமமாக மேற்கொண்டவர்.'],
            quiz: [
                { question: 'டி. எஸ். எஸ். ராஜனின் தொழில் என்ன?', options: ['பொறியாளர்', 'மருத்துவர்', 'கலைஞர்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் எந்த உப்பு சத்தியாகிரகத்தில் பங்கேற்றார்?', options: ['தண்டி', 'வேதாரண்யம்', 'சம்பாரண்', 'எதுவுமில்லை'], answer: 1 },
                { question: '1928-ல் அவர் எந்த வேலைநிறுத்தத்தை ஒருங்கிணைத்தார்?', options: ['கோரல் மில்', 'தென்னிந்திய ரயில்வே வேலைநிறுத்தம்', 'தபால் அலுவலக வேலைநிறுத்தம்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் எந்த அமைச்சகப் பதவியை வகித்தார்?', options: ['நிதி', 'பொது சுகாதாரம்', 'பாதுகாப்பு', 'எதுவுமில்லை'], answer: 1 },
                { question: 'உப்பு சத்தியாகிரகத்தின் போது அவர் யாருடைய தோழராக இருந்தார்?', options: ['காந்தி', 'ராஜாஜி', 'நேரு', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'bhaktavatsalam', name: 'M. Bhaktavatsalam', popular: 'Bhaktavatsalam',
        born: '9 October 1897', died: '13 February 1987',
        image: './images/bhaktavatsalam.jpg',
        videoLink: 'https://youtube.com',
        role: 'A veteran freedom fighter and politician who served as the Chief Minister of Madras State.',
        points: ['Joined the independence movement at a young age and participated in the Quit India Movement.', 'A very close associate and supporter of K. Kamaraj.', 'Served as the last Chief Minister of the undivided Madras State.', 'Arrested by the British for his role in anti-colonial protests.', 'Known for his administrative skills and long political career.'],
        quiz: [
            { question: 'M. Bhaktavatsalam served as the Chief Minister of which state?', options: ['Kerala', 'Andhra', 'Madras State', 'None'], answer: 2 },
            { question: 'Which major movement did he participate in during the 1940s?', options: ['Non-Cooperation', 'Quit India Movement', 'Swadeshi', 'None'], answer: 1 },
            { question: 'He was a close supporter of which prominent leader?', options: ['Periyar', 'K. Kamaraj', 'Rajaji', 'None'], answer: 1 },
            { question: 'Was he arrested by the British?', options: ['No', 'Yes', 'Escaped', 'None'], answer: 1 },
            { question: 'He was the last Chief Minister of...?', options: ['Madras Presidency', 'Undivided Madras State', 'Tamil Nadu', 'None'], answer: 1 }
        ],
        ta: {
            name: 'எம். பக்தவத்சலம்',
            popular: 'பக்தவத்சலம்',
            born: '9 அக்டோபர் 1897',
            died: '13 பிப்ரவரி 1987',
            role: 'சென்னை மாநிலத்தின் முதலமைச்சராகப் பணியாற்றிய மூத்த சுதந்திரப் போராட்ட வீரர் மற்றும் அரசியல்வாதி.',
            points: ['இளம் வயதிலேயே சுதந்திர இயக்கத்தில் சேர்ந்து வெள்ளையனே வெளியேறு இயக்கத்தில் பங்கேற்றார்.', 'காமராஜரின் நெருங்கிய நண்பர் மற்றும் ஆதரவாளர்.', 'ஒன்றிணைந்த சென்னை மாநிலத்தின் கடைசி முதலமைச்சராகப் பணியாற்றினார்.', 'காலனித்துவ எதிர்ப்புப் போராட்டங்களில் அவரது பங்கிற்காகப் பிரிட்டிஷாரால் கைது செய்யப்பட்டார்.', 'அவரது நிர்வாகத் திறன் மற்றும் நீண்ட அரசியல் வாழ்க்கைக்காக அறியப்பட்டவர்.'],
            quiz: [
                { question: 'எம். பக்தவத்சலம் எந்த மாநிலத்தின் முதலமைச்சராக இருந்தார்?', options: ['கேரளா', 'ஆந்திரா', 'சென்னை மாநிலம்', 'எதுவுமில்லை'], answer: 2 },
                { question: '1940-களில் அவர் எந்த முக்கிய இயக்கத்தில் பங்கேற்றார்?', options: ['ஒத்துழையாமை', 'வெள்ளையனே வெளியேறு இயக்கம்', 'சுதேசி', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் எந்த முக்கியத் தலைவரின் நெருங்கிய ஆதரவாளர்?', options: ['பெரியார்', 'க. காமராஜர்', 'ராஜாஜி', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் பிரிட்டிஷாரால் கைது செய்யப்பட்டாரா?', options: ['இல்லை', 'ஆம்', 'தப்பினார்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் எதன் கடைசி முதலமைச்சராக இருந்தார்?', options: ['சென்னை மாகாணம்', 'ஒன்றிணைந்த சென்னை மாநிலம்', 'தமிழ்நாடு', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'naidu', name: 'Varadharajulu Naidu', popular: 'Dr. Naidu',
        born: '1887', died: '1957',
        image: './images/naidu.jpg',
        videoLink: 'https://youtube.com',
        role: 'A pioneering leader who merged social reform with political freedom and advocated for the rights of the underprivileged.',
        points: ['Known as the "Lion of Tamil Nadu" for his fiery speeches.', 'Participated in the Non-Cooperation movement actively.', 'Promoted the use of Tamil in political discourse.', 'Founded the "Tamil Nadu" newspaper to spread nationalist ideas.', 'Championed the cause of social justice alongside the struggle for independence.'],
        quiz: [
            { question: 'What title was Varadharajulu Naidu known by?', options: ['Mahatma', 'Lion of Tamil Nadu', 'Netaji', 'None'], answer: 1 },
            { question: 'What did he promote in political discourse?', options: ['Use of English', 'Use of Tamil', 'Use of French', 'None'], answer: 1 },
            { question: 'Which newspaper did he find?', options: ['The Hindu', 'Tamil Nadu', 'Swadeshi', 'None'], answer: 1 },
            { question: 'Which movement did he participate in?', options: ['1857 Revolt', 'Non-Cooperation Movement', 'Sepoy Mutiny', 'None'], answer: 1 },
            { question: 'He merged social reform with...?', options: ['Monarchy', 'Political freedom', 'Business', 'None'], answer: 1 }
        ],
        ta: {
            name: 'வரதராஜுலு நாயுடு',
            popular: 'டாக்டர் நாயுடு',
            born: '1887',
            died: '1957',
            role: 'சமூக சீர்திருத்தத்தையும் அரசியல் சுதந்திரத்தையும் இணைத்து ஒடுக்கப்பட்டவர்களின் உரிமைகளுக்காகப் போராடிய முன்னோடித் தலைவர்.',
            points: ['தனது ஆவேசமான உரைகளுக்காக "தமிழ்நாட்டுச் சிங்கம்" என்று அழைக்கப்பட்டார்.', 'ஒத்துழையாமை இயக்கத்தில் தீவிரமாகப் பங்கேற்றார்.', 'அரசியல் மேடைகளில் தமிழ் மொழியைப் பயன்படுத்த ஊக்குவித்தார்.', 'தேசியவாதக் கருத்துக்களைப் பரப்ப "தமிழ்நாடு" என்ற செய்தித்தாளைத் தொடங்கினார்.', 'சுதந்திரப் போராட்டத்துடன் இணைந்து சமூக நீதிக்கும் பாடுபட்டார்.'],
            quiz: [
                { question: 'வரதராஜுலு நாயுடு என்ன பட்டப்பெயரால் அழைக்கப்பட்டார்?', options: ['மகாத்மா', 'தமிழ்நாட்டுச் சிங்கம்', 'நேதாஜி', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அரசியல் மேடைகளில் அவர் எதை ஊக்குவித்தார்?', options: ['ஆங்கிலப் பயன்பாடு', 'தமிழ்ப் பயன்பாடு', 'பிரஞ்சு பயன்பாடு', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் தொடங்கிய செய்தித்தாள் எது?', options: ['தி இந்து', 'தமிழ்நாடு', 'சுதேசி', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் எந்த இயக்கத்தில் பங்கேற்றார்?', options: ['1857 புரட்சி', 'ஒத்துழையாமை இயக்கம்', 'சிப்பாய் கலகம்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் சமூக சீர்திருத்தத்தை எதனுடன் இணைத்தார்?', options: ['முடியாட்சி', 'அரசியல் சுதந்திரம்', 'வணிகம்', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'santhanam', name: 'K. Santhanam', popular: 'Santhanam',
        born: '1895', died: '1980',
        image: './images/santhanam.jpg',
        videoLink: 'https://youtube.com',
        role: 'A distinguished lawyer, freedom fighter, and the "Father of the Anti-Corruption Movement in India."',
        points: ['Participated in the Salt Satyagraha and was imprisoned.', 'Played a key role in the drafting of the Indian Constitution.', 'Organized several movements against the British in Tamil Nadu.', 'Known for his unwavering integrity and work against corruption.', 'The "Santhanam Committee" report is a landmark in Indian administration.'],
        quiz: [
            { question: 'What is K. Santhanam known as?', options: ['Father of Space Research', 'Father of the Anti-Corruption Movement', 'The Nightingale', 'None'], answer: 1 },
            { question: 'Which document did he help draft?', options: ['Magna Carta', 'Indian Constitution', 'Declaration of Independence', 'None'], answer: 1 },
            { question: 'Which committee namesake is a landmark in administration?', options: ['Santhanam Committee', 'Nehru Committee', 'Simon Commission', 'None'], answer: 0 },
            { question: 'Was he imprisoned during the freedom struggle?', options: ['No', 'Yes', 'Never', 'Only for 1 hour'], answer: 1 },
            { question: 'He was a distinguished...?', options: ['Musician', 'Lawyer', 'Scientist', 'None'], answer: 1 }
        ],
        ta: {
            name: 'க. சந்தானம்',
            popular: 'சந்தானம்',
            born: '1895',
            died: '1980',
            role: 'மதிப்புமிக்க வழக்கறிஞர் மற்றும் "இந்திய ஊழல் எதிர்ப்பு இயக்கத்தின் தந்தை" என்று அழைக்கப்படுவர்.',
            points: ['உப்பு சத்தியாகிரகத்தில் பங்கேற்றுச் சிறை சென்றார்.', 'இந்திய அரசியலமைப்புச் சட்டத்தை வரைவதில் முக்கியப் பங்காற்றினார்.', 'தமிழ்நாட்டில் பிரிட்டிஷாருக்கு எதிராகப் பல இயக்கங்களை ஒருங்கிணைத்தார்.', 'அவரது அசைக்க முடியாத நேர்மை மற்றும் ஊழலுக்கு எதிரான பணிக்காக அறியப்பட்டவர்.', '"சந்தானம் கமிட்டி" அறிக்கை இந்திய நிர்வாகத்தில் ஒரு முக்கிய மைல்கல்லாகும்.'],
            quiz: [
                { question: 'க. சந்தானம் எவ்வாறு அழைக்கப்படுகிறார்?', options: ['விண்வெளி ஆராய்ச்சியின் தந்தை', 'ஊழல் எதிர்ப்பு இயக்கத்தின் தந்தை', 'நைட்டிங்கேல்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் எந்த ஆவணத்தை வரைவதில் உதவினார்?', options: ['மகா சாசனம்', 'இந்திய அரசியலமைப்பு', 'சுதந்திர பிரகடனம்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'நிர்வாகத்தில் மைல்கல்லாக இருக்கும் கமிட்டி எது?', options: ['சந்தானம் கமிட்டி', 'நேரு கமிட்டி', 'சைமன் கமிஷன்', 'எதுவுமில்லை'], answer: 0 },
                { question: 'சுதந்திரப் போராட்டத்தின் போது அவர் சிறை சென்றாரா?', options: ['இல்லை', 'ஆம்', 'ஒருபோதும் இல்லை', '1 மணி நேரம் மட்டும்'], answer: 1 },
                { question: 'அவர் ஒரு சிறந்த...?', options: ['இசைக்கலைஞர்', 'வழக்கறிஞர்', 'விஞ்ஞானி', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'subbaraman', name: 'N. M. R. Subbaraman', popular: 'Madurai Gandhi',
        born: '1905', died: '1983',
        image: './images/subbaraman.jpg',
        videoLink: 'https://youtube.com',
        role: 'A dedicated Gandhian and freedom fighter from Madurai, known for his simplicity and social service.',
        points: ['Famously known as "Madurai Gandhi" due to his lifestyle and principles.', 'Participated in the Salt Satyagraha and Quit India Movement.', 'Donated a large part of his wealth to the Harijan Welfare Trust.', 'Served as a Member of Parliament for several terms.', 'A tireless worker for the upliftment of the poor and oppressed.'],
        quiz: [
            { question: 'What is N. M. R. Subbaraman called?', options: ['Rajaji of Madurai', 'Madurai Gandhi', 'Netaji of Madurai', 'None'], answer: 1 },
            { question: 'Which Trust did he donate a large part of his wealth to?', options: ['Harijan Welfare Trust', 'Red Cross', 'WWF', 'None'], answer: 0 },
            { question: 'Where was he from?', options: ['Chennai', 'Madurai', 'Trichy', 'None'], answer: 1 },
            { question: 'Did he serve in the Parliament?', options: ['No', 'Yes', 'Only for 1 day', 'Never'], answer: 1 },
            { question: 'What was he primarily known for?', options: ['Aggression', 'Simplicity and social service', 'Wealth', 'None'], answer: 1 }
        ],
        ta: {
            name: 'என். எம். ஆர். சுப்பராமன்',
            popular: 'மதுரை காந்தி',
            born: '1905',
            died: '1983',
            role: 'மதுரையைச் சேர்ந்த அர்ப்பணிப்புள்ள காந்தியவாதி மற்றும் சுதந்திரப் போராட்ட வீரர்.',
            points: ['அவரது எளிமை மற்றும் கொள்கைக்காக "மதுரை காந்தி" என்று அன்போடு அழைக்கப்பட்டார்.', 'உப்பு சத்தியாகிரகம் மற்றும் வெள்ளையனே வெளியேறு இயக்கத்தில் பங்கேற்றார்.', 'தனது சொத்துக்களின் பெரும் பகுதியை ஹரிஜன நல அறக்கட்டளைக்கு வழங்கினார்.', 'பலமுறை நாடாளுமன்ற உறுப்பினராகப் பணியாற்றினார்.', 'ஏழைகள் மற்றும் ஒடுக்கப்பட்டவர்களின் முன்னேற்றத்திற்காக அயராது உழைத்தவர்.'],
            quiz: [
                { question: 'என். எம். ஆர். சுப்பராமன் எவ்வாறு அழைக்கப்படுகிறார்?', options: ['மதுரை ராஜாஜி', 'மதுரை காந்தி', 'மதுரை நேதாஜி', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் தனது சொத்தின் பெரும் பகுதியை எந்த அறக்கட்டளைக்கு வழங்கினார்?', options: ['ஹரிஜன நல அறக்கட்டளை', 'செஞ்சிலுவை சங்கம்', 'WWF', 'எதுவுமில்லை'], answer: 0 },
                { question: 'அவர் எந்த ஊரைச் சேர்ந்தவர்?', options: ['சென்னை', 'மதுரை', 'திருச்சி', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் நாடாளுமன்றத்தில் பணியாற்றினாரா?', options: ['இல்லை', 'ஆம்', '1 நாள் மட்டும்', 'ஒருபோதும் இல்லை'], answer: 1 },
                { question: 'அவர் முதன்மையாக எதற்காக அறியப்பட்டார்?', options: ['ஆக்ரோஷம்', 'எளிமை மற்றும் சமூக சேவை', 'செல்வம்', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'vinayagam', name: 'K. Vinayagam', popular: 'Vinayagam',
        born: '1906', died: '1980',
        image: './images/vinayagam.jpg',
        videoLink: 'https://youtube.com',
        role: 'A revolutionary freedom fighter and prominent leader in the struggle against British rule.',
        points: ['Actively involved in the revolutionary activities of the 1930s.', 'Arrested many times for his daring anti-British actions.', 'Played a crucial role in organizing worker movements in Madras.', 'A passionate advocate for India\'s complete independence.', 'Contributor to several revolutionary journals and publications.'],
        quiz: [
            { question: 'In which decade was K. Vinayagam most active in revolutionary activities?', options: ['1850s', '1900s', '1930s', '1980s'], answer: 2 },
            { question: 'What kind of movements did he help organize in Madras?', options: ['Religious movements', 'Worker movements', 'Scientific movements', 'None'], answer: 1 },
            { question: 'Did he spend time in jail for his actions?', options: ['No', 'Yes', 'Never', 'Only 5 minutes'], answer: 1 },
            { question: 'He was a passionate advocate for...?', options: ['Local rule', 'Complete independence', 'British reform', 'None'], answer: 1 },
            { question: 'What did he contribute to besides active protests?', options: ['Poetry', 'Revolutionary journals and publications', 'Paintings', 'None'], answer: 1 }
        ],
        ta: {
            name: 'கே. விநாயககம்',
            popular: 'விநாயககம்',
            born: '1906',
            died: '1980',
            role: 'பிரிட்டிஷ் ஆட்சிக்கு எதிரான போராட்டத்தின் முக்கிய புரட்சிகர போராட்ட வீரர் மற்றும் தலைவராவார்.',
            points: ['1930-களில் புரட்சிகர நடவடிக்கைகளில் தீவிரமாக ஈடுபட்டார்.', 'பிரிட்டிஷ் எதிர்ப்பு நடவடிக்கைகளுக்காகப் பலமுறை கைது செய்யப்பட்டார்.', 'சென்னையில் தொழிலாளர் இயக்கங்களை ஒருங்கிணைப்பதில் முக்கியப் பங்காற்றினார்.', 'இந்தியாவின் பூரண சுதந்திரத்திற்காக ஆவேசமாகப் போராடியவர்.', 'பல புரட்சிகர இதழ்கள் மற்றும் வெளியீடுகளில் பங்களித்தவர்.'],
            quiz: [
                { question: 'கே. விநாயககம் எந்தப் பத்தாண்டுகளில் புரட்சிகர நடவடிக்கைகளில் தீவிரமாக இருந்தார்?', options: ['1850-கள்', '1900-கள்', '1930-கள்', '1980-கள்'], answer: 2 },
                { question: 'சென்னையில் அவர் எந்த வகை இயக்கங்களை ஒருங்கிணைக்க உதவினார்?', options: ['சமய இயக்கங்கள்', 'தொழிலாளர் இயக்கங்கள்', 'அறிவியல் இயக்கங்கள்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் தனது செயல்களுக்காகச் சிறையில் இருந்தாரா?', options: ['இல்லை', 'ஆம்', 'ஒருபோதும் இல்லை', '5 நிமிடங்கள் மட்டும்'], answer: 1 },
                { question: 'அவர் எதற்காக ஆவேசமாகப் போராடினார்?', options: ['உள்ளூர் ஆட்சி', 'பூரண சுதந்திரம்', 'பிரிட்டிஷ் சீர்திருத்தம்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'செயலூக்கமான போராட்டங்களுடன் அவர் வேறு எதற்கு பங்களித்தார்?', options: ['கவிதை', 'புரட்சிகர இதழ்கள் மற்றும் வெளியீடுகள்', 'ஓவியங்கள்', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'vaidyanatha', name: 'A. Vaidyanatha Iyer', popular: 'Madurai Vaidyanatha Iyer',
        born: '16 May 1890', died: '23 February 1955',
        image: './images/vaidyanatha.jpg',
        videoLink: 'https://youtube.com',
        role: 'A pioneering social reformer and freedom fighter who led the temple entry movement in Madurai.',
        points: ['Led a group of Dalits into the Madurai Meenakshi Temple in 1939.', 'A dedicated devotee of Gandhi and his principles.', 'Organized various social welfare activities for the depressed classes.', 'Actively participated in the Civil Disobedience and Vedaranyam Salt Satyagraha.', 'Faced massive social opposition for his work on equality but never wavered.'],
        quiz: [
            { question: 'Which temple did A. Vaidyanatha Iyer lead Dalits into in 1939?', options: ['Tanjore Big Temple', 'Madurai Meenakshi Temple', 'Varanasi', 'None'], answer: 1 },
            { question: 'Which movement did he participate in alongside Rajaji?', options: ['Quit India', 'Vedaranyam Salt Satyagraha', 'Ghadar', 'None'], answer: 1 },
            { question: 'He was a dedicated devotee of which leader?', options: ['Ambedkar', 'Gandhi', 'Nehru', 'None'], answer: 1 },
            { question: 'What was his primary cause as a reformer?', options: ['Equality and temple entry', 'Business expansion', 'Space exploration', 'None'], answer: 0 },
            { question: 'Did he face opposition for his social work?', options: ['No', 'Yes, massive opposition', 'Very little', 'None'], answer: 1 }
        ],
        ta: {
            name: 'அ. வைத்திலிங்க ஐயர்',
            popular: 'மதுரை வைத்தியநாத ஐயர்',
            born: '16 மே 1890',
            died: '23 பிப்ரவரி 1955',
            role: 'மதுரையில் ஆலயப் பிரவேச இயக்கத்தை வழிநடத்திய முன்னோடி சமூக சீர்திருத்தவாதி மற்றும் சுதந்திரப் போராட்ட வீரர்.',
            points: ['1939-ல் மதுரை மீனாட்சி கோவிலுக்குள் ஒடுக்கப்பட்ட மக்களை அழைத்துச் சென்றார்.', 'காந்தியடிகள் மற்றும் அவரது கொள்கைகளின் தீவிர ஆதரவாளர்.', 'ஒடுக்கப்பட்ட வகுப்பினருக்காகப் பல்வேறு சமூக நல நடவடிக்கைகளை ஒருங்கிணைத்தார்.', 'சட்டமறுப்பு மற்றும் வேதாரண்யம் உப்பு சத்தியாகிரகத்தில் தீவிரமாகப் பங்கேற்றார்.', 'சமத்துவத்திற்காகப் பணியாற்றிய போது பல சமூக எதிர்ப்புகளைச் சந்தித்தாலும் ஒருபோதும் தளரவில்லை.'],
            quiz: [
                { question: '1939-ல் அ. வைத்தியநாத ஐயர் எந்தக் கோவிலுக்குள் ஒடுக்கப்பட்ட மக்களை அழைத்துச் சென்றார்?', options: ['தஞ்சை பெரிய கோவில்', 'மதுரை மீனாட்சி கோவில்', 'வாரணாசி', 'எதுவுமில்லை'], answer: 1 },
                { question: 'ராஜாஜியுடன் இணைந்து அவர் எந்த இயக்கத்தில் பங்கேற்றார்?', options: ['வெள்ளையனே வெளியேறு', 'வேதாரண்யம் உப்பு சத்தியாகிரகம்', 'கதர்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் எந்தத் தலைவரின் தீவிர ஆதரவாளர்?', options: ['அம்பேத்கர்', 'காந்தி', 'நேரு', 'எதுவுமில்லை'], answer: 1 },
                { question: 'சீர்திருத்தவாதியாக அவரது முதன்மையான நோக்கம் என்ன?', options: ['சமத்துவம் மற்றும் ஆலயப் பிரவேசம்', 'வணிக விரிவாக்கம்', 'விண்வெளி ஆராய்ச்சி', 'எதுவுமில்லை'], answer: 0 },
                { question: 'தனது சமூகப் பணிக்காக அவர் எதிர்ப்பைச் சந்தித்தாரா?', options: ['இல்லை', 'ஆம், கடும் எதிர்ப்பு', 'மிகவும் குறைவாக', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'thiruvika', name: 'Thiru. Vi. Ka', popular: 'Tamil Thenral',
        born: '26 August 1883', died: '17 September 1953',
        image: './images/thiruvika.jpg',
        videoLink: 'https://youtube.com',
        role: 'A legendary Tamil scholar, writer, and labour leader who integrated the Tamil identity with the freedom struggle.',
        points: ['Known as "Tamil Thenral" (Tamil Breeze) for his elegant prose.', 'Co-founded the first trade union in India (Madras Labour Union).', 'Actively participated in the independence movement and social reforms.', 'A pioneer of modern Tamil journalism.', 'His writings inspired thousands to join both the labour and independence movements.'],
        quiz: [
            { question: 'What is Thiru. Vi. Ka popularly known as?', options: ['Tamil Thatha', 'Tamil Thenral', 'Tamil Selvam', 'None'], answer: 1 },
            { question: 'He co-founded the first... in India?', options: ['Bank', 'Trade union (Madras Labour Union)', 'College', 'None'], answer: 1 },
            { question: 'What was his contribution to literature?', options: ['Wrote science fiction', 'Pioneer of modern Tamil prose and journalism', 'Wrote only fairy tales', 'None'], answer: 1 },
            { question: 'Did he participate in the independence movement?', options: ['No', 'Yes', 'Only very late', 'Never'], answer: 1 },
            { question: 'What did he integrate with the freedom struggle?', options: ['Caste identity', 'Tamil identity and labour rights', 'Business assets', 'None'], answer: 1 }
        ],
        ta: {
            name: 'திரு. வி. க',
            popular: 'தமிழ் தென்றல்',
            born: '26 ஆகஸ்ட் 1883',
            died: '17 செப்டம்பர் 1953',
            role: 'தமிழ் அடையாளத்தைச் சுதந்திரப் போராட்டத்துடன் இணைத்த புகழ்பெற்ற அறிஞர், எழுத்தாளர் மற்றும் தொழிலாளர் தலைவர்.',
            points: ['அவரது நேர்த்தியான தமிழ் நடைக்காக "தமிழ் தென்றல்" என்று அழைக்கப்பட்டார்.', 'இந்தியாவின் முதல் தொழிற்சங்கத்தை (சென்னை தொழிலாளர் சங்கம்) இணைந்து நிறுவினார்.', 'சுதந்திர இயக்கம் மற்றும் சமூக சீர்திருத்தங்களில் தீவிரமாகப் பங்கேற்றார்.', 'நவீன தமிழ் இதழியலின் முன்னோடி.', 'அவரது எழுத்துக்கள் தொழிலாளர் மற்றும் சுதந்திர இயக்கத்தில் ஆயிரக்கணக்கானோர் இணையத் தூண்டியது.'],
            quiz: [
                { question: 'திரு. வி. க பிரபலமாக எவ்வாறு அழைக்கப்படுகிறார்?', options: ['தமிழ் தாத்தா', 'தமிழ் தென்றல்', 'தமிழ்ச்செல்வம்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் இந்தியாவில் எதை இணைந்து நிறுவினார்?', options: ['வங்கி', 'தொழிற்சங்கம் (சென்னை தொழிலாளர் சங்கம்)', 'கல்லூரி', 'எதுவுமில்லை'], answer: 1 },
                { question: 'இலக்கியத்திற்கு அவரது பங்களிப்பு என்ன?', options: ['அறிவியல் கதைகள் எழுதினார்', 'நவீன தமிழ் உரைநடை மற்றும் இதழியலின் முன்னோடி', 'கதைகள் மட்டும் எழுதினார்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'சுதந்திர பிரகடனத்தில் அவர் பங்கேற்றாரா?', options: ['இல்லை', 'ஆம்', 'மிகவும் தாமதமாக', 'ஒருபோதும் இல்லை'], answer: 1 },
                { question: 'சுதந்திரப் போராட்டத்துடன் அவர் எதை ஒருங்கிணைத்தார்?', options: ['சாதி அடையாளம்', 'தமிழ் அடையாளம் மற்றும் தொழிலாளர் உரிமைகள்', 'வணிகச் சொத்துக்கள்', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'parisutha', name: 'Parisutha Nadar', popular: 'A. Y. S. Parisutha Nadar',
        born: '1909', died: '1985',
        image: './images/Parisutha Nadar.jpg', videoLink: 'https://youtube.com',
        role: 'A dedicated freedom fighter and social worker from Tanjore who served in the Madras Legislative Assembly.',
        points: ['Actively participated in the Salt Satyagraha and Quit India movement.', 'A prominent leader of the Congress party in the Tanjore region.', 'Worked extensively for the welfare of the farming community.', 'Elected multiple times to the Madras Legislative Assembly.', 'Known for his simple lifestyle and commitment to social service.'],
        quiz: [
            { question: 'Parisutha Nadar was a prominent leader in which region?', options: ['Chennai', 'Tanjore', 'Madurai', 'Coimbatore'], answer: 1 },
            { question: 'Which legislative body was he elected to multiple times?', options: ['Madras Legislative Assembly', 'Lok Sabha', 'Rajya Sabha', 'None'], answer: 0 },
            { question: 'He was a prominent leader of which political party?', options: ['Justice Party', 'Congress', 'Muslim League', 'Communist Party'], answer: 1 },
            { question: 'Which major movement did he participate in during 1942?', options: ['Khilafat', 'Quit India', 'Swadeshi', 'None'], answer: 1 },
            { question: 'What community did he work extensively for?', options: ['Industrialists', 'Farmers', 'Fishermen', 'None'], answer: 1 }
        ],
        ta: {
            name: 'ஏ. ஒய். எஸ். பரிசுத்த நாடார்',
            popular: 'பரிசுத்த நாடார்',
            born: '1909',
            died: '1985',
            role: 'தஞ்சாவூரைச் சேர்ந்த சுதந்திரப் போராட்ட வீரர் மற்றும் சமூக சேவகர்.',
            points: ['உப்பு சத்தியாகிரகம் மற்றும் வெள்ளையனே வெளியேறு இயக்கத்தில் முக்கிய பங்கு வகித்தார்.', 'தஞ்சை மண்டலத்தில் காங்கிரஸ் கட்சியின் முக்கியத் தலைவராகத் திகழ்ந்தார்.', 'விவசாயிகளின் நலனுக்காக அரும்பாடுபட்டார்.', 'சென்னை சட்டமன்றத்திற்குப் பலமுறை தேர்ந்தெடுக்கப்பட்டார்.', 'தனது எளிமையான வாழ்க்கை முறை மற்றும் சமூக சேவைக்காக அறியப்பட்டவர்.'],
            quiz: [
                { question: 'பரிசுத்த நாடார் எந்தப் பகுதியில் முக்கியத் தலைவராக இருந்தார்?', options: ['சென்னை', 'தஞ்சாவூர்', 'மதுரை', 'கோயம்புத்தூர்'], answer: 1 },
                { question: 'அவர் எந்தத் சட்டமன்றத்திற்குப் பலமுறை தேர்ந்தெடுக்கப்பட்டார்?', options: ['சென்னை சட்டமன்றம்', 'மக்களவை', 'மாநிலங்களவை', 'எதுவுமில்லை'], answer: 0 },
                { question: 'அவர் எந்த அரசியல் கட்சியின் முக்கியத் தலைவராக இருந்தார்?', options: ['நீதிக்கட்சி', 'காங்கிரஸ்', 'முஸ்லீம் லீக்', 'கம்யூனிஸ்ட் கட்சி'], answer: 1 },
                { question: '1942-ல் அவர் எந்த முக்கிய இயக்கத்தில் பங்கேற்றார்?', options: ['கிலாபத்', 'வெள்ளையனே வெளியேறு', 'சுதேசி', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் யாருடைய நலனுக்காக அதிகமாக உழைத்தார்?', options: ['தொழிலதிபர்கள்', 'விவசாயிகள்', 'மீனவர்கள்', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'ramamurti', name: 'P. Ramamurti', popular: 'P.R.',
        born: '20 September 1908', died: '15 December 1987',
        image: './images/Ramamurti.jpg', videoLink: 'https://youtube.com',
        role: 'A legendary Communist leader and freedom fighter who spent many years in prison for his revolutionary activities.',
        points: ['A key figure in the trade union movement in Tamil Nadu.', 'Brilliant orator and parliamentarian known for his sharp intellect.', 'Spent over nine years in prison during the British Raj.', 'Associated with the Madras Conspiracy Case (1947).', 'Consistently fought for the rights of the working class and social equality.'],
        quiz: [
            { question: 'P. Ramamurti was a prominent leader of which ideology?', options: ['Monarchy', 'Communism', 'Fascism', 'None'], answer: 1 },
            { question: 'Approximately how many years did he spend in prison under British rule?', options: ['1', '5', 'Over 9', 'None'], answer: 2 },
            { question: 'Which movement was he a key figure of in Tamil Nadu?', options: ['Trade Union movement', 'Royal family', 'Merchant association', 'None'], answer: 0 },
            { question: 'What was he known for besides his leadership?', options: ['Painting', 'Sharp intellect and oratory', 'Singing', 'None'], answer: 1 },
            { question: 'In which conspiracy case was he associated in 1947?', options: ['Meerut', 'Madras Conspiracy Case', 'Lahore', 'None'], answer: 1 }
        ],
        ta: {
            name: 'பி. ராமமூர்த்தி',
            popular: 'பி.ஆர்.',
            born: '20 செப்டம்பர் 1908',
            died: '15 டிசம்பர் 1987',
            role: 'தமிழ்நாட்டின் புகழ்பெற்ற கம்யூனிஸ்ட் தலைவர் மற்றும் சுதந்திரப் போராட்ட வீரர்.',
            points: ['தமிழ்நாட்டில் தொழிற்சங்க இயக்கத்தின் முக்கியத் தூணாக விளங்கினார்.', 'அவரது கூரிய அறிவு மற்றும் பேச்சாற்றலுக்காகப் புகழ்பெற்ற நாடாளுமன்ற உறுப்பினர்.', 'பிரிட்டிஷ் ஆட்சிக் காலத்தில் ஒன்பது ஆண்டுகளுக்கும் மேலாகச் சிறையில் கழித்தார்.', '1947 மெட்ராஸ் சதி வழக்கில் தொடர்புடையவர்.', 'தொழிலாள வர்க்கத்தின் உரிமைகள் மற்றும் சமூக சமத்துவத்திற்காகத் தொடர்ந்து போராடியவர்.'],
            quiz: [
                { question: 'பி. ராமமூர்த்தி எந்தக் கொள்கையின் முக்கியத் தலைவராக இருந்தார்?', options: ['முடியாட்சி', 'கம்யூனிசம்', 'பாசிசம்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'பிரிட்டிஷ் ஆட்சியின் கீழ் அவர் எத்தனை ஆண்டுகள் சிறையில் இருந்தார்?', options: ['1', '5', '9 ஆண்டுகளுக்கு மேல்', 'எதுவுமில்லை'], answer: 2 },
                { question: 'தமிழ்நாட்டில் அவர் எதன் முக்கியத் தலைவராக இருந்தார்?', options: ['தொழிற்சங்க இயக்கம்', 'அரச குடும்பம்', 'வணிகர் சங்கம்', 'எதுவுமில்லை'], answer: 0 },
                { question: 'தலைமைத்துவத்தைத் தவிர அவர் எதற்காக அறியப்பட்டார்?', options: ['ஓவியம்', 'கூரிய அறிவு மற்றும் பேச்சாற்றல்', 'பாடல்', 'எதுவுமில்லை'], answer: 1 },
                { question: '1947-ல் அவர் எந்தச் சதி வழக்கில் தொடர்புடையவர்?', options: ['மீரட்', 'மெட்ராஸ் சதி வழக்கு', 'லாகூர்', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'sadasivam', name: 'T. Sadasivam', popular: 'Sadasivam',
        born: '4 September 1902', died: '21 November 1997',
        image: './images/Sadasivam.jpg', videoLink: 'https://youtube.com',
        role: 'A freedom fighter, singer, and co-founder of the popular Tamil magazine "Kalki".',
        points: ['Husband of the legendary Carnatic singer M.S. Subbulakshmi.', 'Actively involved in the freedom struggle from a very young age.', 'Co-founded "Kalki" along with the famous writer Kalki Krishnamurthy.', 'A staunch follower of Rajaji and Gandhian principles.', 'Played a vital role in promoting Indian classical music and culture.'],
        quiz: [
            { question: 'Which famous magazine did T. Sadasivam co-found?', options: ['The Hindu', 'Kalki', 'Swadeshi', 'None'], answer: 1 },
            { question: 'Who was his famous wife, the Bharat Ratna awardee?', options: ['Sarojini Naidu', 'M.S. Subbulakshmi', 'Aruna Asaf Ali', 'None'], answer: 1 },
            { question: 'Whose staunch follower was he?', options: ['Rajaji', 'Netaji', 'Bose', 'None'], answer: 0 },
            { question: 'What was his primary contribution besides the freedom struggle?', options: ['Military expansion', 'Journalism and promoting culture', 'Agriculture', 'None'], answer: 1 },
            { question: 'He followed which leader\'s principles primarily?', options: ['Gandhi', 'Hitler', 'Stalin', 'None'], answer: 0 }
        ],
        ta: {
            name: 'தி. சதாசிவம்',
            popular: 'சதாசிவம்',
            born: '4 செப்டம்பர் 1902',
            died: '21 நவம்பர் 1997',
            role: 'சுதந்திரப் போராட்ட வீரர் மற்றும் புகழ்பெற்ற "கல்கி" வார இதழின் இணை நிறுவனர்.',
            points: ['புகழ்பெற்ற கர்நாடக இசைப் பாடகி எம்.எஸ். சுப்புலட்சுமியின் கணவர்.', 'மிக இளம் வயதிலிருந்தே சுதந்திரப் போராட்டத்தில் தீவிரமாக ஈடுபட்டார்.', 'எழுத்தாளர் கல்கி கிருஷ்ணமூர்த்தியுடன் இணைந்து "கல்கி" இதழைத் தொடங்கினார்.', 'ராஜாஜி மற்றும் காந்தியக் கொள்கைகளின் தீவிரப் பின்பற்றுபவர்.', 'இந்திய பாரம்பரிய இசை மற்றும் கலாச்சாரத்தை மேம்படுத்துவதில் முக்கியப் பங்கு வகித்தார்.'],
            quiz: [
                { question: 'தி. சதாசிவம் எந்தப் புகழ்பெற்ற இதழை இணைந்து நிறுவினார்?', options: ['தி இந்து', 'கல்கி', 'சுதேசி', 'எதுவுமில்லை'], answer: 1 },
                { question: 'பாரத ரத்னா விருது பெற்ற அவரது மனைவி யார்?', options: ['சரோஜினி நாயுடு', 'எம்.எஸ். சுப்புலட்சுமி', 'அருணா ஆசப் அலி', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் யாருடைய தீவிரப் பின்பற்றுபவராக இருந்தார்?', options: ['ராஜாஜி', 'நேதாஜி', 'போஸ்', 'எதுவுமில்லை'], answer: 0 },
                { question: 'சுதந்திரப் போராட்டத்தைத் தவிர அவரது முக்கியப் பங்களிப்பு என்ன?', options: ['இராணுவ விரிவாக்கம்', 'இதழியல் மற்றும் கலாச்சார மேம்பாடு', 'விவசாயம்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் முதன்மையாக எந்தத் தலைவரின் கொள்கைகளைப் பின்பற்றினார்?', options: ['காந்தி', 'ஹிட்லர்', 'ஸ்டாலின்', 'எதுவுமில்லை'], answer: 0 }
            ]
        }
    },
    {
        id: 'sivaraman', name: 'A. N. Sivaraman', popular: 'A.N.S.',
        born: 'March 1904', died: '1901',
        image: './images/Sivaraman.jpg', videoLink: 'https://youtube.com',
        role: 'A freedom fighter and a legendary journalist who served as the editor of "Dinamani" for several decades.',
        points: ['Participated in the Salt Satyagraha and was imprisoned.', 'Transformed Dinamani into a powerful tool for nationalist awakening.', 'Known for his simple and direct style of Tamil prose.', 'A staunch patriot who never compromised on journalistic ethics.', 'Strongly advocated for educational and social reforms through his columns.'],
        quiz: [
            { question: 'A. N. Sivaraman was the editor of which prominent Tamil newspaper?', options: ['Dina Thanthi', 'Dinamani', 'Dina Malar', 'None'], answer: 1 },
            { question: 'Which movement did he participate in during the 1930s?', options: ['Quit India', 'Salt Satyagraha', 'Khilafat', 'None'], answer: 1 },
            { question: 'What was he known for in his writing?', options: ['Complex jargon', 'Simple and direct Tamil prose', 'Poetry only', 'None'], answer: 1 },
            { question: 'Was he imprisoned during the British rule?', options: ['No', 'Yes', 'Escaped', 'None'], answer: 1 },
            { question: 'What did he use his newspaper for?', options: ['Advertising', 'Nationalist awakening', 'Business tips', 'None'], answer: 1 }
        ],
        ta: {
            name: 'ஏ. என். சிவராமன்',
            popular: 'ஏ.என்.எஸ்.',
            born: 'மார்ச் 1904',
            died: '2001',
            role: 'சுதந்திரப் போராட்ட வீரர் மற்றும் பல தசாப்தங்களாக "தினமணி" இதழின் ஆசிரியராகப் பணியாற்றிய புகழ்பெற்ற பத்திரிகையாளர்.',
            points: ['உப்பு சத்தியாகிரகத்தில் பங்கேற்றுச் சிறை சென்றார்.', 'தினமணி இதழைத் தேசிய விழிப்புணர்வுக்கான சக்திவாய்ந்த கருவியாக மாற்றினார்.', 'மிகவும் எளிமையான மற்றும் நேரடியான தமிழ் உரைநடைக்கு பெயர் பெற்றவர்.', 'பத்திரிகை அறத்தில் ஒருபோதும் சமரசம் செய்துகொள்ளாத தேசபக்தர்.', 'தனது கட்டுரைகள் மூலம் கல்வி மற்றும் சமூக சீர்திருத்தங்களுக்காகத் தீவிரமாக வாதிட்டார்.'],
            quiz: [
                { question: 'ஏ. என். சிவராமன் எந்தப் புகழ்பெற்ற தமிழ் நாளிதழின் ஆசிரியராக இருந்தார்?', options: ['தினத்தந்தி', 'தினமணி', 'தினமலர்', 'எதுவுமில்லை'], answer: 1 },
                { question: '1930-களில் அவர் எந்த இயக்கத்தில் பங்கேற்றார்?', options: ['வெள்ளையனே வெளியேறு', 'உப்பு சத்தியாகிரகம்', 'கிலாபத்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவரது எழுத்து நடை எவ்வாறு இருந்தது?', options: ['கடினமான சொற்கள்', 'எளிமையான மற்றும் நேரடியான தமிழ் உரைநடை', 'கவிதை மட்டும்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'பிரிட்டிஷ் ஆட்சியின் போது அவர் சிறையில் இருந்தாரா?', options: ['இல்லை', 'ஆம்', 'தப்பினார்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் தனது செய்தித்தாளினை எதற்காகப் பயன்படுத்தினார்?', options: ['விளம்பரம்', 'தேசிய விழிப்புணர்வு', 'வணிகக் குறிப்புகள்', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'srinivasa', name: 'B. Srinivasa Rao', popular: 'B.S.R.',
        born: '1906', died: '1961',
        image: './images/Srinivasa Rao.jpg', videoLink: 'https://youtube.com',
        role: 'A pioneering communist leader and peasant organizer who fought against the feudal landlord system.',
        points: ['Founder of the Tamil Nadu Peasants\' Association.', 'Dedicted his life to the rights of agricultural laborers and sharecroppers.', 'Played a major role in the struggle against untouchability in rural areas.', 'Spent several years in prison for his revolutionary and peasant activities.', 'A tireless worker for social justice and economic equality at the grassroots level.'],
        quiz: [
            { question: 'B. Srinivasa Rao was a prominent leader of which group?', options: ['Merchants', 'Peasants and agricultural laborers', 'Kings', 'None'], answer: 1 },
            { question: 'Which association did he found?', options: ['Tamil Nadu Peasants\' Association', 'Madras Corporation', 'Swaraj Party', 'None'], answer: 0 },
            { question: 'What social evil did he fight against in rural areas?', options: ['Inflation', 'Untouchability', 'Overcrowding', 'None'], answer: 1 },
            { question: 'Did he spend time in prison for his activities?', options: ['No', 'Yes', 'Never', 'None'], answer: 1 },
            { question: 'What was his primary goal at the grassroots level?', options: ['Expanding business', 'Social justice and economic equality', 'Building factories', 'None'], answer: 1 }
        ],
        ta: {
            name: 'பி. ஸ்ரீனிவாஸ ராவ்',
            popular: 'பி.எஸ்.ஆர்.',
            born: '1906',
            died: '1961',
            role: 'நிலப்பிரபுத்துவ முறைக்கு எதிராகப் போராடிய கம்யூனிஸ்ட் தலைவர் மற்றும் விவசாய சங்க அமைப்பாளர்.',
            points: ['தமிழ்நாடு விவசாயிகள் சங்கத்தின் ஸ்தாபகர்.', 'விவசாயத் தொழிலாளர்கள் மற்றும் குத்தகைதாரர்களின் உரிமைகளுக்காகத் தனது வாழ்க்கையை அர்ப்பணித்தார்.', 'கிராமப்புறங்களில் தீண்டாமைக்கு எதிரான போராட்டத்தில் முக்கிய பங்கு வகித்தார்.', 'தனது புரட்சிகர மற்றும் விவசாயிகள் தொடர்பான செயல்பாடுகளுக்காகப் பல ஆண்டுகள் சிறையில் கழித்தார்.', 'சமூக நீதி மற்றும் பொருளாதார சமத்துவத்திற்காக அடிமட்டத்தில் அயராது உழைத்தவர்.'],
            quiz: [
                { question: 'பி. ஸ்ரீனிவாஸ ராவ் எந்தக் குழுவின் முக்கியத் தலைவராக இருந்தார்?', options: ['বণிகர்கள்', 'விவசாயிகள் மற்றும் விவசாயத் தொழிலாளர்கள்', 'மன்னர்கள்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் எந்தச் சங்கத்தை நிறுவினார்?', options: ['தமிழ்நாடு விவசாயிகள் சங்கம்', 'சென்னை மாநகராட்சி', 'சுயராஜ்ஜிய கட்சி', 'எதுவுமில்லை'], answer: 0 },
                { question: 'கிராமப்புறங்களில் அவர் எந்தச் சமூகத் தீமைக்கு எதிராகப் போராடினார்?', options: ['பணவீக்கம்', 'தீண்டாமை', 'நெரிசல்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவரது செயல்பாடுகளுக்காக அவர் சிறையில் இருந்தாரா?', options: ['இல்லை', 'ஆம்', 'ஒருபோதும் இல்லை', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அடிமட்ட அளவில் அவரது முதன்மை இலக்கு என்ன?', options: ['வணிக விரிவாக்கம்', 'சமூக நீதி மற்றும் பொருளாதார சமத்துவம்', 'தொழிற்சாலைகள் கட்டுதல்', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'swaminatha', name: 'U. V. Swaminatha Iyer', popular: 'Tamil Thatha',
        born: '19 February 1855', died: '28 April 1942',
        image: './images/Swaminatha.jpg', videoLink: 'https://youtube.com',
        role: 'A legendary Tamil scholar and researcher who is credited with preserving ancient Tamil literature.',
        points: ['Known as "Tamil Thatha" (Grandfather of Tamil) for his immense service to the language.', 'Rescued and published several Sangam-era works including the Five Great Epics.', 'Worked tirelessly to collect palm-leaf manuscripts from remote villages.', 'A key figure in the revival of Tamil interest and identity.', 'Served as a professor and left behind a massive body of literary research.'],
        quiz: [
            { question: 'What is U. V. Swaminatha Iyer popularly called?', options: ['Tamil Thatha', 'Tamil Thenral', 'Bapuji', 'None'], answer: 0 },
            { question: 'He is credited with preserving which type of literature?', options: ['Science fiction', 'Ancient Sangam-era literature', 'English poetry', 'None'], answer: 1 },
            { question: 'What did he collect from remote villages to rescue literature?', options: ['Money', 'Palm-leaf manuscripts', 'Guns', 'None'], answer: 1 },
            { question: 'His primary focus was on which language?', options: ['Sanskrit', 'Tamil', 'French', 'None'], answer: 1 },
            { question: 'Was he involved in the collection of the Five Great Epics?', options: ['No', 'Yes', 'Never heard of it', 'None'], answer: 1 }
        ],
        ta: {
            name: 'உ. வே. சுவாமிநாத ஐயர்',
            popular: 'தமிழ் தாத்தா',
            born: '19 பிப்ரவரி 1855',
            died: '28 ஏப்ரல் 1942',
            role: 'பண்டைய தமிழ் இலக்கியங்களைப் பாதுகாத்த புகழ்பெற்ற தமிழ் அறிஞர் மற்றும் ஆராய்ச்சியாளர்.',
            points: ['தமிழுக்கு அவர் ஆற்றிய அரும்பணிக்காக "தமிழ் தாத்தா" என்று அன்போடு அழைக்கப்படுகிறார்.', 'ஐம்பெருங்காப்பியங்கள் உள்ளிட்ட சங்க கால இலக்கியங்களை மீட்டெடுத்துப் பதிப்பித்தார்.', 'தொலைதூர கிராமங்களில் இருந்து ஓலைச்சுவடிகளைச் சேகரிக்க அயராது உழைத்தார்.', 'தமிழ் ஆர்வம் மற்றும் அடையாள மறுமலர்ச்சியில் முக்கியப் பங்கு வகித்தார்.', 'ஆசிரியராகப் பணியாற்றிய அவர், இலக்கிய ஆராய்ச்சித் துறையில் பெரும் பங்களிப்பை விட்டுச் சென்றுள்ளார்.'],
            quiz: [
                { question: 'உ. வே. சுவாமிநாத ஐயர் பிரபலமாக எவ்வாறு அழைக்கப்படுகிறார்?', options: ['தமிழ் தாத்தா', 'தமிழ் தென்றல்', 'பாபுஜி', 'எதுவுமில்லை'], answer: 0 },
                { question: 'அவர் எந்த வகை இலக்கியங்களைப் பாதுகாத்த பெருமைக்குரியவர்?', options: ['அறிவியல் கதைகள்', 'பண்டைய சங்க கால இலக்கியம்', 'ஆங்கிலக் கவிதை', 'எதுவுமில்லை'], answer: 1 },
                { question: 'இலக்கியங்களை மீட்க அவர் கிராமங்களில் இருந்து எதைச் சேகரித்தார்?', options: ['பணம்', 'ஓலைச்சுவடிகள்', 'துப்பாக்கிகள்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவரது முக்கிய கவனம் எந்த மொழியின் மீதிருந்தது?', options: ['சமஸ்கிருதம்', 'தமிழ்', 'பிரஞ்சு', 'எதுவுமில்லை'], answer: 1 },
                { question: 'ஐம்பெருங்காப்பியங்களைச் சேகரிப்பதில் அவர் ஈடுபட்டாரா?', options: ['இல்லை', 'ஆம்', 'கேள்விப்பட்டதே இல்லை', 'எதுவுமில்லை'], answer: 1 }
            ]
        }
    },
    {
        id: 'veerabahu', name: 'A. P. C. Veerabahu', popular: 'Veerabahu',
        born: '1911', died: '1982',
        image: './images/Veerabahu.jpg', videoLink: 'https://youtube.com',
        role: 'A dedicated freedom fighter and industrialist from Tuticorin who contributed greatly to education.',
        points: ['Actively participated in the Quit India Movement.', 'A prominent leader of the Congress party in Southern Tamil Nadu.', 'Founded several educational institutions in Tuticorin.', 'Served as a Member of the Legislative Assembly and Member of Parliament.', 'Known for his philanthropy and contribution to the port city\'s development.'],
        quiz: [
            { question: 'A. P. C. Veerabahu was from which city?', options: ['Chennai', 'Tuticorin', 'Madurai', 'Trichy'], answer: 1 },
            { question: 'Which major movement did he participate in during 1942?', options: ['Salt Satyagraha', 'Quit India', 'Non-Cooperation', 'None'], answer: 1 },
            { question: 'He was a prominent leader of which political party?', options: ['Justice Party', 'Congress', 'Muslim League', 'None'], answer: 1 },
            { question: 'What did he found besides being a politician?', options: ['Educational institutions', 'Luxury hotels', 'Banks', 'None'], answer: 0 },
            { question: 'Did he serve in the Parliament?', options: ['No', 'Yes', 'Only for 1 month', 'None'], answer: 1 }
        ],
        ta: {
            name: 'ஏ. பி. சி. வீரபாகு',
            popular: 'வீரபாகு',
            born: '1911',
            died: '1982',
            role: 'தூத்துக்குடியைச் சேர்ந்த சுதந்திரப் போராட்ட வீரர் மற்றும் கல்விப்பணியில் சிறந்த விளங்கிய தொழிலதிபர்.',
            points: ['வெள்ளையனே வெளியேறு இயக்கத்தில் தீவிரமாகப் பங்கேற்றார்.', 'தென்தமிழ்நாட்டில் காங்கிரஸ் கட்சியின் முக்கியத் தலைவராக இருந்தார்.', 'தூத்துக்குடியில் பல கல்வி நிறுவனங்களை நிறுவினார்.', 'சட்டமன்ற உறுப்பினர் மற்றும் நாடாளுமன்ற உறுப்பினராகப் பணியாற்றினார்.', 'தனது கொடைத்தன்மை மற்றும் துறைமுக நகர வளர்ச்சிக்கு ஆற்றிய பங்கிற்காக அறியப்பட்டவர்.'],
            quiz: [
                { question: 'ஏ. பி. சி. வீரபாகு எந்த ஊரைச் சேர்ந்தவர்?', options: ['சென்னை', 'தூத்துக்குடி', 'மதுரை', 'திருச்சி'], answer: 1 },
                { question: '1942-ல் அவர் எந்த முக்கிய இயக்கத்தில் பங்கேற்றார்?', options: ['உப்பு சத்தியாகிரகம்', 'வெள்ளையனே வெளியேறு', 'ஒத்துழையாமை', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அவர் எந்த அரசியல் கட்சியின் முக்கியத் தலைவராக இருந்தார்?', options: ['நீதிக்கட்சி', 'காங்கிரஸ்', 'முஸ்லீம் லீக்', 'எதுவுமில்லை'], answer: 1 },
                { question: 'அரசியல் தவிர அவர் எதை நிறுவினார்?', options: ['கல்வி நிறுவனங்கள்', 'சொகுசு ஹோட்டல்கள்', 'வங்கிகள்', 'எதுவுமில்லை'], answer: 0 },
                { question: 'அவர் நாடாளுமன்றத்தில் பணியாற்றினாரா?', options: ['இல்லை', 'ஆம்', '1 மாதம் மட்டும்', 'எதுவுமில்லை'], answer: 1 }
            ]
        }

    }
].map(h => ({
    ...h,
    isCompleted: false,
    userAnswers: null,
    ta: h.ta || {
        name: h.name,
        popular: h.popular,
        born: h.born,
        died: h.died,
        role: h.role,
        points: h.points,
        quiz: h.quiz
    }
}));

// All 25 heroes - no placeholders needed
const allBaseHeroes = initialHeroes.map(h => {
    return {
        ...h,
        isCompleted: h.isCompleted || false,
        userAnswers: h.userAnswers || null,
        ta: h.ta || {
            name: h.name, popular: h.popular, born: h.born, died: h.died,
            role: h.role, points: h.points, quiz: h.quiz
        }
    };
});

/* Dynamic Grid Data loaded from Supabase or default */
let heroesData = [];

// Initialize data from Supabase
async function syncHeroesFromDB() {
    console.log("Syncing with Supabase...");
    const dbHeroes = await fetchHeroesFromDB();
    if (dbHeroes && dbHeroes.length > 0) {
        // Map database fields to our internal structure if needed
        heroesData = dbHeroes.map(h => ({
            ...h,
            id: h.slug || h.id, // use slug as primary visible id
            videoLink: h.video_link,
            isCompleted: h.is_completed,
            userAnswers: h.user_answers
        }));
    } else {
        // If DB is empty, use initial data
        heroesData = allBaseHeroes.slice(0, 150);
        console.warn("DB is empty. Using local backup.");
    }
    
    // Refresh UI for Home
    renderHome();
    
    // Refresh UI for Admin if on admin page
    if (typeof renderAdminTable === 'function') {
        renderAdminTable();
    }
    if (typeof updateStats === 'function') {
        updateStats();
    }
    
    // Resume local progress if available
    loadLocalProgress();
}

// Function to merge saved local quiz progress with Supabase data
function loadLocalProgress() {
    const saved = localStorage.getItem('unsungHeroesData');
    if (!saved) return;
    
    try {
        const localData = JSON.parse(saved);
        localData.forEach(localHero => {
            const heroIndex = heroesData.findIndex(h => h.id === localHero.id);
            if (heroIndex !== -1) {
                // Apply ONLY the completion state and answers
                heroesData[heroIndex].isCompleted = localHero.isCompleted || false;
                heroesData[heroIndex].userAnswers = localHero.userAnswers || null;
            }
        });
        // Re-render home to show checkmarks
        renderHome();
    } catch (e) {
        console.error("Local load error:", e);
    }
}



window.saveHeroesData = async function () {
    // Local backup
    localStorage.setItem('unsungHeroesData', JSON.stringify(heroesData));
};

// State keeping
let currentHeroIndex = null;
let currentQuestionIndex = 0;
let userAnswers = [];

// DOM Elements
const landingPage = document.getElementById('landing-page');
const detailScreen = document.getElementById('detail-screen');
const quizScreen = document.getElementById('quiz-screen');
const rewardScreen = document.getElementById('reward-screen');
const heroGrid = document.getElementById('hero-grid');
const detailContent = document.getElementById('detail-content');
const quizCardContainer = document.getElementById('quiz-card');
const progressBar = document.getElementById('quiz-progress');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let isInitialLoad = true;

function init() {
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }

    syncHeroesFromDB();
    window.addEventListener('hashchange', handleRouting);
    handleRouting();
}

function handleRouting() {
    const hash = window.location.hash.substring(1);

    if (!hash) {
        if (isInitialLoad) {
            goHome('home-section');
            // Hard snap to top on first load just in case
            setTimeout(() => window.scrollTo(0, 0), 10);
        } else {
            goHome('leaders-section');
        }
        isInitialLoad = false;
        return;
    }

    const index = heroesData.findIndex(h => h.id === hash);
    if (index !== -1) {
        selectHero(index, false); // false to avoid recursive hash set
    } else {
        goHome('leaders-section');
    }
    isInitialLoad = false;
}

let visibleProfilesCount = 30;

function renderHome() {
    if (!heroGrid) return;
    heroGrid.innerHTML = '';
    const visibleHeroes = heroesData.slice(0, visibleProfilesCount);
    visibleHeroes.forEach((hero, index) => {
        const heroDOM = document.createElement('div');
        heroDOM.className = 'hero-avatar';
        heroDOM.onclick = () => selectHero(index);

        const completedBadge = hero.isCompleted ? `<div class="completed-badge" style="position: absolute; top: -10px; right: 10px; background: #4CAF50; color: white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 16px; z-index: 10; box-shadow: 0 4px 8px rgba(0,0,0,0.25); border: 2px solid white; animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);"><i class="fa-solid fa-check"></i></div>` : '';

        heroDOM.innerHTML = `
            ${completedBadge}
            <div class="avatar-img-wrapper">
                <img src="${hero.image}" alt="${hero.name}" onerror="this.src='https://placehold.co/150x150/e0e0e0/gray?text=Image+Needed'">
            </div>
            <span>${hero.name}</span>
        `;
        heroGrid.appendChild(heroDOM);
    });

    if (visibleProfilesCount < heroesData.length) {
        const loadContainer = document.createElement('div');
        loadContainer.style.gridColumn = '1 / -1';
        loadContainer.style.display = 'flex';
        loadContainer.style.justifyContent = 'center';
        loadContainer.style.marginTop = '2rem';

        const loadBtn = document.createElement('button');
        loadBtn.id = 'load-more-btn';
        loadBtn.className = 'black-btn';
        loadBtn.innerText = 'Load More';
        loadBtn.onclick = () => {
            visibleProfilesCount += 30;
            renderHome();
        };

        loadContainer.appendChild(loadBtn);
        heroGrid.appendChild(loadContainer);
    }
}

function goHome(targetId = null) {
    if (window.location.hash) {
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }

    [detailScreen, quizScreen, rewardScreen].forEach(s => {
        if (s) {
            s.classList.remove('active');
            s.classList.add('hidden');
        }
    });

    if (landingPage) landingPage.style.display = 'block';
    setTimeout(() => {
        if (targetId) {
            const el = document.getElementById(targetId);
            if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Auto-close mobile menu if open
        const nav = document.getElementById('main-nav');
        if (nav) nav.classList.remove('active');
    }, 50);
}

window.toggleMobileMenu = function() {
    const nav = document.getElementById('main-nav');
    if (nav) nav.classList.toggle('active');
};

function switchScreen(hideScreen, showScreen) {
    if (!hideScreen || !showScreen) return;
    hideScreen.classList.remove('active');
    setTimeout(() => {
        hideScreen.classList.add('hidden');
        showScreen.classList.remove('hidden');
        void showScreen.offsetWidth;
        showScreen.classList.add('active');
    }, 300);
}

let currentLang = 'en';

window.toggleLanguage = function () {
    currentLang = document.getElementById('langToggle').checked ? 'ta' : 'en';
    selectHero(currentHeroIndex);
};

function selectHero(index, updateHash = true) {
    if (index === null) return;
    currentHeroIndex = index;
    const hero = heroesData[index];

    if (updateHash) {
        window.location.hash = hero.id;
    }

    const data = hero[currentLang] || hero;

    const isTa = currentLang === 'ta';

    // Translations for UI
    const lblProfile = isTa ? "சுயவிவரம்" : "Profile";
    const lblFullName = isTa ? "முழு பெயர்:" : "Full Name:";
    const lblPopularName = isTa ? "பிரபல பெயர்:" : "Popular Name:";
    const lblBorn = isTa ? "பிறந்த தேதி:" : "Born:";
    const lblDied = isTa ? "இறந்த தேதி:" : "Died:";
    const lblRole = isTa ? "அரசியல் பங்கு:" : "Political Role:";
    const lblDesc = isTa ? "விளக்கம்" : "Description";
    const lblVideo = isTa ? "வீடியோ" : "Video";
    const lblQuiz = isTa ? "வினாடி வினா" : "Quiz";
    const lblBack = isTa ? "பின்செல்" : "Back";

    const nameStr = data.name || hero.name;
    const popStr = data.popular || hero.popular;
    const bornStr = data.born || hero.born;
    const diedStr = data.died || hero.died;
    const roleStr = data.role || hero.role;
    const pnts = data.points || hero.points;

    let pointsHtml = pnts.map(p => `<li>${p}</li>`).join('');

    const quizBtnLabel = hero.isCompleted ? (isTa ? "முடிவுகளைக் காண்க" : "View Results") : lblQuiz;
    const quizAction = hero.isCompleted ? 'showReward()' : 'startQuiz()';

    detailContent.innerHTML = `
        <div class="profile-model-container">
            <div class="profile-model-top">
                <div class="profile-model-left">
                    <div class="profile-model-img-wrapper">
                        <img src="${hero.image}" alt="${nameStr}" class="profile-model-img" onerror="this.src='https://placehold.co/400x400/e0e0e0/gray?text=Image+Needed'">
                    </div>
                    <div class="profile-model-name-badge">${nameStr}</div>
                </div>
                <div class="profile-model-right">
                    <div class="lang-toggle-container">
                        <span class="lang-label">Eng</span>
                        <label class="switch">
                            <input type="checkbox" id="langToggle" onchange="toggleLanguage()" ${isTa ? 'checked' : ''}>
                            <span class="slider round"></span>
                        </label>
                        <span class="lang-label">தமிழ்</span>
                    </div>
                    <h3 class="profile-model-title" style="color: #0b3d4f;"><u><i>${lblProfile}</i></u></h3>
                    <p><strong>${lblFullName}</strong> ${nameStr}</p>
                    <p><strong>${lblPopularName}</strong> ${popStr}</p>
                    <p><strong>${lblBorn}</strong> ${bornStr}</p>
                    <p><strong>${lblDied}</strong> ${diedStr}</p>
                    <p><strong>${lblRole}</strong><br>${roleStr}</p>
                </div>
            </div>
            <div class="profile-model-bottom">
                <h3 class="profile-model-title" style="color: #000;"><u><i>${lblDesc}</i></u></h3>
                <ul class="profile-model-list">
                    ${pointsHtml}
                </ul>
            </div>
            <div class="profile-model-actions">
                <button class="pm-btn" onclick="window.open('${hero.videoLink}', '_blank')"><i>${lblVideo}</i></button>
                <button class="pm-btn" onclick="${quizAction}"><i>${quizBtnLabel}</i></button>
                <button class="pm-btn" onclick="goHome('leaders-section')"><i>${lblBack}</i></button>
            </div>
        </div>
    `;

    // Ensure the landing page is hidden and detail screen is shown
    landingPage.style.display = 'none';
    detailScreen.classList.remove('hidden');
    
    // Smooth transition
    if (!detailScreen.classList.contains('active')) {
        setTimeout(() => {
            detailScreen.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
    } else {
        // If already active (e.g. switching between heroes), just scroll up
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function backToDetail() { switchScreen(quizScreen, detailScreen); }

function startQuiz() {
    currentQuestionIndex = 0;
    const hero = heroesData[currentHeroIndex];
    const data = hero[currentLang] || hero;
    const quizArr = data.quiz || hero.quiz;
    userAnswers = new Array(quizArr.length).fill(null);
    renderQuestion();
    switchScreen(detailScreen, quizScreen);
}

function renderQuestion() {
    const hero = heroesData[currentHeroIndex];
    const data = hero[currentLang] || hero;
    const quizArr = data.quiz || hero.quiz;
    const questionData = quizArr[currentQuestionIndex];

    const isTa = currentLang === 'ta';
    const percent = ((currentQuestionIndex) / quizArr.length) * 100;
    progressBar.style.width = percent + '%';

    if (currentQuestionIndex === 0) prevBtn.classList.add('hidden');
    else prevBtn.classList.remove('hidden');

    const lblNext = isTa ? "அடுத்து" : "Next";
    const lblFinish = isTa ? "முடிக்க" : "Finish";
    const lblQuestion = isTa ? "கேள்வி" : "Question";
    const lblOf = isTa ? "/" : "of";

    if (currentQuestionIndex === quizArr.length - 1) nextBtn.innerText = lblFinish;
    else nextBtn.innerText = lblNext;

    prevBtn.innerText = isTa ? "முந்தைய" : "Previous";

    // Set quiz exit button text cleanly
    const backBtn = document.querySelector('.quiz-header .back-btn');
    if (backBtn) backBtn.innerText = isTa ? "← வெளியேறு" : "← Exit Quiz";

    let optionsHtml = questionData.options.map((opt, i) => {
        const isChecked = userAnswers[currentQuestionIndex] === i ? 'checked' : '';
        return `
            <label class="quiz-radio-label">
                <input type="radio" name="quiz-val" value="${i}" onchange="selectOption(${i})" ${isChecked}>
                <span>${opt}</span>
            </label>
        `;
    }).join('');

    quizCardContainer.innerHTML = `
        <h3>${lblQuestion} ${currentQuestionIndex + 1} ${lblOf} ${quizArr.length}<br><br>${questionData.question}</h3>
        <div class="options-grid">${optionsHtml}</div>
    `;

    quizCardContainer.style.animation = 'none';
    void quizCardContainer.offsetWidth;
    quizCardContainer.style.animation = 'slideIn 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
}

window.selectOption = function (optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    renderQuestion();
};

window.nextQuestion = function () {
    const isTa = currentLang === 'ta';
    if (userAnswers[currentQuestionIndex] === null) {
        alert(isTa ? "தயவுசெய்து ஒரு பதிலைத் தேர்ந்தெடுக்கவும்!" : "Please select an answer!");
        return;
    }
    const hero = heroesData[currentHeroIndex];
    const data = hero[currentLang] || hero;
    const quizArr = data.quiz || hero.quiz;

    if (currentQuestionIndex < quizArr.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        const hero = heroesData[currentHeroIndex];
        // Use ENGLISH quiz for answer checking (source of truth)
        const engQuiz = hero.quiz || quizArr;
        let score = 0;
        engQuiz.forEach((q, i) => {
            if (userAnswers[i] === q.answer) score++;
        });
        // Only mark completed (green tick) if they answer all questions correctly
        const reqScore = engQuiz.length;
        hero.isCompleted = (score >= reqScore);
        hero.userAnswers = [...userAnswers];
        saveHeroesData();
        renderHome(); // Update grid with checkmark
        showReward();
    }
};

window.prevQuestion = function () {
    if (currentQuestionIndex > 0) { currentQuestionIndex--; renderQuestion(); }
};

function showReward() {
    const isTa = currentLang === 'ta';
    const hero = heroesData[currentHeroIndex];
    const data = hero[currentLang] || hero;
    const quizArr = data.quiz || hero.quiz;
    const finalAnswers = hero.userAnswers || userAnswers;

    // Reset animation CSS classes
    const container = document.getElementById('prize-anim-container');
    if (container) container.classList.remove('opened');

    const prizeText = document.getElementById('prize-text');
    if (prizeText) prizeText.classList.add('hidden');

    const rewardTitleElem = document.querySelector('.reward-title');
    let score = 0;
    quizArr.forEach((q, i) => {
        if (finalAnswers[i] === q.answer) score++;
    });

    const reqScore = quizArr.length;
    const isPerfect = score >= reqScore;

    if (container) {
        if (isPerfect) {
            container.style.display = 'flex';
        } else {
            container.style.display = 'none';
        }
    }

    if (rewardTitleElem) {
        if (isPerfect) {
            rewardTitleElem.innerHTML = `${isTa ? 'மிக நன்று!' : 'Excellent Job!'} <span style="color: #4CAF50; margin-left:10px;"><i class="fa-solid fa-circle-check"></i></span>`;
            const nextP = rewardTitleElem.nextElementSibling;
            if (nextP && nextP.tagName.toLowerCase() === 'p') {
                nextP.innerText = isTa ? `தேவையான ${reqScore} கேள்விகளுக்கு சரியாக பதிலளித்தீர்கள். திறக்கப்பட்டது ஒரு பரிசு!` : `You answered ${score} out of ${quizArr.length} correctly! You have unlocked a reward.`;
            }
        } else {
            rewardTitleElem.innerHTML = `${isTa ? 'மீண்டும் முயற்சி செய்!' : 'Please Try Again!'} <span style="color: #ff5252; margin-left:10px;"><i class="fa-solid fa-circle-xmark"></i></span>`;
            const nextP = rewardTitleElem.nextElementSibling;
            if (nextP && nextP.tagName.toLowerCase() === 'p') {
                nextP.innerText = isTa ? `குறைந்தது ${reqScore} கேள்விகளுக்காவது சரியாக பதிலளிக்க வேண்டும்.` : `Answer at least ${reqScore} questions correctly to unlock the special reward.`;
            }
        }
    }

    // Results Summary
    let resultsHtml = `<div class="quiz-results-summary">
        <h3>${isTa ? 'வினாடி வினா முடிவுகள்' : 'Quiz Results'}</h3>
    `;

    quizArr.forEach((q, i) => {
        const uIdx = finalAnswers[i];
        const isCorrect = uIdx === q.answer;

        resultsHtml += `
            <div class="result-item">
                <p class="result-q">${i + 1}. ${q.question}</p>
                <div class="result-ans ${isCorrect ? 'correct' : 'wrong'}">
                    <span>${isTa ? 'உங்கள் பதில்' : 'Your Answer'}: ${q.options[uIdx] || (isTa ? 'பதிலளிக்கவில்லை' : 'Not Answered')}</span>
                    <span>${isCorrect ? '✅' : '❌'}</span>
                </div>
                ${!isCorrect ? `<div class="result-correct-val"><b>${isTa ? 'சரியான பதில்' : 'Correct Answer'}:</b> ${q.options[q.answer]}</div>` : ''}
            </div>
        `;
    });

    resultsHtml += `<div class="result-score">${isTa ? 'மதிப்பெண்' : 'Score'}: ${score} / ${quizArr.length}</div></div>`;

    const rewardContainer = document.querySelector('.reward-container');
    const existingSummary = rewardContainer.querySelector('.quiz-results-summary');
    if (existingSummary) existingSummary.remove();

    const playAgainBtn = rewardContainer.querySelector('.black-btn');
    playAgainBtn.insertAdjacentHTML('beforebegin', resultsHtml);

    const btn = document.querySelector('#reward-screen .black-btn');
    if (btn) {
        btn.innerText = isTa ? "சுயவிவரத்திற்கு திரும்பு" : "Back to Profile";
        btn.onclick = function () {
            switchScreen(rewardScreen, detailScreen);
            selectHero(currentHeroIndex); // Refresh detail view to show "View Results"
        };
    }

    progressBar.style.width = '100%';

    // If we're coming from quiz, switch screens. If just viewing results, it might already be active.
    if (quizScreen.classList.contains('active')) {
        setTimeout(() => {
            switchScreen(quizScreen, rewardScreen);
            setTimeout(() => { window.openGift(); }, 600);
        }, 500);
    } else {
        // Just show it (if viewing results from profile)
        switchScreen(detailScreen, rewardScreen);
        // If already completed, maybe auto-open gift or show it opened
        if (hero.isCompleted) {
            setTimeout(() => { window.openGift(); }, 300);
        }
        // Check if all 25 leaders are completed
        setTimeout(() => { checkAllLeadersCompleted(); }, 1500);
    }
}

window.openGift = function () {
    const isTa = currentLang === 'ta';

    const container = document.getElementById('prize-anim-container');
    if (!container || container.classList.contains('opened')) return; // Avoid double clicking

    container.classList.add('opened'); // CSS pops the bear OUT of the box

    // Animate the text smoothly 0.8s later to sync with bear reveal
    setTimeout(() => {
        const prizeText = document.getElementById('prize-text');
        if (prizeText) {
            prizeText.innerText = isTa ? "உங்களுக்கு ஒரு டெடி பியர் கிடைத்துள்ளது!" : "You got a Teddy Bear!";
            prizeText.classList.remove('hidden');
        }
    }, 600);

    if (typeof confetti !== "undefined") {
        var duration = 3 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };
        function randomInRange(min, max) { return Math.random() * (max - min) + min; }
        var interval = setInterval(function () {
            var timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) { return clearInterval(interval); }
            var particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }
}

// --- GRAND TEDDY BEAR CELEBRATION (ALL 150 LEADERS COMPLETED) ---
function checkAllLeadersCompleted() {
    // Only check first 150 heroes
    const totalLeaders = Math.min(heroesData.length, 150);
    const completedCount = heroesData.slice(0, totalLeaders).filter(h => h.isCompleted).length;

    if (completedCount === totalLeaders && totalLeaders >= 150) {
        showGrandTeddyBearCelebration();
    }
}

function showGrandTeddyBearCelebration() {
    // Prevent showing multiple times in same session
    if (window._grandCelebrationShown) return;
    window._grandCelebrationShown = true;

    // Create the grand celebration overlay
    const overlay = document.createElement('div');
    overlay.id = 'grand-celebration-overlay';
    overlay.innerHTML = `
        <div class="grand-celebration-content">
            <div class="grand-stars">⭐🌟⭐🌟⭐</div>
            <h1 class="grand-title">🎉 Congratulations! 🎉</h1>
            <h2 class="grand-subtitle">You've Mastered All 150 Leaders!</h2>
            <div class="grand-teddy-container">
                <div class="grand-teddy">🧸</div>
                <div class="grand-glow"></div>
            </div>
            <h3 class="grand-prize-text">🏆 You Won The Grand Teddy Bear! 🏆</h3>
            <p class="grand-desc">You answered every single question correctly across all 150 freedom fighters. You are a true history champion!</p>
            <div class="grand-stats">
                <div class="grand-stat"><span class="stat-number">150</span><span class="stat-label">Leaders</span></div>
                <div class="grand-stat"><span class="stat-number">750</span><span class="stat-label">Questions</span></div>
                <div class="grand-stat"><span class="stat-number">100%</span><span class="stat-label">Perfect</span></div>
            </div>
            <button class="grand-close-btn" onclick="closeGrandCelebration()">🎊 Continue Exploring 🎊</button>
        </div>
    `;
    document.body.appendChild(overlay);

    // Trigger animation
    requestAnimationFrame(() => {
        overlay.classList.add('active');
    });

    // Massive confetti
    if (typeof confetti !== "undefined") {
        var duration = 8 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 45, spread: 360, ticks: 100, zIndex: 100001 };
        function randomInRange(min, max) { return Math.random() * (max - min) + min; }
        var interval = setInterval(function () {
            var timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) { return clearInterval(interval); }
            var particleCount = 80 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount: 30, origin: { x: 0.5, y: 0 }, gravity: 1.2, scalar: 1.5 }));
        }, 200);
    }
}

window.closeGrandCelebration = function () {
    const overlay = document.getElementById('grand-celebration-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 500);
    }
};

init();

// --- ADMIN LOGIN & DASHBOARD LOGIC ---
const adminLoginModal = document.getElementById('admin-login-modal');
const adminDashboardScreen = document.getElementById('admin-dashboard-screen');

window.openAdminLogin = async function () {
    const session = await getSession();
    if (session) {
        window.location.href = 'admin.html';
        return;
    }

    if (adminLoginModal) {
        adminLoginModal.classList.remove('hidden');
        const err = document.getElementById('login-error');
        if (err) err.classList.add('hidden');

        const u = document.getElementById('admin-user');
        const p = document.getElementById('admin-pass');

        // Auto-fill from localStorage if available
        const savedU = localStorage.getItem('admin_saved_user');
        const savedP = localStorage.getItem('admin_saved_pass');

        if (u) u.value = savedU || '';
        if (p) p.value = savedP || '';
    }
};

window.closeAdminLogin = function () {
    if (adminLoginModal) adminLoginModal.classList.add('hidden');
};

window.handleAdminLoginGoogle = async function () {
    const { error } = await signInWithGoogle();
    if (error) {
        const err = document.getElementById('login-error');
        if (err) {
            err.innerText = error.message;
            err.classList.remove('hidden');
        }
    }
};

window.handleAdminLogin = async function (e) {
    e.preventDefault();
    const u = document.getElementById('admin-user').value;
    const p = document.getElementById('admin-pass').value;

    const { data, error } = await loginAdmin(u, p);

    if (!error) {
        // Save email for next time
        localStorage.setItem('admin_saved_user', u);
        
        closeAdminLogin();
        enterDashboard();
    } else {
        const err = document.getElementById('login-error');
        if (err) {
            err.innerText = error.message;
            err.classList.remove('hidden');
        }
    }
};

function enterDashboard() {
    window.location.href = 'admin.html';
}

window.adminLogout = function () {
    if (adminDashboardScreen) {
        adminDashboardScreen.classList.remove('active');
        setTimeout(() => {
            adminDashboardScreen.classList.add('hidden');
            if (typeof goHome === 'function') {
                goHome('home-section');
            } else if (landingPage) {
                landingPage.style.display = 'block';
            }
        }, 300);
    }
};

// --- ADMIN DASHBOARD PROFILE MANAGEMENT ---

window.handleImageUpload = async function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const preview = document.getElementById('pm-image-preview');
    const previewContainer = document.getElementById('image-preview-container');
    const urlInput = document.getElementById('pm-image-url');
    
    // Show local preview immediately
    preview.src = URL.createObjectURL(file);
    previewContainer.style.display = 'block';

    // Upload to Supabase Storage
    const publicUrl = await uploadHeroImage(file, `hero_${Date.now()}_${file.name}`);
    if (publicUrl) {
        urlInput.value = publicUrl;
        alert("Image uploaded to cloud!");
    } else {
        alert("Image upload failed. Check Supabase storage permissions.");
    }
};

window.renderAdminTable = function () {
    const tbody = document.getElementById('admin-table-body');
    if (!tbody) return;

    const countEl = document.getElementById('admin-active-count');
    if (countEl) countEl.innerText = heroesData.length;

    tbody.innerHTML = '';
    heroesData.forEach((hero, i) => {
        const tr = document.createElement('tr');
        tr.style.borderBottom = "1px solid #eee";
        tr.innerHTML = `
            <td style="padding:1rem;">
                <img src="${hero.image}" onerror="this.src='https://placehold.co/50x50/e0e0e0/gray?text=N/A'" style="width:50px; height:50px; border-radius:50%; object-fit:cover; border: 2px solid #ddd;">
            </td>
            <td style="padding:1rem; font-weight:600; color:#333; font-size:1.1rem;">${hero.name}</td>
            <td style="padding:1rem; color:#666;">${hero.popular}</td>
            <td style="padding:1rem; text-align:right;">
                <button onclick="openEditProfileModal(${i})" style="background:#3498db; color:white; border:none; padding:8px 12px; border-radius:4px; cursor:pointer; margin-right:5px; font-weight:bold;"><i class="fa-solid fa-pen"></i> Edit</button>
                <button onclick="deleteProfile(${i})" style="background:#e74c3c; color:white; border:none; padding:8px 12px; border-radius:4px; cursor:pointer; font-weight:bold;"><i class="fa-solid fa-trash"></i> Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
};

window.addQuizQuestionUI = function (qData = null) {
    const container = document.getElementById('quiz-questions-container');
    const qCount = container.children.length;

    const qDiv = document.createElement('div');
    qDiv.className = 'quiz-q-item';
    qDiv.style.background = 'white';
    qDiv.style.padding = '1.2rem';
    qDiv.style.borderRadius = '8px';
    qDiv.style.marginBottom = '1.5rem';
    qDiv.style.border = '1px solid #ddd';
    qDiv.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';

    qDiv.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:1rem; border-bottom:1px solid #eee; padding-bottom:0.5rem;">
            <b style="color:#0b3d4f;">Question ${qCount + 1}</b>
            <button type="button" onclick="this.parentElement.parentElement.remove()" style="background:none; border:none; color:#e74c3c; cursor:pointer; font-weight:bold; font-size:0.9rem;">Remove Question</button>
        </div>
        
        <div style="margin-bottom:1rem;">
            <label style="font-weight:600; font-size:0.85rem; display:block; margin-bottom:0.3rem;">Question (English)</label>
            <input type="text" class="q-text-en" placeholder="English Question" style="width:100%; padding:0.6rem; border:1px solid #ddd; border-radius:4px;" required>
        </div>
        
        <div style="margin-bottom:1rem;">
            <label style="font-weight:600; font-size:0.85rem; display:block; margin-bottom:0.3rem;">Question (Tamil - தமிழ்)</label>
            <input type="text" class="q-text-ta" placeholder="தமிழ் கேள்வி" style="width:100%; padding:0.6rem; border:1px solid #ddd; border-radius:4px;">
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1rem;">
            <div>
                <label style="font-weight:600; font-size:0.85rem; display:block; margin-bottom:0.3rem;">Options (English)</label>
                <input type="text" class="q-opt-en" placeholder="Opt 1" style="width:100%; padding:0.5rem; border:1px solid #ddd; border-radius:4px; margin-bottom:0.3rem;">
                <input type="text" class="q-opt-en" placeholder="Opt 2" style="width:100%; padding:0.5rem; border:1px solid #ddd; border-radius:4px; margin-bottom:0.3rem;">
                <input type="text" class="q-opt-en" placeholder="Opt 3" style="width:100%; padding:0.5rem; border:1px solid #ddd; border-radius:4px; margin-bottom:0.3rem;">
                <input type="text" class="q-opt-en" placeholder="Opt 4" style="width:100%; padding:0.5rem; border:1px solid #ddd; border-radius:4px;">
            </div>
            <div>
                <label style="font-weight:600; font-size:0.85rem; display:block; margin-bottom:0.3rem;">Options (Tamil - தமிழ்)</label>
                <input type="text" class="q-opt-ta" placeholder="விருப்பம் 1" style="width:100%; padding:0.5rem; border:1px solid #ddd; border-radius:4px; margin-bottom:0.3rem;">
                <input type="text" class="q-opt-ta" placeholder="விருப்பம் 2" style="width:100%; padding:0.5rem; border:1px solid #ddd; border-radius:4px; margin-bottom:0.3rem;">
                <input type="text" class="q-opt-ta" placeholder="விருப்பம் 3" style="width:100%; padding:0.5rem; border:1px solid #ddd; border-radius:4px; margin-bottom:0.3rem;">
                <input type="text" class="q-opt-ta" placeholder="விருப்பம் 4" style="width:100%; padding:0.5rem; border:1px solid #ddd; border-radius:4px;">
            </div>
        </div>

        <div style="background:#f9f9f9; padding:0.8rem; border-radius:6px;">
            <label style="font-weight:600; font-size:0.85rem;">Correct Answer Index (0-3): </label>
            <select class="q-ans" style="padding:0.4rem; border:1px solid #ddd; border-radius:4px;">
                <option value="0">Option 1</option>
                <option value="1">Option 2</option>
                <option value="2">Option 3</option>
                <option value="3">Option 4</option>
            </select>
        </div>
    `;

    container.appendChild(qDiv);

    if (qData) {
        qDiv.querySelector('.q-text-en').value = qData.question || '';
        const optsEn = qDiv.querySelectorAll('.q-opt-en');
        if (qData.options) {
            qData.options.forEach((opt, idx) => { if (optsEn[idx]) optsEn[idx].value = opt; });
        }
        qDiv.querySelector('.q-ans').value = qData.answer || 0;

        // Try to handle Tamil data if it exists in a parallel quiz structure or custom mapping
        // We'll assume the hero.ta.quiz matches indices
        // Logic will be handled in openEditProfileModal
    }
};

window.openProfileModal = function () {
    const form = document.getElementById('profile-form');
    if (form) form.reset();
    document.getElementById('pm-index').value = '-1';
    document.getElementById('profile-modal-title').innerText = "Add New Profile";
    document.getElementById('image-preview-container').style.display = 'none';
    document.getElementById('quiz-questions-container').innerHTML = '';

    addQuizQuestionUI();
    document.getElementById('profile-modal').classList.remove('hidden');
};

window.openEditProfileModal = function (index) {
    const hero = heroesData[index];
    document.getElementById('pm-index').value = index;
    document.getElementById('profile-modal-title').innerText = "Edit Profile Info";

    // English
    document.getElementById('pm-id').value = hero.id || '';
    document.getElementById('pm-name').value = hero.name || '';
    document.getElementById('pm-popular').value = hero.popular || '';
    document.getElementById('pm-image-url').value = hero.image || '';
    document.getElementById('pm-video').value = hero.videoLink || '';
    document.getElementById('pm-born').value = hero.born || '';
    document.getElementById('pm-died').value = hero.died || '';
    document.getElementById('pm-role').value = hero.role || '';
    document.getElementById('pm-points').value = (hero.points || []).join('\n');

    if (hero.image) {
        document.getElementById('pm-image-preview').src = hero.image;
        document.getElementById('image-preview-container').style.display = 'block';
    } else {
        document.getElementById('image-preview-container').style.display = 'none';
    }

    // Tamil
    const ta = hero.ta || {};
    document.getElementById('pm-ta-name').value = ta.name || '';
    document.getElementById('pm-ta-popular').value = ta.popular || '';
    document.getElementById('pm-ta-born').value = ta.born || '';
    document.getElementById('pm-ta-died').value = ta.died || '';
    document.getElementById('pm-ta-role').value = ta.role || '';
    document.getElementById('pm-ta-points').value = (ta.points || []).join('\n');

    // Quiz
    const quizContainer = document.getElementById('quiz-questions-container');
    quizContainer.innerHTML = '';
    if (hero.quiz && hero.quiz.length > 0) {
        hero.quiz.forEach((q, i) => {
            addQuizQuestionUI(q);
            const qDivs = quizContainer.querySelectorAll('.quiz-q-item');
            const currentQDiv = qDivs[qDivs.length - 1];

            // Populate Tamil Question/Options from hero.ta.quiz
            if (ta.quiz && ta.quiz[i]) {
                currentQDiv.querySelector('.q-text-ta').value = ta.quiz[i].question || '';
                const optsTa = currentQDiv.querySelectorAll('.q-opt-ta');
                if (ta.quiz[i].options) {
                    ta.quiz[i].options.forEach((opt, idx) => { if (optsTa[idx]) optsTa[idx].value = opt; });
                }
            }
        });
    } else {
        addQuizQuestionUI();
    }

    document.getElementById('profile-modal').classList.remove('hidden');
};

window.closeProfileModal = function () {
    document.getElementById('profile-modal').classList.add('hidden');
};

window.saveProfile = async function (e) {
    if (e) e.preventDefault();
    const index = parseInt(document.getElementById('pm-index').value);

    // Gather Quiz Data
    const quizItemsEn = [];
    const quizItemsTa = [];

    document.querySelectorAll('.quiz-q-item').forEach(item => {
        const answer = parseInt(item.querySelector('.q-ans').value);

        // English
        const questionEn = item.querySelector('.q-text-en').value;
        const optionsEn = Array.from(item.querySelectorAll('.q-opt-en')).map(opt => opt.value);
        quizItemsEn.push({ question: questionEn, options: optionsEn, answer: answer });

        // Tamil
        const questionTa = item.querySelector('.q-text-ta').value;
        const optionsTa = Array.from(item.querySelectorAll('.q-opt-ta')).map(opt => opt.value);
        quizItemsTa.push({ question: questionTa, options: optionsTa, answer: answer });
    });

    const heroObj = {
        id: document.getElementById('pm-id').value,
        name: document.getElementById('pm-name').value,
        popular: document.getElementById('pm-popular').value,
        image: document.getElementById('pm-image-url').value,
        videoLink: document.getElementById('pm-video').value,
        born: document.getElementById('pm-born').value,
        died: document.getElementById('pm-died').value,
        role: document.getElementById('pm-role').value,
        points: document.getElementById('pm-points').value.split('\n').filter(p => p.trim() !== ''),
        quiz: quizItemsEn,
        ta: {
            name: document.getElementById('pm-ta-name').value,
            popular: document.getElementById('pm-ta-popular').value,
            born: document.getElementById('pm-ta-born').value,
            died: document.getElementById('pm-ta-died').value,
            role: document.getElementById('pm-ta-role').value,
            points: document.getElementById('pm-ta-points').value.split('\n').filter(p => p.trim() !== ''),
            quiz: quizItemsTa
        }
    };

    // Map heroObj to DB schema format
    const dbHeroObj = {
        slug: heroObj.id,
        name: heroObj.name,
        popular: heroObj.popular,
        image: heroObj.image,
        video_link: heroObj.videoLink,
        born: heroObj.born,
        died: heroObj.died,
        role: heroObj.role,
        points: heroObj.points,
        quiz: heroObj.quiz,
        ta: heroObj.ta
    };

    if (index === -1) {
        const { data, error } = await supabase
            .from('heroes')
            .insert([dbHeroObj])
            .select();
        if (error) return alert("Save Error: " + error.message);
    } else {
        const { error } = await supabase
            .from('heroes')
            .update(dbHeroObj)
            .eq('slug', heroObj.id);
        if (error) return alert("Update Error: " + error.message);
    }

    await syncHeroesFromDB();
    closeProfileModal();
    alert("Saved to Database Successfully!");
};

window.deleteProfile = async function (index) {
    const hero = heroesData[index];
    if (confirm(`WARNING: Are you sure you want to delete ${hero.name}?`)) {
        const { error } = await supabase
            .from('heroes')
            .delete()
            .eq('slug', hero.id);
            
        if (error) return alert("Delete Error: " + error.message);
        
        await syncHeroesFromDB();
        if (typeof renderAdminTable === 'function') renderAdminTable();
    }
};

