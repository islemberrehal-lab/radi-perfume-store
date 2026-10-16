export const PRODUCTS = [
  {
    id: "baccarat-rouge-540",
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    price: 46000,
    oldPrice: 54000,
    discount: "-15%",
    size: 70,
    sizes: [
      { ml: 35, price: 28000 },
      { ml: 70, price: 46000 },
      { ml: 200, price: 89000 }
    ],
    gender: "Unisex",
    category: "Unisex",
    rating: 4.95,
    reviewsCount: 312,
    concentration: "Extrait de Parfum",
    batchCode: "MFK-2024-FR",
    badge: "Best Seller",
    isBestSeller: true,
    isNew: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80"
    ],
    notes: {
      top: ["Jasmin Grandiflorum d'Égypte", "Safran d'Iran"],
      heart: ["Ambre Gris Chaud", "Cèdre de Virginie"],
      base: ["Accord Boisé et Musqué", "Sucre Brûlé Précieux"]
    },
    description: "Une alchimie poétique où les notes aériennes du jasmin et l'éclat du safran transportent les facettes minérales de l'ambre gris et les tonalités boisées d'un cèdre fraîchement coupé.",
    descriptionEn: "A luminous and sophisticated poetic breeze that caresses the skin like an amber, floral and woody breath with saffron and cedar.",
    descriptionAr: "كيمياء شعرية راقية تجمع بين نفحات الياسمين الساحرة وبريق الزعفران الإيراني، تمتزج بأناقة مع العنبر الرمادي وأخشاب الأرز العطرية."
  },
  {
    id: "creed-aventus",
    name: "Aventus",
    brand: "Creed",
    price: 49500,
    oldPrice: 58000,
    discount: "-15%",
    size: 100,
    sizes: [
      { ml: 50, price: 34000 },
      { ml: 100, price: 49500 }
    ],
    gender: "Men",
    category: "Men",
    rating: 4.9,
    reviewsCount: 428,
    concentration: "Eau de Parfum",
    batchCode: "CRD-AV-100",
    badge: "Iconique",
    isBestSeller: true,
    isNew: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80"
    ],
    notes: {
      top: ["Ananas Noir", "Bergamote d'Italie", "Pomme Croquante"],
      heart: ["Bouleau Fumé", "Patchouli", "Jasmin du Maroc"],
      base: ["Musc Pur", "Mousse de Chêne", "Ambre Gris"]
    },
    description: "Inspiré par la vie dramatique d'un empereur historique, célébrant la puissance, la réussite et le courage. Une signature masculine boisée et fruitée d'une tenue légendaire.",
    descriptionEn: "The sensual, audacious and contemporary scent combines head notes of lemon, pink pepper and Italian bergamot with dark pineapple.",
    descriptionAr: "عطر القوة والانتصار المستوحى من عظمة الإمبراطور، مزيج فريد من الأناناس المدخن والبرغموت الإيطالي وخشب البتولا الأسطوري."
  },
  {
    id: "sauvage-elixir",
    name: "Sauvage Elixir",
    brand: "Dior",
    price: 32500,
    oldPrice: 39000,
    discount: "-17%",
    size: 60,
    sizes: [
      { ml: 60, price: 32500 },
      { ml: 100, price: 45000 }
    ],
    gender: "Men",
    category: "Men",
    rating: 4.88,
    reviewsCount: 265,
    concentration: "Elixir Pur",
    batchCode: "CD-SE-24",
    badge: "-20%",
    isBestSeller: true,
    isNew: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1583445013765-46c20c4a6772?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583445013765-46c20c4a6772?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80"
    ],
    notes: {
      top: ["Cardamome Sauvage", "Noix de Muscade", "Cannelle"],
      heart: ["Lavande AOP Nyons Surdosée", "Réglisse"],
      base: ["Bois de Santal Précieux", "Ambre", "Patchouli"]
    },
    description: "Un parfum extraordinairement concentré, infusé de la fraîcheur emblématique de Sauvage avec un cœur d'épices enivrant et une essence de lavande sur mesure.",
    descriptionEn: "An extraordinarily concentrated fragrance steeped in the iconic freshness of Sauvage with an intoxicating heart of spices.",
    descriptionAr: "إكسير فائق التركيز يفيض بنضارة سوفاج الأيقونية مع قلب من التوابل الدافئة ونفحات اللافندر النادر وخشب الصندل الفاخر."
  },
  {
    id: "delina-exclusif",
    name: "Delina Exclusif",
    brand: "Parfums de Marly",
    price: 43000,
    oldPrice: 51000,
    discount: "-16%",
    size: 75,
    sizes: [
      { ml: 75, price: 43000 }
    ],
    gender: "Women",
    category: "Women",
    rating: 4.97,
    reviewsCount: 198,
    concentration: "Parfum Royal",
    batchCode: "PDM-DEL-EX",
    badge: "Coup de Cœur",
    isBestSeller: true,
    isNew: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80"
    ],
    notes: {
      top: ["Litchi Impérial", "Poire Sucrée", "Bergamote"],
      heart: ["Rose Turque Damascena", "Encens Sacré", "Oud Subtil"],
      base: ["Vanille Bourbon", "Ambre Doux", "Notes Boisées"]
    },
    description: "Une somptueuse composition orientale florale incarnant la sensualité royale. La rose turque est sublimée par un voile mystique d'encens et de vanille veloutée.",
    descriptionEn: "A sumptuous oriental floral composition encapsulating royal opulence. Turkish rose wrapped in a veil of incense and amber.",
    descriptionAr: "تحفة زهرية شرقية تجسد الأنوثة الملكية، بعبير الورد التركي الدمشقي ولمسات البخور الفاخر والفانيليا البوربون الساحرة."
  },
  {
    id: "tobacco-vanille",
    name: "Tobacco Vanille",
    brand: "Tom Ford",
    price: 44000,
    oldPrice: 52000,
    discount: "-15%",
    size: 100,
    sizes: [
      { ml: 50, price: 31000 },
      { ml: 100, price: 44000 }
    ],
    gender: "Unisex",
    category: "Unisex",
    rating: 4.92,
    reviewsCount: 340,
    concentration: "Eau de Parfum",
    batchCode: "TF-TV-2024",
    badge: "Rare Batch",
    isBestSeller: true,
    isNew: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80"
    ],
    notes: {
      top: ["Feuille de Tabac Brun", "Notes Épicées Rares"],
      heart: ["Fève Tonka", "Fleur de Tabac", "Vanille Onctueuse", "Cacao"],
      base: ["Accord Fruits Secs", "Sève de Bois Nobles"]
    },
    description: "L'opulence d'un club de gentlemen londonien réinventé. Un parfum chaleureux et magnétique aux feuilles de tabac infusées de gousses de vanille et de fèves tonka.",
    descriptionEn: "Opulent, warm and iconic, Tom Ford's Tobacco Vanille is reminiscent of an English gentleman's club with rich spices and vanilla.",
    descriptionAr: "فخامة النوادي الإنجليزية العريقة بنفحات أوراق التبغ الفاخرة الممزوجة بحبوب الفانيليا الكريمية والكاكاو والتوابل الدافئة."
  },
  {
    id: "bleu-de-chanel-parfum",
    name: "Bleu de Chanel",
    brand: "Chanel",
    price: 29500,
    oldPrice: 35000,
    discount: "-16%",
    size: 100,
    sizes: [
      { ml: 50, price: 21500 },
      { ml: 100, price: 29500 },
      { ml: 150, price: 39000 }
    ],
    gender: "Men",
    category: "Men",
    rating: 4.89,
    reviewsCount: 512,
    concentration: "Parfum Pur",
    batchCode: "CH-BC-PARF",
    badge: "Intemporel",
    isBestSeller: true,
    isNew: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80"
    ],
    notes: {
      top: ["Zeste de Citron", "Bergamote", "Menthe Fraîche"],
      heart: ["Lavande Aromatique", "Géranium", "Ananas"],
      base: ["Bois de Santal de Nouvelle-Calédonie", "Cèdre", "Ambre"]
    },
    description: "L'éloge de la liberté masculine dans un aromatique boisé au sillage captivant. Un départ frais suivi d'un accord majestueux de bois de santal calédonien.",
    descriptionEn: "An aromatic woody fragrance with captivating trail. A tribute to masculine freedom powered by New Caledonian sandalwood.",
    descriptionAr: "قصيدة الحرية والأناقة الرجالية، عبير أروماتك خشبي آسر يجمع بين انتعاش الحمضيات وعمق خشب الصندل الكاليدوني النقي."
  },
  {
    id: "libre-le-parfum",
    name: "Libre Le Parfum",
    brand: "Yves Saint Laurent",
    price: 28500,
    oldPrice: 34000,
    discount: "-16%",
    size: 90,
    sizes: [
      { ml: 50, price: 21000 },
      { ml: 90, price: 28500 }
    ],
    gender: "Women",
    category: "Women",
    rating: 4.91,
    reviewsCount: 289,
    concentration: "Le Parfum",
    batchCode: "YSL-LBR-24",
    badge: "-20%",
    isBestSeller: true,
    isNew: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80"
    ],
    notes: {
      top: ["Gingembre Épicé", "Safran de l'Ourika", "Mandarine"],
      heart: ["Fleur d'Oranger du Maroc", "Lavande Diva de France"],
      base: ["Vanille Bourbon de Madagascar", "Miel Doré", "Vétiver"]
    },
    description: "L'intensité incandescente d'une fleur d'oranger embrasée par un accord safran exclusif des jardins communautaires de l'Ourika d'YSL.",
    descriptionEn: "The most intense interpretation of Libre, enriched with spicy ginger and saffron accords from the YSL Ourika community gardens.",
    descriptionAr: "العطر الأكثر جرأة وجاذبية، ينبض بأزهار البرتقال المغربية الفواحة مع نفحات الزعفران وعسل النحل والفانيليا الدافئة."
  },
  {
    id: "angels-share",
    name: "Angels' Share",
    brand: "Kilian Paris",
    price: 38000,
    oldPrice: 45000,
    discount: "-15%",
    size: 50,
    sizes: [
      { ml: 50, price: 38000 },
      { ml: 100, price: 62000 }
    ],
    gender: "Unisex",
    category: "Unisex",
    rating: 4.96,
    reviewsCount: 215,
    concentration: "Eau de Parfum",
    batchCode: "KLN-ANG-50",
    badge: "Niche Rare",
    isBestSeller: true,
    isNew: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80"
    ],
    notes: {
      top: ["Essence de Cognac Extra"],
      heart: ["Cannelle Sauvage", "Absolue de Fève Tonka", "Chêne"],
      base: ["Praline Gourmande", "Vanille Douce", "Bois de Santal"]
    },
    description: "Inspiré de l'héritage de la famille Hennessy dans l'art des spiritueux d'exception. Un parfum ambré enivrant sculpté dans un flacon rappelant le cristal taillé.",
    descriptionEn: "Inspired by the Hennessy heritage in exceptional cognacs, this amber gourmand scent is housed in an art-deco crystal flacon.",
    descriptionAr: "مستوحى من أسرار صناعة الكريستال والكونياك العتيق، نفحات لذيذة من القرفة وخشب البلوط والبرالين والفانيليا الفاخرة."
  },
  {
    id: "oud-wood",
    name: "Oud Wood",
    brand: "Tom Ford",
    price: 45000,
    oldPrice: 53000,
    discount: "-15%",
    size: 100,
    sizes: [
      { ml: 50, price: 32000 },
      { ml: 100, price: 45000 }
    ],
    gender: "Unisex",
    category: "Unisex",
    rating: 4.87,
    reviewsCount: 304,
    concentration: "Private Blend",
    batchCode: "TF-OW-100",
    badge: "Exclusivité",
    isBestSeller: false,
    isNew: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80"
    ],
    notes: {
      top: ["Bois de Rose Rare", "Cardamome Fumée", "Poivre de Sichuan"],
      heart: ["Bois d'Oud Sombre", "Santal Précieux", "Vétiver"],
      base: ["Fève Tonka", "Vanille Noire", "Ambre Chaud"]
    },
    description: "Une des essences les plus rares, précieuses et chères dans l'arsenal d'un parfumeur. Le bois de rose et la cardamome cèdent le pas à un mélange fumé d'oud rare.",
    descriptionEn: "One of the most rare and expensive ingredients in a perfumer's arsenal. Exotic rose wood and cardamom give way to a smoky blend of rare oud.",
    descriptionAr: "أحد أندر المكونات وأثمنها في عالم العطور الفاخرة، يمتزج خشب الورد مع الهيل المدخن وخشب العود النادر مع العنبر."
  },
  {
    id: "black-phantom",
    name: "Black Phantom",
    brand: "Kilian Paris",
    price: 39500,
    oldPrice: 47000,
    discount: "-16%",
    size: 50,
    sizes: [
      { ml: 50, price: 39500 }
    ],
    gender: "Unisex",
    category: "Unisex",
    rating: 4.93,
    reviewsCount: 167,
    concentration: "Eau de Parfum",
    batchCode: "KLN-BP-50",
    badge: "Nouveau",
    isBestSeller: false,
    isNew: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80"
    ],
    notes: {
      top: ["Rhum de Martinique", "Sucre de Canne"],
      heart: ["Café Noir Intense", "Caramel Chaud", "Amande Amère"],
      base: ["Vétiver de Java", "Bois de Santal", "Héliotrope"]
    },
    description: "« Memento Mori » — Une gourmandise mystérieuse et ténébreuse oscillant entre le café torréfié, les effluves de rhum vieux et la canne à sucre caramélisée.",
    descriptionEn: "A mysterious gourmand elixir swinging between bitter roasted coffee, dark Martinique rum and sweet melted caramel.",
    descriptionAr: "مزيج غامض وآسر يجمع بين القهوة السوداء المحمصة ورائحة الروم العتيق والكراميل الذائب وخشب الصندل الدافئ."
  },
  {
    id: "la-vie-est-belle-iris",
    name: "La Vie Est Belle Iris Absolu",
    brand: "Lancôme",
    price: 26000,
    oldPrice: 31000,
    discount: "-16%",
    size: 100,
    sizes: [
      { ml: 50, price: 18500 },
      { ml: 100, price: 26000 }
    ],
    gender: "Women",
    category: "Women",
    rating: 4.86,
    reviewsCount: 410,
    concentration: "Eau de Parfum Concentrée",
    batchCode: "LAN-LVEB-IR",
    badge: "-20%",
    isBestSeller: true,
    isNew: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80"
    ],
    notes: {
      top: ["Figue Rouge Juteuse", "Cassis Vif", "Bergamote"],
      heart: ["Iris Pallida Surconcentré (10x)", "Fleur d'Oranger"],
      base: ["Patchouli de Bali", "Accord Gourmand Ambré"]
    },
    description: "Une célébration éclatante du bonheur absolu avec la plus haute concentration d'Iris Pallida de toute la collection Lancôme.",
    descriptionEn: "A vibrant celebration of infinite joy featuring an intensified iris pallida concentration blended with rich gourmand accords.",
    descriptionAr: "تجسيد الفرح المطلق بأعلى تركيز من زهرة السوسن الباليدا النبيلة ممزوجة بالتين الأحمر وأريج الباتشولي الفاخر."
  },
  {
    id: "acqua-di-gio-parfum",
    name: "Acqua Di Giò Parfum",
    brand: "Giorgio Armani",
    price: 27500,
    oldPrice: 33000,
    discount: "-16%",
    size: 100,
    sizes: [
      { ml: 75, price: 22000 },
      { ml: 100, price: 27500 },
      { ml: 125, price: 34000 }
    ],
    gender: "Men",
    category: "Men",
    rating: 4.85,
    reviewsCount: 310,
    concentration: "Parfum",
    batchCode: "GA-ADG-24",
    badge: "Classique",
    isBestSeller: false,
    isNew: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80"
    ],
    notes: {
      top: ["Notes Marines Minérales", "Bergamote de Calabre"],
      heart: ["Romarin Aromatique", "Géranium Bourbon", "Sauge"],
      base: ["Encens Mystique", "Patchouli d'Indonésie"]
    },
    description: "La rencontre fascinante entre la mer déchaînée et les roches volcaniques. Un parfum marin boisé intense transcendé par un encens magnétique.",
    descriptionEn: "A powerful, addictive woody-aquatic fragrance contrasting marine notes with incense and Indonesian patchouli.",
    descriptionAr: "اللقاء الأسطوري بين قوة أمواج البحر وصخور البراكين، عبير بحري خشبي مكثف بالبخور والبخور الهادئ والبرغموت المنعش."
  },
  {
    id: "layton-pdm",
    name: "Layton",
    brand: "Parfums de Marly",
    price: 41000,
    oldPrice: 48000,
    discount: "-15%",
    size: 125,
    sizes: [
      { ml: 75, price: 32000 },
      { ml: 125, price: 41000 }
    ],
    gender: "Men",
    category: "Men",
    rating: 4.94,
    reviewsCount: 280,
    concentration: "Eau de Parfum",
    batchCode: "PDM-LAY-125",
    badge: "Prestige",
    isBestSeller: true,
    isNew: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80"
    ],
    notes: {
      top: ["Pomme Croquante", "Bergamote", "Lavande Française"],
      heart: ["Jasmin de Grasse", "Violette Sauvage", "Géranium"],
      base: ["Vanille Onctueuse", "Bois de Gaïac", "Poivre Rose"]
    },
    description: "Une fragrance noble et séduisante de la haute parfumerie royale, caractérisée par une signature orientale vanillée épicée irrésistible.",
    descriptionEn: "A noble, addictive blend of crisp apple, fresh lavender and rich vanilla, inspired by the royal court of Versailles.",
    descriptionAr: "عطر الملوك والفرسان، مزيج رائع بين التفاح المنعش واللافندر الفرنسي والفانيليا الغنية مع لمسات من خشب الغاياك النبيل."
  },
  {
    id: "coffret-decouverte-luxe",
    name: "Coffret Découverte Haute Parfumerie",
    brand: "L'ÉLIXIR Collection",
    price: 19500,
    oldPrice: 25000,
    discount: "-22%",
    size: 50,
    sizes: [
      { ml: 50, price: 19500 }
    ],
    gender: "Gift Sets",
    category: "Gift Sets",
    rating: 5.0,
    reviewsCount: 94,
    concentration: "Coffret 5 x 10ml Extraits",
    batchCode: "ELX-SET-05",
    badge: "Édition Limitée",
    isBestSeller: true,
    isNew: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80"
    ],
    notes: {
      top: ["Sélection 5 Parfums d'Exception", "Atomiseurs de Voyage Or"],
      heart: ["Baccarat 540, Aventus, Sauvage Elixir, Delina, Tobacco Vanille"],
      base: ["Coffret Écrin Velours Noir & Dorure à Chaud"]
    },
    description: "Le cadeau de luxe absolu : 5 flacons de voyage de 10ml en étui gainé de velours noir et or. Idéal pour explorer les plus grandes créations olfactives mondiales.",
    descriptionEn: "The ultimate luxury gift: 5 prestige travel atomizers (10ml each) nestled in a black velvet and gold-stamped presentation box.",
    descriptionAr: "الهدية الملكية المثالية: 5 زجاجات سفر فاخرة (10 مل لكل منها) من أشهر العطور العالمية في صندوق مخملي أسود بلمسات ذهبية."
  }
];

