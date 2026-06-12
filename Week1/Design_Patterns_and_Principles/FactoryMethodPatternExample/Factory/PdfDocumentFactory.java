package Week1.Design_Patterns_and_Principles.FactoryMethodPatternExample.Factory;

import Week1.Design_Patterns_and_Principles.FactoryMethodPatternExample.Product.Document;
import Week1.Design_Patterns_and_Principles.FactoryMethodPatternExample.Product.PdfDocument;

public class PdfDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
}