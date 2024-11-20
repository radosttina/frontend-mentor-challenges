import "./App.css";
import Counter from "./components/Counter";
import Layout from "./components/Layout";

function App() {
	return (
		<Layout>
			<Counter countdownTimeMs={4650} />
		</Layout>
	);
}

export default App;