export const BRANDS = [
  { name: "Maison Francis Kurkdjian", origin: "Paris, France" },
  { name: "Creed", origin: "London / Paris" },
  { name: "Dior", origin: "Paris, France" },
  { name: "Parfums de Marly", origin: "Versailles, France" },
  { name: "Tom Ford", origin: "New York, USA" },
  { name: "Chanel", origin: "Neuilly-sur-Seine, France" },
  { name: "Yves Saint Laurent", origin: "Paris, France" },
  { name: "Kilian Paris", origin: "Cognac, France" },
  { name: "Giorgio Armani", origin: "Milano, Italia" },
  { name: "Lancôme", origin: "Paris, France" }
];

export const CATEGORIES = [
  {
    id: "Men",
    title: "Pour Homme",
    titleAr: "عطور رجالية",
    titleEn: "Men's Fragrances",
    subtitle: "Puissance, sillage affirmé et élégance intemporelle",
    subtitleAr: "جاذبية وقوة لا تضاهى",
    count: 5,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "Women",
    title: "Pour Femme",
    titleAr: "عطور نسائية",
    titleEn: "Women's Fragrances",
    subtitle: "Sensualité florale, accords gourmands et distinction",
    subtitleAr: "أنوثة راقية وسحر لا ينسى",
    count: 4,
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "Unisex",
    title: "Collection Mixte",
    titleAr: "عطور للجنسين",
    titleEn: "Unisex & Niche",
    subtitle: "Parfumerie de niche sans frontières de genre",
    subtitleAr: "إبداعات النيش النادرة للجنسين",
    count: 4,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "Gift Sets",
    title: "Coffrets Prestige",
    titleAr: "علب هدايا فاخرة",
    titleEn: "Luxury Gift Sets",
    subtitle: "Éditions limitées et coffrets de découverte raffinés",
    subtitleAr: "باقات هدايا فاخرة وإصدارات خاصة",
    count: 1,
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80"
  }
];

