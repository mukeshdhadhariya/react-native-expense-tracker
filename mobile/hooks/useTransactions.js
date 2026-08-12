import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Alert } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

import { API_URL } from "../constants/api";

const INITIAL_SUMMARY = {
  balance: 0,
  income: 0,
  expenses: 0,
};

export const useTransactions = (userId) => {
  const { getToken } = useAuth();

  const [transactions, setTransactions] =
    useState([]);

  const [summary, setSummary] =
    useState(INITIAL_SUMMARY);

  const [isLoading, setIsLoading] =
    useState(false);

  const [error, setError] =
    useState(null);

  // --------------------------------------------------
  // KEEP LATEST AUTH FUNCTION WITHOUT CHANGING
  // loadData IDENTITY
  // --------------------------------------------------

  const getTokenRef =
    useRef(getToken);

  useEffect(() => {
    getTokenRef.current = getToken;
  }, [getToken]);

  // --------------------------------------------------
  // USER ID REF
  // --------------------------------------------------

  const userIdRef =
    useRef(userId);

  useEffect(() => {
    userIdRef.current = userId;
  }, [userId]);

  // --------------------------------------------------
  // PREVENT DUPLICATE REQUESTS
  // --------------------------------------------------

  const requestRef =
    useRef(null);

  // --------------------------------------------------
  // LOAD DATA
  // --------------------------------------------------

  const loadData = useCallback(async () => {
    const currentUserId =
      userIdRef.current;

    if (!currentUserId) {
      console.log(
        "[Transactions] No user ID. Skipping."
      );

      return false;
    }

    // ----------------------------------------------
    // IMPORTANT
    // ----------------------------------------------

    if (requestRef.current) {
      console.log(
        "[Transactions] Request already running. Skipping."
      );

      return requestRef.current;
    }

    const request =
      (async () => {
        setIsLoading(true);
        setError(null);

        try {
          console.log(
            "================================"
          );

          console.log(
            "[Transactions] START LOAD"
          );

          console.log(
            "[Transactions] User:",
            currentUserId
          );

          console.log(
            "[Transactions] API:",
            API_URL
          );

          console.log(
            "================================"
          );

          // ----------------------------------------
          // TOKEN
          // ----------------------------------------

          const token =
            await getTokenRef.current();

          if (!token) {
            throw new Error(
              "Authentication token is not available."
            );
          }

          const headers = {
            Accept:
              "application/json",

            Authorization:
              `Bearer ${token}`,
          };

          // ----------------------------------------
          // URLS
          // ----------------------------------------

          const transactionsUrl =
            `${API_URL}/transactions/${encodeURIComponent(
              currentUserId
            )}`;

          const summaryUrl =
            `${API_URL}/transactions/summary/${encodeURIComponent(
              currentUserId
            )}`;

          console.log(
            "[Transactions] GET:",
            transactionsUrl
          );

          console.log(
            "[Summary] GET:",
            summaryUrl
          );

          // ----------------------------------------
          // REQUESTS
          // ----------------------------------------

          const [
            transactionsResponse,
            summaryResponse,
          ] = await Promise.all([
            fetch(
              transactionsUrl,
              {
                method: "GET",
                headers,
              }
            ),

            fetch(
              summaryUrl,
              {
                method: "GET",
                headers,
              }
            ),
          ]);

          // ----------------------------------------
          // TRANSACTIONS
          // ----------------------------------------

          const transactionsText =
            await transactionsResponse.text();

          let transactionsData;

          try {
            transactionsData =
              transactionsText
                ? JSON.parse(
                    transactionsText
                  )
                : [];
          } catch {
            throw new Error(
              "Transactions API returned invalid JSON."
            );
          }

          console.log(
            "[Transactions] Status:",
            transactionsResponse.status
          );

          if (
            !transactionsResponse.ok
          ) {
            throw new Error(
              transactionsData?.message ||
                transactionsData?.error ||
                `Transactions request failed (${transactionsResponse.status})`
            );
          }

          // ----------------------------------------
          // SUMMARY
          // ----------------------------------------

          const summaryText =
            await summaryResponse.text();

          let summaryData;

          try {
            summaryData =
              summaryText
                ? JSON.parse(
                    summaryText
                  )
                : {};
          } catch {
            throw new Error(
              "Summary API returned invalid JSON."
            );
          }

          console.log(
            "[Summary] Status:",
            summaryResponse.status
          );

          if (
            !summaryResponse.ok
          ) {
            throw new Error(
              summaryData?.message ||
                summaryData?.error ||
                `Summary request failed (${summaryResponse.status})`
            );
          }

          // ----------------------------------------
          // NORMALIZE TRANSACTIONS
          // ----------------------------------------

          const normalizedTransactions =
            Array.isArray(
              transactionsData
            )
              ? transactionsData
              : Array.isArray(
                  transactionsData?.transactions
                )
              ? transactionsData.transactions
              : [];

          // ----------------------------------------
          // NORMALIZE SUMMARY
          // ----------------------------------------

          const normalizedSummary = {
            balance:
              Number(
                summaryData?.balance
              ) || 0,

            income:
              Number(
                summaryData?.income
              ) || 0,

            expenses:
              Number(
                summaryData?.expenses
              ) || 0,
          };

          // ----------------------------------------
          // UPDATE STATE
          // ----------------------------------------

          setTransactions(
            normalizedTransactions
          );

          setSummary(
            normalizedSummary
          );

          setError(null);

          console.log(
            "[Transactions] Loaded:",
            normalizedTransactions.length
          );

          console.log(
            "[Transactions] LOAD COMPLETE"
          );

          return true;
        } catch (err) {
          console.error(
            "[Transactions] LOAD ERROR:",
            err
          );

          const message =
            err?.message ||
            "Unable to load transactions.";

          setError(message);

          return false;
        } finally {
          setIsLoading(false);

          // ----------------------------------------
          // VERY IMPORTANT
          // ----------------------------------------

          requestRef.current =
            null;

          console.log(
            "[Transactions] REQUEST FINISHED"
          );
        }
      })();

    requestRef.current =
      request;

    return request;
  }, []);

  // --------------------------------------------------
  // DELETE
  // --------------------------------------------------

  const deleteTransaction =
    useCallback(
      async (id) => {
        if (!id) {
          Alert.alert(
            "Error",
            "Invalid transaction."
          );

          return false;
        }

        try {
          const token =
            await getTokenRef.current();

          if (!token) {
            throw new Error(
              "Authentication token is not available."
            );
          }

          const url =
            `${API_URL}/transactions/${encodeURIComponent(
              id
            )}`;

          console.log(
            "[Delete] DELETE:",
            url
          );

          const response =
            await fetch(url, {
              method: "DELETE",

              headers: {
                Accept:
                  "application/json",

                Authorization:
                  `Bearer ${token}`,
              },
            });

          const text =
            await response.text();

          let data = {};

          try {
            data = text
              ? JSON.parse(text)
              : {};
          } catch {
            // Ignore non JSON response.
          }

          if (!response.ok) {
            throw new Error(
              data?.message ||
                data?.error ||
                `Delete failed (${response.status})`
            );
          }

          // Refresh once.
          await loadData();

          Alert.alert(
            "Success",
            "Transaction deleted successfully."
          );

          return true;
        } catch (err) {
          console.error(
            "[Delete] Failed:",
            err
          );

          Alert.alert(
            "Error",
            err?.message ||
              "Failed to delete transaction."
          );

          return false;
        }
      },
      [loadData]
    );

  return {
    transactions,
    summary,
    isLoading,
    error,
    loadData,
    deleteTransaction,
  };
};