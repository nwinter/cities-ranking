# AI Agent Instructions for Cities Ranking

## Automated Workflow

After completing EVERY task, you MUST follow this workflow automatically:

1. **SAVE PROMPT**: Save the user's prompt to DESIGN_PROMPTS.md with timestamp
2. **Run Tests**: Execute `npm test`
3. **Build Check**: Run `npm run build`
4. **Type Check**: Run `npm run check`
5. **Commit Changes**: Create focused, descriptive commits
6. **Push to Origin**: Push changes to the remote repository

## Development Commands

- `npm run dev` - Start dev server (port 3333)
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run check` - Type checking

## Project Structure

- `/src/routes/` - SvelteKit pages
- `/src/lib/` - Shared components and utilities
- `/src/lib/data/` - City data and ranking logic
- `/tests/` - Test files

## Git Workflow

- Main branch: `master`
- Always run tests before committing
- Use descriptive commit messages

## Key Technologies

- SvelteKit 5 with TypeScript
- Tailwind CSS v4
- Vitest for testing
- Vercel for deployment
