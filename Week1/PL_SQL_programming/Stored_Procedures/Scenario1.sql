/*
Scenario 1: The bank needs to process monthly interest for all savings accounts.
Question: Write a stored procedure ProcessMonthlyInterest that calculates and updates the balance of all savings accounts by applying an interest rate of 1% to the current balance.
*/

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
    UPDATE ACCOUNTS
    SET BALANCE = BALANCE + (BALANCE * 0.01)
    WHERE ACCOUNT_TYPE = 'Savings';

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Monthly interest processed successfully.');
END;
/

--Execute
BEGIN
    ProcessMonthlyInterest;
END;
/