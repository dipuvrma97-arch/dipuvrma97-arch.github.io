/* ===== CONTENT FILE: edit only the text inside quotes ===== */

const SITE={
 name:"Deepu Verma",
 email:"deepuverma827041@gmail.com",
 phone:"",          // set to "" to hide the phone number
 location:"Faridabad, Haryana, India",
 linkedin:"https://www.linkedin.com/in/deepu-verma-analyst46?utm_source=share_via&utm_content=profile&utm_medium=member_android",
 github:"https://github.com/dipuvrma97-arch",
 instagram:"https://www.instagram.com/datawithdeepu/",                 // optional: paste your Instagram profile link to show its icon in the footer
 formEndpoint:"https://formspree.io/f/mljglpol",              // paste your Formspree link here (https://formspree.io/f/xxxx) to receive messages in your inbox
 photo:"images/photo.jpg",           // your photo: replace the file images/photo.jpg (keep the name)
 resumeImg:"images/resume-preview.jpg",   // resume picture shown in Preview (optional)
 resumeFile:"files/Deepu-Verma-Resume.pdf",   // your resume PDF (replace the file, keep the name)
};
const ABOUT=[["Languages","Hindi (fluent), English (basic, understands well)"],["Current education","BCA, 3rd Semester"],["Location","Faridabad, Haryana, India"],["Career interest","Data Analytics"],["Personal interest","Learning Technology"]];
const SKILLS=[
 {group:"Productivity and spreadsheets",items:["Microsoft Excel","Microsoft Word","Microsoft PowerPoint"]},
 {group:"Data visualisation",items:["Power BI"]},
 {group:"Design and communication",items:["Canva"]},
];
const TODO="To be added";
const DRIVE="https://drive.google.com/drive/folders/1krJmtyACKwRi25-WrX8xXansGaB8HrkM"; // Google Drive folder with all project files
const PROJECTS=[
 {id:"p1",title:"Raw E-commerce Sales Tracker Dashboard",tools:"Excel",desc:"Order-level sales data with total sales, total cost, net profit and order status.",img:"images/proj-sales.jpg",case:{"what": "A sales tracker for 20 orders placed in June 2026, with product, category, quantity, unit price, total sales, unit cost, total cost, net profit and order status.", "why": "To see the sales, cost and profit of every order in one table, and to tell delivered, pending and cancelled orders apart quickly.", "used": "Calculated columns for total sales, total cost and net profit, filter drop-downs on every column, and conditional formatting that highlights profit values and cancelled orders.", "learned": "How sales, cost and profit are worked out for each order, and how filters and colour rules make a table easier to read."}},
 {id:"p2",title:"Payroll Sheet",tools:"Excel",desc:"Employee payroll with attendance, earned salary, bonus, fine, PF deduction and net in-hand salary.",img:"images/proj-payroll.jpg",case:{"what": "A monthly payroll sheet for 15 employees across five departments, from basic salary and attendance to net in-hand salary.", "why": "To work out each employee's pay from attendance in one place, with bonus, fine and deduction handled by clear rules.", "used": "Per-day salary (basic salary divided by 30 days), earned salary (per-day salary times days present), an attendance bonus, a fine for 3 or more absent days, a PF deduction of 12% of gross salary, filter drop-downs, data bars and conditional formatting.", "learned": "How attendance, bonus, fine and deduction combine into a net salary, and how to apply rules with formulas."}},
 {id:"p3",title:"Inventory Tracker",tools:"Excel",desc:"Stock sheet with opening stock, items sold, remaining stock, stock status and re-order quantity.",img:"images/proj-inventory.jpg",case:{"what": "A stock sheet for 12 items showing opening stock, new stock received, total available, items sold, remaining stock, minimum requirement, stock status and re-order quantity.", "why": "To know at a glance what is in stock, what is running low and how much to order again.", "used": "Formulas for total and remaining stock, a stock status of In Stock, Re-Order Now or Out of Stock, a re-order quantity worked out for low items, and colour coding with conditional formatting.", "learned": "How to turn stock numbers into a clear status and re-order plan, and how colour rules help spot problems early."}},
 {id:"p4",title:"Multi Criteria Data Filter Sort Summary Report",tools:"Excel",desc:"Property data (location, type, price, BHK, status, client) prepared for multi-criteria filtering, sorting and summary.",img:"images/proj-filter.jpg",case:{"what": "A property data sheet with 15 listings, showing location, property type, price, bedrooms, status (available or sold) and client name.", "why": "To find properties quickly by location, type, price or status, and to see which client bought which property.", "used": "Filter drop-downs on every column and sorting, combined to apply several criteria at the same time.", "learned": "How to filter and sort on more than one condition to answer questions from a data table."}},
 {id:"p5",title:"Data Cleaning",tools:"Excel",desc:"Raw contact data cleaned into separate name and valid email address columns.",img:"images/proj-cleaning.jpg",case:{"what": "A cleaning exercise on 13 raw contact records, where names and emails were mixed in one cell.", "why": "To turn messy contact text into separate, usable name and email columns.", "used": "Text formulas to separate the name and email parts and tidy how the names are written.", "learned": "Raw data usually needs cleaning before it can be analysed, and every cleaned result needs to be checked."}},
];
const CERT_GROUPS=["AI Skill & Tools", "Python Programming", "SQL and Databases", "Data Analytics Skills", "Office and Design Tools", "Events and Participation"];
const CERTS=[
 {"t":"Prompt Engineering: Beginner's Course","org":"Gyaan-E, powered by Physics Wallah","date":"","cat":"AI Skill & Tools","img":"images/cert-prompt-engineering.jpg","url":"","id":"GYN0000013714"},
 {"t":"Claude: Beginner's Course","org":"Gyaan-E, powered by Physics Wallah","date":"","cat":"AI Skill & Tools","img":"images/cert-claude.jpg","url":"","id":"GYN0000008336"},
 {"t":"Google Gemini: Beginner's Course","org":"Gyaan-E, powered by Physics Wallah","date":"","cat":"AI Skill & Tools","img":"images/cert-gemini.jpg","url":"","id":"GYN0000014783"},
 {"t":"NotebookLM: Beginner's Course","org":"Gyaan-E, powered by Physics Wallah","date":"","cat":"AI Skill & Tools","img":"images/cert-notebooklm.jpg","url":"","id":"GYN0000023205"},
 {"t":"Canva with AI: Beginner's Course","org":"Gyaan-E, powered by Physics Wallah","date":"","cat":"AI Skill & Tools","img":"images/cert-canva-ai.jpg","url":"","id":"GYN0000023202"},
 {"t":"ChatGPT Advanced Course","org":"Gyaan-E, powered by Physics Wallah","date":"","cat":"AI Skill & Tools","img":"images/cert-chatgpt-advanced.jpg","url":"","id":"GYN0000020142"},
 {"t":"AI Tools & Claude Workshop","org":"be10X","date":"9 October 2026","cat":"AI Skill & Tools","img":"images/cert-be10x.jpg","url":"","id":""},
 {"t":"YUVA AI For ALL (Hindi)","org":"NIELIT • NCVET-recognised • NSQF Level 2","date":"23 June 2026","cat":"AI Skill & Tools","img":"images/cert-yuva-ai.jpg","url":"","id":""},
 {"t":"Python Programming Beginner's Course","org":"Gyaan-E, powered by Physics Wallah","date":"","cat":"Python Programming","img":"images/cert-python-programming.jpg","url":"","id":"GYN0000014782"},
 {"t":"Python: Beginner Projects Course","org":"Gyaan-E, powered by Physics Wallah","date":"","cat":"Python Programming","img":"images/cert-python-projects.jpg","url":"","id":"GYN0000008353"},
 {"t":"SQL: Beginner's Course","org":"Gyaan-E, powered by Microsoft","date":"","cat":"SQL and Databases","img":"images/cert-sql.jpg","url":"","id":"GYN0000023203"},
 {"t":"Microsoft Excel Beginners To Advance","org":"SkillCourse","date":"26 August 2026","cat":"Data Analytics Skills","img":"images/cert-excel.jpg","url":"","id":"SC-4UFR3M6XRA"},
 {"t":"Advance Excel & AI Course","org":"Gyaan-E, powered by Physics Wallah","date":"","cat":"Data Analytics Skills","img":"images/cert-advance-excel-ai.jpg","url":"","id":"GYN0000013715"},
 {"t":"Microsoft Excel Formulas: Mastery Course","org":"Gyaan-E, powered by Microsoft","date":"","cat":"Data Analytics Skills","img":"images/cert-excel-formulas.jpg","url":"","id":"GYN0000002805"},
 {"t":"30 Days Power BI Micro Course","org":"SkillCourse","date":"26 August 2026","cat":"Data Analytics Skills","img":"images/cert-powerbi.jpg","url":"","id":"SC-S8G3TEYZK0"},
 {"t":"Google Sheets Beginner's Course","org":"Gyaan-E, powered by Physics Wallah","date":"","cat":"Data Analytics Skills","img":"images/cert-google-sheets.jpg","url":"","id":"GYN0000023201"},
 {"t":"MS Word Complete Course: Basics to Advanced Features","org":"Cursa","date":"2 October 2026","cat":"Office and Design Tools","img":"images/cert-word.jpg","url":"","id":""},
 {"t":"Microsoft Word: Beginner's Course","org":"Gyaan-E, powered by Microsoft","date":"","cat":"Office and Design Tools","img":"images/cert-word-gyaan-e.jpg","url":"","id":"GYN0000002934"},
 {"t":"Canva Tool for Beginners","org":"Cursa","date":"2 October 2026","cat":"Office and Design Tools","img":"images/cert-canva.jpg","url":"","id":""},
 {"t":"Viksit Bharat Young Leaders Dialogue (VBYLD) 2027 — Online Quiz Participation","org":"MY Bharat • Ministry of Youth Affairs & Sports","date":"11 September 2026","cat":"Events and Participation","img":"images/cert-vbyld.jpg","url":"","id":"","type":"Online quiz participation"},
 {"t":"1 Day Industrial Visit on Data Science","org":"DUCAT, South Ex, Delhi","date":"4 February 2026","cat":"Events and Participation","img":"images/cert-ducat-visit.jpg","url":"","id":"","type":"Industrial visit certificate"},
];
const ACH=[{t:"College fest — Treasure Trail game",meta:"Role: Coordinator",d:"Coordinated the Treasure Trail game at my college fest, with a focus on event coordination and participation."}];
const EDU=[{t:"Bachelor of Computer Applications (BCA)",meta:"Rawal Institute of Management, MDU Rohtak",d:"Currently in the 3rd semester • Faridabad, Haryana, India"}];

