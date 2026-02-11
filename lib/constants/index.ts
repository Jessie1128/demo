import { CloudLightning, Cpu, Globe, TrendingUp } from "lucide-react";
import { NewsCategory } from "../types";

export const headerCategories: NewsCategory[] = [
  NewsCategory.FOCUS,
  NewsCategory.WORLD,
  NewsCategory.TECH,
  NewsCategory.SPORTS,
  NewsCategory.FINANCE,
  NewsCategory.ENTERTAINMENT,
];

export const breakingNewsList = [
  {
    text: "全球經濟回暖：股市創歷史新高",
    icon: TrendingUp,
  },
  {
    text: "AI 技術突破：重塑各行各業",
    icon: Cpu,
  },
  {
    text: "氣候變遷警報：極端天氣事件頻傳",
    icon: CloudLightning,
  },
  {
    text: "GLOBAL UPDATE: 2026 報告",
    icon: Globe,
  },
  {
    text: "全球經濟回暖：股市創歷史新高",
    icon: TrendingUp,
  },
  {
    text: "AI 技術突破：重塑各行各業",
    icon: Cpu,
  },
  {
    text: "氣候變遷警報：極端天氣事件頻傳",
    icon: CloudLightning,
  },
  {
    text: "GLOBAL UPDATE: 2026 報告",
    icon: Globe,
  },
];

export const NewsCategoryLabels: Record<NewsCategory, string> = {
  [NewsCategory.FOCUS]: "焦點",
  [NewsCategory.FINANCE]: "財經",
  [NewsCategory.SPORTS]: "體育",
  [NewsCategory.TECH]: "科技",
  [NewsCategory.WORLD]: "國際",
  [NewsCategory.MEDICAL]: "醫療",
  [NewsCategory.ENTERTAINMENT]: "娛樂",
  [NewsCategory.LIFESTYLE]: "生活",
  [NewsCategory.ENVIRONMENT]: "環保",
  [NewsCategory.LOCAL]: "地方",
  [NewsCategory.AEROSPACE]: "航太",
};

export const mockFocusNews = [
  {
    id: "focus-1",
    category: NewsCategory.WORLD,
    title: "全球峰會達成歷史性氣候協議",
    summary: "各國領導人一致同意實施更積極的減碳目標。",
    image:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Luca Bravo on Unsplash"],
    time: "約 10 分鐘前",
    isLive: true,
    isLarge: true,
  },
  {
    id: "focus-2",
    category: NewsCategory.TECH,
    title: "全新 AI 模型在程式編寫表現上超越人類",
    summary: "人工智慧領域的最新突破，有望為軟體開發帶來革命性的轉變。",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Google DeepMind on Unsplash"],
    time: "約 30 分鐘前",
  },
  {
    id: "focus-3",
    category: NewsCategory.SPORTS,
    title: "在地隊伍暌違 30 年奪得總冠軍",
    summary: "隨著這支黑馬球隊在驚險的加時賽中奪冠，全城陷入狂歡與慶祝。",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Johnathan Kirchoff on Unsplash"],
    time: "約 1 小時前",
  },
  {
    id: "focus-4",
    category: NewsCategory.FINANCE,
    title: "科技熱潮推動股市創下歷史新高",
    summary: "投資者紛紛湧向新興技術，推動主要股指達到歷史性水平。",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Chris Liverani on Unsplash"],
    time: "約 1 小時前",
    isLive: true,
    isLarge: true,
  },
  {
    id: "focus-5",
    category: NewsCategory.AEROSPACE,
    title: "民間太空探測器成功降落火星，傳回高清全景影像",
    summary:
      "這項歷史性任務寫下人類航太新頁，科學家已初步在樣本中偵測到水的微量跡象。",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "NASA on Unsplash"],
    time: "約 2 小時前",
  },
  {
    id: "focus-6",
    category: NewsCategory.LOCAL,
    title: "老城區成功活化，文創聚落帶動觀光潮復甦",
    summary:
      "百年老宅經修復後轉型為藝術工坊與咖啡館，成功吸引年輕族群回流，活絡地方經濟。",
    image:
      "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Joseph Chan on Unsplash"],
    time: "約 2 小時前",
  },
  {
    id: "focus-7",
    category: NewsCategory.ENVIRONMENT,
    title: "亞馬遜雨林砍伐率降至十年新低，保育計畫初見成效",
    summary:
      "多國政府聯手實施嚴格監控系統與衛星追蹤，有效遏止非法開發，修復全球之肺。",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Sébastien Goldberg on Unsplash"],
    time: "約 3 小時前",
  },
  {
    id: "focus-8",
    category: NewsCategory.LIFESTYLE,
    title: "數位游牧民族興起，遠端辦公成為後疫情時代新常態",
    summary:
      "越來越多的專業人士選擇攜帶筆電環遊世界，帶動東南亞與歐洲各國推出「遠端工作簽證」。",
    image:
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Mirel on Unsplash"],
    isLive: true,
    time: "約 3 小時前",
  },
  {
    id: "focus-9",
    category: NewsCategory.ENTERTAINMENT,
    title: "好萊塢奇幻史詩鉅作首波評論出爐，獲讚「影史新標竿」",
    summary:
      "備受期待的年度大片在首映後獲得影評人一致好評，視效與敘事被公認為十年來之最。",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Jakob Owens on Unsplash"],
    time: "約 4 小時前",
  },
  {
    id: "focus-10",
    category: NewsCategory.MEDICAL,
    title: "癌症標靶療法取得重大突破，臨床成功率大幅提升",
    summary:
      "新一代免疫療法在臨床試驗中展現驚人成效，為多種難治性癌症患者帶來康復曙光。",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "National Cancer Institute on Unsplash"],
    time: "約 4 小時前",
  },
];

