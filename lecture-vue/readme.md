1. nodeJS 설치 확인
   : node -v
2. npm 설치 확인
   : npm -v
3. lite-server 설치 
   : npm install -g lite-server
   -g 설치가 안되서 -dev--save로 설치(devDependencies)
4. eslint 설치
   : npm install eslint --save-dev
   : npm init @eslint/config
5. .eslintrc.js, .eslintignore 작성
6. package.json script에 lint 추가, 내용은 작업 환경에 따라 달라질 수 있음
   : "lint": "eslint --ext .js,.vue .",
   : "lint:fix": "eslint --fix --ext .js,.vue ."