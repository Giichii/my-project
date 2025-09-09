// Define a TypeScript type for props
type GreetingProps = {
  name: string;
};

// A simple component using TypeScript
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}! 👋</h1>;
};

// Next.js page that uses the component
export default function About() {
  return (
    <main>
      <Greeting name="Ting Kung Ming" />
      <p>Welcome to my Next.js + TypeScript app 🚀</p>
    </main>
  );
}