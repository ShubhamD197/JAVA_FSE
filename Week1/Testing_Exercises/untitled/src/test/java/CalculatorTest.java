import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {
    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup executed");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown executed");
    }
    @Test
    public void testAdd() {
        calculator = new Calculator();

        int result = calculator.add(5, 3);

        assertEquals(8, result);
    }

    @Test
    public void testSubtract() {
        calculator = new Calculator();

        int result = calculator.subtract(5, 3);

        assertEquals(2, result);
    }
}