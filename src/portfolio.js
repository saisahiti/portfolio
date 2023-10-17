/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sai Sahiti Chittem",
  title: "Hello all, I am Sai Sahiti Chittem",
  subTitle: emoji(
    "I am pursuing Masters in Data Science at University at Buffalo (December 2023), passionate about using data to improve lives"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1RxUAPyW8kAtSZ7hd3dwb7WCntCC_hjig/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saisahiti",
  linkedin: "https://www.linkedin.com/in/sahiti-chittem/",
  gmail: "schittem@buffalo.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "OOPs",
      fontAwesomeClassname: "far fa-user"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "tableau",
      fontAwesomeClassname: "fas fa-chart-pie"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University at Buffalo",
      logo: require("./assets/images/ub logo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "August 2022 - December 2023",
      desc: "Coursework",
      descBullets: [
        "Statistical Data Mining I (Unsupervised and Supervised Learning), Python Programming",
        "Probability Data Analysis Using R, DBMS, Cybersecurity Privacy and ethics, Machine Learning, Deep Learning"
      ]
    },
    {
      schoolName: "Chaitanya Bharathi Institute of Technology",
      logo: require("./assets/images/cbit logo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2020 - September 2020"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "University at Buffalo",
      companylogo: require("./assets/images/bull_logo.jpeg"),
      date: "May 2023 – August 2023",
      descBullets: [
        "Analyzed TEDS data to determine Opioid Use Disorder (OUD) prevalence and identified key trends, informing healthcare policies for OUD crisis management",
        "Innovated the use of Generative Adversarial Networks (GANs) to replicate real-world OUD data patterns, achieving a 70% accuracy in generating synthetic OUD data"
      ]
    },
    {
      role: "Software Engineer II",
      company: "JPMorgan Chase",
      companylogo: require("./assets/images/jpmc logo.png"),
      date: "August 2020 – July 2022",
      descBullets: [
        "Leveraged a Spring-Boot API for ADLDS and Sybase database interfacing, resulting in an 80% efficiency boost in transfers",
        "Developed a Python script that accurately compared over 10,000 records across multiple databases with an impressive 95% accuracy rate.",
        "Enhanced Migration application to facilitate seamless communication among various databases, handling over 100,000 records efficiently.",
        "Created a ReactJS-Spring Boot dashboard that significantly improved team productivity by 40%, serving more than 50 team members.",
        "Collaborated with a nonprofit website, boosting engagement by 25% for the Center for Historic Houses.",
        "Embraced agile practices which improved overall product development productivity"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "JPMorgan Chase",
      companylogo: require("./assets/images/jpmc logo.png"),
      date: "Jan 2020 – July 2020",
      descBullets: [
        "Gained expertise in Core Java, LDAP, and Spring Boot through dedicated professional development, enhancing technical skills",
        "Proficiently implemented a Spring-Boot application, facilitating seamless cross-database interaction",
        "Mastered software testing via unit and integration testing across multiple projects",
        "Acquired proficiency in setting up and maintaining CI/CD pipelines using Jenkins, resulting in increased efficiency",
        "Demonstrated an in-depth understanding of nuances like Splunk dashboard and Swagger configurations"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const personalProjects = {
  title: "Personal Projects",
  projects: [
    {
      image: require("./assets/images/stock-trading.jpeg"),
      projectName: "Real-Time NYSE Stock Trading Platform",
      projectDesc: "The platform leverages React.js to provide a dynamic and interactive user experience, while Kafka ensures that data streams are delivered to traders in real time. This combination of technologies enables traders to make informed decisions quickly and efficiently. The platform's stock charts offer traders a variety of visualization options, such as line charts, bar charts, and candlestick charts. This allows traders to track stock prices over time and identify patterns and trends. Additionally, the platform provides traders with access to news and analysis from leading financial institutions. This platform is a valuable tool for traders of all levels of experience. It provides them with the data and insights they need to make informed trading decisions.",
    },
    {
      image: require("./assets/images/supply-chain.jpg"),
      projectName: "Automated Supply Chain Management System",
      projectDesc: "This project represents an innovative approach to optimizing supply chain management by automating the flow of goods and services. It aims to eliminate the inefficiencies and error-prone nature of manual systems. The primary objective is to create a secure and robust Supply Chain Management System that comprehensively tracks product availability, inventory, clients, dealers, payments, transactions, orders, and history. By leveraging technologies such as Java and MySQL, along with a structured software engineering approach, this digital solution promises enhanced speed, accuracy, and reliability in supply chain operations, ultimately ensuring timely product deliveries.",
    },
    {
      image: require("./assets/images/tableau.png"),
      projectName: "Retail Sales Analysis and Visualization",
      projectDesc: "This project is a testament to my proficiency in data analytics and Tableau visualization techniques. Focused on optimizing sales performance for a retail business, it encapsulates a meticulously structured journey through the realm of data-driven insights. Beginning with data collection and rigorous cleaning, the project ensures data reliability. It progresses to in-depth data exploration, defining key performance metrics, and crafting captivating Tableau visualizations, including interactive dashboards, bar charts, line graphs, heatmaps, and geographical maps. The application of Tableau's versatility extends to customer segmentation, sales forecasting, and A/B testing, providing actionable insights that have the potential to reshape sales strategies and amplify revenue. The project's user-friendly Tableau dashboards ensure real-time access to insights.",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const projects = {
  title: "Academic Projects",
  projects: [
    {
      image: require("./assets/images/xgboost.png"),
      projectName: "Prediction of House Prices using XGBoost",
      projectDesc: "Constructed and assessed various machine learning models, including XGBoost, Ridge, Lasso, and Random Forest, to predict property prices. After rigorous evaluation, the XGBoost model emerged as the top performer, achieving an impressive 90% accuracy rate. This success was achieved while working with a housing dataset comprising 1,460 rows and 81 diverse features related to housing. The utilization of XGBoost in this context not only demonstrates its superior predictive capabilities but also underscores its suitability for handling complex real estate datasets                                                                                                                                                                                                     "
    },
    {
      image: require("./assets/images/captcha-image.png"),
      projectName: "Captcha Recognition using Deep Learning",
      projectDesc: "Significantly bolstered website security through the implementation of a robust strategy. Involved the development of a Convolutional Neural Network (CNN) capable of accurately identifying single-letter CAPTCHAs, thus fortifying our defense against automated threats. Designed a multi-CNN system tailored to tackle more intricate CAPTCHAs, further enhancing our protection against increasingly sophisticated malicious activities. This proactive approach not only ensures the safeguarding of sensitive user data but also exemplifies our commitment to staying ahead of evolving cybersecurity challenges."
    },
    {
      image: require("./assets/images/sql.jpeg"),
      projectName: "Wireless Inventory Management System",
      projectDesc: "This project underscores the design and implementation of an agile and robust SQL-based inventory management system, an accomplishment that streamlined operations and fortified data accuracy. The project also entailed the execution of intricate ER diagram designs, meticulous structuring of database schemas, and the formulation of UML diagrams, all of which collectively contributed to a substantial enhancement in system efficiency. This innovative approach fosters seamless inventory management while reducing operational redundancies and errors, ultimately resulting in a more efficient and reliable system."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements, Certifications and Hackathons 🏆 "),
  subtitle:
    "Achievements, Certifications, Hackathons and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Developer",
      subtitle:
        "Proud to have achieved te AWS Certified Developer Associate certification, this validates my expertise in developing and deploying applications on the Amazon web services cloud platform. ",
      image: require("./assets/images/aws.png")
    },
    {
      title: "Apache Kafka V3 Certification",
      subtitle:
        "Proud to have earned the Apache Kafka V3 certification, showcases my proficiency in utilizing Kafka's powerful streaming platform for building real-time data pipelines and event-driven applications. This certification solidifies my skills in managing data streams and reinforces my commitment to staying at the forefront of modern data engineering technologies.",
      image: require("./assets/images/kafka.jpeg")
    },
    {
      title: "Code for Good Hackathon 2019",
      subtitle: "Earning the 2nd prize in the 2019 Code for Good hackathon was a rewarding achievement, underscoring the effective teamwork of our six-member group in crafting a Java-Firebase Android app. Our project not only highlighted our technical skills but also emphasized our dedication to utilizing technology for positive social change, a commitment that continues to drive our endeavors.",
      image: require("./assets/images/cfg.jpeg")
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 716-808-3999",
  email_address: "schittem@buffalo.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  projects,
  personalProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
