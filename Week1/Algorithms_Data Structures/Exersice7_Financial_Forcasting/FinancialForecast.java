public class FinancialForecast {

    public static double futureValueUtil(double currentValue, double growthRate, int years) {

        if (years == 0) {
            return currentValue;
        }

        return (1 + growthRate) * futureValueUtil(currentValue, growthRate, years - 1);
    }

    public static void main(String[] args) {

        double principalValue = 10000;
        double growthRate = 0.10;
        int years = 3;

        double futureValue = futureValueUtil(principalValue, growthRate, years);

        System.out.println("Future Value = " + futureValue);
    }
}