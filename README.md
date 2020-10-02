* Bản mẫu này giúp developer nhanh chóng xây dựng các API RESTful API bằng ExpressJS và DynamoDB.
* Nó đi kèm với các tính năng tích hợp xác thực người dùng bằng JWT.

## Một số package quan trọng
*	Biến môi trường: Sử dụng [dotenv](https://www.npmjs.com/package/dotenv) và [cross-env](https://www.npmjs.com/package/cross-env)
*	CORS (Cross-Origin Resource-Sharing): Sử dụng [cors](https://www.npmjs.com/package/cors) 
*	Xác thực người dùng: Sử dụng [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
*	Thao tác với kiểu dữ liệu thời gian: Sử dụng [moment](https://momentjs.com) và [moment-timezone](https://momentjs.com/timezone/)
*	Static analysis code: Sử dụng [ESLint](https://eslint.org) và [Pretier](https://prettier.io/)

## Cách sử dụng
### Cài đặt
1. Clone project từ github:
* Sử dụng SSH: **git clone git@github.com:minhduc1612112/ExpressJS-DynamoDB-Authentication-Boilerplate.git**
* Sử dụng HTTPS: **git clone https://github.com/minhduc1612112/ExpressJS-DynamoDB-Authentication-Boilerplate.git**
2. Cài đặt các dependencies: **npm install**
### Các script khởi chạy
*	Khởi chạy dưới local: npm start
*	Khởi chạy project với môi trường staging: npm run staging
*	Khởi chạy project với môi trường production: npm run production

## Cấu trúc project
