package Week1.Design_Patterns_and_Principles.FactoryMethodPatternExample.Factory;

import Week1.Design_Patterns_and_Principles.FactoryMethodPatternExample.Product.Document;
import Week1.Design_Patterns_and_Principles.FactoryMethodPatternExample.Product.WordDocument;

public class WordDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}