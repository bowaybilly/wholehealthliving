# WholeHealth Living Rewrite

This repository is a migration scaffold for rewriting the public WholeHealth Living WordPress application with:

- `backend/WholeHealthLiving.Api`: ASP.NET Core Web API
- `frontend`: Next.js App Router frontend
- Playwright end-to-end tests

## Run Locally

Start the API:

```powershell
dotnet run --project .\backend\WholeHealthLiving.Api
```

Start the frontend:

```powershell
cd .\frontend
$env:NEXT_PUBLIC_API_BASE_URL='http://localhost:5223'
npm run dev
```

Run frontend checks:

```powershell
cd .\frontend
npm run lint
npm run build
npm run test:e2e
```

## Migration Notes

The current workspace did not contain the existing WordPress source or database. This scaffold recreates the public information architecture and practitioner search shape with seeded data. Next steps are to connect the API to the real provider data source, migrate legal/content pages from an approved CMS export, and add authentication/admin workflows if needed.
