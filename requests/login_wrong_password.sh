curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"eva@email.com","password":"senhaerrada"}'


curl -X POST https://av-2-fullstack-postgres.vercel.app/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"eva@email.com","password":"senhaerrada"}'
