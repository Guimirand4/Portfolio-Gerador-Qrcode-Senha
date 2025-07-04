import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result){
    if(err) {
        console.error("An error occurred:", err);
        return;
    }

    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, (qrcode) => {1  
            console.log(qrcode);
        
    });
}

export default handle;