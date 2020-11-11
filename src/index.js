import { SkynetClient } from "skynet-js";

const client = new SkynetClient();

window.createWebPage = function (file) {
  try {
    (async () => {
      const skylink = await client.uploadFile(file);
      const directLink = '/' + skylink.replace('sia:', '') + '/';
      document.getElementById('link').href = directLink;
    })()
  } catch (error) {
    alert(error)
  }
}