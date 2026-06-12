package Week1.Design_Patterns_and_Principles.FactoryMethodPatternExample.Product;

public class ExcelDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening Excel Document");
    }
}