import express from "express";
// 있다가 root경로를 지정해주기 위한 path 모듈
import path from "path";
// console.log("빌드 경로 입니다"+path.join(__dirname, 'build'))
const app = express();
// 미들웨어 -> root
app.use(express.static(__dirname));
// dist 폴더 미들웨어
app.use(express.static(path.join(__dirname, 'dist')));
// 최초 페이지 불러오기
app.get('/', (req, res)=> {
  res.sendFile('index.html', {root :__dirname})
})
// 서버 실행
app.listen(8080, () => {
  console.log("서버가 실행 됐습니다.");
})