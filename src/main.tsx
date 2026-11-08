import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

class AppErrorBoundary extends React.Component<{ children: React.ReactNode }, { error: string | null }> {
  state = { error: null as string | null };

  static getDerivedStateFromError(error: unknown) {
    return { error: error instanceof Error ? error.message : String(error) };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    console.error('BibleArena startup/render error:', error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ minHeight: '100vh', padding: '32px 20px', background: '#F3EBDD', color: '#171B24', fontFamily: 'Arial, sans-serif' }}>
          <div style={{ maxWidth: 680, margin: '10vh auto', padding: 24, borderRadius: 20, background: '#fff', border: '1px solid #ddd' }}>
            <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>BibleArena could not load this screen</h1>
            <p style={{ marginBottom: 12 }}>We caught an application error so the page does not stay blank.</p>
            <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', padding: 14, borderRadius: 10, background: '#f5f5f5', fontSize: 13 }}>{this.state.error}</pre>
            <button onClick={() => window.location.reload()} style={{ marginTop: 16, padding: '11px 18px', borderRadius: 10, background: '#171B24', color: '#fff', fontWeight: 700 }}>Reload BibleArena</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('BibleArena root element #root was not found.');

createRoot(rootElement).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </AppErrorBoundary>
  </React.StrictMode>
);