export const mockWorldNews = [
  {
    id: "world-1",
    category: NewsCategory.WORLD,
    title: "歐盟通過全球首部 AI 監管法案，設立科技巨頭行為準則",
    summary:
      "布魯塞爾方面達成共識，將針對高風險人工智慧系統實施嚴格審查，旨在保護公民權利並維持技術競爭力。",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Christian Lue on Unsplash"],
    time: "約 5 小時前",
    isLive: true,
    isLarge: true,
  },
  {
    id: "world-2",
    category: NewsCategory.WORLD,
    title: "北歐三國宣布建立聯合防空系統，強化波羅的海安全監控",
    summary:
      "因應區域局勢變化，瑞典、挪威與芬蘭決定整合雷達與戰機派遣機制，共同防衛領空。",
    image:
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Håkon Sataøen on Unsplash"],
    time: "約 6 小時前",
  },
  {
    id: "world-3",
    category: NewsCategory.WORLD,
    title: "二十國集團 (G20) 財長會議：聚焦全球稅務改革與債務緩解",
    summary:
      "各國財長在巴西會晤，討論針對全球超級富豪徵收最低限度稅率，並協助低收入國家度過財政危機。",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Kyle Glenn on Unsplash"],
    time: "約 7 小時前",
  },
  {
    id: "world-4",
    category: NewsCategory.WORLD,
    title: "東協峰會發表共同聲明，呼籲和平解決南海主權爭議",
    summary:
      "東南亞各國領導人強調《國際海洋法》重要性，呼籲相關各國保持克制，避免軍事行動升溫。",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Santi Vedrí on Unsplash"],
    time: "約 8 小時前",
    isLive: true,
  },
  {
    id: "world-5",
    category: NewsCategory.WORLD,
    title: "倫敦與巴黎簽署新能源合作協議，共同開發離岸風電網",
    summary:
      "英法兩國決定擱置外交分歧，轉向綠能韌性合作，計畫在英吉利海峽佈建跨國電力連結系統。",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Zbynek Burival on Unsplash"],
    time: "約 10 小時前",
  },
  {
    id: "world-6",
    category: NewsCategory.WORLD,
    title: "聯合國報告：全球極地冰蓋融化速度加快，恐威脅低窪海島",
    summary:
      "最新監測數據顯示，南極冰棚正以超乎預期的速度流失，海平面上升將影響全球逾十億人口。",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Cassie Matias on Unsplash"],
    time: "約 9 小時前",
    isLarge: true,
  },
  {
    id: "world-7",
    category: NewsCategory.WORLD,
    title: "世界糧食計畫署警告：東非地區面臨近年最嚴重乾旱威脅",
    summary:
      "極端氣候導致降雨量連續三季低於平均值，國際社會急需援助以防止該區域爆發大規模糧食危機。",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Tucker Tangeman on Unsplash"],
    time: "約 12 小時前",
  },
  {
    id: "world-8",
    category: NewsCategory.WORLD,
    title: "日本與澳洲簽署互惠准入協定，深化亞太區域防衛夥伴關係",
    summary:
      "日澳領導人達成共識，將簡化軍隊互訪與聯合演習程序，旨在確保印太地區的自由與開放。",
    image:
      "https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Jezael Melgoza on Unsplash"],
    time: "約 15 小時前",
    isLive: true,
  },
  {
    id: "world-9",
    category: NewsCategory.WORLD,
    title: "梵蒂岡展開罕見中東調停之旅，呼籲宗教領袖共同推動和平",
    summary:
      "教宗方濟各出訪戰亂地區，與多位伊斯蘭領袖進行對話，試圖緩解長年來的宗教與種族矛盾。",
    image:
      "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Caleb Miller on Unsplash"],
    time: "約 18 小時前",
  },
  {
    id: "world-10",
    category: NewsCategory.WORLD,
    title: "南非法院正式向海牙法庭提交訴訟，指控跨國企業侵犯環境權",
    summary:
      "這項指標性案件涉及多家採礦企業，若勝訴將為開發中國家的生態正義立下全球先例。",
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800", // 露天礦場，符合環境權與採礦主題
    source: ["Photo by", "Dominik Vanyi on Unsplash"],
    time: "約 1 天前",
  },
];

