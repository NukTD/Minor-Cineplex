import Layout from "@/Components/layout";
import "@/styles/globals.css";
import { Provider } from "@/components/ui/provider";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