export const CUSTOMER_REVIEWS = [
  {
    id: 1,
    name: "Karim Benali",
    city: "Alger (Hydra)",
    rating: 5,
    perfume: "Baccarat Rouge 540",
    date: "Il y a 3 jours",
    comment: "Colis reçu en 24h à Alger avec possibilité de vérifier le parfum avant de payer le livreur. Code batch vérifié sur CheckFresh : 100% authentique. Le sillage dure plus de 16 heures !",
    commentAr: "تم استلام الطلب خلال 24 ساعة في حيدرة، قمت بفحص الباتش كود وكان أصلي 100%. الثبات والفوحان أكثر من 16 ساعة. شكراً على الهدية المرفقة!",
    verified: true
  },
  {
    id: 2,
    name: "Yasmine Mansouri",
    city: "Oran",
    rating: 5,
    perfume: "Delina Exclusif - Parfums de Marly",
    date: "Il y a 1 semaine",
    comment: "Une merveille ! L'emballage est digne d'une boutique des Champs-Élysées. Parfum scellé sous blister avec étiquette holographique. Service client joignable sur WhatsApp très réactif.",
    commentAr: "عطر مذهل وقمة في الأنوثة والفخامة! التغليف فاخر جداً ومغلق بالسلوفان الأصلي. خدمة الزبائن عبر الواتساب في غاية الاحترافية.",
    verified: true
  },
  {
    id: 3,
    name: "Sofiane M.",
    city: "Constantine",
    rating: 5,
    perfume: "Creed Aventus",
    date: "Il y a 2 semaines",
    comment: "J'avais peur d'une contrefaçon vu le nombre de fausses bouteilles sur le marché. C'est du vrai Creed Aventus ! Bouchon métallique lourd, atomiseur ultra-fin. Paiement à la livraison impeccable.",
    commentAr: "كنت متخوفاً من العطور المقلدة المنتشرة، لكن هذا كريد أفينتوس الأصلي بدون أدنى شك! الغطاء ثقيل والمرشة أصلية تماماً والدفع عند الاستلام مريح.",
    verified: true
  },
  {
    id: 4,
    name: "Amina K.",
    city: "Sétif",
    rating: 5,
    perfume: "Angels' Share - Kilian",
    date: "Il y a 2 semaines",
    comment: "Le flacon en cristal est une œuvre d'art et l'odeur de cognac et cannelle est divine pour l'hiver. Livraison soignée et rapide vers Sétif.",
    commentAr: "الزجاجة الكريستالية تحفة فنية، ورائحة القرفة والكونياك ساحرة للأجواء الباردة. التوصيل كان سريعاً ومحترماً.",
    verified: true
  }
];
