const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    const formData = JSON.parse(event.body);
    
    // JSON形式のデータを保存
    const dataPath = path.join(__dirname, 'data', 'omurice.json');
    const data = {
      station: formData.station,
      egg: formData.egg,
      rice: formData.rice,
      sauce: formData.sauce,
      imagePath: formData.imagePath,
    };
    
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'データが正常に保存されました' }),
    };
  }
  
  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'メソッドが許可されていません' }),
  };
};

