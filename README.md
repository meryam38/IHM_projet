Chat Boot Project

This is a simple chat bot project that allows users to communicate with a chat bot (roobex) via a web interface.

+Project Structure

The project is divided into two main folders:

client: This folder contains the front-end code for the chat bot web interface. It was built with React and makes requests to the server via a REST API.
server: This folder contains the back-end code for the chat bot server. It was built with Node.js, core and Express and provides a REST API for the client to communicate with.
+Setup

To run this project on your local machine, you will need to follow these steps:

1-Clone this repository to your local machine.
2-Open a terminal window and navigate to the client folder.
3-Install the necessary dependencies by running npm install.
4-Start the client by running `npm run dev`.
5-Open another terminal window and navigate to the server folder.
6-Rename .env.example to .env and replace the YOUR_OPENAI_API_KEY placeholder with your actual OpenAI API key.
7-Start the server by running `npm run server`
8-The client should now be accessible at http://localhost:3000 and the server should be running at http://localhost:5000.



+Contributing
Contributions are welcome! If you find a bug or have a suggestion for a new feature, please create an issue or submit a pull request.

+License
This project is licensed under the MIT License - see the LICENSE file for details.





