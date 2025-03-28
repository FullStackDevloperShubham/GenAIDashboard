# Gen AI Analytics Dashboard

A modern, interactive dashboard for natural language data querying and visualization built with React, Redux, and Tailwind CSS.

![Dashboard Preview](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000)

## 🚀 Features

- 💬 Natural language query input with AI-powered suggestions
- 📊 Interactive data visualization using Recharts
- 📝 Query history tracking
- 🔄 Real-time query processing simulation
- 📱 Fully responsive design
- ⚡ Modern and intuitive user interface

## 🛠️ Technology Stack

- **Frontend Framework:** React 18 with TypeScript
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Icons:** Lucide React
- **Build Tool:** Vite

## 📦 Dependencies

```json
{
  "dependencies": {
    "@reduxjs/toolkit": "^2.2.1",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-redux": "^9.1.0",
    "recharts": "^2.12.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── QueryInput.tsx   # Natural language query input
│   ├── QueryHistory.tsx # History of past queries
│   └── ResultsDisplay.tsx # Data visualization
├── store/               # Redux store setup
│   ├── store.ts        # Store configuration
│   └── querySlice.ts   # Query-related state management
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gen-ai-analytics-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🔄 Application Flow

1. **Query Input**
   - User enters a natural language query in the search bar
   - AI-powered suggestions appear as dropdown options
   - User can select a suggestion or submit their own query

2. **Query Processing**
   - Query is dispatched to Redux store
   - Loading state is displayed
   - Simulated processing occurs (1.5s delay)
   - Query is added to history

3. **Results Display**
   - Data is visualized using Recharts
   - Bar chart shows query results
   - Error states are handled gracefully

4. **Query History**
   - Previous queries are stored in Redux
   - History is displayed in sidebar
   - Queries are ordered chronologically

## 🎨 UI/UX Features

- **Modern Design:** Clean and professional interface using Tailwind CSS
- **Responsive Layout:** Adapts seamlessly to different screen sizes
- **Loading States:** Smooth loading animations using Lucide icons
- **Error Handling:** User-friendly error messages
- **Interactive Elements:** Hover states and transitions for better UX

## 🔐 State Management

Redux Toolkit is used for state management with the following structure:

```typescript
interface QueryState {
  currentQuery: string;      
  queryHistory: string[];   
  loading: boolean;        
  error: string | null;   
  results: any | null;      
}
```

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development

- ESLint configuration for code quality
- TypeScript for type safety
- Vite for fast development and building
- PostCSS and Autoprefixer for CSS processing

