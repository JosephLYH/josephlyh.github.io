const header = {
  homepage: 'https://josephlyh.github.io',
  title: 'JL.',
}

const about = {
  name: 'Lam Yuen Ho Joseph',
  role: 'Software Engineer',
  description:
    'Passionate in developing software applications and solving problems.',
  resume: 'Resume_2024_03_04.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/lam-yuen-ho-joseph',
    github: 'https://github.com/JosephLYH',
    email: 'yuenholam@gmail.com',
    mobile: '+85291726708',
  },
}

const projects = [
  {
    name: 'Court Booking Bot with Captcha Solver',
    description:
      'A bot that automates the booking of courts. It is able to solve simple captchas and book courts automatically.',
    stack: ['Python, Tensorflow'],
    sourceCode: 'https://github.com/JosephLYH/HKUCSE_Captcha_Breaking',
    livePreview: '',
  },
]

const blog = [
  {
    id: 0,
    timestamp: '2024-04-10T22:01:04+08:00',
    title: 'Hello World!',
    description: 'This is my first blog post!',
    content: [
      'This is my first blog post! I will be sharing my thoughts and experiences here. Stay tuned!',
    ],
  },
  {
    id: 1,
    timestamp: '2024-04-10T23:01:04+08:00',
    title: 'Demystifying gRPC: A Deep Dive into Modern RPC',
    description:
      'The world of microservices thrives on inter-service/process communication, and gRPC has emerged as a powerful contender in this space. But what exactly is gRPC?',
    content: [
      `gRPC: A Brief Overview`,

      `gRPC is an open-source framework developed by Google. 
      It allows you to define RPC (Remote Procedure Call) services and automatically generate client libraries for various languages. 
      Essentially, it simplifies how your applications communicate with each other, regardless of where they are running.`,

      `Why Choose gRPC?`,

      `High Performance: gRPC utilizes HTTP/2 for transport, offering significant performance benefits like bidirectional streaming, flow control, and header compression. 
      This translates to faster and more efficient communication between services.`,

      `Language Agnostic: gRPC supports a wide range of programming languages, including C++, Java, Python, Go, and more. 
      This flexibility allows diverse teams to collaborate seamlessly on projects.`,

      `Strongly Typed: gRPC leverages Protocol Buffers for data serialization. 
      This ensures efficient data exchange and provides strong typing, leading to fewer errors and improved code maintainability.`,

      `Code Generation: gRPC eliminates the need for manual serialization and deserialization code. 
      It automatically generates client and server-side code based on your service definitions, saving you time and effort.`,

      `How Does gRPC Work?`,

      `The core of gRPC lies in defining a service using Protocol Buffers. 
      You specify the methods, parameters, and return types for your service. 
      gRPC then takes this definition and generates the necessary code for both the client and server.`,

      `1. Define Service: You create a .proto file that defines your service interface using Protocol Buffers syntax.`,
      `2. Generate Code: The gRPC compiler uses the .proto file to generate client and server code in your chosen language.`,
      `3. Implement Server: You implement the server-side logic for each defined method in your service.`,
      `4. Call Service: The client application uses the generated client library to call methods on the server as if it were a local object.`,

      `When to Use gRPC?`,

      `Performance is critical: If your application demands low latency and high throughput, gRPC's efficient communication protocol is ideal.`,
      `Polyglot environment: When your project involves multiple programming languages, gRPC's language-agnostic nature ensures smooth communication between services.`,
      `Microservices architecture: gRPC is well-suited for microservices communication due to its lightweight nature and support for streaming.`,

      `Conclusion`,

      `gRPC offers a powerful and efficient way to connect your services, making it a valuable tool for modern application development. 
      Its performance, flexibility, and ease of use have positioned it as a leading choice for building robust and scalable microservices architectures. 
      As you explore options for inter-service communication, consider giving gRPC a try – it might just become your go-to solution.`,
    ],
  },
]

const skills = [
  'Git',
  'SQL',
  'Python',
  'C/C++',
  'Lua',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Docker',
  'AWS',
]

const useContact = null

export { header, about, projects, skills, useContact, blog }
