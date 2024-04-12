const webDev = [
  "The introduction of responsive web design has revolutionized how websites are built and accessed. With the proliferation of mobile devices, responsive design allows websites to adapt and provide optimal viewing experiences across various screen sizes and devices. This shift has led to greater accessibility and improved user experiences on the web.",

  "The evolution of web browsers and web standards has played a significant role in advancing web development. Modern browsers like Google Chrome, Mozilla Firefox, and Safari have implemented support for the latest web technologies and standards, enabling developers to leverage cutting-edge features and capabilities in their web applications.",

  "The adoption of progressive web apps (PWAs) has transformed the way users interact with web applications. PWAs combine the best of web and native mobile apps, offering features such as offline functionality, push notifications, and installation prompts. This approach has blurred the lines between web and mobile experiences, providing users with seamless and engaging experiences across platforms.",

  "The growth of the Jamstack architecture has revolutionized how developers build and deploy web applications. By decoupling the frontend and backend, Jamstack enables developers to leverage pre-rendered content, static site generators, and serverless functions for improved performance, security, and scalability. This shift has empowered developers to deliver faster and more resilient web experiences to users.",

  "The rise of microservices architecture has transformed the way web applications are developed and maintained. By breaking down applications into smaller, loosely coupled services, developers can achieve greater flexibility, scalability, and resilience. Microservices enable teams to work independently on different components of an application, leading to faster development cycles and improved agility.",

  "The emergence of headless CMS (Content Management System) solutions has revolutionized content management for web development. Unlike traditional CMS platforms, headless CMS decouples the content management backend from the frontend presentation layer, allowing developers to use any technology stack or framework to build their websites. This approach provides greater flexibility, scalability, and customization options for content-driven applications.",

  "The proliferation of APIs (Application Programming Interfaces) has opened up new possibilities for integrating third-party services and data into web applications. APIs enable developers to access a wide range of functionalities and resources from external providers, such as social media platforms, payment gateways, and geolocation services. This integration capability has enriched the functionality and user experience of web applications.",

  "The adoption of containerization technology, such as Docker, has revolutionized the way web applications are deployed and managed. Containers provide lightweight, portable environments that encapsulate application code, dependencies, and configurations, enabling consistent deployment across different environments and platforms. Container orchestration platforms like Kubernetes further simplify the management and scaling of containerized applications in production environments.",

  "The evolution of front-end frameworks and libraries, such as React, Angular, and Vue.js, has accelerated the development of modern web applications. These frameworks offer powerful features for building interactive user interfaces, managing state, and handling data, resulting in faster development cycles and improved developer productivity. Their component-based architecture and declarative syntax have become standard practices in web development.",

  "The rise of serverless computing has revolutionized backend development by abstracting away infrastructure management and scaling concerns. Serverless platforms, such as AWS Lambda and Azure Functions, allow developers to focus on writing code without the need to provision or manage servers. This paradigm shift enables faster development cycles, reduced operational overhead, and cost-effective scaling for web applications.",

  "The adoption of modern development practices, such as continuous integration/continuous deployment (CI/CD) and test-driven development (TDD), has transformed how web applications are built and released. CI/CD pipelines automate the build, test, and deployment processes, enabling developers to deliver high-quality code changes more frequently and reliably. TDD encourages developers to write tests before implementing features, leading to better code quality and maintainability.",

  "The increasing emphasis on web accessibility has led to significant improvements in ensuring that web applications are usable by people with disabilities. Accessibility standards, guidelines, and tools help developers create inclusive web experiences that accommodate users with diverse needs and abilities. By prioritizing accessibility in web development, developers can enhance usability, reach a broader audience, and promote digital inclusivity.",

  "The integration of artificial intelligence (AI) and machine learning (ML) technologies into web development has opened up new possibilities for creating intelligent and personalized user experiences. AI-powered features, such as chatbots, recommendation systems, and predictive analytics, enhance the functionality and engagement of web applications. By leveraging AI and ML, developers can deliver more relevant content, automate repetitive tasks, and improve user satisfaction.",

  "The growing importance of cybersecurity in web development has prompted developers to prioritize security practices and protocols throughout the development lifecycle. Secure coding practices, encryption techniques, and vulnerability scanning tools help developers identify and mitigate security risks in web applications. By adopting a proactive approach to cybersecurity, developers can safeguard sensitive data, protect against cyber threats, and build trust with users.",

  "The democratization of web development tools and resources has empowered individuals from diverse backgrounds to learn and create web applications. Online tutorials, courses, and open-source projects provide accessible pathways for aspiring developers to acquire skills and build their portfolios. The vibrant developer community fosters collaboration, knowledge sharing, and innovation, driving the continued evolution of web development.",
];

function shuffle(array) {
    const shuffledArray = [...array]; // Create a copy of the original array
    let currentIndex = shuffledArray.length;
    
    while (currentIndex !== 0) {
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[currentIndex],
      ];
    }
    
    return shuffledArray; // Return the shuffled array
  }

const paraInput = document.querySelector("#paragraph-input");
const paragraphs = document.querySelector("#paragraph");
const button = document.querySelector("#button");
button.addEventListener("click", function (event) {
  console.log(paraInput.value);
  if (paraInput.value == 0 || paraInput.value < 0 || paraInput.value > 15) {
    const randomIndex = Math.floor(Math.random() * webDev.length);
    paragraphs.innerHTML = `<li>${webDev[randomIndex]}</li>`;
  } else {
    const localWebDev = shuffle(webDev);
    const data = localWebDev.slice(0, paraInput.value);
    console.log(data);
    const paras = data.map((d) => {
      return `<li>${d}</li>`;
    });
    paragraphs.innerHTML = paras.join(""); //Array to string Conversion
  }
});
