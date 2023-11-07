# CollabSphere 👥🌐

CollabSphere is a versatile collaboration tool platform that can be deployed either on-premises or in the cloud, ensuring data integrity within the organization. This platform offers a range of features to enhance collaboration and communication:

- 🏢 **Creating Room:** Create dedicated collaboration spaces for various projects or teams.
- 🚀 **Joining Room:** Join existing rooms to collaborate with team members.
- 🔊 **Announcements:** Make important announcements within rooms to keep all members informed.
- 📚 **Assignments:** Create, add, and upload assignments to share with room members.
- 📂 **File Sharing:** Easily share files and documents among room members.
- 💬 **Chat:** Engage in real-time text-based communication with your team.

## Deployment 🚀

The client application is deployed on Azure Web App. You can access it using the following link:

[CollabSphere Client](https://collabsphereclient.azurewebsites.net#/)

## Azure Implementation
Resource Group:
![image](https://github.com/sakshamgupta912/react-CollabSphere-client/assets/112967198/3c66c6db-015e-44a6-acec-65840b32983b)

Server App Service:
![image](https://github.com/sakshamgupta912/react-CollabSphere-client/assets/112967198/107f23b6-e38b-4229-8a90-fc889a4dd2b2)

Client App Service:
![image](https://github.com/sakshamgupta912/react-CollabSphere-client/assets/112967198/dfc8be42-d4aa-4d3f-90b6-caf5196871de)

Cosmos DB for MongoDB:
![image](https://github.com/sakshamgupta912/react-CollabSphere-client/assets/112967198/96f6b0b3-ee9e-4150-acd9-581ea4cc49ba)


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
