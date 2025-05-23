curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d 'nome=Eva&email=eva@email.com&senha=123456'


curl -X POST https://av-2-fullstack-postgres.vercel.app/api/auth/register \
-H "Content-Type: application/json" \
-d 'nome=Eva&email=eva@email.com&senha=123456'
