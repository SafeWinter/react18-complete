import Alert from "../components/Alert";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useAlert() {
  const [alert, setAlert] = useState(null);
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setAlert(location.state);
    }
  }, [ location ]);
  return alert ? <Alert {...alert} /> : null;
}
