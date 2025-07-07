import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
    console.log(chalk.green("Password"));
    try {
        const password = await handle();
        console.log(chalk.blue("Sua senha é: " + password));
    } catch (error) {
        console.error(chalk.red("Erro ao gerar a senha: " + error.message));
    }
}

export default createPassword;