const TEXT={
 objective:"To build practical data analysis skills through hands-on projects and internships, and to grow into a Data Analyst role.",
 heroIntro:"I'm a BCA student interested in technology, data and problem-solving. I'm building my skills through spreadsheet projects, Power BI learning and continuous exploration of digital tools.",
 aboutText:"I'm Deepu Verma, a BCA student at Rawal Institute of Management, affiliated with MDU Rohtak. I'm interested in developing a career in data analytics and exploring how tools such as Microsoft Excel and Power BI can help organise information and communicate insights. I'm building my foundation through practical spreadsheet projects, online learning and hands-on exploration of technology.",
};

const LEARNING=["SQL basics"];
const INTERN={role:"Logistics Data Analyst Intern",org:"YuvaIntern",mode:"Remote",start:"2026-10-06",end:"2026-11-03",label:"6 October to 3 November 2026",duration:"4 weeks",offerImg:"images/offer-letter.jpg",completionImg:""};
const SEMESTERS=[{n:1,sgpa:"8.74",declared:"17 April 2026",img:"images/result-sem1.jpg"},{n:2,sgpa:"8.48",declared:"10 September 2026",img:"images/result-sem2.jpg"},{n:3},{n:4},{n:5},{n:6}];
const EXCEL_FEATURES=[
 {icon:"formula",t:"Essential Formulas",d:"Calculated columns for totals, profit, salary and stock."},
 {icon:"format",t:"Conditional Formatting",d:"Colour rules that highlight status, profit and attendance."},
 {icon:"filter",t:"Sort and Filter",d:"Filter drop-downs and sorting on data tables."},
 {icon:"check",t:"Data Validation",d:"Rules that control what can be typed into a cell."},
];

