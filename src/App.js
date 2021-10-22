import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/addproduct";
import AddVideo from "./components/addVideo";
import BrowseVideos from "./components/browseVideos";
import EventHandling from "./components/eventHandling";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Login from "./components/login";
import ProductDetails from "./components/productdetails";
import ProductList from "./components/productlist";
import Register from "./components/register";
import Signup from "./components/signup";
import { ProductProvider } from "./productContext";

function App() {
  const [lightTheme, setLightTheme] = useState(true);

  const theme = createTheme({
    palette: {
      mode: lightTheme ? "light" : "dark",
    },
  });

  const myTheme = createTheme({
    palette: {
      mode: lightTheme ? "light" : "dark",
      secondary: {
        main: "#00e9b3",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={myTheme}>
        <ProductProvider>
          <BrowserRouter>
            <Header
              lightTheme={lightTheme}
              setLightTheme={setLightTheme}
            ></Header>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/productdetails/:id" component={ProductDetails} />
            <Route path="/productlist" component={ProductList} />
            <Route path="/events" component={EventHandling} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/addproduct" component={AddProduct} />
            <Route path="/addvideo" component={AddVideo} />
            <Route path="/browse" component={BrowseVideos} />
          </BrowserRouter>
        </ProductProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