export const mockTechNews = [
  {
    id: "tech-1",
    category: NewsCategory.TECH,
    title: "次世代量子處理器問世，運算速度突破現有物理極限",
    summary:
      "科技巨頭宣布成功研發出具備更高穩定性的量子位元架構，預計將縮短新藥研發與密碼破譯的時間達數萬倍。",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Google DeepMind on Unsplash"],
    time: "約 15 分鐘前",
    isLive: true,
    isLarge: true,
  },
  {
    id: "tech-2",
    category: NewsCategory.TECH,
    title: "全球半導體供應鏈重組，2 奈米廠正式進入機台安裝階段",
    summary:
      "隨著最先進製程設備運抵基地，分析師預計明年底將可實現量產，屆時將引領智慧型手機性能再次飛躍。",
    image:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Laura Ockel on Unsplash"],
    time: "約 1 小時前",
  },
  {
    id: "tech-3",
    category: NewsCategory.TECH,
    title: "全新固態電池技術突破，電動車續航里程翻倍",
    summary:
      "新款電池不僅大幅提升能量密度，更解決了低溫環境下的電力衰減問題，並將充電時間縮短至 10 分鐘內。",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Kumpan Electric on Unsplash"],
    time: "約 2 小時前",
  },
  {
    id: "tech-4",
    category: NewsCategory.TECH,
    title: "腦機介面臨床實驗大獲成功，失能患者首度透過意念打字",
    summary:
      "這項革命性的醫療科技透過植入式晶片，成功捕捉大腦神經信號並轉化為電腦指令，為身障人士開啟溝通新視窗。",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Santi Vedrí on Unsplash"],
    time: "約 3 小時前",
    isLive: true,
  },
  {
    id: "tech-5",
    category: NewsCategory.TECH,
    title: "綠能數據中心普及，AI 運算不再增加碳足跡",
    summary:
      "新款液冷系統結合地熱發電，讓超大型運算中心能在保持極速運算的同時，實現近乎零碳排放的環保目標。",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800", // 穩定的數據中心伺服器圖片
    source: ["Photo by", "Caspar Camille Rubin on Unsplash"],
    time: "約 5 小時前",
  },
  {
    id: "tech-6",
    category: NewsCategory.TECH,
    title: "生成式 AI 工具深入創意產業，影視後期效率大幅提升",
    summary:
      "好萊塢製片廠開始導入最新的 AI 動畫渲染技術，原本需要數月的特效製作流程，現在只需幾天即可完成初稿。",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Google DeepMind on Unsplash"],
    time: "約 6 小時前",
  },
  {
    id: "tech-7",
    category: NewsCategory.TECH,
    title: "低軌衛星通訊全面覆盖，極圈地區也能流暢連網",
    summary:
      "隨著最後一批衛星部署完成，全球最後的通訊死角正式消失，遠程醫療與災難應變能力將獲顯著提升。",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "NASA on Unsplash"],
    time: "約 8 小時前",
  },
  {
    id: "tech-8",
    category: NewsCategory.TECH,
    title: "穿戴式擴增實境 (AR) 眼鏡迎來消費級爆發點",
    summary:
      "新款裝置成功將重量減輕至普通眼鏡水準，並內建 AI 語音翻譯功能，被視為後智慧型手機時代的殺手級產品。",
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800", // 具有未來感的穿戴科技 VR/AR 圖片
    source: ["Photo by", "Minh Pham on Unsplash"],
    time: "約 10 小時前",
  },
  {
    id: "tech-9",
    category: NewsCategory.TECH,
    title: "隱私運算技術突破，企業數據共享不再有風險",
    summary:
      "最新的同態加密技術讓機器學習能在加密數據上直接運行，確保敏感個資在不離開本地端的情況下完成模型訓練。",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Luke Chesser on Unsplash"],
    time: "約 12 小時前",
  },
  {
    id: "tech-10",
    category: NewsCategory.TECH,
    title: "全自動無人駕駛物流車隊正式在主要城市上路",
    summary:
      "經過三年的測試，監管機構終於批准 L4 等級自動駕駛卡車在高速公路上運行，預計將大幅降低物流成本。",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Possessed Photography on Unsplash"],
    time: "約 1 天前",
    isLarge: true,
  },
];