const VISITS=[
 {
  "id": "v1",
  "title": "DUCAT South Ex, Delhi — Data Science Industrial Visit",
  "date": "4 February 2026",
  "desc": "A one-day college industrial visit to DUCAT, South Ex, Delhi, giving an introduction to Data Science.",
  "cert": "1 Day Industrial Visit on Data Science",
  "sections": [
   [
    "Visit details",
    "A one-day college industrial visit on Data Science at DUCAT, South Ex, Delhi, on 4 February 2026. DUCAT issued a certificate of completion for the visit."
   ],
   [
    "Purpose",
    "To get an introduction to Data Science and see how it connects to the data analytics career I am working towards."
   ],
   [
    "General background: the Data Science workflow",
    "In general, data work moves from collecting data, to cleaning it, analysing it, visualising it and explaining what it means. Excel, SQL, Python and visualisation tools such as Power BI can each support parts of that workflow. This is general background, not a list of what was demonstrated at the visit."
   ],
   [
    "How it connects to my learning",
    "I have used Excel for my spreadsheet projects and completed beginner courses in Power BI, SQL and Python. The visit gave me an overview of where these skills fit in data work."
   ]
  ],
  "outcomes": [
   "An introductory view of the Data Science workflow, from data collection to interpretation.",
   "Why cleaning data and checking accuracy matter before any analysis.",
   "A general understanding of how Excel, SQL, Python and visualisation tools can fit into data work.",
   "A clearer idea of the learning path I can follow: strengthening Excel and Power BI, and continuing with SQL and Python.",
   "How classroom concepts connect to practical applications in the industry."
  ],
  "note": "These are general learning takeaways from an introductory visit, not project work."
 },
 {
  "id": "v2",
  "title": "DUCAT Faridabad — BCA Career Domains, AI Tools and Prompt Engineering",
  "date": "",
  "desc": "A college industrial visit to DUCAT, Faridabad, on career options for BCA students, AI tools and prompt writing.",
  "cert": "",
  "sections": [
   [
    "Visit details",
    "A college-organized industrial visit to DUCAT, Faridabad."
   ],
   [
    "Purpose",
    "To learn about the career options open to BCA students, and to understand how AI tools and clear prompts can support study and work."
   ],
   [
    "Topics explored",
    "Career domains and technology fields for BCA students; different AI tools and the kinds of tasks they suit; how to choose an AI tool for a task; and prompt engineering, including the CRAFT method."
   ],
   [
    "The CRAFT method",
    "CRAFT stands for Context, Role, Action, Format and Tweaks. Context gives the background of the task, Role tells the AI who to act as, Action says exactly what to do, Format sets how the answer should look, and Tweaks means refining the answer with follow-up instructions."
   ],
   [
    "Career domains (general information)",
    "Examples a BCA student can consider include data analytics, software and web development, cloud computing, cybersecurity, AI and machine learning, and UI/UX design."
   ],
   [
    "AI tools and their typical uses (illustrative)",
    "Chat assistants such as ChatGPT, Claude and Gemini suit writing, explaining and brainstorming. NotebookLM suits working with your own notes and documents. Canva with AI suits design work. These are typical uses, not a record of the tools demonstrated at the visit."
   ],
   [
    "Link to my AI course",
    "I also studied AI concepts in the separate YUVA AI For ALL course. The two experiences are separate, and I connect the ideas from both in my own learning."
   ]
  ],
  "outcomes": [
   "Learned about the career domains available to BCA students.",
   "Learned that different AI tools suit different tasks, and that choosing a tool starts with the task.",
   "Learned to structure prompts with the CRAFT method: Context, Role, Action, Format and Tweaks.",
   "Understood that clear context, specific instructions and a stated output format give better AI responses, and that tweaking a prompt improves them further.",
   "Saw how prompt skills can support my goal of working in technology and data analytics."
  ],
  "note": "Examples of career domains and AI tools are general information."
 },
 {
  "id": "v3",
  "title": "IoT Academy, Noida — IoT, Computer Vision and Practical AI Models",
  "date": "",
  "desc": "A college industrial visit to IoT Academy, Noida, to observe helmet detection and face recognition models.",
  "cert": "",
  "sections": [
   [
    "Visit details",
    "A college-organized industrial visit to IoT Academy, Noida."
   ],
   [
    "Purpose",
    "To see how AI, computer vision and IoT ideas are applied to practical problems."
   ],
   [
    "Models observed",
    "Helmet detection, which identifies motorcyclists who are not wearing helmets for road safety, and face recognition, as used in attendance and security applications. I observed these models and learned how they work; I did not build, train, deploy or test them."
   ],
   [
    "How such models work (general explanation)",
    "A camera captures images or video. Image processing prepares each frame. A model trained on many labelled examples looks for visual patterns and gives a prediction or detection result. Software then acts on it, for example by flagging a rider without a helmet or marking attendance. This explains the general principle, not the specifics of the models at the visit."
   ],
   [
    "Applications and limitations (general)",
    "These systems can support road safety, faster attendance and access control. Poor lighting, camera angles, blocked views and look-alike objects can cause false detections, so accuracy needs checking."
   ],
   [
    "Privacy and consent",
    "Face recognition uses personal data. Consent, secure storage and clear rules on how the data is used are important."
   ]
  ],
  "outcomes": [
   "Saw how AI, computer vision and IoT concepts are applied to real problems such as road safety and attendance.",
   "Learned the basic idea behind helmet detection and face recognition: images in, patterns recognised, a result out.",
   "Understood that camera, image processing, a trained model and software work together as one system.",
   "Understood that false detections can happen, so accuracy needs to be checked.",
   "Learned why privacy and consent matter when systems use faces or personal data.",
   "Saw how theory connects to a working application."
  ],
  "note": "The working principles above are general explanations, not details of the specific models shown."
 },
 {
  "id": "v4",
  "title": "CodeSquadz, Noida — Understanding the Data Analyst Role",
  "date": "",
  "desc": "A college industrial visit to CodeSquadz, Noida, to learn what a Data Analyst does and how to prepare for the role.",
  "cert": "",
  "sections": [
   [
    "Visit details",
    "A college-organized industrial visit to CodeSquadz, Noida. This was a learning visit."
   ],
   [
    "Purpose",
    "To understand what a Data Analyst does, which tools and skills the role uses, and how a student can prepare for entry-level data analytics opportunities."
   ],
   [
    "Responsibilities of a Data Analyst (general knowledge)",
    "Collecting and cleaning data, analysing it, building reports and dashboards, and explaining findings so that others can make better decisions."
   ],
   [
    "A typical analysis workflow (general knowledge)",
    "Understand the business question, collect the data, clean and check it, analyse it, visualise the results, and share the findings in plain language."
   ],
   [
    "Tools (general knowledge)",
    "Excel for tables, formulas and quick analysis; SQL to get data from databases; Power BI for dashboards; Python for cleaning and larger analysis. This is general industry knowledge, not a list of what was shown at the visit."
   ],
   [
    "How it connects to my learning",
    "My Excel projects (sales tracker, payroll, inventory, filtering and data cleaning), my Power BI course, and my SQL and Python beginner courses all fit into this workflow, and they support my goal of becoming a Data Analyst."
   ]
  ],
  "outcomes": [
   "Understood what a Data Analyst does and what the role is responsible for.",
   "Learned how a business question is turned into data work and then into a useful insight.",
   "Understood why data cleaning, accuracy, visualisation and clear communication matter.",
   "Learned which tools and skills the role commonly uses: Excel, SQL, Power BI and Python.",
   "Gained a clearer picture of how to prepare for entry-level data analytics opportunities, by continuing practical projects and skill-building."
  ],
  "note": "Tools and workflows are general industry knowledge unless stated otherwise."
 }
];
