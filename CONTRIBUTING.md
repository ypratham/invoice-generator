# Contributing to Invoice Generator

We welcome contributions to the Invoice Generator! Whether it's fixing bugs, adding new features, improving documentation, or helping with design, every bit of help is appreciated. This document outlines the guidelines for contributing to the project.

## How to Contribute

### 1. Fork the Repository

- First, create a fork of the project by clicking the "Fork" button on the top-right of the GitHub page.
- Clone the forked repository to your local machine:

```bash
git clone https://github.com/your-username/invoice-generator.git
cd invoice-generator
```

### 2. Set Up the Project

Ensure that you have Bun installed to manage the project. Run the following command to install the dependencies:

```bash
bun install
```

### 3. Create a Branch for Your Feature or Fix

Create a new branch for your changes:

```bash
git checkout -b feature/your-feature-name
```

Use a descriptive name for your branch to reflect the feature or fix you're working on.

### 4. Make Changes

- Use **shadcn** components and **Zustand** for state management where necessary.
- Follow the project’s coding conventions and ensure your code is clean and readable.
- Add or update tests where applicable.
  
### 5. Test Your Changes

Make sure your changes work as expected by running the project locally:

```bash
bun run dev
```

### 6. Commit Your Changes

Commit your changes using clear and concise commit messages. Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for consistency:

```bash
git commit -m "feat: add new invoice template"
```

### 7. Push the Branch

Push your branch to your forked repository:

```bash
git push origin feature/your-feature-name
```

### 8. Submit a Pull Request

- Go to the original repository: [Invoice Generator](https://github.com/ypratham/invoice-generator).
- Click the "New Pull Request" button.
- Select your branch and compare it to the `preview` branch of the original repository.
- Fill out the pull request template with details of the change you made.
- Wait for your PR to be reviewed and address any requested changes.

## Code Style Guidelines

- Use **Tailwind CSS** for styling to maintain consistency across the app.
- Keep your code clean and modular. Separate components logically.
- Use **Zustand** for managing the global state.
- Use **shadcn** for UI components to ensure consistency.

## Issues

If you encounter any issues while working on the project:

- First, check the [issue tracker](https://github.com/ypratham/invoice-generator/issues) to see if the issue already exists.
- If not, create a new issue and describe the problem in detail.

## Community

- Be respectful and considerate of others.
- Follow the project's [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Additional Resources

- [Bun Documentation](https://bun.sh/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn Documentation](https://ui.shadcn.dev/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)

---

Thank you for your contribution!

---