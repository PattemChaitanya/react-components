# Contributing to JSX to Web

We welcome contributions from the community! This document outlines the process for contributing to JSX to Web.

## Getting Started

1. **Fork the Repository**
   - Visit https://github.com/PattemChaitanya/react-components
   - Click the "Fork" button to create your own copy

2. **Clone Your Fork**
   ```sh
   git clone https://github.com/YourUsername/react-components.git
   cd react-components
   ```

3. **Install Dependencies**
   ```sh
   npm install
   ```

4. **Create a Branch**
   ```sh
   git checkout -b feature/my-new-feature
   ```

## Development Workflow

1. **Run Development Server**
   ```sh
   npm start
   ```
   This will start the development server at [http://localhost:3000](http://localhost:3000).

2. **Implement Your Changes**
   - Follow the [Style Guide](./style-guide.md)
   - Ensure your code follows the established patterns in the codebase
   - Add tests for new features when applicable

3. **Test Your Changes**
   ```sh
   npm test
   ```

4. **Create a Component Template**
   If you're adding a new component, you can use the template generator:
   ```sh
   npm run generate:template
   ```

## Pull Request Process

1. **Update Documentation**
   - Add or update documentation in the `docs` folder
   - Include usage examples for new components

2. **Commit Your Changes**
   ```sh
   git add .
   git commit -m "Add feature: description of changes"
   ```

3. **Push to Your Fork**
   ```sh
   git push origin feature/my-new-feature
   ```

4. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Provide a clear description of the changes
   - Reference any related issues

5. **Code Review**
   - Wait for maintainers to review your PR
   - Address any feedback or requested changes
   - Once approved, your PR will be merged

## Code Guidelines

### JavaScript/React Guidelines

- Use functional components with hooks instead of class components
- Keep components small and focused on a single responsibility
- Use PropTypes or TypeScript for prop validation
- Follow the established naming conventions

### CSS Guidelines

- Follow the [Style Guide](./style-guide.md) for CSS organization
- Use component-specific CSS files for component-specific styles
- Leverage common styles from index.css when possible
- Use meaningful class names that describe purpose

### Documentation Guidelines

- Document all props for new components
- Include usage examples
- Add comments for complex logic

## Creating New Components

When creating a new component:

1. Create a new directory in `src/pages/your-component-name`
2. Create the following files:
   - `your-component-name.js` - Component implementation
   - `your-component-name.css` - Component-specific styles
   - `your-component-nameData.js` - Data for the component example

3. Follow the established pattern from existing components
4. Add your component to `src/constants/sidebarConstants.js`

## Questions or Issues?

If you have any questions or issues, please create an issue in the repository or contact the maintainers. 