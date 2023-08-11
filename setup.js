const { exec } = require('child_process');

const tools = ['httprobe', 'fff', 'httpx', 'assetfinder'];

console.log("Installing tools...");

tools.forEach(tool => {
  exec(`go get -u github.com/tomnomnom/${tool}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error installing ${tool}: ${error.message}`);
      return;
    }
    console.log(`${tool} has been successfully installed.`);
  });
});
