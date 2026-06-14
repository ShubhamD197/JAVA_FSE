/*
Scenario 2: The bank wants to implement a bonus scheme for employees based on their performance.
Question: Write a stored procedure UpdateEmployeeBonus that updates the salary of employees in a given department by adding a bonus percentage passed as a parameter.
*/

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus_percent IN NUMBER
)
AS
BEGIN
    UPDATE EMPLOYEES
    SET SALARY = SALARY + (SALARY * p_bonus_percent / 100)
    WHERE DEPARTMENT = p_department;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Bonus updated successfully.');
END;
/

--Execute
BEGIN
    UpdateEmployeeBonus('IT',10);
END;
/