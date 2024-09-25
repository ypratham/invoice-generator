# Invoice Generator

Invoice Generator is an open-source web application that allows users to create, customize, and download professional invoices. Built with Next.js for speed and scalability, this project is perfect for small businesses and freelancers needing an easy-to-use invoicing tool.


## Features

- **Dynamic Invoice Creation**: Fill in your details, and the invoice updates in real time.
- **Customizable Templates**: Choose from various invoice templates.
- **Download as PDF**: Easily download your invoices for record-keeping or sending to clients.
- **Responsive Design**: Fully responsive and works on all devices.
- **UI Components**: Built using the **shadcn** component library for consistent and polished UI.
- **State Management**: Uses **Zustand** to manage global application state efficiently.
- **Forms**: Uses **React Hook form** to manage the forms efficiently.

## Technologies Used

- **Frontend**: [Next.js](https://nextjs.org/)
- **Package Manager**: [Bun](https://bun.sh/)
- **UI Library**: [shadcn](https://ui.shadcn.dev/) for highly reusable components.
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) for managing application state.
- **Forms**: [React Hook Form](https://react-hook-form.com/) for forms.
- **Styling**: Tailwind CSS for modern and responsive designs.
- **PDF Generation**: ReactPDF for PDF Generation

## Getting Started

Follow the steps below to get the project running on your local machine:

### Prerequisites

Ensure you have the following installed:

- [Bun](https://bun.sh/) - The ultra-fast JavaScript runtime and package manager.
- Node.js (if Bun isn't installed, it can act as an alternative for certain features)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ypratham/invoice-generator.git
   cd invoice-generator
   ```

2. **Install dependencies using Bun**:
   ```bash
   bun install
   ```

3. **Run the development server**:
   ```bash
   bun run dev
   ```

4. **Open the app**: 
   Visit [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

To build the project for production, run:

```bash
bun run build
```

This will create an optimized production build of your application.

### Running in Production

After building the app, start the server in production mode:

```bash
bun run start
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on how to get started.

To contribute:

1. Fork the project.
2. Create a new branch with your feature or bugfix: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request on GitHub.

## Issues

Have a bug or a feature request? Please check the existing [issues](https://github.com/ypratham/invoice-generator/issues) before opening a new one.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- Thanks to the contributors and the open-source community for their help and feedback.