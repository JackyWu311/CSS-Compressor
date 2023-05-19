// 壓縮 CSS 函式
function compressCSS(css) {
  // 移除註解
  css = css.replace(/\/\*(\n|\r|.)*?\*\//g, '');
  
  // 移除空白和縮排
  css = css.replace(/\s+/g, ' ').replace(/\s*({|}|:|;|,)\s*/g, '$1');
  
  return css;
}

// 監聽壓縮按鈕點擊事件
document.getElementById('compressBtn').addEventListener('click', function() {
  // 取得輸入框內容
  var input = document.getElementById('input').value;
  
  // 壓縮 CSS
  var compressedCSS = compressCSS(input);
  
  // 更新輸出框
  document.getElementById('output').value = compressedCSS;
  
  // 計算原始大小和壓縮後大小
  var originalSize = input.length;
  var compressedSize = compressedCSS.length;
  
  // 計算節省百分比
  var savingsPercentage = ((originalSize - compressedSize) / originalSize * 100).toFixed(2);
  
  // 顯示原始大小、壓縮後大小和節省百分比資訊
  var infoContainer = document.getElementById('infoContainer');
  infoContainer.innerHTML = `
    <p>原始大小: <span>${originalSize} bytes</span></p>
    <p>壓縮後大小: <span>${compressedSize} bytes</span></p>
    <p>節省了 <span>${savingsPercentage}%</span> 的大小</p>
  `;
  
  // 顯示複製按鈕
  document.getElementById('copyBtn').style.display = 'inline';
});

// 監聽複製按鈕
document.getElementById('copyBtn').addEventListener('click', function() {
  // 將壓縮後的 CSS 內容複製到剪貼簿
  var output = document.getElementById('output');
  output.select();
  document.execCommand('copy');
  alert('已複製壓縮後的 CSS 內容到剪貼簿');
  });
  
