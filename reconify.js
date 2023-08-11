const readline = require('readline');
const { exec } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("[*]=============================================[*]");
console.log("[*]                                             [*]");
console.log("[*]         Welcome to Recon Automation         [*]");
console.log("[*]                                             [*]");
console.log("[*]           tool is created  by               [*]");
console.log("[*]                   0xwhitedevil              [*]");
console.log("[*]                                             [*]");
console.log("[*]   https://www.instagram.com/0xwhitedevil/   [*]");
console.log("[*]=============================================[*]");
console.log("                                                                  ");

rl.question("-->> Domain ex: example.com :", (domain) => {
  rl.question("-->> PORT httprobe          :", (port) => {
    console.log("                                                                  ");
    console.log("                                                                  ");

    console.log(`created a directory : ${domain}`);
    exec(`mkdir ${domain}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error creating directory: ${error.message}`);
        return;
      }
      console.log("                                                                  ");
      console.log("                                                                  ");

      console.log("[*]=============================================[*]");
      console.log("                                                   ");
      console.log(`        assetfinder --subs-only ${domain}            `);
      console.log("                                                   ");
      console.log("[*]=============================================[*]");
      console.log("                                                                  ");
      console.log("                                                                  ");
      exec(`assetfinder --subs-only ${domain} | anew ${domain}/assetfinder_${domain}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error running assetfinder: ${error.message}`);
          return;
        }
        console.log("                                                                  ");
        console.log("                                                                  ");

        console.log("[*]=============================================[*]");
        console.log("                                                   ");
        console.log(`               cd ${domain}                      `);
        console.log("                                                   ");
        console.log("[*]=============================================[*]");
        console.log("                                                                  ");
        console.log("                                                                  ");
        exec(`cd ${domain}`, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error changing directory: ${error.message}`);
            return;
          }
          console.log("                                                                  ");
          console.log("                                                                  ");

          console.log("[*]=============================================[*]");
          console.log("                                                   ");
          console.log("               httpx running  statuscode           ");
          console.log("                                                   ");
          console.log("                                                   ");
          console.log("[*]=============================================[*]");
          console.log("                                                   ");
          console.log("                                                   ");
          exec(`cat assetfinder_${domain} | httpx -status-code | anew ${domain}/statuscode_${domain}`, (error, stdout, stderr) => {
            if (error) {
              console.error(`Error running httpx: ${error.message}`);
              return;
            }
            console.log("                                                                  ");
            console.log("                                                                  ");

            console.log("[*]=============================================[*]");
            console.log("                                                   ");
            console.log("             httprobe running                      ");
            console.log("                                                   ");
            console.log("[*]=============================================[*]");
            console.log("                                                                  ");
            console.log("                                                                  ");
            exec(`cat assetfinder_${domain} | httprobe -c ${port} | anew httprobe_${domain}`, (error, stdout, stderr) => {
              if (error) {
                console.error(`Error running httprobe: ${error.message}`);
                return;
              }
              console.log("                                                                  ");
              console.log("                                                                  ");

              console.log("[*]=============================================[*]");
              console.log("                                                   ");
              console.log("               fff running  statuscode             ");
              console.log("                         &                         ");
              console.log("                hole domain html body              ");
              console.log("                                                   ");
              console.log("[*]=============================================[*]");
              exec(`cat httprobe_${domain} | fff -d 1 -S -o statusc_${domain}`, (error, stdout, stderr) => {
                if (error) {
                  console.error(`Error running fff: ${error.message}`);
                  return;
                }
              });
            });
          });
        });
      });
    });
  });
});
