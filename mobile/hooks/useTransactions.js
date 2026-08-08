import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { API_URL } from "../constants/api";

export const useTransactions = (userId) => {
  const { getToken } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  // Get Clerk authentication headers
  const getAuthHeaders = useCallback(async () => {
    const token = await getToken();

    if (!token) {
      throw new Error("Authentication token not available");
    }

    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }, [getToken]);

  // Fetch transactions
  const fetchTransactions = useCallback(async () => {
    try {
      const headers = await getAuthHeaders();

      const response = await fetch(
        `${API_URL}/transactions/${userId}`,
        {
          method: "GET",
          headers,
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        throw new Error(
          errorData.message ||
            errorData.error ||
            "Failed to fetch transactions"
        );
      }

      const data = await response.json();

      setTransactions(data);
    } catch (error) {
      console.error(
        "Error fetching transactions:",
        error
      );
    }
  }, [userId, getAuthHeaders]);

  // Fetch summary
  const fetchSummary = useCallback(async () => {
    try {
      const headers = await getAuthHeaders();

      const response = await fetch(
        `${API_URL}/transactions/summary/${userId}`,
        {
          method: "GET",
          headers,
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        throw new Error(
          errorData.message ||
            errorData.error ||
            "Failed to fetch summary"
        );
      }

      const data = await response.json();

      setSummary(data);
    } catch (error) {
      console.error(
        "Error fetching summary:",
        error
      );
    }
  }, [userId, getAuthHeaders]);

  // Load transactions + summary in parallel
  const loadData = useCallback(async () => {
    if (!userId) return;

    setIsLoading(true);

    try {
      await Promise.all([
        fetchTransactions(),
        fetchSummary(),
      ]);
    } catch (error) {
      console.error(
        "Error loading data:",
        error
      );
    } finally {
      setIsLoading(false);
    }
  }, [
    userId,
    fetchTransactions,
    fetchSummary,
  ]);

  // Delete transaction
  const deleteTransaction = useCallback(
    async (id) => {
      try {
        const headers = await getAuthHeaders();

        const response = await fetch(
          `${API_URL}/transactions/${id}`,
          {
            method: "DELETE",
            headers,
          }
        );

        if (!response.ok) {
          const errorData =
            await response.json().catch(() => ({}));

          throw new Error(
            errorData.message ||
              errorData.error ||
              "Failed to delete transaction"
          );
        }

        // Refresh data after deletion
        await loadData();

        Alert.alert(
          "Success",
          "Transaction deleted successfully"
        );
      } catch (error) {
        console.error(
          "Error deleting transaction:",
          error
        );

        Alert.alert(
          "Error",
          error.message ||
            "Failed to delete transaction"
        );
      }
    },
    [getAuthHeaders, loadData]
  );

  return {
    transactions,
    summary,
    isLoading,
    loadData,
    deleteTransaction,
  };
};