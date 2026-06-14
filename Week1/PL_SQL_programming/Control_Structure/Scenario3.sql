/*
Scenario 3: The bank wants to send reminders to customers whose loans are due within the next 30 days.
Question: Write a PL/SQL block that fetches all loans due in the next 30 days and prints a reminder message for each customer.
*/


DECLARE
BEGIN
    FOR loan_rec IN (
        SELECT C.NAME,
               L.LOAN_ID,
               L.DUE_DATE
        FROM CUSTOMERS C
        JOIN LOANS L
        ON C.CUSTOMER_ID = L.CUSTOMER_ID
        WHERE L.DUE_DATE BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan '
            || loan_rec.LOAN_ID
            || ' for '
            || loan_rec.NAME
            || ' is due on '
            || loan_rec.DUE_DATE
        );
    END LOOP;
END;
/