import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>React App - Home</title>
        <meta name="description" content="Welcome to my React application" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-secondary/30 p-6">
        <div className="text-center space-y-8 max-w-2xl animate-in fade-in duration-700">
          <h1 className="text-6xl font-bold text-foreground tracking-tight">
            Hello World + React
          </h1>
        </div>
      </div>
    </>
  );
};

export default Index;
