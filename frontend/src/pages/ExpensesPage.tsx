import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ExpensesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/cash-book", { replace: true });
  }, [navigate]);

  return null;
};

export default ExpensesPage;
