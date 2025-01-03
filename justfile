# List available commands
default:
    @just --list

# Create a new blog post
new title:
    npm run newPost "{{title}}"

# Start development server
dev:
    vercel dev

# Build the site
build:
    npm run build

# Start production server
start:
    npm run start

# Lint the codebase
lint:
    eslint .

# Type checking
typecheck:
    tsc --noEmit

# Combined development check
check: lint typecheck
