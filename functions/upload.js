const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
/*    const formData = JSON.parse(event.body);
    console.log(formData);

    // ファイルのアップロード処理
    const file = formData.fileName; // 送信されたファイル名
    const fileName = `${Date.now()}-${file}`;
    const filePath = path.join(__dirname, 'images', fileName);
console.log(filePath);
    // 画像をimagesディレクトリに保存
    fs.writeFileSync(filePath, Buffer.from(formData.image, 'base64'));

    // JSON形式でデータを保存（画像のパスも含む）
    const data = {
      station: formData.station,
      egg: formData.egg,
      rice: formData.rice,
      sauce: formData.sauce,
      imagePath: filePath, // 画像のパス
    };

    const dataPath = path.join(__dirname, 'data', 'omurice.json');
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
*/
    const fileName="fileName";
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'データと画像が正常に保存されました', imagePath: `/images/${fileName}` }),
    };
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'メソッドが許可されていません' }),
  };
};

