curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{"name":"Eva","email":"eva@email.com","password":""}'


curl -X POST https://av-2-full-stack-inky.vercel.app/api/auth/register \
-H "Content-Type: application/json" \
-d '{"name":"Eva","email":"eva@email.com","password":""}'
