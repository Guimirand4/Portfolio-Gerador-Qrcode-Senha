<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,100:434343&height=140&section=header&text=🔐%20Password%20+%20QR%20Code%20Generator&fontSize=30&fontAlignY=35&fontColor=ffffff"/> <p align="center"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-ESM-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000"/> <img src="https://img.shields.io/badge/Dotenv-Config-8DD6F9?style=for-the-badge"/> <img src="https://img.shields.io/badge/QR--Code-Terminal-black?style=for-the-badge"/> </p>
💡 About the Project
A simple, straight-to-the-point, and super useful utility for developers' daily workflow!

This Node.js project offers two main features:

🔐 Secure Password Generator fully customizable via .env

📱 QR Code Generator directly in the terminal for any link you want

Built to be practical, fast, and efficient! 🚀

🛠️ Technologies Used
🟩 Node.js — JavaScript runtime environment for the server

🧪 dotenv — environment variable loader

📦 qrcode-terminal — library to display QR codes in the terminal

🟨 JavaScript (ESM) — modern module system

⚙️ Configuration via .env
Easily customize the generator behavior:

env
Copiar
Editar
# 🔐 Password Generation
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=12

# 📱 QR Code Generation
URL=https://www.example.com
