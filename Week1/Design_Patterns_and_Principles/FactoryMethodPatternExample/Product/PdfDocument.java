package Week1.Design_Patterns_and_Principles.FactoryMethodPatternExample.Product;

public class PdfDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening PDF Document");
    }
}