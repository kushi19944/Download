import RPA from 'ts-rpa';

async function Start() {
  // get() の中にURLを入れる
  await RPA.WebBrowser.get('http://example.selenium.jp/reserveApp/');
  // 3000で、3秒待機する
  await RPA.sleep(3000);

  // "人数"の入力欄を取得する
  const HeadCountInput = await RPA.WebBrowser.findElementById('headcount');
  // "人数"の入力欄に文字が入っているので消す
  await HeadCountInput.clear();
  await RPA.sleep(1000);
  // "人数"の入力欄に "2" を入力
  await RPA.WebBrowser.sendKeys(HeadCountInput, ['2']);
  await RPA.sleep(1000);

  // "お名前"の入力欄を取得する
  const NameInput = await RPA.WebBrowser.findElementById('guestname');
  // "お名前"の入力欄に "田中" を入力
  await RPA.WebBrowser.sendKeys(NameInput, ['田中']);
  await RPA.sleep(1000);

  // "次へ"のボタンを押す
  const NextButton = await RPA.WebBrowser.findElementById('goto_next');
  await RPA.WebBrowser.mouseClick(NextButton);

  // ブラウザを閉じる
  await RPA.sleep(3000);
  await RPA.WebBrowser.quit();
}

Start();
