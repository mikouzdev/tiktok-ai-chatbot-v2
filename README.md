# TikTok AI Chatbot V2

Responds to comments during TikTok live sessions using OpenAI ChatGPT API and ElevenLabs Text-To-Speech.
DISCLAIMER: This project is not being updated. (2023)

## Setting Up

To begin, clone this repository onto your local machine using this command:

```bash
git clone https://github.com/mikouzdev/tiktok-ai-chatbot-v2.git
```


After cloning, navigate to the project directory and install the required dependencies for both frontend and backend with this command:

```bash
cd tiktok-ai-chatbot-v2
npm install
```


## How to Use
### Configuration
Start by renaming the file named ``.env.template`` to ``.env``. <br>
Then, open the ``.env`` file and update these variables: <br>

``OPENAI_API_KEY``: Set this to your OpenAI API key. <br>
``USE_TTS``: Set this to ``true`` if you want to enable Text-To-Speech. <br>
``TTS_API_KEY``: Set this to your ElevenLabs API key. <br>
``ELEVEN_LABS_VOICE_ID``: Set this to the ElevenLabs voiceID you want to use. <br>

Note that Text-To-Speech usage is optional. <br>
If you prefer not to use it, simply leave the ``USE_TTS`` variable empty. <br>

### Launching the Application
To start the frontend, execute the following command: <br>
```bash
npm run start
```
This initiates the React development server and opens the app in your default browser at `http://localhost:3000/`. <br>


To start the Node.js backend, run this command: <br>
```bash
node server/server.js
```
This launches the server, enabling it to receive comments from a TikTok Live and interact with OpenAI's API.

## APIs Used
[OpenAI ChatGPT API](https://platform.openai.com/docs/guides/chat): Generates natural language responses to comments during a TikTok live. <br>
[ElevenLabs API](https://docs.elevenlabs.io/quickstart): Allows Text-To-Speech functionality, enabling AI-generated responses to be spoken aloud.
