curl -X GET http://localhost:3000/api/auth/protected  \
-H "Authorization: Bearer tokeninvalido123"


curl -X GET https://av-2-fullstack-postgres.vercel.app/api/auth/protected \
-H "Authorization: Bearer tokeninvalido123"
