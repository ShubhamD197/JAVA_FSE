package Week1.Design_Patterns_and_Principles.SingletonPatternExample;

public class Logger {

    private static Logger instance;

    private Logger() {
        // Private constructor prevents object creation from outside
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("LOG- " + message);
    }
}
