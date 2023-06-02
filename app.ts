import express from "express";
// 있다가 root경로를 지정해주기 위한 path 모듈
import path from "path";
console.log(__dirname)
const app = express();
// 미들웨어 -> root
app.use(express.static(__dirname));
// 최초 페이지 불러오기
app.get('/', (req, res)=> {
  // res.sendFile() bundle파일 불러오면 됨
})
// 서버 실행
app.listen(8080, (err : Error) => {
  if(err) {
    console.error("서버 실행에 실패했습니다",err);
  }
  console.log("서버가 실행 됐습니다.");
})