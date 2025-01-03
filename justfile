# List available commands
default:
    @just --list

# Create a new blog post
new title:
    yarn newPost "{{title}}"

# Start development server
dev:
    vercel dev

# Build the site
build:
    yarn build

# Start production server
start:
    yarn start

# Lint the codebase
lint:
    yarn eslint --config eslint.config.mjs .

# Type checking
typecheck:
    yarn tsc --noEmit

# Combined development check
check: lint typecheck
