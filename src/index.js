import { SkynetClient } from "skynet-js";

const client = new SkynetClient();

window.uploadSkyfile = async function (file, callback) {
  try {
    const skylink = await client.uploadFile(file);
    const directLink = '/' + skylink.replace('sia:', '') + '/';
    callback(directLink);
  } catch (error) {
    alert(error)
  }
}