export const mockSportsNews = [
  {
    id: "sports-1",
    category: NewsCategory.SPORTS,
    title: "傳奇球星最後一舞，宣布賽季結束後正式退役",
    summary:
      "擁有五枚冠軍戒指的籃壇巨星在今日記者會上含淚致意，感謝球迷二十年來的陪伴，全世界體壇紛紛發文致敬。",
    image:
      "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Markus Spiske on Unsplash"],
    time: "約 20 分鐘前",
    isLive: true,
  },
  {
    id: "sports-2",
    category: NewsCategory.SPORTS,
    title: "歐冠決賽上演逆轉秀，黑馬球隊補時連入兩球奪冠",
    summary:
      "這場被譽為史詩級的對決在最後三分鐘發生驚天逆轉，這支賽前不被看好的隊伍最終舉起了大耳盃。",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Thomas Serer on Unsplash"],
    time: "約 1 小時前",
    isLarge: true,
  },
  {
    id: "sports-3",
    category: NewsCategory.SPORTS,
    title: "F1 賽車新加坡大獎賽，雨中混戰由新秀奪下首勝",
    summary:
      "濕滑的路面導致多起擦撞意外，頂尖車手紛紛失誤，年僅 19 歲的新星展現驚人穩定度，奪得生涯首座分站冠軍。",
    image:
      "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Abubakar Balogun on Unsplash"],
    time: "約 2 小時前",
    isLarge: true,
  },
  {
    id: "sports-4",
    category: NewsCategory.SPORTS,
    title: "網球大滿貫爆冷，球王於八強賽止步",
    summary:
      "在長達五小時的激戰後，頭號種子因體力透支與傷勢影響，不敵來自預選賽的對手，創下十年來最早出局紀錄。",
    image:
      "https://images.unsplash.com/photo-1592709823125-a191f07a2a5e?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Renith R on Unsplash"],
    time: "約 3 小時前",
    isLive: true,
  },
  {
    id: "sports-5",
    category: NewsCategory.SPORTS,
    title: "全球最快！牙買加短跑好手打破室內 60 公尺紀錄",
    summary:
      "在世界室內田徑錦標賽中，短跑天才以 0.01 秒之差打破了塵封多年的世界紀錄，展現驚人的爆發力。",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Johnathan Kirchoff on Unsplash"],
    time: "約 5 小時前",
  },
  {
    id: "sports-6",
    category: NewsCategory.SPORTS,
    title: "極限運動 X Games 登場，滑板天才少女挑戰高難度動作",
    summary:
      "年僅 13 歲的滑板新秀成功完成 1080 度轉體，成為史上首位在正式比賽中完成此動作的女性運動員。",
    image:
      "https://images.unsplash.com/photo-1547447134-cd3f5c716030?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Jan Kopřiva on Unsplash"],
    time: "約 6 小時前",
  },
  {
    id: "sports-7",
    category: NewsCategory.SPORTS,
    title: "MLB 季後賽開打，在地英雄擊出關鍵再見全壘打",
    summary:
      "滿壘情況下，看板球星在兩出局後擊出越過右外野牆的長打，帶領球隊挺進下一輪分區系列賽。",
    image:
      "https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Lesly Juarez on Unsplash"],
    time: "約 8 小時前",
  },
  {
    id: "sports-8",
    category: NewsCategory.SPORTS,
    title: "環法自行車賽進入山地站，黃衫領跑者守住關鍵時間差",
    summary:
      "在海拔 2000 公尺的坡度挑戰中，領先者成功抵擋對手的多次進攻，繼續保有總成績第一的優勢。",
    image:
      "https://images.unsplash.com/photo-1484186304838-0bf1a8cff81c?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Viktor Bystrov on Unsplash"],
    time: "約 10 小時前",
  },
  {
    id: "sports-9",
    category: NewsCategory.SPORTS,
    title: "NBA 選秀狀元呼之欲出，天才中鋒展現統治級防守數據",
    summary:
      "隨著大學聯賽結束，這位擁有 220 公分身高的歐籍天才被專家一致公認為今年選秀的不二人選。",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Seth Jensen on Unsplash"],
    time: "約 12 小時前",
    isLive: true,
  },
  {
    id: "sports-10",
    category: NewsCategory.SPORTS,
    title: "東京舉辦奧運紀念馬拉松，逾五萬跑者湧入市中心",
    summary:
      "為了紀念體育盛事，來自世界各地的跑者共襄盛舉，從新宿出發跑向終點，不僅是競技更是全民派對。",
    image:
      "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Quino Al on Unsplash"],
    time: "約 1 天前",
  },
];

