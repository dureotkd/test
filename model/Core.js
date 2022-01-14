"use strict";
const { db } = require("../Core/database");

class Core {
  constructor(props) {}

  /**
   * * MAKE MYSQL INSERT 쿼리문
   */
  getInsertQuery({ table, data }) {
    const column = Object.keys(data);
    const values = Object.values(data);

    if (column.length !== values.length)
      return throwError("Error Object Key Value");

    const c = column.join(",");
    const v = values.join("','");

    return `INSERT INTO ${table}(${c}) VALUES ('${v}')`;
  }

  /**
   * * MAKE MYSQL DELETE 쿼리문
   */
  getDeleteQuery() {
    console.log(`getDeleteQuery`);
  }

  /**
   * * 쿼리 DB 실행 함수
   * * new Promise 객체로 callback 없이 리턴값 받기
   * * all : 배열 전체 row : 오브젝트
   * ! 생성자에 정의된 타입에 맞춰주세요
   * ? Promise 객체에 대해서 자세히 공부해보기
   * ? Callback 함수에 대해서 자세히 공부해보기
   */
  excute({ database, sql, type }) {
    return new Promise(function (resolve, reject) {
      db.getConnection(database, function (err, connection) {
        if (err) {
          console.log(JSON.stringify(err));
        } else {
          connection.query(sql, function (err, data, option) {
            switch (type) {
              case "all":
                resolve(data);

                break;
              case "row":
                resolve(data[0] || {});
                break;

              case "exec":
                resolve(data.insertId);

                break;
            }

            // When done with the connection, release it.
            connection.release();
          });
        }
      });
    });
  }
}

module.exports = Core;
