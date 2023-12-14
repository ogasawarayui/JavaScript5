/*Q1 elseを使用する時の注意点
条件式の順序を間違えると思った通りの動きをしないことがある。
else文を加える場合は、最後に1つである
else文は省略しても構わない*/
/*Q2 JavaScriptで実装した時の確認ポイント
使っている変数が宣言できるか
型のチェック
エラーのチェック*/
/*Q3 数値型を比較してelseの処理に入る処理を作ってください。*/
let point = 5;
if (point >= 5) {
  console.log("High");
} else {
  console.log("Low");
}
/*Q4 文字列型を比較してelseの処理に入る処理を作ってください。*/
var str = '花子';

if ('太郎' === str) {
  console.log('あなたは太郎さんです！');
}
else {
  console.log('あなたは太郎さんではありません');
}