export const mockFinanceNews = [
  {
    id: "finance-1",
    category: NewsCategory.FINANCE,
    title: "通膨數據低於預期，全球股市迎來強勁反彈",
    summary:
      "最新公佈的消費者物價指數顯示通膨壓力減緩，投資者預期央行將停止升息，帶動主要股指全面上揚。",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800", // 經典股市 K 線圖，穩定度極高
    source: ["Photo by", "Chris Liverani on Unsplash"],
    time: "約 15 分鐘前",
    isLive: true,
    isLarge: true,
  },
  {
    id: "finance-2",
    category: NewsCategory.FINANCE,
    title: "數位貨幣再創歷史新高，大型機構投資者紛紛進場",
    summary:
      "隨著監管政策趨於明朗，指標性加密貨幣今日突破歷史阻力位，單日漲幅超過 10%，引發市場熱議。",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Artur Lewandowksi on Unsplash"],
    time: "約 1 小時前",
  },
  {
    id: "finance-3",
    category: NewsCategory.FINANCE,
    title: "全球供應鏈好轉，製造業採購經理人指數 (PMI) 回升",
    summary:
      "多個主要經濟體的 PMI 數據重回擴張區間，顯示製造業動能正逐漸恢復，有助於緩解下半年經濟衰退擔憂。",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Tiger Lily on Unsplash"],
    time: "約 2 小時前",
  },
  {
    id: "finance-4",
    category: NewsCategory.FINANCE,
    title: "科技巨頭財報亮眼，雲端運算與 AI 業務成營收增長引擎",
    summary:
      "領先科技公司發布季度財報，獲利遠超市場預期，反映出企業在數位轉型與人工智慧領域的投入依然強勁。",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Lukas Blazek on Unsplash"],
    time: "約 3 小時前",
    isLive: true,
    isLarge: true,
  },
  {
    id: "finance-5",
    category: NewsCategory.FINANCE,
    title: "黃金價格攀升至避險高點，地緣政治風險引發投資轉向",
    summary:
      "受區域衝突局勢緊張影響，市場避險情緒濃厚，金價連續五個交易日上漲，創下近半年來新高。",
    image:
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Scotty Reifsnyder on Unsplash"],
    time: "約 5 小時前",
  },
  {
    id: "finance-6",
    category: NewsCategory.FINANCE,
    title: "房貸利率下調帶動剛性需求，房市交易量微幅回升",
    summary:
      "隨著銀行放寬貸款條件，首購族看房意願顯著增加，主要都會區成交量結束長達半年的低迷態勢。",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Jakub Zerdzicki on Unsplash"],
    time: "約 6 小時前",
    isLarge: true,
  },
  {
    id: "finance-7",
    category: NewsCategory.FINANCE,
    title: "跨國併購案震撼業界，電信龍頭斥資百億美元收購媒體集團",
    summary:
      "這項交易案若獲監管機構批准，將重組全球內容分發版圖，也顯示出電信服務商對內容掌控的急切需求。",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Hunters Race on Unsplash"],
    time: "約 8 小時前",
    isLarge: true,
  },
  {
    id: "finance-8",
    category: NewsCategory.FINANCE,
    title: "新創公司 IPO 熱潮再現，人工智慧獨角獸成吸金亮點",
    summary:
      "經過一年的冷淡期，多家估值超過十億美元的 AI 企業宣布上市計畫，首日認購訂單已遠超預期。",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800", // 現代化的數據儀表板，符合 AI 獨角獸主題
    source: ["Photo by", "Luke Chesser on Unsplash"],
    time: "約 10 小時前",
  },
  {
    id: "finance-9",
    category: NewsCategory.FINANCE,
    title: "石油出口國組織宣佈減產計畫，原油價格短期承壓上揚",
    summary:
      "OPEC+ 決定延長減產協議以穩定市場價格，能源分析師預警下季度燃料成本可能對零售端造成衝擊。",
    image:
      "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?auto=format&fit=crop&q=80&w=800", // 煉油廠與能源背景
    source: ["Photo by", "Zbynek Burival on Unsplash"],
    time: "約 12 小時前",
    isLive: true,
  },
  {
    id: "finance-10",
    category: NewsCategory.FINANCE,
    title: "綠色債券發行量倍增，ESG 永續投資成為市場主流",
    summary:
      "全球企業加速投入低碳轉型，帶動永續金融工具熱度，投資者對具備環保承諾的債券展現極高興趣。",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800", // 嫩芽與雙手，ESG 與永續金融的標誌性圖片
    source: ["Photo by", "Visual Stories || Micheile on Unsplash"],
    time: "約 1 天前",
    isLarge: true,
  },
];

