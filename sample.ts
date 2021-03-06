import RPA from 'ts-rpa';

async function Start() {
  await RPA.WebBrowser.get('https://www.google.com/');
  const input = await RPA.WebBrowser.findElement('.gLFyf');
  await RPA.WebBrowser.sendKeys(input, ['RPA']);
  const element = await RPA.WebBrowser.findElement(
    '.FPdoLc > center:nth-child(1) > input:nth-child(2)'
  );
  await RPA.WebBrowser.mouseClick(element);
  await RPA.sleep(3000);
  await RPA.WebBrowser.takeScreenshot();
  await RPA.WebBrowser.quit();
}

Start();
