curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{"name":"Eva","email":"eva@email.com","password":"123456"}'

curl -X POST https://av-2-fullstack-postgres.vercel.app/api/auth/register \
-H "Content-Type: application/json" \
-d '{"name":"Eva","email":"eva@email.com","password":"123456"}'