export const mockEntertainmentNews = [
  {
    id: "entertainment-1",
    category: NewsCategory.ENTERTAINMENT,
    title: "奧斯卡金像獎入圍名單揭曉，獨立製片成最大贏家",
    summary:
      "今年名單跌破眾人眼鏡，多部小成本製作憑藉精湛劇本入圍多項大獎，傳統片廠面臨創意挑戰。",
    image:
      "https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Felix Mooneeram on Unsplash"],
    time: "約 30 分鐘前",
    isLive: true,
    isLarge: true,
  },
  {
    id: "entertainment-2",
    category: NewsCategory.ENTERTAINMENT,
    title: "傳奇搖滾樂團重組巡演，全球首站門票三秒售罄",
    summary:
      "解散十年的殿堂級樂團宣布展開世界巡迴，首站選在倫敦溫布利球場，引發全球樂迷瘋狂搶票。",
    image:
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Yohann LIBOT on Unsplash"],
    time: "約 1 小時前",
  },
  {
    id: "entertainment-3",
    category: NewsCategory.ENTERTAINMENT,
    title: "影音串流平台宣布調漲月費，並將嚴格限制帳號共享",
    summary:
      "為了應對製作成本上升，龍頭平台將在全球同步實施新收費政策，引發社交媒體熱烈討論。",
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Caspar Camille Rubin on Unsplash"],
    time: "約 2 小時前",
  },
  {
    id: "entertainment-4",
    category: NewsCategory.ENTERTAINMENT,
    title: "超人氣漫改真人版影集釋出預告，還原度獲原著粉盛讚",
    summary:
      "預告片中展現了宏大的世界觀與華麗的特效，原本持懷疑態度的粉絲紛紛改口表示「非常期待」。",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Erik Mclean on Unsplash"],
    time: "約 3 小時前",
    isLive: true,
  },
  {
    id: "entertainment-5",
    category: NewsCategory.ENTERTAINMENT,
    title: "沉浸式舞台劇風靡全球，觀眾化身主角參與劇情發展",
    summary:
      "打破第四面牆的新型態演出模式成為時尚潮流，票價雖高昂但場場爆滿，預約已排到明年。",
    image:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Kyle Head on Unsplash"],
    time: "約 5 小時前",
  },
  {
    id: "entertainment-6",
    category: NewsCategory.ENTERTAINMENT,
    title: "百老匯經典劇目重返舞台，首演夜眾星雲集",
    summary:
      "睽違二十年再度重製，導演融入現代數位投影技術，賦予傳統劇目全新的生命力。",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&q=80&w=800", // 經典劇院內部紅座椅與舞台
    source: ["Photo by", "Rob Laughter on Unsplash"],
    time: "約 6 小時前",
    isLarge: true,
  },
  {
    id: "entertainment-7",
    category: NewsCategory.ENTERTAINMENT,
    title: "世界級電音節於沙漠舉行，創下最高環保低碳紀錄",
    summary:
      "主辦單位利用太陽能供電並全面實施零廢棄政策，證明大型娛樂活動也能與環境永續共存。",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Danny Howe on Unsplash"],
    time: "約 8 小時前",
  },
  {
    id: "entertainment-8",
    category: NewsCategory.ENTERTAINMENT,
    title: "超模跨界進軍大銀幕，處女作表現驚艷影評人",
    summary:
      "這部懸疑片在國際電影節首映後獲得全場起立鼓掌，專家預測這將是今年秋季的票房黑馬。",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Oladimeji Odunsi on Unsplash"],
    time: "約 10 小時前",
  },
  {
    id: "entertainment-9",
    category: NewsCategory.ENTERTAINMENT,
    title: "復古黑膠唱片銷量逆勢成長，成為 Z 世代收藏新寵",
    summary:
      "在數位串流時代，實體唱片的觸感與音質重新獲得青睞，各大唱片行紛紛設立專區。",
    image:
      "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Adrian Korte on Unsplash"],
    time: "約 12 小時前",
    isLive: true,
  },
  {
    id: "entertainment-10",
    category: NewsCategory.ENTERTAINMENT,
    title: "年度大型遊戲大賽落幕，新興戰隊爆冷奪冠",
    summary:
      "決賽直播吸引超過千萬人同時在線，這支平均年齡僅 18 歲的隊伍展現了驚人的配合默契。",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    source: ["Photo by", "Ella Don on Unsplash"],
    time: "約 1 天前",
  },
];

export const defaultImageString =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0SZZ3AAAnAAn/p2zSqwAAAABJRU5ErkJggg==";
