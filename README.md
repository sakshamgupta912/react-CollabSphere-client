# CollabSphere - A MERN Application in Azure ☁️

CollabSphere is a versatile collaboration tool platform built using the MERN stack (MongoDB, Express.js, React, Node.js). It can be deployed either on-premises or in the cloud, ensuring data integrity within the organization. This platform offers a range of features to enhance collaboration and communication:

![image](https://github.com/sakshamgupta912/react-CollabSphere-client/assets/112967198/f55dd077-9190-4ef7-a183-89e39da51d03)

- 🏢 **Creating Room:** Create dedicated collaboration spaces for various projects or teams.
- 🚀 **Joining Room:** Join existing rooms to collaborate with team members.
- 🔊 **Announcements:** Make important announcements within rooms to keep all members informed.
- 📚 **Assignments:** Create, add, and upload assignments to share with room members.
- 📂 **File Sharing:** Easily share files and documents among room members.
- 💬 **Chat:** Engage in real-time text-based communication with your team.

## Deployment 🚀

The client application is deployed on Azure Web App, ensuring scalability and reliability. You can access it using the following link:

[CollabSphere Client](https://collabsphereclient.azurewebsites.net#/)
Note:The site is using free Azure services due to which the site is slow and may take longer time to load then expected.

## Azure Implementation

CollabSphere leverages various Azure services to power its functionality:

- **Resource Group:** This is used to organize and manage related Azure resources, ensuring efficient resource management.
![Resource Group](https://github.com/sakshamgupta912/react-CollabSphere-client/assets/112967198/3c66c6db-015e-44a6-acec-65840b32983b)

- **Server App Service:** This hosts the server-side application, handling backend logic and APIs.
![Server App Service](https://github.com/sakshamgupta912/react-CollabSphere-client/assets/112967198/107f23b6-e38b-4229-8a90-fc889a4dd2b2)

- **Client App Service:** The client application is hosted here, allowing users to interact with the CollabSphere platform.
![Client App Service](https://github.com/sakshamgupta912/react-CollabSphere-client/assets/112967198/dfc8be42-d4aa-4d3f-90b6-caf5196871de)

- **Cosmos DB for MongoDB:** This NoSQL database service stores and manages the data for CollabSphere.
![Cosmos DB for MongoDB](https://github.com/sakshamgupta912/react-CollabSphere-client/assets/112967198/96f6b0b3-ee9e-4150-acd9-581ea4cc49ba)

### Example Login Credentials

- 📧 Email: example@gmail.com
- 🔑 Password: example12345

## Project Structure 🏗️

The CollabSphere project is organized as follows:

- 🚪 **Login Page:** A page where users can log in to their accounts.
- 📝 **Register Page:** A page for new users to register.
- 🏠 **Landing Page:** The landing page serves as the home screen for users.
  - 🏡 **Home:** The default landing page with an overview of the user's rooms.
  - 📅 **Assignments:** A section where assignments are listed and managed.
  - 💬 **Chat:** Real-time chat functionality.
- 🛋️ **Room Page:** When users enter a room, they have access to the following features:
  - 🔊 **Announcements:** View and create room-specific announcements.
  - 📚 **Assignments:** Access and manage assignments related to the room.
  - 📂 **Files:** Share and access files relevant to the room.
  - 💬 **Chat:** Collaborate in real-time with room members.

## Installation 🛠️

To set up CollabSphere locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/CollabSphere.git

2. Change to the project directory:

   ```bash
   cd CollabSphere

3. Install the required dependencies using npm:

   ```bash
   npm install
   
4. Start the development server:

   ```bash
   npm start
