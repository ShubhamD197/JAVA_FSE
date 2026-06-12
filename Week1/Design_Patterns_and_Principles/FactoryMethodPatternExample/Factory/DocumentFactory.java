package Week1.Design_Patterns_and_Principles.FactoryMethodPatternExample.Factory;

import Week1.Design_Patterns_and_Principles.FactoryMethodPatternExample.Product.Document;

public abstract class DocumentFactory {

    public abstract Document createDocument();
}
