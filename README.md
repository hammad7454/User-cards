# SDLC F-D Coding Challenge - User Card React App

This project is a responsive React application that displays a team of users in beautiful cards. Each card shows user details and allows you to view more information in a dialog. The app uses [Create React App](https://github.com/facebook/create-react-app), [Material UI](https://mui.com/), and [React Query](https://tanstack.com/query/latest).

## Features

- Responsive grid layout (3 cards per row on desktop, 2 on tablet, 1 on mobile)
- Modern card design with hover effects and equal height/width
- "View More" button opens a dialog with detailed user info
- Data fetched from a mock API using React Query
- Clean, global CSS styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd challenge-one
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Project Structure

```
challenge-one/
├── src/
│   ├── components/
│   │   ├── UserCard.jsx
│   │   ├── UserDialog.jsx
│   ├── styles/
│   │   └── UserCard.css
│   └── App.js
├── public/
├── package.json
└── README.md
```

## Technologies Used

- React
- Material UI
- React Query
- Axios
- CSS Grid & Flexbox

## Customization

- To change the API endpoint, edit `fetchUsers` in `UserCard.jsx`.
- To adjust card styles, edit `src/styles/UserCard.css`.

## License

This project is for educational purposes.

---

**Made with ❤️ for the SDLC F-D Coding Challenge**
