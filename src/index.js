import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Users from "./routes/users";
import User from "./routes/user";
import Cars from "./routes/cars";
import Car from "./routes/car";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="users" element={<Users />} >
          <Route path=":id" element={<User />} />
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an user</p>
              </main>
            }
          />
        </Route> 
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        <Route path="cars" element={<Cars />} >
          <Route path=":id" element={<Car />} />
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select Car</p>
              </main>
            }
          />
        </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);