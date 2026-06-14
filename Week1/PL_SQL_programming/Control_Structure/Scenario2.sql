/*
Scenario 2: A customer can be promoted to VIP status based on their balance.
Question: Write a PL/SQL block that iterates through all customers and sets a flag IsVIP to TRUE for those with a balance over $10,000.

*/

DECLARE
BEGIN
    FOR cust IN (
        SELECT CUSTOMER_ID
        FROM CUSTOMERS
        WHERE BALANCE > 10000
    )
    LOOP
        UPDATE CUSTOMERS
        SET ISVIP = 'TRUE'
        WHERE CUSTOMER_ID = cust.CUSTOMER_ID;
    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('VIP status updated.');
END;
/