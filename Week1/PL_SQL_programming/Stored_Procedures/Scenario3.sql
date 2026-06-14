/*
Scenario 3: Customers should be able to transfer funds between their accounts.
Question: Write a stored procedure TransferFunds that transfers a specified amount from one account to another, checking that the source account has sufficient balance before making the transfer.
*/

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
)
AS
    v_balance NUMBER;
BEGIN

    SELECT BALANCE
    INTO v_balance
    FROM ACCOUNTS
    WHERE ACCOUNT_ID = p_from_account;

    IF v_balance >= p_amount THEN

        UPDATE ACCOUNTS
        SET BALANCE = BALANCE - p_amount
        WHERE ACCOUNT_ID = p_from_account;

        UPDATE ACCOUNTS
        SET BALANCE = BALANCE + p_amount
        WHERE ACCOUNT_ID = p_to_account;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Fund transfer successful.');

    ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient balance.');

    END IF;

END;
/


--Execute
BEGIN
    TransferFunds(101,102,5000);
END;
/