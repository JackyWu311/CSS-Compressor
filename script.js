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
  
  // 計算原始大小和壓縮後大小
  var originalSize = input.length;
  var compressedSize = compressedCSS.length;
  
  // 計算節省百分比
  var savingsPercentage = ((originalSize - compressedSize) / originalSize * 100).toFixed(2);
  
  // 更新輸出框和相關資訊
  document.getElementById('output').value = compressedCSS;
  document.getElementById('originalSize').textContent = originalSize;
  document.getElementById('compressedSize').textContent = compressedSize;
  document.getElementById('savingsPercentage').textContent = savingsPercentage;
  
  // 顯示複製按鈕
  document.getElementById('copyBtn').style.display = 'inline';
});

// 監聽複製按鈕
