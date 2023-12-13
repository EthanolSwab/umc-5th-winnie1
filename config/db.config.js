// config/db.config.js : database 연결할 수 있도록 하는 파일은 config 폴더에 작성
// 연결을 단일 연결 방식이 아닌 Connection Pool을 사용할 것임
// DB 과부하를 방지하고 유동적으로 Connection을 관리하기 위해 Pool을 사용

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost', //mysql의 hostname
    user: process.env.DB_USER || 'root', //user 이름
    port: process.env.DB_PORT || 3306, //포트번호
    database: process.env.DB_TABLE || 'umc_wb', //데이터베이스 이름
    password: process.env.DB_PASSWORD || 'password', //비밀번호
    waitForConnections: true,
    //Pool에 획득할 수 있는 connection이 없을 때,
    //true 면 요청을 queue에 넣고, connection을 사용할 수 있게 되면 요청을 실행하며,
    //false이면 즉시 오류를 내보내고 다시 요청
    connectionLimit: 10, //몇 개의 커넥션을 가지게 할 것인지
    queueLimit: 0, //getConnection에서 오류가 발생하기 전에 pool에 대기할 요청의 개수 한도
});