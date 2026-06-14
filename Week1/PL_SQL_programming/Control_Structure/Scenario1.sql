/*
Scenario 1: The bank wants to apply a discount to loan interest rates for customers above 60 years old.

Question: Write a PL/SQL block that loops through all customers, checks their age, and if they are above 60, apply a 1% discount to their current loan interest rates.
*/

DECLARE
BEGIN
    FOR cust IN (
        SELECT CUSTOMER_ID
        FROM CUSTOMERS
        WHERE AGE > 60
    )
    LOOP
        UPDATE LOANS
        SET INTEREST_RATE = INTEREST_RATE - 1
        WHERE CUSTOMER_ID = cust.CUSTOMER_ID;
    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Interest rate discount applied.');
END;
/