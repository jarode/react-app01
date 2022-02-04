import { useParams } from "react-router-dom";


export default function User() {
  let params = useParams();
  let id = params.id
  //let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>ID {id}</h2>
      <p>
       
      </p>
      <p></p>
    </main>
  );
}

