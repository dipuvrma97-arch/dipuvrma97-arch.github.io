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
const CERT_GROUPS=["Data Analytics Skills","Office and Design Tools","AI Skills and Tools","Events and Participation"];
const CERTS=[
 {t:"Microsoft Excel Beginners To Advance",org:"SkillCourse",date:"26 August 2026",cat:"Data Analytics Skills",img:"images/cert-excel.jpg",url:"",id:"SC-4UFR3M6XRA"},
 {t:"30 Days Power BI Micro Course",org:"SkillCourse",date:"26 August 2026",cat:"Data Analytics Skills",img:"images/cert-powerbi.jpg",url:"",id:"SC-S8G3TEYZK0"},
 {t:"MS Word Complete Course: Basics to Advanced Features",org:"Cursa",date:"2 October 2026",cat:"Office and Design Tools",img:"images/cert-word.jpg",url:"",id:""},
 {t:"Canva Tool for Beginners",org:"Cursa",date:"2 October 2026",cat:"Office and Design Tools",img:"images/cert-canva.jpg",url:"",id:""},
 {t:"Prompt Engineering: Beginner's Course",org:"Gyaan-E, powered by Physics Wallah",date:"",cat:"AI Skills and Tools",img:"images/cert-prompt-engineering.jpg",url:"",id:"GYN0000013714"},
 {t:"Claude: Beginner's Course",org:"Gyaan-E, powered by Physics Wallah",date:"",cat:"AI Skills and Tools",img:"images/cert-claude.jpg",url:"",id:"GYN0000008336"},
 {t:"Google Gemini: Beginner's Course",org:"Gyaan-E, powered by Physics Wallah",date:"",cat:"AI Skills and Tools",img:"images/cert-gemini.jpg",url:"",id:"GYN0000014783"},
 {t:"YUVA AI For ALL (Hindi)",org:"NIELIT • NCVET-recognised • NSQF Level 2",date:"23 June 2026",cat:"AI Skills and Tools",img:"images/cert-yuva-ai.jpg",url:"",id:""},
 {t:"AI Tools & Claude Workshop",org:"be10X",date:"9 October 2026",cat:"AI Skills and Tools",img:"images/cert-be10x.jpg",url:"",id:""},
 {t:"Viksit Bharat Young Leaders Dialogue (VBYLD) 2027 — Online Quiz Participation",org:"MY Bharat • Ministry of Youth Affairs & Sports",date:"11 September 2026",cat:"Events and Participation",img:"images/cert-vbyld.jpg",url:"",id:"",type:"Online quiz participation"},
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
