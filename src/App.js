import './App.css';
import './styles/main.css';
import AppRouter from './routes/appRouter/appRouter';
import Layout from './components/layout/Layout';
function App() {
  return (
    <Layout>
       <AppRouter />
    </Layout>
    
  );
}

export default  App;
