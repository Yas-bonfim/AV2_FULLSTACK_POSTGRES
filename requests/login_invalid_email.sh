curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"evaemail.com","password":"123456"}'


curl -X POST https://av-2-fullstack-postgres.vercel.app/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"anaemail.com","password":"123456"}'
